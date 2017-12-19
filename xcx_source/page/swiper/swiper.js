var app = getApp()
Page({
  data: {
    animationData: [],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 500,
    imgUrls: [],
    scrollTop: 100,
    indicatorDots:false,
    current:0
  },
  onLoad: function(option){
    // console.log(app.globalData)
    var psd_index=option.psd_index
    this.setData({
      current: psd_index,
      imgUrls: app.globalData
    })
    wx.setNavigationBarTitle({
      title: app.globalData[psd_index].des
    })
  },
  bindchange:function(event){
    wx.setNavigationBarTitle({
      title: app.globalData[event.detail.current].des
    })
  },
  swipclick: function (e) {//点击图片触发事件
    var src=e.currentTarget.dataset.src;

    console.log(src);
    var previewImage=new Array();
    for(var temp in src){
      previewImage.push(src[temp].img);
    }
    // $.each(src,function(){
    //   previewImage.push(this.img);
    // });
    // console.log(previewImage);
    // previewImage[0]=src;
    // // var that = this;
    // // src = e.currentTarget;
    // // console.log(src);
    wx.previewImage({
      current: previewImage,
      urls: previewImage
    })
      // console.log(this.data.imageUrls[this.data.current]);
  },
})