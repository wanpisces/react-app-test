import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as homeDataActions from '../../../actions/homedata.js'
import HomeAd from '../../../components/HomeAd'
import { getAdData } from '../../../fetch/home/home.js'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            homeAdData: []
        }
    }
    render() {
      return (
        <div>
          <HomeAd data={this.state.homeAdData}/>
        </div>
      )
    }
    componentDidMount(){
      const result = getAdData();
      const that = this;
      result.then((res) => {
        return res.json();
      }).then((json) => {
        if (json.length) {
          const homeAdData = json;
          that.setState({
            homeAdData: homeAdData
          })
        }
      })
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
// connect会传入两个参数：mapStateToProps，组件
function mapStateToProps(state){ //将state作为属性传入react中
  console.log(state.homedata.homeAdData);
    return {
      homeAdData:state.homedata.homeAdData
    }
}
function mapDispatchToProps(dispatch){ //将action作为属性传入react中
    return {
      homeData: bindActionCreators(homeDataActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Ad)