import { combineReducers } from 'redux'

import goods from './goods/goodsReducers';
import users from './goods/userReducers';

const rootReducer = combineReducers({
    goods,
    users

});
export default rootReducer;

