export function canCheckDateOnChallenge(
  checkedDateListLength: number,
  sequence: number,
  lastCheckedDate: Date | null
) {
  const today = new Date();

  // return checkedDateListLength + 1 === sequence;
  if (!lastCheckedDate) {
    return checkedDateListLength === sequence;
  }

  // 왜 string으로 오는가..?
  return (
    checkedDateListLength === sequence &&
    compareDateOnly(new Date(lastCheckedDate), today) !== 0
  );
}

function compareDateOnly(date1: Date, date2: Date): number {
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const day1 = date1.getDate();

  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  const day2 = date2.getDate();

  // yaer compare
  if (year1 < year2) {
    return -1;
  }
  if (year1 > year2) {
    return 1;
  }

  // month compare
  if (month1 < month2) {
    return -1;
  }
  if (month1 > month2) {
    return 1;
  }

  // day compare
  if (day1 < day2) {
    return -1;
  }
  if (day1 > day2) {
    return 1;
  }

  // same day
  return 0;
}

export function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function changeDateFormatYYMMDD(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getUTCDate(); // UTC format이라서 getDate대신 getUTCDate로..

  const formatYYMMDD = `${String(year).slice(2, 4)}.${
    month < 10 ? `0${month}` : month
  }.${day < 10 ? `0${day}` : day}`;

  return formatYYMMDD;
}

export function getToday() {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const formatYYYYMMDD = `${year}.${month < 10 ? `0${month}` : month}.${
    day < 10 ? `0${day}` : day
  }`;

  return formatYYYYMMDD;
}
