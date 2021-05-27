import { Box, Button } from "@material-ui/core";
import React from "react";
import { BubbleSort } from "../Classes/BubbleSort";
import { generateCrumbs } from "../Components/BreadcrumbNavigation";
import { CTypographyWithBreadcrumbs } from "../Components/HeaderComponents";
import VisualizationCanvas from "../Components/VisualizationCanvas";
import { SortTypes } from "../interfaces/genericInterfaces";

const crumbs = generateCrumbs({
    crumbLabel: "Bubble Sort",
    active: true,
    href: "/bubblesort",
});

console.log(crumbs);

export default function Mergesort() {
    return (
        <Box>
            <CTypographyWithBreadcrumbs crumbs={crumbs}>Bubble Sort</CTypographyWithBreadcrumbs>
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
