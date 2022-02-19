const CalendarEvent = ({user, day, time, subject, onClick, isAllUsers}) => {
    if(!user || !subject) {
        return null
    }

    const handleClick = (event) => {
        event.stopPropagation();
        onClick({userName: user.value, day, time, subject});
    }

    return (
        <div className="calendar__event" onClick={ handleClick }> 
                {isAllUsers? user.label + `: ` + subject : subject} 
        </div>)
}

export default CalendarEvent
