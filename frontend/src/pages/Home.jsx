import { react } from "react";

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
    return(
        <>
        <div className="home-container">
        <div className="home-header">
        <h2>Welcome Home</h2>
        </div>
        <div className="page-description">
        <p>All of your trail ride needs found in one place</p>
        </div>
        <div className="full-inventory-container">
            <h2>Current Inventory</h2>
            <div className="full-inventory-header">
                <table>
                    <thread>
                        <tr>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Quantity Available</th>
                        </tr>
                    </thread>
                    <tbody>
                        {/* {item?.map((item, index) => (
                        <tr key={index}>
                            <td>{item?.item_name || "n/a"}</td>
                            <td>{item?.description || "n/a"}</td>
                            <td>{item?.quantity || "n/a"}</td>
                        </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
        </div>

        </div>
        </>
    );
}




export default Home;