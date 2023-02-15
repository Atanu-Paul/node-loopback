import {
    GET_POSTS,
    GET_POSTS_FAIL,
    GET_POSTS_SUCCESS,
    GET_POST_DETAILS,
    GET_POST_DETAILS_FAIL,
    GET_POST_DETAILS_SUCCESS
} from './actionTypes'

const initialState = {
    posts:[],
    post:{},
    loadingPost:false,
    loadingPostDetails:false,
    error:{
        message:"",
    }
}

const PostReducer = (state = initialState, action)=>{
    switch (action.type){
        case GET_POSTS:
            state = {...state, loadingPost:true};
            break;
        case GET_POSTS_SUCCESS:
            state={...state, posts:action.payload, loadingPost:false}
            break;
        case GET_POSTS_FAIL:
            state={...state, error:{message:"No Post Found"}, loadingPost:false}
            break;
        default:
            state={...state}
            break;
    }
    return state
}

export default PostReducer;