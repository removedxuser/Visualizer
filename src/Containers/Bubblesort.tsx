import { Box } from "@material-ui/core";
import React from "react";
import { BubbleSort } from "../Classes/BubbleSort";
import { generateCrumbs } from "../Components/BreadcrumbNavigation";
import Controls from "../Components/Controls";
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
                    <Box mt="8px">
                        <Controls instance={instance} />
                    </Box>
                )}
            </VisualizationCanvas>
        </Box>
    );
}
