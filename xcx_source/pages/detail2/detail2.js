//detail.js
//获取应用实例
var app = getApp()
Page({
  data: {
    detail_data:[
      {
        id: 0,
        detail_kvs:[
          {img_src:'http://dev.iprotime.com/xcx/images/txt1.png'},
          {img_src:'http://dev.iprotime.com/xcx/images/txt2.png'},
          {img_src:'http://dev.iprotime.com/xcx/images/txt3.png'}
        ],
        detail_name:'浓缩修护眼部精华霜',
        detail_style:'淡化纹路 焕亮眼周',
        detail_price:'¥2,599.00'
      },
      {
        id: 1,
        detail_kvs:[
          {img_src:'http://dev.iprotime.com/xcx/images/txt1.png'},
          {img_src:'http://dev.iprotime.com/xcx/images/txt2.png'},
          {img_src:'http://dev.iprotime.com/xcx/images/txt3.png'}
        ],
        detail_name:'焕肤水',
        detail_style:'舒缓净化 唤醒肌肤',
        detail_price:'¥2,599.00'
      },
      {
        id: 2,
        detail_kvs:[
          {img_src:'http://dev.iprotime.com/xcx/images/txt1.png'},
          {img_src:'http://dev.iprotime.com/xcx/images/txt2.png'},
          {img_src:'http://dev.iprotime.com/xcx/images/txt3.png'}
        ],
        detail_name:'焕眼组合',
        detail_style:'淡化纹路 焕亮眼周',
        detail_price:'¥2,599.00'
      },
      {
        id: 3,
        detail_kvs:[
          {img_src:'http://dev.iprotime.com/xcx/images/txt1.png'},
          {img_src:'http://dev.iprotime.com/xcx/images/txt2.png'},
          {img_src:'http://dev.iprotime.com/xcx/images/txt3.png'}
        ],
        detail_name:'密集焕颜精华液',
        detail_style:'稀世凝炼 醇致结晶',
        detail_price:'¥2,599.00'
      }
    ],
    goods_amount:1,
    vertical: false,
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 500,
    turn_img:'http://dev.iprotime.com/xcx/images/lamer_detail_22.jpg'
  },
  onLoad: function(options){
    this.setData({
      id:options.id
    })
    this.animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation1 = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 0,
      timingFunction: "linear",
      delay: 0
    })
    this.animation2 = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 0,
      timingFunction: "linear",
      delay: 0
    })
    this.animation3 = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 0,
      timingFunction: "linear",
      delay: 0
    })
    this.animation4 = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 0,
      timingFunction: "linear",
      delay: 0
    })
    this.animation5 = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 0,
      timingFunction: "linear",
      delay: 0
    })
    this.Ishow = false
  },
  showChoices: function(){
    if (this.Ishow) {
      this.Ishow = false
      this.animation.bottom('-370rpx').step()
      this.animation5.height('1057rpx').step()
      this.setData({
        animation_last: this.animation5.export(),
        turn_img: 'http://dev.iprotime.com/xcx/images/lamer_detail_22.jpg'
      })
    }else{
      this.Ishow = true
      this.animation.bottom('0rpx').step()
      this.animation5.height('1427rpx').step()
      this.setData({
        animation_last: this.animation5.export(),
        turn_img: 'http://dev.iprotime.com/xcx/images/lamer_detail_24.jpg'
      })
    }
    this.setData({
      bottom_bar: this.animation.export()
    })
  },
  reduce_amount: function(){
    if (this.data.goods_amount==1) {
      return;
    }else{
      this.setData({ goods_amount:this.data.goods_amount-1})
    }
  },
  increase_amount: function(){
    if (this.data.goods_amount==99) {
      return;
    }else{
      this.setData({ goods_amount:this.data.goods_amount+1})
    }
  },
  choose_item1: function(){
    this.animation1.backgroundColor('#8d111b').step()
    this.animation2.backgroundColor('#fff').step()
    this.animation3.backgroundColor('#fff').step()
    this.animation4.backgroundColor('#fff').step()
    this.setData({animation1: this.animation1.export()})
    this.setData({animation2: this.animation2.export()})
    this.setData({animation3: this.animation3.export()})
    this.setData({animation4: this.animation4.export()})
  },
  choose_item2: function(){
    this.animation1.backgroundColor('#fff').step()
    this.animation2.backgroundColor('#8d111b').step()
    this.animation3.backgroundColor('#fff').step()
    this.animation4.backgroundColor('#fff').step()
    this.setData({animation1: this.animation1.export()})
    this.setData({animation2: this.animation2.export()})
    this.setData({animation3: this.animation3.export()})
    this.setData({animation4: this.animation4.export()})
  },
  choose_item3: function(){
    this.animation1.backgroundColor('#fff').step()
    this.animation2.backgroundColor('#fff').step()
    this.animation3.backgroundColor('#8d111b').step()
    this.animation4.backgroundColor('#fff').step()
    this.setData({animation1: this.animation1.export()})
    this.setData({animation2: this.animation2.export()})
    this.setData({animation3: this.animation3.export()})
    this.setData({animation4: this.animation4.export()})
  },
  choose_item4: function(){
    this.animation1.backgroundColor('#fff').step()
    this.animation2.backgroundColor('#fff').step()
    this.animation3.backgroundColor('#fff').step()
    this.animation4.backgroundColor('#8d111b').step()
    this.setData({animation1: this.animation1.export()})
    this.setData({animation2: this.animation2.export()})
    this.setData({animation3: this.animation3.export()})
    this.setData({animation4: this.animation4.export()})
  }
})
