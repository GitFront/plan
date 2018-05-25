/**
* @author liuqinghua
* @createDate  2018/05/17
* @Function:
* @Desc:首页tab部分（参赛作品标准）
*/
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
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
            standardList: [
                { content: '大赛面向广大中小开发者征集的是Android类优秀移动应用产品' },
                { content: '参赛作品主题内容必须健康、合法，没有任何不良信息以及商业宣传行为。' },
                { content: '参赛作品必须保证原创性，不违反任何中华人民共和国的有关法律，不会侵犯任何第三方知识产权或者其他权利；一经发现或经权利人指出，主办方将取消其参赛资格。' },
                { content: '比赛期间，参赛者不得将作品转让或出售给任何第三方，参赛者同意对任何违反上述规定所造成的纠纷负全部责任，并且保证主办方不受任何损失。' },
                { content: '一经报名参赛，即可视为开发者同意其作品在中国移动Mobile Market及相关平台进行展示，参赛作品著作权归作者所有。' },

            ]
        };
    }

    /**
     * render(){}：渲染组件,渲染的内容，所有要显示的内容必须放在 render 函数内
     * return()：如果只有一个标签可以不用()，多个标签必需使用否则报错
     */

    render() {
        return (
            <ScrollView >
                <View style={{ paddingHorizontal: 34, paddingBottom: 10 }}>
                    {/* 标题 */}

                    <Text style={{ height: 48, lineHeight: 48, fontSize: 14, fontFamily: 'MicrosoftYaHei' }}>小标题</Text>
                    {/* 渲染参数标准列表 */}
                    {
                        this.state.standardList.map((item, index) => {
                            return (
                                <View style={{ marginTop: 10 }} key={index}>
                                    <Text style={{ lineHeight: 24, fontSize: 12 }}>{index + 1}、{item.content}</Text>
                                </View>
                            );
                        })
                    }
                </View>
            </ScrollView >
        );
    }
}
