import React, {useEffect, useState} from 'react';
import './App.css';
import {getQuizDetails} from "./Services/quiz_services";
import { Quiz } from "./Types/quiz_types";

function App() {

let [quiz, setQuiz] = useState<Quiz[]>([])

useEffect(() => {
  async function fetchData() {
    const questions = await getQuizDetails(5, 'easy');
    console.log(questions)
  } 
  fetchData();
}, [])


  return (
    <div className="App">
    </div>
  );
}

export default App;
