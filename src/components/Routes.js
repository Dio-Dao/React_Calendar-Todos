import { Switch, Route } from 'react-router-dom';
import { CalendarPage, EventPage, NotFound } from '../pages'

const Routes = () => {
    return (
        <Switch>
            <Route
                exact path='/'
                component={CalendarPage}
            />
            <Route
                exact path='/:id'
                component={EventPage}
            />
            <Route
                component={NotFound}
            />
        </Switch>

    )
}
export default Routes