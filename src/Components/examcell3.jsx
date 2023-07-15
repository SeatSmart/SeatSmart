import React, { useState } from 'react';
import "./ex3.css"
const Examcell3 = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
    return (
        <div className='ex3'>
            <h1>EXAM CELL</h1>
            <div className="table">
                <form onSubmit={handleInputChange}>
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
                                    <input className='roll1' type="text" value={inputValue} onChange={handleInputChange} />
                                </div>
                            </td>                 
                        </tr>
                    </table>
                    <button type='submit' className='classlabel'>Continue</button>
                </form>
            </div>
        </div>
    )
}

export default Examcell3;
