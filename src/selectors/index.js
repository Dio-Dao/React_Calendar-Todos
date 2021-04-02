import { createSelector } from "reselect";

import { weeksInMonth } from '../utils'

export const getDate = () => {
    return (state) => state.calendar.selectedDay
}
export const getSelectedMonth = () => {
    return (state) => state.calendar.selectedMonth
}

export const selectedDaysInMonth = createSelector(
    [state => state.calendar.selectedMonth],
    selectedMonth => weeksInMonth(selectedMonth)
)

