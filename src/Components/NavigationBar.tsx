import { Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
    return (
        <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            bgcolor="lightblue"
            alignItems="center"
        >
            <Box fontSize="1.75rem" px="16px">
                <Link to="/">Visualizer</Link>
            </Box>
            <Box px="16px">Search</Box>
        </Box>
    );
}
