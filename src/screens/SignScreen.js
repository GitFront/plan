/**
* @author liuqinghua
* @createDate  2018/05/23
* @Function:
* @Desc:报名页面
*/
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
//安装组件react-native-scrollable-tab-view并导入tab切换组件
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
//安装并导入弹窗组件
// 1。创业计划参赛协议弹窗
import AgreementModal from 'react-native-modal';
// 2。选择城市弹窗
import CityModal from 'react-native-modal';
//安装导入矢量字体库并执行react-native link
import Icon from 'react-native-vector-icons/Ionicons';
// 导入静态资源(图片地址，颜色)
import { ImgUrls, Colors } from '../assets/source/';
//公具组件
import { deviceParms } from '../assets/utils/';
//导入公共组件(按钮)
import { Button } from '../components/';

/**
 * 通过继承React.Component来创建并返回一个名为 SignScreen 的组件
 */
export default class SignScreen extends Component {
    /**
* constructor(props){}：//ES6类的构造函数（为了初始化state或绑定this）
* super(props)：
* this.state：
*/
    constructor(props) {
        super(props);
        this.state = {
            page: 0,//设置ScrollableTabView选中指定的Tab页和初始化时被选中的Tab下标
            checked: true,
            inputList: [
                { name: '姓名', placeholder: '请输入姓名', value: null },
                { name: '所在地', placeholder: '请选择所在地', value: null },
                { name: '身份证号', placeholder: '请输入身份证号', keyboardType: 'numeric', maxLength: 18, value: null },
                { name: '电话号码', placeholder: '请输入电话号码', keyboardType: 'numeric', maxLength: 11, value: null },
                { name: '企业名称', placeholder: '请输入参赛企业名称', value: null },
                { name: '参赛邮箱', placeholder: '请输入个人邮箱用于接收赛事信息', keyboardType: 'email-address', value: null },
            ],
            isAgreementModalVisible: false,//创业参赛协议弹窗可见性？默认不可见false
            isCityModalVisible: false,//城市选择弹窗可见性？默认不可见false
            // 省
            province: [
                {
                    "divisionCode": 110000,
                    "divisionName": "北京",
                },
                {
                    "divisionCode": 120000,
                    "divisionName": "天津",
                },
                {
                    "divisionCode": 130000,
                    "divisionName": "河北省",
                },
                {
                    "divisionCode": 140000,
                    "divisionName": "山西省",
                },
                {
                    "divisionCode": 150000,
                    "divisionName": "内蒙古自治区",
                },
                {
                    "divisionCode": 210000,
                    "divisionName": "辽宁省",
                },
                {
                    "divisionCode": 220000,
                    "divisionName": "吉林省",
                },
                {
                    "divisionCode": 230000,
                    "divisionName": "黑龙江省",
                },
                {
                    "divisionCode": 310000,
                    "divisionName": "上海",
                },
                {
                    "divisionCode": 320000,
                    "divisionName": "江苏省",
                },
                {
                    "divisionCode": 330000,
                    "divisionName": "浙江省",
                },
                {
                    "divisionCode": 340000,
                    "divisionName": "安徽省",
                },
                {
                    "divisionCode": 350000,
                    "divisionName": "福建省",
                },
                {
                    "divisionCode": 360000,
                    "divisionName": "江西省",
                },
                {
                    "divisionCode": 370000,
                    "divisionName": "山东省",
                },
                {
                    "divisionCode": 410000,
                    "divisionName": "河南省",
                },
                {
                    "divisionCode": 420000,
                    "divisionName": "湖北省",
                },
                {
                    "divisionCode": 430000,
                    "divisionName": "湖南省",
                },
                {
                    "divisionCode": 440000,
                    "divisionName": "广东省",
                },
                {
                    "divisionCode": 450000,
                    "divisionName": "广西壮族自治区",
                },
                {
                    "divisionCode": 460000,
                    "divisionName": "海南省",
                },
                {
                    "divisionCode": 500000,
                    "divisionName": "重庆",
                },
                {
                    "divisionCode": 510000,
                    "divisionName": "四川省",
                },
                {
                    "divisionCode": 520000,
                    "divisionName": "贵州省",
                },
                {
                    "divisionCode": 530000,
                    "divisionName": "云南省",
                },
                {
                    "divisionCode": 540000,
                    "divisionName": "西藏自治区",
                },
                {
                    "divisionCode": 610000,
                    "divisionName": "陕西省",
                },
                {
                    "divisionCode": 620000,
                    "divisionName": "甘肃省",
                },
                {
                    "divisionCode": 630000,
                    "divisionName": "青海省",
                },
                {
                    "divisionCode": 640000,
                    "divisionName": "宁夏回族自治区",
                },
                {
                    "divisionCode": 650000,
                    "divisionName": "新疆维吾尔自治区",
                },
                {
                    "divisionCode": 710000,
                    "divisionName": "台湾",
                },
                {
                    "divisionCode": 810000,
                    "divisionName": "香港特别行政区",
                },
                {
                    "divisionCode": 820000,
                    "divisionName": "澳门特别行政区",
                },
                {
                    "divisionCode": "990000",
                    "divisionName": "海外其他",
                }
            ],
            // 市
            city: [
                {
                    "divisionCode": 110000,
                    "divisionName": "广州市",

                },
                {
                    "divisionCode": 110000,
                    "divisionName": "内蒙古自治区",

                },
                {
                    "divisionCode": 110000,
                    "divisionName": "韶关市",

                },
                {
                    "divisionCode": 110000,
                    "divisionName": "深圳市",

                },
                {
                    "divisionCode": 110000,
                    "divisionName": "珠海市",

                },
                {
                    "divisionCode": 110000,
                    "divisionName": "汕头市",

                },
                {
                    "divisionCode": 110000,
                    "divisionName": "佛山市",

                },
                {
                    "divisionCode": 110000,
                    "divisionName": "江门市",

                },
                {
                    "divisionCode": 110000,
                    "divisionName": "湛江市",

                }

            ],
            // 区
            area: [
                {
                    "divisionCode": 110000,
                    "divisionName": "天河区",
                },
                {
                    "divisionCode": 110000,
                    "divisionName": "内蒙古自治区",
                },
                {
                    "divisionCode": 110000,
                    "divisionName": "白云区",
                },
                {
                    "divisionCode": 110000,
                    "divisionName": "黄埔区",
                },
                {
                    "divisionCode": 110000,
                    "divisionName": "南沙区",
                },

            ],
            //镇
            town: [
                {
                    "divisionCode": 110000,
                    "divisionName": "五山街道",
                },
                {
                    "divisionCode": 110000,
                    "divisionName": "内蒙古自治区",
                },
                {
                    "divisionCode": 110000,
                    "divisionName": "员村街道",
                },
                {
                    "divisionCode": 110000,
                    "divisionName": "林和街道",
                },
                {
                    "divisionCode": 110000,
                    "divisionName": "兴华街道",
                }
            ],
            //已选择城市
            SelectCityTabBarList: [
                {
                    hasSelected: false,
                    value: null,
                    type: 'province',
                },
                {
                    hasSelected: false,
                    value: null,
                    type: 'city',
                },
                {
                    hasSelected: false,
                    value: null,
                    type: 'area',
                },
                {
                    hasSelected: false,
                    value: null,
                    type: 'town',
                }

            ]
        };
    }
    render() {
        /* 获取路由参数---title */
        let { title } = this.props.navigation.state.params;

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View >
                        <View >
                            <Text style={styles.title}>{title}-报名</Text>
                        </View>
                        <View style={{ paddingBottom: 14 }}>
                            {/* 渲染input组件 */}
                            {this.renderInputs()}
                        </View>
                    </View>
                </ScrollView>
                <View style={[styles.submitContainer, styles.elementCenter]}>
                    {/* 单选框 */}
                    <View style={{ position: 'absolute', left: 17 }}>
                        <TouchableOpacity
                            onPress={() => { this.setState({ checked: !this.state.checked }) }}
                            activeOpacity={1}//点击背景透明度
                        >
                            <ImageBackground
                                style={{ height: 16, width: 16 }}
                                source={this.state.checked ? ImgUrls.sign_checked : ImgUrls.sign_unchecked}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.elementCenter, { position: 'absolute', left: 44 }]}>
                        <Text style={{ fontSize: 12, color: '#919191', marginRight: 2 }}>阅读并同意</Text>
                        <TouchableOpacity
                            onPress={() => { this.setState({ isAgreementModalVisible: true }) }}
                            activeOpacity={0.8}//点击背景透明度
                        >
                            <Text style={{ fontSize: 12, color: '#0084cf' }}>《创业计划参赛协议》</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ position: 'absolute', right: 7 }}>
                        <Button
                            title='提交'
                            onPress={() => { alert("提交了") }}//向后台提交表单数据
                            textStyle={styles.submit_button}
                            TouchableType='TouchableOpacity'
                        />
                    </View>
                </View>
                {/* 创业计划参赛协议 */}
                <AgreementModal
                    isVisible={this.state.isAgreementModalVisible}//是否显示
                    // useNativeDriver={true}//定义动画是否应该使用本地驱动程序
                    onBackdropPress={() => this.closeModal()}//当背景被按下时调用
                    onBackButtonPress={() => this.closeModal()}//当Android后退按钮被按下时调用
                    style={styles.bottomModal}
                    animationType='slide'//显示和隐藏的动画 slide：从底部弹出 fade：渐隐渐显 none：无
                >
                    <View style={styles.agreementModalContent}>
                        <Text style={styles.modal_title}>创业计划参赛协议</Text>
                        <Text style={{ lineHeight: 22, fontSize: 12, color: '#5a5a5a' }}>本人郑重承诺本次上传至MM的所有应用，程序包符合《移动应用商场应用发布协议》和国家相关法律法规，包括以下内容：不侵犯第三方知识产权；不包含黄赌毒、病毒、恶意代码，不进行用户不知情的订购、不知情的推送/下载；不采集、使用超出本应用功能所必需的用户个人信息，如通话记录、通信录、短彩信等的获取行为，不会进行任何不知情个人信息获取行为；不进行任何其他非法行为。本人同意，如违反以上承诺，愿意负全部法律责任。</Text>
                        <View style={[styles.elementCenter, { marginTop: 12 }]}>
                            <Button
                                title='同意并继续'
                                onPress={() => { this.handleAgree() }}
                                textStyle={[styles.agree_button, styles.modal_button]}
                                TouchableType='TouchableOpacity'
                            />
                            <Button
                                title='取消'
                                onPress={() => { this.closeModal() }}
                                textStyle={[styles.cancel_button, styles.modal_button]}
                                TouchableType='TouchableOpacity'
                            />
                        </View>
                    </View>
                </AgreementModal>
                <CityModal
                    isVisible={this.state.isCityModalVisible}//是否显示
                    style={styles.bottomModal}
                    onBackdropPress={() => this.closeModal()}//当背景被按下时调用
                    onBackButtonPress={() => this.closeModal()}//当Android后退按钮被按下时调用
                    animationType='slide'//显示和隐藏的动画 slide：从底部弹出 fade：渐隐渐显 none：无
                >
                    <View style={styles.cityModalContent}>
                        <View style={styles.elementCenter}>
                            <Text style={[styles.modal_title, { lineHeight: 48 }]}>所在地区</Text>
                            <TouchableOpacity
                                onPress={() => { this.closeModal() }}
                                activeOpacity={0.9}
                                style={{ position: 'absolute', right: 12 }}
                            >
                                <Icon name='ios-close' size={26} color='#8e8e8e' />
                            </TouchableOpacity>
                        </View>

                        <ScrollableTabView
                            scrollWithoutAnimation={false}//设置“点击”Tab时，视图切换是否有动画，默认为false（即：有动画效果）。
                            locked={true}//表示手指是否能拖动视图，默认为false（表示可以拖动）。设为true的话，我们只能“点击”Tab来切换视图。
                            initialPage={this.state.page}//初始化时被选中的Tab下标，默认是0（即第一页）。
                            page={this.state.page}//设置选中指定的Tab。
                            tabBarActiveTextColor={Colors.textColor.red}// 选中时标签栏文本的颜色，默认为navy
                            tabBarInactiveTextColor={'#000'}// // 未选中时标签栏文本的颜色，默认为black
                            tabBarBackgroundColor={'#fff'}//设置整个Tab这一栏的背景颜色
                            tabBarUnderlineStyle={styles.tabBarUnderline}//Tab选中时下方横线的样式，比如背景颜色，下划线高度/宽度
                            tabBarTextStyle={styles.tabBarText}//设置Tab文字的样式，比如字号、字体等
                            renderTabBar={() => //renderTabBar：TabBar的样式，系统提供了两种分别是 DefaultTabBar 和 ScrollableTabBar 。DefaultTabBar：Tab会平分在水平方向的空间（默认）。ScrollableTabBar：Tab可以超过屏幕范围，滚动可以显示
                                <ScrollableTabBar style={styles.tabBar} />//可这里设置tabbar的高度,在react native中阴影的样式属性shadow都是只支持iOS的,并不支持Android。
                            }
                            style={{ borderTopWidth: 1, borderTopColor: '#e8e8e8' }}
                        >
                            {/* 渲染tab组件 */}
                            {this.SelectCityTabBar()}
                        </ScrollableTabView>

                    </View>
                </CityModal>
            </View>
        );
    }

    /**
     * 封装渲染input方法
     */
    renderInputs() {
        //定义箭头组件
        const arrow =
            <ImageBackground
                style={{ width: 8, height: 15, position: 'absolute', right: 16 }}
                source={ImgUrls.sign_select_city}
            />

        return (
            this.state.inputList.map((item, index) => {
                let flag = item.name == "所在地";
                let inputItem = <View key={index} style={[styles.elementCenter, { height: 50, borderBottomWidth: 1, borderBottomColor: '#f6f6f6', backgroundColor: '#fff' }, flag ? '' : styles.inputItem]}>
                    <Text style={[{ width: 78 }, flag ? styles.inputSelectName : '']}>{item.name}</Text>
                    <TextInput style={[{ flex: 1, color: '#3f3f3f' }, flag ? styles.limitLength : '']}
                        placeholder={item.placeholder}//如果没有任何文字输入，会显示此字符串。
                        placeholderTextColor='#bbbbbb'//占位字符串显示的文字颜色。
                        underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果  
                        keyboardType={item.keyboardType ? item.keyboardType : 'default'}//决定弹出的何种软键盘的，譬如numeric（纯数字键盘）。
                        maxLength={item.maxLength ? item.maxLength : 50}//能够输入的最长字符数。
                        autoCapitalize='none'//控制TextInput是否要自动将特定字符切换为大写
                        editable={!flag}//如果值为假，文本是不可编辑，默认值为真
                        value={item.value}
                    />
                    {/* 根据条件渲染ImageBackground箭头组件 */}
                    {flag ? (arrow) : (null)}
                </View>;
                flag ? inputItem = <TouchableHighlight
                    onPress={() => { this.setState({ isCityModalVisible: true, page: 0 }) }}
                    activeOpacity={0.9}//点击透明度
                    //点击后的背景颜色 
                    underlayColor="#d9d9d9"

                >{inputItem}</TouchableHighlight> : inputItem
                return inputItem;
            })
        );
    }

    /**
     * modal关闭弹窗(创业参赛协议和城市选择)
     */
    closeModal() {
        const initTabBarList = [
            {
                hasSelected: false,
                value: null,
                type: 'province',
            },
            {
                hasSelected: false,
                value: null,
                type: 'city',
            },
            {
                hasSelected: false,
                value: null,
                type: 'area',
            },
            {
                hasSelected: false,
                value: null,
                type: 'town',
            }

        ];
        this.setState({ isAgreementModalVisible: false, isCityModalVisible: false, });
        setTimeout(() => {
            this.setState({ SelectCityTabBarList: initTabBarList, page: 0 });
        }, 0);
    }
    /**
    * 点击同意并继续按钮
    */
    handleAgree() {
        this.closeModal();//关闭弹窗
        this.setState({ checked: true });//选中单选框
    }
    /**
    * 循环渲染tabbar
    */
    SelectCityTabBar() {
        let flag = true;
        return (
            this.state.SelectCityTabBarList.map((item, index) => {
                let renderAddress =
                    <View tabLabel={item.value ? item.value : '请选择'}>
                        {/* 渲染城市列表 */}
                        <ScrollView>
                            {
                                this.renderAddressList(item.type)//1 province
                            }
                        </ScrollView>
                    </View>
                if (item.value) {
                    return renderAddress;
                } else if (!item.value && flag) {
                    flag = false;
                    return renderAddress;
                }

            })
        );
    }
    /**
     * 列表渲染
    */
    renderAddressList(type) {
        return (
            this.state[type].map((item, index) => {//1渲染全国各个省
                return (
                    <TouchableOpacity
                        onPress={() => { this.selectAddress(type, item.divisionName) }}
                        activeOpacity={1}>
                        <Text key={index} style={{ lineHeight: 40, fontSize: 14, color: '#000', paddingLeft: 10 }}>{item.divisionName}</Text>
                    </TouchableOpacity>
                );
            })
        );
    }
    /*
    *选中列表的某一项
    *给SelectCityTabBarList的value赋值
    *标识已选择过
     */
    selectAddress(type, value) {
        let index = this.state.SelectCityTabBarList.findIndex((v, i) => {
            return v.type == type;
        });
        this.state.SelectCityTabBarList[index].value = value;//1 value:province type=province
        //同一等级地区第二次点击时,应将这个等级以后的从新复位
        if (this.state.SelectCityTabBarList[index].hasSelected) {
            //改变page的值
            this.setState({ page: index });
            //循环赋值
            this.state.SelectCityTabBarList.map((item, _index) => {
                if (_index > index) {
                    this.state.SelectCityTabBarList[_index].value = null;
                    this.state.SelectCityTabBarList[_index].hasSelected = false;
                }
            })
        }
        this.state.SelectCityTabBarList[index].hasSelected = true;//标识
        this.setState({ SelectCityTabBarList: this.state.SelectCityTabBarList });
        setTimeout(() => {
            this.state.page < 3 && this.setState({ page: this.state.page + 1 });
        }, 0);
        if (type == 'town') {
            this.state.inputList[1].value = this.getSelectAddress();
            this.setState({ inputList: this.state.inputList,isCityModalVisible: false});
        }
    }
    /**
     * 获取所选地区
      */
    getSelectAddress() {
        let address = '';
        this.state.SelectCityTabBarList.map((item) => {
            if (item.value) {
                address += item.value + ' ';
            }
        })
        return address;
    }
}

//创建样式对象
const styles = StyleSheet.create({
    elementCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {

        flex: 1,
        backgroundColor: Colors.containterBg
    },
    title: {
        paddingLeft: 20,
        color: '#3f3f3f',
        height: 63,
        lineHeight: 63,
    },
    inputItem: {
        paddingLeft: 20
    },
    inputSelectName: {
        paddingLeft: 20,
        width: 98
    },
    submitContainer: {
        width: deviceParms.deviceW,
        height: 49,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0

    },
    rightTextStyle: {
        color: '#0084cf',
        fontSize: 12
    },
    submit_button: {
        width: 130,
        height: 36,
        lineHeight: 36,
        color: '#fff',
        backgroundColor: '#e82289',
        borderRadius: 5,
        textAlign: 'center',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,//有默认的margin
    },
    agreementModalContent: {
        backgroundColor: '#fff',
        paddingHorizontal: 33,
        paddingBottom: 29,
    },
    modal_title: {
        lineHeight: 65,
        fontSize: 16,
        color: '#3f3f3f',
        textAlign: 'center'
    },
    modal_button: {
        width: 100,
        height: 36,
        fontSize: 12,
        lineHeight: 36,
        textAlign: 'center',
        borderRadius: 5
    },
    agree_button: {
        backgroundColor: '#e82289',
        color: '#fff',
        marginRight: 10,


    },
    cancel_button: {
        backgroundColor: '#ececec',
        color: '#3f3f3f',

    },
    cityModalContent: {
        backgroundColor: '#fff',
        height: deviceParms.deviceH * .8
    },
    tabBarUnderline: {
        height: 1,
        backgroundColor: Colors.textColor.red
    },
    tabBarText: {
        fontSize: 14,
        fontFamily: 'MicrosoftYaHei'
    },
    tabBar: {
        height: 50,
        borderWidth: 1,
        borderTopWidth:0,
        borderColor: '#e8e8e8',
       
    },
    limitLength: {
        paddingRight: 40,
    }
});
