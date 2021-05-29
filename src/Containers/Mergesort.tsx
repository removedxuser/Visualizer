import { Box } from "@material-ui/core";
import React from "react";
import { MergeSort } from "../Classes/MergeSort";
import { generateCrumbs } from "../Components/BreadcrumbNavigation";
import Controls from "../Components/Controls";
import { CTypographyWithBreadcrumbs, TitleComponent } from "../Components/HeaderComponents";
import VisualizationCanvas from "../Components/VisualizationCanvas";
import { SortTypes } from "../interfaces/genericInterfaces";

const crumbs = generateCrumbs({
    crumbLabel: "Merge Sort",
    active: true,
    href: "/mergesort",
});

export default function Mergesort() {
    return (
        <Box>
            <Box py="8px">
                <CTypographyWithBreadcrumbs crumbs={crumbs}>
                    <TitleComponent title="Merge Sort" tC="O(nLogn)" />
                </CTypographyWithBreadcrumbs>
            </Box>
            <VisualizationCanvas<MergeSort> sortType={SortTypes.MergeSort} initialNodes={500}>
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
