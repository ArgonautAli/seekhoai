export const addAnswer = (ans) => {
  return {
    type: "ADD_ANSWER",
    payload: { ans },
  };
};

export const removeAnswer = (ans) => {
  return {
    type: "REM_ANSWER",
    payload: { ans },
  };
};
