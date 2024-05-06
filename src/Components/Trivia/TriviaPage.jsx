import React, { useState, useEffect } from 'react';
import { Question } from './Question';
import { Score } from './Score';
import { Timer } from './Timer';
import { triviaData } from '../../services/TriviaData';
import '../../css/Trivia.css';

export const TriviaPage = () => {
    const subcategory = decodeURIComponent(window.location.pathname.split("/")[3].replace(/-/g," "));
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(20);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let intervalId;

        if (!showModal) {
            intervalId = setInterval(() => {
                if (timeLeft > 0) {
                    setTimeLeft(timeLeft - 1);
                } else {
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
            setTimeout(() => {
                setCurrentQuestion(currentQuestion + 1);
                setTimeLeft(20);
            }, 1000);
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
                <Question
                    question={triviaData[currentQuestion].question}
                    options={triviaData[currentQuestion].options}
                    correctAnswer={triviaData[currentQuestion].correctAnswer}
                    handleAnswer={handleAnswer}
                />
                <Score score={score} />
                <Timer timeLeft={timeLeft} />
            </section>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <h2>Respuesta incorrecta</h2>
                        <p>¡Inténtalo de nuevo!</p>
                    </div>
                </div>
            )}
        </main>
    );
}
