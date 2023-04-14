import  'react-router-dom'
import {Route,Routes} from 'react-router-dom'
import Home from './Home/Home.js'
import Contact from './Contact/Contact.js'
import NavBar from './NavBar/NavBar.js'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
