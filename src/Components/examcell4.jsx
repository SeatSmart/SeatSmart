import React from 'react';
import './ex4.css';
import { useState } from 'react';

const Examcell4 = () => {
    const [rooms, setRooms] = useState([]);

    const fetchRoomData = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/rooms'); // Assumes your backend server is running on the same host as the React app
          if (response.ok) {
            const roomData = await response.json();
            setRooms(roomData);
          } else {
            console.error('Failed to fetch room data from the server.');
          }
        } catch (error) {
          console.error('Error occurred while fetching room data:', error);
        }
    };
    useEffect(() => {
        fetchRoomData();
    }, []);

    const handleButtonClick = async (id) => {
        const updatedRooms = rooms.map((room) => {
          if (room.id === id) {
            return { ...room, selected: !room.selected };
          }
          return room;
    });

    try {
        const response = await fetch('http://localhost:3001/api/rooms', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedRooms),
        });
  
        if (response.ok) {
          setRooms(updatedRooms);
        } else {
          console.error('Failed to update data on the server.');
        }
      } catch (error) {
        console.error('Error occurred while updating data:', error);
      }
    };
    

    return ( 
        <div className='ex4'>
            <h1>EXAM CELL</h1>
            <div className="available">
            {rooms.map((item) => (
            <button
                key={item.id}
                className={`room-button ${item.selected ? 'selected' : ''}`}
                onClick={() => handleButtonClick(item.id)}
            >
                {item.name}
            </button>
            ))}
            </div>
        </div>
     );
}

export default Examcell4;