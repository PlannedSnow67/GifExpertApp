import { useState } from "react";
import PropTypes from "prop-types";
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue("");
    }
    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input
                type="text"
                placeholder="Search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </form>
    );
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
