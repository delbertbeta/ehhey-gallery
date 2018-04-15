//index.js
//获取应用实例
const app = getApp()

Page({
  goToIndex() {
    wx.switchTab({
      url: '/pages/list/list',
    })
  }
})
