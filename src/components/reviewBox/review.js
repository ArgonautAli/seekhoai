import "./review.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AnswerIcon } from "../../assets/icon";

function ReviewBox() {
  const redArray = useSelector((state) => state.addAnswerObj);
  const [answerDisplay, setAnswerDisplay] = useState([]);
  console.log("redux", redArray);
  useEffect(() => {
    setAnswerDisplay(redArray);
  }, [redArray]);
  return (
    <>
      <div className="reviewContainer">
        <div>
          <AnswerIcon />
        </div>
        <div className="reviewText">Review answers here</div>
        <div>
          {redArray.map((res) => (
            <>
              <div className="revAnsList">
                <div className="reviewAnswerTag">
                  #{res.payload.ans.action.questionId} :
                </div>{" "}
                &nbsp;
                <div>{res.payload.ans.action.selectedAnswer}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default ReviewBox;
