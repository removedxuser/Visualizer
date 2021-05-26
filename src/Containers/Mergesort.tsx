import { Box, Button } from "@material-ui/core";
import React from "react";
import { MergeSort } from "../Classes/MergeSort";
import VisualizationCanvas from "../Components/VisualizationCanvas";
import { SortTypes } from "../interfaces/genericInterfaces";

export default function Mergesort() {
    return (
        <Box p="16px">
            <VisualizationCanvas<MergeSort> sortType={SortTypes.MergeSort}>
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
