import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./ex3.css"
const Excell3 = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);
    const [isSubmitPressed, setIsSubmitPressed] = useState(false);
  const fetchSelectedClasses = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/classes');
      const classesWithSelected = response.data.filter((item) => item.selected);
      setSelectedClasses(classesWithSelected);
    } catch (error) {
      console.error('Error fetching selected class data:', error);
    }
  };

  const getVacantString = (vacant) => {
    return Array.isArray(vacant) ? vacant.join(', ') : vacant;
  };

  const handleInputChange = (id, property, value) => {
    const updatedClasses = selectedClasses.map((classItem) => {
      if (classItem.id === id) {
        return {
          ...classItem,
          [property]: value,
        };
      }
      return classItem;
    });

    setSelectedClasses(updatedClasses);
  };

  const handleSubmit = async () => {
    if(!isSubmitPressed){
        setIsSubmitPressed(true);
        // Calculate the new capacity and update the selected classes
        const updatedClasses = selectedClasses.map((classItem) => {
         let vacantArray;
        if (typeof classItem.vacant === 'string') {
            vacantArray = classItem.vacant.split(',').map((slot) => slot.trim());
         } else if (Array.isArray(classItem.vacant)) {
            vacantArray = classItem.vacant.map((slot) => slot.trim());
         } else {
            vacantArray = [];
        }
        const capacity = parseInt(classItem.capacity, 10);
        const newCapacity = capacity - vacantArray.length;
        return {
        ...classItem,
        vacant: vacantArray,
        capacity: newCapacity,
        };
        });
    
        setSelectedClasses(updatedClasses);
    
        try {
        await axios.put('http://localhost:3001/api/classes', updatedClasses);
        } catch (error) {
        console.error('Error updating class data:', error);
        }
    }
  };

  useEffect(() => {
    fetchSelectedClasses();
  }, []);

  return (
    <div className="ex2">
      <h1>Selected Classes</h1>
      <div className="classes">
        <h2>Selected Classes</h2>
        {selectedClasses.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            Capacity:
            <input className='input'
              type="text"
              value={item.capacity}
              onChange={(e) => handleInputChange(item.id, 'capacity', e.target.value)}
            />
            Vacant:
            <input className='input'
              type="text"
              value={getVacantString(item.vacant)}
              onChange={(e) => handleInputChange(item.id, 'vacant', e.target.value)}
            />
          </div>
        ))}

        <div className="button-wrapper">
            <button className={`subbutton ${isSubmitPressed ? 'selected' : ''}`}
            onClick={handleSubmit}>Submit</button>
            <Link to='/examcell4'>
                <button type='submit' className='continueb-button'>Continue</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Excell3;