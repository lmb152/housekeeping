Page({
  data:{
    anum:'',
    animationData:{}
  },
  onShow: function(){
  	  var that=this
  	  var animation = wx.createAnimation({
	      duration: 100,
	      timingFunction: 'ease-in',
	  })
	  that.animation = animation
	  
	  wx.onAccelerometerChange(function(res) {
		  console.log(res.x)
		  //console.log(res.y)
		  //console.log(res.z)
		  if(res.x<0){
			  animation.left(12).right(20).step()
			  that.setData({
		      	animationData:animation.export()
			  })
		  }else if(res.x>0){
			  animation.left(20).right(12).step()
			  that.setData({
		      	animationData:animation.export()
			  })
		  }
		  
		  if(res.y<-0.5){
			  animation.top(20).bottom(12).step()
			  that.setData({
		      	animationData:animation.export()
			  })
		  }else if(res.y>-0.5){
			  animation.top(12).bottom(20).step()
			  that.setData({
		      	animationData:animation.export()
			  })
		  }
		  
	  })
	  
	  
	  
  }
})

