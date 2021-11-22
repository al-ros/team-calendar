import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button onClick={() => console.log('click')} label="ImButton"/>
    </div>
  );
}

export default App;
