import React from 'react';
import { IoSend } from "react-icons/io5";
import "./Footer.scss"


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
          <form>
              <input type="text" placeholder='Write a message'/>
              <button>
                <IoSend />
              </button>
          </form>
      </div>
    </div>
  )
}

export default Footer