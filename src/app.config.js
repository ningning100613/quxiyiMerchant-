export default defineAppConfig({
  pages: [
    'pages/order/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '趣洗衣',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: "#666488",
    selectedColor: "#FF5951",
borderStyle: "black",
    backgroundColor: "#ffffff",
    list: [
      {
          pagePath: "pages/order/index",
          iconPath: "tabBar/home.png",
          selectedIconPath: "tabBar/homecon.png",
          text: "订单"
      },
      {
          pagePath: "pages/user/index",
          iconPath: "tabBar/user.png",
          selectedIconPath: "tabBar/usercon.png",
          text: "我的"
      }
  ]
},
permission: {
    "scope.userLocation": {
        "desc": "您的地理位置将用于店铺配送信息"
    }
}

})
