import test from "ava";
import { formatAtDate } from "./atd";

test("formats dates to at format", (t) => {
  const cases = [
    //
    [new Date(2021, 7 - 1, 4, 18, 0), "18:00 2021-07-04"],
    [new Date(2021, 5 - 1, 3, 9, 0), "09:00 2021-05-03"],
  ] as const;
  for (const [when, expected] of cases) {
    const actual = formatAtDate(when);
    t.is(actual, expected);
  }
});
