import { useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal'
import Dropdown from '../Dropdown';
import Button from '../Button';
import TextField from '../TextField';
import UserEventContext from '../../contexts/UserEventContext';
import UsersContext from '../../contexts/UsersContext';
import { DAYS, HOURS } from '../../constants';
import './ModalEvent.scss';

const ModalEvent = ({ event: eventValue, onCancel, onSubmit }) => {
  const isNewEvent = !eventValue
  const { USERS, user } = useContext(UsersContext)
  const { userEvent } = useContext(UserEventContext)
  const [ event, setEvent ] = useState(
      {
        subject: '',
        userName: user.value,
        day: '',
        time: '', 
        ...eventValue 
      }
  );

  const isEditMode = eventValue?.subject

  const { userName, day, time } = event
  const daysOptions = useMemo(() => 
    [
      { label: 'Select Day', value: '' }, 
      ...DAYS.map((day) => ({ label: day, value: day }))
    ]
  , []);

  const timesOptions = useMemo(() => 
  [
    { label: 'Select Time', value: '' }, 
    ...HOURS.map((time) => ({label: time, value: time}))
  ]
, []);

  const handleSubjectChange = (value) => setEvent({ ...event, subject: value });
  const handleUserChange = (value) => setEvent({ ...event, userName: value });
  const handleDayChange = (value) => setEvent({ ...event, day: value });
  const handleTimeChange = (value) => setEvent({ ...event, time: value });

  const isValid = Object.values(event).every((value) => {
    return Boolean(value);
  });

  const handleClickConfirm = () => {
    const existValue = userEvent[userName]?.[day]?.[time]
    if(existValue && isNewEvent) {
      alert('The event already exists. Change the date or edit the current event from the calendar.')
    } else {
      onSubmit(event)
    }
  }

  const renderModalFooter = () => (<>
    <Button className="modal-event__control" block label="Cancel" onClick={ onCancel }/>
    { !isNewEvent && isEditMode && <Button className="modal-event__control" block label="Delete" disabled={ !isValid } onClick={ () => onSubmit({subject: '', userName: event.userName, day: event.day, time: event.time}) }/>}
    <Button className="modal-event__control" block label="Confirm" disabled={ !isValid } onClick={ handleClickConfirm }/>
  </>)

  return (
    <Modal open
      closable={ true } 
      onClose={ onCancel }
      footer={ renderModalFooter() }
    >
      <div className="modal-event">
        <h2>{ isEditMode ? 'Edit' : 'Create' } event</h2>
        <TextField placeholder="Event subject"
          className="modal-event__control"
          block
          value={ event.subject }
          onChange={({target: { value}}) => handleSubjectChange(value) } />
        <Dropdown options={ USERS }
          block
          className="modal-event__control"
          disabled={ user.role !== 'admin' || (!isNewEvent && user.role !== 'admin') }
          value={ event.userName }
          onChange={ ({target: { value}}) => handleUserChange(value) } />
        <Dropdown options={ daysOptions }
          block
          className="modal-event__control"
          disabled={ !isNewEvent }
          value={ event.day }
          onChange={ ({target: { value}}) => handleDayChange(value) } />
        <Dropdown options={ timesOptions }
          block
          className="modal-event__control"
          disabled={ !isNewEvent }
          value={ event.time }
          onChange={ ({target: { value}}) => handleTimeChange(value) } />
      </div>
    </Modal>
  )
}

ModalEvent.propTypes = {
  event: PropTypes.object,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func
}

export default ModalEvent;
