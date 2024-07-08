import { useEffect, useState } from 'react';
import { LineTime } from './LineTime';
import { useNavigate } from 'react-router-dom';
import { Timer } from './Timer';
import PropTypes from 'prop-types';
import '../../css/Trivia.css';

export const Question = ({ saveScore, user, data, time, setTimeLeft, timeTotal, question, options, handleAnswer, score }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [timeLeft, setTimeLeftInterno] = useState(time);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let intervalId;

        if (timeLeft > 0 && selectedOption === '' && !showModal) {
            intervalId = setInterval(() => {
                setTimeLeftInterno(prevTimeLeft => prevTimeLeft - 1);
                setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
            }, 1000);
        } else if (timeLeft === 0 && selectedOption === '') {
            saveScore(user.idUser, data.idSubCategory, score);
            setShowModal(true);
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [timeLeft, selectedOption, showModal, saveScore, user.idUser, data.idSubCategory, score]);

    useEffect(() => {
        if (showModal) {
            const timer = setTimeout(() => {
                navigate("/endGame", {state:{scoreTotal: score}});
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showModal, navigate]);

    const handleClick = (option) => {
        setSelectedOption(option);
    };

    useEffect(() => {
        setTimeLeftInterno(time); // Sincroniza el estado interno cuando el tiempo cambia
    }, [time]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const response = document.getElementById(selectedOption.answer);
        const response2 = document.getElementsByName('option');
        selectedOption.correct ? response.classList.add("correct") : response.classList.add("wrong");
        response2.forEach(button => button.id !== selectedOption.answer ? button.disabled = true : '');
        handleAnswer(selectedOption.correct);
    };

    return (
        <>
            <div className='question-trivia'>
                <p className='trivia-description'>{question}</p>
                <LineTime
                    timeLeft={timeLeft}
                    selectedOption={selectedOption}
                    timeTotal={timeTotal}
                />
                <Timer timeLeft={timeLeft} />
                <form className="form-answers" onSubmit={handleSubmit}>
                    <div className='options'>
                        {options.map((option, index) => (
                            <div key={index} className="border-bottom">
                                <button
                                    type='submit'
                                    style={{ marginRight: '10px' }}
                                    className='question-button'
                                    id={option.answer}
                                    name='option'
                                    onClick={() => handleClick(option)}
                                >
                                    {option.answer}
                                </button>
                            </div>
                        ))}
                    </div>
                </form>
            </div>

            {(timeLeft === 0 && showModal && selectedOption === '') && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Se te ha acabado el tiempo</h2>
                    </div>
                </div>
            )}
        </>
    );
};

Question.propTypes = {
    saveScore: PropTypes.func,
    user: PropTypes.shape({
        idUser: PropTypes.number.isRequired,
    }).isRequired,
    data: PropTypes.shape({
        idSubCategory: PropTypes.number.isRequired,
    }).isRequired,
    question: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    correctAnswer: PropTypes.shape({
        answer: PropTypes.string.isRequired,
    }).isRequired,
    handleAnswer: PropTypes.func,
    score: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    setTimeLeft: PropTypes.func,
    timeTotal: PropTypes.number.isRequired,
};
