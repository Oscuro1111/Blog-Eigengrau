
import {SHOW_TRENDING_POSTS,SHOW_CONTENT_POSTS} from './actions';


const R_States={
    TrendingPostsComponent:false,
    ContentPostsComponent:false
};

export const renderState=function(state, action){

    switch(action.type){
        case SHOW_TRENDING_POSTS:
            return Object.assign({},state,{TrendingPostsComponent:action.flag});
        case SHOW_CONTENT_POSTS:
            return Object.assign({}, state,{ContentPostsComponent:action.flag});
        default:
            return state;
    }
};

