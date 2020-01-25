import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/Posts.css';
import postPic from './resources/js.png';
import {CreatePost} from './Components/createPost';

//import {PostViewComponent} from './Components/postViewComponent';

const PostHead=()=>{

  return (
    <div className="postCategory">
           <div className="postTopic">
           Category : React-Js
           </div>
         </div>
  );
};

const LikesComments=()=>{
  return (
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
  );
};

const PostBody=()=>{
  return (
    <div className="postBody">
            <div className="postTitle">React functional component and higher order component</div>
            <div className="userInfo">
                 <img src={postPic} className="authorImage" alt="authorPic"/>
                 <span className="authorName">By: oscuro smith</span>
                 <LikesComments />
            </div>
          </div>
  );
}; 


var test =false;

export const Post =()=>{

    return (
      <React.Fragment>
      { test && <div className="postComponent">
            <PostHead />
            <PostBody />
        </div>} 
        {!test&&<CreatePost />}
        </React.Fragment>         
    );
}