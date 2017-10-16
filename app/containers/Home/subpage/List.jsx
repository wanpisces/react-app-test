import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home.js'
import ListComponent from '../../../components/ListComponent'
import LoadMore from '../../../components/LoadMore'

import './style.less'
class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore:false,//记录当前状态下，还有没有更多的数据可供加载
            isLoadingMore: false,//记录当前状态下是‘加载中……’还是‘点击加载’
            page:1
        }
    }
    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length
                    ?<ListComponent data={this.state.data}/>
                    :<div>加载中</div>
                }
                {
                this.state.hasMore
                ?<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                : <div>没有更多了</div>
                }
            </div>
        )
    }
    componentDidMount () {
        //获取首页数据
        this.loadFirstPageData()
    }
    //获取首页数据
    loadFirstPageData () {
        const cityName = this.props.cityName
        const result = getListData(cityName, 0)
        this.resultHandle (result);
    }
    //加载更多数据
    loadMoreData () {
        //记录状态
        this.setState({
            isLoadingMore:true
        })
        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName, page);
        this.resultHandle (result);
        //增加page的计数
        this.setState({
            page:page+1,
            isLoadingMore:false
        })

    }
    //数据处理
    resultHandle (result) {
        result.then((res) => {
            return res.json();
        }).then((json) => {
            const hasMore = json.hasMore;
            const data = json.data;
            this.setState({
                data: this.state.data.concat(data),
                hasMore: hasMore
            })
        })
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export
// export default NotFound
module.exports = List