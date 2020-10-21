import React from 'react'
import { View } from '@tarojs/components'

import styles from './index.module.<%= cssExt %>'

function <%= _.capitalize(pageName) %>Page(){
  return <View className={[styles.<%= _.capitalize(pageName) %>Page,'page']}>
    <%= _.capitalize(pageName) %>Page
  </View>
}

export default <%= _.capitalize(pageName) %>Page
