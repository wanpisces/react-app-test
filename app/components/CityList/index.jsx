import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li>
                        <span onClick={this.clickHandle.bind(this, '北京')}>北京</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '上海')}>上海</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '杭州')}>杭州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '成都')}>成都</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '广州')}>广州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '苏州')}>苏州</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '深圳')}>深圳</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '南京')}>南京</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '天津')}>天津</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '重庆')}>重庆</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '厦门')}>厦门</span>
                    </li>
                    <li>
                        <span onClick={this.clickHandle.bind(this, '西安')}>西安</span>
                    </li>
                </ul>
            </div>
        )
    }
    componentDidMount () {

    }
    clickHandle(cityName) {
      const changeFn = this.props.changeFn
      changeFn(cityName)
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
export default CityList