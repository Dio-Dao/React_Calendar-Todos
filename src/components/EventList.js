import { data } from '../mockedEventList'
import { useState, useMemo } from 'react'
import { eventsInDay } from '../utils'
import Event from './Event'


const EventList = ({ day }) => {

    // get an array of events per day and sort it by time
    const events = useMemo(() => {
        const e = eventsInDay(data, day)
        return e.sort((a, b) => new Date(a.startsAt) - new Date(b.startsAt))
    }, [data, day])

    //get an array of events with default false values as initialState
    const initialState = useMemo(() => events.map(() => false), [events])
    const [show, setShow] = useState(initialState)

    const handleClick = (e) => {
        e.stopPropagation()
        const i = e.target.getAttribute('i')
        if (i)
            setShow(prevState => ({
                ...prevState,
                [i]: !prevState[i]
            }))
        else setShow(initialState)
    }
    return <>
        <div className='event__list'>
            {Boolean(events.length) &&
                events.map((event, i) => (
                    <div className='event__mini'
                        i={i}
                        key={event.id}
                        onClick={handleClick}>
                        {event.title}
                        {show[i] && <Event event={event} eventClose={handleClick} />}
                    </div>
                ))}
        </div>
    </>
}
export default EventList