import Taro from '@tarojs/taro'


const TokenRepository = {
  get:()=>Taro.getStorageSync("Authorization"),
  set:(token,expiresIn)=>Taro.setStorageSync("Authorization", token),
  clean:()=>Taro.setStorageSync("Authorization", "")
}

export  {TokenRepository}
