import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar, AtCard } from 'taro-ui'

import './index.scss'

function Home () {
  return (
    <View className="home">
      <AtTabBar
        tabList={[
          { title: '做题', iconType: 'camera' },
          { title: '收藏', iconType: 'star' }
          { title: '历史', iconType: 'folder' }
        ]}
        onClick={index => {
          if (index === 0) {
            Taro.navigateTo({
              url: '/pages/question/index'
            })
          }
        }}
      />
      <View className="card-top">
        <AtCard
          isFull={true}
          title="统计"
          note="勤学如春起之苗，不见其增，日由所长"
          extra="做题历史"
        >
          <View className="stat">
            <View className="stat-group">
              <View className="stat-title">
                收藏句子
              </View>
              <View className="stat-number">
                15
              </View>
            </View>
            <View className="stat-group">
              <View className="stat-title">
                累计(天)
              </View>
              <View className="stat-number">
                115
              </View>
            </View>
            <View className="stat-group">
              <View className="stat-title">
                连续(天)
              </View>
              <View className="stat-number">
                10
              </View>
            </View>
          </View>
        </AtCard>
      </View>
      <View className="card-top">
        <AtCard
          isFull={true}
          title="我的精听"
          note="每日精听，考场不惊"
          extra="更改难度"
        >
          <View class="stat">
            <View className="stat-group">
              <View className="stat-title">
                考试
              </View>
              <View className="stat-number">
                IELTS
              </View>
            </View>
            <View className="stat-group">
              <View className="stat-title">
                难度
              </View>
              <View className="stat-number">
                三颗星
              </View>
            </View>
          </View>
        </AtCard>
      </View>
    </View>
  )
}


Home.config = {
  navigationBarTitleText: '日拱一卒'
}

export default Home

