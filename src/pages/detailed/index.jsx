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
        <View className='padding20'>

          <View className='templates alignItems'>
            <View className='radiusIcon'></View>
            <Text className='font30 marginLeft'>2022年</Text>
            <View className='adaption marginLeft'>
              <View className='intervalLine'></View>
            </View>
          </View>
          <View className='marginTop padding20'>

            <View className='templates'>
              <View className=''>
                <Text className='detailedTitle'>本月</Text>
              </View>
              <View className='adaption marginLeft'>
                <View className='detailed padding20' >
                  <View className='templates'>
                    <View className='adaption'>
                      <View className='detailedList'>
                        <Text className=''>订单</Text>
                        <Text className='marginTop10'>￥203</Text>
                      </View>
                    </View>
                    <View className='adaption'>
                      <View className='detailedList'>
                        <Text className=''>预期收益</Text>
                        <Text className='marginTop10'>￥12913.00</Text>
                      </View>
                    </View>
                  </View>
                  <View className='grayLine marginTop'></View>
                  <View className='templates marginTop'>
                    <View className='adaption'>
                      <View className='detailedList'>
                        <Text className=''>新增会员</Text>
                        <Text className='marginTop10'>23</Text>
                      </View>
                    </View>
                    <View className='adaption'>
                      <View className='detailedList'>
                        <Text className=''>下单人数</Text>
                        <Text className='marginTop10'>203</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>

          </View>







          <View className='templates alignItems'>
            <View className='radiusIcon'></View>
            <Text className='font30 marginLeft'>2021年</Text>
            <View className='adaption marginLeft'>
              <View className='intervalLine'></View>
            </View>
          </View>




        </View>

      </View>
    )
  }
}
