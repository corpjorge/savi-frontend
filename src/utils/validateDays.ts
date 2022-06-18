import { HOLIDAYS } from "@/utils/holidays";

export function validateDays(
  day: number,
  month: number,
  currentDay: number,
  currentMonth: number,
  meetings: any,
  index: any
) {
  function pastDays() {
    return currentDay > day && Number(month) === currentMonth;
  }

  function busyDay() {
    return (
      meetings.filter((date: any) => {
        return date.month === month && date.day === day;
      }).length >= 10
    );
  }

  function isHolyDay() {
    return HOLIDAYS.some((holiday: any) => {
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
