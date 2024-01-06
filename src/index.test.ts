import { adjectives, animals, generate, randomItem } from '.';

describe('generate', () => {
    test(`no errors`, () => {
        for (const _ of Array.from({ length: 1_000_000 })) {
            const name = generate();

            expect(name.includes('undefined')).toBe(false);
        }
    });
});

describe('randomItem', () => {
    test(`no errors with adjectives`, () => {
        for (const _ of Array.from({ length: 10_000 })) {
            const adj = randomItem(adjectives);

            expect(adj).toBeDefined();
        }
    });

    test(`no errors with animals`, () => {
        for (const _ of Array.from({ length: 10_000 })) {
            const animal = randomItem(animals);

            expect(animal).toBeDefined();
        }
    });
});
