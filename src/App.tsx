import * as React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Containers/Home";
import NavigationBar from "./Components/NavigationBar";
import Mergesort from "./Containers/Mergesort";
import { Container } from "@material-ui/core";
import Bubblesort from "./Containers/Bubblesort";
import Insertionsort from "./Containers/Insertionsort";

function App() {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Container>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/mergesort">
                        <Mergesort />
                    </Route>
                    <Route exact path="/bubblesort">
                        <Bubblesort />
                    </Route>
                    <Route exact path="/insertionsort">
                        <Insertionsort />
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;
