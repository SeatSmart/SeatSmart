import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css"
const Home = () =>{
    return (
        <div className="home">
            <div className="Logo">
                 <div className="logo-container">
                     <img src="src/Assets/Logo.png" alt="Logo" />
                    </div>
                <div className="button-container">
                    <Link to="/examcell1">
                        <button className='button' id="examcell">Exam Cell</button>
                    </Link>
                    <button className='button' id="invigilator">Invigilator</button>
                </div>
            </div>
              
        </div>
        
    );
}
export default Home