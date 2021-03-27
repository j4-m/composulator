const SearchResults = ({ results, clickHandler }) => {
  return (
    <ul className="search-results">
      {results.map(r => (
        <li key={r.name} onClick={() => clickHandler(r.name)}>
          <h2>{r.name}</h2>
          <p>{r.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default SearchResults