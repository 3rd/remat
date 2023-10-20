# RemAt

Simple reminder scheduling tool that links [atd](https://linux.die.net/man/8/atd), [chrono](https://github.com/wanasit/chrono) and libnotify.

## Installation

```sh
# one of
pnpm install --global remat
yarn global add remat
npm install -g remat
```

## Usage

To schedule a reminder execute: `rem <when> <message>`
\
Use the regular `atd` commands to list (`atq`) and cancel (`atrm`) the scheduled jobs.

```sh
# specify when to deliver the reminder using natural language
rem 14:52 "hello there"
rem "tomorrow at 9:00"
rem "4th of july at noon"
rem "next friday at 4 pm"
rem 2m "hello there"
rem 18 "hello there"
rem :25 "hello there"
```
