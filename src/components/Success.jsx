import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Icon from '../assets/icon-success.svg'
import './Success.css'

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.search.substring(2);

  const clickHandler = (e) => {
    e.preventDefault();
    navigate('/')
  }

  return (
    <main className="laptop:min-h-screen laptop:flex laptop:justify-center laptop:items-center mobile:bg-white">
      <section className='flex flex-col laptop:p-14 laptop:gap-10 laptop:items-stretch mobile:justify-between bg-white rounded-3xl mobile:p-5 mobile:min-h-screen laptop:min-h-full'>
        <img src={Icon} alt="success icon" className='w-14' />
        <h1 className="text-7xl mobile:text-5xl text-start font-bold">Thanks for <br /> subscribing!</h1>
        <p id='success-message' className='text-lg'>A confirmation has been sent to <strong>{email}.</strong> Please open it and click the button inside to confirm your email.</p>
        <button id="dismiss" className="p-4 rounded-lg font-bold" onClick={clickHandler}>Dissmiss message</button>
      </section>
    </main>
  )
}

export default Success