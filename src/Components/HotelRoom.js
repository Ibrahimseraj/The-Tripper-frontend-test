import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdPeopleAlt, MdOutlineChildCare } from 'react-icons/md';
import { FaSmokingBan, FaBed, FaRegSnowflake } from 'react-icons/fa';
import { TbRulerMeasure } from 'react-icons/tb';
import { AiOutlineWifi } from 'react-icons/ai';
import './Rooms.css';
import { CiCircleCheck } from 'react-icons/ci';
import Modal from 'react-modal';
import SimpleImageSlider from "react-simple-image-slider";
import { LuBedSingle } from 'react-icons/lu';
import { Link } from 'react-router-dom';



function HotelRoom(props) {
  const { hotelId } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[modalIsOpen, setModalOpen] = useState(false);
  

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/hotel/room/${hotelId}`);
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        console.log(error)
      }
    };

    fetchRoomData();
  }, [hotelId]);


const arr = data.map((room) => {
    return (
    <div key={room._id} className='room'>
      <div className='room-templete'>
        <div className='room-templete-image' onClick={() => setModalOpen(true)}>
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
                <MdOutlineChildCare />
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
              <Link to={`/room/edit/${room._id}`}>
                <button>Edit</button>
              </Link>
              <Link to={`/room/delete/${room._id}/${hotelId}`}>
                <button>Delete Room</button>
              </Link>
            </div>
            <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setModalOpen(false)}>
                <div className='overlay'>
                  <h2>{room.title}</h2>
                  <p>{room.description}</p>
                  <p></p>
                  <span><LuBedSingle />1king Bed</span>
                  <span><FaSmokingBan /> FaSmokingBan</span>
                  <span><AiOutlineWifi />wifi</span>
                 <span className="wide" onClick={() => setModalOpen(false)}>X</span>
                 <div>
                  {/*<SimpleImageSlider
                    width={500}
                    height={280}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    className="painted"
                  />*/}
                  {room.images && room.images.length > 0 && (
                    <SimpleImageSlider
                      width={500}
                      height={280}
                      images={room.images.map(image => image.url)}
                      showBullets={true}
                      showNavs={true}
                      className="painted"
                    />
                  )}
                </div>
                 <div className='town'>
                 <h3 className='owner'>Toiletries</h3>
                 <div>
                  <span><CiCircleCheck className='lives' /></span>
                  <span><CiCircleCheck className='lives' />Soap</span>
                  <span><CiCircleCheck className='lives' />Shower Seat</span>
                 </div>
                  <div className='outcome'>
                  <span><CiCircleCheck className='functions' />Toothpaste</span>
                  <span><CiCircleCheck className='functions' />Shampoo</span>
                  <span><CiCircleCheck className='functions' />Hair Conditioner</span>
                  </div>
                 </div>
                 <div className='nooo'>
                  <h3 className='publish'>Food & Drinks</h3>
                 <div>
                  <span><CiCircleCheck className='lives' /></span>
                  <span><CiCircleCheck className='lives' />Wardrobe</span>
                  <span><CiCircleCheck className='lives' />Seat</span>
                 </div>
                  <div className='page'>
                  <span><CiCircleCheck className='functions' />Air Conditioning</span>
                  <span><CiCircleCheck className='functions' />Spare Bedding</span>
                  <span><CiCircleCheck className='functions' />Cable Channels</span>
                  </div>
                  </div>
                  <div className='karma'>
                 <h3 className='motion'>Room facilities:</h3>
                 <div>
                  <span><CiCircleCheck className='lives' />Flat-screen TV</span>
                  <span><CiCircleCheck className='lives' /></span>
                  <span><CiCircleCheck className='lives' />Wardrobe or closet</span>
                  </div>
                  <div className='Minibar'>
                  <span><CiCircleCheck className='functions' />Air conditioning</span>
                  <span><CiCircleCheck className='functions' />Safety deposit box</span>
                  <span><CiCircleCheck className='functions' />Telephone</span>
                  </div>
                 </div>
                 </div>
              </Modal>
          </div>
        </div>
      </div>
    </div>
    )
  })

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>{arr}</div>
      )}
    </div>
  )
}

export default HotelRoom;