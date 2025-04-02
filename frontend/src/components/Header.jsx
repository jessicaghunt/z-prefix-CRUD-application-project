import { Link } from "react-router-dom";
// import Siderbar from "./src/styles/Siderbar.css"
const Heading = () => {
    return (
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
                        <li>
                        <Link to="/login" title="Manager Login">
                            <div style={{ position: 'relative', fontFamily: 'sans-serif'}}>
                            {/* <img src="../test-image.png" className="logo" /> */}
                                <div className="link-word">Login</div>
                            </div></Link>
                            </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Heading;