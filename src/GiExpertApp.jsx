import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {
    const [ categories, setCategories ] = useState([ ]);
    
    const onAddCategory = ( category ) => {
        if( categories.includes(category) ) return
        setCategories([...categories, category]);
    }

    return (
    <>
        <h1>GiExpertApp</h1>
        <AddCategory  
            onNewCategory = { onAddCategory }
        />
        { categories.map( (category) => (
            <GifGrid key={ category } category= { category }/>
        ))}
    </>
    )
}

export default GifExpertApp; 