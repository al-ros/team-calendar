import { useState } from 'react';
import Dropdown from './components/Dropdown';
import './App.css';
import Button from './components/Button';

const DROPDOWN_DUMMY_OPTIONS = [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 }
]

function App() {
  const [ dropdownValue, setDropdownValue ] = useState(DROPDOWN_DUMMY_OPTIONS[0].value)
  return (
    <div className="App">
      <Button onClick={() => console.log('click')} label="ImButton"/>
      <Dropdown options={DROPDOWN_DUMMY_OPTIONS} 
        value={dropdownValue}
        onChange={(e) => setDropdownValue(e.target.value)} />
    </div>
  );
}

export default App;
