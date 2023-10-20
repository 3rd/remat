import { execa } from "execa";

export const formatAtDate = (date: Date) => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${hours}:${minutes} ${year}-${month}-${day}`;
};

export const schedule = async (date: Date, command: string) => {
  const { stdout } = await execa("at", [formatAtDate(date)], { input: command });
  return stdout;
};
