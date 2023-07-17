import React, { useState,useEffect } from 'react';
import "./ex3.css"
import { Link } from 'react-router-dom';
const Examcell3 = () => {
    var vacant_cs1=[];var vacant_cs2=[];var vacant_ee1=[];var vacant_ee2=[];var vacant_ec1=[];var vacant_ec2=[];var vacant_ce1=[];var vacant_ce2=[];var vacant_me1=[];var vacant_me2=[];
    const [inputValues, setInputValues] = useState('');
    const [inputValues_cs1, setInputValues_cs1] = useState('');
    const [inputValues_cs2, setInputValues_cs2] = useState('');
    const [inputValues_ee1, setInputValues_ee1] = useState('');
    const [inputValues_ee2, setInputValues_ee2] = useState('');
    const [inputValues_ec1, setInputValues_ec1] = useState('');
    const [inputValues_ec2, setInputValues_ec2] = useState('');
    const [inputValues_ce1, setInputValues_ce1] = useState('');
    const [inputValues_ce2, setInputValues_ce2] = useState('');
    const [inputValues_me1, setInputValues_me1] = useState('');
    const [inputValues_me2, setInputValues_me2] = useState('');
    const [vacant_cs1Length, setVacant_cs1Length] = useState('');
    const [cs1, setCs1] = useState('');
    const [vacant_cs2Length, setVacant_cs2Length] = useState('');
    const [cs2, setCs2] = useState('');
    const [vacant_ee1Length, setVacant_ee1Length] = useState('');
    const [ee1, setee1] = useState('');
    const [vacant_ee2Length, setVacant_ee2Length] = useState('');
    const [ee2, setee2] = useState('');
    const [vacant_ec1Length, setVacant_ec1Length] = useState('');
    const [ec1, setec1] = useState('');
    const [vacant_ec2Length, setVacant_ec2Length] = useState('');
    const [ec2, setec2] = useState('');
    const [vacant_ce1Length, setVacant_ce1Length] = useState('');
    const [ce1, setce1] = useState('');
    const [vacant_ce2Length, setVacant_ce2Length] = useState('');
    const [ce2, setce2] = useState('');
    const [vacant_me1Length, setVacant_me1Length] = useState('');
    const [me1, setme1] = useState('');
    const [vacant_me2Length, setVacant_me2Length] = useState('');
    const [me2, setme2] = useState('');

    useEffect(() => {
        
    },[cs1,vacant_cs1Length,cs2,vacant_cs2Length,ee1,vacant_ee1Length,ee2,vacant_ee2Length,ec1,vacant_ec1Length,ec2,vacant_ec2Length,
        ce1,vacant_ce1Length,ce2,vacant_ce2Length,me1,vacant_me1Length,me2,vacant_me2Length,inputValues_cs1,inputValues_cs2,
        inputValues_ee1,inputValues_ee2,inputValues_ec1,inputValues_ec2,inputValues_ce1,inputValues_ce2,inputValues_me1,inputValues_me2]);

    const handleInputChange_cs1 = (event) => {
        const value = event.target.value;
        // console.log(value);
        setCs1(value);
        // console.log(cs1);
    };
    const handleInputvacant_cs1 = (event) =>{
        const value = event.target.value;
        setInputValues_cs1(value);
        vacant_cs1 = value.split(',').map((val) => val.trim());
        console.log(vacant_cs1);
        setVacant_cs1Length(vacant_cs1.length);
        // console.log(vacant_cs1Length);
        
    };
    const handleInputChange_cs2 = (event) => {
        const value = event.target.value;
        // console.log(value);
        setCs2(value);
        // console.log(cs1);
    };
    const handleInputvacant_cs2 = (event) =>{
        const value = event.target.value;
        setInputValues_cs2(value);
        vacant_cs2 = value.split(',').map((val) => val.trim());
        console.log(vacant_cs2);
        setVacant_cs2Length(vacant_cs2.length);
        // console.log(vacant_cs1Length);ee1
    };
    const handleInputChange_ee1 = (event) => {
        const value = event.target.value;
        // console.log(value);
        setee1(value);
        // console.log(cs1);
    };
    const handleInputvacant_ee1 = (event) =>{
        const value = event.target.value;
        setInputValues_ee1(value);
        vacant_ee1 = value.split(',').map((val) => val.trim());
        console.log(vacant_ee1);
        setVacant_ee1Length(vacant_ee1.length);
        // console.log(vacant_cs1Length);
        
    };
    const handleInputChange_ee2 = (event) => {
        const value = event.target.value;
        // console.log(value);
        setee2(value);
        // console.log(cs1);
    };
    const handleInputvacant_ee2 = (event) =>{
        const value = event.target.value;
        setInputValues_ee2(value);
        vacant_ee2 = value.split(',').map((val) => val.trim(ec2));
        setVacant_ee2Length(vacant_ee2.length);
        // console.log(vacant_cs1Length);
        
    };
    const handleInputChange_ec1 = (event) => {
        const value = event.target.value;
        // console.log(value);
        setec1(value);
        // console.log(cs1);
    };
    const handleInputvacant_ec1 = (event) =>{
        const value = event.target.value;
        setInputValues_ec1(value);
        vacant_ec1 = value.split(',').map((val) => val.trim());
        setVacant_ec1Length(vacant_ec1.length);
        // console.log(vacant_cs1Length);
        
    };
    const handleInputChange_ec2 = (event) => {
        const value = event.target.value;
        // console.log(value);
        setec2(value);
        // console.log(cs1);
    };
    const handleInputvacant_ec2 = (event) =>{
        const value = event.target.value;
        setInputValues_ec2(value);
        vacant_ec2 = value.split(',').map((val) => val.trim());
        console.log(vacant_ec2);
        setVacant_ec2Length(vacant_ec2.length);
        // console.log(vacant_cs1Length);
        
    };
    const handleInputChange_ce1 = (event) => {
        const value = event.target.value;
        // console.log(value);
        setce1(value);
        // console.log(cs1);
    };
    const handleInputvacant_ce1 = (event) =>{
        const value = event.target.value;
        setInputValues_ce1(value);
        vacant_cs1 = value.split(',').map((val) => val.trim());
        console.log(vacant_ce1);
        setVacant_ce1Length(vacant_ce1.length);
        // console.log(vacant_cs1Length);
        
    };
    const handleInputChange_ce2 = (event) => {
        const value = event.target.value;
        // console.log(value);
        setce2(value);
        // console.log(cs1);
    };
    const handleInputvacant_ce2 = (event) =>{
        const value = event.target.value;
        setInputValues_ce2(value);
        vacant_ce2 = value.split(',').map((val) => val.trim());
        console.log(vacant_ce2);
        setVacant_ce2Length(vacant_ce2.length);
        // console.log(vacant_cs1Length);
        
    };
    const handleInputChange_me1 = (event) => {
        const value = event.target.value;
        // console.log(value);
        setme1(value);
        // console.log(cs1);
    };
    const handleInputvacant_me1 = (event) =>{
        const value = event.target.value;
        setInputValues_me1(value);
        vacant_me1 = value.split(',').map((val) => val.trim());
        console.log(vacant_me1);
        setVacant_me1Length(vacant_me1.length);
        // console.log(vacant_cs1Length);
        
    };
    const handleInputChange_me2 = (event) => {
        const value = event.target.value;
        // console.log(value);
        setme2(value);
        // console.log(cs1);
    };
    const handleInputvacant_me2 = (event) =>{
        const value = event.target.value;
        setInputValues_me2(value);
        vacant_me2 = value.split(',').map((val) => val.trim());
        console.log(vacant_me2);
        setVacant_me2Length(vacant_me2.length);
        // console.log(vacant_cs1Length);
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCs1(cs1 - vacant_cs1Length);
        setCs2(cs2 - vacant_cs2Length);
        setee1(ee1 - vacant_ee1Length);
        setee2(ee2 - vacant_ee2Length);
        setec1(ec1 - vacant_ec1Length);
        setec2(ec2 - vacant_ec2Length);
        setce1(ce1 - vacant_ce1Length);
        setce2(ce2 - vacant_ce2Length);
        setme1(me1 - vacant_me1Length);
        setme2(me2 - vacant_me2Length);
    };
    return (
        <div className='ex3'>
            <h1>EXAM CELL</h1>
            <div className="table">
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr>
                            <th>CLASS</th>
                            <th>ROLL NO</th>
                            <th>VACANT ROLL NO</th>
                            <th>COURSE</th>
                            <th>TOTAL STUDENTS</th>
                        </tr>
                        <tr>
                            <td>
                                <p className='classlabel'>CSE1</p>
                            </td>
                            <td>
                                <div className="roll">
                                    <p className='roll1'>
                                        1
                                    </p>
                                    to
                                    <input className='roll1' type="text" value={cs1}  onInput={handleInputChange_cs1} />
                                </div>
                            </td>
                            <td>
                                <input className='classlabel' type='text' value={inputValues_cs1} onInput={handleInputvacant_cs1} />    
                            </td>    
                            <td>
                                <p className='classlabel'>course</p>
                            </td>   
                            <td>
                                <p className='classlabel'>{cs1}</p>    
                            </td>         
                        </tr>
                        <tr>
                            <td>
                                <p className='classlabel'>CSE2</p>
                            </td>
                            <td>
                                <div className="roll">
                                    <p className='roll1'>
                                        1
                                    </p>
                                    to
                                    <input className='roll1' type="text" value={cs2}  onInput={handleInputChange_cs2} />
                                </div>
                            </td>
                            <td>
                                <input className='classlabel' type='text' value={inputValues_cs2} onInput={handleInputvacant_cs2} />
                            </td>
                            <td>
                                <p className='classlabel'>course</p>
                            </td>
                            <td>
                                <p className='classlabel'>{cs2}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='classlabel'>EC1</p>
                            </td>
                            <td>
                                <div className="roll">
                                    <p className='roll1'>
                                        1
                                    </p>
                                    to
                                    <input className='roll1' type="text" value={ec1}  onInput={handleInputChange_ec1} />
                                </div>
                            </td>
                            <td>
                                <input className='classlabel' type='text' value={inputValues_ec1} onInput={handleInputvacant_ec1} />
                            </td>
                            <td>
                                <p className='classlabel'>course</p>
                            </td>
                            <td>
                                <p className='classlabel'>{ec1}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='classlabel'>EC2</p>
                            </td>
                            <td>
                                <div className="roll">
                                    <p className='roll1'>
                                        1
                                    </p>
                                    to
                                    <input className='roll1' type="text" value={ec2}  onInput={handleInputChange_ec2} />
                                </div>
                            </td>
                            <td>
                                <input className='classlabel' type='text' value={inputValues_ec2} onInput={handleInputvacant_ec2} />
                            </td>
                            <td>
                                <p className='classlabel'>course</p>
                            </td>
                            <td>
                                <p className='classlabel'>{ec2}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='classlabel'>CE1</p>
                            </td>
                            <td>
                                <div className="roll">
                                    <p className='roll1'>
                                        1
                                    </p>
                                    to
                                    <input className='roll1' type="text" value={ce1}  onInput={handleInputChange_ce1} />
                                </div>
                            </td>
                            <td>
                                <input className='classlabel' type='text' value={inputValues_ce1} onInput={handleInputvacant_ce1} />
                            </td>
                            <td>
                                <p className='classlabel'>course</p>
                            </td>
                            <td>
                                <p className='classlabel'>{ce1}</p>
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <p className='classlabel'>CE2</p>
                            </td>
                            <td>
                                <div className="roll">
                                    <p className='roll1'>
                                        1
                                    </p>
                                    to
                                    <input className='roll1' type="text" value={ce2}  onInput={handleInputChange_ce2} />
                                </div>
                            </td>
                            <td>
                                <input className='classlabel' type='text' value={inputValues_ce2} onInput={handleInputvacant_ce2} />
                            </td>
                            <td>
                                <p className='classlabel'>course</p>
                            </td>
                            <td>
                                <p className='classlabel'>{ce2}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='classlabel'>ME1</p>
                            </td>
                            <td>
                                <div className="roll">
                                    <p className='roll1'>
                                        1
                                    </p>
                                    to
                                    <input className='roll1' type="text" value={me1}  onInput={handleInputChange_me1} />
                                </div>
                            </td>
                            <td>
                                <input className='classlabel' type='text' value={inputValues_me1} onInput={handleInputvacant_me1} />
                            </td>
                            <td>
                                <p className='classlabel'>course</p>
                            </td>
                            <td>
                                <p className='classlabel'>{me1}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='classlabel'>ME2</p>
                            </td>
                            <td>
                                <div className="roll">
                                    <p className='roll1'>
                                        1
                                    </p>
                                    to
                                    <input className='roll1' type="text" value={me2}  onInput={handleInputChange_me2} />
                                </div>
                            </td>
                            <td>
                                <input className='classlabel' type='text' value={inputValues_me2} onInput={handleInputvacant_me2} />
                            </td>
                            <td>
                                <p className='classlabel'>course</p>
                            </td>
                            <td>
                                <p className='classlabel'>{me2}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='classlabel'>EE1</p>
                            </td>
                            <td>
                                <div className="roll">
                                    <p className='roll1'>
                                        1
                                    </p>
                                    to
                                    <input className='roll1' type="text" value={ee1}  onInput={handleInputChange_ee1} />
                                </div>
                            </td>
                            <td>
                                <input className='classlabel' type='text' value={inputValues_ee1} onInput={handleInputvacant_ee1} />
                            </td>
                            <td>
                                <p className='classlabel'>course</p>
                            </td>
                            <td>
                                <p className='classlabel'>{ee1}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='classlabel'>EE2</p>
                            </td>
                            <td>
                                <div className="roll">
                                    <p className='roll1'>
                                        1
                                    </p>
                                    to
                                    <input className='roll1' type="text" value={ee2}  onInput={handleInputChange_ee2} />
                                </div>
                            </td>
                            <td>
                                <input className='classlabel' type='text' value={inputValues_ee2} onInput={handleInputvacant_ee2} />
                            </td>
                            <td>
                                <p className='classlabel'>course</p>
                            </td>
                            <td>
                                <p className='classlabel'>{ee2}</p>
                            </td>
                        </tr>
                    </table>
                    <button type='submit' className='classlabel'>Submit</button>
                    <Link to='/examcell4'>
                        <button type='submit' className='classlabel'>Continue</button>
                    </Link>
                </form>

            </div>
        </div>
    );
}

export default Examcell3;
