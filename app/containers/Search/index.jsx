import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'
import ListCompoent from '../../components/ListCompoent'


class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render() {
        const params = this.props.params;
        return (
            <div>
                <SearchHeader keyword={params.keyword}/>
                <ListComponent data={this.state.data}/>
            </div>
        )
    }
    componentDidMount () {

    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default Search
module.exports = Search