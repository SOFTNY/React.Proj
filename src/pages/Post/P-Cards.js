import React from 'react'

//css
import '../../css/Card.css';

const Cards = ({ results }) => {

  let display;
  console.log(results)

  if(results){
    display = results.map(x=>{
      let {id, name, image, location, status} = x;
      return(
        <div key={id} className='col-4 mb-4 position-relative'>
          <div className='cards'>
            <img src={image} alt="" className='img-fluid img' />
            <div style={{padding:'10px'}} className='content'>
              <div className='fs-4 fw-bold mb-4'>{name}</div>
              <div className=''>
                <div className='fs-6'>Last location</div>
                <div className='fs-5'>{location.name}</div>
              </div>
            </div>
          </div>
          <div className='position-absolute badge bg-success'>
            {status}
          </div>
        </div>
      );
    });
  }else{
    display = "No Charaters Found :/";  
  }


  return <>{display}</>;
};

export default Cards;