
import React from 'react';
export default  class GoodsRow extends  React.Component{

    componentDidMount(){
        console.log('GoodsRow componentWillmount');
        console.dir(this.props)

    }
    render(){
        return (
            <tr>
                <td>{this.props.row.id}</td>
                <td>{this.props.row.name}</td>
                <td>{this.props.row.price}</td>
                <td>{this.props.row.remark}</td>
            </tr>)
    }
}