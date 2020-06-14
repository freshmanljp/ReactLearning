// react-redux的使用
import React, { Component } from 'react'

// navlink和普通link的区别是，点击后会有active的class绑定
import { NavLink as Link, Route, Switch, Redirect } from 'react-router-dom'

import {
    Article,
    ArticleDetail,
    Home,
    User,
    Notfound
} from './views'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            isLogin: true
        }
    }
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/home">首页</Link></li>
                    <li><Link to="/article">文章</Link></li>
                    <li><Link to="/user">用户</Link></li>
                </ul>
                {/* switch的重用类似于switch语句的break，一旦匹配到就不匹配下面的路由 */}
                <Switch>
                    {/* Route组件的两种组件渲染方式，component和render方式，第二种方式用于另外传递参数或者需要权限鉴权的情况 */}
                    {/* <Route path="/home" component={Home}></Route> */}
                    <Route path="/home" render={(routeProps) => {
                        // 传参方式
                        return <Home {...routeProps} x="1"></Home>
                    }}></Route>
                    {/* <Route path="/user" component={User}></Route> */}
                    {/* 鉴权方式 */}
                    <Route path="/user" render={() => {
                        return this.state.isLogin ? <User /> : <div>请先登录</div>
                    }}></Route>
                    {/* exact属性为完全匹配path路径，不加只要以path开头的路径都会被匹配 */}
                    <Route path="/article" component={Article} exact></Route>
                    <Route path="/article/:id" component={ArticleDetail}></Route>
                    <Redirect to="/home" from="/" exact></Redirect>
                    <Route component={Notfound}></Route>
                </Switch>
            </div>
        )
    }
}

