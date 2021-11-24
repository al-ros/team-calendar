import { useState } from 'react';
import Modal from '../Modal'
import Dropdown from '../Dropdown';
import Button from '../Button';

const DROPDOWN_DUMMY_OPTIONS = [
  { label: 'Admin', value: 'admin' },
  { label: 'User 1', value: 'user-1' },
  { label: 'User 2', value: 'user-2' }
]

const ModalAuth = ({ open, onSubmit }) => {
  const [ userValue, setUserValue ] = useState(DROPDOWN_DUMMY_OPTIONS[0].value);

  return (
    <Modal open={ open }
      closable={ false } 
      footer={ <Button label="Confirm" onClick={ () => onSubmit(userValue) }/> }
    >
      <h2>Please authorize</h2>
      <Dropdown options={ DROPDOWN_DUMMY_OPTIONS } 
        value={ userValue }
        onChange={ ({target: { value}}) => setUserValue(value) } />
    </Modal>
  )
}

export default ModalAuth;
