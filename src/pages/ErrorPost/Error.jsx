//import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

//gi
import { DataGrid } from '@mui/x-data-grid';

//bootstrap
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css'

//css
import '../../css/Error.css';

//pagination
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}


const ErrorTable = ({data}) => {

  const [postList, setPostList] = useState([]);


  // DB에서 게시글 불러오기
 // DB에서 게시글 불러오기
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch('http://localhost:8080/post', {
          method: 'GET'
        });
        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setPostList(result);
        }
        
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  },[]);

  const columns = [
    { field: 'idx', headerName: 'No', width: 70 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'writer', headerName: 'Writer', width: 200 },
    { field: 'postDate', headerName: 'Date', width: 200 }
  ];


  return (
    <>
      <div className='SearchBtn'>
        <input type='search' className='search'/>
        <button className='write'>작성하기</button>
      </div>
      <div style={{clear:'both'}}></div>

      <div className='Table_Box'>
      <DataGrid
        rows={postList}
        columns={columns}
        disableRowSelectionOnClick
        getRowId={(row) => row.idx}
        pageSize={5}
        rowPerPageOptions={[5]}
      />
    </div>
    </>


    
  );
}

export default ErrorTable;