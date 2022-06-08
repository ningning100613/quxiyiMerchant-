import { Component } from 'react'
import Taro from '@tarojs/taro'

import './app.scss'

class App extends Component {

  componentDidMount () {
    Taro.getSystemInfo({
      success: function (res) {
        console.log(res)
          //计算倍数
          let {windowWidth, windowHeight, system,model} = res;
          Taro.windowHeight = windowHeight
          Taro.windowWidth = windowWidth
          Taro.pixel = 750 / windowWidth;
          Taro.isAndroid = system.toString().toLowerCase().indexOf('android') > -1
          Taro.model = res.model
          Taro.isiPhoneX = model.toString().toLowerCase().indexOf('iphone x') > -1
      }
  });

  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
