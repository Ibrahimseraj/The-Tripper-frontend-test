import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Routes/Home';
import Hotels from './Routes/hotels/Hotels';
import Hotel from './Components/hotel';
import Taxi from './Routes/taxi/Taxi';
import Flights from './Routes/flights/Flights';
import { Routes, Route } from 'react-router-dom';
import { AddHotel } from './Components/hotelpost';
import Book from './Routes/book/Book';
import HotelAccountLogin from './Components/HotelAccountLogin';
import HotelHomePage from './Components/HotelHomePage';
import UpdateHotelForm from './Components/updateHotelForm';
import RoomPost from './Components/roomPost';
import UserLogin from './Components/UserLogin';
import HotelReservation from './Components/HotelReservation';
import UserReservation from './Components/UserReservation';
import UserReservationDetails from './Components/UserReservationDetails';
import Login from './Routes/account/Login';
import { Link } from 'react-router-dom';
import Signup from './Routes/account/Signup';
import Reservation from './Components/Reservation';
import HearNav from './Components/HearNav';
import UpdateRoom from './Components/UpdateRooms';
import DeleteRoom from './Components/DeleteRoom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51NOrcTDDexvB5MHmB95L11mrZPcsTdhCKKNdEDLiujksca3VPyYsn3Yisnpv6BHGklA014UPPkNtwcFsPvitEoJk00yq1dtZ4B');


function App() {
  //const [loading, setLoading] = useState(false);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels/:city' element={<Hotels />} />
        <Route path='/hotel/:id' element={<Hotel />} />
        <Route path='/taxi' element={<Taxi />} />
        <Route path='/flights' element={<Flights />} />
        <Route path='/book' element={<Book />} />
        <Route path='/post/hotel' element={<AddHotel />} />
        <Route path='/hotel/login' element={<HotelAccountLogin />} />
        <Route path='/my/hotel' element={<HotelHomePage />} />
        <Route path='/my/hotel/update/:id' element={<UpdateHotelForm />} />
        <Route path='/room/post/:id' element={<RoomPost />} />
        <Route path='/user/login' element={<UserLogin />} />
        <Route path='/hotel/reservations/:id' element={<HotelReservation />} />
        <Route path='/my/reservations' element={<UserReservation />} />
        <Route path='/my/reservation/details/:id' element={<UserReservationDetails />} />
        <Route path='/account/login' element={<Login />} />
        <Route path='/account/signup' element={<Signup />} />
        <Route path='/reservation' element={<Elements stripe={stripePromise}><Reservation /></Elements>} />
        <Route path='/nav' element={<HearNav />} />
        <Route path='/room/edit/:id' element={<UpdateRoom />} />
        <Route path='/room/delete/:id/:id' element={<DeleteRoom />} />
      </Routes>
    </div>
  );
}

export default App;