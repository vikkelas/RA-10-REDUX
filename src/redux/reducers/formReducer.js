import {CHANGE_FORM, CLEAR_FORM, EDIT_POST_FORM} from "../actions/actionTypes";

const  initialState = {
    formInput: {
        title:'',
        price: '',
        id: ''
    },
}
export const formReducer = (state=initialState, action) => {
    switch (action.type){
        case CHANGE_FORM:
            const {name, value} = action.payload;
            return {...state, formInput:{...state.formInput,[name]: value}}
        case CLEAR_FORM:
            return {...state, formInput: {
                    title:'',
                    price: '',
                    id: ''
                }}
        case EDIT_POST_FORM:{
            const {title, price, id} = action.payload;
            return {...state, formInput: {
                    title: title,
                    price: price,
                    id: id,
                }}
        }
        default: return state;
    }
}