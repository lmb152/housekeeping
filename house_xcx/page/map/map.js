//map.js
//获取应用实例
var app = getApp()
Page({
  data: {
    latitude: 31.20447,
    longitude: 121.421,
    markers: [
    {
      latitude: 31.20447,
      longitude: 121.421,
      name: '点正'
    }
    ],
    covers: [
      {
        latitude: '',
        longitude: '',
        iconPath: '',
      }
    ]
  },
  onLoad: function(){
    var sf = this
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        // console.log(res.latitude+','+res.longitude)
      }
    })
  }
})
