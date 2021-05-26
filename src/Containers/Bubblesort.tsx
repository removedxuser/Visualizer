import { Box, Button } from "@material-ui/core";
import React from "react";
import { BubbleSort } from "../Classes/BubbleSort";
import { CTypography } from "../Components/CTypography";
import VisualizationCanvas from "../Components/VisualizationCanvas";
import { SortTypes } from "../interfaces/genericInterfaces";

export default function Mergesort() {
    return (
        <Box>
            <CTypography style={{ fontSize: "2rem", fontWeight: 700, padding: "8px 0 8px 0" }}>
                Bubble Sort
            </CTypography>
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
