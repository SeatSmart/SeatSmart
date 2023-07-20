import "./inv1.css"
import { Link } from "react-router-dom"
import { useEffect,useState } from "react"
const Invigilator1 = () =>{
    return(
        <div className="inv1">
            <h1 className="inv">INVIGILATOR</h1>
            <div className="input-container">
                <button className="text">Enter Room number</button>
                <input className="input-field" type="text"></input>
            </div>
            <div className="button-container">
                <Link to="/invigilator2">
                    <button type="submit" className="subbutton">CONTINUE</button>
                </Link>
            </div>    
        </div>
    )
}
export default Invigilator1