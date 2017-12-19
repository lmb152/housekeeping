Page({
	data: {
	showhide:"none",
	pageshow:"relative",
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
    itemarray:[{
	    	imgurl:"1",
	    	itemname:"肌初复活原生液",
	    	itemsname:"（微精华原生液）",
	    	itemsname2:"黄金夜修护，肌肤睡饱“美容觉”",
	    	price:"450积分",
	    	pointinfo:"125",
	    	addimgurl:"http://dev.iprotime.com/xcx/images/image/add1.png",
	    	itemtype:1
		},{
	    	imgurl:"2",
	    	itemname:"特润修护肌透精华露",
	    	itemsname:"（第六代小棕瓶）",
	    	itemsname2:"赋活强韧肌底，立现剔透光肌",
	    	price:"590积分",
	    	pointinfo:"30",
	    	addimgurl:"http://dev.iprotime.com/xcx/images/image/add1.png",
	    	itemtype:0
		}],
    goods_amount:1,
    vertical: false,
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 500,
    turn_img:'http://dev.iprotime.com/xcx/images/lamer_detail_22.jpg'
  },
  hiddenfenleilist:function(){
		this.setData({
		    showhide:"none",
		    pageshow:"relative"
		})
		var fenlei = wx.createAnimation({
	        duration: 500,
	        timingFunction: 'ease',
	    })
	    this.fenlei = fenlei;
	    fenlei.left(-300).step()
	    this.setData({
		    fenlei:fenlei.export()
		})
		
		var fenleibg = wx.createAnimation({
	        duration: 0,
	        timingFunction: 'ease',
	    })
	    this.fenleibg = fenleibg;
	    fenleibg.left(-2000).step()
	    this.setData({
		    fenleibg:fenleibg.export()
		})
		
	},
	fenleilist:function(){
		this.setData({
		    showhide:"block",
		    pageshow:"fixed",
		})
		
		var fenlei = wx.createAnimation({
	        duration: 500,
	        timingFunction: 'ease',
	    })
	    this.fenlei = fenlei;
	    fenlei.left(0).step()
	    this.setData({
		    fenlei:fenlei.export()
		})
		
		var fenleibg = wx.createAnimation({
	        duration: 0,
	        timingFunction: 'ease',
	    })
	    this.fenleibg = fenleibg;
	    fenleibg.left(0).step()
	    this.setData({
		    fenleibg:fenleibg.export()
		})
		
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
  },
	hiddencart: function() { 
		var topcart = wx.createAnimation({
	        duration: 500,
	        timingFunction: 'ease',
	    })
	    this.topcart = topcart;
	    topcart.top(-250).step()
	    this.setData({
		    topcart:topcart.export()
		})
		
		var topcartbg = wx.createAnimation({
	        duration: 0,
	        timingFunction: 'ease',
	    })
	    this.topcartbg = topcartbg;
	    topcartbg.top(-2000).step()
	    this.setData({
		    topcartbg:topcartbg.export()
		})
	},
	showaddcart:function(){
		var topcart = wx.createAnimation({
	        duration: 500,
	        timingFunction: 'ease',
	    })
	    this.topcart = topcart;
	    topcart.top(0).step()
	    this.setData({
		    topcart:topcart.export()
		})
		
		var topcartbg = wx.createAnimation({
	        duration: 0,
	        timingFunction: 'ease',
	    })
	    this.topcartbg = topcartbg;
	    topcartbg.top(0).step()
	    this.setData({
		    topcartbg:topcartbg.export()
		})
	},
	goToTrial3: function(){
		wx.switchTab({
		  url: '../mpp2/mpp2'
		})
	},
	onPullDownRefresh: function () {
	console.log('onPullDownRefresh', new Date())
	
		var topcart = wx.createAnimation({
	        duration: 500,
	        timingFunction: 'ease',
	    })
	    this.topcart = topcart;
	    topcart.top(0).step()
	    this.setData({
		    topcart:topcart.export()
		})
		
		var topcartbg = wx.createAnimation({
	        duration: 0,
	        timingFunction: 'ease',
	    })
	    this.topcartbg = topcartbg;
	    topcartbg.top(0).step()
	    this.setData({
		    topcartbg:topcartbg.export()
		})
		
		
		this.setData({
		    showhide:"none",
		    pageshow:"relative"
		})
		var fenlei = wx.createAnimation({
	        duration: 500,
	        timingFunction: 'ease',
	    })
	    this.fenlei = fenlei;
	    fenlei.left(-300).step()
	    this.setData({
		    fenlei:fenlei.export()
		})
		
		var fenleibg = wx.createAnimation({
	        duration: 0,
	        timingFunction: 'ease',
	    })
	    this.fenleibg = fenleibg;
	    fenleibg.left(-2000).step()
	    this.setData({
		    fenleibg:fenleibg.export()
		})
		
		
		
		wx.stopPullDownRefresh({
		  complete: function (res) {
		    console.log(res, new Date())
		  }
		})
	
	},
	onShareAppMessage: function () {
    return {
      title: '雅诗兰黛',
      desc: '特润修护肌透精华露（第六代小棕瓶）',
      path: '/page/spp/spp'
    }
  }
})
