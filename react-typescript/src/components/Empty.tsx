import React from 'react'
import {View} from '@tarojs/components'
import classnames from 'classnames'

import './Empty.less'

export interface EmptyProps  {
  className?: string
  children?:React.ReactNode
  style?:string|React.CSSProperties|undefined
}

const Empty : React.FC<EmptyProps> = props=>{
  const {

  } = props
  return  <View className="Empty">
    Empty组件
  </View>
}

export {Empty}
