import * as chrono from "chrono-node";

export const parseDate = (input: string, instant?: Date) => {
  let date = chrono.parseDate(input, instant, { forwardDate: true });

  if (!date) {
    // special case: "rem <in-x-minutes> <message>"
    if (Number.isFinite(Number.parseInt(input))) {
      const minutes = Number.parseInt(input);
      date = new Date(Number(new Date(instant ?? Date.now())) + minutes * 60 * 1000);
    }
    // special case: "rem :<at-x-minutes> <message>"
    else if (/^:\d+$/.exec(input)) {
      const minutes = Number.parseInt(input.slice(1));
      date = new Date(instant ?? Date.now());
      date.setMinutes(minutes);
    } else {
      throw new TypeError(`Invalid date: ${input}`);
    }
  }

  return date;
};
