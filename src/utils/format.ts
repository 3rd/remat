export const formatTitle = (when: Date) => {
  const hours = when.getHours().toString().padStart(2, "0");
  const minutes = when.getMinutes().toString().padStart(2, "0");

  return `Reminder for ${hours}:${minutes}`;
};
