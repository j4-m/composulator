import {useState} from 'react'

import packagist from '../services/packagist'

import SearchResults from '../components/search/SearchResults'

import logo from '../composer.png'

const Search = ({q = null, packageSelectedHandler, queryChangedHandler}) => {
  const [query, setQuery] = useState('')
  const [packages, setPackages] = useState([])

  const handleSearchButton = q => {
    packagist.search(q).then(r => setPackages(r))
  }

  return (
    <>
      <div><img src={logo} alt="Logo" /></div>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)}/>
      <button onClick={() => handleSearchButton(query)}>Search</button>
      <div>
        <SearchResults results={packages} clickHandler={pkg => packageSelectedHandler(pkg)} />
      </div>
    </>
  )
}

export default Search;