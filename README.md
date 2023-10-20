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

To schedule a reminder execute: `rem <when> <...message>`
\
If you want to avoid escaping, separate the `<when>` and `<...message>` args with `--`:
\
`rem in 20 min -- prepare for work`
\
Use the regular `atd` commands to list (`atq`) and cancel (`atrm`) the scheduled jobs.

```sh
# specify when to deliver the reminder using natural language
rem 14:52 go to the gym
rem "tomorrow at 9:00" go to the gym
rem 4th of july at noon -- go to the gym
rem "next friday at 4 pm" go to the gym
rem 2m go to the gym
rem 18 go to the gym
rem :25 go to the gym
```
