import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class index extends Component {
    static propTypes = {
        desc: PropTypes.string.isRequired
    }
    static defaultProps = {
        children: '标题忘了吧'
    }
    render() {
        return (
            <div>
                {/* 插槽内容 */}
                <h1>{this.props.children}</h1>
                <h3>{this.props.desc}</h3>
            </div>
        )
    }
}
