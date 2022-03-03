import "./App.css";
import { Route, Switch } from "react-router-dom";
import ItemAdd from "./ItemAdd";

function App() {
  return (
    <div className="app-routes">
      <Switch>
        <Route exact path="/">
          <ItemAdd />
        </Route>
      </Switch>
    </div>

  );
}

export default App;