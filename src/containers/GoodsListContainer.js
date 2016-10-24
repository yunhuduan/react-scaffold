

import { connect } from 'react-redux';
import GoodsList from '../components/goods/GoodsList';


function mapStateToProps(store){
    console.log('goods container ....');
    console.dir(store);
    let goods = store.goods;
    return {...goods};
};

export default connect(mapStateToProps)(GoodsList);
