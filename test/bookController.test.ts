import { describe, test, expect} from 'vitest';
import {sum} from '../src/controllers/bookController';

describe ('sum', () => {

    test('sum of numbers expected', async () => {
        expect(sum(1, 4)).toBe(5);
    })

})