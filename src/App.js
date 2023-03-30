import React, { useState } from "react";
import "./App.css";
import { questions } from "./questions";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 10);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  };
  return (
    <div className="app">
      {showScore ? (
        <section className="showScore-section">
          <h2>
            Your score is {score} out of {questions.length}
          </h2>
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </section>
      ) : (
        <>
          <section className="question-section">
            <h1>
              Question {currentQuestion + 1}/{questions.length}
            </h1>
            <p>{questions[currentQuestion].questionText}</p>
          </section>

          <section className="answer-section">
            {questions[currentQuestion].answerOptions.map((option) => (
              <button
                key={option.answerText}
                onClick={() => handleAnswerClick(option.isCorrect)}
              >
                {option.answerText}
              </button>
            ))}
          </section>
        </>
      )}
    </div>
  );
}

export default App;
