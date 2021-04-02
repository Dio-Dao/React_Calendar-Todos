import {
    eachDayOfInterval,
    eachWeekOfInterval,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    isSameDay,
    parseISO,
    formatISO
} from 'date-fns'

// get an array consisting of first days of every week in month

const getWeeks = (date) => eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
})

// get an array consisting off all days in week

const getDays = (date) => eachDayOfInterval(
    {
        start: startOfWeek(date),
        end: endOfWeek(date),
    },
);

//get an array consisting of all days in month

export const weeksInMonth = (date) => {
    const weeks = getWeeks(date)
    console.log('weeksInMonth')
    return weeks.map(week => getDays(week))
}

//get an array consisting of filtered events for each day

export const eventsInDay = (events, day) => {
    console.log('eventsInDay')
    return (
        events.filter((event) => isSameDay(day, parseISO(event.startsAt)))
    )
};

export const required = value => (value ? undefined : 'Required')
export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const showResults = async values => {
    const val = {
        title: values.title,
        startsAt: formatISO(new Date(`${values.date},${values.time ? values.time : '00:00'}`)),
        durationMinutes: values.duration ? values.duration : 0,
        description: values.description
    }
    await sleep(300)//simulate server latency
    window.alert(JSON.stringify(val, undefined, 2))
}
