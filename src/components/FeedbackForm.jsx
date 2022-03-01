import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'



function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisableed, setbtnDisableed] = useState(true)
    const [message, setMessage] = useState('Podziel się swoiją opinia')

    const {addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setbtnDisableed(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === '') {
            setbtnDisableed(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <=10) {
            setMessage('Opinia musi zawierać wiecej niż 10 znaków')
            setbtnDisableed(true)
        }else {
            setMessage(null)
            setbtnDisableed(false)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback ={
                text,
                rating,

            }

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)

            }else{

                addFeedback(newFeedback );
            }

            setText('')
        }

    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h3>Jak oceniasz nasze usługi ?</h3>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='...' value={text} />
                <Button type="submit" isDisabled={btnDisableed} >Oceń</Button>
            </div>

            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm