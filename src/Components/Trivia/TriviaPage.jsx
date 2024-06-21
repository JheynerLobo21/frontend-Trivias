import { useState, useEffect } from "react";
import { Question } from "./Question";
import { triviaData, saveScore } from "../../services/TriviaData";
import { Link } from "react-router-dom";
import { Score } from "./Score";
import "../../css/Trivia.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar } from "../Navbar/Navbar";
import { WildcardsBar } from "./WildcardsBar";
import { IsLoading } from "../Loading/IsLoading";

export const TriviaPage = () => {
  const subcategory = decodeURIComponent(
    window.location.pathname.split("/")[3].replace(/-/g, " ")
  );
  const [score, setScore] = useState(0);
  const [jump, setJump] = useState(0);
  const [shield, setShield] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);
  const [timeTotal, setTimeTotal] = useState(20);
  const [showModal, setShowModal] = useState(false);
  const [question, setQuestion] = useState({});
  const [loading, setLoading] = useState(true);
  const data = JSON.parse(localStorage.getItem("data"));
  const category = decodeURIComponent(
    window.location.pathname.split("/")[2].replace(/-/g, " ")
  );
  const user2 = JSON.parse(localStorage.getItem("usuario"));
  const { user } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await triviaData(data.idSubCategory, data.dificultad);
        setQuestion(response);
        console.log(response);
        console.log(question);
        return response;
      } catch (error) {
        console.error("Error fetching trivia data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [score, data.idSubCategory, data.dificultad, jump]);


  const handleAnswer = (isCorrect) => {
    setTimeout(()=>{
      if (isCorrect) {
        setScore(score + 1);
        setTimeLeft(20);
        setLoading(true);
      } else {
        if (shield) {
          setShield(false);
          changeQuestion();
        } else {
          saveScore(user2.idUser, data.idSubCategory, score);
          setShowModal(true);
          setLoading(true);
        }
      }
    },2000)
    
  };

  const changeQuestion = () => {
    if (!loading) {
      setJump(jump + 1);
      setTimeLeft(20);
      setLoading(true);
      return false;
    } else {
      return true;
    }
  };
  const activeShield = () => {
    return shield ? true : setShield(true);
  };

  const delectedAnwers = () => {
    let questionSubtract = { ...question, answers: [...question.answers] };
    if (questionSubtract.answers.length > 2) {
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
    return true;
  };

  const addTime = () => {
    setTimeLeft(timeLeft+10);
    setTimeTotal(timeLeft+10);
  };

  return (
    <>
      <Navbar user={user} />

      <main className="main-trivia">
        <div className="main-wildcards">
          <WildcardsBar
            idUser={user2.idUser}
            changeQuestion={changeQuestion}
            activeShield={activeShield}
            delectedAnwers={delectedAnwers}
            addTime={addTime}
          />
        </div>
        <section className="section-centered">
          <h1 className="centered">{subcategory}</h1>
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
              handleAnswer={handleAnswer}
              time={timeLeft}
              timeTotal={timeTotal}
              score={score}
              category={category}
              user={user2}
              data={data}
              saveScore={saveScore}
              setTimeLeft={setTimeLeft}
            />
          )}
        </section>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <Link to={`/categories/${category}`}>
                <span className="close-button">&times;</span>
              </Link>{" "}
              <h2>Respuesta equivocada</h2>
              <p>¡Inténtalo de nuevo!</p>
              <Link to={`/categories/${category}`}>
                <button>Salir</button>
              </Link>
              <button>Volver a jugar</button>
            </div>
          </div>
        )}
      </main>
    </>
  );
};
