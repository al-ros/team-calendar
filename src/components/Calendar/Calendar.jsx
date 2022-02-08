import { useContext } from 'react'
import './Calendar.scss'
import CalendarEvent from './CalendarEvent'
import UserEventContext from '../../contexts/UserEventContext'
import UsersContext from '../../contexts/UsersContext'
import { DAYS, HOURS } from '../../constants'

const Calendar = ({onClickEditEvent, filterValue}) => {
    const { USERS } = useContext(UsersContext)
    const { userEvent } = useContext(UserEventContext)

    const isAllUsers = filterValue === 'allUsers'
    const selectedUser = USERS.find( (item) => item.value === filterValue)
    const getSubject = (user, day, time) => userEvent[user?.value]?.[day]?.[time]?.subject
    
    return(
        <div className="calendar">
            <div className="calendar__row">
                <div className="calendar__cell calendar__cell--head">{selectedUser?.label}</div>
                {DAYS.map((day) => <div key={day} className="calendar__cell calendar__cell--head">{day}</div>)}
            </div>
            {HOURS.map((time) => (
                <div key={time} className="calendar__row">
                    <div className="calendar__cell calendar__cell--strong">{time}</div>
                    {DAYS.map((day) => (
                        <div key={day} 
                             className="calendar__cell" 
                             onClick={ () => onClickEditEvent({userName: selectedUser?.value, day, time, subject: getSubject(selectedUser, day, time)}) }>
                                {isAllUsers ? 
                                USERS.map((user) => 
                                 (<CalendarEvent key={user.value}
                                                user={user}
                                                day={day}
                                                time={time}
                                                subject={getSubject(user, day, time)}
                                                onClick={onClickEditEvent}
                                 />)
                                )
                                : 
                                (<CalendarEvent  user={selectedUser}
                                                day={day}
                                                time={time}
                                                subject={getSubject(selectedUser, day, time)}
                                                onClick={onClickEditEvent}
                                />)}
                        </div>)
                    )}
                </div>
            ))}
            {/* {console.log(Object.entries(userEvent))} */}
        </div>
    )
}

export default Calendar
