import { useContext, useState, useEffect } from 'react';
import Modal from '../Modal'
import Dropdown from '../Dropdown';
import Button from '../Button';
import UsersContext from '../../contexts/UsersContext';

const ModalEvent = ({ open, event: eventValue, onCancel, onSubmit }) => {
  const { USERS, user } = useContext(UsersContext)
  const [event, setEvent] = useState(eventValue ?? {});

  useEffect(() => setEvent({ ...event, userName: user?.value }), [event, user])

  const renderModalFooter = () => (<>
    <Button label="Cancel" onClick={ onCancel }/>
    <Button label="Confirm" onClick={ () => onSubmit(event) }/>
  </>)

  const handleUserChange = (value) => setEvent({ ...event, userName: value });

  return (
    <Modal open={ open }
      closable={ true } 
      onClose={ onCancel }
      footer={ renderModalFooter() }
    >
      <h2>{ event ? 'Edit' : 'Create' } event</h2>
      <Dropdown options={ USERS } 
        disabled={ user?.role !== 'admin' }
        value={ event.userName }
        onChange={ ({target: { value}}) => handleUserChange(value) } />
    </Modal>
  )
}

export default ModalEvent;
