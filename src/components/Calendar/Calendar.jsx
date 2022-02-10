import { useContext } from 'react'
import './Calendar.scss'
import CalendarEvent from './CalendarEvent'
import UserEventContext from '../../contexts/UserEventContext'
import UsersContext from '../../contexts/UsersContext'
import { DAYS, HOURS } from '../../constants'

const Calendar = ({onClickEditEvent, filterValue}) => {
    const { user, USERS } = useContext(UsersContext)
    const { userEvent } = useContext(UserEventContext)

    const isAllUsers = filterValue === 'allUsers'
    const selectedUser = USERS.find( (item) => item.value === filterValue)
    const getSubject = (user, day, time) => userEvent[user?.value]?.[day]?.[time]?.subject
    
    const hasEventPermission = (currentUser) => (user?.role === 'admin' || user?.value === currentUser?.value);

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
                            onClick={ hasEventPermission(selectedUser) 
                                ? () => onClickEditEvent({
                                    userName: (selectedUser || user)?.value, 
                                    day, 
                                    time, 
                                    subject: getSubject(selectedUser || user, day, time)}) 
                                : () => null }
                            >
                                {isAllUsers ? 
                                USERS.map((currentUser) => 
                                 (<CalendarEvent key={currentUser.value}
                                                user={currentUser}
                                                day={day}
                                                time={time}
                                                subject={getSubject(currentUser, day, time)}
                                                onClick={ hasEventPermission(currentUser) ? onClickEditEvent : () => null}
                                                isAllUsers={true}
                                 />)
                                )
                                : 
                                (<CalendarEvent  user={selectedUser}
                                                day={day}
                                                time={time}
                                                subject={getSubject(selectedUser, day, time)}
                                                onClick={hasEventPermission(selectedUser) ? onClickEditEvent : () => null}
                                />)}
                        </div>)
                    )}
                </div>
            ))}
        </div>
    )
}

export default Calendar
