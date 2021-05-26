export function sleep(ms: number): Promise<ReturnType<typeof setTimeout>> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function swap<T>(a: number, b: number, arr: Array<T>): void {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
}

export function isEmpty<T>(value: T): boolean {
    if (Array.isArray(value) && value.length > 0) {
        return false;
    }
    return true;
}

export function generateNodes(nodeCount: number, upperRange: number): Array<number> {
    const nodes: Array<number> = [...new Array(nodeCount)].map((_, i) => {
        const barHeight = Math.floor(Math.random() * upperRange);
        return barHeight;
    });
    return nodes;
}

export function getControlsById(...args: Array<string>) {
    const ret: { [id: string]: HTMLButtonElement | HTMLInputElement } = {};
    args.forEach((id) => {
        const el = document.getElementById(id)! as HTMLInputElement | HTMLButtonElement;
        ret[id] = el;
    });
    return ret;
}
