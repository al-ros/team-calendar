import { useContext } from 'react'
import './Calendar.scss'
import UserEventContext from '../../contexts/UserEventContext'
import UsersContext from '../../contexts/UsersContext'
import { DAYS, HOURS } from '../../constants'
import Button from '../Button'

const Calendar = () => {
    const { user } = useContext(UsersContext)
    const { userEvent } = useContext(UserEventContext)
    const editRemove = () => { console.log('click') }
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
                    <Button invisible label={userEvent[user?.value]?.[day]?.[time]?.subject} onClick={ editRemove }/>
                        
                    </div>)}
                </div>
            ))}
        </div>
    )
}

export default Calendar
