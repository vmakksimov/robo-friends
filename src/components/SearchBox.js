import React from "react";


const SearchBox = ({searchField}) => {
    console.log('SearchBox')
    return (
        <div className="pa2">
            <input
                aria-label="Search Robots"
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                onChange={searchField}
                >
    
            </input>
        </div>
    )
}

export default SearchBox;