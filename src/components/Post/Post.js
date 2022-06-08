import React from 'react';
import PropTypes from 'prop-types';
import './Post.css'
import {useDispatch} from "react-redux";
import {deletePost, changePostViaForm, clearForm} from "../../redux/actions/actionCreators";


Post.propTypes = {
   post: PropTypes.object.isRequired,
};

function Post({post}) {
    const {id, title, price} = post;
    const dispatch = useDispatch();
    const editPostHandler =()=> dispatch(changePostViaForm({title,price,id}));
    const deletePostHandler = ()=> {
        dispatch(deletePost(id))
        dispatch(clearForm())
    }

    return (
        <li id={id} className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{title}</div>
                <p className='fs-4'>{price}</p>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button onClick={editPostHandler} type="button" className="btn btn-warning p-2">&#9998;</button>
                <button onClick={deletePostHandler} type="button" className="btn btn-danger p-2">&#10005;</button>
            </div>
        </li>
    )
}

export default Post;