import "./ex5.css"
import { Link } from "react-router-dom";
const Examcell5= () =>{
    return(
        <div className="ex5">
            <h1>Arranged seats</h1>
            <div className="">
            <p className="arrangement">
                <a href="">arrangement.pdf</a>  
            </p>
            </div>
            <div className="button">
                <Link to='/'>
                    <button className="continue-button">HOME</button>
                </Link>
            </div>
        </div>
    )

}
export default Examcell5;