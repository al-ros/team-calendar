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
  const [ userEvent, setUserEvent ] = useState({})

  const handleAuthSubmit = (currUser) => {
    const currentUserInfo = USERS.find(({value}) => currUser === value );
    setUser(currentUserInfo);
    setIsOpenAuth(false);
  }

  const addEvent = (value) => {
    // const userE = {
    //   [value.userName]: { [value.day]: { [value.time]: value} }
    // }

    // a = {
    //   ...a,
    //   q: {
    //       ...a.q,
    //       ss: 5
    //   }
    // }

    const { userName, day, time } = value;

    const newUserEvent = { 
      ...userEvent, // all prev users
      [userName]: {
        ...userEvent[userName], // all days for the current user
        [day]: {
          ...userEvent[userName]?.[day],  // all times for the current day
          [time]: value
        }
      }
    };
    
    setUserEvent(newUserEvent);
  };

  console.log('events', userEvent)

  const handleEventSubmit = (event) => {
    addEvent(event)
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
