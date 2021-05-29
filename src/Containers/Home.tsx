import { Box } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { Tile } from "../Components/Tile/Tile";
import { __sortMetaData__ } from "../interfaces/searchMetaInfo";

export default function Home() {
    const history = useHistory();

    return (
        <Box display="flex" justifyContent="space-between" pt="16px" flexWrap="wrap">
            {__sortMetaData__.map(({ name, route }) => (
                <Tile
                    onClick={() => {
                        history.push(route);
                    }}
                    key={name}
                >
                    {name}
                </Tile>
            ))}
        </Box>
    );
}
