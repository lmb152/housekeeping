App({
	globalData: [],
	onLaunch: function() {
		wx.login({
		  success: function(res) {
		    if (res.code) {
		    	wx.getSetting({
				    success(res_info) {
				        if (!res_info['scope.userInfo']) {
				            wx.authorize({
				                scope: 'scope.userInfo',
				                success(){
				                	wx.getUserInfo({
										withCredentials:true,
										success: function(res_info) {
											wx.request({
												url:'https://xcx.iprotime.com/xcx_api/getUserInfo.php',
												header: {
												    'content-type': 'application/json'
												},
												dataType:'json',
										        data:{
										        	code:res.code,
										        	iv:res_info.iv,
										        	encryptedData:res_info.encryptedData
										        },
										        success:function(callback){
										        	console.log(callback.data)
										        	var data=callback.data
										        	data=data.split('||')
										        	console.log(data)
											        if(callback.data){
											        	wx.setStorageSync('unionId', data[1])
											        }
											        var page_id=wx.getStorageSync('dd_id')
											        wx.redirectTo({
													  url: '/page/list/list?nid='+page_id
													})
											    },
											    fail:function(){
											    	wx.showToast({
									                  title: '请先通过授权',
									                  icon: 'success',
									                  duration: 2000
									                })
									                wx.login()
											    }
											})
										}
									})
				                }
				            })
				        }
				    }
				})
		    	
		    }else{
				wx.showToast({
					title: '请先通过授权',
					icon: 'success',
					duration: 2000
				})
				wx.login()
		    }
		  },
		  fail:function(){
		  	wx.showToast({
				title: '请先通过授权',
				icon: 'success',
				duration: 2000
			})
			wx.login()
		  }
		})
	}
})
