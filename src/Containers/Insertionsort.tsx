import { Box, Button } from "@material-ui/core";
import React from "react";
import { InsertionSort } from "../Classes/InsertionSort";
import { generateCrumbs } from "../Components/BreadcrumbNavigation";
import { CTypographyWithBreadcrumbs } from "../Components/HeaderComponents";
import VisualizationCanvas from "../Components/VisualizationCanvas";
import { SortTypes } from "../interfaces/genericInterfaces";

const crumbs = generateCrumbs({
    crumbLabel: "Insertion Sort",
    active: true,
    href: "/insertionsort",
});

export default function Mergesort() {
    return (
        <Box>
            <CTypographyWithBreadcrumbs crumbs={crumbs}>Insertion Sort</CTypographyWithBreadcrumbs>
            <VisualizationCanvas<InsertionSort> sortType={SortTypes.InsertionSort}>
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
