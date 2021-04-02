import { getYear, getMonth, getDate, isSameMonth } from 'date-fns'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSelectedMonth, selectedDaysInMonth } from '../selectors'


import { days, months } from '../config'
import Modal from './Modal'
import EventList from './EventList'

import {
    ACTION_NEXT_MONTH,
    ACTION_PREV_MONTH,
    ACTION_CURRENT_MONTH,
    ACTION_SELECT_DAY
} from '../ducks/calendar'


const Calendar = () => {

    const dispatch = useDispatch();

    const selectedMonth = useSelector(getSelectedMonth())

    const weeks = useSelector(selectedDaysInMonth)

    const [show, setShow] = useState(false)

    const handleOpenModal = (e) => {
        setShow(!show)
        console.log('open add modal')
        const date = {
            day: e.target.getAttribute('day'),
            month: getMonth(selectedMonth),
            year: getYear(selectedMonth)
        }
        dispatch(ACTION_SELECT_DAY(date))
    }

    const handleCloseModal = () => {
        setShow(!show)
        console.log('close add modal')
    }
    return (
        <div className='container'>
            <div className='calendar__month'>
                <span>{months[getMonth(selectedMonth)]} {getYear(selectedMonth)}</span>

                <button
                    className='calendar__btn prevMonth-btn'
                    onClick={() => dispatch(ACTION_PREV_MONTH())}>
                    prev
            </button>
                <button
                    className='calendar__btn nextMonth-btn'
                    onClick={() => dispatch(ACTION_NEXT_MONTH())}>
                    next
            </button>
                <button
                    className='calendar__btn currentMonth-btn'
                    onClick={() => dispatch(ACTION_CURRENT_MONTH())}>
                    current
                </button>
            </div>
            <div className='calendar__days-in-week'>
                {
                    days.map(day =>
                        <div
                            key={day}
                            className='calendar__day'>
                            {day}
                        </div>)
                }
            </div>
            <div className='calendar__cells'>
                {
                    weeks.map(week =>
                        week.map((day) => {
                            return (
                                <div
                                    onClick={handleOpenModal}
                                    className={`${isSameMonth(day, selectedMonth) ? 'calendar__cell' : 'calendar__cell-notCurrentMonth'}`}
                                    // className='calendar__cell'
                                    day={getDate(day)}
                                    key={day}
                                >
                                    {getDate(day)}
                                    <EventList day={day} />
                                </div>)
                        }))
                }
            </div>
            <Modal show={show} closeModal={handleCloseModal} />
        </div>
    )
}

export default Calendar