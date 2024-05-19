/*import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';





function RoomPost() {
  const { id } = useParams();

  const authToken = localStorage.getItem('hotelToken');

    axios
      .post(`http://localhost:5050/room/post/${id}`, {
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
  return (
    <div>

    </div>
  );
}

export default RoomPost;*/

/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './hotelpost.css'



function AddRoomForm() {
  const { id } = useParams();
  const authToken = localStorage.getItem('hotelToken');
  const [room, setRoom] = useState(false);

  const [roomData, setRoomData] = useState({
    title: '',
    bathRoom: '',
    description: '',
    roomSize: 0,
    bedType: '',
    adults: 1,
    childern: 0,
    numberOfRooms: 0,
    price: 0,
    isAvailable: true,
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setRoomData((prevData) => ({
      ...prevData,
      images: files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    roomData.images.forEach((image) => {
      formData.append('images', image);
    });
    formData.append('title', roomData.title);
    formData.append('bathRoom', roomData.bathRoom);
    formData.append('description', roomData.description);
    formData.append('roomSize', roomData.roomSize);
    formData.append('bedType', roomData.bedType);
    formData.append('adults', roomData.adults);
    formData.append('childern', roomData.childern);
    formData.append('numberOfRooms', roomData.numberOfRooms);
    formData.append('price', roomData.price);
    formData.append('isAvailable', roomData.isAvailable);


      await axios.post(`http://localhost:5050/room/post/${id}`, formData, {
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
  
    }

    function roomcontainer() {
      setRoom(true);
    }

    useEffect(() => {
      const textarea = document.querySelector('.room-description');
      textarea.style.height = 'auto';
      textarea.style.width = '100%';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }, [roomData.description]);

  return (
    <div onClick={roomcontainer} className='con-room'>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={roomData.title}
            onChange={handleInputChange}
            className='room-title'
          />
        </label>
        <label>
          Small-description-about-the-room:
          <textarea
            name="description"
            value={roomData.description}
            onChange={handleInputChange}
            className='room-description'
          />
        </label>
        <br />
        <label>
          Bathroom:
          <input
            type="text"
            name="bathRoom"
            value={roomData.bathRoom}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Room Size:
          <input
            type="number"
            name="roomSize"
            value={roomData.roomSize}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Bed Type:
          <input
            type="text"
            name="bedType"
            value={roomData.bedType}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Adults:
          <input
            type="number"
            name="adults"
            value={roomData.adults}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Children:
          <input
            type="number"
            name="childern"
            value={roomData.childern}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of Rooms:
          <input
            type="number"
            name="numberOfRooms"
            value={roomData.numberOfRooms}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={roomData.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Is Available:
          <input
            type="checkbox"
            name="isAvailable"
            checked={roomData.isAvailable}
            onChange={(e) =>
              setRoomData((prevData) => ({
                ...prevData,
                isAvailable: e.target.checked,
              }))
            }
          />
        </label>
        <br />
        <label>
          Images:
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
        <br />
        <button type="submit">Add Room</button>
      </form>
    </div>
  );
}

export default AddRoomForm;
*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './roomPost.css';


function AddRoomForm() {
  const { id } = useParams();
  const authToken = localStorage.getItem('hotelToken');
  const [room, setRoom] = useState(false);

  const [roomData, setRoomData] = useState({
    title: '',
    bathRoom: '',
    description: '',
    roomSize: 0,
    bedType: '',
    adults: 1,
    childern: 0,
    numberOfRooms: 0,
    price: 0,
    isAvailable: true,
    airConditioning: false,
    wifi: false,
    smoking: false,
    images: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setRoomData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...files],
    }));
  };

  const removeImage = (index) => {
    setRoomData((prevData) => {
      const updatedImages = [...prevData.images];
      updatedImages.splice(index, 1);
      return {
        ...prevData,
        images: updatedImages,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    roomData.images.forEach((image) => {
      formData.append('images', image);
    });
    formData.append('title', roomData.title);
    formData.append('bathRoom', roomData.bathRoom);
    formData.append('description', roomData.description);
    formData.append('roomSize', roomData.roomSize);
    formData.append('bedType', roomData.bedType);
    formData.append('adults', roomData.adults);
    formData.append('childern', roomData.childern);
    formData.append('numberOfRooms', roomData.numberOfRooms);
    formData.append('price', roomData.price);
    formData.append('airConditioning', roomData.airConditioning);
    formData.append('wifi', roomData.wifi);
    formData.append('smoking', roomData.smoking);
    formData.append('isAvailable', roomData.isAvailable);

    await axios
      .post(`http://localhost:5050/room/post/${id}`, formData, {
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

  function roomcontainer() {
    setRoom(true);
  }

  useEffect(() => {
    const textarea = document.querySelector('.room-description');
    textarea.style.height = 'auto';
    textarea.style.width = '100%';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [roomData.description]);

  return (
    <div onClick={roomcontainer} className="con-room">
      <form onSubmit={handleSubmit}>
      <label>
          room type:
          <input
            type="text"
            name="title"
            value={roomData.title}
            onChange={handleInputChange}
            className="room-title"
          />
        </label>
      <label>
          Images:
          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
        <div>
          <h3>Selected Images:</h3>
          {roomData.images.map((image, index) => (
            <div key={index}>
              <img
                src={URL.createObjectURL(image)}
                alt={`Image ${index}`}
                style={{ width: '200px' }}
              />
              <button onClick={() => removeImage(index)}>Remove</button>
            </div>
          ))}
        </div>
        <br />
        <label>
          Small-description-about-the-room:
          <textarea
            name="description"
            value={roomData.description}
            onChange={handleInputChange}
            className="room-description"
          />
        </label>
        <br />
        <label>
          Bathroom:
          <input
            type="text"
            name="bathRoom"
            value={roomData.bathRoom}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Bed type:
          <input
            type="text"
            name="bedType"
            value={roomData.bedType}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Room Size:
          <input
            type="number"
            name="roomSize"
            value={roomData.roomSize}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Adults:
          <input
            type="number"
            name="adults"
            value={roomData.adults}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Children:
          <input
            type="number"
            name="childern"
            value={roomData.childern}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
Number of Rooms:
          <input
            type="number"
            name="numberOfRooms"
            value={roomData.numberOfRooms}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={roomData.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Air conditioning:
          <input
            type="checkbox"
            name="airConditioning"
            checked={roomData.airConditioning}
            onChange={(e) =>
              setRoomData((prevData) => ({
                ...prevData,
                airConditioning: e.target.checked,
              }))
            }
          />
        </label>
        <br />
        <label>
          free wi-fi:
          <input
            type="checkbox"
            name="wifi"
            checked={roomData.wifi}
            onChange={(e) =>
              setRoomData((prevData) => ({
                ...prevData,
                wifi: e.target.checked,
              }))
            }
          />
        </label>
        <br />
        <label>
          non-smoking room:
          <input
            type="checkbox"
            name="smoking"
            checked={roomData.smoking}
            onChange={(e) =>
              setRoomData((prevData) => ({
                ...prevData,
                smoking: e.target.checked,
              }))
            }
          />
        </label>
        <br />
        <label>
          this room is available to reservations right now:
          <input
            type="checkbox"
            name="isAvailable"
            checked={roomData.isAvailable}
            onChange={(e) =>
              setRoomData((prevData) => ({
                ...prevData,
                isAvailable: e.target.checked,
              }))
            }
          />
        </label>
        <br />
        <button type="submit">Add Room</button>
      </form>
    </div>
  );
}

export default AddRoomForm;
