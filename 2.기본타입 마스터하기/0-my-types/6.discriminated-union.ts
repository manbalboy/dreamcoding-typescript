{
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "ha",
      },
    };
  }

  // printLoginState(state)
  // success => 성공 body
  // fail -> 실패

  function printLoginState(state: LoginState): void {
    if (state.result === "success") {
      console.log(`success ${state.response.body}`);
    } else {
      console.log(`fail ${state.reason}`);
    }
  }
}
