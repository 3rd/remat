import { cli as cleye } from "cleye";
import chalk from "chalk";
import packageJson from "../package.json";
import { schedule } from "./atd";
import { buildCommand } from "./libnotify";
import { parseDate } from "./utils/date";

const main = async () => {
  const argv = cleye({
    name: "remat",
    version: packageJson.version,
    parameters: ["<when>", "<what>"],
  });

  const when = parseDate(argv._.when);
  const command = buildCommand(argv._.what, {
    title: `Reminder for ${when.getHours()}:${when.getMinutes()}`,
  });

  const result = await schedule(when, command);
  console.log(chalk.green(result));
};

main();
