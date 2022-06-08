import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {filterPost} from "../redux/actions/actionCreators";

const PostSearchForm = () => {
    const searchText = useSelector(state =>state.posts.filter)
    const dispatch = useDispatch();
    const changeInputSearchHandler =(e)=>{
        const {value} = e.target;
        dispatch(filterPost(value))
    }
    return (
        <form>
            <div className="form-group col-2">
                <input
                    placeholder='search...'
                    type="text"
                    name='filter'
                    className="form-search"
                    value={searchText}
                    onChange={changeInputSearchHandler}
                />
            </div>
        </form>
    );
};

export default PostSearchForm;