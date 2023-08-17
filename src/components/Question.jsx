import { useContext, useEffect } from "react";
import { QuestionsContext } from "../context/QuestionsContext";

const Question = () => {
  const { questions, getFirstQuestion, updateCurrentQuestion, checkAnswer } =
    useContext(QuestionsContext);

  const question = [];

  useEffect(() => {
    if (questions.length > 0) {
      console.log(getFirstQuestion());
      question.push(getFirstQuestion());
      console.log(question[0].question);
    }
  }, [questions]);

  return (
    <div className="px-10 md:px-20 lg:px-40 scroll-smooth">
      <div className=" mx-auto md:max-w-5xl  mb-10 mt-10 rounded-xl back-img-tree">
        <div className="mx-auto md:max-w-5xl p-10 mb-10 mt-10 rounded-xl bg-white bg-opacity-20 backdrop-blur-md drop-shadow-2xl">
          <div className="mx-auto max-w-4xl pb-1 mt-5 flex flex-col justify-between items-center">
            <div className="flex-1 p-3 font-semibold text-lg md:text-2xl bg-purple-600 text-white rounded-xl text-center">
              {question.question}
            </div>
            {/* <div className="flex-1 p-3 mt-5 text-lg md:text-xl text-white flex flex-wrap gap-2">
              {question.options.map((option, index) => {
                return (
                  <button
                    key={option}
                    onClick={() => checkAnswer(index, question.correctOption)}
                    className="text-center basis-3/4 md:basis-1/3 flex-1 p-2 bg-blue-600 hover:bg-blue-700 transition-all rounded-xl cursor-pointer"
                  >
                    {option}
                  </button>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
