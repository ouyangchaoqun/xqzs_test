//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    hasEmptyGrid: false,
    cur_year: '',
    cur_month: '',
    flag:'true',
    imgUrls: [
      '../images/bg_mood_01.png',
      '../images/bg_mood_02.png',
      '../images/bg_mood_04.png',
    ]
    },
  
  onLoad(options) {
    this.setNowDate();
  },

  swiper_box: function (e) {
    var cur_day = e.currentTarget.dataset.idx;      /**当前点击的日期 */
    this.setData({
      flag: false
    })
  },
  bg_box:function(e){
    this.setData({
      flag:true
    })
  },

  setNowDate: function () {
    var date = new Date();
    var cur_year = date.getFullYear();   /**年份 */
    console.log(cur_year)
    var cur_month = date.getMonth() + 1;    /**月 */
    console.log(cur_month)
    var todayIndex = date.getDay() - 1;    
    var today = date.getDate();              /**日 */
    console.log(today)
    var weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];
    this.calculateEmptyGrids(cur_year, cur_month);          /**调用计算空格子*/
    this.calculateDays(cur_year, cur_month);
    var date2 = new Date();
    var _month = date2.getMonth() +1
    this.setData({
      cur_year: cur_year,
      cur_month: cur_month,
      weeks_ch,
      todayIndex,
      today,
      _month
    })
  },

  getThisMonthDays(year, month) {
    return new Date(year, month, 0).getDate();
  },
  getFirstDayOfWeek(year, month) {
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
  },
  calculateEmptyGrids(year, month) {                                 /**计算空格子*/
    var firstDayOfWeek = this.getFirstDayOfWeek(year, month);
    console.log(firstDayOfWeek)
    var empytGrids = [];
    if (firstDayOfWeek > 0) {
      for (var i = 0; i < firstDayOfWeek; i++) {
          
        empytGrids.push(i);
      }
      console.log(empytGrids)
      this.setData({
        hasEmptyGrid: true,
        empytGrids
      });
    } else {
      this.setData({
        hasEmptyGrid: false,
        empytGrids: []
      });
    }
  },
  calculateDays(year, month) {
    var days = [];

    var thisMonthDays = this.getThisMonthDays(year, month);

    for (var i = 1; i <= thisMonthDays; i++) {
    
      days.push(i);
    }

    this.setData({
      days
    });
  },
  handleCalendar(e) {
    var handle = e.currentTarget.dataset.handle;
    var cur_year = this.data.cur_year;
    var cur_month = this.data.cur_month;
    if (handle === 'prev') {
      var newMonth = cur_month - 1;
      var newYear = cur_year;
      if (newMonth < 1) {
        newYear = cur_year - 1;
        newMonth = 12;
      }

      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);

      this.setData({
        cur_year: newYear,
        cur_month: newMonth
      })

    } else {
      var newMonth = cur_month + 1;
      var newYear = cur_year;
      if (newMonth > 12) {
        newYear = cur_year + 1;
        newMonth = 1;
      }

      this.calculateDays(newYear, newMonth);
      this.calculateEmptyGrids(newYear, newMonth);

      this.setData({
        cur_year: newYear,
        cur_month: newMonth
      })
    }
  }
})

