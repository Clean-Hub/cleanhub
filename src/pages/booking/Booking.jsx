import React, { useState } from 'react'
import './booking.css'

function Booking(props) {
  const { selectedDate, handleBookDates } = props
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleBookDates(selectedDate, name, email, phone)
  }

  return (
    <div className='booking'>
      <h3>Booking for {selectedDate.toDateString()}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' value={name} onChange={handleNameChange} />
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor='phone'>Phone:</label>
        <input
          type='tel'
          id='phone'
          value={phone}
          onChange={handlePhoneChange}
        />
        <button type='submit'>Book</button>
      </form>
    </div>
  )
}

export default Booking
