import { Vector2 } from "./util/Vector";
import * as Math from "./util/Calc";
import { getRing4 } from "./util/ring";

interface dijkstraConfig {
    isBlockedCallback?: IsBlockedCallback;
    topology: "four" | "eight";
}

type IsBlockedCallback = (v: Vector2) => boolean;

export class Dijkstra {
    readonly topology: "four" | "eight";
    private readonly isBlocked?: IsBlockedCallback;

    constructor(config: dijkstraConfig) {
        this.isBlocked = config.isBlockedCallback;
        this.topology = config.topology;
    }

    private getNeighbors(pos: Vector2): Vector2[] {
        const neighbors = getRing4(pos.x, pos.y, 1);

        if (this.topology === "eight") {
            neighbors.push({ x: pos.x + 1, y: pos.y - 1 });
            neighbors.push({ x: pos.x - 1, y: pos.y - 1 });
            neighbors.push({ x: pos.x - 1, y: pos.y + 1 });
            neighbors.push({ x: pos.x + 1, y: pos.y + 1 });
        }

        return neighbors;
    }

    /**
     * Compute processes the distances between start and end goals.
     * @param initial Vector2 - starting point
     * @param goal Vector2 - ending point
     */
    compute(initial: Vector2, goal: Vector2): Vector2[] | undefined {
        //unpackage config.
        const cameFrom = new Map<string, string>();
        const processed: Set<string> = new Set();
        const processing: Vector2[] = [initial];
        cameFrom.set(`${initial.x}:${initial.y}`, "");

        while (processing.length !== 0) {
            //shift the last node off the array.
            const current = processing.shift()!;

            //short circut
            if (processed.has(`${current.x}:${current.y}`)) {
                continue;
            } else {
                processed.add(`${current.x}:${current.y}`);
            }

            // check to see if the space is where you need to be. If so, exit loop.
            if (Math.Vector.areEqual(current, goal)) {
                let curStr = `${current.x}:${current.y}`;
                const totalPath: Vector2[] = [current];

                while (cameFrom.get(curStr)) {
                    const prevStr = cameFrom.get(curStr)!;
                    const [x, y] = prevStr.split(":");
                    curStr = prevStr;
                    totalPath.unshift({
                        x: Number.parseInt(x),
                        y: Number.parseInt(y),
                    });
                }

                return totalPath;
            }

            let neighbors = this.getNeighbors(current);

            if (this.isBlocked) {
                neighbors = neighbors.filter((v) => this.isBlocked!(v) === false);
            }

            for (let n of neighbors) {
                processing.push(n);
                if (cameFrom.has(`${n.x}:${n.y}`) === false) {
                    cameFrom.set(`${n.x}:${n.y}`, `${current!.x}:${current!.y}`);
                }
            }
        }
        return undefined;
    }
}
