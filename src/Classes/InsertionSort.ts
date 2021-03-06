import Visualizer from "./Visualizer";
import * as helperFns from "../helpers/helperFunctions";
import { NodeType } from "../interfaces/genericInterfaces";

export class InsertionSort extends Visualizer {
    arr: Array<number> = [];

    constructor(nodeCount: number, canvas: HTMLCanvasElement, waitTime: number) {
        super(nodeCount, canvas, waitTime);
        this.arr = super.getState().slice();
        this.sort();
    }

    private sort() {
        const arr = this.state.slice(0);
        for (let i = 1; i < arr.length; i++) {
            let k = i;
            while (arr[k] < arr[k - 1]) {
                this.addAnimationFrame({ nodes: arr.slice(0), [NodeType.comparing]: [k, k - 1] });
                this.addAnimationFrame({ nodes: arr.slice(0), [NodeType.swapping]: [k, k - 1] });
                helperFns.swap(k, k - 1, arr);
                k--;
            }
        }
        super.addAnimationFrame({ nodes: arr.slice(0), [NodeType.sorted]: arr.map((_, i) => i) });
        return this;
    }

    public reinitialize() {
        super.clearAnimationFrames();
        this.arr = super.getState().slice();
        this.sort();
    }
}
