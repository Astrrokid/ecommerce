import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
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
