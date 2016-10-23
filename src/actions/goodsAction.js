import 'whatwg-fetch';
import {
    GET_GOODS_LIST_SUCCESS,
    CHANGE_TITLE,
    ADD_GOODS,
    UPDATE_GOODS
} from '../constants/actionTypes';

export const getGoodsList = () => {
    console.log('getGoodsList action');
    return (dispatch) => {
        fetch('http://localhost:8080/api/goods')
            .then(response => response.json())
            .then((json) => {
                console.log('get json Data:');
                console.dir(json);
                dispatch(getGoodsSucc(json));
            }).catch(() => console.log('get goods error'));
    };
};

export const getGoodsSucc = function (json) {
    return { type: GET_GOODS_LIST_SUCCESS, data: json}
};
export const changeTitle = function (str) {
    return {type:CHANGE_TITLE,text:str}
}

