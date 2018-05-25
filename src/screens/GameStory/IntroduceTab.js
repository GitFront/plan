/**
* @author liuqinghua
* @createDate  2018/05/17
* @Function:
* @Desc:首页tab部分（赛事介绍）
*/
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
//安装react-native-video后执行react-native link连接本地视频库并导入组件
import Video from 'react-native-video';
// 导入静态资源(图片地址，颜色)
import { ImgUrls, Colors } from '../../assets/source/';
//公具组件
import { deviceParms } from '../../assets/utils/';
/**
 * 通过继承React.Component来创建并返回一个名为 HomeScreen 的组件
 */
export default class IntroduceTab extends Component {
    /**
* constructor(props){}：//ES6类的构造函数（为了初始化state或绑定this）
* super(props)：
* this.state：
*/
    constructor(props) {
        super(props);
        this.state = {
            videoSrc: ImgUrls.video,//视频地址
            paused: false,//暂停
            flowList: [//参赛流程
                {
                    bgSrc: ImgUrls.home_flow_signin,
                    txt: '注册/登录',
                    arrow: ImgUrls.home_flow_arrow
                },
                {
                    bgSrc: ImgUrls.home_flow_develop,
                    txt: '开发应用',
                    arrow: ImgUrls.home_flow_arrow
                },
                {
                    bgSrc: ImgUrls.home_flow_submit,
                    txt: '提交作品'
                },
            ],
            prizeList: [//赛事奖励列表
                {
                    prizeSideBarBg: ImgUrls.home_prize_company,
                    prizeSideBarBgColor: '#0085d0',

                    tableBody: [
                        { name: '一等奖', num: '1名', money: '10万' },
                        { name: '二等奖', num: '2名', money: '5万' },
                        { name: '一等奖', num: '3名', money: '1万' },
                    ]

                },
                {
                    prizeSideBarBg: ImgUrls.home_prize_school,
                    prizeSideBarBgColor: '#90c31f',

                    tableBody: [
                        { name: '一等奖', num: '1名', money: '10万' },
                        { name: '二等奖', num: '2名', money: '5万' },
                        { name: '三等奖', num: '3名', money: '1万' },
                        { name: '四等奖', num: '4名', money: '五千' },
                    ]
                },
                {
                    prizeSideBarBg: ImgUrls.home_prize_society,
                    prizeSideBarBgColor: '#e40077',

                    tableBody: [
                        { name: '一等奖', num: '1名', money: '10万' },
                        { name: '二等奖', num: '2名', money: '5万' },
                        { name: '三等奖', num: '3名', money: '1万' },
                        { name: '四等奖', num: '4名', money: '5千' },
                        { name: '五等奖', num: '5名', money: '1千' },
                        { name: '六等奖', num: '6名', money: '五百' },
                    ]
                },
            ],

        };
        this.onLoad = this.onLoad.bind(this);//绑定this  apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；
        this.onEnd = this.onEnd.bind(this);

    }

    /**
     * render(){}：渲染组件,渲染的内容，所有要显示的内容必须放在 render 函数内
     * return()：如果只有一个标签可以不用()，多个标签必需使用否则报错
     */

    render() {
        let playBtn = <ImageBackground style={styles.playerBtn} source={ImgUrls.playBtn}></ImageBackground>;
        return (
            <ScrollView>
                <View>
                    {/*  video */}
                    <View
                        style={[styles.video_container, { width: deviceParms.deviceW }]}
                    >
                        {/* TouchableOpacity当点击按下的时候，该组件的透明度会降低 */}
                        <TouchableOpacity
                            // 点击播放暂停切换 
                            onPress={() => { this.setState({ paused: !this.state.paused }) }}
                            activeOpacity={0.8}//点击背景透明度
                            style={[{ position: 'absolute', width: deviceParms.deviceW, height: 211 }]}
                        >
                            <Video
                                ref={(ref) => {
                                    this.player = ref
                                }}

                                source={this.state.videoSrc}//视频的URL地址，或者本地地址
                                rate={1.0}// 1.0表示默认速率
                                paused={this.state.paused}//true代表暂停，默认为false
                                volume={0}  //声音的放大倍数，0 为静音  ，1 为正常音量 ，更大的数字表示放大的倍数    
                                resizeMode="cover" // 视频的自适应伸缩铺放行为，contain、stretch、cover
                                repeat={true} // 是否重复播放
                                playInBackground={false}// 当app转到后台运行的时候，播放是否暂停
                                playWhenInactive={false}// [iOS] Video continues to play when control or notification center are shown. 视频继续显示控制或通知中心时播放,仅适用于IOS
                                progressUpdateInterval={250.0}// [iOS]进度控制，每250ms调用一次，以获取视频播放的进度
                                // onLoadStart={}// 当视频开始加载时的回调函数
                                onLoad={this.onLoad}// 当视频加载完毕时的回调函数
                                // onProgress={}//  进度控制，每250ms调用一次，以获取视频播放的进度
                                onEnd={this.onEnd}// 当视频播放完毕后的回调函数
                                // onError={}// 当视频不能加载，或出错后的回调函数
                                // onBuffer={} // 当远程视频缓冲时，回调 
                                controls={false}//视频控制
                                style={styles.backgroundVideo}
                            />
                            {/* 根据条件渲染ImageBackground组件 */}
                            {this.state.paused ? (playBtn) : (null)}
                        </TouchableOpacity>
                    </View>
                    {/* 内容 */}
                    <View
                        style={styles.introduceContent}
                    >
                        {/* 参 赛 简 介 */}
                        <View>
                            {/* title */}
                            {this.renderTitle('参赛简介')}
                            {/* content */}
                            <View style={styles.summaryContent}>
                                <Text style={{ fontSize: 12, textAlign: 'left', color: '#5a5a5a', lineHeight: 20 }}>
                                    为了鼓励移动互联网创新，扶持广大开发者创业，中国移动携手共青团中央开展“移动应用创新大赛”，面向广大中小开发者征集Android类优秀移动应用产品。开发者可基于中国移动MM平台各大能力（应用内计费、有数、有推等）进行产品开发和提交，将有机会获得MM平台推广资源、高额赛事奖金及创业风投机会。
                                </Text>
                            </View>
                        </View>
                        {/* 参 赛 流 程 */}
                        <View>
                            {/* title */}
                            {this.renderTitle('参赛流程')}
                            {/* content */}
                            {this.renderFlow()}
                            {/* time */}
                            <View style={[styles.elementCenter, { marginTop: 13 }]}>
                                <ImageBackground source={ImgUrls.home_flow_time} style={[styles.flowTime, styles.elementCenter]}>
                                    <Text style={{ fontSize: 10, color: '#e82289' }}>即日起至2018年10月15日</Text>
                                </ImageBackground>
                            </View>
                        </View>
                        {/* 赛 事 奖 励 */}
                        <View style={{ marginTop: 35 }}>
                            {/* title */}
                            {this.renderTitle('赛事奖励')}
                            {/* content */}
                            {this.renderPrizes()}
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }

    /**
     * @Function:当视频加载完毕时的回调函数
     * @Desc :
      */
    onLoad(data) {
    }
    /**
     * @Function:当视频播放完毕时的回调函数
     * @Desc :
      */
    onEnd(data) {
        this.setState({ paused: this.state.paused = true });
    }

    /**
     * @Function:渲染头部组件的公共方法
     * @Desc :参赛简介、参赛流程、赛事奖励
     */
    renderTitle(txt) {
        return (
            <View style={[styles.summaryTitle, styles.elementCenter]}>
                <ImageBackground source={ImgUrls.home_introduce_title} style={{ width: 183, height: 38 }}>
                    <Text style={styles.title}>{txt}</Text>
                </ImageBackground>
            </View>
        );
    }
    /**
     * @Function:渲染参赛流程的公共方法
     * @Desc :注册/登录、开发应用、提交作品
     */
    renderFlow() {
        return (
            <View style={styles.flow}>
                {
                    this.state.flowList.map((item, i) => {
                        return (
                            <View style={styles.flowItem} key={i}>
                                <ImageBackground source={item.bgSrc} style={{ width: 60, height: 57 }}>
                                    {/* 根据条件渲染箭头组件 */}
                                    {item.arrow ? (<Image source={item.arrow} style={{ width: 12, height: 16, position: 'absolute', right: "-60%", top: "50%", transform: [{ translateY: -8 }] }} />) : (null)}
                                </ImageBackground>
                                <Text style={{ fontSize: 12, marginTop: 16, textAlign: 'center' }}>{item.txt}</Text>
                            </View>
                        );
                    })
                }
            </View>
        );
    }

    /**
    * @Function:渲染赛事奖励的公共方法
    * @Desc :企业组、校园组、社会组
    */
    renderPrizes() {
        const tableHead = ['奖项名称', '数量', '奖金']
        return (
            this.state.prizeList.map((item, i) => {
                return (
                    <View style={styles.prizeItem} key={i}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: item.prizeSideBarBgColor }}>
                            <ImageBackground source={item.prizeSideBarBg} style={{ width: 79, height: 150 }} />
                        </View>
                        <View style={{ flex: 1, paddingHorizontal: 8, paddingVertical: 8 }}>
                            <View style={[styles.elementCenter, { height: 34 }]}>
                                {/* 渲染表头 */}
                                {
                                    tableHead.map((itemHead, iHead) => {
                                        return (
                                            <Text key={iHead} style={{ fontSize: 12, color: "#969696", flex: 1, textAlign: 'center' }}>{itemHead}</Text>
                                        );
                                    })
                                }
                            </View>
                            <View>
                                {/* 渲染表格每一行 */}
                                {
                                    item.tableBody.map((itemBody, iBody) => {
                                        return (
                                            <View key={iBody} style={[styles.elementCenter, { borderTopWidth: 1, borderStyle: 'solid', borderTopColor: '#f6f6f6' }]}>
                                                {/* 渲染表格每一列 */}
                                                {
                                                    /* Object.keys(object).map((key)=>{}) 遍历对象,得到key的集合*/
                                                    Object.keys(itemBody).map((key, index) => {
                                                        return (
                                                            <Text key={index} style={{ fontSize: 12, color: "#686868", height: 35, lineHeight: 35, flex: 1, textAlign: 'center' }}>{itemBody[key]}</Text>
                                                        );
                                                    })
                                                }
                                            </View>
                                        );
                                    })

                                }
                            </View>
                        </View>
                    </View>
                );
            })
        );
    }


}
// 创建样式对象
const styles = StyleSheet.create({
    elementCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    video_container: {
        height: 211,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    playerBtn: {
        width: 48,
        height: 48,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -24 }, { translateY: -24 }],
    },
    introduceContent: {
        paddingHorizontal: 10,
    },
    title: {
        color: '#e30077',
        fontSize: 16,
        lineHeight: 60,
        textAlign: 'center',

    },
    summaryTitle: {//标题
        height: 60,
    },
    summaryContent: {//赛事简介
        paddingVertical: 20,
        paddingHorizontal: 26,
        backgroundColor: '#fff',
    },
    flow: {//比赛流程
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    flowItem: {
    },
    flowTime: {
        width: 315,
        height: 24
    },
    prizeItem: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        marginBottom: 15,
    },
    prizeSideBar: {

    }

});