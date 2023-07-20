import React, { useEffect } from 'react';
import './ex4.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Examcell4 = () => {
    const [rooms, setRooms] = useState([]);
    const [halls, setHalls] = useState([]);

    const fetchHallData = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/halls'); 
          if (response.ok) {
            const hallData = await response.json();
            setHalls(hallData);
          } else {
            console.error('Failed to fetch room data from the server.');
          }
        } catch (error) {
          console.error('Error occurred while fetching room data:', error);
        }
    };

    const fetchRoomData = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/rooms'); 
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
        fetchHallData();
    }, []);

    const handleButtonClickRoom = async (id) => {
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
    
    const handleButtonClickHall = async (id) => {
        const updatedHalls = halls.map((hall) => {
          if (hall.id === id) {
            return { ...hall, selected: !hall.selected };
          }
          return hall;
        });
        try {
            const response = await fetch('http://localhost:3001/api/halls', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedHalls),
            });
    
            if (response.ok) {
            setHalls(updatedHalls);
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
                <h2>Available Rooms</h2>
                {rooms.map((item) => (
                <button
                    key={item.id}
                    className={`room-button ${item.selected ? 'selected' : ''}`}
                    onClick={() => handleButtonClickRoom(item.id)}
                >
                    {item.name}
                </button>
                ))}
                <h2>Available Halls</h2>
                {halls.map((item1) => (
                <button
                    key={item1.id}
                    className={`room-button ${item1.selected ? 'selected' : ''}`}
                    onClick={() => handleButtonClickHall(item1.id)}
                >
                    {item1.name}
                </button>
                ))}
            </div>
            <div className="continue">
              <Link to='/examcell5'> 
                <button className="continue-button">Continue</button>
              </Link>
            </div>
        </div>
     );
}

export default Examcell4;