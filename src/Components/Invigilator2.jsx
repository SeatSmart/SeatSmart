import './inv2.css'
import { AllotedData } from '../Data/allotedroom';
import { useState,useEffect,Link } from 'react';
const Invigilator2 = () =>{
    const [clicked, setClicked] = useState(null);
    const roomData = AllotedData[0];
    // const roomData2 = AllotedData[1];
    const [selectedRolls, setSelectedRolls] = useState([]);
    // const [selectedRolls2, setSelectedRolls2] = useState([]);

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
      // const handleButtonClick1 = (roll) => {   
      //   setClicked1((prevClicked1) => (prevClicked1 === roll ? null : roll));
      //   if (selectedRolls.includes(roll)) {
            
      //       setSelectedRolls2((prevSelectedRolls2) =>
      //         prevSelectedRolls2.filter((selectedRoll1) => selectedRoll1 !== roll)
      //       );
      //     } else {
            
      //       setSelectedRolls2((prevSelectedRolls2) => [...prevSelectedRolls2, roll]);
      //     }
      // };
      useEffect(() => {
        setSelectedRolls(roomData.cs1);
        // setSelectedRolls2(roomData2.cs1);
      }, [roomData.cs1]);

    return(
        <div className="inv2">
            <h1 className='heading'>Invigilator</h1>
            <h2 className='cs1'>Room No: A301</h2>
            <h3 className='cs1'> CSE1</h3>
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

{/* <h3 className='cs1'> ME1</h3>
            {roomData.cs1.map((roll, index) => {
        return (
          <button
            className={`roll-btn ${selectedRolls2.includes(roll) ? "checked" : ""}`}
            key={index}
            onClick={() => handleButtonClick1(roll)}
          >
            {roll}
          </button>
          
        );
      })} */}
      
        <button className='continue1-button'>Submit</button>
        

      </div>
    )
}
export default Invigilator2;