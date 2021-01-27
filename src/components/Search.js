import React from 'react';


const Search = (props) => {
    return (
        <div className='search-bar'>
        <form action='/'>
          <input 	type="text" 
                          name="search" 
                          value={props.value}
				          id="submit" 
                          placeholder="search flix..."
                          onChange={(e)=> props.setSearchValue(e.target.value)} />
          <input type="submit" id="submit"/>
        </form>
      </div>
    )
}
export default Search;