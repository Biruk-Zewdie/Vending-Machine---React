import './App.css';
import Soda from './Soda';
import Chips from './Chips';
import Home from './Home';
import FreshSardines from './FreshSardines';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/freshSardines" element={<FreshSardines />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

