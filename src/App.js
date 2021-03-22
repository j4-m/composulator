import {useState} from 'react'
import './App.css'
import packagist from './services/packagist'
import debounce from 'lodash.debounce'

function App() {
  const [query, setQuery] = useState('')
  const [test, setTest] = useState('arse')
  const search = () => { packagist.search('hello') }
  return (
    <div className="App">
      <input type="text" value={query} onChange={e => debounce(() => setQuery(e.target.value), 500)}/>
    </div>
  );
}

export default App;
