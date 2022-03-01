import React from 'react'
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import { AnimatePresence, motion } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';


function FeedbackList( ) {
    const { feedback } =useContext(FeedbackContext)

    console.log(feedback);
    if(!feedback || feedback.length === 0){
        return <p>Nie ma jeszcze opini...</p>
    }

return (
    <div className='feedback-list'>
    <AnimatePresence>
    {feedback.map((item)=> ( 
        <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <FeedbackItem key={item.id} item={item} />
        </motion.div>
    ))}
        </AnimatePresence>
    </div>
    )

//   return <div className='feedback-list'>
//       {feedback.map((item)=> (
//           <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
//       ))}
//       </div>
  
}




export default FeedbackList
