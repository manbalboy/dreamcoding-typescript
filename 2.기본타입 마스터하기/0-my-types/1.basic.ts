{
  //javascript

  // old
  // 사용하지 않아야함
  // var age = 5;
  // age = 1;

  //let
  let name = "hello";
  name = "hi";

  //const
  // const age = 5;
  // age = 5;

  /**
   * JavaScript
   * Primitive : number, string, boolean, bigint, symbol, null, undefined
   * Object : function, array....
   */

  // number
  // const num : number = 0;

  // string
  // const str: string = 'hello';

  // boolean
  // const boal : boolean = false;

  // undefined
  // let name: undefined; //이런 형태로는 사용하지 않음
  // name = "hello"음

  let age: number | undefined;
  age = undefined;
  age = 1;

  // null
  let person: string | undefined;

  // unknown 가능하면 사용하지 않아야함
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any
  let anything: any = 0;
  anything = "hello";

  //any 타입과 unknown 은 가급적 사용하지 않아야함
}

function findFn(): number | undefined {
  return undefined;
}

// void
function print(): void {
  console.log("hello");
  return;
}

//never
function throwError(message: string): never {
  throw new Error(message);

  // while (true) {}
}

//object
let obj: object;

function acceptSomeObject(ojb: object) {
  obj;
}

acceptSomeObject({ name: "jh" });
