import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const {data} = this.props;
        if (data.length) {
            return (
                <div id="homeAd" className='clear-fix'>
                    {
                        data.map((item,index) => {
                            return <div key={index} className="ad-item"><img src={item.img}/><p>{item.title}</p></div>
                        })
                    }
                </div>
            )
        }else{
            return <div>……</div>
        }
    }
}

export default HomeAd
