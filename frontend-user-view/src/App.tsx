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
import VolunteerApplication from './VolunteerApplication';
import MeetingRoomInformation from './MeetingRoomInformation';
import AuthorEvents from './AuthorEvents';
import AboutLibrary from './AboutLibrary';
import UpcomingEvents from './UpcomingEvents';
import StudentResources from './StudentResources';
import EveryoneEvents from './EveryoneEvents';
import AdultEvents from './AdultEvents';
import TeenTweenEvents from './TeenTweenEvents';
import ChildrenEvents from './ChildrenEvents';
import InLibraryResources from './InLibraryResources';
import MathDigitalResources from './MathDigitalResources';
import EnglishDigitalResources from './EnglishDigitalResources';
import Staff from './Staff';
import FirstFooter from './FirstFooter';
import NewsletterSignUp from './NewsletterSignUp';
import SecondFooter from './SecondFooter';
import EventPage from './EventPage';
import LibraryLogin from './LibraryLogin';

function App() {

  const [bookData, setBookData] = useState<BookAPIData>({ items: [] })
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [showAdmin, setShowAdmin] = useState<boolean>(false);

  console.log(loggedIn)
  console.log(showAdmin)

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
          <Route path='VolunteerApplication' element={<VolunteerApplication />}
          ></Route>
          <Route path='MeetingRoomInformation' element={<MeetingRoomInformation />}
          ></Route>
          <Route path='AuthorEvents' element={<AuthorEvents />}
          ></Route>
          <Route path='AboutLibrary' element={<AboutLibrary />}
          ></Route>
          <Route path='UpcomingEvents' element={<UpcomingEvents />}
          ></Route>
          <Route path='StudentResources' element={<StudentResources />}
          ></Route>
          <Route path='EveryoneEvents' element={<EveryoneEvents />}
          ></Route>
          <Route path='AdultEvents' element={<AdultEvents />}
          ></Route>
          <Route path='TeenTweenEvents' element={<TeenTweenEvents />}
          ></Route>
          <Route path='ChildrenEvents' element={<ChildrenEvents />}
          ></Route>
          <Route path='InLibraryResources' element={<InLibraryResources />}></Route>
          <Route path='MathDigitalResources' element={<MathDigitalResources />}
          ></Route>
          <Route path='EnglishDigitalResources' element={<EnglishDigitalResources />}
          ></Route>
          <Route path='Staff' element={<Staff />}
          ></Route>
          <Route path='NewsletterSignUp' element={<NewsletterSignUp />}
          ></Route>
          <Route path='FirstFooter' element={<FirstFooter />}
          ></Route>
          <Route path='EventPage' element={<EventPage />}
          ></Route>
          <Route path='LibraryLogin' element={<LibraryLogin
            setLoggedIn={setLoggedIn}
            setShowAdmin={setShowAdmin}
          />}
          ></Route>
        </Routes>
        <SecondFooter
          showAdmin={showAdmin}
          setShowAdmin={setShowAdmin}
          setLoggedIn={setLoggedIn}
        />
      </div>
    </>
  )
}

export default App
