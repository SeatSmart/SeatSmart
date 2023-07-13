import React from 'react';
import "./ex1.css"
const Examcell1 = () => {
    return(
        <div className="ex1">
            <h1>Exam Cell</h1>
            
            <div className="extype">
                <h2>Exam Type</h2>
                <br>
                </br>
                <button className="typbtn" onClick={""}>Internal</button>
                <button className="typbtn" onClick={""}>External</button>
            </div>
            <img id='excelg' src="src/Assets/Logo.png" alt="Logo" />
        </div>
    );
}
export default Examcell1;