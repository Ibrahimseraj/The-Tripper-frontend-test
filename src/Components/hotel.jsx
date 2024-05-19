import React, { useState, useEffect } from 'react';
import './hotel.css';
import useFetch from './useFetch';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaStar } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Room from './Rooms';
import { renderIcon } from './hotelpost';
import fire from '../Astronut/fire.jpg';
import { PulseLoader } from 'react-spinners';
import HearNav from './HearNav';
import HotelRatings from './hotelRatings';


function Hotel() {
const { id } = useParams();
const { data, loading, error } = useFetch(`http://localhost:5050/hotel/get/${id}`);
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const [showFullImage, setShowFullImage] = useState(false);
const [isExpanded, setIsExpanded] = useState(false);
const [hotel, setHotel] = useState(null);
const [images, setImages] = useState([]);
const [slideNumber, setSlideNumber] = useState(0);
const [open, setOpen] = useState(false);

const MAX_LINES = 7;
const MAX_LENGTH = MAX_LINES * 60; // assuming an average of 60 characters per line


/*
useEffect(() => {
  axios.get(`/hotel/get/${id}`).then(res => {
  console.log(res.data);
  setHotel(res.data);
  if (res.data.images) {
  setImages(res.data.images);
  }
  }).catch(error => console.log(error));
  }, [id]);
  */


const handleClick = () => {
setIsExpanded(true);
};

const handlePreviousClick = () => {
setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? data.images.length - 1 : prevIndex - 1));
};

const handleNextClick = () => {
setCurrentImageIndex((prevIndex) => (prevIndex === data.images.length - 1 ? 0 : prevIndex + 1));
};

const handleImageClick = () => {
setShowFullImage(true);
};

const handleOpen = (i)=>{
setSlideNumber(i);
setOpen(true);
};

const handleMove = (direction) => {
let newSliderNumber;

if (direction === "l") {
newSliderNumber = slideNumber === 0 ? data.images.length - 1 : slideNumber - 1;
} else {
newSliderNumber = slideNumber === data.images.length - 1 ? 0 : slideNumber + 1;
}

setSlideNumber(newSliderNumber);
};

if (loading) {
  return (
    <div>
      <img src={fire} alt="fire" className='dolo'/>
      <PulseLoader color="#36d7b7" loading={loading} size={20} />
    </div>
  );
}

const averageRating = data.averageRating;
/*
function getStarRating(averageRating) {
  const roundedRating = Math.round(averageRating);

  if (roundedRating < 1 || roundedRating > 5) {
    throw new Error('Rating must be between 1 and 5');
  }

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<FaStar key={i} className='a-full-number' />);
    } else {
      stars.push(<FiStar key={i} className='a-number-with-points' />);
    }
  }

  return stars;
}
*/

function getStarRating(averageRating) {
  let roundedRating = Math.round(averageRating);

  if (roundedRating < 1 || roundedRating > 5) {
    roundedRating = Math.min(Math.max(roundedRating, 1), 5); // Clamp the rating between 1 and 5
  }

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<FaStar key={i} className='a-full-number' />);
    } else {
      stars.push(<FiStar key={i} className='a-number-with-points' />);
    }
  }

  return stars;
}

const starRating = getStarRating(averageRating);


const ratings1111 = data.ratings && data.ratings.map((rate) => {
  const starts = getStarRating(rate.rating);
  return (
    <div className='raters'>
      {starts}
      <p>{rate.comment}</p>
    </div>
  );
});


return (
<div className='single-hotel-container'>
  <HearNav />
  <div className='single-hotel-images'>
    {open && <div className='slider'>
      <AiFillCloseCircle className='close' onClick={()=>setOpen(false)} />
      <IoIosArrowDropleft className='arrow' onClick={()=>handleMove("l")} />
      <div className='sliderWrapper'>
        <img src={data.images[slideNumber].url} alt='' className='sliderImg' /> 
      </div> 
        <IoIosArrowDropright className='arrow' onClick={()=>handleMove("r")} />
    </div> }
    <div className='img-con-all'> <div className='hotelImages'>
      {data?.images && data.images.length > 0 && ( 
        <>
        <div className='bigest-image'>
        {data.images.length >= 0 && (
          <img onClick={() => handleOpen(0)} src={data.images[0].url} alt="" className='someclass0' />
          )}
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
                 </div> 
                 <div id='single-hotel-connn'> 
                 <div className='single-hotel-name'> 
                 <h3>{data.hotelName}</h3> 
                 </div> 
                 <div className='single-hotel-amenities'>
                  {data.popularAmenities && data.popularAmenities
                  .filter((amenity) => amenity.available === true) .map((amenity, index) => (
                     <div key={index} className='amenity'> 
                     {renderIcon(amenity.icon)} <p className='amenity-name'>{amenity.name}</p> 
                     </div> ))} 
                     </div> 
                     <div className='single-hotel-description'> 
                      <p>
                        <p className={isExpanded ? '' : 'description-collapsed'}>{data.description}</p> 
                      {!isExpanded && ( <button onClick={() => setIsExpanded(true)} className='show-more-button'> Show More </button> )}
                      </p> 
                      </div> 
                      <div className='Hours'>
                        <p>Check In Hour: {data.checkInhour}</p>
                        <p>Check Out Hour: {data.checkOuthour}</p>
                      </div>
                      <div className='single-hotel-rooms'> 
                        <Room hotelId={id} /> 
                      </div>
                      <div>
                        <HotelRatings hotelId={id} />
                        <div className='total-result-ratings'>
                          <h3>Users Reviews: </h3>
                          <p>{starRating}</p>
                        </div>
                      </div>
                      <div className='veiw-ratings'>
                      {ratings1111}
                      </div>
    </div>
  </div>
); 

} 


export default Hotel;