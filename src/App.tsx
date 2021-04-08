import React, {useEffect} from 'react';
import './App.css';
import {getQuizDetails} from "./Services/quiz_services";

function App() {

useEffect(() => {
  async function fetchData() {
    const questions = await getQuizDetails(50, 'easy');
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
