import { Box, Button } from "@material-ui/core";
import React from "react";
import { BubbleSort } from "../Classes/BubbleSort";
import VisualizationCanvas from "../Components/VisualizationCanvas";
import { SortTypes } from "../interfaces/genericInterfaces";

export default function Mergesort() {
    return (
        <Box p="16px">
            <VisualizationCanvas<BubbleSort> sortType={SortTypes.BubbleSort}>
                {(instance) => (
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            if (instance) {
                                instance.start();
                            }
                        }}
                    >
                        Sort
                    </Button>
                )}
            </VisualizationCanvas>
        </Box>
    );
}
