import { Box } from "@material-ui/core";
import React from "react";
import { BubbleSort } from "../Classes/BubbleSort";
import Controls from "../Components/VisualizerControls/Controls";
import { CTypographyWithBreadcrumbs } from "../Components/HeaderComponents/HeaderComponents";
import VisualizationCanvas from "../Components/VisualizationCanvas/VisualizationCanvas";
import { SortTypes } from "../interfaces/genericInterfaces";
import { generateCrumbs } from "../Components/BreadCrumbNavigation/BreadcrumbNavigation";

const crumbs = generateCrumbs({
    crumbLabel: "Bubble Sort",
    active: true,
    href: "/bubblesort",
});

const INITIAL_NODES = 100;
const INITIAL_WAITTIME = 100;

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
            <VisualizationCanvas<BubbleSort>
                sortType={SortTypes.BubbleSort}
                initialNodes={INITIAL_NODES}
                initialWaitTime={INITIAL_WAITTIME}
            >
                {(instance) => (
                    <Box mt="8px">
                        <Controls
                            instance={instance}
                            defaultValues={{ size: INITIAL_NODES, speed: INITIAL_WAITTIME - 90 }}
                            maxValues={{ size: 200, speed: 100 }}
                        />
                    </Box>
                )}
            </VisualizationCanvas>
        </Box>
    );
}
