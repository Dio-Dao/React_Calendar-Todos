import { addMonths } from 'date-fns'

// Actions
export const NEXT_MONTH = 'NEXT_MONTH';
export const PREVIOUS_MONTH = 'PREVIOUS_MONTH';
export const CURRENT_MONTH = 'CURRENT_MONTH';
export const SELECT_DAY = 'SELECT_DAY';


// Action creators/Middlewares
export const ACTION_NEXT_MONTH = () => ({
    type: NEXT_MONTH,
})
export const ACTION_PREV_MONTH = () => ({
    type: PREVIOUS_MONTH,
})
export const ACTION_CURRENT_MONTH = () => ({
    type: CURRENT_MONTH,
})
export const ACTION_SELECT_DAY = (data) => ({
    type: SELECT_DAY,
    payload: data
})

// Initial state
export const initialCalendarState = {
    selectedDay: null,
    selectedMonth: new Date(),
    // weeksInMonth: weeksInMonth(new Date)
}

// Reducer
export const calendarReducer = (state = initialCalendarState, action) => {
    switch (action.type) {
        case NEXT_MONTH:
            return {
                ...state,
                selectedMonth: addMonths(state.selectedMonth, 1),
                // weeksInMonth: weeksInMonth(addMonths(state.selectedMonth, 1))
            }
        case PREVIOUS_MONTH:
            return {
                ...state,
                selectedMonth: addMonths(state.selectedMonth, -1),
                // weeksInMonth: weeksInMonth(addMonths(state.selectedMonth, -1))
            }
        case CURRENT_MONTH:
            return {
                ...state,
                selectedMonth: new Date(),
                // weeksInMonth: weeksInMonth(new Date)
            }
        case SELECT_DAY:
            return {
                ...state,
                selectedDay: action.payload
            }
        default:
            return {
                ...state,
            }
    }
}
