Page({
    data:{
    	cart:0,
    	itemarray:[{
	    	imgurl:"../../images/product_pc_img_10t.png",
	    	itemname:"护理",
	    	pointinfo:"1800",
	    	cartnum:0
    	},{
	    	imgurl:"../../images/product_pc_img_10t.png",
	    	itemname:"护理",
	    	pointinfo:"1800",
	    	cartnum:0
    	},{
	    	imgurl:"../../images/product_pc_img_10t.png",
	    	itemname:"护理",
	    	pointinfo:"1800",
	    	cartnum:0
    	},{
	    	imgurl:"../../images/product_pc_img_10t.png",
	    	itemname:"护理",
	    	pointinfo:"1800",
	    	cartnum:0
    	}]
    },
    bindTap1: function() {
		wx.navigateTo({
		  url: '../detail2/detail2?id=1'
		})
	},
    //加载更多开始
    swiperchange: function(e) {
    	//加载更多显示
    	var show = wx.createAnimation({
	        duration: 500,
	        timingFunction: 'ease',
	    })
	    this.show = show;
	    show.opacity(1).step()
		this.setData({
	        loading:show.export()
	    }) 
    	setTimeout(function(){
	    	this.data.itemarray =this.data.itemarray.concat([{imgurl:'../../images/product_pc_img_10t.png',itemname: '护理',pointinfo:'1500',cartnum:0}])
		    this.setData({
		      itemarray: this.data.itemarray
		    })
		    
		    //加载更多隐藏
		    var hide = wx.createAnimation({
		        duration: 500,
		        timingFunction: 'linear',
		    })
		    this.hide = hide;
		    hide.opacity(0).step()
		    this.setData({
		        loading:hide.export()
		    })
		    
    	}.bind(this), 2000)
    },
    
    //加入购物车动画
    addcart:function(event){
    	var index_num=event.target.id
    	//console.log(this.data.itemarray[index_num].cartnum)
    	this.data.cart=this.data.cart+1
    	this.data.itemarray[index_num].cartnum=this.data.itemarray[index_num].cartnum+1
    	this.setData({
    	   cart:this.data.cart,
		   itemarray:this.data.itemarray
		})   
    },
    onLoad: function() {

    	//加载更多转圈小图片
    	var loadimg = wx.createAnimation({
	        duration: 500,
	        timingFunction: 'linear',
	    })
	    this.loadimg = loadimg;
	    var itemd=180
    	setInterval(function(){
	    	loadimg.rotate(itemd).step()
	    	itemd=itemd+180
			this.setData({
		        loadimg:loadimg.export()
		    })	
    	}.bind(this),500)

    },
    onPullDownRefresh: function(){
    	var that = this
    	console.log("123");
    	var topcart = wx.createAnimation({
	        duration: 500,
	        timingFunction: 'ease',
	    })
	    that.topcart = topcart;
	    topcart.top(0).step()
	    that.setData({
		    topcart:topcart.export()
		})
		
		var topcartbg = wx.createAnimation({
	        duration: 10,
	        timingFunction: 'ease',
	    })
	    that.topcartbg = topcartbg;
	    topcartbg.top(0).step()
	    that.setData({
		    topcartbg:topcartbg.export()
		})
		console.log("456");
		wx.stopPullDownRefresh()
    	
    },
    clickbg: function(){
	    var topcart = wx.createAnimation({
	        duration: 500,
	        timingFunction: 'ease',
	    })
	    this.topcart = topcart;
	    topcart.top(-450).step()
	    this.setData({
		    topcart:topcart.export()
		})
		
		var topcartbg = wx.createAnimation({
	        duration: 10,
	        timingFunction: 'ease',
	    })
	    this.topcartbg = topcartbg;
	    topcartbg.top(-1000).step()
	    this.setData({
		    topcartbg:topcartbg.export()
		})
    }
})

