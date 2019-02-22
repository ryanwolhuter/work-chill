import React from 'react'
import { ReactComponent as Plus } from '../assets/plus.svg'
import { ReactComponent as Minus } from '../assets/minus.svg'

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
    <div className='length-controls'>
      <div className='work-controls'>

        <WorkTime workTime={workTime} />

        <div className='length-control-buttons'>
          <Minus
            className='work-minus'
            id='work-minus'
            onClick={updateWorkTime}
          />
          <Plus
            className='work-plus'
            id='work-plus'
            onClick={updateWorkTime}
          />
        </div>
      </div>

      <div className='chill-controls'>
        <ChillTime chillTime={chillTime} />

        <div className='length-control-buttons'>
          <Minus
            className='chill-minus'
            id='chill-minus'
            onClick={updateChillTime}
          />
          <Plus
            className='chill-plus'
            id='chill-plus'
            onClick={updateChillTime}
          />
        </div>
      </div>
    </div>
  )
}

export default Labels
