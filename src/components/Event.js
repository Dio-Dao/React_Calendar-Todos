import { useState } from 'react'
import { formatISO } from 'date-fns'
import { Link } from 'react-router-dom'

import ModalForm from './Form'

const Event = ({ event, eventClose }) => {

    const [edit, setEdit] = useState(false)

    const handleModal = (e) => {
        e.stopPropagation()
    }
    const handleEdit = () => {
        setEdit(!edit)
    }
    const time = formatISO(new Date(event.startsAt), { representation: 'time' }).substr(0, 5)
    const date = formatISO(new Date(event.startsAt), { representation: 'date' })

    const formEvent = {
        title: event.title,
        date: date,
        time: time,
        duration: event.durationMinutes,
        description: event.description
    }
    return (
        <div className='event' onClick={handleEdit}>
            <div className='modal__main'
                onClick={handleModal}>
                {edit ||
                    <div className='event__note'>
                        <Link
                            className='event__title-link'
                            to={{
                                pathname: event.id,
                                data: formEvent
                            }}
                            props={formEvent}>
                            {
                                <div className='event__note '
                                    title="Click to open">
                                    {event.title}
                                </div>
                            }
                        </Link>
                        <div >
                            {date}
                        </div>
                        <div>
                            {time}
                        </div>
                        <div>
                            {event.durationMinutes} min
                        </div>
                        <div>
                            {event.description}
                        </div>
                        <button
                            type='button'
                            className='form_button'
                            onClick={handleEdit}>
                            Edit
                        </button>
                    </div>
                }
                {edit &&
                    <ModalForm closeModal={handleEdit} eventClose={eventClose} edit={true} event={formEvent} />
                }
            </div>
        </div>
    )
}
export default Event
