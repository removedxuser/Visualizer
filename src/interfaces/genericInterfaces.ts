import { BubbleSort } from "../Classes/BubbleSort";
import { InsertionSort } from "../Classes/InsertionSort";
import { MergeSort } from "../Classes/MergeSort";

export type TsortClasses = {
    MergeSort: MergeSort;
    BubbleSort: BubbleSort;
    InsertionSort: InsertionSort;
};

export enum SortTypes {
    MergeSort = "MergeSort",
    BubbleSort = "BubbleSort",
    InsertionSort = "InsertionSort",
}

export const sortClasses = {
    MergeSort: MergeSort,
    BubbleSort: BubbleSort,
    InsertionSort: InsertionSort,
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
    [NodeType.sorted]: "#81b214",
    [NodeType.comparing]: "#583d72",
    [NodeType.swapping]: "#ffaaa7",
    [NodeType.default]: "#AEC6CF",
};

export interface AnimationFrame {
    nodes: Array<number>;
    comparing?: Array<number>;
    sorted?: Array<number>;
    swapping?: Array<number>;
}
