//trial.js
//获取应用实例
var app = getApp()
Page({
  data: {
    is_or_no_mark: true,
    is_or_no: 'http://dev.iprotime.com/xcx/images/check_pic_on.png',
    city_array: ['请选择城市'],
    store_array: ['请选择专柜'],
    city_index: 0,
    store_index: 0,
    name:'',
    mobile:'',
    email:'',
    city_store:[
      {
        "city":"上海",
        "counter":["上海梅龙镇","上海东方","上海连卡佛","上海八佰伴","上海虹桥友谊","上海久光","上海国金"]
      },
      {
        "city":"石家庄",
        "counter":["石家庄北国","石家庄先天下"]
      },
      {
        "city":"北京",
        "counter":["北京赛特","北京汉光","北京燕莎","北京SKP","北京翠微","北京双安","北京连卡佛"]
      },
      {
        "city":"天津",
        "counter":["天津友谊"]
      },
      {
        "city":"太原",
        "counter":["太原华宇","太原王府井","太原天美"]
      },
      {
        "city":"沈阳",
        "counter":["沈阳中兴","沈阳卓展"]
      },
      {
        "city":"长春",
        "counter":["长春卓展","长春欧亚"]
      },
      {
        "city":"大连",
        "counter":["大连麦凯乐","大连友谊"]
      },
      {
        "city":"哈尔滨",
        "counter":["哈尔滨远大"]
      },
      {
        "city":"济南",
        "counter":["济南银座"]
      },
      {
        "city":"青岛",
        "counter":["青岛海信"]
      },
      {
        "city":"郑州",
        "counter":["郑州丹尼斯","郑州大卫城"]
      },
      {
        "city":"呼和浩特",
        "counter":["呼和浩特维多利"]
      },
      {
        "city":"南京",
        "counter":["南京德基","南京金鹰A","南京金鹰B"]
      },
      {
        "city":"苏州",
        "counter":["苏州美罗"]
      },
      {
        "city":"无锡",
        "counter":["无锡八佰伴"]
      },
      {
        "city":"徐州",
        "counter":["徐州金鹰"]
      },
      {
        "city":"合肥",
        "counter":["合肥银泰"]
      },
      {
        "city":"杭州",
        "counter":["杭州大夏","杭州银泰"]
      },
      {
        "city":"宁波",
        "counter":["宁波银泰"]
      },
      {
        "city":"温州",
        "counter":["温州时代广场"]
      },
      {
        "city":"成都",
        "counter":["成都王府井","成都仁和人东","成都连卡佛","成都仁和光华"]
      },
      {
        "city":"重庆",
        "counter":["重庆世纪新都","重庆太平洋"]
      },
      {
        "city":"兰州",
        "counter":["兰州国芳"]
      },
      {
        "city":"贵阳",
        "counter":["贵阳国贸"]
      },
      {
        "city":"昆明",
        "counter":["昆明金格汇都","昆明金格时光","昆明百盛"]
      },
      {
        "city":"长沙",
        "counter":["长沙友谊","长沙平和堂"]
      },
      {
        "city":"广州",
        "counter":["广州友谊"]
      },
      {
        "city":"武汉",
        "counter":["武商广场","武汉群光"]
      },
      {
        "city":"西安",
        "counter":["西安金花钟楼店","西安金花高新店"]
      },
      {
        "city":"其他",
        "counter":[]
      }
    ]
  },
  onLoad: function(){
    var i = 0
    var b = ['请选择城市']
    for (i in this.data.city_store) {
      b.push(this.data.city_store[i].city)
    }
    this.setData({
      city_array: b
    })
  },
  bind_city: function(e){
    this.setData({
      city_index: e.detail.value,
      store_index: 0,
      store_array: ['请选择专柜']
    })
    if (e.detail.value>0) {
      var c = this.data.store_array.concat(this.data.city_store[e.detail.value-1].counter);
      this.setData({
        store_array: c
      })
    }
  },
  bind_store: function(e){
    this.setData({
      store_index: e.detail.value
    })
  },
  bind_name: function(e){
    this.setData({
      name: e.detail.value
    })
  },
  bind_mobile: function(e){
    this.setData({
      mobile: e.detail.value
    })
  },
  bind_email: function(e){
    this.setData({
      email: e.detail.value
    })
  },
  agreement: function(){
    if (this.data.is_or_no_mark) {
      this.setData({
        is_or_no: 'http://dev.iprotime.com/xcx/images/check_pic_off.png',
        is_or_no_mark: false
      })
    }else{
      this.setData({
        is_or_no: 'http://dev.iprotime.com/xcx/images/check_pic_on.png',
        is_or_no_mark: true
      })
    }
  },
  confirm_submit: function(){
    if (this.data.name=='') {
      wx.showToast({
        title: '请输入姓名',
        icon: 'success',
        duration: 2000
      })
      return false
    }
    if (this.data.mobile==''||!this.data.mobile.match(/^(1(([3578][0-9])|(47)))\d{8}$/)) {
      wx.showToast({
        title: '请输入正确手机号',
        icon: 'success',
        duration: 2000
      })
      return false
    }
    if (this.data.email==''||!this.data.email.match(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/)) {
      wx.showToast({
        title: '请输入正确邮箱',
        icon: 'success',
        duration: 2000
      })
      return false
    }
    if (this.data.city_index==0||this.data.store_index==0) {
      wx.showToast({
        title: '请选择城市和专柜',
        icon: 'success',
        duration: 2000
      })
      return false
    }
  },
  check_route: function(){
    if (this.data.store_index==0) {
      wx.showToast({
        title: '请选择城市和专柜',
        icon: 'success',
        duration: 2000
      })
    }else{
      wx.openLocation({
        latitude: 31.20447,
        longitude: 121.421,
        name:this.data.store_array[this.data.store_index],
        scale: 20
      })
    }
  }
})
