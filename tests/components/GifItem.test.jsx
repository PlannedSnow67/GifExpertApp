import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { GIfItem } from '../../src/components/GIfItem';

describe('GifItem testing', () => {

    const title = 'Samurai X';
    const url = 'https://localhost/algo.jpg';

    test('snapshot checking', () => {
        // make snapshot test
        const { container } = render(<GIfItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('should show image with url and alt correct', async () => {
        render(<GIfItem title={title} url={url} />)
        // screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('should show title in the component', () => {
        render(<GIfItem title={title} url={url} />);
        const titleElement = screen.getByText(title);
        expect(titleElement).toBeTruthy();
    })
})