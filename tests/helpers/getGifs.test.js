import { describe, expect, test } from '@testing-library/react';
import getGifs from '../../src/helpers/getGifs';

describe('test from getGifs', () => {

    test('should return an array from endpoint', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
    });

});