/*
 * @Descripttion:
 * @Author: Mona
 * @Date: 2021-05-31 11:16:39
 * @LastEditTime: 2021-05-31 11:38:40
 */


export enum DeviceType {
  Mobile,
  Desktop,
}

export interface State {
  device:DeviceType,
  count:Number,
  name:String,
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
}

export const state:State = {
  device: DeviceType.Desktop,
  count: 0,
  name: "2",
  sidebar: {
    opened: false,
    withoutAnimation: true
  }
}
