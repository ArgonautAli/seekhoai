import { Route, Routes } from "react-router-dom";
import Quiz from "../pages/quizPage/quiz";
import Result from "../pages/resultPage/result";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default AppRoutes;
