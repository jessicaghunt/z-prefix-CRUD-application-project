import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/Header.css' 
// import Siderbar from "./src/styles/Siderbar.css"
const Heading = () => {
    const [popUp, setPopUp] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [users, setUsers] = useState()

    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
            });
    }, [])


    const runLogin = () => {
        const userpass = new Map();
        users.forEach((item) => {
            userpass.set(item.username, item.password);
        })

        if (userpass.has(username) && password === userpass.get(username)) {
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
                <Link to="/">
                <img src="/silhouette-cowboy-hat-logo.JPG" className="logo" alt="Logo" />
                    {/* HOME */}
                </Link>
                </div>
                <div className="company-header">
                    <h1>Trail Ride Treasures</h1>
                </div>
                <div className="nav-bar">
                <nav>
                    <ul>
                        <li>
                            <Link to="/create_account" title="Create Account">
                            {/* <div style={{ position: 'relative', fontFamily: 'sans-serif'}}> */}
                            {/* <img src="../test-image.png" className="logo" /> */}
                                <div className="link-word">Create Account</div>
                            </Link>
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
                    <div className="popup-container">
                        {/* <h3>Login</h3> */}
                        {error && <p className="error">{error}</p>}
                        <input
                            type="text" placeholder="Trail Username" value={username} onChange={(e) => setUsername(e.target.value)}
                            />
                        <input 
                            type="password" placeholder="Whats Ya Password?" value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                            <button onClick={runLogin}>Submit</button>
                            <button onClick={() => setPopUp(false)}>Close</button>
                    </div>

            )}
            
            </>
    );
};

export default Heading;