import { react, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import import "../styles/Home.css";

const ManagerLogin = () => {
    const [popUp, setPopUp] = useState(false);
    const navigate = useNavigate();

    const viewAllItems = () => {
        navigate("/");
    }

    return(
  <>
        <div className="home-container">
        <div className="home-header">
        <h2>Manager View</h2>
        </div>
        <div className="page-description">
        <p>View Your Personal inventory here</p>
        </div>
        <div className="full-inventory-container">
            <h2>Current Inventory</h2>
            <div className="full-inventory-header">
            <button onClick={() => setPopUp(true)} className="add-item-button">➕Add Item</button>
            <button onClick={viewAllItems} className="view-all-items-button">🔍 View Entire Item List</button>

            {/* <button onClick={() =>} */}
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Quantity Available</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {item?.map((item, index) => (
                        <tr key={index}>
                            <td>{item?.item_name || "n/a"}</td>
                            <td>{item?.description || "n/a"}</td>
                            <td>{item?.quantity || "n/a"}</td>
                            <td>Delete Button</td>
                            <td>Edit Button</td>
                        </tr>
                        ))} */}
                    </tbody>
                </table>
            </div>
        </div>
        {popUp && (
            <div className="add-item-popup">
                <div className="add-item-popup-container">
                    <h3>Add New Item</h3>
                    {/* <div>
                        <label>Item Name</label>
                        <input type="text" name="itemName" value={newItem.itemName} onChange={handleChange} placeholder="Enter new item" />
                        </div>
                        <div>
                            <label>Description</label>
                            <input type="text" name="description" value={newItem.description} onChange={handleChange} placeholder="Enter Description" />
                        </div>
                        <div>
                            <label>Quantity</label>
                            <input type="number" name="quantity" value={newItem.quantity} onChange={handleChange} placeholder="Quantity?" />
                        </div>

                     <button onClick={handleAddItem}>Add Item</button> */}
                    <button onClick={() => setPopUp(false)}>Close</button>
                    </div>
                </div>
        )}

        </div>
        </>
    );
}




export default ManagerLogin;