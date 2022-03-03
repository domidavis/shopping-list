import React from "react";
import Header from "./Header";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";

export default function Layout() {
    return (
        <>
        <Header />
        <div className="container">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
        </>
    )
}