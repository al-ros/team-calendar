import { useState } from 'react';
import Header from './components/Header';
import ModalAuth from './components/ModalAuth';
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

  const handleAuthSubmit = (currUser) => {
    const currentUserInfo = USERS.find(({value}) => currUser === value );
    setUser(currentUserInfo);
    setIsOpenAuth(false);
  }
  
  return (
    <div className="App">
      <UsersContext.Provider
        value={{
          USERS,
          user
        }}
      >
        <Header onClickNewEvent={() => null} onFilterChange={() => null}/>
        <ModalAuth open={ isOpenAuth } onSubmit={ handleAuthSubmit } />
      </UsersContext.Provider>    
    </div>
  );
}

export default App;
