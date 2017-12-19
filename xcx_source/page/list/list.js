var app = getApp()
Page({
  data: {
    animationData: [],
    imgUrls:[],
    canclick: false,
    isedit:0
  },
  onLoad: function(option){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 1500
    }),
    
    // wx.getStorage({
    //   key: 'unionId',
    //   success: function(res) {
    //     this.data.unionId=res.data
    //       console.log(res.data)
    //   },
    //   fail : function(res){
    //     console.log(res)
    //   } 
    // })
    setTimeout(function(){
      this.data.canclick=true
    }.bind(this),1500)
    var nid=option.nid
    if(!nid){
      nid=4;
    }
    wx.setStorageSync('dd_id',nid)
    var that=this;
    var unionId=wx.getStorageSync('unionId')

    wx.checkSession({
      success: function(){
        wx.request({
          url: 'https://xcx.iprotime.com/ishengao/new_wechat_app_single/'+nid+'/'+unionId,
          // data: {
          //   'unionId':unionId
          // },
          header: {
            'content-type': 'application/json'
          },
          success: function(res) {
              that.setData({
                imgUrls:res.data,
              })
            app.globalData = app.globalData.concat(res.data)
          }
        })
        
      },
      fail: function(){
        wx.login() 
      }
    });
    
  },
  onPullDownRefresh: function(){
    var page_id=wx.getStorageSync('dd_id')
    wx.redirectTo({
      url: '../list/list?nid='+page_id
    })
  },
  show_swiper:function(event){
    if (this.data.canclick) {
      var psd_index=event.currentTarget.dataset.alphaBeta
      wx.navigateTo({
        url: '../swiper/swiper?psd_index='+psd_index
      })
    }
  },
  swipclick: function (e) {//点击图片触发事件
    var src=e.currentTarget.dataset.src;
    var now_img=e.currentTarget.dataset.first;

    var previewImage=new Array();
    var beforeImage=new Array();
    for(var temp in src){
      // console.log(temp);
      // if (temp<now_img){
      //   beforeImage.push(src[temp].img);
      // }else if(temp>now_img){
        previewImage.push(src[temp].img);
      // }
    }
    // previewImage.concat(beforeImage);
    console.log(previewImage);
    // $.each(src,function(){
    //   previewImage.push(this.img);
    // });
    // console.log(previewImage);
    // previewImage[0]=src;
    // // var that = this;
    // // src = e.currentTarget;
    // // console.log(src);
    wx.previewImage({
      current: previewImage[now_img],
      urls: previewImage
    })
      // console.log(this.data.imageUrls[this.data.current]);
  },
  swipdelete:function(e){
    var ddc_id=e.currentTarget.dataset.ddid;
    wx.showModal({
      title: '提示',
      content: '确认删除？',
      success: function(res) {
        if (res.confirm) {
          
          wx.request({
            url: 'https://xcx.iprotime.com/ishengao/delete_designdraft_content/'+ddc_id,
            header: {
              'content-type': 'application/json'
            },
            success: function(res) {
              if(res.data.status){
                wx.showToast({
                  title: '删除成功',
                  icon: 'success',
                  duration: 2000
                })
                var page_id=wx.getStorageSync('dd_id')
                wx.redirectTo({
                  url: '../list/list?nid='+page_id
                })
                console.log(res);
              }

            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
  }
})