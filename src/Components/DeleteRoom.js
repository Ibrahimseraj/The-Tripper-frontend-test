import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



function DeleteRoom() {
  const { id, hotelId } = useParams();
  const authToken = localStorage.getItem('hotelToken');

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5050/room/delete/${id}/${hotelId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      console.log('Room deleted successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};


export default DeleteRoom;
