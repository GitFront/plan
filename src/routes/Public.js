/**
 * @author liuqinghua
 * @createDate  2018/05/15
 * @Function:配置路由
 * @Desc:全局路由配置
 */
//导入组件React,Component用来创建组件
import React, { Component } from 'react';
import { StyleSheet, Platform, StatusBar, View, Image } from 'react-native';
// 安装并下载导入导航器
// StackNavigator: 类似于普通的Navigator，屏幕上方导航栏 
// TabNavigator相当于iOS里面的TabBarController，屏幕下方的标签栏 
import { StackNavigator, TabNavigator } from 'react-navigation';

//导入页面
import {
    HomeScreen,
    ProductionScreen,
    TopicScreen,
    SelectGroupSignScreen,
    SignScreen,
    SubmitProductionScreen
} from '../screens/';


//导入公共组件(返回、用户头像)
import { Back, User } from '../components/';
// 导入静态资源(颜色,图片地址)
import { Colors, ImgUrls } from '../assets/source/';
/**
 * TabNavigator
 * 一个跨平台的TabBar组件，可以用于iOS和安卓平台
 * TabNavigator(TabRouteConfigs,TabNavigatorConfigs);
 * TabRouteConfigs---路由配置：一个route对应的页面和tab图标
 * abNavigatorConfigs---是Tab选项卡配置： 一个切换的样式整个tab栏的样式  
 */
const MainTabNavigator = TabNavigator(
    {
        //赛事
        Home: {//路由名称
            screen: HomeScreen,//和导航的功能是一样的，对应界面名称，可以在其他页面通过这个screen传值和跳转。  
            navigationOptions: {//配置TabNavigator的一些属性  
                tabBarLabel: '赛事',//设置标签栏的title。推荐  
                tabBarIcon: ({ focused }) => (//设置标签栏的图标。需要给每个都设置 , * focused：为一个布尔值用来判断当前栏选中状态 ,tintColor:icon的前景色
                    <Image
                        source={focused ? ImgUrls.tabbar_home_active : ImgUrls.tabbar_home_inactive}
                        style={styles.icon}
                    />
                )
            },
        },
        //产品
        Production: {//路由名称 
            screen: ProductionScreen,//和导航的功能是一样的，对应界面名称，可以在其他页面通过这个screen传值和跳转。  
            navigationOptions: {//配置TabNavigator的一些属性  
                tabBarLabel: '作品',//设置标签栏的title。推荐  
                tabBarIcon: ({ focused }) => (//设置标签栏的图标。需要给每个都设置 , * focused：为一个布尔值用来判断当前栏选中状态 ,tintColor:icon的前景色
                    <Image
                        source={focused ? ImgUrls.tabbar_production_active : ImgUrls.tabbar_production_inactive}
                        style={styles.icon}
                    />
                )
            },
        },
        Topic: {//路由名称
            screen: TopicScreen,//和导航的功能是一样的，对应界面名称，可以在其他页面通过这个screen传值和跳转。  
            navigationOptions: {//配置TabNavigator的一些属性  
                tabBarLabel: '话题',//设置标签栏的title。推荐  
                tabBarIcon: ({ focused, tintColor }) => (//设置标签栏的图标。需要给每个都设置 , * focused：为一个布尔值用来判断当前栏选中状态 ,tintColor:icon的前景色
                    <Image
                        source={focused ? ImgUrls.tabbar_topic_active : ImgUrls.tabbar_topic_inactive}
                        style={[styles.icon, { tintColor: tintColor }]}
                    />
                )
            },
        }
    },
    //initialRouteName - 导航器组件中初始显示页面的路由名称，如果不设置，则默认第一个路由页面为初始显示页面
    //animationEnabled - 点击Tab选项卡切换界面是否需要动画
    //swipeEnabled     - 是否可以滑动切换Tab选项卡
    //   tabBarOptions - Tab配置属性，用在 TabBarTop 和 TabBarBottom 时有些属性不一致：
    // 用于 TabBarTop 时：
    // activeTintColor - 选中的文字颜色
    // inactiveTintColor - 未选中的文字颜色
    // showIcon - 是否显示图标，默认显示
    // showLabel - 是否显示标签，默认显示
    // upperCaseLabel - 是否使用大写字母，默认使用
    // pressColor - android 5.0以上的MD风格波纹颜色
    // pressOpacity - android 5.0以下或者iOS按下的透明度
    // scrollEnabled - 是否可以滚动
    // tabStyle - 单个Tab的样式
    // indicatorStyle - 指示器的样式
    // labelStyle - 标签的样式
    // iconStyle - icon的样式
    // style - 整个TabBar的样式
    // 用于 TabBarBottom 时：
    // activeTintColor - 选中Tab的文字颜色
    // activeBackgroundColor - 选中Tab的背景颜色
    // inactiveTintColor - 未选中Tab的的文字颜色
    // inactiveBackgroundColor - 未选中Tab的背景颜色
    // showLabel - 是否显示标题，默认显示
    // style - 整个TabBar的样式
    // labelStyle - 标签的样式
    // tabStyle - 单个Tab的样式
    //tabBarPosition - Tab选项卡的位置，有 top 或 bottom 两个值
    //lazy - 是否懒加载页面
    {
        initialRouteName: 'Home',
        animationEnabled: true,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: Colors.textColor.red,
            inactiveTintColor: Colors.textColor.gray,
            style: {
                backgroundColor: '#fff',
                height: 54,
            },
            labelStyle: {
                fontSize: 9,
                marginTop: 4,
            },
            showIcon: true,
            renderIndicator: () => null,
        },
        tabBarPosition: 'bottom',
        lazy: true,
    }
);


/**
 * StackNavigator: 类似于普通的Navigator，实现不同的页面进行跳转
 * StackNavigator(RouteConfigs, StackNavigatorConfig)
 * 参数一：配置你需要跳转的导航界面，参数二：可选，配置属性
 */
const PublicNavigator = StackNavigator(
    {
        /* 首页（赛事页面） */
        Home: {//为路由名称
            screen: MainTabNavigator,//为对应路由的页面
            navigationOptions: (navigation) => ({// 为对应路由页面的配置选项
                header: null,//header - 自定义的头部组件，使用该属性后系统的头部组件会消失
            }),
        },
        /* 选择报名组别页面 */
        SelectGroupSign: {
            screen: SelectGroupSignScreen,//为对应路由的页面
            navigationOptions: ({ navigation }) => (
                navigationOptionsConfig(navigation)//调用方法
            ),
        },
        /* 报名页面 */
        Sign: {
            screen: SignScreen,//为对应路由的页面
            navigationOptions: ({ navigation }) => (
                navigationOptionsConfig(navigation)//调用方法
            ),
        },
        /* 提交做页面 */
        Submit: {
            screen: SubmitProductionScreen,//为对应路由的页面
            navigationOptions: ({ navigation }) => (
                navigationOptionsConfig(navigation)//调用方法
            ),
        }
    },
    {
        headerMode: 'float',//导航栏的显示模式, float: 无透明效果, 默认
        mode: 'card',//页面切换模式 card: 普通app常用的左右切换, modal: 上下切换
    }

);
/**
* 公共配置项方法封装
* @param {Object} 传入 navigation对象 
* @return {Object} 返回配置对象
*/
const navigationOptionsConfig = (navigation) => {
    return {// 为对应路由页面的配置选项
        // title: `${navigation.state.params.title}`,//es6 模版字符串
        headerLeft: <Back {...navigation} />,//headerLeft - 头部左边组件,{...navigation}将navigation的属性传递给子组件Back
        headerRight: <User />,//headerRight - 头部右边组件
        headerStyle: {//头部组件的样式
            padding: 17,//padding
        },
        headerTitleStyle: {//头部组件的样式
            alignSelf: 'center',//居中
            fontWeight: 'normal',//字体粗细
            fontSize: 12,//字体大小
        },

    }
};

/**
 * StyleSheet.create：创建样式对象
 * Platform.OS：用来判断运行平台是否为 ios
 */
const styles = StyleSheet.create({
    icon: {
        width: Platform.OS === 'ios' ? 50 : 23,
        height: Platform.OS === 'ios' ? 50 : 24,
    }
});

//对外暴露
export default PublicNavigator;