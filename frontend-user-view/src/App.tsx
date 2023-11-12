import './App.css'
import { Route, Routes } from 'react-router-dom';
import FirstHeader from './FirstHeader'
import Homepage from './Homepage';
import HoursLocationPage from './HoursLocationPage';
import SecondHeader from './SecondHeader';
import ContactPage from './ContactPage';
import { useState } from 'react';
import { BookAPIData, BookDataInterface } from './BookAPIInterface';
import SearchBookPage from './SearchBookPage';

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
          <Route path='/BookSearchResultsPage' element={<SearchBookPage
            bookData={bookData}
            setBookData={setBookData}
          />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
