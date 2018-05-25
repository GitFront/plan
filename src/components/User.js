/**
* @author liuqinghua
* @createDate  2018/05/22
* @Function:
* @Desc:用户头像组件
*/
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

// 导入静态资源(图片地址)
import { ImgUrls } from '../assets/source/';
/**
 * 通过继承React.Component来创建并返回一个名为 User 的组件
 */
export default class User extends Component {
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

    render() {
        const { userStyle } = this.props;
        return (
            <TouchableOpacity
                onPress={() => { console.log(22222222222222) }}
                activeOpacity={0.7}//点击背景透明度
                style={userStyle}//后面组件传递过来的样式会覆盖前面的
            >
                <ImageBackground
                    style={styles.user}//背景图样式
                    source={ImgUrls.user}//背景图来源
                />
            </TouchableOpacity>
           
        );
    }
}


//创建样式对象
const styles = StyleSheet.create({
    user: {
        width: 21,
        height: 22
    }
});
