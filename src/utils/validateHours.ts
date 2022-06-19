export function numberOfAdvisers(
  hours: { value: string; label: string },
  hoursNotAvailable: any,
  advisers: { value: string }
) {
  if (hoursNotAvailable.length > 0) {
    return (
      hoursNotAvailable.filter((item: string) => item === hours.value).length >=
      advisers.value.length
    );
  }
}

export function validateHoursAvailable(
  hours: { value: string },
  selectedDate: { day: number }
) {
  return new Date().getDate() >= selectedDate.day
    ? new Date().getHours() < Number(hours.value)
    : true;
}
