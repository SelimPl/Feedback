import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } =useContext(FeedbackContext)

    //sr ocen
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    },0)  / feedback.length
    average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
        <h4>Opini: {feedback.length}</h4>
        <h3>Śr ocen: {isNaN(average) ? 0 : average} </h3>
    </div>
  )
}



export default FeedbackStats