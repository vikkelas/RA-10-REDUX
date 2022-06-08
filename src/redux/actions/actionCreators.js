import {
    CHANGE_FORM,
    CHANGE_POST,
    CLEAR_FORM,
    CREATE_POST,
    DELETE_POST,
    EDIT_POST_FORM,
    FILTER_POST
} from "./actionTypes";

export const addPost = (post)=>{
    return {
        type: CREATE_POST,
        payload: post,
    }
}
export const deletePost = (id)=>{
    return {
        type: DELETE_POST,
        payload: id,
    }
}
export const changePost = (post)=>{
    return {
        type: CHANGE_POST,
        payload: post,
    }
}
export const filterPost = (value)=>{
    return {
        type: FILTER_POST,
        payload: {value}
    }
}
export const changeForm = (name, value)=>{
    return {
        type: CHANGE_FORM,
        payload: {name, value},
    }
}
export const clearForm = ()=>{
    return {
        type: CLEAR_FORM
    }
}

export const changePostViaForm = (post)=>{
    return{
        type: EDIT_POST_FORM,
        payload: post
    }
}