// components/singleCard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    id: Number,
    imageUrl: String,
    tagList: Array,
    price: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgHeight: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onImageLoad(e) {
      const oImgW = e.detail.width;
      const oImgH = e.detail.height;
      const app = getApp();
      const imgWidth = app.globalData.imgWidth;
      const pixelRatio = app.globalData.pixelRatio;
      const scale = imgWidth / oImgW;
      const imgHeight = oImgH * scale * pixelRatio;

      this.setData({
        imgHeight: imgHeight
      })
    },
    goToPicDetail() {
      wx.navigateTo({
        url: '/pages/picDetail/picDetail?id=' + this.properties.id
      })
    }
  }
})
