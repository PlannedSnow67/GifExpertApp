import { describe, expect, test } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Test in AddCategory', () => {

    test('should change the value from the box text', () => {
        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Oasis' } });
        expect(input.value).toBe('Oasis');
    });


    test('Should call onNewCategory if the input has a value', () => {
        const inputValue = 'Oasis';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        expect(input.value).toBe('');
        // screen.debug();

        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('Should not call onNewCategory if the input is empty', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
})