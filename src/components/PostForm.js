import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addPost, changeForm, changePost, clearForm} from "../redux/actions/actionCreators";
import {nanoid} from "nanoid";


const PostForm = () => {
    const form = useSelector(state => state.form.formInput)
    const dispatch = useDispatch()

    const changeInputHandler = (e)=>{
        const {name, value} = e.target;
        dispatch(changeForm(name, value))
    }
    const clearInputHandler = ()=>{
        dispatch(clearForm())
    }
    const editPost = ()=>{
        dispatch(changePost(form));
        clearInputHandler()
    }
    const newPost = ()=>{
        form.id = nanoid();
        dispatch(addPost(form));
        clearInputHandler();
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        form.id!==''?editPost():newPost();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="row align-items-end justify-content-md-center">
                <div className="form-group col-3">
                    <label htmlFor="title" className="form-label"><strong>Услуга</strong></label>
                    <input onChange={changeInputHandler} type="text" name='title' value={form.title} className="form-control" id="title"/>
                </div>
                <div className="form-group col-3">
                    <label htmlFor="price" className="form-label"><strong>Цена</strong></label>
                    <input onChange={changeInputHandler} type="number" name='price' value={form.price} className="form-control" id="price"/>
                </div>
                <button type='submit' className='btn btn-success col-1 me-md-2'>Save</button>
                <button onClick={clearInputHandler}  type='button' className='btn btn-danger col-1'>Cancel</button>
            </div>
        </form>
    );
};
export default PostForm;