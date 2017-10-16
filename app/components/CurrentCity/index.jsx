import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class CurrentCity extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <h2 className="current-city">{this.props.cityName}</h2>
        )
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
export default CurrentCity