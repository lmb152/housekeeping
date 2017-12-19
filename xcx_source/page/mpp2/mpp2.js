Page({
	data:{
		listType:0,
		setlistbtn0:"http://dev.iprotime.com/xcx/images/image/tab1.png",
		setlistbtn1:"http://dev.iprotime.com/xcx/images/image/tab4.png",
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
	    	price:"450积分",
	    	pointinfo:"30",
	    	addimgurl:"http://dev.iprotime.com/xcx/images/image/add1.png",
	    	itemtype:0
		},{
	    	imgurl:"3",
	    	itemname:"倾慕唇膏",
	    	itemsname:"",
	    	itemsname2:"型色纽约，唇燃倾慕",
	    	price:"590积分",
	    	pointinfo:"30",
	    	addimgurl:"http://dev.iprotime.com/xcx/images/image/add1.png",
	    	itemtype:1
		},{
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
		},{
	    	imgurl:"3",
	    	itemname:"倾慕唇膏",
	    	itemsname:"",
	    	itemsname2:"型色纽约，唇燃倾慕",
	    	price:"590积分",
	    	pointinfo:"30",
	    	addimgurl:"http://dev.iprotime.com/xcx/images/image/add1.png",
	    	itemtype:1
		}]
	},
	gospp: function() {
		wx.navigateTo({
		  url: '../spp/spp'
		})
	},
	swiperchange: function() { 
		setTimeout(function(){
			this.data.itemarray =this.data.itemarray.concat([{ imgurl:"1", itemname:"肌初复活原生液", itemsname:"（微精华原生液）", itemsname2:"黄金夜修护，肌肤睡饱“美容觉”", price:"450积分", pointinfo:"125", addimgurl:"http://dev.iprotime.com/xcx/images/image/add1.png", itemtype:1 },{ imgurl:"2", itemname:"特润修护肌透精华露", itemsname:"（第六代小棕瓶）", itemsname2:"赋活强韧肌底，立现剔透光肌", price:"590积分", pointinfo:"30", addimgurl:"http://dev.iprotime.com/xcx/images/image/add1.png", itemtype:0 },{ imgurl:"3", itemname:"倾慕唇膏", itemsname:"", itemsname2:"型色纽约，唇燃倾慕", price:"590积分", pointinfo:"30", addimgurl:"http://dev.iprotime.com/xcx/images/image/add1.png", itemtype:1 },{ imgurl:"1", itemname:"肌初复活原生液", itemsname:"（微精华原生液）", itemsname2:"黄金夜修护，肌肤睡饱“美容觉”", price:"450积分", pointinfo:"125", addimgurl:"http://dev.iprotime.com/xcx/images/image/add1.png", itemtype:1 },{ imgurl:"2", itemname:"特润修护肌透精华露", itemsname:"（第六代小棕瓶）", itemsname2:"赋活强韧肌底，立现剔透光肌", price:"590积分", pointinfo:"30", addimgurl:"http://dev.iprotime.com/xcx/images/image/add1.png", itemtype:0 },{ imgurl:"3", itemname:"倾慕唇膏", itemsname:"", itemsname2:"型色纽约，唇燃倾慕", price:"590积分", pointinfo:"30", addimgurl:"http://dev.iprotime.com/xcx/images/image/add1.png", itemtype:1 }])
		    this.setData({
		      itemarray: this.data.itemarray
		    })
	    }.bind(this), 1000) 
	},
	setlistshow0: function() {
		this.setData({
			listType: 0,
			setlistbtn0:"http://dev.iprotime.com/xcx/images/image/tab1.png",
			setlistbtn1:"http://dev.iprotime.com/xcx/images/image/tab4.png"
	    })
	},
	setlistshow1: function() {
		this.setData({
			listType: 1,
			setlistbtn0:"http://dev.iprotime.com/xcx/images/image/tab2.png",
			setlistbtn1:"http://dev.iprotime.com/xcx/images/image/tab3.png"
	    })

	}
})
