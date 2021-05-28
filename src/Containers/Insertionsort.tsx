import { Box } from "@material-ui/core";
import React from "react";
import { InsertionSort } from "../Classes/InsertionSort";
import { generateCrumbs } from "../Components/BreadcrumbNavigation";
import Controls from "../Components/Controls";
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
            <Box py="8px">
                <CTypographyWithBreadcrumbs crumbs={crumbs}>
                    <Box fontSize="2rem" component="span">
                        Insertion Sort
                    </Box>
                </CTypographyWithBreadcrumbs>
            </Box>
            <VisualizationCanvas<InsertionSort>
                sortType={SortTypes.InsertionSort}
                initialNodes={350}
            >
                {(instance) => (
                    <Box mt="8px">
                        <Controls instance={instance} />
                    </Box>
                )}
            </VisualizationCanvas>
        </Box>
    );
}
