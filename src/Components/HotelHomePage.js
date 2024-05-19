/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiShare } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { useNavigate, Link, useParams } from 'react-router-dom';
import './HotelHomePage.css';
import Room from './Rooms';
import { renderIcon } from './hotelpost'; 



function HotelHomePage() {
  const [data, setData] = useState(null);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem('hotelToken');
        const response = await axios.get(`http://localhost:5050/hotel/profile/`, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        const responseData = response.data[0];
        setData(responseData);
        // Redirect to the Hotels component with the hotelId
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSliderNumber;
  
    if (direction === "l") {
      newSliderNumber = slideNumber === 0 ? (data?.images?.length || 0) - 1 : slideNumber - 1;
    } else {
      newSliderNumber = slideNumber === (data?.images?.length || 0) - 1 ? 0 : slideNumber + 1;
    }
  
    setSlideNumber(newSliderNumber);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const id = data._id;
  

  return (
    <div>
      <div id='single-hotel-connn' key={data._id}>
      <div className='hotelContainer'>
          {open && <div className='slider'>
                <AiFillCloseCircle className='close' onClick={()=>setOpen(false)} />
                <IoIosArrowDropleft className='arrow' onClick={()=>handleMove("l")} />
                <div className='sliderWrapper'>
                  <img src={data.images[slideNumber].url} alt='' className='sliderImg' />
                </div>
              <IoIosArrowDropright className='arrow' onClick={()=>handleMove("r")} />
          </div>}
        <div className='img-con-all'>
        <div className='hotelImages'>
          {data?.images && data.images.length > 0 && (
            <>
            <div className='bigest-image'>
              <img onClick={() => handleOpen(0)} src={data.images[0].url} alt="" className='someclass0' />
            </div>
            <div className='first-two-images'>
              <div className='image-div-1'>
                {data.images.length >= 2 && (
                  <img onClick={() => handleOpen(1)} src={data.images[1].url} alt="" className='someclass1' />
                )}
              </div>
              <div className='image-div-2'>
                {data.images.length >= 3 && (
                  <img onClick={() => handleOpen(2)} src={data.images[2].url} alt="" className='someclass2' />
                )}
              </div>
            </div>
            <div className='second-two-images'>
              <div className='image-div-3'>
                {data.images.length >= 4 && (
                  <img onClick={() => handleOpen(3)} src={data.images[3].url} alt="" className='someclass3' />
                )}
              </div>
              <div className='image-div-4'>
                {data.images.length >= 5 && (
                  <img onClick={() => handleOpen(4)} src={data.images[4].url} alt="" className='someclass4' />
                )}
              </div>
            </div>
           </>
          )}
        </div>
        </div>
        <Link to={`/my/hotel/update/${data._id}`}><MdOutlineModeEditOutline /> Edit </Link>
        <Link to={`/room/post/${data._id}`}>Add Room</Link>
        <Link to={`/hotel/reservations/${data._id}`}>Reservations</Link>
        <div className='single-hotel-name'>
          <h3>{data.hotelName}</h3>
        </div>
        <div className='single-hotel-amenities'>
          {data.popularAmenities
            .filter((amenity) => amenity.available === true)
              .map((amenity, index) => (
                <div key={index} className='amenity'>
                  {renderIcon(amenity.icon)}
                  <p className='amenity-name'>{amenity.name}</p>
                </div>
          ))}
        </div>
        <div className='single-hotel-description'>
          <p>{data.description}</p>
        </div>
        <Room getHotelid={id} />       
      <div className='single-hotel-rooms'>
        </div>
        <div className='single-hotel-fees-policies'>
          <h3>Fees & Policies</h3>
          <p>{data.FeesAndPolicies}</p>
        </div>
        <div className='single-hotel-roomAmenities'>
          <h3>Room & Amenities</h3>
        </div>
      </div>
      </div>
    </div>
  );
}

export default HotelHomePage;
*/


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiShare } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { useNavigate, Link, useParams } from 'react-router-dom';
import './HotelHomePage.css';
import Room from './Rooms';
import { renderIcon } from './hotelpost'; 
import fire from '../Astronut/fire.jpg';
import { PulseLoader } from 'react-spinners';
import HearNav from './HearNav';
import HotelRoom from './HotelRoom';


function HotelHomePage() {
  const [data, setData] = useState(null);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem('hotelToken');
        const response = await axios.get(`http://localhost:5050/hotel/profile/`, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        const responseData = response.data[0];
        setData(responseData);
        setLoading(false);
        // Redirect to the Hotels component with the hotelId
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSliderNumber;
  
    if (direction === "l") {
      newSliderNumber = slideNumber === 0 ? (data?.images?.length || 0) - 1 : slideNumber - 1;
    } else {
      newSliderNumber = slideNumber === (data?.images?.length || 0) - 1 ? 0 : slideNumber + 1;
    }
  
    setSlideNumber(newSliderNumber);
  };

  if (loading) {
    return (
      <div id='loading-the-load'>
        <img src={fire} alt="fire" className='dolo'/>
        <PulseLoader color="#00ffff" loading={loading} size={20} />
      </div>   
    )
  }

  const id = data._id;
  

  return (
    <div>
      <HearNav />
      <div id='single-hotel-connn' key={data._id}>
      <div className='hotelContainer'>
          {open && <div className='slider'>
                <AiFillCloseCircle className='close' onClick={()=>setOpen(false)} />
                <IoIosArrowDropleft className='arrow' onClick={()=>handleMove("l")} />
                <div className='sliderWrapper'>
                  <img src={data.images[slideNumber].url} alt='' className='sliderImg' />
                </div>
              <IoIosArrowDropright className='arrow' onClick={()=>handleMove("r")} />
          </div>}
        <div className='img-con-all'>
        <div className='hotelImages'>
          {data?.images && data.images.length > 0 && (
            <>
            <div className='bigest-image'>
              <img onClick={() => handleOpen(0)} src={data.images[0].url} alt="" className='someclass0' />
            </div>
            <div className='first-two-images'>
              <div className='image-div-1'>
                {data.images.length >= 2 && (
                  <img onClick={() => handleOpen(1)} src={data.images[1].url} alt="" className='someclass1' />
                )}
              </div>
              <div className='image-div-2'>
                {data.images.length >= 3 && (
                  <img onClick={() => handleOpen(2)} src={data.images[2].url} alt="" className='someclass2' />
                )}
              </div>
            </div>
            <div className='second-two-images'>
              <div className='image-div-3'>
                {data.images.length >= 4 && (
                  <img onClick={() => handleOpen(3)} src={data.images[3].url} alt="" className='someclass3' />
                )}
              </div>
              <div className='image-div-4'>
                {data.images.length >= 5 && (
                  <img onClick={() => handleOpen(4)} src={data.images[4].url} alt="" className='someclass4' />
                )}
              </div>
            </div>
           </>
          )}
        </div>
        </div>
        <Link to={`/my/hotel/update/${data._id}`}><MdOutlineModeEditOutline /> Edit </Link>
        <Link to={`/room/post/${data._id}`}>Add Room</Link>
        <Link to={`/hotel/reservations/${data._id}`}>Reservations</Link>
        <div className='single-hotel-name'>
          <h3>{data.hotelName}</h3>
        </div>
        <div className='single-hotel-amenities'>
          {data.popularAmenities
            .filter((amenity) => amenity.available === true)
              .map((amenity, index) => (
                <div key={index} className='amenity'>
                  {renderIcon(amenity.icon)}
                  <p className='amenity-name'>{amenity.name}</p>
                </div>
          ))}
        </div>
        <div className='single-hotel-description'>
          <p>{data.description}</p>
        </div>
      <div className='single-hotel-rooms'>
        <HotelRoom hotelId={id} />
      </div>
        <div className='single-hotel-fees-policies'>
          <h3>Fees & Policies</h3>
          <p>{data.FeesAndPolicies}</p>
        </div>
        <div className='single-hotel-roomAmenities'>
          <h3>Room & Amenities</h3>
          <p>{data.roomAmenities}</p>
          <p>{data.cheapestPrice}</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default HotelHomePage;