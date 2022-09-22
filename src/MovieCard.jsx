import React, { useState } from 'react';
import './App.css';
import LikeIcon from './like.svg';

const MovieCard = ({movie}) =>{
    const [count, setCount] = useState(0);
    return(

        <div className='movie'>

        <div>
        <p>{movie.Year}</p>
        </div>
       
        <div>
          <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
        </div>
    
        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
    
        <span className='app-flex'>
            <img src={LikeIcon} alt='like/img' onClick={() => setCount((prevCount) => prevCount + 1)}/>
            <h3 className='m-1'>{count}</h3>
        </span> 
        </div> 
    );
}

export default MovieCard;