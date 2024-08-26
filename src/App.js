// import logo from './logo.svg';
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
// import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      {/* <div className="spline-div"><Spline className='spline' scene="https://prod.spline.design/wmpDaRTWG3iBMN5J/scene.splinecode" /></div> */}
    </div>
  );
}

export default App;
