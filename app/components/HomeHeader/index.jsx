import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'
import SearchInput from '../SearchInput'

import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="clear-fix" id="home-header">
                <Link to="/City"><div className="home-header-left float-left">
                    <span>{this.props.cityName}</span>&nbsp;
                    <i className="icon-angle-down"></i>
                </div></Link>
                <div className="home-header-right float-right"><i className="icon-user"></i></div>
                <div className="home-header-middle">
                    <div  className="search-container">
                    <i className="icon-search"></i>
                    <SearchInput enterHandle={this.enterHandle.bind(this)} value=""/>
                </div>
                </div>
            </div>
        )
    }
    enterHandle (value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default HomeHeader
