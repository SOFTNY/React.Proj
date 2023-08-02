import React from 'react'

//css
import '../../css/Search.css';

const Search = ({setSearch, setPageNumber}) => {
  return <form className='d-flex justify-content-center gap-4 mb-5'>
    <input onChange={e=>{
      setPageNumber(1);
      setSearch(e.target.value);
    }} type='text' placeholder='Search' className='input' />
    <button 
    onClick={e=>{
      e.preventDefault();
      }} 
    className='btn btn-primary fs-5'>Search</button>
  </form>
};

export default Search