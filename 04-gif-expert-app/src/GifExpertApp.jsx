import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([...categories, newCategory])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map((category, index) => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
