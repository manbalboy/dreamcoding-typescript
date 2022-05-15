{
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // function typeScriptFn(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // function jsFetchNum(id) {
  //   //code ...
  //   //code ...
  //   //code ...

  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // function typeFetchNum(id: string): Promise<number> {
  //   //code ...
  //   //code ...
  //   //code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  //Javascript => TypeScript
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName("hun", "jung");
  printName("yun");
  printName("ha", undefined);

  //default parameter
  function printMessage(message = "default message") {
    console.log(message);
  }

  printMessage();

  //Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0);
  }

  console.log(addNumbers(1, 3, 4));
}
