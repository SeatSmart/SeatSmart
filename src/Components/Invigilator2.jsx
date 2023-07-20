import './inv2.css'
import { AllotedData } from '../Data/allotedroom';
import { useState,useEffect,Link } from 'react';
const Invigilator2 = () =>{
    const [clicked, setClicked] = useState(null);
    const roomData = AllotedData[0];
    const [selectedRolls, setSelectedRolls] = useState([]);

    const handleButtonClick = (roll) => {   
        setClicked((prevClicked) => (prevClicked === roll ? null : roll));
        if (selectedRolls.includes(roll)) {
            
            setSelectedRolls((prevSelectedRolls) =>
              prevSelectedRolls.filter((selectedRoll) => selectedRoll !== roll)
            );
          } else {
            
            setSelectedRolls((prevSelectedRolls) => [...prevSelectedRolls, roll]);
          }
      };
      useEffect(() => {
        setSelectedRolls(roomData.cs1);
      }, [roomData.cs1]);

    return(
        <div className="inv2">
            <h1 className='heading'>Invigilator</h1>
            <h2 className='roomno'>Room No: A301</h2>
            {roomData.cs1.map((roll, index) => {
        return (
          <button
            className={`roll-btn ${selectedRolls.includes(roll) ? "checked" : ""}`}
            key={index}
            onClick={() => handleButtonClick(roll)}
          >
            {roll}
          </button>
          
        );
      })}
      <button className='continue-button'>Submit</button>
        </div>
    )
}
export default Invigilator2;