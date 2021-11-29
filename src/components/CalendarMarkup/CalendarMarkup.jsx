import { useContext } from 'react'
import './CalendarMarkup.scss'
import UsersContext from '../../contexts/UsersContext'

const CalendarMarkup = () => {
    const { user } = useContext(UsersContext)
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    const times = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
    return(
        <div className="table">
            <div className="table__row">
                <div className="table__cell table__cell--head">{user?.label}</div>
                {days.map((day) => <div className="table__cell table__cell--head">{day}</div>)}
            </div>
            {times.map((time) => (
                <div className="table__row">
                    <div className="table__cell table__cell--strong">{time}</div>
                    {days.map(() => <div className="table__cell"></div>)}
                </div>
            ))}
        </div>
    )
}

export default CalendarMarkup
