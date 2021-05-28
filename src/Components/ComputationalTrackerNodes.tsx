import { Box } from "@material-ui/core";
import React from "react";
import { ComputationalTrackerNode } from "../interfaces/genericInterfaces";

function ComputationalTrackerNodes() {
    return (
        <Box display="flex" alignItems="center">
            <Box>
                <Box>Swap Count: </Box>
                <Box id={ComputationalTrackerNode.Swap} ml="8px"></Box>
            </Box>
            <Box>
                <Box>Comparison Count: </Box>
                <Box id={ComputationalTrackerNode.Comparison} ml="8px"></Box>
            </Box>
        </Box>
    );
}

const memoizedComputationalTrackerNodes = React.memo(ComputationalTrackerNodes);

export { memoizedComputationalTrackerNodes as ComputationalTrackerNodes };
