
const Search = (props) => {

    return (
        <div>
            <input
                type="text"
                value={props.searchTerm}
                onChange={(e) => props.setSearchTerm(e.target.value)}
                placeholder="Search for a country..."
            />
        </div>
    );
};

export default Search;
