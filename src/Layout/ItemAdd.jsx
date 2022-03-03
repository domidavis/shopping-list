import React, { useState } from "react";
import { useHistory } from "react-router-dom"

export default function ItemAdd() {
    const history = useHistory();
    const today = new Date();
    const [name, setName] = useState("");
    const [store, setStore] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [dateAdded, setDateAdded] = useState(today);

    const handleSubmit = (event) => {
        event.preventDefault();
        setName("");
        setStore("");
        setQuantity(0);
        setDateAdded(today);
        history.go(0);
    }

    const handleChange = ({ target }) => {
        if(target.name === "name") {
            setName(target.value);
        }
        if(target.name === "store") {
            setStore(target.value);
        }
        if(target.name === "quantity") {
            setQuantity(target.value);
        }
        if(target.name === "dateAdded") {
            setDateAdded(target.value);
        }
    }
    
    return (
        <>
            <h3>Add Item</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Item Name:
                    </label>
                    <input
                    id="name"
                    className="form-control border-info"
                    type="text"
                    name="name"
                    placeholder="Whatcha need dude?"
                    onChange={handleChange}
                    value={name}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="store" className="form-label">
                        Sold at:
                    </label>
                    <input
                    id="store"
                    className="form-control border-info"
                    type="text"
                    name="store"
                    placeholder="Where do you get it?"
                    onChange={handleChange}
                    value={store}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">
                        Quantity needed:
                    </label>
                    <input
                    id="quantity"
                    className="form-control border-info"
                    type="number"
                    name="quantity"
                    onChange={handleChange}
                    value={quantity}
                    required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="dateAdded" className="form-label">
                        Date added:
                    </label>
                    <input
                    id="dateAdded"
                    className="form-control border-info"
                    type="date"
                    name="dateAdded"
                    onChange={handleChange}
                    value={dateAdded}
                    />
                </div>
                <button className="btn btn-outline-info m-1 mt-3" type="submit">Submit</button>
            </form>
        </>
    )
}