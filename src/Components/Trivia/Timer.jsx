import PropTypes from 'prop-types';

export const Timer = ({ timeLeft }) => {
  return (
    <div style={{color:"white", fontFamily:"fantasy", fontSize:"25px", textAlign:"center"}}>
      {timeLeft}
    </div>
  );
};

Timer.propTypes = {
  timeLeft: PropTypes.number.isRequired,
};