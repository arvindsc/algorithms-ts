
import { MathWorld } from "../src/mathfworld";
import * as using from 'jasmine-data-provider';

describe('MathWorld', () => {
    using([
        { data: 0, expected: 1 },
        { data: 1, expected: 1 },
        { data: 2, expected: 2 },
        { data: 3, expected: 6 },
        { data: 10, expected: 3628800 },
    ], (params) => {
        it('should validate the factorial of a number', () => {
            expect(MathWorld.factorial(params.data)).toBe(params.expected);
        })
    })

})