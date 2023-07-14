import "./ex2.css"
import React, { useState } from 'react';
const Examcell2 = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
      };
    return (
        <div className="ex2">
            <h1>Examcell2</h1>
            <div className="branch">
                <h2>Branch</h2>
                <button className="btn" onClick={""}>CSE</button>
                <button className="btn" onClick={""}>EEE</button>
                <button className="btn" onClick={""}>ECE</button>
                <button className="btn" onClick={""}>CE</button>
                <button className="btn" onClick={""}>ME</button>
            </div>
            <div className="clscount">
            <h2>Class Count</h2>
            <button className="btn" onClick={""}>CSE</button>

            <select value={selectedValue} onChange={handleSelectChange}>
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>

            </select>

            <button className="btn" onClick={""}>EEE</button>
            <select value={selectedValue} onChange={handleSelectChange}>
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>

            </select>
            <button className="btn" onClick={""}>ECE</button>
            <select value={selectedValue} onChange={handleSelectChange}>
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>

            </select>
            <button className="btn" onClick={""}>CE</button>
            <select value={selectedValue} onChange={handleSelectChange}>
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>

            </select>
            <button className="btn" onClick={""}>ME</button>
            <select value={selectedValue} onChange={handleSelectChange}>
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>

            </select>
            </div>
            <img id='excelg' src="src/Assets/Logo.png" alt="Logo" />
        </div>
    );
}

export default Examcell2;