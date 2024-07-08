import  { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import '../../css/LineTime.css'

export const LineTime = ({timeLeft, timeTotal, selectedOption}) => {
  const [timerRender, setTimerRender] = useState([]);

    useEffect(() => {
      let intervalId;
      intervalId=setInterval(() => {
       if(timeLeft>0 && selectedOption===''){
        const time= document.getElementById(`timer-${timeLeft}`)
        time.style.backgroundColor="white"
        }
        else{
          clearInterval(intervalId)
        }
      },1000)
      return () => clearInterval(intervalId);
    }, [timeLeft])

    useEffect(()=>{
      setTimerRender(null);
      setTimerRender(renderTimers());

    },[timeTotal])
    
    const renderTimers = () => {
      let timers = [];
      for (let i = 1; i <= timeTotal; i++) {
        const timerClass = i === 1 ? 'start' : i === timeTotal ? 'end':'';
        const timer= document.getElementById(`timer-${i}`)
        timer?timer.style.backgroundColor='rgb(60, 173, 60)':''

        timers.push(
          <div key={`timer-${i}`} id={`timer-${i}`} style={{backgroundColor:'rgb(60, 173, 60)'}} className={timerClass} />
        );
      }
      return timers;
  
    };
    
  return (
    <>
    <main className="linetime">
      {timerRender}
    </main>
    </>  
  )
}

LineTime.propTypes = {
  timeLeft: PropTypes.number.isRequired,
  timeTotal: PropTypes.number.isRequired,
  selectedOption: PropTypes.string.isRequired,
};


