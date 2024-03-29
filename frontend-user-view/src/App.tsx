import './App.css'
import { Route, Routes } from 'react-router-dom';
import FirstHeader from './FirstHeader'
import Homepage from './Homepage';
import HoursLocationPage from './HoursLocationPage';
import SecondHeader from './SecondHeader';
import ContactPage from './ContactPage';
import { useState } from 'react';
import { BookAPIData } from './BookAPIInterface';
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
import AllContactRequests from './AllContactRequests';
import ContactRequestDetails from './ContactRequestDetails';
import AllLibraryCardRequests from './AllLibraryCardRequests';
import LibraryCardRequestDetails from './LibraryCardRequestDetails';
import AllCrossLibraryLoanRequests from './AllCrossLibraryLoanRequests';
import CrossLibraryLoanDetails from './CrossLibraryLoanDetails';
import AllVolunteerApplications from './AllVolunteerApplications';
import VolunteerApplicationDetails from './VolunteerApplicationDetails';
import CreateEventForm from './CreateEventForm';
import RescueEvent from './RescueEvent';
import { HelmetProvider } from 'react-helmet-async';

export interface LibraryLogin {
  loggedIn: string,
  setLoggedIn: () => void,
}

function App() {

  const [bookData, setBookData] = useState<BookAPIData>({ items: [] })
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [showAdmin, setShowAdmin] = useState<boolean>(false);

  return (
    <>
      <HelmetProvider>
        <FirstHeader
        />
        <SecondHeader
          bookData={bookData}
          setBookData={setBookData}
        />
        <div>
          <Routes>
            <Route path="*" element={<Homepage />}></Route>
            <Route path='/HoursLocationPage' element={<HoursLocationPage />}></Route>
            <Route path='/ContactPage' element={<ContactPage
              showAdmin={showAdmin}
            />}></Route>
            <Route path='/BookSearchResultsPage' element={<BookSearchResultsPage
              bookData={bookData}
              setBookData={setBookData}
            />}></Route>
            <Route path='/FAQPage' element={<FAQPage />}></Route>
            <Route path='/LibraryCardForm' element={<LibraryCardForm
              showAdmin={showAdmin}
            />}
            ></Route>
            <Route path='/CrossLibraryForm' element={<CrossLibraryLoanForm
              showAdmin={showAdmin}
            />}
            ></Route>
            <Route path='/GivingInfo' element={<GivingInfo />}
            ></Route>
            <Route path='/Donate' element={<Donate />}
            ></Route>
            <Route path='/MeetingRoom' element={<MeetingRoom />}
            ></Route>
            <Route path='/VolunteerApplication' element={<VolunteerApplication
              showAdmin={showAdmin}
            />}
            ></Route>
            <Route path='/MeetingRoomInformation' element={<MeetingRoomInformation />}
            ></Route>
            <Route path='/AuthorEvents' element={<AuthorEvents />}
            ></Route>
            <Route path='/AboutLibrary' element={<AboutLibrary />}
            ></Route>
            <Route path='/UpcomingEvents' element={<UpcomingEvents
              showAdmin={showAdmin}
            />}
            ></Route>
            <Route path='/StudentResources' element={<StudentResources />}
            ></Route>
            <Route path='/EveryoneEvents' element={<EveryoneEvents />}
            ></Route>
            <Route path='/AdultEvents' element={<AdultEvents />}
            ></Route>
            <Route path='/TeenTweenEvents' element={<TeenTweenEvents />}
            ></Route>
            <Route path='/ChildrenEvents' element={<ChildrenEvents />}
            ></Route>
            <Route path='/InLibraryResources' element={<InLibraryResources />}></Route>
            <Route path='/MathDigitalResources' element={<MathDigitalResources />}
            ></Route>
            <Route path='/EnglishDigitalResources' element={<EnglishDigitalResources />}
            ></Route>
            <Route path='/Staff' element={<Staff />}
            ></Route>
            <Route path='/NewsletterSignUp' element={<NewsletterSignUp />}
            ></Route>
            <Route path='/FirstFooter' element={<FirstFooter />}
            ></Route>
            <Route path='/event/eventDetail/:id' element={<EventPage />}
            ></Route>
            <Route path='/LibraryLogin' element={<LibraryLogin
              setLoggedIn={setLoggedIn}
              setShowAdmin={setShowAdmin}
            />}
            ></Route>
            <Route path='/AllContactRequests' element={<AllContactRequests />}
            ></Route>
            <Route path='/contact/contactForm/:id' element={<ContactRequestDetails />}
            ></Route>
            <Route path='/AllLibraryCardRequests' element={<AllLibraryCardRequests />}
            ></Route>
            <Route path='/libraryCard/libraryCardSubmission/:id' element={<LibraryCardRequestDetails />}
            ></Route>
            <Route path='/AllCrossLibraryLoanRequests' element={<AllCrossLibraryLoanRequests
            />}
            ></Route>
            <Route path='/crossLibrary/crossLibraryForm/:id' element={<CrossLibraryLoanDetails />}
            ></Route>
            <Route path='/AllVolunteerApplications' element={<AllVolunteerApplications
            />}
            ></Route>
            <Route path='/volunteer/volunteerForm/:id' element={<VolunteerApplicationDetails
            />}
            ></Route>
            <Route path='/CreateEventForm' element={<CreateEventForm
            />}
            ></Route>
            <Route path='/RescueEvent' element={<RescueEvent
            />}
            ></Route>
          </Routes>
          <SecondFooter
            showAdmin={showAdmin}
            setShowAdmin={setShowAdmin}
            setLoggedIn={setLoggedIn}
          />
        </div>
      </HelmetProvider>
    </>
  )
}

export default App
