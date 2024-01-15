import { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        const cleanValue = inputValue.trim();
        if(cleanValue.length <= 1) return;
        // setCategories( categories => [inputValue, ...categories] )
        setInputValue('')
        onNewCategory(cleanValue)
    }

    return (
        <form onSubmit={onSubmitForm} aria-label='form'>
            <input
                type="text"
                placeholder="Buscar gift"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}