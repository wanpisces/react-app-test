import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="common-header">
              <span className="back-icon" onClick={this.clikHandle.bind(this)}><i className="icon-chevron-left"></i></span>
              <h1>选择城市</h1>
            </div>
        )
    }
    clikHandle () {
      window.history.back();
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
export default Header