import {useState} from 'react'
import './App.css'
import packagist from './services/packagist'
import logo from './composer.png'

function App() {
  const [query, setQuery] = useState('')
  const [packages, setPackages] = useState([])
  const searchPackages = q => {
    packagist.search(q)
      .then(r => setPackages(r))
      .catch(() => alert('Non!'))
  }
  return (
    <div className="App">
      <div><img src={logo} alt="Logo" /></div>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
      <button onClick={() => searchPackages(query)}>Search</button>
      <div>
        {packages.map(p => <p key={p.name}>{p.name}</p>)}
      </div>
    </div>
  );
}

export default App;
