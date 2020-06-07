// 组件化形式编写有context的开发方式
import React, { Component } from 'react'

// 引入高阶组件
import withCopyright from './withCopyright'
// const componentExp = <div>Hello,Kimming</div>
// const componentExpWithCop = withCopyright(componentExp)

// 无论配置什么，最好的方式是是同react-app-rewired包来对cra创建的项目进行配置调整
// 安装好后，修改package.json中的scripts
// 根目录下创建config-overrides.js配置文件
@withCopyright
class App extends Component {
    render() {
        return (
            <div>
                App
            </div>
        )
    }
}

export default (App)
