import Booking from './components/booking';
import { Routes, Route } from 'react-router-dom';
import Detail from './components/detailClass';
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Booking/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
