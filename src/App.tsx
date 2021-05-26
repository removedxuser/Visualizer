import * as React from "react";
import "./App.css";
import VisualizationCanvas from "./Components/VisualizationCanvas";
import { SortTypes } from "./interfaces/genericInterfaces";

function App() {
    return (
        <div className="App">
            <VisualizationCanvas sortType={SortTypes.MergeSort}>
                {(sort) => (
                    <div>
                        <button
                            onClick={() => {
                                console.log(sort);
                                sort?.initialize();
                            }}
                        >
                            Load Bars
                        </button>
                        <button
                            onClick={() => {
                                console.log(sort);
                                sort?.start();
                            }}
                        >
                            Start Animation
                        </button>
                    </div>
                )}
            </VisualizationCanvas>
        </div>
    );
}

export default App;
