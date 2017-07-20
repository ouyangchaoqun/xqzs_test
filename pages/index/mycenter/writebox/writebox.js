//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    imgs: [],
    flag:false,
    hasLocation: false,
    name:"所在位置"
  },
  //选择位置位置
  chooseLocation: function (e) {
    console.log(e)
    var that = this
    wx.chooseLocation({
      success: function (res) {
        // success
        console.log(res)
        console.log(res.name)
        if(res.name == ''){
          that.setData({
            name:res.address,
            hasLocation: true,
            location: {
              longitude: res.longitude,
              latitude: res.latitude
            }
          })
        }else{
          that.setData({
            name: res.name,
            hasLocation: true,
            location: {
              longitude: res.longitude,
              latitude: res.latitude
            }
          })
        }
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  addPhoto:function(){
    
   var _this = this;
   wx.chooseImage({
     count: 3, // 
     sizeType: ['original', 'compressed'], 
     sourceType: ['album', 'camera'], 
     success: function (res) {
       var img = _this.data.imgs.concat(res.tempFilePaths);
       if(img.length<=3){
         _this.setData({
           imgs: img
         })
       }else{
         _this.setData({
           flag:true
         })
        console.log("最多只能上传三张图片")
       }
     }
   })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
