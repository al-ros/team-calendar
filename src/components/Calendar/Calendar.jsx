import { useContext } from 'react'
import './Calendar.scss'
import UserEventContext from '../../contexts/UserEventContext'
import UsersContext from '../../contexts/UsersContext'
import { DAYS, HOURS } from '../../constants'

const Calendar = () => {
    const { user } = useContext(UsersContext)
    const { userEvent } = useContext(UserEventContext)
<<<<<<< HEAD
    const {day, time, subject} = userEvent
=======
    
>>>>>>> 1f486d4d061b6bfc5ef7da336a88b8e04897098d
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
                        {userEvent[user?.value]?.[day]?.[time]?.subject}
                    </div>)}
                </div>
            ))}
<<<<<<< HEAD
            {userEvent[user?.value]}
=======
>>>>>>> 1f486d4d061b6bfc5ef7da336a88b8e04897098d
        </div>
    )
}

export default Calendar
