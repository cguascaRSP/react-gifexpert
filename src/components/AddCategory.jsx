import { useState } from "react"
export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setinputValue] = useState('');

    const onChangeInput = (e) => {
        setinputValue(e.target.value);
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <=1) return;
        onNewCategory( inputValue.trim() )
        setinputValue('')
    } 

    return (
        <form onSubmit={ onSubmitForm }>
            <input 
                type="text" 
                placeholder="Buscar gifs" 
                value={ inputValue } 
                onChange={ onChangeInput }
            />
        </form>
    )
}
