import React from "react";

export default function ItemAdd({ name, store, quantity, dateAdded, handleSubmit, handleChange }) {
    return (
        <>
            <h3>Add Item</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Item name
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