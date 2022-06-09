import { Component } from 'react'
import Taro from '@tarojs/taro'

import { View, Text, Image, Picker, Button, Input } from '@tarojs/components'
import './index.scss'
import imgSrc from '../../images/img.png'

export default class User extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  state = {
    selector: ['羽绒服', '衬衫', '长裤', '外衣'],
    selectorChecked: '羽绒服',
  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }

  showActionSheet() {
    Taro.showActionSheet({
      itemList: ['扫码录入', '输入编码'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  }

  render() {
    const maskVisible = true
    const animaFlag = false


    return (
      <View className='Main'>
        <View className='fixedMain'>

          <View className='whiteBackground padding20 templates marginTop alignItems'>
            <View className='adaption'>
              <View><Text className=''>微信昵称：名字</Text></View>
              <View className='marginTop'><Text className=''>预留手机：122321312313</Text></View>
            </View>
            <Text className=' font36 padding20'>📞</Text>
          </View>

          <View className='whiteBackground  marginTop detailsMain'>
            <View className='detailsTitle padding20'><Text className='colorRed'>3</Text><Text className='font28'>件商品</Text></View>




            <View className='templates alignItems marginTop paddingLR'>
              <View className='pickerMain templates alignItems'>
                <View className='adaption'>
                  <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                    <View className='picker'>
                      {this.state.selectorChecked}
                    </View>
                  </Picker>
                </View>
                <View className='downIcon'></View>
              </View>
              <View className='marginLeft'><Text className='colorGray'>x 1</Text></View>
              <View className='adaption'></View>
              <Button size='mini' className='btn' type='' hoverClass='btn-hover'>拍照</Button>
              <View className='marginLeft'></View>
              <Button size='mini' className='btn' type='' hoverClass='btn-hover' onClick={this.showActionSheet}>打标</Button>
            </View>



            <View>

                <View className='templates goodsList alignItems padding20'>
                  <View className='productPhOrder'><Image src={imgSrc} style='width:100%;height:100%' /></View>
                  <View className='adaption productCenter'>
                    <View className=''>羽绒服 x 1</View>
                    <View className=''>商品编码：1233213123</View>
                  </View>
                  <View className='marginLeft phoneIcon'></View>
                </View>

            </View>









          </View>

          <View className='whiteBackground  marginTop padding20'>
            <View className='templates'>
              <View className='adaption'>订单编号</View>
              <Text className='colorGray'>wx202009024559682059</Text>
            </View>
            <View className='templates marginTop'>
              <View className='adaption'>下单时间</View>
              <Text className='colorGray'>2020-11-12 10:34:11</Text>
            </View>
            <View className='templates marginTop'>
              <View className='adaption'>支付方式</View>
              <Text className='colorGray'>微信支付</Text>
            </View>
            <View className='templates marginTop'>
              <View className='adaption'>订单金额</View>
              <Text className='colorGray'>￥100</Text>
            </View>
            <View className='templates marginTop'>
              <View className='adaption'>订单状态</View>
              <Text className='colorGray'>已付款</Text>
            </View>


          </View>



        </View>

        <View className='fixedButtom templates whiteBackground'>
          <View className='adaption padding20'>
            <Button className='btn' type='' hoverClass='btn-hover'>取消订单</Button>
          </View>
          <View className='adaption padding20'>
            <Button className='btn-orage' type='primary' hoverClass='btn-orage-hover'>确认订单</Button>
          </View>
        </View>




        {
          <View className={maskVisible ? 'mask' : 'mask_down'}
            // style={animaFlag ? {visibility: "hidden"} : ''}
            // 为了避免第一次加载时会出现动画效果
            style={animaFlag ? { visibility: "hidden" } : ''}
            onClick={this.changeVisible}>
            <View className={maskVisible ? 'pop' : 'pop_down'}>

              <View>
                <Input className='codeInput' type='text' placeholder='请输入编码' focus />
              </View>
              <View className='buttonMain'>
                <Button className='btn-orage' type='primary' hoverClass='btn-orage-hover'>确认编码</Button>
              </View>


            </View>
          </View>
        }




      </View>
    )
  }
}
