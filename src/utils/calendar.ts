import { reactive } from "vue";

export function calendar(selectedDay: number) {
  const dates: any = reactive({
    DO: [],
    LU: [],
    MA: [],
    MI: [],
    JU: [],
    VI: [],
    SA: [],
  });

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + selectedDay;
  const daysMonth = new Date(year, month, 0).getDate();
  const currentDay = date.getDate();
  const currentMonth = new Intl.DateTimeFormat("es-ES", {
    month: "long",
  }).format(new Date(0, month - 1));

  for (let day = 1; day <= daysMonth; day++) {
    const index = new Date(year, month - 1, day).getDay();

    index === 0
      ? dates.DO.push(day)
      : day === 1
      ? index > 0
        ? dates.DO.push(0)
        : null
      : null;
    index === 1
      ? dates.LU.push(day)
      : day === 1
      ? index > 1
        ? dates.LU.push(0)
        : null
      : null;

    index === 2
      ? dates.MA.push(day)
      : day === 1
      ? index > 2
        ? dates.MA.push(0)
        : null
      : null;

    index === 3
      ? dates.MI.push(day)
      : day === 1
      ? index > 3
        ? dates.MI.push(0)
        : null
      : null;

    index === 4
      ? dates.JU.push(day)
      : day === 1
      ? index > 4
        ? dates.JU.push(0)
        : null
      : null;

    index === 5
      ? dates.VI.push(day)
      : day === 1
      ? index > 5
        ? dates.VI.push(0)
        : null
      : null;

    index === 6
      ? dates.SA.push(day)
      : day === 1
      ? index > 6
        ? dates.SA.push(0)
        : null
      : null;
  }

  console.log(month);
  return {
    dates,
    currentDay,
    year,
    month,
    currentMonth,
    selectedDay,
  };
}
