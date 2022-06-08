import {CHANGE_POST, CREATE_POST, DELETE_POST, FILTER_POST} from "../actions/actionTypes";

const  initialState = {
    postsArr: [
        {id: 1221, title: 'Remont asdasd tell', price: '21313'},
        {id: '324sdasdsa', title: 'Remont tell', price: '21313'},
    ],
    filter: '',
    filtered: []

}
export const postsReducer = (state=initialState, action) => {
    switch (action.type){
        case CREATE_POST:
            return {...state,
                postsArr: [...state.postsArr, action.payload],
                filtered: [],
                filter: ''
            }
        case DELETE_POST:
            const cleanArr = [...state.postsArr.filter(item=>item.id!==action.payload)]
            return {...state,
                postsArr: cleanArr,
                filtered: cleanArr.filter((elem)=>elem.title.toLowerCase().includes(state.filter))
            }
        case CHANGE_POST:
            const{title, price, id} = action.payload
            const item = state.postsArr.find(elem=>elem.id===id)
            item.price=price
            item.title=title
            return {...state,
                postsArr: state.postsArr.map(obj=>{
                if(obj.id ===item.id){
                    return item
                }
                return obj
                }),
                filtered: [...state.postsArr]
            }
        case FILTER_POST:
            const {value} = action.payload
            if(value===''){
                return {...state,
                    filter: value,
                    filtered: [...state.postsArr]
                }
            }else{
                return {...state,
                    filter: value.toLowerCase(),
                    filtered: [...state.postsArr.filter(item=>item.title.toLowerCase().includes(value))]
                }
            }
        default: return state;
    }
}