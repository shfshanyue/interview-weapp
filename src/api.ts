import Taro from '@tarojs/taro'

function starQuestion (id: string) {
  Taro.setStorage({
    key: 'question',
    data: {
      ...Taro.getStorage('question')
    }
  })
}