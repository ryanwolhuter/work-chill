import React from 'react'
import { ReactComponent as PlayButton } from '../assets/play.svg'
import { ReactComponent as PauseButton } from '../assets/pause.svg'
import { ReactComponent as ResetButton } from '../assets/reset.svg'

const Circle = () => {
  return (
    <svg className='circle' viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="170" cy="170" r="166" />
    </svg>
  )
}

const AnimatedCircle = () => {
  return (
    <svg className='spinner' viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle id='animated-circle' className='animated-circle' cx="170" cy="170" r="166" stroke="white" strokeWidth="8" />
    </svg>
  )
}

const Indicator = ({ chilling }) => {
  return (
    <div className='indicator'>{chilling ? 'Chill' : 'Work'}</div>
  )
}

const Timer = ({ clock }) => {
  return (
    <div className='timer'>{clock}</div>
  )
}

const Play = () => {
  return (
    <PlayButton
      className='play'
    />
  )
}

const Pause = () => {
  return (
    <PauseButton
      className='pause'
    />
  )
}

const Reset = ({ handleReset }) => {
  return (
    <ResetButton
      className='reset'
      onClick={handleReset}
    />

  )
}

/* This is the presentational component that renders the Clock to the DOM. */

const ShowClock = ({
  clock,
  handlePlayPause,
  handleReset,
  chilling,
  remainingTime,
  pause
  }) => {

  return (
    <>
      <Indicator chilling={chilling}/>

      <Timer clock={clock}/>

      {remainingTime ? <AnimatedCircle /> : <Circle />}

      {remainingTime && !pause
        ? <PauseButton className='pause' onClick={handlePlayPause} />
        : <PlayButton className='play' onClick={handlePlayPause} />}

      <Reset handleReset={handleReset}/>

    </>
  )
}

export default ShowClock
