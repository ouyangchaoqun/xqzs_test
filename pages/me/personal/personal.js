//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    array: [
      "海淀区",
      "朝阳区",
      "昌平区",
      "东城区",
      "西城区",
      "丰台区",
      "石景山区",
      "大兴区",
      "顺义区",
      "通州区",
      "房山区",
      "密云区",
      "怀柔区",
      "平谷区",
      "延庆区"
    ],
    index: 1,
    date: '1990-01-01'
  },
  bindchanges: function (e) {//方法名不能与属性名相同
    this.setData({
      index: e.detail.value
    })

  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value

    })
  }
})