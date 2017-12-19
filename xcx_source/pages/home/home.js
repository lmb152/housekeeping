var app = getApp()

// 引入 QCloud 小程序增强 SDK
var qcloud = require('../../vendor/qcloud-weapp-client-sdk/index');

// 引入配置
var config = require('../../config');
// 显示繁忙提示
var showBusy = text => wx.showToast({
    title: text,
    icon: 'loading',
    duration: 1000
});
// 显示成功提示
var showSuccess = text => wx.showToast({
    title: text,
    icon: 'success'
});

Page({
	data: {
	},
    starLoginTap:function() {
        wx.redirectTo({
			url: '../my/my'
		})
    },
	onReady: function() {
		var that = this

		//logo动画
		var topimg = wx.createAnimation({
	        duration: 1500,
	        timingFunction: 'ease-in',
	    })
		this.topimg = topimg;
		topimg.scale(0.7,0.7).step()
		this.setData({
	        topimg:topimg.export()
	    })
	    
	    //光圈动画
	    var borderline = wx.createAnimation({
	        duration: 1000,
	        timingFunction: 'ease-in',
	    })
	    this.borderline = borderline;
	    borderline.scale(1,1).opacity(0).step({duration:0})
		this.setData({
	        borderline:borderline.export()
	    })
	    
		setTimeout(function() {
		  	topimg.scale(1,1).step({duration:1000})
		  	this.setData({
		    	topimg:topimg.export()
			})
			
		  	setTimeout(function() {
				borderline.scale(1.5,1.5).opacity(0.3).step({duration:1000})
				this.setData({
			        borderline:borderline.export()
			    })
			    
			    setTimeout(function() {
				    borderline.scale(2,2).opacity(0).step({duration:1000})
					this.setData({
				        borderline:borderline.export()
				    })
			    }.bind(this),1000)
			    
		    }.bind(this),1000)
		    
	    }.bind(this),1500)




	//logo动画循环
	setInterval(function(){
	    //logo动画
		var topimg = wx.createAnimation({
	        duration: 4500,
	        timingFunction: 'ease-in',
	    })
		this.topimg = topimg;
		topimg.scale(0.8,0.8).step()
		this.setData({
	        topimg:topimg.export()
	    })
	    
	    //光圈动画
	    var borderline = wx.createAnimation({
	        duration: 1000,
	        timingFunction: 'ease-in',
	    })
	    this.borderline = borderline;
	    borderline.scale(1,1).opacity(0).step({duration:0})
		this.setData({
	        borderline:borderline.export()
	    })
	    
		setTimeout(function() {
		  	topimg.scale(1,1).step({duration:1000})
		  	this.setData({
		    	topimg:topimg.export()
			})
			
		  	setTimeout(function() {
				borderline.scale(1.5,1.5).opacity(0.1).step({duration:1000})
				this.setData({
			        borderline:borderline.export()
			    })
			    
			    setTimeout(function() {
				    borderline.scale(2,2).opacity(0).step({duration:1000})
					this.setData({
				        borderline:borderline.export()
				    })
			    }.bind(this),1000)
			    
		    }.bind(this),1000)
		    
	    }.bind(this),4500)	
	        
	}.bind(this),7500)


	//button动画
	var buttonData = wx.createAnimation({
	    duration: 1000,
	    timingFunction: 'ease-in',
	})
	this.buttonData = buttonData;
	buttonData.scale(.2,.2).opacity(0).step({duration:0})
	this.setData({
	    buttonData:buttonData.export()
	})
	setTimeout(function() {
	  buttonData.scale(1,1).opacity(1).step()
	  this.setData({
	    buttonData:buttonData.export()
	  })
	}.bind(this),1000)


	}
  
  
})