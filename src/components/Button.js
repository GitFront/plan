/**
* @author liuqinghua
* @createDate  2018/05/16
* @Function:按钮组件统一管理
* @Desc:
*/
//PureComponent非常适合于不变的组件，尤其是和数据、业务无关的纯展示组件，因为它的节省了大量比较的工作。但是对于大部分的业务来说，界面很少会有不变的组件，所以使用的场景会比较少，但是如果遇到，请尽情使用！
import React, { PureComponent } from 'react';
//安装并导入属性确认组件prop-types
import PropTypes from 'prop-types';
import {
    Text,
    TouchableNativeFeedback,//响应用户的点击事件，如果你想在处理点击事件的同时不显示任何视觉反馈，使用它是个不错的选择。
    TouchableOpacity,//在用户手指按下时降低按钮的透明度，而不会改变背景的颜色
    TouchableHighlight,///在用户手指按下时高亮
    StyleSheet,
    Platform,//系统判断
} from 'react-native';
export default class Button extends PureComponent {
    render() {

        const { onPress, textStyle, disabled, title, TouchableType } = this.props;
        let Touchable;
        switch (TouchableType) {
            case 'TouchableNativeFeedback':
                Touchable = TouchableNativeFeedback;
                break;
            case 'TouchableOpacity':
                Touchable = TouchableOpacity;
                break;
            case 'TouchableHighlight':
                Touchable = TouchableHighlight;
                break;
        }
       
        return (
            <Touchable 
            onPress={onPress} 
            activeOpacity={0.8}//点击背景透明度
            >
                <Text style={textStyle} disabled={disabled}>
                    {title}
                </Text>
            </Touchable>
        );
    }
}
//属性确认
Button.props = {
    onPress: PropTypes.func,
    textStyle: PropTypes.any,
    disabled: PropTypes.bool,
    title: PropTypes.string,
    Touchable: PropTypes.string
};
//默认属性指定
Button.defaultProps = {
    disabled: false,
};
