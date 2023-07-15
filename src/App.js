import './App.css';
import Admin from './components/Home/Admin';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route, Navigate,
  useLocation,
  useNavigate, } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Home/> */}
        <Routes>
        <Route exact path="/" element={<Navigate to="/register/?refid=123456" />}></Route>
          <Route exact path='/register' element={<Home />} />
          <Route exact path='/register/?refid=123456' element={<Home />} />
          <Route exact path='./' element={<Home />} />
          <Route exact path='/admin' element={<Admin/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
