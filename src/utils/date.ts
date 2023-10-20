import * as chrono from "chrono-node";

export const parseDate = (input: string, instant?: Date) => {
  let date = chrono.parseDate(input, instant, { forwardDate: true });

  if (!date) {
    // special case: "rem <hour> <message>"
    if (Number.isFinite(Number.parseInt(input))) {
      const hours = Number.parseInt(input);
      date = new Date(instant ?? Date.now());
      date.setHours(hours);
      date.setMinutes(0);
    }
    // special case: "rem :<minutes> <message>"
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
