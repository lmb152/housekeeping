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
		point:'',
	userListInfo:[
		{
			icon: '../../images/iconfont-dingdan.png',
			text: '试用臻享',
			binVT:'bindViewTap2',
			isunread: false,
			unreadNum: 2
		},
		{
			icon: '../../images/iconfont-card.png',
			text: '积分兑礼',
			binVT:'bindViewTap1',
			isunread: false,
			unreadNum: 2
		},  
		{
			icon: '../../images/iconfont-shouhuodizhi.png',
			text: '我的地址',
			binVT:'bindViewTap3',
			isunread: false,
			unreadNum: 2
		},
		{
			icon: '',
			text: '退出',
			binVT:'logoutTap',
			isunread: false,
			unreadNum: 2
		}
	]
	},
	bindViewTap1: function() {
		wx.navigateTo({
		  url: '../index/index'
		})
	},
	bindViewTap2: function() {
		wx.navigateTo({
		  url: '../swiper2/swiper2'
		})
	},
	bindViewTap3: function() {
		wx.navigateTo({
		  url: '../map/map'
		})
	},
	bindViewTap4: function() {
		wx.navigateTo({
		  url: '../swiper2/swiper2'
		})
	},
	logoutTap() {
		// 清除保存在 storage 的会话信息
		qcloud.clearSession();
		showSuccess('退出成功');
		wx.redirectTo({
			url: '../home/home'
		})
	},
	onReady: function() {
		showBusy("正在登录")
		var that = this
        qcloud.login({
            success(result) {
                showSuccess('登录成功');
                //console.log('登录成功', result);
                donghua();
            },fail(error) {
                showModel('登录失败', error);
                //console.log('登录失败', error);
            }
        });
	
		function donghua(){

		//调用应用实例的方法获取全局数据
		var sessionkey = 'weapp_session_F2C224D4-2BCE-4C64-AF9F-A6D872000D1A';
		var value = wx.getStorageSync(sessionkey);
		var userInfo = value.userInfo;
		console.log(value);
		//调用应用实例的方法获取全局数据
		that.setData({
		userInfo: userInfo
		});
        
        //nick动画开始
		//初始动画对象
		var animation = wx.createAnimation({
			duration: 1500,
			timingFunction: 'ease',
		})
		that.animation = animation;
		animation.opacity(1).step({duration:1500})
		that.setData({
			animationData:animation.export()
		})	
		//动画元素开始变化
		setTimeout(function() {
			animation.top(30).step({duration:1500})
			that.setData({
				animationData:animation.export()
			})
		}.bind(that),1000)


		//菜单动画开始
		var an1 = wx.createAnimation({
			duration: 1000,
			timingFunction: 'ease',
		})
		that.an1 = an1;	
		setTimeout(function() {
		an1.opacity(1).top(130).step()
		that.setData({
			anData1:an1.export()
		})
		}.bind(that),2500)


		//积分动画开始
		var an2 = wx.createAnimation({
			duration: 1000,
			timingFunction: 'ease',
		})
		that.an2 = an2;
		an2.scale(0.5,0.5).step()
		that.setData({
			anData2:an2.export()
		})	
		setTimeout(function() {
			an2.opacity(1).scale(1,1).step()
			that.setData({
				anData2:an2.export()
			})
			var pointnum=0
			var pointsum=1908
			that.setData({
				point:pointnum
			})
			var pointc=setInterval(function(){
				pointnum=pointnum+20
				if(pointnum>pointsum){
				  pointnum=pointsum
				}
				that.setData({
				point:pointnum
				})
				if(pointnum==pointsum){
				  clearInterval(pointc)
				}
			},10)

		}.bind(that),2500)
			
		}
		
	},
	onPullDownRefresh: function(){
		wx.stopPullDownRefresh()
		var that = this
		var an2 = wx.createAnimation({
			duration: 1000,
			timingFunction: 'ease',
		})
		this.an2 = an2;
		an2.scale(0.5,0.5).step()
		this.setData({
			anData2:an2.export()
		})	
		setTimeout(function() {
			an2.opacity(1).scale(1,1).step()
			this.setData({
				anData2:an2.export()
			})
			var pointnum=0
			var pointsum=1908
			this.setData({
				point:pointnum
			})
			var pointc=setInterval(function(){
				pointnum=pointnum+20
				if(pointnum>pointsum){
					pointnum=pointsum
				}
				that.setData({
					point:pointnum
				})
				if(pointnum==pointsum){
					clearInterval(pointc)
				}
			},10)
		  
		}.bind(this),500)
		
	}
  
  
})