import {useState} from 'react'
import './App.css'
import packagist from './services/packagist'
import logo from './composer.png'
import SearchResult from './search/SearchResult'

function App() {
  const [query, setQuery] = useState('')
  const [packages, setPackages] = useState([])
  const selectPackage = (pkg) => {
    console.log(pkg)
  }
  const handleSearchButton = q => {
    packagist.search(q).then(r => setPackages(r))
  }
  return (
    <div className="App">
      <div><img src={logo} alt="Logo" /></div>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
      <button onClick={() => handleSearchButton(query)}>Search</button>
      <div>
        {packages.map(p => { 
          return (
            <SearchResult 
              key={p.name}
              name={p.name}
              description={p.description}
              clickHandler={pkg => selectPackage(pkg)}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
