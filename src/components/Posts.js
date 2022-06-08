import React from 'react';
import {useSelector} from "react-redux";
import Post from "./Post/Post";



const Posts = ()=>{
    const {postsArr, filtered} = useSelector(state=>state.posts)
    const items = ()=>{
        if(!filtered.length){
            return postsArr
        } else {
            return filtered
        }
    }
    if(!items().length){
        return <p className='text-center'><strong>Добавьте услугу</strong></p>
    }
    return (
        <ol className="list-group list-group-numbered">
            {items().map(item=><Post key={item.id} post={item}/>)}
        </ol>

    );
}

export default Posts;