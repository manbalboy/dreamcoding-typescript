{
  function jsStrFunc(): any {
    return "hoho";
  }

  const result = jsStrFunc();

  console.log((result as string).length);
  console.log((<string>result).length);
}
