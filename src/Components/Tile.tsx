import { Paper, PaperProps } from "@material-ui/core";
import React from "react";
import styles from "./Tile.module.css";

interface Props {
    children: React.ReactNode;
}

function Tile(props: Props & PaperProps) {
    return (
        <Paper elevation={6} className={styles.root} {...props}>
            {props.children}
        </Paper>
    );
}

export default React.memo(Tile);
