import { Component } from 'react'
import Taro from '@tarojs/taro'

import { View, Text, Image, Input, ScrollView } from '@tarojs/components'
import './index.scss'
import imgSrc from '../../images/img.png'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {

    const scrollRightStyle = {
      height: Taro.windowHeight - (214 / Taro.pixel) + 'px'
    }

    const scrollStyleWidth = {
      width: Taro.windowWidth - (150 / Taro.pixel) + 'px'
    }
    const scrollTop = 0
    const Threshold = 20



    return (
      <View className='Main'>
        <View className='myorder'>


          <View className='subMain'>
            <View className='templates'>
              <View className='adaption subNav con'>
                <Text className='font30'>待处理</Text>
                <View className='line'></View>
              </View>

              <View className='adaption subNav'>
                <Text className='font30'>已收单</Text>
                <View className='line'></View>
              </View>

              <View className='adaption subNav'>
                <Text className='font30'>清洗中</Text>
                <View className='line'></View>
              </View>

              <View className='adaption subNav'>
                <Text className='font30'>待取衣</Text>
                <View className='line'></View>
              </View>
              <View className='adaption subNav'>
                <Text className='font30'>已完成</Text>
                <View className='line'></View>
              </View>

            </View>
          </View>
          <View className='paddingLR marginTop'>
            <View className='orderSeach borderRadius'>
              <Input type='text' placeholder='输入手机号/订单号进行搜索' className='orderSeachInput' />
            </View>
          </View>

          <View className='marginTop'>





          <ScrollView
            className=''
            scrollY
            scrollWithAnimation
            scrollTop={scrollTop}
            style={scrollRightStyle}
            lowerThreshold={Threshold}
            upperThreshold={Threshold}
            // onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
            onScroll={this.onScroll}
          >

            <View className='paddingLR'>





              <View className='marginTop whiteBackground borderRadius padding20'>
                <View className='templates'>
                  <View className='adaption'>订单编号：12345678</View>
                  <Text className='colorRed'>待支付</Text>
                </View>
                <View className='templates alignItems'>
                  <View className='adaption'>
                    <ScrollView
                      className='scrollviewGoods'
                      scrollLeft={scrollTop} scrollX style={scrollStyleWidth}
                    >
                      <View className='goodInfo'><Image src={imgSrc} style='width:100%;height:100%' /></View>
                      <View className='goodInfo'><Image src={imgSrc} style='width:100%;height:100%' /></View>
                      <View className='goodInfo'><Image src={imgSrc} style='width:100%;height:100%' /></View>
                      <View className='goodInfo'><Image src={imgSrc} style='width:100%;height:100%' /></View>
                      <View className='goodInfo'><Image src={imgSrc} style='width:100%;height:100%' /></View>
                    </ScrollView>
                  </View>
                  <View className='linkIcon'></View>
                </View>
                <View className='templates'>
                  <View className='adaption'>订单时间：2022-01-01 13:10</View>
                  <Text className=''>实付款：￥45.00</Text>
                </View>
              </View>




              <View className='marginTop whiteBackground borderRadius padding20'>
                <View className='templates'>
                  <View className='adaption'>订单编号：12345678</View>
                  <Text className='colorGray'>待支付</Text>
                </View>
                <View className='templates alignItems'>
                  <View className='adaption'>
                    <ScrollView
                      className='scrollviewGoods'
                      scrollLeft={scrollTop} scrollX style={scrollStyleWidth}
                    >
                      <View className='goodInfo'><Image src={imgSrc} style='width:100%;height:100%' /></View>
                      <View className='textInfo'><Text className='colorRed'>69元3件任选套餐</Text></View>
                    </ScrollView>
                  </View>
                  <View className='linkIcon'></View>
                </View>
                <View className='templates'>
                  <View className='adaption'>订单时间：2022-01-01 13:10</View>
                  <Text className=''>实付款：￥45.00</Text>
                </View>
              </View>








            </View>
          </ScrollView>
          </View>

        </View>
      </View>

    )
  }
}
