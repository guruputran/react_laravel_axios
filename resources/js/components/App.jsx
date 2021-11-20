import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import RegisterPage from "./Register";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={RegisterPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
