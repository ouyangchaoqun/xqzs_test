//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (res) {
          console.log(res)
        /*  if(res.code){
            //发起网络请求
            wx.request({
              url: 'https://api.weixin.qq.com/sns/jscode2session?',
              data:{
                js_code:res.code,
                appid:APPID,
                secret:SECRET,
                grant_type:authorization_code
              }
            })
          }else{
            console.log('获取用户登录失败'+res.errMsg)
          }
          */
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              console.log(res)

              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    
  }
})