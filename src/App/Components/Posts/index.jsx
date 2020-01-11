import React from 'react';

import './styles/Posts.css';
import postPic from './resources/js.png';

export const Post =()=>{

    return (
          <div className="post__">
            <div className="postTitle">Title</div>
        
              <span className="authorPic">
                <img src={postPic} className="authorImage" alt="" />
                <span className="card-title">
                    Oscuro Smith
                </span>
              </span>
              <span className="lastUpdate">lastUpdate</span>
              <span className="likes">
                <span>0</span>
                <span>Likes</span>
              </span>
            </div>
    );
}