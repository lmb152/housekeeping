//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
    ],
    vertical: true,
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 300,
    animationText1_0: {},
    animationText2_0: {},
    animationText1_1: {},
    animationText2_1: {},
    animationText1_2: {},
    animationText2_2: {},
    animationText1_3: {},
    animationText2_3: {},
    animationText1_4: {},
    animationText2_4: {},
    animationText1_5: {},
    animationText2_5: {},
    animationText1_6: {},
    animationText2_6: {},
    animationText1_7: {},
    animationText2_7: {},
    animationText1_8: {},
    animationText2_8: {},
    animationText3_0: {},
    animationText3_1: {},
    animationText3_2: {},
    animationText3_3: {},
    animationText3_4: {},
    animationText3_5: {},
    animationText3_6: {},
    animationText3_7: {},
    animationText3_8: {},
    animation_view: {},
    current:0,
    system:'',
    CanVideoShow: false
  },
  onReady: function () {
    this.animation = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 300,
      transformOrigin: "50% 50%"
    })
    this.animation2 = wx.createAnimation({
      duration: 0,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "50% 50%"
    })
    this.animation3 = wx.createAnimation({
      duration: 0,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "50% 50%"
    })
    this.animation4 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 700,
      transformOrigin: "50% 50%"
    })
    this.animation5 = wx.createAnimation({
      duration: 0,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "50% 50%"
    })
    this.animation6 = wx.createAnimation({
      duration: 0,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "50% 50%"
    })
    this.animation7 = wx.createAnimation({
      duration: 0,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "50% 50%"
    })
    this.animation8 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "50% 50%"
    })
    this.animation9 = wx.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "50% 50%"
    })
    this.fadedown()
    this.fadeup()
  },
  onSlideChange: function(e){
    this.setData({current:e.detail.current})
    this.fadedown()
    this.fadeup()
  },
  fadedown: function () {
    if (this.data.current==0) {
      this.animation.bottom('250rpx').opacity(1).step()
      this.animation2.bottom('275rpx').opacity(0).step()
      this.animation4.opacity(1).step()
      this.animation5.opacity(0).step()
      this.setData({ animationText1_0: this.animation.export() })
      this.setData({ animationText1_1: this.animation2.export() })
      this.setData({ animationText3_0: this.animation4.export() })
      this.setData({ animationText3_1: this.animation5.export() })
    }
    if (this.data.current==1) {
      this.animation.bottom('250rpx').opacity(1).step()
      this.animation2.bottom('275rpx').opacity(0).step()
      this.animation3.bottom('275rpx').opacity(0).step()
      this.animation4.opacity(1).step()
      this.animation5.opacity(0).step()
      this.animation6.opacity(0).step()
      this.setData({ animationText1_1: this.animation.export() })
      this.setData({ animationText1_0: this.animation2.export() })
      this.setData({ animationText1_2: this.animation3.export() })
      this.setData({ animationText3_1: this.animation4.export() })
      this.setData({ animationText3_0: this.animation5.export() })
      this.setData({ animationText3_2: this.animation6.export() })
    }
    if (this.data.current==2) {
      this.animation.bottom('250rpx').opacity(1).step()
      this.animation2.bottom('275rpx').opacity(0).step()
      this.animation3.bottom('275rpx').opacity(0).step()
      this.animation4.opacity(1).step()
      this.animation5.opacity(0).step()
      this.animation6.opacity(0).step()
      this.setData({ animationText1_2: this.animation.export() })
      this.setData({ animationText1_1: this.animation2.export() })
      this.setData({ animationText1_3: this.animation3.export() })
      this.setData({ animationText3_2: this.animation4.export() })
      this.setData({ animationText3_1: this.animation5.export() })
      this.setData({ animationText3_3: this.animation6.export() })
    }
    if (this.data.current==3) {
      this.animation.bottom('250rpx').opacity(1).step()
      this.animation2.bottom('275rpx').opacity(0).step()
      this.animation3.bottom('275rpx').opacity(0).step()
      this.animation4.opacity(1).step()
      this.animation5.opacity(0).step()
      this.animation6.opacity(0).step()
      this.setData({ animationText1_3: this.animation.export() })
      this.setData({ animationText1_2: this.animation2.export() })
      this.setData({ animationText1_4: this.animation3.export() })
      this.setData({ animationText3_3: this.animation4.export() })
      this.setData({ animationText3_2: this.animation5.export() })
      this.setData({ animationText3_4: this.animation6.export() })
    }
  },
  fadeup: function () {
    if (this.data.current==0) {
      this.animation.bottom('175rpx').opacity(1).step()
      this.animation2.bottom('150rpx').opacity(0).step()
      this.animation4.opacity(1).step()
      this.animation5.opacity(0).step()
      this.setData({ animationText2_0: this.animation.export() })
      this.setData({ animationText2_1: this.animation2.export() })
    }
    if (this.data.current==1) {
      this.animation.bottom('175rpx').opacity(1).step()
      this.animation2.bottom('150rpx').opacity(0).step()
      this.animation3.bottom('150rpx').opacity(0).step()
      this.animation4.opacity(1).step()
      this.animation5.opacity(0).step()
      this.animation6.opacity(0).step()
      this.setData({ animationText2_1: this.animation.export() })
      this.setData({ animationText2_0: this.animation2.export() })
      this.setData({ animationText2_2: this.animation3.export() })
    }
    if (this.data.current==2) {
      this.animation.bottom('175rpx').opacity(1).step()
      this.animation2.bottom('150rpx').opacity(0).step()
      this.animation3.bottom('150rpx').opacity(0).step()
      this.animation4.opacity(1).step()
      this.animation5.opacity(0).step()
      this.animation6.opacity(0).step()
      this.setData({ animationText2_2: this.animation.export() })
      this.setData({ animationText2_1: this.animation2.export() })
      this.setData({ animationText2_3: this.animation3.export() })
    }
    if (this.data.current==3) {
      this.animation.bottom('175rpx').opacity(1).step()
      this.animation2.bottom('150rpx').opacity(0).step()
      this.animation3.bottom('150rpx').opacity(0).step()
      this.animation4.opacity(1).step()
      this.animation5.opacity(0).step()
      this.animation6.opacity(0).step()
      this.setData({ animationText2_3: this.animation.export() })
      this.setData({ animationText2_2: this.animation2.export() })
      this.setData({ animationText2_4: this.animation3.export() })
    }
  },
  touchstart:function(event){
    if (this.data.current==8) {
      this.startP = event.touches[0].clientY
    }
  },
  touchmove:function(event){
    if (this.data.current==8) {
      this.moveP = event.touches[0].clientY - this.startP
    }
  },
  touchend:function(event){
    if (this.data.current==8) {
      if (this.moveP<-50) {
        this.animation9.bottom('120%').step()
        this.setData({
          animation_view: this.animation9.export(),
          CanVideoShow: true
        })
      }
    }
  }
})
