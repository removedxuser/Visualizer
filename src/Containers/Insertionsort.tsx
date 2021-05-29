import { Box } from "@material-ui/core";
import React from "react";
import { InsertionSort } from "../Classes/InsertionSort";
import Controls from "../Components/VisualizerControls/Controls";
import {
    CTypographyWithBreadcrumbs,
    TitleComponent,
} from "../Components/HeaderComponents/HeaderComponents";
import VisualizationCanvas from "../Components/VisualizationCanvas/VisualizationCanvas";
import { SortTypes } from "../interfaces/genericInterfaces";
import { generateCrumbs } from "../Components/BreadCrumbNavigation/BreadcrumbNavigation";

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
                    <TitleComponent title="Insertion Sort" tC="O(n^2)" />
                </CTypographyWithBreadcrumbs>
            </Box>
            <VisualizationCanvas<InsertionSort>
                sortType={SortTypes.InsertionSort}
                initialNodes={350}
            >
                {(instance) => (
                    <Box mt="8px">
                        <Controls
                            instance={instance}
                            defaultValues={{ size: 200, speed: 100 }}
                            maxValues={{ size: 200, speed: 100 }}
                        />
                    </Box>
                )}
            </VisualizationCanvas>
        </Box>
    );
}
