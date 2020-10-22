import cx from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import styles from './<%=pageName %>.module.<%= cssExt %>'

function <%= _.capitalize(pageName) %>Page(){
  return <View className={cx(styles.<%= _.capitalize(pageName) %>Page,'page')}>
    <%= _.capitalize(pageName) %>Page
  </View>
}

export default <%= _.capitalize(pageName) %>Page
