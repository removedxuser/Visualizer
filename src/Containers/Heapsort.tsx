import { Box } from "@material-ui/core";
import React from "react";
import { HeapSort } from "../Classes/HeapSort";
import Controls from "../Components/VisualizerControls/Controls";
import {
    CTypographyWithBreadcrumbs,
    TitleComponent,
} from "../Components/HeaderComponents/HeaderComponents";
import VisualizationCanvas from "../Components/VisualizationCanvas/VisualizationCanvas";
import { SortTypes } from "../interfaces/genericInterfaces";
import { generateCrumbs } from "../Components/BreadCrumbNavigation/BreadcrumbNavigation";

const crumbs = generateCrumbs({
    crumbLabel: "Heap Sort",
    active: true,
    href: "/heapsort",
});

export default function Heapsort() {
    return (
        <Box>
            <Box py="8px">
                <CTypographyWithBreadcrumbs crumbs={crumbs}>
                    <TitleComponent title="Heapsort" tC="O(nLogn)" />
                </CTypographyWithBreadcrumbs>
            </Box>
            <VisualizationCanvas<HeapSort> sortType={SortTypes.HeapSort} initialNodes={500}>
                {(instance) => (
                    <Box mt="8px">
                        <Controls
                            instance={instance}
                            defaultValues={{ size: 500, speed: 100 }}
                            maxValues={{ size: 500, speed: 100 }}
                        />
                    </Box>
                )}
            </VisualizationCanvas>
        </Box>
    );
}
