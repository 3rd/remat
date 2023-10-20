export const parseArgs = (args: string[]) => {
  let when = args[0];
  let message = args.slice(1).join(" ");

  // special case with -- divider: rem tomorrow at noon -- go to the gym
  const dividerIndex = args.indexOf("--");
  if (dividerIndex !== -1) {
    when = args.slice(0, dividerIndex).join(" ");
    message = args.slice(dividerIndex + 1).join(" ");
  }

  return { when, message };
};
