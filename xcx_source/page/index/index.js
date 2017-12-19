Page({
	data:{
	    indicatorDots: true,
	    autoplay: false,
	    interval: 5000,
	    duration: 500,
	    circular: true,
	    pd_tab_01: 'pd_tab_on',
	    pd_tab_02: 'pd_tab_off',
	    tab_id: 1,
	    left_show_01: 'hide',
	    right_show_01: 'show',
	    left_show_02: 'hide',
	    right_show_02: 'show',
	    for_tab_01:'show',
	    for_tab_02:'hide',
	    video_show: 'hide',
	    fixed: 'auto',
	    showhide:"none",
	    pageshow:"relative",
	    pds:[
	    	{
	    		id:0,
	    		pd_img:'http://dev.iprotime.com/xcx/images/el_index_pd_01.jpg',
	    		pd_name: '肌初赋活原生液',
	    		pd_subname: '微精华原生液',
	    		pd_price: '420积分',
	    		pd_content: '125ml',
	    	},
	    	{
	    		id:1,
	    		pd_img:'http://dev.iprotime.com/xcx/images/el_index_pd_02.jpg',
	    		pd_name: '特润修护肌透精华露',
	    		pd_subname: '第六代小棕瓶',
	    		pd_price: '420积分',
	    		pd_content: '30ml'
	    	},
	    	{
	    		id:2,
	    		pd_img:'http://dev.iprotime.com/xcx/images/image/pctpic3.jpg',
	    		pd_name: '肌初赋活原生液',
	    		pd_subname: '微精华原生液',
	    		pd_price: '420积分',
	    		pd_content: '125ml'
	    	},
	    	{
	    		id:3,
	    		pd_img:'http://dev.iprotime.com/xcx/images/el_index_pd_02.jpg',
	    		pd_name: '特润修护肌透精华露',
	    		pd_subname: '第六代小棕瓶',
	    		pd_price: '420积分',
	    		pd_content: '30ml',
	    	}
	    ],
	    pds2:[
	    	{
	    		id:0,
	    		pd_img:'http://dev.iprotime.com/xcx/images/el_index_pd_02.jpg',
	    		pd_name: '肌初赋活原生液',
	    		pd_subname: '微精华原生液',
	    		pd_price: '420积分',
	    		pd_content: '125ml',
	    	},
	    	{
	    		id:1,
	    		pd_img:'http://dev.iprotime.com/xcx/images/el_index_pd_01.jpg',
	    		pd_name: '特润修护肌透精华露',
	    		pd_subname: '第六代小棕瓶',
	    		pd_price: '420积分',
	    		pd_content: '30ml'
	    	},
	    	{
	    		id:2,
	    		pd_img:'http://dev.iprotime.com/xcx/images/image/pctpic3.jpg',
	    		pd_name: '肌初赋活原生液',
	    		pd_subname: '微精华原生液',
	    		pd_price: '420积分',
	    		pd_content: '125ml'
	    	},
	    	{
	    		id:3,
	    		pd_img:'http://dev.iprotime.com/xcx/images/el_index_pd_02.jpg',
	    		pd_name: '特润修护肌透精华露',
	    		pd_subname: '第六代小棕瓶',
	    		pd_price: '420积分',
	    		pd_content: '30ml',
	    	}
	    ],
	    praises: [
	    	{
	    		id:0,
	    		praise_img:'http://dev.iprotime.com/xcx/images/el_index_praise_01.jpg',
	    	},
	    	{
	    		id:1,
	    		praise_img:'http://dev.iprotime.com/xcx/images/el_index_praise_02.jpg',
	    	}
	    ]
	},
	hiddencart: function() { 
		var topcart = wx.createAnimation({
	        duration: 500,
	        timingFunction: 'ease',
	    })
	    this.topcart = topcart;
	    topcart.top(-300).step()
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
		    pageshow:"fixed"
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
	onReady: function (res) {
	    this.videoContext = wx.createVideoContext('myVideo')
	},
	switch_tab_01: function() {
		if (this.data.tab_id==1) {
			return 'pd_tab_on'
		}else{
			this.setData({
				pd_tab_01: 'pd_tab_on',
				pd_tab_02: 'pd_tab_off',
				for_tab_01: 'show',
				for_tab_02: 'hide',
				tab_id: 1
			})
		}
	},
	switch_tab_02: function() {
		if (this.data.tab_id==2) {
			return 'pd_tab_on'
		}else{
			this.setData({
				pd_tab_01: 'pd_tab_off',
				pd_tab_02: 'pd_tab_on',
				for_tab_02: 'show',
				for_tab_01: 'hide',
				tab_id: 2
			})
		}
	},
	scroll_01: function(e){
		// console.log(e)
		if(e.detail.scrollLeft<30){
			this.setData({
				left_show_01:'hide',
				right_show_01:'show'
			})
		}
		if(e.detail.scrollLeft>30&&e.detail.scrollLeft<300){
			this.setData({
				left_show_01:'show',
				right_show_01:'show'
			})
		}
		if(e.detail.scrollLeft>300){
			this.setData({
				right_show_01:'hide',
				left_show_01:'show',
			})
		}
	},
	scroll_02: function(e){
		// console.log(e)
		if(e.detail.scrollLeft<30){
			this.setData({
				left_show_02:'hide',
				right_show_02:'show'
			})
		}
		if(e.detail.scrollLeft>30&&e.detail.scrollLeft<300){
			this.setData({
				left_show_02:'show',
				right_show_02:'show'
			})
		}
		if(e.detail.scrollLeft>300){
			this.setData({
				right_show_02:'hide',
				left_show_02:'show',
			})
		}
	},
	close_layer: function(){
		this.setData({
			video_show:'hide',
			fixed: 'auto'
		})
		this.videoContext.pause()
	},
	show_video: function(){
		this.setData({
			video_show:'show',
			fixed: 'fixed'
		})
		this.videoContext.play()
	},
	goToTrial: function(){
		wx.switchTab({
		  url: '../trial/trial'
		})
	},
	goToTrial2: function(){
		wx.switchTab({
		  url: '../spp/spp'
		})
	},
	goToTrial3: function(){
		wx.switchTab({
		  url: '../mpp2/mpp2'
		})
	},
	goToTrial4: function(){
		wx.switchTab({
		  url: '../trial2/trial2'
		})
	},
	onShareAppMessage: function () {
	    return {
	      title: '雅诗兰黛',
	      desc: '个人中心',
	      path: '/page/index/index'
	    }
	}
})

