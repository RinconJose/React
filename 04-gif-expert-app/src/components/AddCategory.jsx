import { useState } from 'react';

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
        onNewCategory(cleanValue)
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmitForm}>
            <input
                type="text"
                placeholder="Buscar gift"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
