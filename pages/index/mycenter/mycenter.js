var wxCharts = require('../../../wxcharts.js');
var app = getApp();
var areaChart = null;
var areaChart2 = null;
Page({
  data: {
  },
  touchHandler: function (e) {
   
    areaChart.showToolTip(e);
  },
  onLoad: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    areaChart = new wxCharts({
      canvasId: 'areaCanvas',
      type: 'area',
      categories: ['05月10', '11', '12', '13', '14', '15',"16"],
      animation: true,
      legend :false,
      dataLabel :false,
      dataPointShape :true,
      series: [{
       data: [0, 8, 0, 9, 0, 1,8],
        color:"#ffffff"
      }],
      yAxis:{
        disabled :true,

      },
      
      xAxis: {
        fontColor: '#ffffff',
        disableGrid :true
      },
      width: windowWidth,
      height: 200
    });
    
    areaChart2 = new wxCharts({
      canvasId: 'areaCanvas2',
      type: 'area',
      categories: ['05月10', '11', '12', '13', '14', '15', "16"],
      animation: true,
      legend: false,
      dataLabel: false,
      dataPointShape: true,
      series: [{
        data: [5,1,2,4,5,6,9],
        color: "#ffffff"
      }],
      yAxis: {
        disabled: true,

      },

      xAxis: {
        fontColor: '#ffffff',
        disableGrid: true
      },
      width: windowWidth,
      height: 200
    });
    
  }
});