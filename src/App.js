// import logo from './logo.svg';
import Home from './pages/Home';
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
