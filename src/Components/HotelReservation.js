import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import HearNav from './HearNav';
import './HotelReservation.css';



function HotelReservation() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem('hotelToken');
        const response = await axios.get(`http://localhost:5050/hotel/hotels/${id}/reservations`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const arr = data.map((reservation) => {
    const checkInDate = reservation.checkInDate && typeof reservation.checkInDate === 'string' ? reservation.checkInDate.substring(0, 10) : '';
    const checkOutDate = reservation.checkOutDate && typeof reservation.checkOutDate === 'string' ? reservation.checkOutDate.substring(0, 10) : '';

    return (
      <div className="con-mon-fon" key={reservation._id}>
        <div>
          <img src={reservation.room.images[0].url} />
        </div>
        <div>
          <h3>{reservation.room.title}</h3>
        </div>
        <div className='reservation-id-details'>
          <p>Check-in date: {checkInDate}</p>
          <p>Check-out date: {checkOutDate}</p>
          <p>Adults: {reservation.adults}</p>
          <p>Children: {reservation.children}</p>
          <p>Total days: {reservation.totalDays}</p>
          <p>Total price: {reservation.totalPrice}</p>
        </div>
      </div>
    );
  });

  return (
    <div className='hello-mello'>
      <HearNav />
      <div className='reserves-to-hotel-to-be'>
        {arr}
      </div>
    </div>
  );
}

export default HotelReservation;