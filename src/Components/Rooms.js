import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Rooms.css';
import Reservation from './Reservation';
import { CiCircleCheck } from 'react-icons/ci';
import Modal from 'react-modal';
import SimpleImageSlider from "react-simple-image-slider";
import { FaSmokingBan, FaBed, FaRegSnowflake } from 'react-icons/fa';
import { TbRulerMeasure } from 'react-icons/tb';
import { AiOutlineWifi } from 'react-icons/ai';
import { LuBedSingle } from 'react-icons/lu';
import { MdPeopleAlt, MdOutlineChildCare } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
//import { useHistory, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';


/*
function Room(props) {
    const { hotelId } = props;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedRoomId, setSelectedRoomId] = useState(null);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    
    const navigate = useNavigate();
    
    useEffect(() => {
    const fetchRoomData = async () => {
    try {
    const response = await axios.get(`http://localhost:5050/hotel/room/${hotelId}`);
    setData(response.data);
    setLoading(false);
    } catch (error) {
    setError(error);
    setLoading(false);
    }
    };

    fetchRoomData();
    }, [hotelId]);
      
    
    const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
    };
    
    const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
    };
    
    const handleAdultsChange = (e) => {
    setAdults(parseInt(e.target.value));
    };
    
    const handleChildrenChange = (e) => {
    setChildren(parseInt(e.target.value));
    };

    function heyy() {
        navigate('/reservation', {
          state: {
            roomId: selectedRoomId,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            adults: adults,
            children: children,
            hotelId: hotelId // Add hotelId to the props
          }
        });
    
    const arr = data.map((room) => {
    return (
    <div key={room._id} className='room'>
    <div className='room-templete'>
    <div className='room-templete-image'>
    <img src={room.images[0].url} alt={room.title} />
    </div>
    <div className='room-templete-details'>
    <h3 className='room-type'>{room.title}</h3>
    <div className='room-info'>
    <div className='room-templete-details-first-container'>
    <h5>
    <TbRulerMeasure /> {room.roomSize} m²
    </h5>
    <h5>
    <MdPeopleAlt /> Sleeps {room.adults}
    </h5>
    <h5>
    <MdOutlineChildCare />{' '}
    {room.children > 0 ? room.children : 'not allowed'}
    </h5>
    </div>
    <div className='room-templete-details-second-container'>
    <h5>
    <FaBed /> {room.bedType}
    </h5>
    <h5>
    <AiOutlineWifi /> wifi
    </h5>
    <h5>
    <FaRegSnowflake /> Air conditioning
    </h5>
    </div>
    <div className='room-templete-price'>
    <h3>{room.price} $</h3>
    <button onClick={() => {
    setSelectedRoomId(room._id);
    heyy();
    }}>
    book now
    </button>
    </div>
    </div>
    </div>
    </div>
    </div>
    );
    });
    
    return (
    <div>
    <div className='reservation-dates-and-other-details'>
    <div>
    <label>Check-in Date:</label>
    <input type="date" id="checkInDate" value={checkInDate} onChange={handleCheckInDateChange} />
    </div>
    <div>
    <label htmlFor="checkOutDate">Check-out Date:</label>
    <input type="date" id="checkOutDate" value={checkOutDate} onChange={handleCheckOutDateChange} />
    </div>
    <div>
    <label>Adults:</label>
    <input type="number" id="adults" min="1" value={adults} onChange={handleAdultsChange} />
    </div>
    <div>
    <label>Children:</label>
    <input type="number" id="children" min="0" value={children} onChange={handleChildrenChange} />
    </div>
    </div>
    {loading ? (
    <div>Loading...</div>
    ) : error ? (
    <div>Error: {error.message}</div>
    ) : (
    <div>{arr}</div>
    )}
    <ToastContainer />
    </div>
    );
    }
}
    
export default Room;
*/




function Room() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [roomId, setRoomId] = useState('');
  const [checkInDate, setCheckInDate] = useState(''); 
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [childern, setChildern] = useState(0);
  const [roomPrice, setRoomPrice] = useState();
  const [totalPrice, setTotalPrice] = useState();

  const startDate = new Date(checkInDate);
  const endDate = new Date(checkOutDate);

  const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));


  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/hotel/room/${id}`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchRoomData();
  }, [id]);

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleAdultsChange = (e) => {
    setAdults(parseInt(e.target.value));
  };

  const handleChildernChange = (e) => {
    setChildern(parseInt(e.target.value));
  };

  /*
  const handleRoomId = (roomId) => {
    setRoomId(roomId);
  };
  */

  const handleRoomId = (roomId, roomPrice) => {
    setRoomId(roomId);
    setRoomPrice(roomPrice);
  };

  /*
  const heyy = () => {
    navigate('/reservation', {
        state: {
          hotelId: hotelId,
          roomId: roomId,
          checkInDate: checkInDate,
          checkOutDate: checkOutDate,
          adults: adults,
          childern: childern
        }
      });
    };
  */

    const navigateToReservation = () => {
      if (!id) {
        toast.error('Please enter the hotel ID');
        return;
      }
    
      if (!roomId) {
        toast.error('Please select a room');
        return;
      }
    
      if (!checkInDate) {
        toast.error('Please select the check-in date');
        return;
      }
    
      if (!checkOutDate) {
        toast.error('Please select the check-out date');
        return;
      }
    
      if (!adults) {
        toast.error('Please enter the number of adults');
        return;
      }

      if (childern === null || childern < 0) {
        toast.error('Please enter a valid number of children');
        return;
      }

      const startDate = new Date(checkInDate);
      const endDate = new Date(checkOutDate);

      const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

      const totalPrice = roomPrice * totalDays;
      
      navigate('/reservation', {
        state: {
          hotelId: id,
          roomId: roomId,
          checkInDate: checkInDate,
          checkOutDate: checkOutDate,
          adults: adults,
          childern: childern,
          totalDays,
          totalPrice
        }
      });
    };

  const arr = data.map((room) => (
    <div key={room._id} className='room'>
      <div className='room-templete'>
        <div className='room-templete-image'>
          <img src={room.images[0].url} alt={room.title} />
        </div>
        <div className='room-templete-details'>
          <h3 className='room-type'>{room.title}</h3>
          <div className='room-info'>
            <div className='room-templete-details-first-container'>
              <h5>
                <TbRulerMeasure /> {room.roomSize} m²
              </h5>
              <h5>
                <MdPeopleAlt /> Sleeps {room.adults}
              </h5>
              <h5>
                <MdOutlineChildCare /> {room.childern > 0 ? room.childern : 'not allowed'}
              </h5>
            </div>
            <div className='room-templete-details-second-container'>
              <h5>
                <FaBed /> {room.bedType}
              </h5>
              <h5>
                <AiOutlineWifi /> wifi
              </h5>
              <h5>
                <FaRegSnowflake /> Air conditioning
              </h5>
            </div>
            <div className='room-templete-price'>
              <h3>{checkInDate && checkOutDate ? room.price * totalDays : room.price} $</h3>
              <button onClick={() => handleRoomId(room._id, room.price)} className='button-to-select-room'>
                Select Room
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className='reservation-dates-and-other-details'>
        <div>
          <label>Check-in Date:</label>
          <input type="date" id="checkInDate" value={checkInDate} onChange={handleCheckInDateChange} />
        </div>
        <div>
          <label htmlFor="checkOutDate">Check-out Date:</label>
          <input type="date" id="checkOutDate" value={checkOutDate} onChange={handleCheckOutDateChange} />
        </div>
        <div>
          <label>Adults:</label>
          <input type="number" id="adults" min="1" value={adults} onChange={handleAdultsChange} />
        </div>
        <div>
          <label>Children:</label>
          <input type="number" id="children" min="0" value={childern} onChange={handleChildernChange} />
        </div>
        <button onClick={navigateToReservation} className='reserve-button'>Reserve</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className='rooms-container'>{arr}</div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Room;