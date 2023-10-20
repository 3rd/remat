import test from "ava";
import { buildCommand } from "./libnotify";

test("builds command with the default options", (t) => {
  const command = buildCommand("hello world");
  t.is(command, "notify-send --app-name 'remat' --urgency critical --expire-time 0 'remat' 'hello world'");
});

test("builds command with custom options", (t) => {
  const command = buildCommand("hello world", { appName: "test", urgency: "low", expireTime: 1000, title: "test" });
  t.is(command, "notify-send --app-name 'test' --urgency low --expire-time 1000 'test' 'hello world'");
});

test("escapes single quotes", (t) => {
  const command = buildCommand("hello 'world'");
  t.is(command, "notify-send --app-name 'remat' --urgency critical --expire-time 0 'remat' 'hello \\'world\\''");
});
