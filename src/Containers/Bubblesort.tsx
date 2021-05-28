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

export default function Mergesort() {
    return (
        <Box>
            <Box py="8px">
                <CTypographyWithBreadcrumbs crumbs={crumbs}>
                    <Box fontSize="2rem" component="span">
                        Bubble Sort
                    </Box>
                </CTypographyWithBreadcrumbs>
            </Box>
            <VisualizationCanvas<BubbleSort> sortType={SortTypes.BubbleSort} initialNodes={350}>
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
