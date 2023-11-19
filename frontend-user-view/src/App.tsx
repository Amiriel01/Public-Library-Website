import './App.css'
import { Route, Routes } from 'react-router-dom';
import FirstHeader from './FirstHeader'
import Homepage from './Homepage';
import HoursLocationPage from './HoursLocationPage';
import SecondHeader from './SecondHeader';
import ContactPage from './ContactPage';
import { useState } from 'react';
import { BookAPIData, BookDataInterface } from './BookAPIInterface';
import BookSearchResultsPage from './BookSearchResultsPage';
import FAQPage from './FAQPage';
import LibraryCardForm from './LibraryCardForm';
import CrossLibraryLoanForm from './CrossLibraryLoanForm';
import GivingInfo from './GivingInfo';
import Donate from './Donate';
import MeetingRoom from './MeetingRoom';


function App() {

  const [bookData, setBookData] = useState<BookAPIData>({ items: [] })

  return (
    <>
      <FirstHeader />
      <SecondHeader
        bookData={bookData}
        setBookData={setBookData}
      />
      <div>
        <Routes>
          <Route path="*" element={<Homepage />}></Route>
          <Route path='/HoursLocationPage' element={<HoursLocationPage />}></Route>
          <Route path='/ContactPage' element={<ContactPage />}></Route>
          <Route path='/BookSearchResultsPage' element={<BookSearchResultsPage
            bookData={bookData}
            setBookData={setBookData}
          />}></Route>
          <Route path='FAQPage' element={<FAQPage />}></Route>
          <Route path='LibraryCardForm' element={<LibraryCardForm />}
          ></Route>
           <Route path='CrossLibraryForm' element={<CrossLibraryLoanForm />}
          ></Route>
          <Route path='GivingInfo' element={<GivingInfo />}
          ></Route>
           <Route path='Donate' element={<Donate />}
          ></Route>
          <Route path='MeetingRoom' element={<MeetingRoom />}
          ></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
