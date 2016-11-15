

import { connect } from 'react-redux';
import GoodsList from '../components/goods/GoodsList';
import {getGoodsList} from '../actions';


function mapStateToProps(state,ownProps){
    console.log('goods container ....');
    console.dir(state);
    let goods = state.goods;
    return {...goods,...ownProps};
};

function mapDispatchToProps(dispatch,ownProps){
    //业务方法基本上定义到此方法中的对象中返回作为属性传入到组件中使用
    return {
        getGoodsList:(params)=>dispatch(getGoodsList(params)),
        dispatch,
        ...ownProps
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(GoodsList);
