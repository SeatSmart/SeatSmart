import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css"
const Home = () =>{
    return (
        <div className="home">
            <div className="Logo">
                <Link to="/examcell1">
                    <button id="examcell">Exam Cell</button>

                </Link>
                <img src="src/Assets/Logo.png" alt="Logo" />
                <a href="" id="invigilator"> Invigilator</a>  
            </div>
              
        </div>
        
    );
}
export default Home