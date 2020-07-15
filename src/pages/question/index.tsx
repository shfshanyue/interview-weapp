import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon, AtTag, AtMessage } from 'taro-ui'
import get from 'lodash.get'
import _ from 'lodash'
import className from 'classnames'

import './index.scss'

import { graphql } from '../../graphql'
import { Query, AudioSegment, Question as QueryQuestion } from 'src/type'

const query = `
  {
  }
`

class Question extends Component<{}, {
  pause: boolean;
  current: number;
  text: AudioSegment[];
  step: boolean;
  question: QueryQuestion;
}, {}> {
  config: Config = {
    navigationBarTitleText: '每日练习'
  }

  audio: any = undefined

  constructor () {
    super()
    this.state = {
      pause: true,
      text: [],
      current: 0,
      step: false,
      question: {} as any
    }
  }

  componentDidMount () {
    const audioCtx = Taro.createInnerAudioContext()
    audioCtx.loop = false
    this.audio = audioCtx
    this.audio.onTimeUpdate(_.throttle(this.onTimeUpdate.bind(this), 100))
    this.audio.onSeeked(() => {
      this.audio.offTimeUpdate()
      this.audio.onTimeUpdate(_.throttle(this.onTimeUpdate.bind(this), 100))
    })
    graphql<Query>(query).then(data => {
    })
  }

  componentDidUpdate () {
    if (this.state.pause) {
      this.audio.pause()
    } else {
      this.audio.play()
    }
  }

  onTimeUpdate () {
    this.setState({
      current: this.audio.currentTime
    })
  }

  render () {
    const progress = this.state.current / this.audio.duration * 100

    return (
      <View className="question">
        <AtMessage />
        <View className="question-title">
          <View className="question-name">
            {
              this.state.question.name
            }
          </View>
          <AtTag>难度: 中</AtTag>
        </View>
        <View>
          {
            this.state.text.map((x: AudioSegment) =>
              <View
                key={x.start!}
                className={className('question-text', { active: this.state.current < x.end! && this.state.current > x.start! })}
                onClick={() => {
                  if (!this.state.pause) {
                    this.setState({
                      current: x.start!
                    })
                    this.audio.seek(x.start!)
                  }
                }}
                onLongPress={() => {
                  Taro.atMessage({
                    message: '收藏成功，您可以在我的收藏中反复试听该句',
                    type: 'info'
                  })                  
                }}
              >
                <Text>
                  {x.raw!}
                </Text>
              </View>
            )
          }
        </View>
        <View className="question-audio">
          <View className="audio-progress" style={{ width: `${progress}vw` }}>

          </View>
          <View className="question-icon-container">
            <View className="question-icon">
              <AtIcon value={this.state.pause ? 'play' : 'stop'} color="#fff" onClick={() => {
                this.setState({
                  pause: !this.state.pause
                })
              }} />
            </View>
            <View className="question-icon">
              <AtIcon value={this.state.pause ? 'play' : 'pause'} color="#fff" onClick={() => {
                this.setState({
                  pause: !this.state.pause
                })
              }} />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Question

