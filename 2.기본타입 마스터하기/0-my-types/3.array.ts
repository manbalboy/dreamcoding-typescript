{
  // Array
  const fruits: string[] = ["apple", "banana"];
  const scroes: Array<string> = ["apple", "banana"];

  function printArray(fruits: readonly string[]) {
    console.log(fruits);
  }

  // Tuple
  let student: [string, number];
  student = ["name", 123];

  student[0] = "haha";
  student[1] = 123;

  console.log(student);

  const [name, age] = student;
}
