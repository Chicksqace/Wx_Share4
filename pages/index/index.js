//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    //向模板传入数据
    // 轮播
    index_index_scroll_tmpl: {
      images: [
        '/image/2.jpg',
        '/image/1.jpg',
        '/image/3.jpg',
      ],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200
    },



    // nav
    index_index_navs_tmpl: {
      navs: [
        {
          image: '/image/i3.jpg',
          text: '上门开锁'
        }, {
          image: '/image/i2.jpg',
          text: '配置钥匙'
        }, {
          image: '/image/i4.jpg',
          text: '安装门禁'
        }, {
          image: '/image/i1.jpg',
          text: '销售锁具'
        }
      ]
    },

    // item
    index_index_items_tmpl: {
      items: [
        { image: '/image/a1.jpg' },
        { image: '/image/a2.jpg' },
        { image: '/image/a3.jpg' }
      ]
    }
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  swiperchange: function (e) {
    //FIXME: 当前页码
    //console.log(e.detail.current)
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  onShareAppMessage: function () {
    return {
      title: 'XXXXX企业',
      desc: '企业的领军者!',
      path: '/pages/index/index?id=123'
    }
  },


  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '4000000000',
    })
  },

  openMap: function () {
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        // success
        wx.openLocation({
          latitude: 22.8107999725, // 纬度，范围为-90~90，负数表示南纬
          longitude: 111.4173989296, // 经度，范围为-180~180，负数表示西经
          scale: 28, // 缩放比例  
          name: '深圳VOC中心',
          address: '深圳市宝岗区小林村50号',
        })
      }
    })
  },


  go: function (event) {
    wx.navigateTo({
      url: '../list/index?type=' + event.currentTarget.dataset.type
    })
  }
})
