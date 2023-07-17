import React from 'react';
import './ex4.css';
import { useState } from 'react';
import { RoomData } from '../Data/Rooms';
const Examcell4 = () => {
    return ( 
        <div className='ex4'>
            <h1>EXAM CELL</h1>
            <div className="available">
            {RoomData.map((item) => {
                <button className="room-button" >
                    {item.name}
                </button>
            })}
            </div>
        </div>
     );
}

export default Examcell4;