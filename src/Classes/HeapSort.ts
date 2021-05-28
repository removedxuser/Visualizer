import { NodeType } from "../interfaces/genericInterfaces";
import Visualizer from "./Visualizer";
import * as helperFns from "../helpers/helperFunctions";

export class HeapSort extends Visualizer {
    private arr: Array<number> = [];

    constructor(nodeCount: number, canvas: HTMLCanvasElement, state?: Array<number>) {
        super(nodeCount, canvas, state);
        this.arr = super.getState().slice();
        this.arr.unshift(-1);
        this.sort();
    }

    private pNode(i: number) {
        return i / 2;
    }

    private lcNode(i: number) {
        return i * 2;
    }

    private rcNode(i: number) {
        return i * 2 + 1;
    }

    // size = size of array, i = index of node to run heapify on its branch
    private heapify<T>(arr: Array<T>, size: number, i: number) {
        let largestNode = i;
        const [lc, rc] = [this.lcNode(largestNode), this.rcNode(largestNode)];

        if (lc < size && arr[lc] > arr[largestNode]) {
            largestNode = lc;
        }

        if (rc < size && arr[rc] > arr[largestNode]) {
            largestNode = rc;
        }

        super.addAnimationFrame({
            nodes: this.arr.slice(0),
            [NodeType.comparing]: [largestNode, i],
        });
        if (largestNode !== i) {
            super.addAnimationFrame({
                nodes: this.arr.slice(0),
                [NodeType.swapping]: [largestNode, i],
            });
            helperFns.swap(largestNode, i, arr);
            this.heapify(arr, size, largestNode);
        }
    }

    public sort() {
        const largestNonLeafNode = Math.floor(this.arr.length / 2);
        for (let i = largestNonLeafNode; i > 0; i--) {
            this.heapify(this.arr, this.arr.length, i);
        }

        for (let i = 1; i < this.arr.length; i++) {
            helperFns.swap(1, this.arr.length - i, this.arr);
            this.heapify(this.arr, this.arr.length - i, 1);
        }
        super.addAnimationFrame({
            nodes: this.arr.slice(0),
            [NodeType.sorted]: this.arr.map((_, i) => i),
        });
    }
}
