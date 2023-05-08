// import React, { useState } from 'react'
// import './book.css'

// const Book = () => {
//   const [selectedDate, setSelectedDate] = useState(null)
//   const [bookedDates, setBookedDates] = useState([
//     new Date(2023, 5, 10),
//     new Date(2023, 5, 15),
//     new Date(2023, 5, 20),
//   ])
//   const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]

//   const today = new Date()
//   const year = today.getFullYear()
//   const month = today.getMonth()

//   const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate()

//   const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay()

//   const isBookedDate = (date) =>
//     bookedDates.some((d) => d.toDateString() === date.toDateString())

//   const renderCells = () => {
//     const daysInMonthCount = daysInMonth(month, year)
//     const firstDay = firstDayOfMonth(month, year)
//     const rows = []

//     for (let day = 1, i = 0; day <= daysInMonthCount; i++) {
//       const cells = []

//       for (let j = 0; j < 7 && day <= daysInMonthCount; j++, day++) {
//         const date = new Date(year, month, day)
//         const selected = selectedDate?.toDateString() === date.toDateString()
//         const booked = isBookedDate(date)
//         const disabled = booked || date < today
//         cells.push(
//           <td
//             key={j}
//             className={`${selected ? 'selected' : ''} ${
//               booked ? 'booked' : ''
//             }`}
//             onClick={() => !disabled && setSelectedDate(date)}
//           >
//             {day}
//           </td>
//         )
//       }

//       rows.push(<tr key={i}>{cells}</tr>)
//     }

//     return rows
//   }

//   const handleBookDates = () => {
//     if (selectedDate && !isBookedDate(selectedDate)) {
//       setBookedDates([...bookedDates, selectedDate])
//       setSelectedDate(null)
//     }
//   }

//   return (
//     <div className='calendar'>
//       <h2>
//         {months[month]} {year}
//       </h2>
//       <table>
//         <thead>
//           <tr>
//             {weekdays.map((day) => (
//               <th key={day}>{day}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>{renderCells()}</tbody>
//       </table>
//       <div className='booking'>
//         <h3>Booking</h3>
//         {selectedDate && (
//           <div>
//             <p>You have selected {selectedDate.toDateString()}</p>
//             <button onClick={handleBookDates}>Book</button>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Book

// import React, { useState } from 'react'
// import './book.css'
// import Booking from '../booking/Booking'

// const Book = () => {
//   const [selectedDate, setSelectedDate] = useState(null)
//   const [bookedDates, setBookedDates] = useState([
//     new Date(2023, 5, 10),
//     new Date(2023, 5, 15),
//     new Date(2023, 5, 20),
//   ]) // preset booked dates for demonstration purposes

//   const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
//   const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ]

//   const today = new Date()
//   const year = today.getFullYear()
//   const month = today.getMonth()

//   const daysInMonth = (month, year) => {
//     return new Date(year, month + 1, 0).getDate()
//   }

//   const firstDayOfMonth = (month, year) => {
//     return new Date(year, month, 1).getDay()
//   }

//   const isBookedDate = (date) => {
//     return bookedDates.some(
//       (bookedDate) => bookedDate.toDateString() === date.toDateString()
//     )
//   }

//   const renderCells = () => {
//     const daysInMonthCount = daysInMonth(month, year)
//     const firstDay = firstDayOfMonth(month, year)

//     let day = 1
//     let rows = []

//     for (let i = 0; i < 6; i++) {
//       let cells = []

//       for (let j = 0; j < 7; j++) {
//         if (i === 0 && j < firstDay) {
//           cells.push(<td key={j}></td>)
//         } else if (day > daysInMonthCount) {
//           break
//         } else {
//           const date = new Date(year, month, day)
//           const selected = selectedDate?.toDateString() === date.toDateString()
//           const booked = isBookedDate(date)
//           const disabled = booked || date < today
//           cells.push(
//             <td
//               key={j}
//               className={`${selected ? 'selected' : ''} ${
//                 booked ? 'booked' : ''
//               }`}
//               onClick={() => !disabled && !booked && setSelectedDate(date)}
//             >
//               {day}
//             </td>
//           )
//           day++
//         }
//       }

//       rows.push(<tr key={i}>{cells}</tr>)
//     }

//     return rows
//   }

//   const handleBookDates = () => {
//     if (selectedDate && !isBookedDate(selectedDate)) {
//       setBookedDates([...bookedDates, selectedDate])
//       setSelectedDate(null)
//     }
//   }

//   return (
//     <div className='calendar'>
//       <h2>
//         {months[month]} {year}
//       </h2>
//       <table>
//         <thead>
//           <tr>
//             {weekdays.map((day) => (
//               <th key={day}>{day}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>{renderCells()}</tbody>
//       </table>

//       {selectedDate && !isBookedDate(selectedDate) && (
//         <Booking
//           selectedDate={selectedDate}
//           handleBookDates={handleBookDates}
//         />
//       )}
//     </div>
//   )
// }

// export default Book

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

function Book() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [bookedDates, setBookedDates] = useState([
    new Date(2023, 5, 10),
    new Date(2023, 5, 15),
    new Date(2023, 5, 20),
  ]) // preset booked dates for demonstration purposes
  const [monthYear, setMonthYear] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  })

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const today = new Date()
  const { month, year } = monthYear

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay()
  }

  const isBookedDate = (date) => {
    return bookedDates.some(
      (bookedDate) => bookedDate.toDateString() === date.toDateString()
    )
  }

  const renderCells = () => {
    const daysInMonthCount = daysInMonth(month, year)
    const firstDay = firstDayOfMonth(month, year)

    let day = 1
    let rows = []

    // Add cells for previous month
    const prevMonth = month === 0 ? 11 : month - 1
    const prevYear = prevMonth === 11 ? year - 1 : year
    const daysInPrevMonth = daysInMonth(prevMonth, prevYear)
    const startPrevMonth = daysInPrevMonth - firstDay + 1
    for (let i = 0; i < firstDay; i++) {
      const date = new Date(prevYear, prevMonth, startPrevMonth + i)
      const booked = isBookedDate(date)
      const disabled = booked || date < today
      rows[0].push(
        <td
          key={i - firstDay}
          className={`prev-month ${booked ? 'booked' : ''}`}
          onClick={() => !disabled && !booked && setSelectedDate(date)}
        >
          {startPrevMonth + i}
        </td>
      )
    }

    // Add cells for current month
    for (let i = 0; i < 6; i++) {
      let cells = []

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          continue
        }
        if (day > daysInMonthCount) {
          break
        }
        const date = new Date(year, month, day)
        const selected = selectedDate?.toDateString() === date.toDateString()
        const booked = isBookedDate(date)
        const disabled = booked || date < today
        cells.push(
          <td
            key={j}
            className={`${selected ? 'selected' : ''} ${
              booked ? 'booked' : ''
            }`}
            onClick={() => !disabled && !booked && setSelectedDate(date)}
          >
            {day}
          </td>
        )
        day++
      }

      rows.push(<tr key={i}>{cells}</tr>)
    }

    // Add cells for next month
    const nextMonth = month === 11 ? 0 : month + 1
    const nextYear = nextMonth === 0 ? year + 1 : year
    const remainingCells = 7 - rows[rows.length - 1].length
    for (let i = 0; i < remainingCells; i++) {
      const date = new Date(nextYear, nextMonth, i + 1)
      const booked = isBookedDate(date)
      const disabled = booked || date < today
      rows[rows.length - 1].push(
        <td
          key={daysInMonthCount + i + 1}
          className={`next-month ${booked ? 'booked' : ''}`}
          onClick={() => !disabled && !booked && setSelectedDate(date)}
        >
          {i + 1}
        </td>
      )
    }

    return rows
  }
  const handleBookDates = () => {
    if (selectedDate && !isBookedDate(selectedDate)) {
      setBookedDates([...bookedDates, selectedDate])
      setSelectedDate(null)
    }
  }

  return (
    <div className='calendar'>
      <h2>
        {months[month]} {year}
      </h2>
      <table>
        <thead>
          <tr>
            {weekdays.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderCells()}</tbody>
      </table>

      {selectedDate && !isBookedDate(selectedDate) && (
        <Booking
          selectedDate={selectedDate}
          handleBookDates={handleBookDates}
        />
      )}
    </div>
  )
}

export default Book
