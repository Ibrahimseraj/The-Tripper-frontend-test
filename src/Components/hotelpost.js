/*
import React, { useState } from "react";
import axios from "axios";

const AddHotelForm = () => {
  const [hotelName, setHotelName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [refundable, setRefundable] = useState(false);
  const [popularAmenities, setPopularAmenities] = useState([]);
  const [roomAmenities, setRoomAmenities] = useState([]);
  const [description, setDescription] = useState("");
  const [FeesAndPolicies, setFeesAndPolicies] = useState("");
  const [aboutThisProperty, setAboutThisProperty] = useState("");
  const [rooms, setRooms] = useState("");
  const [cheapestPrice, setCheapestPrice] = useState("");
  const [images, setImages] = useState([]);


  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("hotelName", hotelName);
      formData.append("address", address);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("country", country);
      formData.append("zipCode", zipCode);
      formData.append("refundable", refundable);
      formData.append("popularAmenities", popularAmenities);
      formData.append("roomAmenities", roomAmenities);
      formData.append("description", description);
      formData.append("FeesAndPolicies", FeesAndPolicies);
      formData.append("aboutThisProperty", aboutThisProperty);
      formData.append("rooms", rooms);
      formData.append("cheapestPrice", cheapestPrice);

      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }

      const response = await axios.post("/api/hotels", formData);
      
      console.log(response.data);
      // Do something with the response, e.g. redirect to a confirmation page
    } catch (error) {
      console.error(error);
      // Handle the error, e.g. display an error message to the user
    }
  };

  const handleImageChange = (event) => {
    setImages(event.target.files);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="hotelName">Hotel Name:</label>
        <input
          type="text"
          id="hotelName"
          value={hotelName}
          onChange={(event) => setHotelName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
      {/* ...other form fields *//*}
      <div>
        <label htmlFor="images">Images:</label>
        <input type="file" id="images" multiple onChange={handleImageChange} />
      </div>
      <button type="submit">Add Hotel</button>
    </form>
  );
};

export default AddHotelForm;
*/

/*
import React, { useState } from "react";
import axios from "axios";

const AddHotelForm = () => {
  const [hotelName, setHotelName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [refundable, setRefundable] = useState(false);
  const [popularAmenities, setPopularAmenities] = useState([]);
  const [roomAmenities, setRoomAmenities] = useState([]);
  const [description, setDescription] = useState("");
  const [FeesAndPolicies, setFeesAndPolicies] = useState("");
  const [aboutThisProperty, setAboutThisProperty] = useState("");
  const [rooms, setRooms] = useState("");
  const [cheapestPrice, setCheapestPrice] = useState("");
  const [images, setImages] = useState([]);
  const authToken = localStorage.getItem('hotelToken');
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("hotelName", hotelName);
      formData.append("address", address);
      formData.append("city", city);
      formData.append("refundable", refundable);
      formData.append("popularAmenities", popularAmenities);
      formData.append("roomAmenities", roomAmenities);
      formData.append("description", description);
      formData.append("FeesAndPolicies", FeesAndPolicies);
      formData.append("aboutThisProperty", aboutThisProperty);
      formData.append("cheapestPrice", cheapestPrice);

      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }

      const response = await axios.post("http://localhost:5050/hotel/post", formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      });

      console.log(response.data);
      // Do something with the response, e.g. redirect to a confirmation page
    } catch (error) {
      console.error(error);
      // Handle the error, e.g. display an error message to the user
    }
  };

  const handleImageChange = (event) => {
    setImages(event.target.files);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="hotelName">Hotel Name:</label>
        <input
          type="text"
          id="hotelName"
          value={hotelName}
          onChange={(event) => setHotelName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="refundable">Refundable:</label>
        <input
          type="checkbox"
          id="refundable"
          checked={refundable}
          onChange={(event) => setRefundable(event.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="popularAmenities">Popular Amenities:</label>
        <input
          type="text"
          id="popularAmenities"
          value={popularAmenities}
          onChange={(event) => setPopularAmenities(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="roomAmenities">Room Amenities:</label>
        <input
          type="text"
          id="roomAmenities"
          value={roomAmenities}
          onChange={(event) => setRoomAmenities(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="FeesAndPolicies">Fees and Policies:</label>
        <textarea
          id="FeesAndPolicies"
          value={FeesAndPolicies}
          onChange={(event) => setFeesAndPolicies(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="aboutThisProperty">About This Property:</label>
        <textarea
          id="aboutThisProperty"
          value={aboutThisProperty}
          onChange={(event) => setAboutThisProperty(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cheapestPrice">Cheapest Price:</label>
        <input
          type="text"
          id="cheapestPrice"
          value={cheapestPrice}
          onChange={(event) => setCheapestPrice(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="images">Images:</label>
        <input
          type="file"
          id="images"
          multiple
          onChange={handleImageChange}
        />
      </div>
      <button type="submit">Add Hotel</button>
    </form>
  );
};

export default AddHotelForm;

*/

/*
import React, { useState } from 'react';
import axios from 'axios';


function AddHotel(props) { 
    const [cheapestPrice, setCheapestPrice] = useState();
    const [hotelName, setHotelName] = useState('');
    const [popularAmenities, setPopularAmenities] = useState('');
    const [description, setDescription] = useState('');
    const [FeesAndPolicies, setFeesAndPolicies] = useState('');
    const [roomAmenities, setRoomAmenities] = useState('');
    const [aboutThisProperty, setAboutThisProperty] = useState('');
    const [address, setAddress] = useState('');
    const [images, setImages] = useState([]);
    const [city, setCity] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const formData = new FormData();
  
      formData.append('cheapestPrice', cheapestPrice);
      formData.append('hotelName', hotelName);
      formData.append('popularAmenities', popularAmenities);
      formData.append('description', description);
      formData.append('FeesAndPolicies', FeesAndPolicies);
      formData.append('roomAmenities', roomAmenities);
      formData.append('aboutThisProperty', aboutThisProperty);
      formData.append('address', address);
      formData.append('city', city);

      const authToken = localStorage.getItem('hotelToken');
  
      for (let i = 0; i < images.length; i++) {
        formData.append('images', images[i]);
      }
  
      axios.post('http://localhost:5050/hotel/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${authToken}`
        } 
      })
        .then((response) => {
          console.log(response.data);
          // redirect to the Hotels component with the hotelId
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    const handleImageChange = (event) => {
      const files = event.target.files;
      setImages(files);
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <div className='number5'>
            <textarea placeholder='popularAmenities' value={popularAmenities} onChange={(event) => setPopularAmenities(event.target.value)} className='popularamenities' />
            <input type='file' multiple onChange={handleImageChange} />
        </div>
        <div className='number2'>
            <input placeholder='hotel name' value={hotelName} onChange={(event) => setHotelName(event.target.value)} className='hotelname' />
            <input placeholder='address' value={address} onChange={(event) => setAddress(event.target.value)} className='address' />
        </div>
        <div className='number1'>
            <input placeholder='cheapestPrice'value={cheapestPrice} onChange={(event) => setCheapestPrice(event.target.value)} className='cheapestPrice' />
            <input placeholder='city'value={city} onChange={(event) => setCity(event.target.value)} className='city' />
        </div>
        <div className='number3'>
            <textarea placeholder='description' value={description} onChange={(event) => setDescription(event.target.value)} className='description' />
            <textarea placeholder='FeesAndPolicies' value={FeesAndPolicies} onChange={(event) => setFeesAndPolicies(event.target.value)} className='feesandpolicies' />
        </div>
        <div className='number4'>
            <textarea placeholder='roomAmenities' value={roomAmenities} onChange={(event) => setRoomAmenities(event.target.value)} className='roomAmenities' />
            <textarea placeholder='aboutThisProperty' value={aboutThisProperty} onChange={(event) => setAboutThisProperty(event.target.value)} className='aboutThisProperty' />
        </div>
        <button type='submit'>post</button>
      </form>
    </div>
  )
}

export default AddHotel;
*/

/*{ name: 'Free Wi-Fi', available: false, icon: <FaWifi /> },
    { name: 'House Keeping', available: false, icon: <MdDryCleaning /> },
    { name: 'Free Breakfast', available: false, icon: <MdOutlineFreeBreakfast /> },
    { name: 'Breakfast', available: false, icon: <MdOutlineFreeBreakfast /> },
    { name: 'Free parking', available: false, icon: <FaParking /> },
    { name: 'pool', available: false, icon: <MdPool /> },
    { name: 'Outdoor pool', available: false, icon: <MdPool /> },
    { name: 'Indoor pool', available: false, icon: <MdPool /> },
    { name: 'Fitness', available: false, icon: <IoMdFitness /> },
    { name: 'Hot tup', available: false, icon: <FaHotTub /> },
    { name: 'Spa', available: false, icon: <MdOutlineSpa /> },
    { name: 'Resturant', available: false, icon: <BiRestaurant /> },
    { name: 'full-service laundry', available: false, icon: <MdOutlineLocalLaundryService /> },
    { name: 'Pet-friendly', available: false, icon: <MdPets /> },
    { name: 'Airport shuttle', available: false, icon: <GrBus /> },
    { name: 'City view', available: false, icon: <BiSolidCity /> },*/

    /*{ name: 'Free Wi-Fi', available: false, icon: 'FaWifi' },
    { name: 'House Keeping', available: false, icon: 'MdDryCleaning' },
    { name: 'Free Breakfast', available: false, icon: 'MdOutlineFreeBreakfast' },
    { name: 'Breakfast', available: false, icon: 'MdOutlineFreeBreakfast' },
    { name: 'Free parking', available: false, icon: 'FaParking' },
    { name: 'pool', available: false, icon: 'MdPool' },
    { name: 'Outdoor pool', available: false, icon: 'MdPool' },
    { name: 'Indoor pool', available: false, icon: 'MdPool' },
    { name: 'Fitness', available: false, icon: 'IoMdFitness' },
    { name: 'Hot tub', available: false, icon: 'FaHotTub' },
    { name: 'Spa', available: false, icon: 'MdOutlineSpa' },
    { name: 'Restaurant', available: false, icon: 'BiRestaurant' },
    { name: 'full-service laundry', available: false, icon: 'MdOutlineLocalLaundryService' },
    { name: 'Pet-friendly', available: false, icon: 'MdPets' },
    { name: 'Airport shuttle', available: false, icon: 'GrBus' },
    { name: 'City view', available: false, icon: 'BiSolidCity' },*/


import React, { useState } from 'react';
import axios from 'axios';
import { RiCheckboxCircleFill, RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { FaWifi } from 'react-icons/fa';
import { MdDryCleaning } from 'react-icons/md';
import { MdOutlineFreeBreakfast } from 'react-icons/md';
import { FaParking } from 'react-icons/fa';
import { MdPool } from 'react-icons/md';
import { IoMdFitness } from 'react-icons/io';
import { FaHotTub } from 'react-icons/fa';
import { MdOutlineSpa } from 'react-icons/md';
import { BiRestaurant } from 'react-icons/bi';
import { MdOutlineRoomService } from 'react-icons/md';
import { MdOutlineLocalLaundryService } from 'react-icons/md';
import { MdPets } from 'react-icons/md';
import { GrBus } from 'react-icons/gr';
import { BiSolidCity } from 'react-icons/bi';
import './hotelpost.css';
import HearNav from './HearNav';



function AddHotel(props) {
  const [cheapestPrice, setCheapestPrice] = useState();
  const [hotelName, setHotelName] = useState('');
  const [popularAmenities, setPopularAmenities] = useState([
    { name: 'Free Wi-Fi', available: false, icon: 'FaWifi' },
    { name: 'House Keeping', available: false, icon: 'MdDryCleaning' },
    { name: 'Free Breakfast', available: false, icon: 'MdOutlineFreeBreakfast' },
    { name: 'Breakfast', available: false, icon: 'MdOutlineFreeBreakfast' },
    { name: 'Free parking', available: false, icon: 'FaParking' },
    { name: 'pool', available: false, icon: 'MdPool' },
    { name: 'Outdoor pool', available: false, icon: 'MdPool' },
    { name: 'Indoor pool', available: false, icon: 'MdPool' },
    { name: 'Fitness', available: false, icon: 'IoMdFitness' },
    { name: 'Hot tub', available: false, icon: 'FaHotTub' },
    { name: 'Spa', available: false, icon: 'MdOutlineSpa' },
    { name: 'Restaurant', available: false, icon: 'BiRestaurant' },
    { name: 'full-service laundry', available: false, icon: 'MdOutlineLocalLaundryService' },
    { name: 'Pet-friendly', available: false, icon: 'MdPets' },
    { name: 'Airport shuttle', available: false, icon: 'GrBus' },
    { name: 'City view', available: false, icon: 'BiSolidCity' },
  ]);
  const [description, setDescription] = useState('');
  const [FeesAndPolicies, setFeesAndPolicies] = useState('');
  const [roomAmenities, setRoomAmenities] = useState([
    { name: 'Air Conditioning', available: false },
    { name: 'Flat-screen TV', available: false },
    { name: 'Mini Bar', available: false },
    { name: 'Private Bathroom', available: false },
    { name: 'Bathtub', available: false },
    { name: 'Hairdryer', available: false },
    { name: 'Desk', available: false },
    { name: 'Safe', available: false },
    { name: 'Wardrobe or Closet', available: false },
  ]);
  const [aboutThisProperty, setAboutThisProperty] = useState('');
  const [address, setAddress] = useState('');
  const [images, setImages] = useState([]);
  const [city, setCity] = useState('');
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append('cheapestPrice', cheapestPrice);
    formData.append('hotelName', hotelName);
    formData.append('popularAmenities', JSON.stringify(popularAmenities));
    formData.append('description', description);
    formData.append('FeesAndPolicies', FeesAndPolicies);
    formData.append('roomAmenities', JSON.stringify(roomAmenities));
    formData.append('aboutThisProperty', aboutThisProperty);
    formData.append('address', address);
    formData.append('city', city);
    console.log('popularAmenities:', popularAmenities);
    console.log('roomAmenities:', roomAmenities);


    const authToken = localStorage.getItem('hotelToken');

    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }

    axios
      .post('http://localhost:5050/hotel/post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        // redirect to the Hotels component with the hotelId
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    setImages(files);
  };

  const handlePopularAmenitiesChange = (index) => {
    const updatedPopularAmenities = [...popularAmenities];
    updatedPopularAmenities[index].available = !updatedPopularAmenities[index].available;
    setPopularAmenities(updatedPopularAmenities);
  };

  
  const handleRoomAmenitiesChange = (index, checked) => {
    const updatedRoomAmenities = [...roomAmenities];
    updatedRoomAmenities[index].available = checked;
    setRoomAmenities(updatedRoomAmenities);
  };
  

  return (
    <div className='hotel-post-con'>
      <HearNav />
      <div className='hotel-post-form-con'>
      <form onSubmit={handleSubmit}>
      {/*<form onSubmit={handleSubmit}>
        <div className='number5'>
          {popularAmenities.map((amenity, index) => (
            <div key={index}>
              <label>
                <input
                  type='checkbox'
                  checked={amenity.available}
                  onChange={() => handlePopularAmenitiesChange(index)}
                />
                {amenity.available ? <RiCheckboxCircleFill /> : <RiCheckboxBlankCircleFill />}
                {amenity.icon}
                {amenity.name}
              </label>
            </div>
          ))}
          <input type='file' multiple onChange={handleImageChange} />
        </div>
        <button type='submit'>post</button>
          </form>}
      {/*<div className='number5'>
            <textarea placeholder='popularAmenities' value={popularAmenities} onChange={(event) => setPopularAmenities(event.target.value)} className='popularamenities' />
            <input type='file' multiple onChange={handleImageChange} />
          </div>*/}
        <div className='number5'>
          <input type='file' multiple onChange={handleImageChange} className='post-image-for-hotel' />
          <input placeholder='hotel name' value={hotelName} onChange={(event) => setHotelName(event.target.value)} className='hotelname33' />
        </div>
        <div className='number2'>
            {popularAmenities.map((amenity, index) => (
              <div key={index} className='PopularAmenities-post-con'>
                <label>
                  <input
                    type='checkbox'
                    checked={amenity.available}
                    onChange={() => handlePopularAmenitiesChange(index)}
                    className='PopularAmenities-post-input'
                  />
                  {renderIcon(amenity.icon)} {amenity.name}
                </label>
              </div>
            ))}
        </div>
        <h3 className='description-post'>Description</h3>
        <textarea placeholder='description' value={description} onChange={(event) => setDescription(event.target.value)} className='description' />
        <div className='number1'>
            <input placeholder='address' value={address} onChange={(event) => setAddress(event.target.value)} className='address1' />
            <input placeholder='city'value={city} onChange={(event) => setCity(event.target.value)} className='city' />
        </div>
        <div className='number3'>
            <input placeholder='one of your rooms price'value={cheapestPrice} onChange={(event) => setCheapestPrice(event.target.value)} className='cheapestPrice' />
            <h3 className='feesandpolicies-post'>FeesAndPolicies</h3>
            <textarea placeholder='FeesAndPolicies' value={FeesAndPolicies} onChange={(event) => setFeesAndPolicies(event.target.value)} className='feesandpolicies' />
        </div>
        <div className='number4'>
        <div className='roomAmenities'>
            {roomAmenities.map((amenity, index) => (
              <div key={index}>
                <label>
                  <input
                    type='checkbox'
                    checked={amenity.available}
                    onChange={(event) => handleRoomAmenitiesChange(index, event.target.checked)}
                  />
                  {amenity.name}
                </label>
              </div>
            ))}
          </div>
          <h3 className='aboutThisProperty-post'>aboutThisProperty</h3>
            <textarea placeholder='aboutThisProperty' value={aboutThisProperty} onChange={(event) => setAboutThisProperty(event.target.value)} className='aboutThisProperty' />
        </div>
        <button type='submit'>post</button>
      </form>
      </div>
    </div>
  );
}

const renderIcon = (iconName) => {
  switch (iconName) {
    case 'FaWifi':
      return <FaWifi />;
    case 'MdDryCleaning':
      return <MdDryCleaning />;
    case 'MdOutlineFreeBreakfast':
      return <MdOutlineFreeBreakfast />;
    case 'FaParking':
      return <FaParking />;
    case 'MdPool':
      return <MdPool />;
    case 'IoMdFitness':
      return <IoMdFitness />;
    case 'FaHotTub':
      return <FaHotTub />;
    case 'MdOutlineSpa':
      return <MdOutlineSpa />;
    case 'BiRestaurant':
      return <BiRestaurant />;
    case 'MdOutlineLocalLaundryService':
      return <MdOutlineLocalLaundryService />;
    case 'MdPets':
      return <MdPets />;
    case 'GrBus':
      return <GrBus />;
    case 'BiSolidCity':
      return <BiSolidCity />;
    default:
      return null;
  }
};


//export default AddHotel;

export { AddHotel, renderIcon };
