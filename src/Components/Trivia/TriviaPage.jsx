import React, { useState, useEffect } from 'react';
import { Question } from './Question';
import { Score } from './Score';
import { Timer } from './Timer';
import { triviaData, saveScore } from '../../services/TriviaData';
import { Link } from 'react-router-dom';

import '../../css/Trivia.css';
import { User } from '@auth0/auth0-react';

export const TriviaPage = () => {
    const subcategory = decodeURIComponent(window.location.pathname.split("/")[3].replace(/-/g," "));
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(20);
    const [showModal, setShowModal] = useState(false);
    const [question, setQuestion] = useState(null);
    const data = JSON.parse(localStorage.getItem("data"));
    const category= decodeURIComponent(window.location.pathname.split("/")[2].replace(/-/g," "));
    const user=JSON.parse(localStorage.getItem("usuario"))
    console.log(user)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await triviaData(data.idSubCategory, data.dificultad);
                setQuestion(response);
            } catch (error) {
                console.error('Error fetching trivia data:', error);
            }
        };

        fetchData();
    }, [score,data.idSubCategory, data.dificultad]);

    useEffect(() => {
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
    }, [timeLeft, showModal]);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
            setTimeLeft(20);
        } else {
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <main>
            <section>
                <h1>{subcategory}</h1>
                {question && (
                    <Question
                        question={question.description}
                        options={question.answers}
                        correctAnswer={question.answers.find(answer => answer.correct === true)}
                        handleAnswer={handleAnswer}
                    />
                )}
                <Score score={score} />
                <Timer timeLeft={timeLeft} />
            </section>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <h2>Se te ha acabado el tiempo</h2>
                        <p>¡Inténtalo de nuevo!</p>
                        <Link to={`/categories/${category}`}>
                        <button>Salir</button>
                        </Link>
                        <button>Volver a jugar</button>
                    </div>
                </div>
            )}
        </main>
    );
}
