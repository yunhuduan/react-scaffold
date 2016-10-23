import { combineReducers } from 'redux'
import goods from './goods/goodsReducers';


const rootReducer = combineReducers({
    goods
});
export default rootReducer;
