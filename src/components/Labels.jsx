import React from 'react'
import { ReactComponent as UpArrow } from '../assets/up-arrow.svg'
import { ReactComponent as DownArrow } from '../assets/down-arrow.svg'

// A stateless functional component to render the Labels.
// The logic for updating the Labels' values
// is kept in the Clock component's state.

const WorkTime = ({ workTime }) => {
  return (
    <div className='work-time'>
      Work for <strong>{workTime}</strong>
    </div>
  )
}

const WorkArrows = ({ updateChillTime }) => {
  return (
    <>
      <UpArrow
        className='work-up-arrow'
        id='chill-down-arrow'
        onClick={updateChillTime}
      />

      <DownArrow
        className='work-down-arrow'
        id='chill-up-arrow'
        onClick={updateChillTime}
      />
    </>
  )
}

const ChillTime = ({ chillTime }) => {
  return (
    <div className='chill-time'>
      Chill for <strong>{chillTime}</strong>
    </div>
  )
}

const ChillArrows = ({ updateWorkTime }) => {
  return (
    <>
      <UpArrow
        className='chill-up-arrow'
        id='chill-up-arrow'
        onClick={updateWorkTime}
      />

      <DownArrow
        className='chill-down-arrow'
        id='chill-down-arrow'
        onClick={updateWorkTime}
      />
    </>
  )
}

const Labels = ({ chillTime, workTime, updateChillTime, updateWorkTime }) => {

  return (
    <>
      <WorkTime workTime={workTime}/>

      <WorkArrows updateWorkTime={updateWorkTime}/>

      <ChillTime chillTime={chillTime}/>

      <ChillArrows updateChillTime={updateChillTime}/>
    </>
  )
}

export default Labels
