import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from './Components/Navbar';
import {Shop} from './Pages/shop/shop';
import {Cart} from './Pages/cart/cart';


function App() {
  return (
    <div className="App">
      <Router>
        {/* this will be present in every single route while the ones in the routes changes dynamically depending on the page you are in*/}
      <Navbar/>

        {/* to define our router you have to put them inside the routes components */}
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
