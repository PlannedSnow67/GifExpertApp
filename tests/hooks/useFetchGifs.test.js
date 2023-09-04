import { describe, expect, test } from '@jest/globals';
import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('test from hooks useFetchGifs', () => {

    test('should return initial state', async () => {

        const { result } = renderHook(() => useFetchGifs('One Piece'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBe(true);

    });

    test('should return an array of images and isLoading has to be false', async () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        await waitFor(
            () => expect(result.current.images.length).toBe(10)
        );

        expect(result.current.isLoading).toBe(false);
        expect(result.current.images.length).toBe(10)
    })

});