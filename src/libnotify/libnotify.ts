type NotificationOptions = {
  title?: string;
  appName?: string;
  urgency?: "critical" | "low" | "normal";
  expireTime?: number;
};

const defaultOptions: NotificationOptions = {
  title: "remat",
  appName: "remat",
  urgency: "critical",
  expireTime: 0,
};

const escape = (str: string) => {
  const escapedString = str.replace(/'/g, "\\'");
  return `'${escapedString}'`;
};

export const buildCommand = (message: string, options: NotificationOptions = {}) => {
  const opts = { ...defaultOptions, ...options };

  const args = [];

  if (opts.appName) args.push(`--app-name ${escape(opts.appName)}`);
  if (opts.urgency) args.push(`--urgency ${opts.urgency}`);
  if (opts.expireTime !== undefined) args.push(`--expire-time ${opts.expireTime}`);
  if (opts.title) args.push(escape(opts.title));
  args.push(escape(message));

  return `notify-send ${args.join(" ")}`;
};
