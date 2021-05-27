import * as React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./Containers/Home";
import Mergesort from "./Containers/Mergesort";
import { Box, Container } from "@material-ui/core";
import Bubblesort from "./Containers/Bubblesort";
import Insertionsort from "./Containers/Insertionsort";
import { SearchAppBar } from "./Components/SearchAppBar";

function App() {
    return (
        <BrowserRouter>
            <Box height="65px">
                <SearchAppBar />
            </Box>
            <Box height="calc(100vh - 65px)" className="texturedBackground">
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
            </Box>
        </BrowserRouter>
    );
}

export default App;
