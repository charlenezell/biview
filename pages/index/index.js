//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    inputShowed: false,
    inputVal: ""
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false,
      filteredTotleRankList: this.data.totleRankList
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: "",
      filteredTotleRankList: this.data.totleRankList
    });
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  bindKeyInput: function (e) {
    this.setData({
      keyword: e.detail.value,
      inputVal: e.detail.value
    });
    if (e.detail.value.trim()) {
      let rst = app.filterArrayByKeywords(this.data.totleRankList, "elfName", e.detail.value)
      if (rst.length > 0) {
        this.setData({
          filteredTotleRankList: rst
        })
        // this.setData({
        // toView:"jl_"+rst[0].elfName
        // });
      } else {
        this.setData({
          filteredTotleRankList: []
        });
      }
    } else {
      this.setData({
        filteredTotleRankList: this.data.totleRankList
      })
    }

  },
  onLoad: function () {
    //调用应用实例的方法获取全局数据
    app.getJLTotalRank().then(data => {
      let addRank = data.map((v, k) => {
        return Object.assign({}, v, {
          rank: k + 1
        });
      })
      this.setData({
        totleRankList: addRank,
        filteredTotleRankList: addRank
      })
    })
  }
})