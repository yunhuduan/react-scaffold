import React from 'react';
import LeftMenu from './LeftMenu';


export default  class Main extends  React.Component{

    render() {
        return (
            <div className="main">
                <div className="leftMenu">
                    <LeftMenu />
                </div>
                <div className="context">
                    {this.props.children}
                </div>
            </div>
        );
    };
};

