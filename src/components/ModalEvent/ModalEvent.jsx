import { useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal'
import Dropdown from '../Dropdown';
import Button from '../Button';
import TextField from '../TextField';
import UsersContext from '../../contexts/UsersContext';
import { DAYS, WORKING_HOURS } from '../../constants';
import './ModalEvent.scss';

const ModalEvent = ({ event: eventValue, onCancel, onSubmit }) => {
  const { USERS, user } = useContext(UsersContext)
  const [ event, setEvent ] = useState(eventValue ?? {
    subject: null,
    userName: user.value,
    day: null,
    time: null
  });

  const daysOptions = useMemo(() => 
    [
      { label: 'Select Day', value: '' }, 
      ...DAYS.map((day) => ({ label: day, value: day }))
    ]
  , []);

  const timesOptions = useMemo(() => 
  [
    { label: 'Select Time', value: '' }, 
    ...WORKING_HOURS.map((time) => ({label: time, value: time}))
  ]
, []);

  const handleSubjectChange = (value) => setEvent({ ...event, subject: value });
  const handleUserChange = (value) => setEvent({ ...event, userName: value });
  const handleDayChange = (value) => setEvent({ ...event, day: value });
  const handleTimeChange = (value) => setEvent({ ...event, time: value });

  const isValid = Object.values(event).every(Boolean);

  const renderModalFooter = () => (<>
    <Button className="modal-event__control" block label="Cancel" onClick={ onCancel }/>
    <Button className="modal-event__control" block label="Confirm" disabled={ !isValid } onClick={ () => onSubmit(event) }/>
  </>)

  return (
    <Modal open
      closable={ true } 
      onClose={ onCancel }
      footer={ renderModalFooter() }
    >
      <div className="modal-event">
        <h2>{ eventValue ? 'Edit' : 'Create' } event</h2>
        <TextField placeholder="Event subject"
          className="modal-event__control"
          block 
          onChange={({target: { value}}) => handleSubjectChange(value) } />
        <Dropdown options={ USERS }
          block
          className="modal-event__control"
          disabled={ user.role !== 'admin' }
          value={ event.userName }
          onChange={ ({target: { value}}) => handleUserChange(value) } />
        <Dropdown options={ daysOptions }
          block
          className="modal-event__control"
          onChange={ ({target: { value}}) => handleDayChange(value) } />
        <Dropdown options={ timesOptions }
          block
          className="modal-event__control"
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