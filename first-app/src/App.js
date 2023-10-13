
import './App.css';
import DogCard from './DogCard';
import {BikeCard} from './DogCard';
import AssignCar from './Car';


function App() {
  return (
    <div className="App">

      {/* this will have  a parent container (dogContainer) */}
      <DogCard/>    

      {/* this will not have  a parent container */}

      <BikeCard/>  

      {/* Using PROPS */}
      <AssignCar h1_name="VW Virtus Sedan" img_src="https://th.bing.com/th/id/R.0712df2ecf587fd6fb53f6f4fd80846c?rik=Ap90Bj8j5XTtAQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwc1738478.jpg&ehk=%2feJi%2fFOd9d%2f24rKdYT8Z6%2f3FvI8j%2feGYrFjKIqh5p74%3d&risl=&pid=ImgRaw&r=0"
      
      alt_txt="MyNewCarVW"/>
    </div>
  );
}

export default App;
