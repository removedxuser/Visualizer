import { Box, Button } from "@material-ui/core";
import React from "react";
import { HeapSort } from "../Classes/HeapSort";
import { generateCrumbs } from "../Components/BreadcrumbNavigation";
import { CTypographyWithBreadcrumbs } from "../Components/HeaderComponents";
import VisualizationCanvas from "../Components/VisualizationCanvas";
import { SortTypes } from "../interfaces/genericInterfaces";

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
                    <Box fontSize="2rem" component="span">
                        Heapsort
                    </Box>
                </CTypographyWithBreadcrumbs>
            </Box>
            <VisualizationCanvas<HeapSort> sortType={SortTypes.HeapSort} initialNodes={500}>
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
