import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import LocalStore from '../../util/localStore.js'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo.js'
import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    componentDidMount () {
        console.log(this.props.userinfo)
    }
    changeCity (newCity){
        if (newCity == null) {
            return;
        }
        //修改redux
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userInfoActions.update(userinfo);
        //修改localstorage
        LocalStore.setItem('CITYNAME',newCity)
        //跳转到首页
        hashHistory.push('/')
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default City
// connect会传入两个参数：mapStateToProps，组件
function mapStateToProps(state){ //将state作为属性传入react中
    return {
        userinfo:state.userinfo
    }
}
function mapDispatchToProps(dispatch){ //将action作为属性传入react中
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(City)