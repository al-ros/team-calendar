import { useContext } from 'react'
import './Calendar.scss'
import UserEventContext from '../../contexts/UserEventContext'
import UsersContext from '../../contexts/UsersContext'
import { DAYS, HOURS } from '../../constants'

const Calendar = () => {
    const { user } = useContext(UsersContext)
    const { UserEvent } = useContext(UserEventContext)
    return(
        <div className="calendar">
            <div className="calendar__row">
                <div className="calendar__cell calendar__cell--head">{user?.label}</div>
                {DAYS.map((day) => <div key={day} className="calendar__cell calendar__cell--head">{day}</div>)}
            </div>
            {HOURS.map((time) => (
                <div key={time} className="calendar__row">
                    <div className="calendar__cell calendar__cell--strong">{time}</div>
                    {DAYS.map((day) => <div key={day} className="calendar__cell">
                        {console.log(UserEvent)}
                    </div>)}
                </div>
            ))}
        </div>
    )
}

export default Calendar
