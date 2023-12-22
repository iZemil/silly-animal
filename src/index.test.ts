import { generate } from '.';

describe('generate', () => {
    test(`no errors`, () => {
        for (const _ of Array.from({ length: 1_000_000 })) {
            const name = generate();

            expect(name.includes('undefined')).toBe(false);
        }
    });
});
