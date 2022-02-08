
const CalendarEvent = ({user, day, time, subject, onClick}) => {
    if(!user || !subject) {
        return null
    }
    return (
        <div className="calendar__event" 
            onClick={ () => onClick({userName: user.value, day, time, subject}) }> 
                {subject} 
        </div>)
}

export default CalendarEvent
