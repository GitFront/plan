/**
* @author liuqinghua
* @createDate  2018/05/15
* @Function:
* @Desc:首页（赛事）
*/
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    BackHandler   // BackAndroid,// 安卓back键,此Api已废弃，请使用BackHandler代替,新的API(backhandler)和旧API(backandroid)用法是一致的，只是新的API增加了对tvOS的支持。
} from 'react-native';
//安装下载react-native-splash-screen添加启动页并执行react-native link react-native-splash-screen 命令，解决启动react-native白屏问题
// import SplashScreen from 'react-native-splash-screen';
//安装组件react-native-scrollable-tab-view并导入tab切换组件
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';


// 导入静态资源(图片地址，颜色)
import { ImgUrls, Colors } from '../assets/source/';
//导入公共组件(按钮)
import { Button, User } from '../components/';
//导入首页tab组件
import { IntroduceTab, StandardTab, DevelopTab } from './GameStory/'
/**
 * 创建并返回一个名为 HomeScreen 的组件，通过继承React.Component来实现
 */
export default class HomeScreen extends Component {
    /**
   * constructor(props){}：//ES6类的构造函数（为了初始化state或绑定this）
   * super(props)：
   * this.state：
   */
    constructor(props) {
        super(props);
        this.state = {
            num: {
                develop: 132,
                app: 4564
            },

        };
    }

    /**
     * 组件的生命周期
     * componentDidMount
     * 在初始化render之后只执行一次，在这个方法内，可以访问任何组件，componentDidMount()方法中的子组件在父组件之前执行
     * 从这个函数开始，就可以和 JS 其他框架交互了，例如设置计时 setTimeout 或者 setInterval，或者发起网络请求
     */
    // componentDidMount() {
    //     SplashScreen.hide();//componentDidMount中执行hide隐藏启动屏
    //     BackHandler.addEventListener('hardwareBackPress', () => {//监听设备上的后退按钮事件
    //         BackHandler.exitApp(0);//退出App
    //         return true
    //     })
    // }




    /**
     * render(){}：渲染组件,渲染的内容，所有要显示的内容必须放在 render 函数内
     * return()：如果只有一个标签可以不用()，多个标签必需使用否则报错
     */
    render() {

        return (//返回jsx语法的标签

            <View style={styles.container}>
                {/* banner */}
                <View style={styles.banner}>
                    <ImageBackground style={styles.banner} source={ImgUrls.home_baner_bg}>
                        <Text style={[styles.title, styles.title1]}>第六届</Text>
                        <Text style={[styles.title, styles.title2]}>移动应用创新大赛</Text>
                        <View style={styles.num}>
                            <View style={styles.develop}>
                                <Text style={styles.banner_num}>{this.state.num.develop}</Text>
                                <Text style={styles.num_title}>开发者数</Text>
                            </View>
                            <View >
                                <Text style={styles.banner_num}>{this.state.num.app}</Text>
                                <Text style={styles.num_title}>APP数</Text>
                            </View>
                        </View>
                        <View style={styles.banner_buttons}>
                            <Button
                                title='+加入'
                                onPress={() => { this.go('SelectGroupSign') }}//跳转至选择报名组别页面
                                textStyle={styles.banner_button}
                                TouchableType='TouchableNativeFeedback'
                            />

                            <Button
                                title='+发布'
                                onPress={() => { this.go('Submit') }}
                                textStyle={[styles.banner_button, { marginLeft: 16 }]}
                                TouchableType='TouchableNativeFeedback'
                            />


                        </View>
                        {/* <ImageBackground style={styles.banner_avatar} source={ImgUrls.avatar}></ImageBackground> */}
                        {/* User用户头像组件 userStyle自定义属性传值*/}
                        <User userStyle={{ position: 'absolute', top: 15, right: 15 }} />
                    </ImageBackground>
                </View>
                {/* banner下面的tab */}
                <ScrollableTabView
                    initialPage={0}//初始化时被选中的Tab下标，默认是0（即第一页）。
                    page={0}//设置选中指定的Tab。
                    locked={false}//表示手指是否能拖动视图，默认为false（表示可以拖动）。设为true的话，我们只能“点击”Tab来切换视图。
                    tabBarActiveTextColor={Colors.textColor.red}// 选中时标签栏文本的颜色，默认为navy
                    tabBarInactiveTextColor={'#5a5a5a'}// // 未选中时标签栏文本的颜色，默认为black
                    tabBarBackgroundColor={'#fff'}//设置整个Tab这一栏的背景颜色
                    tabBarUnderlineStyle={styles.tabBarUnderline}//Tab选中时下方横线的样式，比如背景颜色，下划线高度/宽度
                    tabBarTextStyle={styles.tabBarText}//设置Tab文字的样式，比如字号、字体等
                    renderTabBar={props =>
                        <ScrollableTabBar style={styles.tabBar} />//可这里设置tabbar的高度,在react native中阴影的样式属性shadow都是只支持iOS的,并不支持Android。
                    }

                >
                    {/* <Text tabLabel='赛事介绍'>赛事介绍</Text> */}
                    {/* <Text tabLabel='参赛作品标准'>参赛作品标准</Text> */}
                    {/* <Text tabLabel='明星开发者'>明星开发者</Text>  */}
                    {/* 自定义tab组件 */}
                    {/* tabLabel为固定格式 */}
                    <IntroduceTab tabLabel='赛事介绍' />
                    <StandardTab tabLabel='参赛作品标准' />
                    <DevelopTab tabLabel='明星开发者' />
                </ScrollableTabView>

            </View>
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
// 创建样式对象表
const styles = StyleSheet.create({
    elementCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#fbfbfb',

    },
    banner: {
        height: 180,
    },
    title: {
        color: "#fff",
        marginLeft: 25,
        fontWeight: "700",
    },
    title1: {
        fontSize: 16,
        marginTop: 26,
        marginBottom: 7,
    },
    title2: {
        fontSize: 23,
        marginBottom: 10,
    },
    num: {
        paddingLeft: 25,
        flexDirection: 'row'
    },
    develop: {
        marginRight: 58,


    },
    banner_num: {
        fontSize: 16,
        color: '#fff',
    },
    num_title: {
        fontSize: 10,
        color: '#fff'
    },
    banner_buttons: {
        flexDirection: 'row',
        marginLeft: 25,
        marginTop: 8
    },
    banner_button: {
        width: 80,
        height: 28,
        color: '#fff',
        fontSize: 12,
        lineHeight: 28,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 4,
        textAlign: 'center',
    },

    tabBarUnderline: {
        height: 1,
        backgroundColor: Colors.textColor.red
    },
    tabBarText: {
        fontSize: 12,

        fontFamily: 'MicrosoftYaHei',

    },
    tabBar: {
        height: 42,


        borderWidth: 0,
    },


});
