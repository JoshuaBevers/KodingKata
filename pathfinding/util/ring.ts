import { Vector2 } from "./Vector";

export function getRing4(
    originX: number,
    originY: number,
    range: number
): Vector2[] {
    if (range === 0) {
        return [
            {
                x: originX,
                y: originY,
            },
        ];
    }
    const ring: Vector2[] = [];

    const maxX = originX + range;
    const minX = originX - range;
    const maxY = originY + range;
    const minY = originY - range;

    // Top right arc
    for (let x = maxX, y = originY; x > originX; x--, y--) {
        ring.push({ x, y });
    }

    // Top left arc
    for (let x = originX, y = minY; x > minX; x--, y++) {
        ring.push({ x, y });
    }

    // Bottom left arc
    for (let x = minX, y = originY; x < originX; x++, y++) {
        ring.push({ x, y });
    }

    // Bottom right arc
    for (let x = originX, y = maxY; x < maxX; x++, y--) {
        ring.push({ x, y });
    }

    return ring;
}