{
  /**
   * Intersection Types : and
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    emplyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.emplyeeId, person.work());
  }

  internWork({
    name: "haha",
    score: 11,
    emplyeeId: 111,
    work: () => {
      console.log(11);
    },
  });
}
