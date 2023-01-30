const initialState = [];

const addAnswerObj = (state = initialState, action) => {
  console.log("state", state);
  switch (action.type) {
    case "ADD_ANSWER":
      return [...state, action];

    case "REM_ANSWER":
      return state.filter(
        (element) =>
          element.payload.ans.action.questionId !==
          action.payload.ans.objToRemove.questionId
      );
    default:
      return state;
  }
};

export default addAnswerObj;
