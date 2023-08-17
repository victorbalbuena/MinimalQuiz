import { useContext, useEffect, useState } from "react";
import { QuestionsContext } from "../context/QuestionsContext";
import Question from "./Question";

const Questions = () => {
  // get questions of context

  const { questions, getFisrtQuestion, updateCurrentQuestion, checkAnswer } =
    useContext(QuestionsContext);
  const [currentQuestion, setCurrentQuestion] = useState([]);

  useEffect(() => {
    if (questions.length > 0) {
      setCurrentQuestion([...currentQuestion, questions[0]]);
    }
  }, [questions]);

  return (
    <div>
      <section className="">
        {currentQuestion.map((question) => {
          return (
            <>
              <Question currentQuestion={question} key={question.id}></Question>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default Questions;
