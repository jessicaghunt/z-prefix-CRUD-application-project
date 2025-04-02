import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import Siderbar from "./src/styles/Siderbar.css"
const Heading = () => {
    const [popUp, setPopUp] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const runLogin = () => {
        if (username === "admin" && password === "12345678") {
            setPopUp(false);
            navigate("/login");
        }else{
            setError("Galloping Billy Goats!! Incorrect login information. Try Again")
        }
        
    }
    return (
        <>
        <div className="heading-bar">
            <div className="logo">
                <Link to="/"><div style={{ position: 'relative', fontFamily: 'sans-serif'}}>
                    {/* <img src="../test-image.png" className="logo" /> */}
                    HOME</div>
                </Link>
                </div>
                <div className="nav-bar">
                <nav>
                    <ul>
                        <li>
                            <Link to="/create_account" title="Create Account">
                            <div style={{ position: 'relative', fontFamily: 'sans-serif'}}>
                            {/* <img src="../test-image.png" className="logo" /> */}
                                <div className="link-word">Create Account</div>
                            </div></Link>
                        </li>
                        <li> <button onClick={() => setPopUp(true)} className="login-button">Login</button>
                        {/* <Link to="/login" title="Manager Login"> */}
                            {/* <div style={{ position: 'relative', fontFamily: 'sans-serif'}}> */}
                            {/* <img src="../test-image.png" className="logo" /> */}
                                {/* <div className="link-word">Login</div> */}
                            {/* </div></Link> */}
                            </li>
                    </ul>
                </nav>
            </div>
            </div>

            {popUp && (
                <div className="popup-overlay">
                    <div className="popup-container">
                        <h2>Login</h2>
                        {error && <p className="error">{error}</p>}
                        <input
                            type="text" placeholder="Trail Username" value={username} onChange={(e) => setUsername(e.target.value)}
                            />
                        <input 
                            type="password" placeholder="Whats the Password?" value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                            <button onClick={runLogin}>Submit</button>
                            <button onClick={() => setPopUp(false)}>Close</button>
                    </div>
        </div>
            )}
            
            </>
    );
};

export default Heading;