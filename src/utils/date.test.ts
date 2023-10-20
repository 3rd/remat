import test from "ava";
import { parseDate } from "./date";

const instant = new Date(2020, 12 - 1, 20, 12, 30);

test("getAtDatetime resolves absolute time", (t) => {
  const cases = [
    //
    ["july 4th at 6pm", new Date(2021, 7 - 1, 4, 18, 0)],
    ["on 3rd of may at 12", new Date(2021, 5 - 1, 3, 12, 0)],
    ["May 3rd 2024 at 12", new Date(2024, 5 - 1, 3, 12, 0)],
  ] as const;
  for (const [when, expected] of cases) {
    const actual = parseDate(when, instant);
    t.deepEqual(actual, expected);
  }
});

test("getAtDatetime resolves relative time", (t) => {
  const cases = [
    // base
    ["18:00", new Date(2020, 12 - 1, 20, 18, 0)],
    ["in 1 hour", new Date(2020, 12 - 1, 20, 13, 30)],
    ["tomorrow at 9am", new Date(2020, 12 - 1, 21, 9, 0)],
    ["next friday at 9am", new Date(2020, 12 - 1, 25, 9, 0)],
    // special
    ["18", new Date(2020, 12 - 1, 20, 18, 0)],
    [":45", new Date(2020, 12 - 1, 20, 12, 45)],
  ] as const;
  for (const [when, expected] of cases) {
    const actual = parseDate(when, instant);
    t.deepEqual(actual, expected);
  }
});
