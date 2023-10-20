import Card from '../src/Components/CardContainer/Card'
import './App.css'
import { useState } from 'react' 

function App() {
  let [type,setType] = useState(true)
  // true ?  signup : login

  function typeSetter(){
    if(type === true){
      setType(false)
    }
    else{
      setType(true)
    }
  }

  return (
    <>
      <Card type='true'/>
    </>
  )
}

export default App
