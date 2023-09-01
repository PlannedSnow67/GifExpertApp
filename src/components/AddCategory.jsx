import { useState } from "react";
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue("");
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </form>
    );
}
