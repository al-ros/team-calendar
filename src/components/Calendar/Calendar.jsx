import { useContext } from 'react'
import './Calendar.scss'
import UserEventContext from '../../contexts/UserEventContext'
import UsersContext from '../../contexts/UsersContext'
import { DAYS, HOURS } from '../../constants'

const Calendar = ({onClickEditEvent, filterValue}) => {
    const { USERS } = useContext(UsersContext)
    const { userEvent } = useContext(UserEventContext)

    const user = USERS.find( (item) => item.value === filterValue)
    const getSubject = (user, day, time) => userEvent[user?.value]?.[day]?.[time]?.subject

    return(
        <div className="calendar">
            <div className="calendar__row">
                <div className="calendar__cell calendar__cell--head">{user?.label}</div>
                {DAYS.map((day) => <div key={day} className="calendar__cell calendar__cell--head">{day}</div>)}
            </div>
            {HOURS.map((time) => (
                <div key={time} className="calendar__row">
                    <div className="calendar__cell calendar__cell--strong">{time}</div>
                    {DAYS.map((day) => 
                    <div key={day} className="calendar__cell" onClick={ () => onClickEditEvent({userName: user.value, day, time, subject: getSubject(user, day, time)}) }>
                        {getSubject(user, day, time)} 
                        {/* {userEvent.map((item) => console.log(item))} */}
                        {/* {console.log(user)} */}
                        {/* {
                            if(user.value !== 'allUsers') {
                                return null
                            } else {
                                return null
                            }
                        } */}
                    </div>)}
                </div>
            ))}
            {/* {console.log(user)} */}
        </div>
    )
}

export default Calendar
