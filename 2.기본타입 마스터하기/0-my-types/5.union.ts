{
  /**
   * Union Types : OR
   */
  type Direction = "left" | "right" | "up" | "down";

  function move(direction: Direction) {
    console.log(direction);
  }

  move("left");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function : login => success, fail

  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      response: {
        body: "ha",
      },
    };
  }

  // printLoginState(state)
  // success => 성공 body
  // fail -> 실패

  function printLoginState(state: LoginState): void {
    if ("response" in state) {
      console.log("success");
    } else {
      console.log("fail");
    }
  }
}
