/**
* @author liuqinghua
* @createDate  2018/05/15
* @Function:底部tab
* @Desc:话题页面
*/
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
/**
 * 创建并返回一个名为 TopicScreen 的组件，通过继承React.Component来实现
 */
export default class TopicScreen extends Component {
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
        return (
            <View style={styles.container}>
                <Text style={styles.text}>这是话题页面</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbfbfb',
    },
    text: {
        fontSize: 16,
        color: "#000"
    }
});
