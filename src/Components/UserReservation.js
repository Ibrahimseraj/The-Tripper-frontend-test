import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { renderIcon } from './hotelpost';
import { BiRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import HearNav from './HearNav';


function UserReservation() {
    const [data, setData] = useState([]);

    useEffect(() => {
    const myToken = localStorage.getItem('myToken');
    axios.get(`http://localhost:5050/reservation/get`, {
        headers: {
            Authorization: `Bearer ${myToken}`
        }
    })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      })
    }, []);

    const arr = data.map(reservation => {
        const checkInDate = reservation.checkInDate.substring(0, 10);
        const checkOutDate = reservation.checkOutDate.substring(0, 10);
        return(
          <div id='container222' key={reservation._id}>
            <Link to={`/my/reservation/details/${reservation._id}`}>
          <div className='hotel-con'>
            <div className='image-containers'>
              {reservation.hotel.images && reservation.hotel.images.length > 0 && (
                <img src={reservation.hotel.images[0].url} alt='' className='hotel-image' />
              )}
            </div>
            <div className='hotel-info'>
              <p id='hotel-name'>{reservation.hotel.hotelName}</p>
              <p className='country-city'>Thailand, {reservation.hotel.city}</p>
              <p className='status'><span>{reservation.hotel.refundable ? "Refundable" : "Non Refundable"}</span></p>
              {/*<p className='description'>{hotels.popularAmenities}</p>*/}
              <div className='popularAmenities-templete-container'>
              <div className='templete-popularAmenities-one'>
                {reservation.hotel.popularAmenities
                  .filter((amenity) => amenity.available === true)
                  .slice(0, 2) 
                    .map((amenity, index) => (
                      <div key={index} className='templete-amenity-one'>
                        {renderIcon(amenity.icon)}
                        <p className='templete-amenity-name-one'>{amenity.name}</p>
                      </div>
                ))}
              </div>
              <div className='templete-popularAmenities-two'>
                {reservation.hotel.popularAmenities
                  .filter((amenity) => amenity.available === true)
                  .slice(2, 4) 
                    .map((amenity, index) => (
                      <div key={index} className='templete-amenity-two'>
                        {renderIcon(amenity.icon)}
                        <p className='templete-amenity-name-two'>{amenity.name}</p>
                      </div>                                                
                ))}
              </div>
              </div>
            </div>
            <div className='hotel-price'>
              <p>{checkInDate}</p>
              <p>{checkOutDate}</p>
            </div>
          </div>
          </Link>
        </div>
        );
    })
    
  return (
    <div>
      <HearNav />
        {arr}
    </div>
  )
}

export default UserReservation;