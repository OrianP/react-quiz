import React, { useState } from "react";
// components
import QuestionCard from "./components/QuestionCard";
// functions
import { fetchQuizQuestions } from "./API";
// types
import { Difficulty } from "./API";

const TOTAL_QUESTIONS = 10;

function App() {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

	const startTrivia = async () => {};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};

	return (
		<div className="App">
			<h1>React Quiz</h1>
			<button className="start" onClick={startTrivia}>
				Start
			</button>
			<p className="score">Score:</p>
			<p>Loading questions...</p>
			{/* <QuestionCard
				questionNum={number + 1}
				totalQuestions={TOTAL_QUESTIONS}
				question={questions[number].question}
				answers={questions[number].answers}
				userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
			/> */}
			<button className="next">Next question</button>
		</div>
	);
}

export default App;
