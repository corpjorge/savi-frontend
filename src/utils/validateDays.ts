import { HOLIDAYS } from "@/utils/holidays";

export function validateDays(
  day: number,
  month: number,
  currentDay: number,
  currentMonth: number,
  meetings: any,
  index: string,
  adviser: number
) {
  function pastDays() {
    return currentDay > day && Number(month) === currentMonth;
  }

  function busyDay() {
    console.log(adviser);
    return (
      meetings.filter((date: { month: number; day: number }) => {
        return date.month === month && date.day === day;
      }).length >=
      8 * adviser
    );
  }

  function isHolyDay() {
    return HOLIDAYS.some((holiday: { month: number; day: number }) => {
      return holiday.month === month && holiday.day === day;
    });
  }

  function hourNotAvailable() {
    return (
      currentDay === day &&
      currentMonth === Number(month) &&
      new Date().getHours() > 16
    );
  }

  return (
    pastDays() ||
    busyDay() ||
    index === "DO" ||
    isHolyDay() ||
    hourNotAvailable()
  );
}
