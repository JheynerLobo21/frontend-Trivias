import { useState, useEffect } from 'react';
import { Question } from './Question';
import { triviaData, saveScore } from '../../services/TriviaData';
import { Link } from 'react-router-dom';
import { Score } from './Score';
import '../../css/Trivia.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Navbar } from '../Categories/Navbar';
import { WildcardsBar } from './WildcardsBar';

export const TriviaPage = () => {
    const subcategory = decodeURIComponent(window.location.pathname.split("/")[3].replace(/-/g," "));
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(20);
    const [showModal, setShowModal] = useState(false);
    const [question, setQuestion] = useState({});
    const [loading, setLoading] = useState(true);
    const data = JSON.parse(localStorage.getItem("data"));
    const category= decodeURIComponent(window.location.pathname.split("/")[2].replace(/-/g," "));
    const user2=JSON.parse(localStorage.getItem("usuario"))
    const { user } = useAuth0();

    console.log(user)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await triviaData(data.idSubCategory, data.dificultad);
                setQuestion(response);
                console.log(response);
                console.log(question);
                return response;
            } catch (error) {
                console.error('Error fetching trivia data:', error);
            }
            finally{setLoading(false)}
        };

        fetchData();
    }, [score,data.idSubCategory, data.dificultad]);

    /*useEffect(() => {
        let intervalId;
    
        if (!showModal) {
                intervalId = setInterval(() => {
                    if (timeLeft > 0) {
                        setTimeLeft(timeLeft - 1);
                    } else {
                        console.log(user)
                        saveScore(user.idUser,data.idSubCategory,score)
                        setShowModal(true);
                        clearInterval(intervalId);
                    }
                }, 1000);
            }
        return () => clearInterval(intervalId);
    }, [showModal]);*/

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
            setTimeLeft(20);
            setLoading(true);
        } else {
            saveScore(user2.idUser,data.idSubCategory,score)
            setShowModal(true);
            setLoading(true);
        }
    };


    return (
        <>
        <Navbar user={user}/>
        
        <main className='main-trivia'>
           
        <div className='main-wildcards'>
                <WildcardsBar idUser={user2.idUser}/>
        </div>
            <section className='section-centered'>
                <h1 className="centered">{subcategory}</h1>
                <Score score={score} />
                {!loading && (
                    <Question
                        question={question.question}
                        options={question.answers}
                        correctAnswer={question.answers.find(answer => answer.correct === true)}
                        handleAnswer={handleAnswer}
                        timeLeft={timeLeft}
                        score={score}
                        category={category}
                        user={user2}
                        data={data}
                        saveScore={saveScore}
                    />
            )}
            </section>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                    <Link to={`/categories/${category}`}>
                            <span className="close-button">&times;</span>
                        </Link>                        <h2>Respuesta equivocada</h2>
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
}
