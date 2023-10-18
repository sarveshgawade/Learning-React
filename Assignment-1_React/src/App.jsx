import './App.css'
import Person from '../src/Components/Person/Person'
import Header from '../src/Components/Header/Header'
import List from '../src/Components/List/List'
import Button from '../src/Components/Button/Button'
function App() {

  function clickEvent(){
    console.log('Clicked');
  }
  
  return (
    <>
        <Header title="Oppenheimer"/>
        <Person nameOfPerson='Christopher Nolan' ageOfPerson={53}/>
        <List namesOfCast={['Cillian Murphy','Florence Pugh','Robert Downey Jr.','Emiley Blunt']}/>
        <Button txt="Button" clickEvent={clickEvent}/>
    </>
  )
}



export default App
