/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateHotelForm = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState({
    hotelName: '',
    popularAmenities: '',
    description: '',
    refundable: false,
    FeesAndPolicies: '',
    roomAmenities: '',
    aboutThisProperty: '',
    address: '',
    cheapestPrice: 0,
  });
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const authToken = localStorage.getItem('hotelToken');

  useEffect(() => {
    axios
      .get(`http://localhost:5050/hotel/profile/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(response => {
        const data = response.data[0];
        setHotel(data);
        setImages(data.images);
      })
      .catch(error => {
        setError('Failed to fetch hotel details');
      });
  }, [id]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setHotel(prevHotel => ({
      ...prevHotel,
      [name]: newValue,
    }));
  };

  const handleImageChange = e => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setImages(files);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('hotelName', hotel.hotelName);
    formData.append('popularAmenities', hotel.popularAmenities);
    formData.append('description', hotel.description);
    formData.append('refundable', hotel.refundable);
    formData.append('FeesAndPolicies', hotel.FeesAndPolicies);
    formData.append('roomAmenities', hotel.roomAmenities);
    formData.append('aboutThisProperty', hotel.aboutThisProperty);
    formData.append('address', hotel.address);
    formData.append('cheapestPrice', hotel.cheapestPrice);

    images.forEach((image, index) => {
      formData.append(`image${index}`, image);
    });

    axios
      .put(`http://localhost:5050/hotel/edit/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then(response => {
        console.log('Hotel updated successfully:', response.data);
        // Perform any additional actions after successful update
      })
      .catch(error => {
        console.log('Failed to update hotel:', error);
        // Handle the error
        alert(error);
      });
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Hotel Name:
          <input
            type="text"
            name="hotelName"
            value={hotel.hotelName}
            onChange={handleChange}
          />
        </label>

        <label>
          Popular Amenities:
          <input
            type="text"
            name="popularAmenities"
            value={hotel.popularAmenities}
            onChange={handleChange}
          />
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={hotel.description}
            onChange={handleChange}
          />
        </label>

        <label>
          Refundable:
          <input
            type="checkbox"
            name="refundable"
            checked={hotel.refundable}
            onChange={handleChange}
          />
        </label>

        <label>
          Fees and Policies:
          <textarea
            name="FeesAndPolicies"
            value={hotel.FeesAndPolicies}
            onChange={handleChange}
          />
        </label>

        <label>
          Room Amenities:
          <textarea
            name="roomAmenities"
            value={hotel.roomAmenities}
            onChange={handleChange}
          />
        </label>

        <label>
          About This Property:
          <textarea
            name="aboutThisProperty"
            value={hotel.aboutThisProperty}
            onChange={handleChange}
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            name="address"
            value={hotel.address}
            onChange={handleChange}
          />
        </label>

        <label>
          Cheapest Price:
          <input
            type="number"
            name="cheapestPrice"
            value={hotel.cheapestPrice}
            onChange={handleChange}
          />
        </label>

        <label>
          Images:
          <input type="file" multiple onChange={handleImageChange} />
        </label>

        <button type="submit">Update Hotel</button>
      </form>
    </div>
  );
};

export default UpdateHotelForm;
*/

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function UpdateHotelForm() { 
    const { id } = useParams();
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
    const [data, setData] = useState(null);

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
    console.log(data.hotelName)
  
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
  
      axios.put(`http://localhost:5050/hotel/edit/${id}`, formData, {
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

export default UpdateHotelForm;
*/


/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const UpdateHotelForm = () => {
  const { id } = useParams();
  const [hotelName, setHotelName] = useState('');
  const [popularAmenities, setPopularAmenities] = useState('');
  const [description, setDescription] = useState('');
  const [refundable, setRefundable] = useState(false);
  const [feesAndPolicies, setFeesAndPolicies] = useState('');
  const [roomAmenities, setRoomAmenities] = useState('');
  const [aboutThisProperty, setAboutThisProperty] = useState('');
  const [address, setAddress] = useState('');
  const [rooms, setRooms] = useState(0);
  const [cheapestPrice, setCheapestPrice] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const authToken = localStorage.getItem('hotelToken');


  useEffect(() => {
    // Fetch the initial hotel information
    const fetchHotel = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/hotel/profile/`, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        const initialHotel = response.data[0];
        console.log(initialHotel)
        // Update the state with the initial hotel information
        setHotelName(initialHotel.hotelName);
        setPopularAmenities(initialHotel.popularAmenities);
        setDescription(initialHotel.description);
        setRefundable(initialHotel.refundable);
        setFeesAndPolicies(initialHotel.feesAndPolicies);
        setRoomAmenities(initialHotel.roomAmenities);
        setAboutThisProperty(initialHotel.aboutThisProperty);
        setAddress(initialHotel.address);
        setRooms(initialHotel.rooms);
        setCheapestPrice(initialHotel.cheapestPrice);
      } catch (error) {
        console.error(error);
        setErrorMessage('An error occurred while fetching hotel information');
      }
    };

    fetchHotel();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      hotelName,
      popularAmenities,
      description,
      refundable,
      feesAndPolicies,
      roomAmenities,
      aboutThisProperty,
      address,
      rooms,
      cheapestPrice,
    };

    try {
      const authToken = localStorage.getItem('hotelToken');
      const response = await axios.put(`http://localhost:5050/hotel/edit/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${authToken}`
        }
      });
      const updatedHotel = response.data;
      setSuccessMessage('Hotel information updated successfully!');
      // Update the state with the updated hotel information
      setHotelName(updatedHotel.hotelName);
      setPopularAmenities(updatedHotel.popularAmenities);
      setDescription(updatedHotel.description);
      setRefundable(updatedHotel.refundable);
      setFeesAndPolicies(updatedHotel.feesAndPolicies);
      setRoomAmenities(updatedHotel.roomAmenities);
      setAboutThisProperty(updatedHotel.aboutThisProperty);
      setAddress(updatedHotel.address);
      setRooms(updatedHotel.rooms);
      setCheapestPrice(updatedHotel.cheapestPrice);
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while updating hotel information');
    }
  };

  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      {hotelName && (
        <form onSubmit={handleSubmit}>
          <label>
            Hotel Name:
            <input
              type="text"
              value={hotelName}
              onChange={(e) => setHotelName(e.target.value)}
            />
          </label>
          {/* Render form fields for other hotel information *//*}
          {/* ... *//*}
          <button type="submit">Update</button>
        </form>
      )}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default UpdateHotelForm;
*/

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import HearNav from './HearNav';



const UpdateHotelForm = () => {
  const { id } = useParams();
  const [hotelName, setHotelName] = useState('');
  const [popularAmenities, setPopularAmenities] = useState('');
  const [description, setDescription] = useState('');
  const [refundable, setRefundable] = useState(false);
  const [FeesAndPolicies, setFeesAndPolicies] = useState('');
  const [roomAmenities, setRoomAmenities] = useState('');
  const [aboutThisProperty, setAboutThisProperty] = useState('');
  const [address, setAddress] = useState('');
  const [rooms, setRooms] = useState(0);
  const [cheapestPrice, setCheapestPrice] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const authToken = localStorage.getItem('hotelToken');

  useEffect(() => {
    // Fetch the initial hotel information
    const fetchHotel = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/hotel/profile/`, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        const initialHotel = response.data[0];
        // Update the state with the initial hotel information
        setHotelName(initialHotel.hotelName);
        setPopularAmenities(initialHotel.popularAmenities);
        setDescription(initialHotel.description);
        setRefundable(initialHotel.refundable);
        setFeesAndPolicies(initialHotel.FeesAndPolicies);
        setRoomAmenities(initialHotel.roomAmenities);
        setAboutThisProperty(initialHotel.aboutThisProperty);
        setAddress(initialHotel.address);
        setRooms(initialHotel.rooms);
        setCheapestPrice(initialHotel.cheapestPrice);
      } catch (error) {
        console.error(error);
        setErrorMessage('An error occurred while fetching hotel information');
      }
    };

    fetchHotel();
  }, [id, authToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      hotelName,
      popularAmenities,
      description,
      refundable,
      FeesAndPolicies,
      roomAmenities,
      aboutThisProperty,
      address,
      cheapestPrice,
    };

    try {
      const response = await axios.put(`http://localhost:5050/hotel/edit/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      const updatedHotel = response.data;
      setSuccessMessage('Hotel information updated successfully!');
      // Update the state with the updated hotel information
      setHotelName(updatedHotel.hotelName);
      setPopularAmenities(updatedHotel.popularAmenities);
      setDescription(updatedHotel.description);
      setRefundable(updatedHotel.refundable);
      setFeesAndPolicies(updatedHotel.FeesAndPolicies);
      setRoomAmenities(updatedHotel.roomAmenities);
      setAboutThisProperty(updatedHotel.aboutThisProperty);
      setAddress(updatedHotel.address);
      setRooms(updatedHotel.rooms);
      setCheapestPrice(updatedHotel.cheapestPrice);
      navigate('/my/hotel');
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while updating hotel information');
    }
  };

  
  return (
    <div>
      <HearNav />
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Hotel Name:
          <input
            type="text"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
          />
        </label>
        <label>
          Popular Amenities:
          <input
            type="text"
            value={popularAmenities}
            onChange={(e) => setPopularAmenities(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <label>
          Refundable:
          <input
            type="checkbox"
            checked={refundable}
            onChange={(e) => setRefundable(e.target.checked)}
          />
        </label>
        <label>
          Fees and Policies:
          <textarea
            value={FeesAndPolicies}
            onChange={(e) => setFeesAndPolicies(e.target.value)}
          ></textarea>
        </label>
        <label>
          Room Amenities:
          <input
            type="text"
            value={roomAmenities}
            onChange={(e) => setRoomAmenities(e.target.value)}
          />
        </label>
        <label>
          About This Property:
          <textarea
            value={aboutThisProperty}
            onChange={(e) => setAboutThisProperty(e.target.value)}
          ></textarea>
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
          Cheapest Price:
          <input
            type="number"
            value={cheapestPrice}
            onChange={(e) => setCheapestPrice(parseInt(e.target.value))}
          />
        </label>
        {successMessage && <p>{successMessage}</p>}
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateHotelForm;
*/


// UpdateHotelForm.js

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import HearNav from './HearNav';

const UpdateHotelForm = () => {
  const { id } = useParams();
  const [hotelName, setHotelName] = useState('');
  const [popularAmenities, setPopularAmenities] = useState([]);
  const [description, setDescription] = useState('');
  const [refundable, setRefundable] = useState(false);
  const [FeesAndPolicies, setFeesAndPolicies] = useState('');
  const [roomAmenities, setRoomAmenities] = useState('');
  const [aboutThisProperty, setAboutThisProperty] = useState('');
  const [address, setAddress] = useState('');
  //const [rooms, setRooms] = useState(0);
  const [cheapestPrice, setCheapestPrice] = useState(0);
  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]); // New state to store existing images
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const authToken = localStorage.getItem('hotelToken');

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/hotel/profile/`, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        const initialHotel = response.data[0];

        setHotelName(initialHotel.hotelName);
        //setPopularAmenities(initialHotel.popularAmenities);
        setDescription(initialHotel.description);
        setRefundable(initialHotel.refundable);
        setFeesAndPolicies(initialHotel.FeesAndPolicies);
        setRoomAmenities(initialHotel.roomAmenities);
        setAboutThisProperty(initialHotel.aboutThisProperty);
        setAddress(initialHotel.address);
        //setRooms(initialHotel.rooms);
        setCheapestPrice(initialHotel.cheapestPrice);
        setImages(initialHotel.images);
        setExistingImages(initialHotel.images); // Set existing images state

      } catch (error) {
        console.error(error);
        setErrorMessage('An error occurred while fetching hotel information');
      }
    };

    fetchHotel();
  }, [id, authToken]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const uploadedImages = Array.from(files);
    setImages(uploadedImages);
  };

  const handleRemoveImage = async (index) => {
    // Create a copy of the existing images array
    const updatedExistingImages = [...existingImages];
  
    // Get the image to be removed
    const removedImage = updatedExistingImages[index];
  
    // Remove the image from the existing images array
    updatedExistingImages.splice(index, 1);
  
    // Update the state with the updated existing images array
    setExistingImages(updatedExistingImages);
  
    // Create a copy of the images array
    const updatedImages = [...images];
  
    // Remove the image from the images array
    updatedImages.splice(index, 1);
  
    // Update the state with the updated images array
    setImages(updatedImages);
  
    // Check if the removed image is an existing image (has a public_id)
    if (removedImage.public_id) {
      try {
        // Send a request to your backend server to delete the image
        await axios.delete(`http://localhost:5050/hotel/${id}/images/${removedImage.public_id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        console.log('Room updated on the backend.');
      } catch (error) {
        console.error('Error deleting image from server:', error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('hotelName', hotelName);
    //formData.append('popularAmenities', popularAmenities);
    formData.append('description', description);
    formData.append('refundable', refundable);
    formData.append('FeesAndPolicies', FeesAndPolicies);
    formData.append('roomAmenities', roomAmenities);
    formData.append('aboutThisProperty', aboutThisProperty);
    formData.append('address', address);
    //formData.append('rooms', rooms);
    formData.append('cheapestPrice', cheapestPrice);

    /* 
    images.forEach((image, index) => {
      formData.append(`images${index}`, image);
    });
    *//*

    images.forEach((image) => {
      if (!image.public_id) {
        formData.append('images', image);
      }
    });

    try {
      const response = await axios.put(`http://localhost:5050/hotel/edit/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      const updatedHotel = response.data;
      setSuccessMessage('Hotel information updated successfully!');

      setHotelName(updatedHotel.hotelName);
      //setPopularAmenities(updatedHotel.popularAmenities);
      setDescription(updatedHotel.description);
      setRefundable(updatedHotel.refundable);
      setFeesAndPolicies(updatedHotel.FeesAndPolicies);
      setRoomAmenities(updatedHotel.roomAmenities);
      setAboutThisProperty(updatedHotel.aboutThisProperty);
      setAddress(updatedHotel.address);
      //setRooms(updatedHotel.rooms);
      setCheapestPrice(updatedHotel.cheapestPrice);
      navigate('/my/hotel');
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while updating hotel information');
    }
  };

  return (
    <div>
      <HearNav />
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
      <div>
        <label>Existing Images:</label>
        {existingImages.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt="Existing Room" className='image-updating-room' />
            <button type="button" onClick={() => handleRemoveImage(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
        <label>
          Hotel Name:
          <input
            type="text"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
          />
        </label>
        
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Refundable:
          <input
            type="checkbox"
            checked={refundable}
            onChange={(e) => setRefundable(e.target.checked)}
          />
        </label>
        <label>
          Fees and Policies:
          <textarea
            value={FeesAndPolicies}
            onChange={(e) => setFeesAndPolicies(e.target.value)}
          />
        </label>
        <label>
          Room Amenities:
          <textarea
            value={roomAmenities}
            onChange={(e) => setRoomAmenities(e.target.value)}
          />
        </label>
        <label>
          About This Property:
          <textarea
            value={aboutThisProperty}
            onChange={(e) => setAboutThisProperty(e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        
        <label>
          Cheapest Price:
          <input
            type="number"
            value={cheapestPrice}
            onChange={(e) => setCheapestPrice(e.target.value)}
          />
        </label>
        <label>
          Images:
          <input type="file" multiple onChange={handleImageUpload} />
        </label>
        <button type="submit">Update</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default UpdateHotelForm;
*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import HearNav from './HearNav';
import { renderIcon } from './hotelpost';

const UpdateHotelForm = () => {
  const { id } = useParams();
  const [hotelName, setHotelName] = useState('');
  const [popularAmenities, setPopularAmenities] = useState([]);
  const [description, setDescription] = useState('');
  const [refundable, setRefundable] = useState(false);
  const [FeesAndPolicies, setFeesAndPolicies] = useState('');
  const [roomAmenities, setRoomAmenities] = useState('');
  const [aboutThisProperty, setAboutThisProperty] = useState('');
  const [address, setAddress] = useState('');
  //const [rooms, setRooms] = useState(0);
  const [checkInhour, setCheckInhour] = useState('');
  const [checkOuthour, setCheckOuthour] = useState('');
  const [cheapestPrice, setCheapestPrice] = useState(0);
  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]); // New state to store existing images
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const authToken = localStorage.getItem('hotelToken');

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/hotel/profile/`, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        const initialHotel = response.data[0];

        setHotelName(initialHotel.hotelName);
        setPopularAmenities(initialHotel.popularAmenities);
        setDescription(initialHotel.description);
        setRefundable(initialHotel.refundable);
        setFeesAndPolicies(initialHotel.FeesAndPolicies);
        setRoomAmenities(initialHotel.roomAmenities);
        setAboutThisProperty(initialHotel.aboutThisProperty);
        setAddress(initialHotel.address);
        //setRooms(initialHotel.rooms);
        setCheapestPrice(initialHotel.cheapestPrice);
        setCheckInhour(initialHotel.checkInhour);
        setCheckOuthour(initialHotel.checkOuthour);
        setImages(initialHotel.images);
        setExistingImages(initialHotel.images); // Set existing images state


      } catch (error) {
        console.error(error);
        setErrorMessage('An error occurred while fetching hotel information');
      }
    };

    fetchHotel();
  }, [id, authToken]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const uploadedImages = Array.from(files);
    setImages(uploadedImages);
  };

  const handleRemoveImage = async (index) => {
    // Create a copy of the existing images array
    const updatedExistingImages = [...existingImages];
  
    // Get the image to be removed
    const removedImage = updatedExistingImages[index];
  
    // Remove the image from the existing images array
    updatedExistingImages.splice(index, 1);
  
    // Update the state with the updated existing images array
    setExistingImages(updatedExistingImages);
  
    // Create a copy of the images array
    const updatedImages = [...images];
  
    // Remove the image from the images array
    updatedImages.splice(index, 1);
  
    // Update the state with the updated images array
    setImages(updatedImages);
  
    // Check if the removed image is an existing image (has a public_id)
    if (removedImage.public_id) {
      try {
        // Send a request to your backend server to delete the image
        await axios.delete(`http://localhost:5050/hotel/${id}/images/${removedImage.public_id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        console.log('Room updated on the backend.');
      } catch (error) {
        console.error('Error deleting image from server:', error);
      }
    }
  };

  const handlePopularAmenitiesChange = (index) => {
    const updatedPopularAmenities = [...popularAmenities];
    updatedPopularAmenities[index] = {
      ...updatedPopularAmenities[index],
      available: !updatedPopularAmenities[index].available
    };
    setPopularAmenities(updatedPopularAmenities);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('hotelName', hotelName);
    //formData.append('popularAmenities', popularAmenities);
    //formData.append('popularAmenities', JSON.stringify(popularAmenities));
    formData.append('description', description);
    formData.append('refundable', refundable);
    formData.append('FeesAndPolicies', FeesAndPolicies);
    formData.append('roomAmenities', roomAmenities);
    formData.append('aboutThisProperty', aboutThisProperty);
    formData.append('address', address);
    formData.append('checkInhour', checkInhour);
    formData.append('checkOuthour', checkOuthour);
    //formData.append('rooms', rooms);
    formData.append('cheapestPrice', cheapestPrice);

    /* 
    images.forEach((image, index) => {
      formData.append(`images${index}`, image);
    });
    */

    images.forEach((image) => {
      if (!image.public_id) {
        formData.append('images', image);
      }
    });

    try {
      const response = await axios.put(`http://localhost:5050/hotel/edit/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      const updatedHotel = response.data;
      setSuccessMessage('Hotel information updated successfully!');
      setHotelName(updatedHotel.hotelName);
      /////setPopularAmenities(updatedHotel.popularAmenities);
      setDescription(updatedHotel.description);
      setRefundable(updatedHotel.refundable);
      setFeesAndPolicies(updatedHotel.FeesAndPolicies);
      setRoomAmenities(updatedHotel.roomAmenities);
      setAboutThisProperty(updatedHotel.aboutThisProperty);
      setAddress(updatedHotel.address);
      setCheckInhour(updatedHotel.checkInhour);
      setCheckOuthour(updatedHotel.checkOuthour);
      //setRooms(updatedHotel.rooms);
      setCheapestPrice(updatedHotel.cheapestPrice);
      navigate('/my/hotel');
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while updating hotel information');
    }
  };

  return (
    <div>
      <HearNav />
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
      <div>
        <label>Existing Images:</label>
        {existingImages.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt="Existing Room" className='image-updating-room' />
            <button type="button" onClick={() => handleRemoveImage(index)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div>
      {/*popularAmenities.map((amenity, index) => (
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
      ))*/}
      </div>
      <div>
  {popularAmenities.map((amenity, index) => (
    <div key={index} className="PopularAmenities-post-con">
      <label>
        <input
          type="checkbox"
          checked={amenity.available}
          onChange={() => handlePopularAmenitiesChange(index)}
          className="PopularAmenities-post-input"
        />
        {renderIcon(amenity.icon)} {amenity.name}
      </label>
    </div>
  ))}
</div>
        <label>
          Hotel Name:
          <input
            type="text"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
          />
        </label>
        
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Refundable:
          <input
            type="checkbox"
            checked={refundable}
            onChange={(e) => setRefundable(e.target.checked)}
          />
        </label>
        <label>
          Fees and Policies:
          <textarea
            value={FeesAndPolicies}
            onChange={(e) => setFeesAndPolicies(e.target.value)}
          />
        </label>
        <label>
          Room Amenities:
          <textarea
            value={roomAmenities}
            onChange={(e) => setRoomAmenities(e.target.value)}
          />
        </label>
        <label>
          About This Property:
          <textarea
            value={aboutThisProperty}
            onChange={(e) => setAboutThisProperty(e.target.value)}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <label>
        Check In hour:
          <input
            type="text"
            value={checkInhour}
            onChange={(e) => setCheckInhour(e.target.value)}
          />
        </label>
        <label>
        Check Out hour:
          <input
            type="text"
            value={checkOuthour}
            onChange={(e) => setCheckOuthour(e.target.value)}
          />
        </label>
        <label>
          Cheapest Price:
          <input
            type="number"
            value={cheapestPrice}
            onChange={(e) => setCheapestPrice(e.target.value)}
          />
        </label>
        <label>
          Images:
          <input type="file" multiple onChange={handleImageUpload} />
        </label>
        <button type="submit">Update</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default UpdateHotelForm;