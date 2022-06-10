import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'
import imgSrc from '../../images/img.png'

export default class User extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='Main'>

        <View className='marginTop whiteBackground padding20 memberNumber'>
          <View className=''><Text className='font36'>账户余额</Text></View>
          <View className='marginTop10'><Text className='font60 colorRed'>0</Text></View>

        </View>

        <View className='marginTop whiteBackground padding20'>
          <View className='templates'>
          <View className='adaption memberNumber'>
              <View><Text className='colorRed font36'>￥12</Text></View>
              <View><Text className='colorGray'>预期收益</Text></View>
            </View>
            <View className='adaption memberNumber'>
              <View><Text className='colorRed font36'>￥12</Text></View>
              <View><Text className='colorGray'>到账收益</Text></View>
            </View>
          </View>
        </View>

        <View className='templates alignItems marginTop padding20'>
          <View className='adaption'></View>
          <Text className=''>查看收益订单明细</Text>
          <View className='linkIcon marginLeft'></View>
        </View>



      </View>
    )
  }
}
