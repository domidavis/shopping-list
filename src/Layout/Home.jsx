import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ItemAdd from "./ItemAdd";
import ItemList from "./ItemList";

export default function Home() {
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
        <div className="Home">
            <div className="ml-auto col-3">
                <ItemAdd name={name} store={store} quantity={quantity} dateAdded={dateAdded} handleSubmit={handleSubmit} handleChange={handleChange}/>
                <ItemList />
            </div>
        </div>
    )
}