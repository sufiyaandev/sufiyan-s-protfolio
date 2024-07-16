// import logo from './logo.svg';
import Home from './pages/Home';
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
