/**
 * Pricer demo — frontend-only visual simulation.
 * No network requests, no AI calls: it only switches between pre-rendered
 * scenario panes and plays a short sequence of illustrative states.
 *
 * Root element: [data-pricer-demo] with data-state = idle | running | done.
 */
const STEP_MS = 420;

export function initPricerDemo(root: HTMLElement): void {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const inputs = Array.from(root.querySelectorAll<HTMLInputElement>("[data-scenario-input]"));
  const panes = Array.from(root.querySelectorAll<HTMLElement>("[data-pane]"));
  const steps = Array.from(root.querySelectorAll<HTMLElement>("[data-step]"));
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

  const resetSteps = () => steps.forEach((s) => s.classList.remove("is-active", "is-done"));

  const wait = (ms: number) => new Promise((r) => window.setTimeout(r, reduced ? 0 : ms));

  const play = async () => {
    const id = ++run;
    resetSteps();
    setState("running");
    if (status) status.textContent = root.dataset.labelRunning ?? "";
    for (const step of steps) {
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

  generate.addEventListener("click", play);
  again.addEventListener("click", play);

  // Initial state (respects a browser-restored radio selection)
  const checked = inputs.find((i) => i.checked) ?? inputs[0];
  checked.checked = true;
  showScenario(checked.value);
  setState("idle");
  root.setAttribute("data-ready", "");
}
