<a name="readme-top"></a>

<br />
<div align="center">
  <img src="/frontend-user-view/public/icon.png" alt="Logo" width="100" height="100">

<h3 align="center">Public Library Demo Website</h3>

  <p align="center">
    Full Stack MERN (MongoDB, Express, React, and Node) Project
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/Amiriel01/Public-Library-Website/issues">Report Bug</a>
    ·
    <a href="https://github.com/Amiriel01/Public-Library-Website/issues">Change Request</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#user-view-website-features">User View Website Features</a></li>
      </ul>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

I wanted to create a full stack public library website that I could use as a demo in my portfolio. The website has a responsive design that works great on mobile and in website viewing. My local library is wonderful and I'm an avid reader, both the place and my reading hobby provided inspiration for the website theme idea. I thought it would be a great project that I would really enjoy creating, and I was correct!

I learned a lot while working on this project and also practiced many skills I already had. I hope your enjoy viewing this project as much as I enjoyed creating it. Below you will see several images and descriptions, you can also view the live demo by clicking the link above in the header. 

If you notice any bugs or have an idea to make this website even better please use the links to make your suggestions! Thank you in advance for viewing my website. 

### User View Website Features

**First Header Section**

The first header, which can be seen at the top of every page in the project features the library logo and name, along with three buttons for navigating to important pages in the website. Clicking the logo in the header will always return the user to the Homepage. 

![First Header Image](ReadMeImages/firstheader.png)

**FAQs Page**

The Frequently Asked Questions page has five sections. Each section has an accordion that drops down when clicked. 

***Library Card FAQs***

The Library Card FAQ section has eight topics. Each topic provides information, with one topic linking to an additional page.

![Library Card FAQs Image](ReadMeImages/faqlibrarycard.png)

The "How do I apply for a library card?" section has a link to the library card application and some library card information.

![Apply For Library Card FAQ Image](ReadMeImages/faqlibrarycard2.png)

The library card application form takes a users information and PUTs it in the database. The user will enter their name, phone number, email, and additional comments if needed. Once the user submits the information they will recieve an alert letting them know it has been successfully submitted.

![Library Card Form Image](ReadMeImages/librarycardform.png)

***Borrowing Services FAQs***

The Borrowing Services FAQ section has five topics. Each topic provides information, with one topic linking to an additional page.

![Borrowing Services FAQs Image](ReadMeImages/borrowingservicesfaq.png)

The "Cross Library Loans" section has a link to the cross library loans form and provides cross library loan information.

![Cross Library Loan FAQ Image](ReadMeImages/borrowingservicesfaq2.png)

The cross library loan form takes a users information and PUTs it in the database. The user will enter the title, author, material type (from a select menu), name, library card number, phone number, and email address. Once the user submits the information they will recieve an alert letting them know it has been successfully submitted.

![Cross Library Loan Form Image](ReadMeImages/crosslibraryloanpage.png)

***Technology Services FAQs***

The technology services section has six informtaional sections in the accordion dropdown menu. 

![Technology Services FAQ Image](ReadMeImages/techservices.png)

***Giving FAQs***

The Giving FAQ section has three topics. Each topic provides information, with two topics linking to an additional page.

![Giving FAQs Image](ReadMeImages/givingfaq.png)

The "Monatary Donations" section has a link to the Giving page. The Giving page has information and another accordion with monatary donations faqs.

![Giving Page Image](ReadMeImages/givingpage.png)

The "Ways to Give" FAQ accordion has five topics. Two of the topics, the "Give Now" and "Make a Monthly Gift" sections have a button to route to the donations page. Donations are not set up, because this is a demo site, and users will be routed to a page that tells them this. The other three sections also give information to the user.

![Ways to Give FAQ Image](ReadMeImages/waystogivefaq.png)

![Donation Page Image](ReadMeImages/donationpage.png)

***Meeting and Study Rooms FAQ***

The Meeting and Study Rooms FAQ section has five topics. The "What meeting rooms are available?" section gives information and also routes to another page where users can see images and possible layout suggestions for the rooms. The "What study rooms are available?" section shows images and gives descriptions of the study rooms. The other three topics give information to the user.

![Meeting Room FAQs Image](ReadMeImages/meetingfaq.png)

![Meeting Room Information Page Image](ReadMeImages/meetingroompage.png)

![Study Room FAQ Image](ReadMeImages/meetingfaq2.png)


**Second HeaderSection**

The second header is also seen at the top of every page in the project. Users are able to search by book, author, or genre to find a list of the top 10 results given by the Google Books API. 

![Second Header Image](ReadMeImages/secondheader.png)

Once a search has been made, the user is routed to the search results page. They will be able to view the result details. I am showing an image with the first 2 results, all 10 results in the list have the same details shown. Users will see the book cover, title, author, description, and be able to click the link to view the Google Books profile of the book. 

![Search Results Page](ReadMeImages/searchresults.png)

**Homepage Image Slider**

The homepage image slider has four images that link to events happening at the library. The first image, when clicked, routes to a page that shows multiple author events that will be happening at the library. The second, routes to a reading to resues event for teens and tweens. The final two images do not route to different pages and are there to remind users of an upcoming sweater drive and book sale.

***Author Event Section***

![Author Event Image](ReadMeImages/authoreventimage.png)

The Author Event page that is routed to has four upcoming author events on it. Users will see the author image, name, time, date, description, and link to an outside website about the author on each author's event section. The image provided shows two of the author events, the other two follow the same format.

![Author Event Page](ReadMeImages/authoreventspage.png)

***Reading to Rescues Section***

![Reading to Resucues Image](ReadMeImages/readingtorescuesimage.png)

The Reading to Resues event image on the carousel links to the event details page for the Reading to Rescues event. The event page shows the same image from the carousel slightly modified, the date, time, event type, age group for the event, and the event description. The event and image path are saved in a MongoDB database. All event pages use the same template and an API call on the event ID to populate the page. 

![Reading to Rescues Event Page](ReadMeImages/readingtorescuespage.png)

***Sweather and Book Sale Images***

![Sweater Drive Image](ReadMeImages/sweaterdriveimage.png)

![Book Sale Image](ReadMeImages/usedbookimage.png)

**Traveling Exhibit**

The traveling exhibit section showcases the current exhibit on display at the library. The exhibit has two images and a description for the event.

![Traveling Exhibit Image](ReadMeImages/travelingexhibit.png)



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- **Credits**
Pexels
Pixaby: children reading
thispersondoesnotexist.com: staff images
google books api: search api second header
app.logo.com: library logo
google icons: square icons
devicon: facebook icon -->

<!-- **Credits**
Pexels
Pixaby: children reading
thispersondoesnotexist.com: staff images
google books api: search api second header
app.logo.com: library logo
google icons: square icons
devicon: facebook icon -->
