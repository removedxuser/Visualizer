import * as React from "react";
import { SortTypes, unionSortClasses, sortClasses } from "../interfaces/genericInterfaces";

const { useEffect, useState, useRef } = React;

interface Props {
    children: (p: unionSortClasses | null) => React.ReactNode;
    sortType: SortTypes;
}

function VisualizationCanvas(props: Props) {
    const { children, sortType } = props;

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [sortState, setSortState] = useState<unionSortClasses | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            setSortState(new sortClasses[sortType](100, canvasRef.current));
        }
    }, []);

    return (
        <div>
            <canvas
                ref={canvasRef}
                height="500px"
                width="800px"
                style={{ border: "1px solid black" }}
            ></canvas>
            {children(sortState)}
        </div>
    );
}

export default React.memo(VisualizationCanvas);
