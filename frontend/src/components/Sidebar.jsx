import { Link } from "react-router-dom";
// import Siderbar from "./src/styles/Siderbar.css"
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <Link to="/">
                    <div style={{ position: 'relative', fontFamily: 'sans-serif'}}>
                        {/* <img src="../test-image.png" className="logo" /> */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0, 
                            bottom: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '35px',
                            fontSize: '28px',
                            color: 'brown',
                            fontFamily: 'fantasy',
                            zIndex: 1
                        }}>
                            HOME</div>
                        </div></Link>
            </div>
            <div className="nav-bar">
                <nav>
                    <ul>
                        <li>
                            <Link to="/create_account" title="Create Account">
                            <div style={{ position: 'relative', fontFamily: 'sans-serif'}}>
                                {/* <img src="../test-image.png" className="logo" /> */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0, 
                                    bottom: 0,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '80%',
                                    fontSize: '12px',
                                    color: 'brown',
                                    fontFamily: 'sans-serif',
                                    zIndex: 1
                                }} className="link-word">Create Account</div>
                                    </div></Link>
                        </li>
                        <li>
                        <Link to="/inventory" title="Inventory">
                            <div style={{ position: 'relative', fontFamily: 'sans-serif'}}>
                                {/* <img src="../test-image.png" className="logo" /> */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0, 
                                    bottom: 0,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '80%',
                                    fontSize: '12px',
                                    color: 'brown',
                                    fontFamily: 'sans-serif',
                                    zIndex: 1
                                }} className="link-word">Inventory</div>
                                </div>
                                </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;