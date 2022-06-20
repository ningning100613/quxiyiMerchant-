import { Component } from 'react'
import Taro from '@tarojs/taro'

import { View, Text, Image, Input, ScrollView, Button } from '@tarojs/components'
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
      height: Taro.windowHeight  + 'px'
    }

    const scrollStyleWidth = {
      width: Taro.windowWidth - (80 / Taro.pixel) + 'px',
    }
    const scrollTop = 0
    const Threshold = 20


    return (
      <View className='Main'>

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
                  <Text className='colorRed'>1/7</Text>
                </View>
                <View className='templates alignItems'>
                  <View className='adaption'>
                    <ScrollView
                      className='scrollviewGoods'
                      scrollLeft={scrollTop} scrollX style={scrollStyleWidth}
                    >
                      <View className='groundingInfo'>
                        <Image src={imgSrc} style='width:100%;height:100%' />
                        <View className='hookIcon'></View>
                      </View>
                      <View className='groundingInfo'>
                        <Image src={imgSrc} style='width:100%;height:100%' />
                      </View>
                      <View className='groundingInfo'>
                        <Image src={imgSrc} style='width:100%;height:100%' />
                      </View>
                      <View className='groundingInfo'>
                        <Image src={imgSrc} style='width:100%;height:100%' />
                      </View>
                      <View className='groundingInfo'>
                        <Image src={imgSrc} style='width:100%;height:100%' />
                      </View>
                      <View className='groundingInfo'>
                        <Image src={imgSrc} style='width:100%;height:100%' />
                      </View>
                      <View className='groundingInfo'>
                        <Image src={imgSrc} style='width:100%;height:100%' />
                      </View>
                    </ScrollView>
                  </View>
                </View>
                <View className='templates'>
                  货架分配号：123
                </View>


                <View className='marginTop templates justifyCenter'>
                <Button className='btn-orage' type='primary' hoverClass='btn-orage-hover' size='mini'>完成上架</Button>
                </View>


              </View>




              <View className='marginTop whiteBackground borderRadius padding20'>
                <View className='templates'>
                  <View className='adaption'>订单编号：12345678</View>
                  <Text className='colorRed'>3/3</Text>
                </View>
                <View className='templates alignItems'>
                  <View className='adaption'>
                    <ScrollView
                      className='scrollviewGoods'
                      scrollLeft={scrollTop} scrollX style={scrollStyleWidth}
                    >
                      <View className='groundingInfo'>
                        <Image src={imgSrc} style='width:100%;height:100%' />
                        <View className='hookIcon'></View>
                      </View>
                      <View className='groundingInfo'>
                        <Image src={imgSrc} style='width:100%;height:100%' />
                        <View className='hookIcon'></View>
                      </View>
                      <View className='groundingInfo'>
                        <Image src={imgSrc} style='width:100%;height:100%' />
                        <View className='hookIcon'></View>
                      </View>
                    </ScrollView>
                  </View>
                </View>
                <View className='templates'>
                货架分配号：123
                </View>
                <View className='marginTop templates justifyCenter'>
                <Button className='btn-orage' type='' hoverClass='btn-orage-hover' size='mini'>完成上架</Button>
                </View>


              </View>








            </View>
          </ScrollView>















      </View>

    )
  }
}
