import React, { useState,useEffect } from 'react';
import "./ex3.css"
const Examcell3 = () => {
    var vacant_cs1=[];var vacant_cs2=[];var vacant_ee1=[];var vacant_ee2=[];var vacant_ec1=[];var vacant_ec2=[];var vacant_ce1=[];var vacant_ce2=[];var vacant_me1=[];var vacant_me2=[];
    const [inputValues, setInputValues] = useState('');
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
        
    },[cs1,vacant_cs1Length]);

    const handleInputChange_cs1 = (event) => {
        const value = event.target.value;
        // console.log(value);
        setCs1(value);
        // console.log(cs1);
    };
    const handleInputvacant_cs1 = (event) =>{
        const value = event.target.value;
        setInputValues(value);
        vacant_cs1 = value.split(',').map((val) => val.trim());
        console.log(vacant_cs1);
        setVacant_cs1Length(vacant_cs1.length);
        // console.log(vacant_cs1Length);
        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCs1(cs1 - vacant_cs1Length);
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
                                <input className='classlabel' type='text' value={inputValues} onInput={handleInputvacant_cs1} />    
                            </td>    
                            <td>
                                <p className='classlabel'>course</p>
                            </td>   
                            <td>
                                <p className='classlabel'>{cs1}</p>    
                            </td>         
                        </tr>
                    </table>
                    <button type='submit' className='classlabel'>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Examcell3;
