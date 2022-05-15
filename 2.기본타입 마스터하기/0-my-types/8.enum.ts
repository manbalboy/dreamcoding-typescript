{
  /**
   * Enum
   */
  // Javascript
  const MAX_NUM = 56;
  const MAX_STUDENTS_PER_CLASS = 10;

  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  //TypeScript
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Satarday,
    Sunday,
  }

  console.log(Days);
  const day = Days.Satarday;
  console.log(day);

  // TypeScript은 Enum 은 최대한 사용하지 않는다 . 타입추론때문에
  let test: Days = Days.Friday;
  test = 1000;
  // 위와 같은 형태가 문제가 됨
}
