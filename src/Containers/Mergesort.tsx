import { Box, Button } from "@material-ui/core";
import React from "react";
import { MergeSort } from "../Classes/MergeSort";
import { generateCrumbs } from "../Components/BreadcrumbNavigation";
import { CTypographyWithBreadcrumbs } from "../Components/HeaderComponents";
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
                    <Box fontSize="2rem" component="span">
                        Merge Sort
                    </Box>
                </CTypographyWithBreadcrumbs>
            </Box>
            <VisualizationCanvas<MergeSort> sortType={SortTypes.MergeSort} initialNodes={500}>
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
