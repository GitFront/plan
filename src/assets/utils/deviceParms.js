/**
* @author liuqinghua
* @createDate  2018/05/19
* @Function:设备的相关参数统一管理
* @Desc:设备宽度、高度、px2dp(px转dp)
*/
'use strict';
import { Dimensions } from 'react-native'
const basePx = 375;
export default {
    deviceW: Dimensions.get('window').width,
    deviceH:Dimensions.get('window').height,
    px2dp:()=>(deviceW / basePx) * px,
}