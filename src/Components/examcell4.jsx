import React from 'react';
import './ex4.css';
import { useState } from 'react';
import { RoomData } from '../Data/Rooms';
const Examcell4 = () => {
    const [rooms, setRooms] = useState(RoomData);

    const handleButtonClick = (id) => {
      setRooms((prevRooms) =>
        prevRooms.map((room) => {
          if (room.id === id) {
            return { ...room, selected: !room.selected };
          }
          return room;
        })
      );
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