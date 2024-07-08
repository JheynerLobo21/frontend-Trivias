import { useState, useEffect } from "react";
import { Question } from "./Question";
import { triviaData, saveScore } from "../../services/TriviaData";
import { useNavigate } from "react-router-dom";
import { Score } from "./Score";
import "../../css/Trivia.css";
import { NavbarHome } from "../Navbar/NavbarHome";
import { WildcardsBar } from "./WildcardsBar";
import { IsLoading } from "../Loading/IsLoading";
import { maxQuestions } from "../../constants";

export const TriviaPage = () => {
  const subcategory = decodeURIComponent(
    window.location.pathname.split("/")[3].replace(/-/g, " ")
  );
  const [score, setScore] = useState(0);
  const [jump, setJump] = useState(0);
  const [shield, setShield] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);
  const [timeTotal, setTimeTotal] = useState(20);
  const [question, setQuestion] = useState({});
  const [loading, setLoading] = useState(true);
  const [wildcardIcon, setWildcardIcon] = useState(null); 
  const [historyQuestions, setHistoryQuestions] =useState([]);
  const [stoppedTime, setStoppedTime]=useState(false);
  const data = JSON.parse(localStorage.getItem("data"));
  const category = decodeURIComponent(
    window.location.pathname.split("/")[2].replace(/-/g, " ")
  );
  const user2 = JSON.parse(localStorage.getItem("usuario"));
  const navigate = useNavigate(); // Hook de navegación

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await triviaData(data.idSubCategory, data.dificultad, getStringHistoryQuestion(historyQuestions));
        setQuestion(response);
        if(historyQuestions.length==maxQuestions){
          setHistoryQuestions([...historyQuestions.slice(1), response.question])
        }
        else{
          setHistoryQuestions([...historyQuestions, response.question]);
        }
        return response;
      } catch (error) {
        console.error("Error fetching trivia data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [score, data.idSubCategory, data.dificultad, jump]);

  const getStringHistoryQuestion=(historico)=>{
    let stringHistory=""
    for(let i=0;i<historico.length;i++) {
      stringHistory+=" " +historico[i];
      if(i+1===historico.length)stringHistory+=".";
      else stringHistory+=",";
    }
    return stringHistory;
  }

  const handleAnswer = (isCorrect) => {
    setTimeout(()=>{
      if (isCorrect) {
        setScore(score + 1);      
        setLoading(true);
        setShield(false);
      } else {
        if (shield) {
          setShield(false);
          changeQuestion();
        } else {
          saveScore(user2.idUser, data.idSubCategory, score);
          localStorage.setItem("pageTrivia", window.location.pathname);
          setLoading(true);
          navigate('/endGame', {state:{scoreTotal: score}}); 
        }
      }
      setTimeLeft(20);
      setTimeTotal(20);
    },2000)
    
  };

  const showWildcardIcon = (iconName) => {
    setWildcardIcon(iconName);
    setTimeout(() => {
      setWildcardIcon(null);
    }, 2000)
  };

  const changeQuestion = (jumpComodin) => {
    setShield(false);
    if (!loading) {
      setJump(jump + 1);
      setTimeLeft(20);
      setLoading(true);
      jumpComodin?
      showWildcardIcon("bi bi-skip-end-circle-fill"):"";
      return false;
    } else {
      return true;
    }
  };

  const activeShield = () => {
    !shield?
    showWildcardIcon("bi bi-shield-fill-check"):showWildcardIcon("Ya está usado"); 
    return shield ? true : setShield(true);
  };

  const delectedAnwers = () => {
    let questionSubtract = { ...question, answers: [...question.answers] };
    if (questionSubtract.answers.length > 2) {
      showWildcardIcon("bi bi-yin-yang");
      let correctAnswer = questionSubtract.answers.find(
        (answer) => answer.correct
      );
      let incorrectAnswers = questionSubtract.answers.filter(
        (answer) => !answer.correct
      );
      let randomIncorrectAnswer =
        incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
      let combinedAnswers;
      if (Math.random() > 0.5) {
        combinedAnswers = [correctAnswer, randomIncorrectAnswer];
      } else {
        combinedAnswers = [randomIncorrectAnswer, correctAnswer];
      }
      questionSubtract.answers = combinedAnswers;
      setQuestion(questionSubtract);
      return false;
    }
    showWildcardIcon("Ya está usado")
    return true;
  };

  const addTime = () => {
    showWildcardIcon("bi bi-alarm-fill");
    setTimeLeft(timeLeft + 10);
    setTimeTotal(timeLeft + 10);
  };

  const stopTime=(st)=>{
    setStoppedTime(st);
  }
  
  return (
    <>
      <NavbarHome/>
      <div className="container-general">
      <main className="main-trivia">
        
        <section className="section-centered">
          
          <h1 className="centered">{subcategory}</h1>

          <div className="main-wildcards">
          <WildcardsBar
            idUser={user2.idUser}
            changeQuestion={changeQuestion}
            activeShield={activeShield}
            delectedAnwers={delectedAnwers}
            addTime={addTime}
            stopTime={stopTime}
          />
        </div>
        
          <Score score={score} />

          {loading ? (
            <IsLoading />
          ) : (
            <Question
              question={question.question}
              options={question.answers}
              correctAnswer={question.answers.find(
                (answer) => answer.correct === true
              )}
              time={timeLeft}
              timeTotal={timeTotal}
              score={score}
              category={category}
              user={user2}
              data={data}
              handleAnswer={handleAnswer}
              saveScore={saveScore}
              setTimeLeft={setTimeLeft}
              stoppedTime={stoppedTime}
            />
          )}
        </section>
      </main>
      {wildcardIcon==='Ya está usado' ?
      (<div className="wildcard-text-overlay">
      <label className="textIconUsed">¡Sólo se puede usar una vez por pregunta!</label>
    </div>)
      : wildcardIcon &&(
        <div className="wildcard-icon-overlay">
          <i className={`${wildcardIcon} icon-large`}></i>
        </div>
      )}
      </div>
    </>
  );
};
