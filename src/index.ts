import { adjectives, animals } from './dicts';

const randomItem = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

function generate(divider = ' '): string {
    const adj = randomItem(adjectives);
    const animal = randomItem(animals);

    return `${adj}${divider}${animal}`;
}

export { adjectives, animals, generate, randomItem };
