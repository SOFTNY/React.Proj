import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { ItQuizData01 } from './Data/ItQuizData01';
import ItQuizResult from './Data/ItQuizResult';
import '../css/ItQuiz-style.css';

function ItQuiz_01() {
  const { num } = useParams();

  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [score,setScore] = useState(0);
  const [clickedOption,setClickedOption]=useState(0);
  const [showResult,setShowResult]=useState(false);
  
  const changeQuestion = ()=>{
      updateScore();
      if(currentQuestion< ItQuizData01.length-1){
          setCurrentQuestion(currentQuestion+1);
          setClickedOption(0);
      }else{
          setShowResult(true)
      }
  }
  const updateScore=()=>{
      if(clickedOption===ItQuizData01[currentQuestion].answer){
          setScore(score+1);
      }
  }
  const resetAll=()=>{
      setShowResult(false);
      setCurrentQuestion(0);
      setClickedOption(0);
      setScore(0);
  }

  return (
    <div>{num}
        <div className="heading-img">
          <img src="https://31.media.tumblr.com/f4052ec68516abe096317253967e9cd5/tumblr_inline_msvvrdr0xZ1qz4rgp.gif" alt="" />
        </div>
        <div className="container">
            {showResult ? (
                <ItQuizResult score={score} totalScore={ItQuizData01.length} tryAgain={resetAll}/>
            ):(
            <>
            <div className="question">
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{ItQuizData01[currentQuestion].question}</span>
            </div>
            <div className="option-container">
                {ItQuizData01[currentQuestion].options.map((option,i)=>{
                    return(
                        <button 
                        // className="option-btn"
                        className={`option-btn ${
                            clickedOption == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setClickedOption(i+1)}
                        >
                        {option}
                        </button>
                    )
                })}                
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion}/>
            </>)}
        </div>
    </div>
  );
}


export default ItQuiz_01;