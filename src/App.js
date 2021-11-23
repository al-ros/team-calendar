import { useState } from 'react';
import Dropdown from './components/Dropdown';
import Button from './components/Button';
import ModalAuth from './components/ModalAuth';
import './App.css';

const DROPDOWN_DUMMY_OPTIONS = [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 }
]

function App() {
  const [ dropdownValue, setDropdownValue ] = useState(DROPDOWN_DUMMY_OPTIONS[0].value)
  const [ isOpenAuth, setIsOpenAuth ] = useState(true);
  const [ currentUser, setCurrentUser ] = useState();

  const handleAuthSubmit = (user) => {
    setIsOpenAuth(false);
    setCurrentUser(user)
  }
  
  return (
    <div className="App">
      <Button onClick={() => console.log('click')} label="ImButton"/>
      <Dropdown options={DROPDOWN_DUMMY_OPTIONS} 
        value={dropdownValue}
        onChange={(e) => setDropdownValue(e.target.value)} />
      Current user: {currentUser}
      <ModalAuth open={ isOpenAuth } onSubmit={ handleAuthSubmit } />
    </div>
  );
}

export default App;
