const EventPage = ({ history, location }) => {
    const handleRedirect = () => {
        history.push('/');
    }
    const { title, date, time, duration, description } = location.data
    return (
        <div className='event__page'>
            <div>{title}</div>
            <div>{date}</div>
            <div>{time}</div>
            <div>{duration} min </div>
            <div>{description}</div>
            <button onClick={handleRedirect}>go back</button>
        </div>
    )
}
export default EventPage