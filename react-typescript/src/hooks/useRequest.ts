//请求包 ,
import { useState,useCallback } from 'react'
import Taro from '@tarojs/taro'
//一个请求，loading状态，请求结果，还有对Taro的支持
// 返回一个请求函数

/**
 * 请求数据
 * ```
 * 例如：
 * ```
 * ```
 * const [load,data,loading] = useRequest(()=>,{})
 * ```
 * @param requestFunction
 * @param initialData
 */
function useRequest(requestFunction:(data:any)=>Promise<any>, initialData?:any) : [()=>Promise<any>,any,boolean,any] {
  const [data, setData] = useState(initialData)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const loadData = async (...args) => {
    setLoading(true)
    Taro.showLoading({
      title:'加载中'
    })
    // Taro.showNavigationBarLoading()
    try {
      let result = await requestFunction(...args)
      setData(result)
      setError(null)
      setLoading(false)
      Taro.hideLoading()
      Taro.hideNavigationBarLoading()
      return result
    } catch (e) {
      Taro.hideLoading()
      setError(e)
      setData(initialData)
      setLoading(false)
      Taro.hideNavigationBarLoading()
      throw e
    }
  };
  const loadDataMemo = useCallback(loadData , [requestFunction])
  return [loadDataMemo, data, loading, error]
}


export {useRequest}
