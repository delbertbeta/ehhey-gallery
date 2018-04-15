// components/cardList/cardList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: 'recommend'
    },
    target: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    col1: [
      {
        id: 0,
        image: '/test/pic1.jpg',
        tag: ['你好啊', '233'],
        price: 0
      },
      {
        id: 1,
        image: '/test/pic3.jpg',
        tag: ['你好啊', '233'],
        price: 0
      }
    ],
    col2: [
      {
        id: 2,
        image: '/test/pic2.jpg',
        tag: ['你好啊', '233'],
        price: 0
      },
      {
        id: 3,
        image: '/test/pic4.jpg',
        tag: ['风景', '233'],
        price: 0
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
