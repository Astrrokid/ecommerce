import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        {/* this will be present in every single route while the ones in the routes changes dynamically depending on the page you are in*/}
      <Navbar/>

        {/* to define our router you have to put them inside the routes components */}
        <Routes>
          <Route path='/'/>
          <Route path='/cart'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
