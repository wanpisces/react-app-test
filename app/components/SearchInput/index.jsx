import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <input
            onChange={this.changeValue.bind(this)}
            onKeyUp={this.KeyUpHandle.bind(this)}
            value={this.state.value} placeholder="请输入关键字"/>
        )
    }
    componentDidMount () {
      this.setState({
        value: this.props.value || ''
      })
    }
    changeValue (e) {
      this.setState({
        value: e.target.value
      })
    }
    KeyUpHandle (e) {
      if (e.keyCode == 13) {
        this.props.enterHandle(e.target.value);
      }
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
export default SearchInput