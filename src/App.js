import './App.css';
import Scheduler from './components/Scheduler/Scheduler';
import { Route, Routes } from 'react-router-dom';
import SchedulingForm from './components/SchedulingForm/SchedulingForm';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      {/* <Headers /> */}
      <Routes>
        <Route path='/' element={<Scheduler />}></Route>
        <Route path="/scheduling/:id" element={<SchedulingForm />}></Route>
      </Routes>   
    </div>
  );
}

export default App;
