import React, { useState } from 'react'
import './Calendar.css'

const Book = () => {
  const [selectedDate, setSelectedDate] = useState(null)
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

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const firstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay()
  }

  const renderCells = () => {
    const daysInMonthCount = daysInMonth(month, year)
    const firstDay = firstDayOfMonth(month, year)

    let day = 1
    let rows = []

    for (let i = 0; i < 6; i++) {
      let cells = []

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          cells.push(<td key={j}></td>)
        } else if (day > daysInMonthCount) {
          break
        } else {
          const date = new Date(year, month, day)
          const selected = selectedDate?.toDateString() === date.toDateString()
          cells.push(
            <td
              key={j}
              className={`${selected ? 'selected' : ''}`}
              onClick={() => setSelectedDate(date)}
            >
              {day}
            </td>
          )
          day++
        }
      }

      rows.push(<tr key={i}>{cells}</tr>)
    }

    return rows
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
    </div>
  )
}

export default Book

// .calendar {
//   margin: 0 auto;
//   width: 300px;
// }

// table {
//   border-collapse: collapse;
//   width: 100%;
// }

// th,
// td {
//   border: 1px solid #ccc;
//   padding: 10px;
//   text-align: center;
// }

// th {
//   background-color: #eee;
// }

// td:hover {
//   background-color: #eee;
//   cursor: pointer;
// }

// .selected {
//   background-color: #008cba;
//   color: #fff;
// }
