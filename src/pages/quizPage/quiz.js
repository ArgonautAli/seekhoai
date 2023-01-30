import QuestionBox from "../../components/questionBox/question";
import ReviewBox from "../../components/reviewBox/review";
import "./quizPage.css";
import { QAIcon } from "../../assets/icon";

function Quiz() {
  return (
    <>
      <div className="header">
        <QAIcon /> QA Assessment by &nbsp;
        <a href="https://alihaiderkhan.com" target="_blank" rel="noreferrer">
          Ali Haider Khan
        </a>
      </div>
      <div className="quizContainer">
        <ReviewBox />
        <QuestionBox />
      </div>
    </>
  );
}

export default Quiz;
