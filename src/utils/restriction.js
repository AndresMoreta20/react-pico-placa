export function plateRestriction(plateInfo) {
  const { plate, date, time } = plateInfo;

  const lastDigit = parseInt(plate.slice(-1), 10);
  const [day, month, year] = date.split("/").map(Number);
  const [hour, minute] = time.split(":").map(Number);

  const dateObj = new Date(year, month - 1, day, hour, minute);

  const dayOfWeek = dateObj.getDay();
  const isWeekday = dayOfWeek >= 1 && dayOfWeek <= 5;

  const isMorningRestriction =
    (hour >= 7 && hour < 9) || (hour === 9 && minute <= 30);
  const isEveningRestriction =
    (hour >= 16 && hour < 19) || (hour === 19 && minute <= 30);

  if (isWeekday && (isMorningRestriction || isEveningRestriction)) {
    if (lastDigit === dayOfWeek * 2 - 1 || lastDigit === dayOfWeek * 2) {
      return false;
    }
  }

  return true;
}
