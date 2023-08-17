import { createContext, useState, useEffect } from "react";

export const QuestionsContext = createContext();

const QuestionsProvider = ({ children }) => {
  let count = 0;
  // state
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState([]);
  // fetch data
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("http://localhost:3000/quiz");
      const data = await response.json();
      setQuestions(data);
      console.log(data);
    };
    fetchQuestions();
  }, []);

  // get first question
  const getFirstQuestion = () => {
    return questions[count];
  };

  // update current question
  const updateCurrentQuestion = (index) => {
    setCurrentQuestion(questions[index + 1]);
  };

  // check if answer is correct
  const checkAnswer = (index, correctAnswer) => {
    if (index === correctAnswer) {
      setCurrentQuestion(questions[index + 1]);
      console.log(questions[index + 1]);
      console.log(true);
      return true;
    } else {
      console.log(false);
      console.log("Perdiste");
      return false;
    }
  };

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        currentQuestion,
        getFirstQuestion,
        updateCurrentQuestion,
        checkAnswer,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider;
