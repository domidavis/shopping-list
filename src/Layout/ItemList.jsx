import React, { useState, useEffect } from "react";

export default function ItemList() {
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        async function getItems() {
            const response = await fetch("http://localhost:3000/items");
            const items = await response.json();
            setItems(items);
        }
        getItems();
    }, [])
    const allItems = items.map((item, index) => <div>{item.name}</div>);

    return (
        <main className="container">
            <section className="row">{allItems}</section>
        </main>
    );
}