import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/Posts.css';
import postPic from './resources/js.png';

export const Post =()=>{

    return (
        <div className="postComponent">
          <div className="postImage">
            <img src={postPic} alt="img"/>
          </div>
          <div className="postBody">
            <div className="postTitle">Title of the post</div>
            <div className="userInfo">
                 <img src={postPic} className="authorImage" alt="authorPic"/>
                 <span className="authorName">By: oscuro smith</span>
               <span className="likesComments"> 
                 <span className='likes'>
                 <span className="numLikes">0</span>
                 <span className="fas fa-thumbs-up"></span>
               </span>               
                <span className='comments'>
                  <span className="numComments">0</span> 
                  <span className="far fa-comment"></span>
                </span>
                </span>
            </div>
          </div>
        </div>          
    );
}