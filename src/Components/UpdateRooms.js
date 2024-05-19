/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';



function UpdateRoom() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [bathRoom, setBathRoom] = useState('');
  const [description, setDescription] = useState('');
  const [roomSize, setRoomSize] = useState('');
  const [bedType, setBedType] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [numberOfRooms, setNumberOfRooms] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const [price, setPrice] = useState('');
  const [airConditioning, setAirConditioning] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [smoking, setSmoking] = useState(false);
  const authToken = localStorage.getItem('hotelToken');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/room/get/${id}`);
        const roomData = response.data;

        setTitle(roomData.title);
        setBathRoom(roomData.bathRoom);
        setDescription(roomData.description);
        setRoomSize(roomData.roomSize);
        setBedType(roomData.bedType);
        setAdults(roomData.adults);
        setChildren(roomData.children);
        setNumberOfRooms(roomData.numberOfRooms);
        setIsAvailable(roomData.isAvailable);
        setPrice(roomData.price);
        setAirConditioning(roomData.airConditioning);
        setWifi(roomData.wifi);
        setSmoking(roomData.smoking);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoomData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`http://localhost:5050/room/edit/${id}`, {
        title,
        bathRoom,
        description,
        roomSize,
        bedType,
        adults,
        children,
        numberOfRooms,
        isAvailable,
        price,
        airConditioning,
        wifi,
        smoking
      }, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      navigate('/my/hotel');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Update Room</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Bathroom:</label>
          <input type="text" value={bathRoom} onChange={(e) => setBathRoom(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Room Size:</label>
          <input type="number" value={roomSize} onChange={(e) => setRoomSize(e.target.value)} />
        </div>
        <div>
          <label>Bed Type:</label>
          <input type="text" value={bedType} onChange={(e) => setBedType(e.target.value)} />
        </div>
        <div>
          <label>Adults:</label>
          <input type="number" value={adults} onChange={(e) => setAdults(e.target.value)} />
        </div>
        <div>
          <label>Children:</label>
          <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} />
        </div>
        <div>
          <label>Number of Rooms:</label>
          <input type="number" value={numberOfRooms} onChange={(e) => setNumberOfRooms(e.target.value)} />
        </div>
        <div>
          <label>Is Available:</label>
          <input type="checkbox" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label>Air Conditioning:</label>
          <input type="checkbox" checked={airConditioning} onChange={(e) => setAirConditioning(e.target.checked)} />
        </div>
        <div>
          <label>Wifi:</label>
          <input type="checkbox" checked={wifi} onChange={(e) =>setWifi(e.target.checked)} />
        </div>
        <div>
          <label>Smoking:</label>
          <input type="checkbox" checked={smoking} onChange={(e) => setSmoking(e.target.checked)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateRoom;
*/

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateRoom() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [bathRoom, setBathRoom] = useState('');
  const [description, setDescription] = useState('');
  const [roomSize, setRoomSize] = useState('');
  const [bedType, setBedType] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [numberOfRooms, setNumberOfRooms] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const [price, setPrice] = useState('');
  const [airConditioning, setAirConditioning] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [smoking, setSmoking] = useState(false);
  const [images, setImages] = useState([]);
  const authToken = localStorage.getItem('hotelToken');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/room/get/${id}`);
        const roomData = response.data;

        setTitle(roomData.title);
        setBathRoom(roomData.bathRoom);
        setDescription(roomData.description);
        setRoomSize(roomData.roomSize);
        setBedType(roomData.bedType);
        setAdults(roomData.adults);
        setChildren(roomData.children);
        setNumberOfRooms(roomData.numberOfRooms);
        setIsAvailable(roomData.isAvailable);
        setPrice(roomData.price);
        setAirConditioning(roomData.airConditioning);
        setWifi(roomData.wifi);
        setSmoking(roomData.smoking);
        setImages(roomData.images);
        console.log(roomData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoomData();
  }, [id]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const uploadedImages = Array.from(files);
    setImages(uploadedImages);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('bathRoom', bathRoom);
      formData.append('description', description);
      formData.append('roomSize', roomSize);
      formData.append('bedType', bedType);
      formData.append('adults', adults);
      formData.append('children', children);
      formData.append('numberOfRooms', numberOfRooms);
      formData.append('isAvailable', isAvailable);
      formData.append('price', price);
      formData.append('airConditioning', airConditioning);
      formData.append('wifi', wifi);
      formData.append('smoking', smoking);

      images.forEach((image) => {
        formData.append('images', image);
      });

      const response = await axios.put(`http://localhost:5050/room/edit/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${authToken}`
        }
      });

      navigate('/my/hotel');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Update Room</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Bathroom:</label>
          <input type="text" value={bathRoom} onChange={(e) => setBathRoom(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Room Size:</label>
          <input type="number" value={roomSize} onChange={(e) => setRoomSize(e.target.value)} />
        </div>
        <div>
          <label>Bed Type:</label>
          <input type="text" value={bedType} onChange={(e) => setBedType(e.target.value)} />
        </div>
        <div>
          <label>Adults:</label>
          <input type="number" value={adults} onChange={(e) => setAdults(e.target.value)} />
        </div>
        <div>
          <label>Children:</label>
          <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} />
        </div>
        <div>
          <label>Number of Rooms:</label>
          <input type="number" value={numberOfRooms} onChange={(e) => setNumberOfRooms(e.target.value)} />
        </div>
        <div>
          <label>Is Available:</label>
          <input type="checkbox" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label>Air Conditioning:</label>
          <input type="checkbox" checked={airConditioning} onChange={(e) => setAirConditioning(e.target.checked)} />
        </div>
        <div>
          <label>Wifi:</label>
          <input type="checkbox" checked={wifi} onChange={(e) => setWifi(e.target.checked)} />
        </div>
        <div>
          <label>Smoking:</label>
          <input type="checkbox" checked={smoking} onChange={(e) => setSmoking(e.target.checked)} />
        </div>
        <div>
          <label>Images:</label>
          <input type="file" multiple onChange={handleImageUpload} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateRoom;
*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateRoom() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [bathRoom, setBathRoom] = useState('');
  const [description, setDescription] = useState('');
  const [roomSize, setRoomSize] = useState('');
  const [bedType, setBedType] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [numberOfRooms, setNumberOfRooms] = useState('');
  const [isAvailable, setIsAvailable] = useState(false);
  const [price, setPrice] = useState('');
  const [airConditioning, setAirConditioning] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [smoking, setSmoking] = useState(false);
  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const authToken = localStorage.getItem('hotelToken');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/room/get/${id}`);
        const roomData = response.data;

        setTitle(roomData.title);
        setBathRoom(roomData.bathRoom);
        setDescription(roomData.description);
        setRoomSize(roomData.roomSize);
        setBedType(roomData.bedType);
        setAdults(roomData.adults);
        setChildren(roomData.children);
        setNumberOfRooms(roomData.numberOfRooms);
        setIsAvailable(roomData.isAvailable);
        setPrice(roomData.price);
        setAirConditioning(roomData.airConditioning);
        setWifi(roomData.wifi);
        setSmoking(roomData.smoking);
        setExistingImages(roomData.images); // Set existing images state
        setImages(roomData.images);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRoomData();
  }, [id]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const uploadedImages = Array.from(files);
    setImages(uploadedImages);
  };

  /*
  const handleRemoveImage = (index) => {
    // Create a copy of the existing images array
    const updatedExistingImages = [...existingImages];
  
    // Get the image to be removed
    const removedImage = updatedExistingImages[index];
  
    // Remove the image from the existing images array
    updatedExistingImages.splice(index, 1);
  
    // Create a copy of the images array
    const updatedImages = [...images];
  
    // Check if the removed image is a newly uploaded image
    if (!removedImage.public_id) {
      // If it is, remove the image from the images array
      updatedImages.splice(index, 1);
    }
  
    // Update the state with the updated arrays
    setExistingImages(updatedExistingImages);
    setImages(updatedImages);
  };
  */

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
        await axios.delete(`http://localhost:5050/room/${id}/images/${removedImage.public_id}`, {
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
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('bathRoom', bathRoom);
      formData.append('description', description);
      formData.append('roomSize', roomSize);
      formData.append('bedType', bedType);
      formData.append('adults', adults);
      formData.append('children', children);
      formData.append('numberOfRooms', numberOfRooms);
      formData.append('isAvailable', isAvailable);
      formData.append('price', price);
      formData.append('airConditioning', airConditioning);
      formData.append('wifi', wifi);
      formData.append('smoking', smoking);

      images.forEach((image) => {
        if (!image.public_id) {
          formData.append('images', image);
        }
      });

      const response = await axios.put(`http://localhost:5050/room/edit/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${authToken}`
        }
      });

      navigate('/my/hotel');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Update Room</h2>
      <form onSubmit={handleSubmit}>
        {/* Existing Images */}
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
        {/* New Images */}
        <div>
          <label>New Images:</label>
          <input type="file" multiple onChange={handleImageUpload} />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Bathroom:</label>
          <input type="text" value={bathRoom} onChange={(e) => setBathRoom(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Room Size:</label>
          <input type="number" value={roomSize} onChange={(e) => setRoomSize(e.target.value)} />
        </div>
        <div>
          <label>Bed Type:</label>
          <input type="text" value={bedType} onChange={(e) => setBedType(e.target.value)} />
        </div>
        <div>
          <label>Adults:</label>
          <input type="number" value={adults} onChange={(e) => setAdults(e.target.value)} />
        </div>
        <div>
          <label>Children:</label>
          <input type="number" value={children} onChange={(e) => setChildren(e.target.value)} />
        </div>
        <div>
          <label>Number of Rooms:</label>
          <input type="number" value={numberOfRooms} onChange={(e) => setNumberOfRooms(e.target.value)} />
        </div>
        <div>
          <label>Is Available:</label>
          <input type="checkbox" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <label>Air Conditioning:</label>
          <input type="checkbox" checked={airConditioning} onChange={(e) => setAirConditioning(e.target.checked)} />
        </div>
        <div>
          <label>Wifi:</label>
          <input type="checkbox" checked={wifi} onChange={(e) => setWifi(e.target.checked)} />
        </div>
        <div>
          <label>Smoking:</label>
          <input type="checkbox" checked={smoking} onChange={(e) => setSmoking(e.target.checked)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateRoom;


/*
const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  
    const updatedExistingImages = [...existingImages];
    updatedExistingImages.splice(index, 1);
    setExistingImages(updatedExistingImages);
    */