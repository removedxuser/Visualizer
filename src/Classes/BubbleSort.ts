import { NodeType } from "../interfaces/genericInterfaces";
import Visualizer from "./Visualizer";
import * as helperFns from "../helpers/helperFunctions";

export class BubbleSort extends Visualizer {
    arr: Array<number> = [];

    constructor(nodeCount: number, canvas: HTMLCanvasElement, waitTime: number) {
        super(nodeCount, canvas, waitTime);
        this.arr = super.getState().slice();
        this.sort();
    }

    private sort() {
        const arr = this.arr;
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                super.addAnimationFrame({ nodes: arr.slice(0), [NodeType.comparing]: [j, j + 1] });
                if (arr[j] > arr[j + 1]) {
                    this.addAnimationFrame({
                        nodes: arr.slice(0),
                        [NodeType.swapping]: [j, j + 1],
                    });
                    helperFns.swap(j, j + 1, arr);
                }
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
