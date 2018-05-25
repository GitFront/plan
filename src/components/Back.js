/**
* @author liuqinghua
* @createDate  2018/05/22
* @Function:
* @Desc:返回组件封装
*/
import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
// 导入静态资源(图片地址)
import { ImgUrls } from '../assets/source/';
/**
 * 通过继承React.Component来创建并返回一个名为 Back 的组件
 */
export default class Back extends Component {
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

    /**
     * render(){}：渲染组件,渲染的内容，所有要显示的内容必须放在 render 函数内
     * return()：如果只有一个标签可以不用()，多个标签必需使用否则报错
     */

    /**
    * 有些没有在 StackNavigator 中声明的组件页面，无法获取到 navigation 属性，想要
    * 使用 navigation 有两个办法，通过父组件传递 navigation 属性，还可以通过下面这种方式
    * import { withNavigation } from 'react-navigation';
    * export default withNavigation(组件名);
    */

    render() {
        return (
            <TouchableOpacity
                style={{ flexDirection: 'row' }}
                /* Back没有在 StackNavigator 中声明的组件页面，无法获取到 navigation 属性，父组件Public不传递属性过来，会报错 */
                onPress={() => {  this.props.goBack() }}//!!! 少了()=>{}会进入报名页面后立即后退,this.props为父组件传递过来的navigation
            >
                <ImageBackground
                    style={{ width: 8, height: 15, marginRight: 8 }}//样式
                    source={ImgUrls.back}//图片来源
                />
                <Text style={{ color: '#e82289', fontSize: 12 }}>返回</Text>
            </TouchableOpacity>
        );
    }
}


