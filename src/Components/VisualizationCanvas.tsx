import * as React from "react";
import { SortTypes, unionSortClasses, sortClasses } from "../interfaces/genericInterfaces";

const { useEffect, useState, useRef } = React;

interface Props<T> {
    children: (instance: T | null) => React.ReactNode;
    sortType: SortTypes;
    initialNodes?: number;
}

function VisualizationCanvas<T>({ children, sortType, initialNodes = 100 }: Props<T>) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [sortState, setSortState] = useState<unionSortClasses | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const sortClass = new sortClasses[sortType](initialNodes, canvasRef.current);
            sortClass.initialize();
            setSortState(sortClass);
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <canvas
                ref={canvasRef}
                height="400px"
                width="800px"
                style={{ border: "1px solid lightgrey" }}
            ></canvas>
            <div>{children(sortState as unknown as T)}</div>
        </>
    );
}

export default VisualizationCanvas;
