const initialState = [];

const addAnswerObj = (state = initialState, action) => {
  console.log("state", state);
  switch (action.type) {
    case "ADD_ANSWER":
      console.log("state add", state);
      console.log("action add", action);
      // let newArr = state;
      // newArr.array = newArr.push(action);
      // state = newArr;
      // return state;
      return [...state, action];
    // state.array = state.push(action);
    // return state;
    // if (!state.includes(action)) {
    //   state.array = state.push(action);
    //   return state;
    // } else if (state.includes(action)) {
    //   return console.log("state inc", state.indexOf(action));
    // // }
    // for (let i = 0; i < state.length; i++) {
    //   if (state[i]?.payload?.ans?.action?.questionId === action.questionId) {
    //     return console.log("state inc", i);
    //   } else {
    //     state.array = state.push(action);
    //     return state;
    //   }
    // }
    // state.array = state.push(action);
    // return state;
    // return {
    //   data: [
    //     ...state.data.filter(
    //       (x) => x.questionId !== action.payload.questionId
    //     ),
    //     action.payload,
    //   ],
    // };
    // return state.push(action);

    case "REM_ANSWER":
      console.log("state", state);
      console.log("action", action);

      // const indexToBeRemoved = state.findIndex(
      //   (obj) => action.questionId === obj.payload.ans.action.questionId
      // );
      // let indexToBeRemoved;
      // for (let i = 0; i < state.length; i++) {
      //   if (state[i].payload.ans.action.questionId === action.questionId) {
      //     indexToBeRemoved = i;
      //   }
      // }
      // console.log("indexToBeRemoved ", indexToBeRemoved);
      // let newArr = state;
      // newArr.array = newArr.splice(indexToBeRemoved, 1);
      // state = newArr;
      // return state;
      // state.array = state.slice(indexToBeRemoved, 1);
      // console.log("newstate", state);
      // return state;
      // return [...state];
      return state.filter(
        (element) =>
          element.payload.ans.action.questionId !==
          action.payload.ans.objToRemove.questionId
      );
    default:
      return state;
  }
};

//  return {
//    ...state,
//    state: state.addAnswerObj.map((answer) =>
//      answer.questionId === action.payload.questionId ? action.payload : answer
//    ),
//  };

export default addAnswerObj;
