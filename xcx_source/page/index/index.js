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
	    itemarray:[]
	},
	onLoad:function(){
		var that=this;
		wx.request({
			url: 'https://xcx.iprotime.com/ishengao/wechat_app', 
			data: {},
			header: {
			  'content-type': 'application/json'
			},
			success: function(res) {
				// console.log(res.data)
				that.setData({
					itemarray:res.data
				})
			}
		})
	},
	intervalChange:function(e) {
		this.setData({
		  interval: e.detail.value
		})
	},
	durationChange: function(e) {
		this.setData({
			duration: e.detail.value
		})
	},
	onReady: function (res) {
	    this.videoContext = wx.createVideoContext('myVideo')
	},
	godetails:function(event){
		var nid=event.currentTarget.dataset.alphaBeta
		wx.redirectTo({
		  url: '../list/list?nid='+nid
		})
	},
	onShareAppMessage: function () {
	    return {
	      title: '设计稿演示',
	      desc: '个人中心',
	      path: '/page/index/index'
	    }
	}
})


