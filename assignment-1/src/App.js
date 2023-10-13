import Person from './Person';
import Header from './Header';
import List from './List';
import Button from './Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="This is a Header"></Header>
      <Person name="John Adams" age="21"></Person>
      <List list={['one','two','three']} ></List>
      <Button text="Submit" ></Button>
    </div>
  );
}

export default App;
