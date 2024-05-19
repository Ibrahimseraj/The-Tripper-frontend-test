import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
import { CiCircleCheck } from 'react-icons/ci';
import { AiOutlineHeart, AiTwotoneCheckCircle, AiOutlineIssuesClose } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import { HiOutlineViewGrid } from 'react-icons/hi';
import Modal from 'react-modal';
//import Modal from './Modal';
import fr from '../Routes/flights/fr.jpg';
import { AiOutlineClose } from 'react-icons/ai'
import '../Routes/flights/flights.css';
import { FaSmokingBan } from 'react-icons/fa';
import { AiOutlineWifi } from 'react-icons/ai';
import { LuBedSingle } from 'react-icons/lu';
import { FcApproval } from 'react-icons/fc'
import { Link } from "react-router-dom";
import Room from './Rooms';
import { renderIcon } from './hotelpost';
import HearNav from './HearNav';



function UserReservationDetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const[modalIsOpen, setModalOpen] = useState(false);
 const [isExpanded, setIsExpanded] = useState(false);

const MAX_LINES = 7;


    useEffect(() => {
    const myToken = localStorage.getItem('myToken');
    axios.get(`http://localhost:5050/reservation/get/${id}`, {
        headers: {
            Authorization: `Bearer ${myToken}`
        }
    })
      .then(response => {
        setData(response.data);
        console.log(response.data.room.images.url);
      })
      .catch(error => {
        console.error(error);
      })
    }, [id]);
  
    const handleMove = (direction) => {
      let newSliderNumber;
    
      if (direction === "l") {
        newSliderNumber = slideNumber === 0 ? data.hotel.images.length - 1 : slideNumber - 1;
      } else {
        newSliderNumber = slideNumber === data.hotel.images.length - 1 ? 0 : slideNumber + 1;
      }
    
      setSlideNumber(newSliderNumber);
    };

    const handleOpen = (i)=>{
      setSlideNumber(i);
      setOpen(true);
    };

    const images = [
      { url: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { url: "https://images.pexels.com/photos/189293/pexels-photo-189293.jpeg" },
      { url: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { url: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg" },
      { url: "https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { url: "https://images.pexels.com/photos/4134790/pexels-photo-4134790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { url: "https://images.pexels.com/photos/4134775/pexels-photo-4134775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    ];


  return (
    <div className='single-hotel-container'>
      <HearNav />
  <div className='single-hotel-images'>
    {open && <div className='slider'>
      <AiFillCloseCircle className='close' onClick={()=>setOpen(false)} />
      <IoIosArrowDropleft className='arrow' onClick={()=>handleMove("l")} />
      <div className='sliderWrapper'>
        {data.hotel && <img src={data.hotel.images[slideNumber].url} alt='' className='sliderImg' />} 
      </div> 
        <IoIosArrowDropright className='arrow' onClick={()=>handleMove("r")} />
    </div> }
    <div className='img-con-all'> <div className='hotelImages'>
    {data?.hotel && data.hotel.images.length > 0 && (
  <>
    <div className='bigest-image'>
      <img onClick={() => handleOpen(0)} src={data.hotel.images[0].url} alt="" className='someclass0' />
    </div>
    <div className='first-two-images'>
      <div className='image-div-1'>
        {data.hotel.images.length >= 2 && (
          <img onClick={() => handleOpen(1)} src={data.hotel.images[1].url} alt="" className='someclass1' />
        )}
      </div>
      <div className='image-div-2'>
        {data.hotel.images.length >= 3 && (
          <img onClick={() => handleOpen(2)} src={data.hotel.images[2].url} alt="" className='someclass2' />
        )}
      </div>
    </div>
    <div className='second-two-images'>
      <div className='image-div-3'>
        {data.hotel.images.length >= 4 && (
          <img onClick={() => handleOpen(3)} src={data.hotel.images[3].url} alt="" className='someclass3' />
        )}
      </div>
      <div className='image-div-4'>
        {data.hotel.images.length >= 5 && (
          <img onClick={() => handleOpen(4)} src={data.hotel.images[4].url} alt="" className='someclass4' />
        )}
      </div>
    </div>
  </>
)}
                 </div>
                 </div> 
                 </div> 
                 <div id='single-hotel-connn'> 
                 <div className='single-hotel-name'> 
                 {data.hotel && <h3>{data.hotel.hotelName}</h3>}
                 </div> 
                 <div className='single-hotel-amenities'>
                  {data.hotel && data.hotel.popularAmenities && data.hotel.popularAmenities
                  .filter((amenity) => amenity.available === true) .map((amenity, index) => (
                     <div key={index} className='amenity'> 
                     {renderIcon(amenity.icon)} <p className='amenity-name'>{amenity.name}</p> 
                     </div> ))} 
                     </div> 
                     <div className='single-hotel-description'> 
                      <p>
                        {data.hotel && <p className={isExpanded ? '' : 'description-collapsed'}>{data.hotel.description}</p> }
                      {!isExpanded && ( <button onClick={() => setIsExpanded(true)} className='show-more-button'> Show More </button> )}
                      </p> 
                      </div> 
                      <div className='single-hotel-rooms'> 
                      <div className='room'>
                        <h3>your booked room</h3>
        <div className='drive'>
                {data.room && <img src={data.room.images[0].url} className='vrsim' onClick={() => setModalOpen(true)} />}
                </div>
                <button className='fax' onClick={() => setModalOpen(true)}>
                {/*<h3>Room with 2 single beds</h3>*/}
                {data.room && <h3>{data.room.title}</h3>}
              {data.room && <h4>Room size: {data.room.roomSize} m²</h4>}
              </button>
              <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setModalOpen(false)}>
                <div className='overlay'>
                  {data.room && <h2>{data.room.title}</h2>}
                  {data.room && <p>{data.room.description}</p>}
                  <span><LuBedSingle />1king Bed</span>
                  <span><FaSmokingBan /> FaSmokingBan</span>
                  <span><AiOutlineWifi />wifi</span>
                 <span className="wide" onClick={() => setModalOpen(false)}>X</span>
                 <div>
                 {data.room && <SimpleImageSlider
                    width={500}
                    height={280}
                    images={data.room.images.map(image => image.url)}
                    showBullets={true}
                    showNavs={true}
                    className="painted"
                  />}
                  </div>
                 <div className='town'>
                 <h3 className='owner'>Toiletries</h3>
                 <div>
                  {data.room && <span><CiCircleCheck className='lives' />{data.room.bathRoom[0]}</span>}
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
                  {data.room && <span><CiCircleCheck className='lives' />{data.room.foodAndDrinks[0]}</span>}
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
                  {data.room && <span><CiCircleCheck className='lives' />{data.room.roomAmenities[0]}</span>}
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
              <div className='break'>
                 {data.room && <h4>US$ {data.room.price}</h4>}
                  <h5>per night</h5>
                  <h3><Link to="/book">booked</Link></h3>
        </div>
                      </div>
                      </div> 
                      <div className='single-hotel-fees-policies'>
                         <h3>Fees & Policies</h3>
                         {data.hotel && <p>{data.hotel.FeesAndPolicies}</p>}
                          </div> 
                          <div className='single-hotel-roomAmenities'> 
                          <h3>Room & Amenities</h3> 
                          {data.hotel && <p>{data.hotel.roomAmenities}</p>} 
                          </div> 
                          <div className='single-hotel-aboutThisProperty'> 
                          <h3>About This Property</h3> 
                          {data.hotel && <p>{data.hotel.aboutThisProperty}</p>} 
                          </div> 
                          </div>
                          </div> 
  )
}

export default UserReservationDetails;