import { NodeType } from "../interfaces/genericInterfaces";
import Visualizer from "./Visualizer";
import * as helperFns from "../helpers/helperFunctions";

export class HeapSort {
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // constructor(nodeCount: number, canvasId: string, state?: Array<number>) {
    //     super(nodeCount, canvasId, state);
    //     this.sort();
    // }

    // [1,2,3,4,10,6,7,8,9,5];
    /* 
                            1
                    2               3
                4       10       6       7
             8    9   5
    */

    private parentNode<T>(arr: Array<T>, index: number): { node: T | undefined; index: number } {
        return { node: arr[Math.floor((index + 1) / 2)], index: Math.floor(index / 2) };
    }

    private rightChild<T>(arr: Array<T>, index: number): { node: T | undefined; index: number } {
        return { node: arr[index * 2 + 2], index: index * 2 + 2 };
    }

    private leftChild<T>(arr: Array<T>, index: number): { node: T | undefined; index: number } {
        return { node: arr[index * 2 + 1], index: index * 2 + 1 };
    }

    private buildHeapInstance<T>(arr: Array<T>, index: number): void {
        let largestNodeIndex = index;
        const [lc, rc] = [this.leftChild(arr, index), this.rightChild(arr, index)];
        if (lc.node && lc.node > arr[largestNodeIndex]) {
            largestNodeIndex = lc.index;
        }
        debugger;
        if (rc.node && rc.node > arr[largestNodeIndex]) {
            largestNodeIndex = rc.index;
        }
        if (largestNodeIndex !== index) {
            helperFns.swap<T>(index, largestNodeIndex, arr);
        }
    }

    // private heapify<T>(arr: Array<T>, nodeIndex: number): Array<T> {}

    public sort() {
        this.buildHeapInstance(this.arr, 4);
    }
}
