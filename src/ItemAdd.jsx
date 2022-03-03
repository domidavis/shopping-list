import React, { useState } from "react";
import { useHistory } from "react-router-dom"

export default function ItemAdd() {
    const history = useHistory();
    const [name, setName] = useState("");
    const [store, setStore] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setName("");
        setStore("");
        history.go(0);
    }

    const handleChange = ({ target }) => {
        if(target.name === "name") {
            setName(target.value);
        }
        if(target.name === "store") {
            setStore(target.value);
        }
    }
    
    return (
        <>
            <h1>Add Item</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Item Name:
                    </label>
                    <input
                    id="name"
                    className="form-control"
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
                    className="form-control"
                    type="text"
                    name="store"
                    placeholder="Where do you get it?"
                    onChange={handleChange}
                    value={store}
                    required
                    />
                </div>
                <button className="btn btn-primary m-1" type="submit">Submit</button>
            </form>
        </>
    )
}