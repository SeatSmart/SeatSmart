import { Link } from "react-router-dom";
import "./ex2.css"
import React, { useState } from 'react';
const Examcell2 = () => {
    const [selectedValue_cs, setSelectedValue_cs] = useState('');
    const handleSelectChange_cs = (event) => {
        setSelectedValue_cs(event.target.value);
      };
    const [selectedValue_ee, setSelectedValue_ee] = useState('');
    const handleSelectChange_ee = (event) => {
        setSelectedValue_ee(event.target.value);
      };
    const [selectedValue_ec, setSelectedValue_ec] = useState('');
    const handleSelectChange_ec = (event) => {
        setSelectedValue_ec(event.target.value);
      };
    const [selectedValue_ce, setSelectedValue_ce] = useState('');
    const handleSelectChange_ce = (event) => {
        setSelectedValue_ce(event.target.value);
      };
    const [selectedValue_me, setSelectedValue_me] = useState('');
    const handleSelectChange_me = (event) => {
        setSelectedValue_me(event.target.value);
      };
    return (
        <div className="ex2">
            <h1>EXAM CELL</h1>
            <div className="branch">
                <h2>Branch</h2>
                <button className="btn" onClick={""}>CSE</button>
                <button className="btn" onClick={""}>EEE</button>
                <button className="btn" onClick={""}>ECE</button>
                <button className="btn" onClick={""}>CE</button>
                <button className="btn" onClick={""}>ME</button>
            </div>
            <img id='excelg' src="src/Assets/Logo.png" alt="Logo" />
            <div className="clscount">
                <h2>Class Count</h2>
                <div className="countbutton">
                    <button className="btn" onClick={""}>CSE</button>
                    <select value={selectedValue_cs} onChange={handleSelectChange_cs}>
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <button className="btn" onClick={""}>EEE</button>
                    <select value={selectedValue_ee} onChange={handleSelectChange_ee}>
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <button className="btn" onClick={""}>ECE</button>
                    <select value={selectedValue_ec} onChange={handleSelectChange_ec}>
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <button className="btn" onClick={""}>CE</button>
                    <select value={selectedValue_ce} onChange={handleSelectChange_ce}>
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <button className="btn" onClick={""}>ME</button>
                    <select value={selectedValue_me} onChange={handleSelectChange_me}>
                        <option value=""></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
            </div>
            <Link to="/examcell3">
                <button className="btn" id="continue">CONTINUE</button>
            </Link>
           
        </div>
    );
}

export default Examcell2;