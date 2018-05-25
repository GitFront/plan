/**
* @author liuqinghua
* @createDate  2018/05/24
* @Function:
* @Desc:提交作品页面
*/
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
// 导入静态资源(图片地址，颜色)
import { ImgUrls, Colors } from '../assets/source/';
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
            inputValue: null,//input value值
        };
    }

    render() {
        const display = <Text style={{ fontSize: 12, color: '#bbbbbb', position: 'absolute', right: 36 }}>选择文件</Text>;
        return (
            <View style={styles.container}>
                <Text style={{ paddingLeft: 20, lineHeight: 63, fontSize: 23, color: '#3f3f3f' }}>提交作品</Text>
                <View style={{ paddingLeft: 20, paddingBottom: 15, backgroundColor: '#fff' }}>
                    <View style={[styles.input, styles.elementCenter]}>
                        <Text style={styles.mark}>*</Text>
                        <Text style={styles.label}>应用名称</Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder='请输入应用名称'//如果没有任何文字输入，会显示此字符串。
                            placeholderTextColor='#bbbbbb'//占位字符串显示的文字颜色。
                            underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果  
                            autoCapitalize='none'//控制TextInput是否要自动将特定字符切换为大写

                        />
                    </View>
                    <View style={[styles.input, { height: 68 }]}>
                        <TouchableOpacity
                            onPress={() => { alert('操作选择文件啦') }}
                            activeOpacity={1}//点击背景透明度

                        >
                            <View style={{ flexDirection: 'column' }}>
                                <View style={styles.elementCenter}>
                                    <Text style={[styles.mark, { height: 40, lineHeight: 40 }]}>*</Text>
                                    <Text style={[styles.label, { height: 40, lineHeight: 40 }]}>应用ICON</Text>
                                    <TextInput
                                        style={[styles.textInput, { color: '#0084cf', height: 40 }]}
                                        // placeholder='选择文件'//如果没有任何文字输入，会显示此字符串。
                                        placeholderTextColor='#bbbbbb'//占位字符串显示的文字颜色。
                                        underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果  
                                        autoCapitalize='none'//控制TextInput是否要自动将特定字符切换为大写
                                        editable={false}//如果值为假，文本是不可编辑，默认值为真
                                        value={this.state.inputValue}//input的value值
                                    />
                                    {/* 根据条件显示文字 */}
                                    {this.state.inputValue ? (null) : (display)}
                                    <ImageBackground
                                        style={{ width: 8, height: 15, position: 'absolute', right: 16 }}
                                        source={ImgUrls.sign_select_city}
                                    />
                                </View>
                                <Text style={{ fontSize: 12, color: '#bbbbbb', alignSelf: 'center' }}>png，256*256px以上，小于2M</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.input, styles.elementCenter]}>
                        <Text style={styles.mark}>*</Text>
                        <Text style={styles.label}>应用简介</Text>
                        <TextInput
                            style={[styles.textInput]}
                            placeholder='请填写应用简介'//如果没有任何文字输入，会显示此字符串。
                            placeholderTextColor='#bbbbbb'//占位字符串显示的文字颜色。
                            underlineColorAndroid='transparent' //设置下划线背景色透明 达到去掉下划线的效果  
                            autoCapitalize='none'//控制TextInput是否要自动将特定字符切换为大写

                        />

                    </View>
                </View>
            </View>
        );
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
    input: {
        borderBottomColor: '#f6f6f6',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        height: 50,
    },
    mark: {
        fontSize: 12,
        color: '#ffb515',
        marginRight: 8,
    },
    label: {
        fontSize: 12,
        color: '#808080',
        width: 70
    },
    textInput: {
        flex: 1,
        color: '#3f3f3f',
    }
});
