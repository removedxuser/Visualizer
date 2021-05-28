import { Box } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { Tile } from "../Components/Tile";

const __sortMetaData__: Array<{ name: string; route: string }> = [
    {
        name: "Merge Sort",
        route: "/mergesort",
    },
    {
        name: "Bubble Sort",
        route: "/bubblesort",
    },
    {
        name: "Insertion Sort",
        route: "/insertionsort",
    },
    {
        name: "Heap Sort",
        route: "/heapsort",
    },
];

export default function Home() {
    const history = useHistory();

    return (
        <Box display="flex" justifyContent="space-between" pt="16px" flexWrap="wrap">
            {__sortMetaData__.map(({ name, route }) => (
                <Tile
                    onClick={() => {
                        history.push(route);
                    }}
                    key={name}
                >
                    {name}
                </Tile>
            ))}
        </Box>
    );
}
