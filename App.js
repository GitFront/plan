/**
 * @author liuqinghua
 * @createDate  2018/05/15
 * @Function:app的入口文件
 * @Desc:
 */
//导入组件React,Component用来创建组件
import React, { Component } from 'react';
//StatusBar 是 React Native 用来设置并动态改变设备的状态栏显示特性。可以通过设置StatusBar的样式实现不同页面状态栏的显示。
import { StyleSheet, StatusBar } from 'react-native';
//导入自定义组件
import Public from './src/routes/Public';
type Props = {};
/**
 * 创建并返回一个名为 App 的组件，通过继承React.Component来实现
 */
export default class App extends Component<Props> {
  /**
* constructor(props){}：//ES6类的构造函数（为了初始化state或绑定this）
* super(props)：
* this.state：
*/
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Public
        /**
        * 动态设置设备状态栏的样式
        * onNavigationStateChange={(prevState,newState)=>{}监听路由变化
        */
        onNavigationStateChange={
          (prevState, newState) => {
            /**
             * 对象的解构赋值
             *   const { foo, bar } = { foo: "aaa", bar: "bbb" };
             *   foo // "aaa"
             *   bar // "bbb"
             */
            const { index, routes } = newState;
            if (routes && routes[index]) {
              const route = routes[index];
              // route.routeName == 'Home' ? this.setStatusBar('transparent', 'dark-content', false, false) : this.setStatusBar('rgb(117,117,117)', 'dark-content', false, false)
            }
          }}
      />
    );
  }
  /**
 * 动态设置设备状态栏的样式
 * @param {String} backgroundColor -状态栏的背景色 
 * @param {String} barStyle -设置状态栏文本的颜色('default', 'light-content', 'dark-content') 。 
 * @param {Boolean} branslucent  - 状态栏是否透明
 * @param {Boolean} hidden  - 是否隐藏状态栏
 * @return {} 无
 */

  setStatusBar(backgroundColor, barStyle, branslucent, hidden) {
    StatusBar.setBackgroundColor(backgroundColor);
    StatusBar.setBarStyle(barStyle);
    StatusBar.setTranslucent(branslucent);
    StatusBar.setHidden(hidden);
  }

}
/**
 * StyleSheet.create({})：创建多个样式对象
 */
const styles = StyleSheet.create({

});
