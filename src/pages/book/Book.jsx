import React, { useState } from 'react'
import './book.css'

const Book = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [bookedDates, setBookedDates] = useState([
    new Date(2023, 5, 10),
    new Date(2023, 5, 15),
    new Date(2023, 5, 20),
  ])
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
  const year = today.getFullYear()
  const month = today.getMonth()

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate()

  const firstDayOfMonth = (month, year) => new Date(year, month, 1).getDay()

  const isBookedDate = (date) =>
    bookedDates.some((d) => d.toDateString() === date.toDateString())

  const renderCells = () => {
    const daysInMonthCount = daysInMonth(month, year)
    const firstDay = firstDayOfMonth(month, year)
    const rows = []

    for (let day = 1, i = 0; day <= daysInMonthCount; i++) {
      const cells = []

      for (let j = 0; j < 7 && day <= daysInMonthCount; j++, day++) {
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
            onClick={() => !disabled && setSelectedDate(date)}
          >
            {day}
          </td>
        )
      }

      rows.push(<tr key={i}>{cells}</tr>)
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
      <div className='booking'>
        <h3>Booking</h3>
        {selectedDate && (
          <div>
            <p>You have selected {selectedDate.toDateString()}</p>
            <button onClick={handleBookDates}>Book</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Book