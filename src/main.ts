import { cli as cleye } from "cleye";
import chalk from "chalk";
import packageJson from "../package.json";
import { schedule } from "./atd";
import { buildCommand } from "./libnotify";
import { parseDate } from "./utils/date";
import { parseArgs } from "./utils/args";
import { formatTitle } from "./utils/format";

const main = async () => {
  const argv = cleye({
    name: "remat",
    version: packageJson.version,
    parameters: ["<when>", "<message...>"],
  });

  const args = [argv._.when, ...argv._.message];
  const afterSeparator = argv._["--"];
  if (afterSeparator.length > 0) {
    args.splice(args.length - afterSeparator.length, 0, "--");
  }

  const parsedArgs = parseArgs(args);
  const when = parseDate(parsedArgs.when);
  const command = buildCommand(parsedArgs.message, {
    title: formatTitle(when),
  });

  await schedule(when, command);
  console.log(chalk.green(`Scheduled`), `reminder for`, chalk.yellow(when.toLocaleString()));
};

main();
