import { NodeType } from "../interfaces/genericInterfaces";
import Visualizer from "./Visualizer";

export class MergeSort extends Visualizer {
    arr: Array<number> = [];

    constructor(nodeCount: number, canvas: HTMLCanvasElement, state?: Array<number>) {
        super(nodeCount, canvas, state);
        this.arr = super.getState().slice();
        this.sort();
    }

    private merge(arr: Array<number>, lo: number, mid: number, hi: number) {
        const lArr: Array<number> = [],
            rArr: Array<number> = [];

        for (let i = lo; i <= mid; i++) {
            lArr.push(arr[i]);
        }
        for (let j = mid + 1; j <= hi; j++) {
            rArr.push(arr[j]);
        }

        let i = 0,
            j = 0,
            k = lo;

        while (i < lArr.length && j < rArr.length) {
            if (lArr[i] < rArr[j]) {
                super.addAnimationFrame({
                    nodes: arr.slice(0),
                    [NodeType.comparing]: [lo + i, mid + 1 + j],
                });
                arr[k] = lArr[i];
                i++;
            } else {
                super.addAnimationFrame({
                    nodes: arr.slice(0),
                    [NodeType.comparing]: [lo + i, mid + 1 + j],
                });
                arr[k] = rArr[j];
                j++;
            }
            k++;
        }
        while (i < lArr.length) {
            super.addAnimationFrame({ nodes: arr.slice(0), [NodeType.comparing]: [lo + i] });
            arr[k] = lArr[i];
            i++;
            k++;
        }
        while (j < rArr.length) {
            super.addAnimationFrame({ nodes: arr.slice(0), [NodeType.comparing]: [mid + j + 1] });
            arr[k] = rArr[j];
            j++;
            k++;
        }
    }

    private mergeSort(arr: Array<number>, lo: number, hi: number) {
        if (lo === hi) return;
        let mid = Math.floor((lo + hi) / 2);
        this.mergeSort(arr, lo, mid);
        this.mergeSort(arr, mid + 1, hi);
        this.merge(arr, lo, mid, hi);
    }

    private sort() {
        const toSort = this.arr;
        this.mergeSort(toSort, 0, toSort.length - 1);
        super.addAnimationFrame({
            nodes: toSort.slice(0),
            [NodeType.sorted]: toSort.map((_, i) => i),
        });
    }

    public reinitialize() {
        super.clearAnimationFrames();
        this.arr = super.getState().slice();
        this.sort();
    }
}
