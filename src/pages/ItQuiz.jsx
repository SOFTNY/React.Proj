import * as React from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

//css
import '../css/ItQuiz.css';

function ItQuiz() {

const columns = [
  { field: 'id', headerName: 'No', width: 90 },
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
  { field: 'content', headerName: 'Content', width: 325 },
  {
    // 짧은 글로 볼 수 있게 페이지 연결
    field: 'learn',
    headerName: 'Learn',
    width: 120,
    renderCell : (params) => {

      return (
          <Link key={params.id} to={'/ItQuiz/' + params.id}>
            <button className="learnBtn">
            {params.row.learn}
            </button>
          </Link>
      )
    },
  },
  {
    //퀴즈 시작 버튼
    field: 'start',
    headerName: 'Start',
    width: 120,
    renderCell : (params) => {
      return (
            <Link key={params.id} to={'/ItQuiz/' + params.id}>
              <button className="startBtn">
              {params.row.start}
              </button>
            </Link>
      )
    },
  }
];

const rows = [
  { id: 1,
    title: 'ITe Quiz 1',
    title_img : 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCitkU%2FbtsnIKs4R0u%2FodqSwsyzc0r8jMgadX2gCK%2Fimg.png',
    content: 'ITe Quiz의 다양한 문제를 풀어보세요!',
    learn : 'Learn',
    start : 'Start'
  },  
  
  { id: 2,
    title: 'ITe Quiz 2',
    title_img : 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fo4Y3Q%2FbtsnGZD2NgU%2FEIQaMXnXxXkj07z6LvjKS1%2Fimg.png',
    content: 'ITe Quiz의 다양한 문제를 풀어보세요!',
    learn : 'Learn',
    start : 'Start'
  },
  
  { id: 3, 
    title: 'ITe Quiz 3',
    title_img : 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FWgFUH%2FbtsnF7oPNc5%2FImneGxlwACvlf4wZd8NUO1%2Fimg.png',
    content: 'ITe Quiz의 다양한 문제를 풀어보세요!',
    learn : 'Learn',
    start : 'Start'
  },
  
  { id: 4, 
    title: 'ITe Quiz 4',
    title_img : 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcCjvXK%2FbtsnEWIiXvd%2F036E9ZO1CrHnThkoyeQGek%2Fimg.png', 
    content: 'ITe Quiz의 다양한 문제를 풀어보세요!',
    learn : 'Learn',
    start : 'Start'
  },
  
  { 
    id: 5, 
    title: 'ITe Quiz 5',
    title_img : 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FEO6zv%2FbtsnEMFK2Nt%2FnJubASqtRK5zdqVMortro0%2Fimg.png', 
    content: 'ITe Quiz의 다양한 문제를 풀어보세요!',
    learn : 'Learn',
    start : 'Start'
  },
  
  { id: 6,
    title: 'IT Trend',
    title_img : 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F49s5K%2FbtsnFL0yw1C%2FQXAJFvjqBoUHwDhMOs1yTK%2Fimg.png',
    content: '요즘 IT의 트렌드를 알아보세요!',
    learn : 'Learn',
    start : 'Start'
  },
  
  { id: 7, 
    title: 'C언어',
    title_img : 'https://i.namu.wiki/i/KcqDuQYTxNpUcLIMZTg28QXse0XiWx1G7K68kYYCo1GuhoHmhB_V8Qe9odGGt0BH9-0nQZTN53WXTNpDmwVfWQ.svg', 
    content: 'C언어에 대한 용어를 알아보도록 해요!',
    learn : 'Learn',
    start : 'Start'
  },
  
  { id: 8,
    title: 'Python',
    title_img : 'https://blog.kakaocdn.net/dn/bL8ETY/btrsc1dKdvU/PKl3b1kLTKsKuWAY9u2XT1/img.png',
    content: '파이썬에 대한 용어를 알아보도록 해요!',
    learn : 'Learn',
    start : 'Start'
  },
  
  { id: 9, 
    title: 'Java',
    title_img : 'https://i.namu.wiki/i/MuCO_ocla-FyadGnRZytkRLggQOcqxv_hXNjN7aYXDOPivIChJNdiRXp6vwSXbM6GcUL3pVTL-5U5TKQ0f1YhA.svg',
    content: '자바에 대한 용어를 알아보도록 해요!',
    learn : 'Learn',
    start : 'Start'
  },
];



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

export default ItQuiz;