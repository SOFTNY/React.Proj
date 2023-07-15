import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';


//css
import '../css/ItQuiz.css';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', 
    headerName: 'Title', 
    width: 200,
    renderCell : (params) => {
      return (
        <div className='titleList'>
          <img className="titleListImg" src={params.row.title_img} alt="" />
          {params.row.title}
        </div>
      )
    },
  },
  { field: 'content', headerName: 'Content', width: 300 },
  {
    // 짧은 글로 볼 수 있는 공부
    field: 'learn',
    headerName: 'Learn',
    width: 120,
    renderLink: (params) => {
      return (
        <button className='startBtn' value={params.row.learn_title}>
        </button>
      );
    },
  },
  {
    //시작 버튼
    field: 'start',
    headerName: 'Start',
    width: 120,
    renderButton: (params) => {
      return (
        <button className='startBtn'>
          Start
        </button>
      );
    },
  }
];

const rows = [
  { id: 1,
    title: 'Snow',
    title_img : 'https://jpassets.jobplanet.co.kr/production/uploads/material/media/4826/best_it_10.jpg',
    content: 'Jon',
    learn_title : 'Learn'
  },
  
  { id: 2,
    title: 'Lannister',
    title_img : 'https://jpassets.jobplanet.co.kr/production/uploads/material/media/4826/best_it_10.jpg',
    content: 'Cersei'
  },
  
  { id: 3, 
    title: 'Lannister',
    title_img : 'https://jpassets.jobplanet.co.kr/production/uploads/material/media/4826/best_it_10.jpg',
    content: 'Jaime'
  },
  
  { id: 4, 
    title: 'Stark',
    title_img : 'https://jpassets.jobplanet.co.kr/production/uploads/material/media/4826/best_it_10.jpg', 
    content: 'Arya'
  },
  
  { 
    id: 5, 
    title: 'Targaryen',
    title_img : 'https://jpassets.jobplanet.co.kr/production/uploads/material/media/4826/best_it_10.jpg', 
    content: 'Daenerys'
  },
  
  { id: 6,
    title: 'Melisandre',
    title_img : 'https://jpassets.jobplanet.co.kr/production/uploads/material/media/4826/best_it_10.jpg',
    content: null
  },
  
  { id: 7, 
    title: 'Clifford',
    title_img : 'https://jpassets.jobplanet.co.kr/production/uploads/material/media/4826/best_it_10.jpg', 
    content: 'Ferrara'
  },
  
  { id: 8,
    title: 'Frances',
    title_img : 'https://jpassets.jobplanet.co.kr/production/uploads/material/media/4826/best_it_10.jpg',
    content: 'Rossini'
  },
  
  { id: 9, 
    title: 'Roxie',
    title_img : 'https://jpassets.jobplanet.co.kr/production/uploads/material/media/4826/best_it_10.jpg',
    content: 'Harvey'
  },
];



const handleButtonClick = async (event) => {
  try{
    const response = await fetch('http://localhost:8080/ItQuiz',{
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({}),
    });
    if(response.status == 404){
      alert("해당 페이지를 찾을 수 없습니다.");
    }
    else if (response.ok) {
      const data = await response.json();
      const access = JSON.parse(JSON.stringify(data)).accessToken;
      localStorage.setItem('accessToken', access);
      window.location.href = "/";
    }
  }catch (error){
    console.log(error);
  }
};


export default function ItQuiz() {
  return (
    <div className='Table_Box'>
      <DataGrid
        rows={rows}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={5}
        rowPerPageOptions={[5]}
      />
    </div>
  );
}