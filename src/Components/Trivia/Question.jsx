import { useEffect, useState} from 'react';
import { LineTime } from './LineTime';
import { Link } from 'react-router-dom';
import { Timer } from './Timer';
import PropTypes from 'prop-types';
import '../../css/Trivia.css'

export const Question = ({ saveScore, user, data, time, setTimeLeft, question, options, correctAnswer, handleAnswer, score, category }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [timeLeft, setTimeLeftInterno] = useState(time);
    const [clickOption, setClickOption] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [timeTotal, setTimeTotal] = useState(time);



    useEffect(() => {
        let intervalId;

            intervalId = setInterval(() => {
                if (timeLeft > 0) {
                    setTimeLeftInterno(timeLeft - 1);
                    setTimeLeft(timeLeft - 1);
                } else {
                    saveScore(user.idUser,data.idSubCategory,score)
                    setShowModal(true);
                    clearInterval(intervalId);
                }
            }, 1000);
        

        return () => clearInterval(intervalId);
    }, [timeLeft]);


     const handleClick = (option) => {
        setSelectedOption(option);
        setClickOption(true)
    };

    useEffect(() => {
        setTimeLeftInterno(time); // Sincroniza el estado interno cuando el tiempo cambia
    }, [time]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(selectedOption.answer)
        console.log(correctAnswer.answer)
        const response= document.getElementById("responded")
        console.log(selectedOption.correct)
        handleAnswer(selectedOption.correct);
        selectedOption.correct?response.style.backgroundColor="green": response.style.backgroundColor="red"
    };
    return (
        <>
        <div className='question-trivia'>
            <p className='trivia-description'>{question}</p>
            <LineTime 
            timeLeft={timeLeft}
            timeTotal={timeTotal}
            />
            <Timer timeLeft={timeLeft} />
            <form className="form-answers" onSubmit={handleSubmit}>
                <div className='options'>
                {options.map((option, index) => (
                    <button
                    type='submit'
                    key={index}
                    style={{ marginRight: '10px' }}
                    className='question-button'
                    id={clickOption?"responded":""}
                    onClick={() => handleClick(option)}
                >
                    {option.answer}
                </button>
                ))}
                </div>
            </form>
        </div>

        
        {(timeLeft==0&&showModal) && (
                <div className="modal">
                    <div className="modal-content">
                        <Link to={`/categories/${category}`}>
                            <span className="close-button">&times;</span>
                        </Link>
                        <h2>Se te ha acabado el tiempo</h2>
                        <p>¡Inténtalo de nuevo!</p>
                        <Link to={`/categories/${category}`}>
                        <button>Salir</button>
                        </Link>
                        <button>Volver a jugar</button>
                    </div>
                </div>
            )}
        </>
    );
    /*return (
        <div>
            <h2>{question}</h2>
            <form onSubmit={handleSubmit}>
                {options.map((option, index) => (
                    <button
                        type='submit'
                        key={index}
                        onClick={() => handleClick(option)}
                        style={{ marginRight: '10px' }}
                        className={selectedOption === option ? 'selected' : ''}
                    >
                        {option.answer}
                    </button>
                ))}
            </form>
        </div>
    );*/
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
    handleAnswer:PropTypes.func,
    score:PropTypes.number.isRequired,
    category:PropTypes.string.isRequired

};