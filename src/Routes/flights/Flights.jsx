import React, { useState } from 'react';
import { AiOutlineHeart, AiTwotoneCheckCircle, AiOutlineIssuesClose } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import { HiOutlineViewGrid } from 'react-icons/hi';
import Modal from 'react-modal';
//import Modal from './Modal';
import fr from './fr.jpg'
import { AiOutlineClose } from 'react-icons/ai'
import useFetch from '../../Components/useFetch';
import './flights.css'
import { useParams } from 'react-router-dom';
import { FaSmokingBan } from 'react-icons/fa';
import { AiOutlineWifi } from 'react-icons/ai';
import { LuBedSingle } from 'react-icons/lu';
import { FcApproval } from 'react-icons/fc'
import { Link } from "react-router-dom";
import { CiCircleCheck } from 'react-icons/ci';
import Room from '../../Components/Rooms';
import SimpleImageSlider from "react-simple-image-slider";
import Reservation from '../../Components/Reservation';


const Flights = (props) => {
          const { id } = useParams();

        
          const [slideNumber, setSlideNumber] = useState(0);
          const [open, setOpen] = useState(false);

          const[click, setClick] = useState(false);

        const { data, loading, error } = useFetch(`http://localhost:5050/room/get/${id}`);


          //const [visible, setVisible] = useState(false)
          
          //const[openModal, setOpenModal] = useState(false);  

          const[modalIsOpen, setModalOpen] = useState(false);

          const photos = [
            {
                src: "https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                className: "someclass"
            },
            {
                src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                className: "someclass2"
            },
            {
                src: "https://images.pexels.com/photos/2986231/pexels-photo-2986231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                className: "someclass3"
            },
            {
                src: "https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                className: "someclass4"
            },
            {
              src: "https://images.pexels.com/photos/221457/pexels-photo-221457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              className: "someclass5"
            }
 
        ];
        
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


        

        /*
        const handleMove = (direction) =>{
          let newSliderNumber;
        
          if (direction=== "l") {
              newSliderNumber = slideNumber === 0 ? 5 : slideNumber-1;
          }else{ 
              newSliderNumber = slideNumber === 5 ? 0 : slideNumber+1;
          }
        
          setSlideNumber(newSliderNumber)
        };
        */
  
        /*
        const handleMove = (direction) => {
          let newSliderNumber;
        
          if (direction === "l") {
            newSliderNumber = slideNumber === 0 ? data.images.length - 1 : slideNumber - 1;
          } else {
            newSliderNumber = slideNumber === data.images.length - 1 ? 0 : slideNumber + 1;
          }
        
          setSlideNumber(newSliderNumber);
        };
        */
        /*
        const handleMove = (direction) => {
          let newSliderNumber;

          if (direction === "l") {
            newSliderNumber = slideNumber === 0 ? (data?.images?.length || 0) - 1 : slideNumber - 1;
          } else {
            newSliderNumber = slideNumber === (data?.images?.length || 0) - 1 ? 0 : slideNumber + 1;
          }
        
          setSlideNumber(newSliderNumber);
        };
        */
        
        return (
          <div className='vacation'>
            <h1 className='address'>{data.hotelName}</h1>
          <div>
          <a href="/" target="_blank">{data.city}</a>
          <div className='being'>
            <button className='near'><FiShare /> Share</button>
            <button className='near'><AiOutlineHeart /> Save</button>
          </div>
          </div>
          <div className='hotelContainer'>
          {/*open && <div className='slider'>
                <AiFillCloseCircle className='close' onClick={()=>setOpen(false)} />
                <IoIosArrowDropleft className='arrow' onClick={()=>handleMove("l")} />
                <div className='sliderWrapper'>
                  <img src={data.images[slideNumber].url} alt='' className='sliderImg' />
                </div>
               <IoIosArrowDropright className='arrow' onClick={()=>handleMove("r")} />
        </div>*/}
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
        <ul className='build'>
          <li><a href='/'>select your room</a></li>
          <li><a href='/'>reviews</a></li>
          <li><a href='/'>Services & Amenities</a></li>
          <li><a href='/'>location</a></li>
        </ul>
        <Room hotelId={id} />
        </div>
        <div className='property'>
      <h2>Select your room</h2>
      <span>Choose from one of these great options. Prices shown are per room, per night. Includes taxes and service fees.</span>
    </div>
              <div className='drive'>
                <img src={fr} className='vrsim' onClick={() => setModalOpen(true)} />
                </div>
                <button className='fax'  onClick={() => setModalOpen(true)}>
                <h3>Room with 2 single beds </h3>
              <h4>Room size:20m²</h4>
              </button>
              <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setModalOpen(false)}>
                <div className='overlay'>
                  <h2>room.title</h2>
                  <p>room.description</p>
                  <span><LuBedSingle />1king Bed</span>
                  <span><FaSmokingBan /> FaSmokingBan</span>
                  <span><AiOutlineWifi />wifi</span>
                 <span className="wide" onClick={() => setModalOpen(false)}>X</span>
                 <div>
                  <SimpleImageSlider
                    width={500}
                    height={280}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    className="painted"
                  />
                  </div>
                 <div className='town'>
                 <h3 className='owner'>Toiletries</h3>
                 <div>
                  <span><CiCircleCheck className='lives' />room.bathRoom</span>
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
                  <span><CiCircleCheck className='lives' />room.foodAndDrinks[0]</span>
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
                  <span><CiCircleCheck className='lives' />nhjshd</span>
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
                 <h4>US$ 20</h4>
                  <span>per night</span>
        <h3><Link to="/book">book now</Link></h3>
        </div>
        </div>
)
}

export default Flights;