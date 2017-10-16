import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import { connect } from 'react-redux'
import Category from '../../components/Category'
import Ad from './subpage/Ad'
import List from './subpage/List'


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category/>
                <div style={{height:'15px'}}></div>
                <Ad/>
                <List cityName={this.props.userinfo.cityName}/>
            </div>
        )
    }
}

// connect会传入两个参数：mapStateToProps，组件
function mapStateToProps(state){ //将state作为属性传入react中
    return {
        userinfo:state.userinfo
    }
}
function mapDispatchToProps(dispatch){ //将action作为属性传入react中
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
