import './App.css';
import {Route,Routes} from "react-router-dom";
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Menu } from './Components/Menu';
import { Contact } from './Components/Contact';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' exact element={<About/>} />
        <Route path='/menu' exact element={<Menu/>} />
        <Route path='/contact' exact element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;