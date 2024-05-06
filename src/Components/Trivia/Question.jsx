import React, { useState } from 'react';

export const Question = ({ question, options, correctAnswer, handleAnswer }) => {
    const [selectedOption, setSelectedOption] = useState('');
    

    const handleClick = (option) => {
        setSelectedOption(option);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const isCorrect = selectedOption === correctAnswer;
        if (isCorrect) {
            handleAnswer(true); 
        } 
        else{
            handleAnswer(false);
        }
    };

    return (
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
                        {option}
                    </button>
                ))}
            </form>
        </div>
    );
};