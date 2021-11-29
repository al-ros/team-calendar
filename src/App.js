import { useState } from 'react';
import Header from './components/Header';
import ModalAuth from './components/ModalAuth';
import ModalEvent from './components/ModalEvent';
import UsersContext from './contexts/UsersContext';
import './App.css';

const USERS = [
  { label: 'Admin', value: 'admin', role: 'admin' },
  { label: 'Sasha', value: 'sasha', role: 'user' },
  { label: 'Roma', value: 'roma', role: 'user' }
]

function App() {
  const [ user, setUser ] = useState()
  const [ isOpenAuth, setIsOpenAuth ] = useState(true);
  const [ isOpenModalEvent, setIsOpenModalEvent ] = useState(false);

  const handleAuthSubmit = (currUser) => {
    const currentUserInfo = USERS.find(({value}) => currUser === value );
    setUser(currentUserInfo);
    setIsOpenAuth(false);
  }
  
  return (
    <div className="App">
      <UsersContext.Provider value={{ USERS, user }} >
        <Header onClickNewEvent={() => setIsOpenModalEvent(true)} onFilterChange={() => null} />
        <ModalAuth open={ isOpenAuth } onSubmit={ handleAuthSubmit } />
        <ModalEvent open={ isOpenModalEvent } 
          onSubmit={ () => null } 
          onCancel={ () => setIsOpenModalEvent(false) } />
      </UsersContext.Provider>    
    </div>
  );
}

export default App;
