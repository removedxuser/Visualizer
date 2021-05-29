import {
    AnimationFrame,
    ComputationalTrackerNode,
    NodeType,
    NodeTypeColorCodes,
} from "../interfaces/genericInterfaces";
import * as helperFns from "../helpers/helperFunctions";

export default class Visualizer {
    private nodeCount: number;
    private canvasHeight: number;
    private canvasWidth: number;
    private cx: CanvasRenderingContext2D;
    private interval: ReturnType<typeof setInterval> | null = null;
    private trackerIndex: number = 0;
    private waitTime: number = 0;
    private animationFrames: Array<AnimationFrame> = [];
    public isPaused: boolean = false;
    protected state: Array<number>;
    private swapCount = 0;
    private comparisonCount = 0;

    constructor(nodeCount: number, canvas: HTMLCanvasElement, waitTime?: number) {
        this.nodeCount = nodeCount;
        this.canvasHeight = canvas.height;
        this.canvasWidth = canvas.width;
        this.cx = canvas.getContext("2d") as CanvasRenderingContext2D;
        this.state = this.generateNodes();
        if (waitTime) {
            this.waitTime = waitTime;
        }
    }

    private generateNodes() {
        const nodes: Array<number> = [...new Array(this.nodeCount)].map((_, i) => {
            const barHeight = Math.floor(Math.random() * this.canvasHeight);
            return barHeight;
        });
        return nodes;
    }

    private getAnimationFrameType({
        currIdx,
        comparing,
        sorted,
        swapping,
    }: Omit<AnimationFrame & { currIdx: number }, "nodes">): NodeType {
        if (!helperFns.isEmpty(comparing) && comparing?.includes(currIdx)) {
            this.updateComparison();
            return NodeType.comparing;
        }
        if (!helperFns.isEmpty(sorted) && sorted?.includes(currIdx)) {
            return NodeType.sorted;
        }
        if (!helperFns.isEmpty(swapping) && swapping?.includes(currIdx)) {
            this.updateSwap();
            return NodeType.swapping;
        }
        return NodeType.default;
    }

    private drawNode(node: {
        xPos: number;
        yPos: number;
        width: number;
        height: number;
        type: NodeType;
    }) {
        const { xPos, yPos, width, height, type } = node;
        this.cx.beginPath();
        this.cx.fillStyle = type ? NodeTypeColorCodes[type] : NodeTypeColorCodes[NodeType.default];
        this.cx.fillRect(xPos, yPos, width, height);
    }

    private drawNodes(frame: AnimationFrame) {
        const { nodes, ...rest } = frame;
        this.clear();
        const eachBarWidth = (this.canvasWidth - this.nodeCount) / this.nodeCount;
        for (let i = 0; i < nodes.length; i++) {
            this.drawNode({
                xPos: i * eachBarWidth + i,
                yPos: 0,
                width: eachBarWidth,
                height: nodes[i],
                type: this.getAnimationFrameType({ currIdx: i, ...rest }),
            });
        }
    }

    protected addAnimationFrame(frame: AnimationFrame) {
        this.animationFrames.push(frame);
    }

    private animate() {
        this.interval = setInterval(() => {
            const frame = this.animationFrames[this.trackerIndex];
            this.drawNodes(frame);
            this.trackerIndex++;
            if (this.trackerIndex === this.animationFrames.length) {
                clearInterval(this.interval!);
            }
        }, this.waitTime);
        return this;
    }

    public start() {
        this.reset();
        this.animate();
    }

    public getState(): Array<number> {
        return this.state;
    }

    public initialize() {
        this.clear();
        this.drawNodes({ nodes: this.state });
        return this;
    }

    public clear() {
        this.cx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        return this;
    }

    public updateSwap() {
        this.swapCount++;
        const swapNode = document.getElementById(ComputationalTrackerNode.Swap);
        if (swapNode) {
            swapNode.innerHTML = this.swapCount.toString();
        }
    }

    public updateComparison() {
        this.comparisonCount++;
        const comparisonNode = document.getElementById(ComputationalTrackerNode.Comparison);
        if (comparisonNode) {
            comparisonNode.innerHTML = this.comparisonCount.toString();
        }
    }

    public pause() {
        this.isPaused = true;
        clearInterval(this.interval!);
    }

    public resume() {
        this.isPaused = false;
        this.animate();
    }

    public reset() {
        clearInterval(this.interval!);
        this.trackerIndex = 0;
    }

    public setWait(wait: number) {
        this.waitTime = wait;
        if (!this.isPaused) {
            clearInterval(this.interval!);
            this.trackerIndex && this.animate();
        }
    }

    public setSize(size: number) {
        this.reset();
        this.nodeCount = size;
        this.state = this.generateNodes();
        this.initialize();
    }

    public clearAnimationFrames() {
        this.animationFrames = [];
    }
}
