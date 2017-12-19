Page({
	data: {
		countdown:''
	},
	onReady: function() {
		var that = this
		
		//倒计时
		var count=3
		this.setData({
			countdown:count
		})
		var countnum=setInterval(function(){
		that.data.countdown=that.data.countdown-1
		//console.log(that.data.countdown)
		that.setData({
		    countdown:that.data.countdown
		})
		if(that.data.countdown==0){
			var startanim = wx.createAnimation({
			    duration: 500,
			    timingFunction: 'ease-in-out',
			})
			this.startanim = startanim;
			startanim.scale(1.2,1.2).opacity(0).step()
			that.setData({
		    	startanimData:startanim.export()
			})
			setTimeout(function() {
				var hiddenkv = wx.createAnimation({
				    duration: 0,
				    timingFunction: 'ease-in-out',
				})
				that.hiddenkv = hiddenkv;
				hiddenkv.scale(0,0).opacity(0).step()
				that.setData({
			    	hiddenkv:hiddenkv.export()
				})
			}.bind(this),250)
		    clearInterval(countnum)
		}  
		},1000)
		
		//判断是否登录，如登录直接进入积分页面
		setTimeout(function() {
	        var sessionkey = 'weapp_session_F2C224D4-2BCE-4C64-AF9F-A6D872000D1A';
			var value = wx.getStorageSync(sessionkey);
			if(value && value.userInfo){
				wx.redirectTo({
					url: '../my/my'
				})
			}else{
				wx.redirectTo({
					url: '../my/my'
				})
				
			}
		}.bind(this),3000)
	}
	
});
