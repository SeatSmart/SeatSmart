import "./ex2.css"

const Examcell2 = () => {
    return (
        <div className="ex2">
            <h1>Examcell2</h1>
            <div className="branch">
                <button className="btn" onClick={""}>CSE</button>
                <button className="btn" onClick={""}>EEE</button>
                <button className="btn" onClick={""}>ECE</button>
                <button className="btn" onClick={""}>CE</button>
                <button className="btn" onClick={""}>ME</button>
            </div>
            <div className="clscount">
                
            </div>
            <img id='excelg' src="src/Assets/Logo.png" alt="Logo" />
        </div>
    );
}
export default Examcell2;