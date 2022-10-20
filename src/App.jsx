import { useState } from 'react'
import './App.css'
import { Searcher } from './components/Searcher';

function App() {
  const [ categories, setCategories ] = useState([]);

  console.log(categories);
  const onAddCategorie = ({ target }) => {
    
    const value = target.value;
    setCategories([value, ...categories]);
  }

  return (
    <div className="App">
      <h1>Gif-project</h1>

      <Searcher setCategories={ setCategories } />
      <ol>
        {categories.map( category => {
          return <li key={ category } >{ category }</li>
        })}
      </ol>
    </div>
  )
}

export default App
