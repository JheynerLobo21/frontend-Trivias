import React from 'react';

export const Timer = ({ timeLeft }) => {
  return (
    <div style={{color:"white", fontFamily:"fantasy", fontSize:"25px", textAlign:"center"}}>
      {timeLeft}
    </div>
  );
};