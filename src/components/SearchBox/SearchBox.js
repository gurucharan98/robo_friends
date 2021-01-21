import React from 'react';

const SearchBox =({searchChange})=>{
    return(
        <div className="pa2">
        <input
          className="pa3 ba b--red bg-lightest-blue"
          type="search"
          placeholder="Search r0bots"
          onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox;