//Actions

export const SHOW_TRENDING_POSTS="SHOW_TRENDING_POST";

export const SHOW_CONTENT_POSTS="SHOW_CONTENT_POSTS";


export const showTrendingPosts=(flag)=>({type:SHOW_TRENDING_POSTS,flag});
export const showContentPosts=(flag)=>({type:SHOW_CONTENT_POSTS,flag});
