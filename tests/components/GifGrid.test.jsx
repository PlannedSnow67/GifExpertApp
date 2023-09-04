import { describe, test, expect } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test from GifGrid', () => {
    const category = 'Oasis';

    test('should show the loading correctly', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);
        // screen.debug();
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
    });

    test('should show items when images are loaded', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Liam Gallagher'
        }];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);
        expect(screen.getAllByRole('img').length).toBe(gifs.length);
    });
})