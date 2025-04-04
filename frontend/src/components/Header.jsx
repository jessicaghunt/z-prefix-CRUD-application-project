import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/Header.css' 
// import Siderbar from "./src/styles/Siderbar.css"
const Heading = () => {
    const [popUp, setPopUp] = useState(false);
    const [createAccount, setCreateAccount] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newFirstname, setNewFirstname] = useState("");
    const [newLastname, setNewLastname] = useState("");

    
    const [userItems, setUserItems] = useState([]);

    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("error fetvhing users:", error));
            }, [])


    const runLogin = () => {
        const user = users.find((item) => item.username === username);

        // const userpass = new Map();
        // const userIdMapping = new Map();
        // users.forEach((item) => {
        //     userpass.set(item.username, item.password);
        //     userIdMapping.set(item.username, item.id);
        // })

        if (user && user.password === password) {
            // If login is successful, set user ID in local state and navigate
            setPopUp(false);
            setError("");  // Clear any previous errors

            setUserId(user.id);
    
            // Fetch the user's items after login
            fetch(`http://localhost:3001/items?userid=${user.id}`)
                .then((res) => res.json())
                .then((items) => {
                    setUserItems(items);
                    // Optionally handle the items if needed (store them in state, etc.)
                    console.log('Fetched user items:', items);
    
                    // Navigate to the user-specific manager page
                    navigate(`/login/${user.id}`);
                })
                .catch((error) => {
                    console.error("Error fetching user items:", error);
                    setError("There was an issue fetching your items. Please try again later.");
                });
        } else {
            // Show error message if login fails
            setError("Galloping Billy Goats!! Incorrect login information. Try Again.");
        }



        // if (userpass.has(username) && password === userpass.get(username)) {
        //     setPopUp(false);
        //     const loggedInUserId = userIdMapping.get(username);
        //     setUserId(loggedInUserId);
        //     navigate(`/login/${loggedInUserId}`);
        // }else{
        //     setError("Galloping Billy Goats!! Incorrect login information. Try Again")
        // }
        
    }

    const handleCreateAccount = () => {
        if (newUsername && newPassword) {
            fetch("http://localhost:3001/users", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ firstname: newFirstname, lastname: newLastname, username:newUsername, password: newPassword})
            })
            .then((res) => res.json())
            .then((newUser) => {
                console.log("New user created:", newUser);
                setCreateAccount(false);
                setUserId(newUser.id);
                setNewFirstname("");
                setNewLastname("");
                setNewUsername("");
                setNewPassword("");
                navigate(`/login/${newUser.id}`)
            }).catch((error) => {
                console.error("error creating user:", error);
                setError("issue creating account, try again")
            });
        }else {
            setError("please fill in all fields.")
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
                        <button onClick={() => setCreateAccount(true)} className="link-word">Create Account</button>
                           
                        </li>
                        <li> <button onClick={() => setPopUp(true)} className="login-button">Login</button>
                        
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

            {createAccount && (
                <div className="popup-container">
                    <h3>Join the Trail Ride</h3>
                    <input
                    type="text" placeholder="First Name" value={newFirstname} onChange={(e) => setNewFirstname(e.target.value)}/>
                <input
                    type="text" placeholder="Last Name" value={newLastname} onChange={(e) => setNewLastname(e.target.value)}/>
                <input
                    type="text" placeholder="Username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}/>
                <input
                    type="password" placeholder="Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                <button onClick={handleCreateAccount}>Join</button>
                <button onClick={() => setCreateAccount(false)}>Close</button>
                </div>
            )}
            
            </>
    );
};

export default Heading;