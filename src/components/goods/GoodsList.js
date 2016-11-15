import React from 'react';
import {getGoodsList,changeTitle} from '../../actions/';
import GoodsRow from './goodsRow';


export default  class GoodsList extends  React.Component{
    /*constructor(props) {
        super(props)
        此处需要bind this如果jsx中不使用es6的function
        this.handClick = this.handClick.bind(this)
        this.changeTitle = this.changeTitle.bind(this)

    }*/

    handClick(){
        console.log('GoodsList handClick');
        this.props.getGoodsList({test:'this params is not required'})
    }
    changeTitle(event){
        //this method is not use as well,you should use dispatch in container,this is a demo
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
                <button onClick={(e)=>this.handClick(e)}>get goods</button>goods.length:{this.props.data.length}<br/>
                <button onClick={(e)=>this.changeTitle(e)}>changeTitle</button>
            </div>
        );
    };
};

