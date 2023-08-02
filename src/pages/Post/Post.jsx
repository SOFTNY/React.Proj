import React, { useState, useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Filters from './P-Filters';
import Cards from './P-Cards';
import Pagination from './P-Pagination';
import Search from './P-Search';

//css
import '../../css/Post.css';


function Post(){
  
  //페이지번호
  let [pageNumber, setPageNumber] = useState(1);
  
  //검색구성요소
  let [search, setSearch] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData

  //api
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      console.log(data.results);
    })();
  }, [api]);
  
  return (
    <div className='post_box'>
      <h1 className='text-center'>with colleagues, <span className='text-primary'>Communication</span> </h1>
      <Search setPageNumber={setPageNumber}  setSearch={setSearch} />
      <div className='container'>
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  )
}

export default Post;