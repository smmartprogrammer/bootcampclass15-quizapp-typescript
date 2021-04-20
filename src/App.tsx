import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizDetails } from './Services/quiz_services';
import { QuestionType } from './Types/quiz_types';
import QuestionCard from './Component/QuestionCard';

function App() {
	let [quiz, setQuiz] = useState<QuestionType[]>([]);
	let [currentStep, setCurrentStep] = useState(0);

	const startQuiz = async () => {};

	const nextQuestion = async () => {};

	useEffect(() => {
		async function fetchData() {
			const questions: QuestionType[] = await getQuizDetails(5, 'easy');
			console.log(questions);
			setQuiz(questions);
		}
		fetchData();
	}, []);

	const handleSubmit = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault();
		if (currentStep !== quiz.length - 1) setCurrentStep(++currentStep);
		else {
			alert('Quiz Completed');
			setCurrentStep(0);
		}
	};
	if (!quiz.length) return <h3>Raghunathji...</h3>;
	return (
		<div className="App">
			<h1>Raghunathji</h1>
			<button className="start" onClick={startQuiz}>
				Begin Quiz
			</button>
			<p className="score">Scores:</p>
			<p>Loading</p>

			<QuestionCard
				options={quiz[currentStep].option}
				question={quiz[currentStep].question}
				callback={handleSubmit}
			/>
			<button className="next" onClick={nextQuestion}>
				Next
			</button>
		</div>
	);
}

export default App;
