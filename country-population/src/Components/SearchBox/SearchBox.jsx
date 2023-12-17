import React from 'react'

const SearchBox = (props) => {
    
  return (
    <div>
      <div className='col col-sm-4'>
        <input placeholder='search movies' value={props.value} onChange={(e)=>(props.setSearch(e.target.value))}></input>
      </div>
    </div>
  )
}

export default SearchBox
