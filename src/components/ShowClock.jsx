import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { ReactComponent as PlayButton } from '../assets/play.svg'
import { ReactComponent as PauseButton } from '../assets/pause.svg'
import { ReactComponent as ResetButton } from '../assets/reset.svg'

/* Static and animated circle SVGs */

const Circle = () => {
  return (
    <svg
      className='circle'
      viewBox="0 0 340 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="170" cy="170" r="166" />
    </svg>
  )
}

const AnimatedCircle = () => {
  return (
    <svg
      className='spinner'
      viewBox="0 0 340 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        id='animated-circle'
        className='animated-circle'
        cx="170" cy="170" r="166"
        stroke="white"
        strokeWidth="8"
      />
    </svg>
  )
}

/* Indicates whether we're working or chilling */

const Indicator = ({ chilling }) => {
  return (
    <div className='indicator'>
      {chilling ? 'Chill' : 'Work'}
    </div>
  )
}

/* Displays the countdown timer */

const Timer = ({ clock }) => {
  return (
    <div className='timer'>{clock}</div>
  )
}

/* The reset button */

const Reset = ({ handleReset, resetButtonClicked }) => {

  const conditionalClasses = resetButtonClicked
    ? 'reset reset-clicked'
    : 'reset'

  return (
    <ResetButton
      className={conditionalClasses}
      onClick={handleReset}
    />
  )
}

/* Presentational component that renders the Clock to the DOM. */

const ShowClock = ({
  clock,
  handlePlayPause,
  handleReset,
  chilling,
  remainingTime,
  pause,
  resetButtonClicked
  }) => {

  return (
    <>
      <Indicator chilling={chilling}/>

      <Timer clock={clock}/>

      {remainingTime ? <AnimatedCircle /> : <Circle />}

    <div className='timer-controls'>

      <CSSTransition
        in={!remainingTime || pause}
        timeout={200}
        classNames='play-pause'
        unmountOnExit
      >
        <PlayButton
          className='play-pause'
          onClick={handlePlayPause}
        />
      </CSSTransition>

      <CSSTransition
        in={remainingTime && !pause}
        timeout={200}
        classNames='play-pause'
        unmountOnExit
      >
        <PauseButton
          className='play-pause'
          onClick={handlePlayPause}
        />
      </CSSTransition>

        <Reset
          handleReset={handleReset}
          resetButtonClicked={resetButtonClicked}
        />

      </div>
      </>
  )
}

export default ShowClock
