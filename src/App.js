import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
          <div className="container">
            <Routes>
              <Route path='/home' element={<Home />} />
            </Routes>
          </div>     
      </BrowserRouter>
    </div>
  );
}

export default App;
