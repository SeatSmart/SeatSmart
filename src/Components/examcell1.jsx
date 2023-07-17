import React from 'react';
import { Link } from 'react-router-dom';
import "./ex1.css"
const Examcell1 = () => {
    return(
        <div className="ex1">
            <h1>Exam Cell</h1>
            
            <div className="extype">
                <h2>Exam Type</h2>
                <br>
                </br>
                <Link to="/examcell2">
                    <button className="typbtn">Internal</button>
                </Link>
                <Link to="/examcell2">
                    <button className="typbtn">External</button>
                </Link>
            </div>
            <img id='excelg' src="src/Assets/Logo.png" alt="Logo" />
        </div>
    );
}
export default Examcell1;