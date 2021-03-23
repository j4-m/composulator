const SearchResult = ({ name, description, clickHandler }) => {
    return (
        <div onClick={() => clickHandler(name)}>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

export default SearchResult