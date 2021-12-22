import { useState } from 'react';
import Header from './components/Header';
import ModalAuth from './components/ModalAuth';
import ModalEvent from './components/ModalEvent';
import UsersContext from './contexts/UsersContext';
import './App.css';
import Calendar from './components/Calendar';

const USERS = [
  { label: 'Admin', value: 'admin', role: 'admin' },
  { label: 'Sasha', value: 'sasha', role: 'user' },
  { label: 'Roma', value: 'roma', role: 'user' }
]

function App() {
  const [ user, setUser ] = useState()
  const [ isOpenAuth, setIsOpenAuth ] = useState(true);
  const [ isOpenModalEvent, setIsOpenModalEvent ] = useState(false);
  const  [ userEvents, setUserEvents] = useState(USERS.value)

  

  const handleAuthSubmit = (currUser) => {
    const currentUserInfo = USERS.find(({value}) => currUser === value );
    setUser(currentUserInfo);
    setIsOpenAuth(false);
  }

  const handleEventSubmit = (event) => {
    console.log('event', event)
    // console.log(userEvents)
  }
  
  return (
    <div className="App">
      <UsersContext.Provider value={{ USERS, user }} >
        <Header onClickNewEvent={() => setIsOpenModalEvent(true)} onFilterChange={() => null} />
        <Calendar />
        { isOpenModalEvent && <ModalEvent 
            onSubmit={ handleEventSubmit } 
            onCancel={ () => setIsOpenModalEvent(false) } />
        }
        <ModalAuth open={ isOpenAuth } onSubmit={ handleAuthSubmit } />
      </UsersContext.Provider>    
    </div>
  );
}

export default App;
