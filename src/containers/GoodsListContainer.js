

import { connect } from 'react-redux';
import GoodsList from '../components/goods/GoodsList';


function mapStateToProps(state){
    console.log('goods container ....');
    console.dir(state);
    let goods = state.goods;
    return {...goods};
};

export default connect(mapStateToProps)(GoodsList);
