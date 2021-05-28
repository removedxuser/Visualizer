import { BubbleSort } from "../Classes/BubbleSort";
import { HeapSort } from "../Classes/HeapSort";
import { InsertionSort } from "../Classes/InsertionSort";
import { MergeSort } from "../Classes/MergeSort";

export type TsortClasses = {
    MergeSort: MergeSort;
    BubbleSort: BubbleSort;
    InsertionSort: InsertionSort;
    HeapSort: HeapSort;
};

export enum SortTypes {
    MergeSort = "MergeSort",
    BubbleSort = "BubbleSort",
    InsertionSort = "InsertionSort",
    HeapSort = "HeapSort",
}

export const sortClasses = {
    MergeSort: MergeSort,
    BubbleSort: BubbleSort,
    InsertionSort: InsertionSort,
    HeapSort: HeapSort,
};

export type unionSortClasses = ValueOf<TsortClasses>;

type ValueOf<T> = T[keyof T];

export enum NodeType {
    visiting = "visiting",
    sorted = "sorted",
    comparing = "comparing",
    swapping = "swapping",
    default = "default",
}

export const NodeTypeColorCodes = {
    [NodeType.visiting]: "#ff8303",
    [NodeType.sorted]: "rgba(89, 181, 123, 0.2)",
    [NodeType.comparing]: "#564a4a",
    [NodeType.swapping]: "white",
    [NodeType.default]: "rgba(89, 181, 123, 0.8)",
};

export interface AnimationFrame {
    nodes: Array<number>;
    comparing?: Array<number>;
    sorted?: Array<number>;
    swapping?: Array<number>;
}
