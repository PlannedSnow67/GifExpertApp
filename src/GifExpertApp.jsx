import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Samurai X']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }


    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory onNewCategory={onAddCategory} />
            {/* GifGrid */}
            {categories.map((category) => {
                return <GifGrid key={category} category={category} />
            })}
        </>
    )
}
