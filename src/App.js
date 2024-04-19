import logo from './logo.svg';
import './App.css';
// import First from './components/First';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import First from './components/First';
import Third from './components/Third';
import Second from './components/Second';

function App() {
  return (
    <div className="App">
      {/* <First/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/s' element={<Third/>}/>
        <Route path='/u' element={<Second/>}/>
      </Routes>
    </div>
  );
}
  
export default App;
