import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Home.css";

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import import "../styles/Home.css";

const ManagerLogin = () => {
    const { userid } = useParams();
    const [popUp, setPopUp] = useState(false);
    const [managerItems, setManagerItems] = useState([]);
    const [addItem, setAddItem] = useState({
        itemname:'',
        description: '',
        quantity: 0
    })
    // const [userid, setUserId] = useState(null);
    const navigate = useNavigate();

    const viewAllItems = () => {
        navigate("/");
    }

//Get specific manager items
useEffect(() => {
    console.log("userid param:", userid);
    if (userid){
        fetch(`http://localhost:3001/items?userid=${userid}`)
    .then((res) => res.json())
    .then((data) => {console.log("fetched data:", data);
        setManagerItems(data.filter(item => item.userid === Number(userid)));})
    .catch((error) => console.error("Error fetching manager items:", error));
}}, [userid])



const handleItemChange = (e) => {
    const { name, value } = e.target;
    setAddItem((prevState) => ({
        ...prevState, [name]: value
    }))
}

const handleItemAdd = () => {
    const newItem = { ...addItem, userid: userid };
    setManagerItems((prevItems) => [...prevItems, newItem]);

    fetch("http://localhost:3001/items", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify({ ...addItem, userid: userid }),
        })
        .then((res) => res.json())
        .then((data) => {
            const updatedItem = { ...newItem, id: data.id }
            setManagerItems((prevItems) =>
                prevItems.map((item) =>
                    item.itemname === newItem.itemname ? updatedItem : item
                )
            );            
            setPopUp(false);
            setAddItem({ itemname: '', description: '', quantity: 0 });
        })
        .catch((error) => console.error('Error adding item:', error));
}

const handleItemDelete = (id) => {
    fetch(`http://localhost:3001/items/${id}`, {
        method: "DELETE",
    })
    .then(() => {
        setManagerItems(prevItems => prevItems.filter(item => item.id !== id));
    })
    .catch((error) => console.error("Error deleting item:", error));
}

    return(
  <>
        <div className="home-container">
        <div className="home-header">
            {/* find a way to display logged in users first name */}
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
                            {/* <th>Edit</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {managerItems.length > 0 ? (
                        managerItems.map((item) => (
                        <tr key={item.id || item.itemname}>
                            
                            <td>{item.itemname || "n/a"}</td>
                            <td>{item?.description?.length > 100
                            ? `${item.description.slice(0, 100)}...`
                            : item?.description || "n/a"}</td>
                            <td>{item.quantity || "n/a"}</td>
                            <td><button onClick={() => handleItemDelete(item.id)}>
                                X</button></td>
                            {/* <td>Edit Button</td> */}
                        </tr>
                        ))
                    ):(<tr><td colSpan="4">NO ITEMS</td></tr>)}
                    </tbody>
                </table>
            </div>
        </div>


        
        {popUp && (
            <div className="add-item-popup">
                <div className="add-item-popup-container">
                    <h3>Add New Item</h3>
                    <div>
                        <label>Item Name</label>
                        <input type="text" name="itemname" value={addItem.itemname} onChange={handleItemChange} placeholder="Enter new trail item" />
                        </div>
                        <div>
                            <label>Description</label>
                            <input type="text" name="description" value={addItem.description} onChange={handleItemChange} placeholder="Enter Description" />
                        </div>
                        <div>
                            <label>Quantity</label>
                            <input type="number" name="quantity" value={addItem.quantity} onChange={handleItemChange} placeholder="Quantity?" />
                        </div>

                     <button onClick={handleItemAdd}>Add Item</button>
                    <button onClick={() => setPopUp(false)}>Close</button>
                    </div>
                </div>
        )}

        </div>
        </>
    );
}




export default ManagerLogin;