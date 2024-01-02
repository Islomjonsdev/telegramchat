import React from 'react';
import "./EmptyChat.scss"

const EmptyChat = () => {
  return (
    <div className='emptychat'>
      <div className='emptychat__wrapper'>
         <span>Select a chat to start messaging</span>
      </div>
    </div>
  )
}

export default EmptyChat