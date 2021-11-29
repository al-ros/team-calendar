import { useContext } from 'react'
import './Calendar.scss'
import UsersContext from '../../contexts/UsersContext'

const Calendar = () => {
    const { user } = useContext(UsersContext)
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    const times = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
    return(
        <div className="calendar">
            <div className="calendar__row">
                <div className="calendar__cell calendar__cell--head">{user?.label}</div>
                {days.map((day) => <div key={day} className="calendar__cell calendar__cell--head">{day}</div>)}
            </div>
            {times.map((time) => (
                <div key={time} className="calendar__row">
                    <div className="calendar__cell calendar__cell--strong">{time}</div>
                    {days.map((day) => <div key={day} className="calendar__cell"></div>)}
                </div>
            ))}
        </div>
    )
}

export default Calendar
