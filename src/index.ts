import { adjectives } from "./adjectives";
import { animals } from "./animals";

const random = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export function generate(divider = ' '): string {
    const adj = random(adjectives);
    const animal = random(animals);

    return `${adj}${divider}${animal}`
}

