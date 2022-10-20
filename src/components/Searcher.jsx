import { useState } from "react"

export const Searcher = ({setCategories}) => {
    const [ search, setSearch ] = useState('');

    const onInputChange = ({target}) =>{
        const value = target.value;
        setSearch(value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if( search.trim().length <= 1 ) return;
        setCategories( categories => [ search, ...categories ]);
        setSearch('');
    }
    return (
        <div>
            <h3>Searcher</h3>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Buscar"
                    value={search}
                    onChange={ onInputChange }
                />
            </form>
        </div>
    )
}