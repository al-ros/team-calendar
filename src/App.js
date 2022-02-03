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
  { label: 'Roma', value: 'roma', role: 'user' },
  { label: 'All users', value: 'allUsers', role: 'allUsers'}
]

function App() {
  const [ user, setUser ] = useState()
  const [ filterValue, setFilterValue ] = useState('');
  const [ isOpenAuth, setIsOpenAuth ] = useState(true);
  const [ isOpenModalEvent, setIsOpenModalEvent ] = useState(false)
  const [ userEvent, setUserEvent ] = useState(() => {
    const temp = localStorage.getItem("events");
    return temp ? JSON.parse(temp) : [];
  });
  const [ currentEvent, setCurrentEvent ] = useState(null)


  useEffect(() => {
    const temp = JSON.stringify(userEvent);
    localStorage.setItem("events", temp);
  }, [userEvent]);

  

  const handleAuthSubmit = (currUserValue) => {
    const currentUserInfo = USERS.find(({value}) => currUserValue === value );
    setUser(currentUserInfo);
    setFilterValue(currUserValue)
    setIsOpenAuth(false);
  }
  
  const handleFilterChange= (event) => setFilterValue(event.currentTarget.value)


  const addEvent = (value) => {
    const { userName, day, time, subject } = value;
    const newUserEvent = { 
      ...userEvent, // all prev users
      [userName]: {
        ...userEvent[userName], // all days for the current user
        [day]: {
          ...userEvent[userName]?.[day],  // all times for the current day
          [time]: subject ? value : null
        }
      }
    };
    
    setUserEvent(newUserEvent);
  };

  const handleEventSubmit = (event) => {
    addEvent(event)
    setIsOpenModalEvent(false)
  }

  
  const handleEditEvent = ({ subject, userName, day, time }) => {
    setIsOpenModalEvent(true)
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
          <Header onClickNewEvent={() => {setIsOpenModalEvent(true); setCurrentEvent(null)}} onFilterChange={ handleFilterChange } filterValue={filterValue}/>
          <Calendar onClickEditEvent={ handleEditEvent } filterValue = { filterValue }/>
          { isOpenModalEvent && <ModalEvent
              event={ currentEvent }
              onSubmit={ handleEventSubmit } 
              onCancel={ () => setIsOpenModalEvent(false) }
               />
          }
          <ModalAuth open={ isOpenAuth } onSubmit={ handleAuthSubmit } />
        </UsersContext.Provider>  
      </UserEventContext.Provider>  
    </div>
  );
}

export default App;
