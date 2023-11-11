import './App.css'
import { Route, Routes } from 'react-router-dom';
import FirstHeader from './FirstHeader'
import Homepage from './Homepage';
import HoursLocationPage from './HoursLocationPage';
import SecondHeader from './SecondHeader';
import ContactPage from './ContactPage';

function App() {

  return (
    <>
      <FirstHeader />
      <SecondHeader />
      <div>
        <Routes>
          <Route path="*" element={<Homepage />}></Route>
          <Route path='/HoursLocationPage' element={<HoursLocationPage />}></Route>
          <Route path='/ContactPage' element={<ContactPage />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
