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

const ChillTime = ({ chillTime }) => {
  return (
    <div className='chill-time'>
      Chill for <strong>{chillTime}</strong>
    </div>
  )
}


const Labels = ({ chillTime, workTime, updateChillTime, updateWorkTime }) => {

  return (
    <>
      <WorkTime workTime={workTime}/>

      <UpArrow
        className='work-up-arrow'
        id='work-up-arrow'
        onClick={updateWorkTime}
      />

      <DownArrow
        className='work-down-arrow'
        id='work-down-arrow'
        onClick={updateWorkTime}
      />

      <ChillTime chillTime={chillTime}/>

      <UpArrow
        className='chill-up-arrow'
        id='chill-up-arrow'
        onClick={updateChillTime}
      />

      <DownArrow
        className='chill-down-arrow'
        id='chill-down-arrow'
        onClick={updateChillTime}
      />
    </>
  )
}

export default Labels
