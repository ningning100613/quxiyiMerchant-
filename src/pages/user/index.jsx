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


        <View className='userTop templates alignItems'>
          <View className='userPh'><Image src={imgSrc} style='width:100%;height:100%' /></View>
          <View className='adaption marginLeft'>
            <View><Text className='font32 colorWhite '>美美</Text></View>
            <View><Text className='font28 colorWhite'>电话：</Text><Text className='font28 colorWhite'>12345678901</Text></View>
          </View>
        </View>

        <View className='marginTop whiteBackground padding20 memberNumber'>
          <View><Text className='font60 colorRed'>0</Text></View>
          <View className='marginTop10'>会员</View>
        </View>


        <View className='marginTop whiteBackground padding20 '>
          <View className='templates alignItems'>
            <Text>预期收益</Text>
            <View className='adaption'></View>
            <Text>收益详情</Text>
            <View className='linkIcon marginLeft'></View>
          </View>
          <View className='marginTop10'>
            <Text className='font60 colorRed'>￥12345</Text>
          </View>
          <View className='marginTop10'>
            <Text className='colorGray'>账户余额：</Text><Text className='font36'>￥1900</Text>
          </View>
        </View>

        <View className='marginTop whiteBackground padding20'>
          <View>订单统计</View>
          <View className='templates'>
          <View className='adaption memberNumber'>
              <View><Text className='colorRed font36'>12</Text></View>
              <View><Text className='colorGray'>当日订单</Text></View>
            </View>
            <View className='adaption memberNumber'>
              <View><Text className='colorRed font36'>12</Text></View>
              <View><Text className='colorGray'>当日订单</Text></View>
            </View>
          </View>
        </View>



      </View>
    )
  }
}
