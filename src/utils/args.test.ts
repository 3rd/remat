import test from "ava";
import { parseArgs } from "./args";

test("parses default args (two)", (t) => {
  const actual = parseArgs(["tomorrow at noon", "go to the gym"]);
  t.deepEqual(actual, {
    when: "tomorrow at noon",
    message: "go to the gym",
  });
});

test("parses spread message", (t) => {
  const actual = parseArgs(["tomorrow at noon", "go", "to", "the", "gym"]);
  t.deepEqual(actual, {
    when: "tomorrow at noon",
    message: "go to the gym",
  });
});

test("parses spread message with -- divider", (t) => {
  const actual = parseArgs(["in", "one", "minute", "--", "prepare", "for", "work"]);
  t.deepEqual(actual, {
    when: "in one minute",
    message: "prepare for work",
  });
});
