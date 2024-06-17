import React, { useEffect } from 'react'
import '../../css/LineTime.css'

export const LineTime = ({timeLeft}) => {

    useEffect(() => {
      let intervalId;
      intervalId=setInterval(() => {
       if(timeLeft>0){
        const time= document.getElementById(`timer-${timeLeft}`)
        time.style.backgroundColor="white"
        }
        else{
          clearInterval(intervalId)
        }
      },1000)
      return () => clearInterval(intervalId);
    }, [timeLeft])
    
    
  return (
    <>
    <main className="linetime">
    <div id='timer-1' className='start'/>
    <div id='timer-2'/>
    <div id='timer-3'/>
    <div id='timer-4'/>
    <div id='timer-5'/>
    <div id='timer-6'/>
    <div id='timer-7'/>
    <div id='timer-8'/>
    <div id='timer-9'/>
    <div id='timer-10'/>
    <div id='timer-11'/>
    <div id='timer-12'/>
    <div id='timer-13'/>
    <div id='timer-14'/>
    <div id='timer-15'/>
    <div id='timer-16'/>
    <div id='timer-17'/>
    <div id='timer-18'/>
    <div id='timer-19'/>
    <div id='timer-20' className='end'/>
    </main>
    </>  
  )
}
