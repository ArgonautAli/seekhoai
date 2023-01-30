import "./result.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { QAIcon } from "../../assets/icon";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();
  const redArray = useSelector((state) => state.addAnswerObj);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [marksScored, setMarksScored] = useState(0);
  useEffect(() => {
    resultHandler();
  }, []);

  function answerChecker(ans) {
    return ans.payload.ans.action.correctAnswer;
  }

  function resultHandler() {
    const correctAnswersArr = redArray.filter(answerChecker);
    setCorrectAnswer(correctAnswersArr);
    setMarksScored(correctAnswersArr.length * 33);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          verticalAlign: "middle",
        }}
      >
        <div className="resultContainer">
          <div>
            <div>
              <QAIcon />
            </div>
            <div className="resultData">
              <div className="resultText">Questions Asked: 3</div>
              <div className="resultText">
                Questions Correct: {correctAnswer.length}
              </div>
              <div className="resultText">Total Score: {marksScored}</div>
              <Button className="resultText" onClick={() => navigate("/")}>
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
