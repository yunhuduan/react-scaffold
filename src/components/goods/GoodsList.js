import React from 'react';
import {getGoodsList,changeTitle} from '../../actions/';
import GoodsRow from './goodsRow';


export default  class GoodsList extends  React.Component{
    constructor(props) {
        super(props)
        this.handClick = this.handClick.bind(this)
        this.changeTitle = this.changeTitle.bind(this)

    }
    componentDidMount(){

    }
    handClick(){
        console.log('GoodsList handClick');
        this.props.dispatch(getGoodsList())
    }
    changeTitle(event){
        console.log('change title');
        this.props.dispatch(changeTitle(new Date().getTime()))
    }
    render() {
        return (
            <div className="goodsList">
                <h1>{this.props.title}</h1>

                <table>
                    <tbody>

                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>REMARK</th>
                    </tr>

                        {
                            this.props.data.map(function(g){
                                return (
                                    <GoodsRow row={g} key={g.id}></GoodsRow>
                                );
                            })
                        }

                    </tbody>
                </table>
                <button onClick={this.handClick}>get goods</button>goods.length:{this.props.data.length}<br/>
                <button onClick={this.changeTitle}>changeTitle</button>
            </div>
        );
    };
};

