import { useState, useEffect } from 'react';
import Header from './components/Header';
import ModalAuth from './components/ModalAuth';
import ModalEvent from './components/ModalEvent';
import UsersContext from './contexts/UsersContext';
import UserEventContext from './contexts/UserEventContext';
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
  const [ isAddNewEvent, setIsAddNewEvent] = useState(true)
  const [ userEvent, setUserEvent ] = useState(() => {
    const temp = localStorage.getItem("events");
    return temp ? JSON.parse(temp) : [];
  });
  const [ currentEvent, setCurrentEvent ] = useState(null)


  useEffect(() => {
    const temp = JSON.stringify(userEvent);
    // console.log(temp)
    localStorage.setItem("events", temp);
  }, [userEvent]);

  

  const handleAuthSubmit = (currUser) => {
    const currentUserInfo = USERS.find(({value}) => currUser === value );
    setUser(currentUserInfo);
    setIsOpenAuth(false);
  }

  const addEvent = (value) => {
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

  const handleEventSubmit = (event) => {
    addEvent(event)
    setIsOpenModalEvent(false)
  }

  const handleEventDelete = (event) => {
    // console.log(event)
  }
  
  const handleEditEvent = ({ subject, userName, day, time }) => {
    setIsOpenModalEvent(true)
    setIsAddNewEvent(false)
    if(subject) {
      setCurrentEvent({ subject, userName, day, time })
    } else {
      setCurrentEvent({ day, time })
    }
  }

  return (
    <div className="App">
      <UserEventContext.Provider value={{ userEvent }}>
        <UsersContext.Provider value={{ USERS, user }} >
          <Header onClickNewEvent={() => {setIsOpenModalEvent(true); setIsAddNewEvent(true)}} onFilterChange={() => null} />
          <Calendar onClickEditEvent={ handleEditEvent }/>
          { isOpenModalEvent && <ModalEvent
              isNewEvent= { isAddNewEvent }
              event= { currentEvent }
              onSubmit={ handleEventSubmit } 
              onCancel={ () => setIsOpenModalEvent(false) }
              onDelete={ handleEventDelete }
               />
          }
          <ModalAuth open={ isOpenAuth } onSubmit={ handleAuthSubmit } />
        </UsersContext.Provider>  
      </UserEventContext.Provider>  
    </div>
  );
}

export default App;
