import {GET_GOODS_LIST_SUCCESS,CHANGE_TITLE} from '../../constants/actionTypes'

const initState = {isFetching:false,data:[],title:'init title'}

export default function goodsReduces(state = initState,action){
    switch (action.type){
        case CHANGE_TITLE :
            return Object.assign({}, state,{title:action.text});
        case GET_GOODS_LIST_SUCCESS :
            return Object.assign({}, state,{data:action.data});
        default:
            return state;
    }
}

