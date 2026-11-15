/**
 * Repetitive-work cost estimate (HOMEPAGE_DESIGN_SPECIFICATION_v1.0 §6.4).
 *
 *   hours / week  = people × hours per person per week
 *   cost / week   = hours / week × hourly cost
 *   cost / month  = cost / week × 52 / 12
 *   cost / year   = cost / week × 52
 *
 * This is the cost of time spent on repetitive work - not a promised saving.
 */
export const WEEKS_PER_YEAR = 52;
export const MONTHS_PER_YEAR = 12;

export interface CalculatorInput {
  people: number;
  hoursPerPersonWeek: number;
  hourlyCost: number;
}

export interface CalculatorResult {
  hoursPerWeek: number;
  costPerMonth: number;
  costPerYear: number;
}

export function calculate({ people, hoursPerPersonWeek, hourlyCost }: CalculatorInput): CalculatorResult {
  const hoursPerWeek = people * hoursPerPersonWeek;
  const costPerWeek = hoursPerWeek * hourlyCost;
  return {
    hoursPerWeek,
    costPerMonth: (costPerWeek * WEEKS_PER_YEAR) / MONTHS_PER_YEAR,
    costPerYear: costPerWeek * WEEKS_PER_YEAR,
  };
}

export function formatters(locale: string, currency: string) {
  const number = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 });
  const money = new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 });
  return {
    number: (n: number) => number.format(Math.round(n)),
    money: (n: number) => money.format(Math.round(n)),
  };
}
