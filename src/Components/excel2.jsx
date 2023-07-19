import "./ex2.css"
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Excell2 = () =>{
    const [classes, setClasses] = useState([]);

    const fetchClassData = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/classes'); 
          if (response.ok) {
            const classData = await response.json();
            setClasses(classData);
          } else {
            console.error('Failed to fetch room data from the server.');
          }
        } catch (error) {
          console.error('Error occurred while fetching room data:', error);
        }
    };

    const  handleButtonClickClass = async (id) => {
        const updatedClasses = classes.map((Class) => {
          if (Class.id === id) {
            return { ...Class, selected: !Class.selected };
          }
          return Class;
    });
    try {
        const response = await fetch('http://localhost:3001/api/classes', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedClasses),
        });
  
        if (response.ok) {
          setClasses(updatedClasses);
        } else {
          console.error('Failed to update data on the server.');
        }
      } catch (error) {
        console.error('Error occurred while updating data:', error);
      }
    };

    useEffect(() => {
        fetchClassData();
    },[]);

    return(
        <div className="ex2">
            <h1>Classes</h1>
            <div className="classes">
                <h2>Choose Classes</h2>
                {classes.map((item1) => (
                <button
                    key={item1.id}
                    className={`room-button ${item1.selected ? 'selected' : ''}`}
                    onClick={() => handleButtonClickClass(item1.id)}
                >
                    {item1.name}
                </button>
                ))}
            
            </div>
            <div className="continue">
            <Link to="/examcell3">
                <button className="btn" id="continue">CONTINUE</button>
            </Link>
            </div>
            
        </div>
    )
}
export default Excell2;