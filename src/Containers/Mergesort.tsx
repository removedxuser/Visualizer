import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { MergeSort } from "../Classes/MergeSort";
import { CTypography } from "../Components/CTypography";
import VisualizationCanvas from "../Components/VisualizationCanvas";
import { SortTypes } from "../interfaces/genericInterfaces";

export default function Mergesort() {
    return (
        <Box>
            <CTypography style={{ fontSize: "2rem", fontWeight: 700, padding: "8px 0 8px 0" }}>
                Merge Sort
            </CTypography>
            <VisualizationCanvas<MergeSort> sortType={SortTypes.MergeSort}>
                {(instance) => (
                    <Box mt="8px">
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
                    </Box>
                )}
            </VisualizationCanvas>
        </Box>
    );
}
