/**
* @author liuqinghua
* @createDate  2018/05/22
* @Function:
* @Desc:选择报名组别页面
*/
import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
// 导入静态资源(图片地址，颜色)
import { ImgUrls, Colors } from '../assets/source/';
/**
 * 通过继承React.Component来创建并返回一个名为 SignScreen 的组件
 */
export default class SelectGroupSignScreen extends Component {
    /**
* constructor(props){}：//ES6类的构造函数（为了初始化state或绑定this）
* super(props)：
* this.state：
*/
    constructor(props) {
        super(props);
        this.state = {
            groupList: [
                {
                    group_name: '企业组',
                    group_info: '我在企业工作，代表企业参赛',
                    group_logo: ImgUrls.sign_company
                },
                {
                    group_name: '校园组',
                    group_info: '我是全国31个省份的高校、高职、中专、中职学校在校学生',
                    group_logo: ImgUrls.sign_school
                },
                {
                    group_name: '社会组',
                    group_info: '我不是在校学生，仅已个人名义参赛',
                    group_logo: ImgUrls.sign_society
                },
            ]
        };
    }

    /**
     * render(){}：渲染组件,渲染的内容，所有要显示的内容必须放在 render 函数内
     * return()：如果只有一个标签可以不用()，多个标签必需使用否则报错
     */

    render() {
        return (
            <ScrollView>
                <View style={styles.containter}>
                    {/* 标题 */}
                    <View>
                        <Text style={{ fontSize: 23, color: '#3f3f3f', marginBottom: 23, paddingLeft: 10 }}>选择报名组别</Text>
                        <Text style={{ fontSize: 12, color: '#5a5a5a', marginBottom: 29, paddingLeft: 10 }}>您将报名参加创业计划大赛，请选择您要报名的组别</Text>
                    </View>
                    {/* 内容 */}
                    <View>
                        {this.renderGroup()}
                    </View>
                </View>
            </ScrollView>
        );
    }

    /**
     * 循环渲染组件
     * 
      */
    renderGroup() {
        return (
            this.state.groupList.map((item, index) => {
                return (
                    <View style={styles.group} key={index}>
                        <View style={{ flexDirection: 'row', }} >
                            <View style={[styles.groupBgBox, styles.elementCenter]}>
                                <ImageBackground
                                    style={{ width: 71, height: 71 }}
                                    source={item.group_logo}
                                />
                            </View>
                            <View style={{ paddingLeft: 6,  paddingRight: 16, flex: 1 }}>
                                <Text style={{ fontSize: 16, color: '#3f3f3f', marginTop: 19 }}>{item.group_name}</Text>
                                <Text style={{ fontSize: 12, color: '#919191', lineHeight: 17 }}>{item.group_info}</Text>
                            </View>
                        </View>
                        <View style={{ borderTopWidth: 1, borderTopColor: '#f6f6f6'}}>
                            <TouchableOpacity
                                onPress={() => { this.go('Sign',item.group_name) }}//页面跳转至报名页面
                            >
                                <Text style={{ fontSize: 12, color: '#e30077', textAlign: 'center',paddingVertical: 14 }}>我要报名</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            })
        );
    }



      /**
     * @author liuqinghua
     * @createDate  2018/05/22
     * @Function:页面跳转
     * @Desc:
     */
    go(_screen, _title) {
        /**
         * 页面跳转
         * navigate(routeName,params,action)
         *    routeName: 注册过的目标路由名称
         *    params: 传递的参数
         *    action: 如果该界面是一个navigator的话，将运行这个sub-action
         */
        //HomeScreen组件因在StackNavigator申明过，故可以用this.props.navigation获取到navigation属性
        const { navigate } = this.props.navigation;//对象的解构赋值
        navigate(_screen, { title: _title ? _title : '' });
    }
}


//创建样式对象
const styles = StyleSheet.create({
    elementCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containter: {
        backgroundColor: Colors.containterBg,
        paddingHorizontal: 10,
        paddingTop: 20,
        flex:1
    },
    group: {
        backgroundColor: '#fff',
      

        marginBottom: 10
    },
    groupBgBox: {
        width: 93,
        height: 93
    }
});
