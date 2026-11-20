/**
 * Pricer demo - frontend-only visual simulation.
 * No network requests, no AI calls: it only switches between pre-rendered
 * scenario panes and plays a short sequence of illustrative states.
 *
 * Root element: [data-pricer-demo] with data-state = idle | running | done.
 * Scenarios are grouped by industry ([data-industry-input]); each industry has
 * its own list of processing steps ([data-steps-for]).
 */
const STEP_MS = 420;

export function initPricerDemo(root: HTMLElement): void {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const inputs = Array.from(root.querySelectorAll<HTMLInputElement>("[data-scenario-input]"));
  const panes = Array.from(root.querySelectorAll<HTMLElement>("[data-pane]"));
  const industryInputs = Array.from(root.querySelectorAll<HTMLInputElement>("[data-industry-input]"));
  const scenarioCards = Array.from(root.querySelectorAll<HTMLElement>("label[data-industry]"));
  const stepLists = Array.from(root.querySelectorAll<HTMLElement>("[data-steps-for]"));
  const allSteps = Array.from(root.querySelectorAll<HTMLElement>("[data-step]"));
  // Steps of the currently selected industry
  const currentSteps = () =>
    Array.from(
      (stepLists.find((l) => l.dataset.stepsFor === root.dataset.industry) ?? root).querySelectorAll<HTMLElement>(
        "[data-step]",
      ),
    );
  const generate = root.querySelector<HTMLButtonElement>("[data-generate]");
  const again = root.querySelector<HTMLButtonElement>("[data-again]");
  const status = root.querySelector<HTMLElement>("[data-status]");
  if (!generate || !again || !inputs.length) return;

  let run = 0; // cancels an in-flight sequence when the scenario changes

  const setState = (state: "idle" | "running" | "done") => {
    root.dataset.state = state;
    generate.hidden = state === "done";
    generate.disabled = state === "running";
    again.hidden = state !== "done";
    root.querySelector("[data-output]")?.setAttribute("aria-busy", String(state === "running"));
  };

  const showScenario = (id: string) => {
    root.dataset.scenario = id;
    panes.forEach((p) => p.classList.toggle("is-active", p.dataset.pane === id));
  };

  const resetSteps = () => allSteps.forEach((s) => s.classList.remove("is-active", "is-done"));

  const wait = (ms: number) => new Promise((r) => window.setTimeout(r, reduced ? 0 : ms));

  const play = async () => {
    const id = ++run;
    resetSteps();
    setState("running");
    if (status) status.textContent = root.dataset.labelRunning ?? "";
    for (const step of currentSteps()) {
      step.classList.add("is-active");
      await wait(STEP_MS);
      if (id !== run) return;
      step.classList.remove("is-active");
      step.classList.add("is-done");
    }
    await wait(180);
    if (id !== run) return;
    setState("done");
    if (status) status.textContent = root.dataset.labelDone ?? "";
  };

  inputs.forEach((input) =>
    input.addEventListener("change", () => {
      if (!input.checked) return;
      run++; // cancel any running sequence
      resetSteps();
      showScenario(input.value);
      setState("idle");
      if (status) status.textContent = "";
    }),
  );

  const showIndustry = (id: string) => {
    root.dataset.industry = id;
    stepLists.forEach((l) => l.classList.toggle("is-active", l.dataset.stepsFor === id));
    scenarioCards.forEach((card) => (card.hidden = card.dataset.industry !== id));
  };

  industryInputs.forEach((input) =>
    input.addEventListener("change", () => {
      if (!input.checked) return;
      showIndustry(input.value);
      // Select the industry's first scenario (reuses the scenario change logic)
      const firstOfIndustry = inputs.find((i) => i.closest<HTMLElement>("label[data-industry]")?.dataset.industry === input.value);
      if (firstOfIndustry && !firstOfIndustry.checked) {
        firstOfIndustry.checked = true;
        firstOfIndustry.dispatchEvent(new Event("change"));
      } else if (firstOfIndustry) {
        run++;
        resetSteps();
        showScenario(firstOfIndustry.value);
        setState("idle");
        if (status) status.textContent = "";
      }
    }),
  );

  generate.addEventListener("click", play);
  again.addEventListener("click", play);

  // Initial state (respects a browser-restored radio selection)
  const checked = inputs.find((i) => i.checked) ?? inputs[0];
  checked.checked = true;
  const industryOf = checked.closest<HTMLElement>("label[data-industry]")?.dataset.industry;
  if (industryOf) {
    industryInputs.forEach((i) => (i.checked = i.value === industryOf));
    showIndustry(industryOf);
  }
  showScenario(checked.value);
  setState("idle");
  root.setAttribute("data-ready", "");
}
