import { useContext, useState } from 'react';
import PropTypes from 'prop-types'
import Modal from '../Modal'
import Dropdown from '../Dropdown';
import Button from '../Button';
import UsersContext from '../../contexts/UsersContext';

const ModalAuth = ({ open, onSubmit }) => {
  const { USERS } = useContext(UsersContext)
  const [ user, setUser ] = useState(USERS[0].value)

  return (
    <Modal open={ open }
      closable={ false } 
      footer={ <Button label="Confirm" onClick={ () => onSubmit(user) }/> }
    >
      <h2>Please authorize</h2>
      <Dropdown options={ USERS } 
        value={ user }
        onChange={ ({target: { value}}) => setUser(value) } />
    </Modal>
  )
}

ModalAuth.propTypes = {
  open: PropTypes.bool,
  onSubmit: PropTypes.func
}

export default ModalAuth;
