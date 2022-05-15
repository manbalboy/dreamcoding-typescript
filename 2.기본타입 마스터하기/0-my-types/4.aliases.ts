{
  /**
   * Type Aliases
   */
  type Text = string;

  const name: Text = "hun";

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "ellie",
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = "name";

  let ellieName: Name;
  ellieName = "name";
  type JSON = "json";
  const json: JSON = "json";
}
