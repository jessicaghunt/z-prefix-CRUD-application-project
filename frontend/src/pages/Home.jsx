import { useState, useEffect } from "react";

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "../styles/Home.css";



const Home = () => {
    // const api_url = "http://localhost:3001";
    const [items, setItems] = useState([]);
    // const [users, setUsers] = useState()

    useEffect(() => {
        // fetch("${api_url}/items")
        fetch("http://localhost:3001/items")
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }, [])

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
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Quantity Available</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item?.itemname || "n/a"}</td>
                            <td>{item?.description || "n/a"}</td>
                            <td>{item?.quantity || "n/a"}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        </div>
        </>
    );
}




export default Home;