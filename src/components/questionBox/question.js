import "./question.css";
import { QuestionList } from "../../utils/questionList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer, removeAnswer } from "../../redux/actions";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { QuesionIcon, ArrowIcon } from "../../assets/icon";
import { Button } from "react-bootstrap";

function QuestionBox() {
  const dispatch = useDispatch();
  const [questionsListed, setQuestionsListed] = useState([]);
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [correctAnswer, setCorrectAnswer] = useState();
  const [answerIndex, setAnswerIndex] = useState();
  const [answerDispatched, setAnswerDispatched] = useState(false);
  const redArray = useSelector((state) => state.addAnswerObj);
  const navigate = useNavigate();

  useEffect(() => {
    setQuestionsListed(QuestionList);
  }, []);

  console.log(" red", redArray);

  // useEffect(() => {
  //   redArray.map((res) => {
  //     const preExistingAnswer = res.payload.ans.action.questionId;
  //     if (preExistingAnswer === index) {
  //       const objToRemove = res.payload.ans.action;
  //       console.log("obj to rem", objToRemove);
  //       return dispatch(removeAnswer({ type: "REM_ANSWER", objToRemove }));
  //     }
  //   });
  // }, [index, selectedAnswer]);

  function removeAnswerHandler() {
    redArray?.map((res) => {
      const preExistingAnswer = res.payload.ans.action.questionId;
      if (preExistingAnswer === index) {
        const objToRemove = res.payload.ans.action;
        console.log("obj to rem", objToRemove);
        return dispatch(removeAnswer({ type: "REM_ANSWER", objToRemove }));
      }
    });
  }

  function answerSelectionHandler(item, index) {
    removeAnswerHandler();
    setSelectedAnswer(item.answerText);
    setCorrectAnswer(item.correctAnswer);
    setAnswerIndex(item.answerIndex);

    const body = {
      selectedAnswer: item.answerText,
      correctAnswer: item.correctAnswer,
      answerIndex: item.answerIndex,
      questionId: index,
    };

    dispatch(addAnswer({ type: "ADD_ANSWER", action: body }));

    // redArray.map((res) => {
    //   console.log("mapping");
    //   const preExistingAnswer = res.payload.ans.action.questionId;
    //   if (preExistingAnswer !== index) {
    // return console.log("already exists!");
    // const body = {
    //   selectedAnswer: item.answerText,
    //   correctAnswer: item.correctAnswer,
    //   answerIndex: item.answerIndex,
    //   questionId: index,
    // };

    //   return dispatch(addAnswer({ type: "ADD_ANSWER", action: body }));
    // } else if (preExistingAnswer === index) {
    //   const objToRemove = res.payload.ans.action;
    //   console.log("obj to rem", objToRemove);
    //   return dispatch(removeAnswer({ type: "REM_ANSWER", objToRemove }));
    // }
    // });
  }

  function indexHandler(placement) {
    if (placement === "left" && index > 0) {
      setIndex(index - 1);
    }
    if (placement === "right" && index < 2) {
      setIndex(index + 1);
    }
  }

  return (
    <>
      <div className="questionContainer">
        <div>
          <QuesionIcon />
        </div>
        <div className="questionText" style={{ marginBottom: "15px" }}>
          <div
            className="arrowRotate"
            onClick={() => indexHandler("left")}
            style={{ cursor: "pointer" }}
          >
            {" "}
            <ArrowIcon />{" "}
          </div>
          Attempt questions here
          <div
            onClick={() => indexHandler("right")}
            style={{ cursor: "pointer" }}
          >
            {" "}
            <ArrowIcon />
          </div>
        </div>
        <div className="questionText">
          Q{index + 1}: &nbsp;
          {questionsListed[index]?.questionText}
        </div>
        <Form>
          <div className="answersText">
            {questionsListed[index]?.answers?.map((item, ind) => (
              <>
                <div
                  className="answerContainer"
                  onClick={() => answerSelectionHandler(item, item.questionId)}
                >
                  <Form.Check
                    type={"radio"}
                    id={"disabled-default-radio"}
                    name="group1"
                  />
                  <div className="indAnswersText">{item.answerText}</div>
                </div>
              </>
            ))}
          </div>
          {redArray.length == 3 ? (
            <Button onClick={() => navigate("/result")}>Submit</Button>
          ) : null}
        </Form>
      </div>
    </>
  );
}

export default QuestionBox;
