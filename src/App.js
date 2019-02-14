import React, { Component } from 'react';
import './App.css';
import { ReactComponent as UpArrow } from './up-arrow.svg'
import { ReactComponent as DownArrow } from './down-arrow.svg'
import { ReactComponent as PlayButton } from './play.svg'
import { ReactComponent as PauseButton} from './pause.svg'
import { ReactComponent as ResetButton } from './reset.svg'

const Header = () => (
  <>
    <div className='header-wrapper'/>
    <header className='header'>Work | Chill</header>
  </>
)

const WorkTime = () => {
  return (
    <div className='work-time'>
      Work for <strong>25</strong>
    </div>
  )
}

const WorkArrows = () => {
  return (
    <>
      <UpArrow className='work-up-arrow' />
      <DownArrow className='work-down-arrow' />
    </>
  )
}

const ChillTime = () => {
  return (
    <>
      <div className='chill-time'>
        Chill for <strong>5</strong>
        </div>
    </>
  )
}

const ChillArrows = () => {
  return (
    <>
      <UpArrow className='chill-up-arrow'/>
      <DownArrow className='chill-down-arrow'/>
    </>
  )
}

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
      <circle className='animated-circle' cx="170" cy="170" r="166" stroke="white" strokeWidth="8" />
    </svg>
  )
}

const Indicator = () => {
  return (
    <div className='indicator'>Work</div>
  )
}

const Timer = () => {
  return (
    <div className='timer'>25:00</div>
  )
}

const Play = () => {
  return (
    <PlayButton className='play'/>
  )
}

const Reset = () => {
  return (
    <ResetButton className='reset'/>

  )
}

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header/>

        <WorkTime />

        <WorkArrows/>

        <ChillTime/>

        <ChillArrows/>

        <AnimatedCircle />

        <Indicator/>

        <Timer />

        <Play />

        <Reset />

      </div>
    );
  }
}

export default App;
