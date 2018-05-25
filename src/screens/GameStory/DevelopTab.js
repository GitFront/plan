/**
* @author liuqinghua
* @createDate  2018/05/17
* @Function:
* @Desc:首页tab部分（明星开发者）
*/
import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, SectionList, Image, TouchableHighlight } from 'react-native';
// 导入静态资源(图片地址)
import { ImgUrls } from '../../assets/source/';
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
            developList: [
                {
                    developer_id: 1,
                    name: '潘卫国',
                    company: '小西网络CEO',
                    summary: '小西网络成立于2014年3月，首款3D赛车游戏《全民暴力摩托》在同年6月研发成功，8月在MM商场上线，不到两个月时间该游戏在MM平台已经产生了830万的收入。目前小西网络已经成功研发及发行17款游戏，是国内领先的移动游戏开发商与发行商。',
                    avatar: require("../../../mock/images/developers/developer1.png"),

                },
                {
                    developer_id: 2,
                    name: '买买提艾力?玉努斯',
                    company: '碧利雅团队主创',
                    summary: '买买提艾力，新疆农业大学毕业，大学二年级组建了创业团队——碧利雅，并成功开发了团队的第一款PC端软件—维汉词典。毕业后他带领团队基于微信平台研发了《维吾尔语农牧民》，截止目前该软件用户已达6万人。2015年他带着精心研发的维吾尔语搜索引擎《izdax》走进“和你圆梦”创业就业计划，希望通过这个大舞台向外界展示更多维吾尔族的智慧和科技作品。',
                    avatar: require("../../../mock/images/developers/developer2.png"),

                },
                {
                    developer_id: 3,
                    name: '许扬帆',
                    company: '百闻思科技创始人',
                    summary: '百闻思科技成立于2014年，创业1年内即获得了国内外投资基金关注，顺利完成了天使及A轮融资。《经理人分享》是百闻思科技在2014年12月推出的一款专注于职业知识分享和社交的手机应用，在推出后仅3个月就获得了大量职场上班族的追捧，成功申请参加移动应用创新大赛并在MM商场上线。',
                    avatar: require("../../../mock/images/developers/developer3.png"),

                },
                {
                    developer_id: 4,
                    name: '戚永城',
                    company: 'Cat Studio创始人',
                    summary: '戚永城，资深游戏开发者，2012年正式创立Cat Studio，主攻国际平台谷歌应用商店和苹果App Store，近年转战国内平台，出品了《萌娘餐厅》、《士兵荣耀：现代战争》、《僵尸世界大战》、《小小指挥官》系列、《史诗塔防》等作品，获得了总数超过5000万的下载，其中《萌娘餐厅》成功申请参加移动应用创新大赛并获得客户端为期一个月的免费推广资源。',
                    avatar: require("../../../mock/images/developers/developer4.png"),

                },
                {
                    developer_id: 5,
                    name: '王子',
                    company: '米公益团队创始人',
                    summary: '米公益是一个通过科技和创意让用户可以随时随地轻松做公益的新型公益参与平台，专注于创造全新的用户体验和宣传方式为社会公益体系注入新的价值，让更多的公益组织和有需要帮助的人得到切实可靠的帮助。目前团队已经成功入驻中国移动互联网青年创新创业孵化基地北京创客总部。',
                    avatar: require("../../../mock/images/developers/developer5.png"),

                },
                {
                    developer_id: 6,
                    name: '麦提亚森',
                    company: 'Bilkan团队创始人',
                    summary: 'BILKAN创业团队成立至今已有近五年时间， 由于意识到少数民族学习语言的APP在市场上仍是个空白，团队用两年时间编撰汉语会话教程、多语言词典、阿拉伯语词典、土耳其语词典、维吾尔语输入法等五款词典类APP，他们将这些辞典作品带入“和你圆梦”创业就业计划，成功参加移动应用创新大赛。',
                    avatar: require("../../../mock/images/developers/developer6.png"),

                },
                {
                    developer_id: 7,
                    name: '张超',
                    company: '80后中国流行乐坛创作代表人',
                    summary: '以流行民族音乐见长，致力于民族情调结合流行基色的歌曲推广。曾为凤凰传奇、陶钰玉、郑源、胡歌等歌手创作了上百首流行歌曲，同时创作广告配乐、影视歌曲十余首，拥有独立音乐版权。',
                    avatar: require("../../../mock/images/developers/developer7.png"),

                },
                {
                    developer_id: 8,
                    name: '金泽',
                    company: '知名网络歌手',
                    summary: '从2007年开始，走上做原创歌曲的道路。音乐人得不到真正的经济收益，即使有好的作品，也没有途径去体现版权所带来的真正利益，从而导致很多原创音乐人被迫转行，自从2012年9月份开始加入了咪咕音乐人，一年多的时间，感谢中国移动给我们原创音乐人一个好的平台，在这里体现了原创音乐人的版权收益！',
                    avatar: require("../../../mock/images/developers/developer8.png"),

                },
                {
                    developer_id: 9,
                    name: '李娜',
                    company: '知名网络歌手',
                    summary: '铃声多多?对铃声下载和试听等进行了重新规划管理和计费优化，收入大幅提升，迅速从一个个人团队整合成一家颇具前景的软件开发公司。目前在各主要安卓应用市场总排行榜上，?铃声多多?都进入到前50名，覆盖用户达到4000万，月均收入突破60万，彩铃分销的成绩遥遥领先其他互联网软件，成为国内市场铃声类应用绝对的no.1',
                    avatar: require("../../../mock/images/developers/developer9.png"),

                },
                {
                    developer_id: 10,
                    name: '陈剑瑜',
                    company: '萝卜工场创始人',
                    summary: '凯罗天下（CAIROT）成立于2012年，同年，自主研发的IOS休闲游戏《保卫萝卜 》受到全球千万用户的青睐，上线仅三个月时间，中国玩家就突破1000万。',
                    avatar: require("../../../mock/images/developers/developer10.png"),

                },
                {
                    developer_id: 11,
                    name: '石鑫',
                    company: '捕鱼达人2项目组负责人',
                    summary: '《捕鱼达人2》游戏上线，24小时登顶中国区iPad Free榜单第一名，安卓版在游戏基地商用两个月后月收入突破1000万元',
                    avatar: require("../../../mock/images/developers/developer11.png"),

                },
                {
                    developer_id: 12,
                    name: '南派三叔',
                    company: '网络作家',
                    summary: '本名徐磊，以《盗墓笔记》系列小说闻名。生于嘉善，现居杭州。正职为外贸公司职员、同时是中国知名度高的网络创作高手，《盗墓笔记》系列书籍红遍华人世界，让他晋身百万畅销作家，并且为杂志《超好看》创办者兼主编。自称从小听着盗墓故事长大、家人朋友多从事古董生意，但从未搜集盗墓物品、更未曾探索古墓。',
                    avatar: require("../../../mock/images/developers/developer12.png"),

                },
                {
                    developer_id: 13,
                    name: '天蚕土豆',
                    company: '新生代网络写手代表人物',
                    summary: '真名李虎，2008年凭借处女作《魔兽剑圣异界纵横》一举折桂新人王，跻身人气顶尖网络写手之列，2009年创作的《斗破苍穹》更是获得空前成功，成为其代表作，土豆也因此奠定了在网络原创界难以动摇的人气顶级写手地位。2012年创作了《武动乾坤》，2013年的新作品《大主宰》已在起点连载。',
                    avatar: require("../../../mock/images/developers/developer13.png"),

                },
                {
                    developer_id: 14,
                    name: '金赫',
                    company: '导演、摄影师',
                    summary: '我是G客，追梦成长/我用不一样的角度看生活/ 我用不一样的故事描绘人生/我没有读过电影学院/我的经验就是不断地拍片',
                    avatar: require("../../../mock/images/developers/developer14.png"),

                },
                {
                    developer_id: 15,
                    name: '马楠',
                    company: '国内新锐导演',
                    summary: '第五届华语青年影像论坛展映片?、2012g客盛典无线票房大奖；其摄影作品《鲸鱼座》获?第五届华语青年影像论坛展映片?，第17届?北京大学生电影节?评委会大奖。随后于2011年赴台湾金马学院导演组学习，师从台湾著名导演侯孝贤，并做有学员合作短片《夜咖啡》。从此正式踏上导演之路。?',
                    avatar: require("../../../mock/images/developers/developer15.png"),

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
            <View style={{ paddingTop: 12, paddingHorizontal: 10 }}>
                <SectionList
                    style={styles.containter}
                    sections={
                        [
                            {
                                keyExtractor: (item, index) => 'section-list',//此函数用于为给定的item生成一个不重复的key。Key的作用是使React能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销。若不指定此函数，则默认抽取 item.key 作为key值。若 item.key 也不存在，则使用数组下标
                                renderItem: () => {//用来渲染每一个section中的每一个列表项的默认渲染器
                                    return (
                                        this.state.developList.map((item, index) => {
                                            return (
                                                /* TouchableHighlight高亮触摸 */
                                                <TouchableHighlight
                                                    onPress={() => { alert('页面跳转至详情') }}
                                                    activeOpacity={0.9}//点击透明度
                                                    //点击后的背景颜色 
                                                    underlayColor="#1FB579"
                                                    //!!!在此处设置marginBottom,如在sectionItem设置的话，点击后背景颜色会很深
                                                    style={{ marginBottom: 10 }}
                                                    //指定遍历的key，否则有警告
                                                    key={item.developer_id}
                                                >
                                                    <View style={styles.sectionItem} >
                                                        <View style={[styles.elementCenter, { width: 83 }]}>
                                                            <Image source={item.avatar} style={[styles.developerImage]} />
                                                        </View>
                                                        <View style={{ flex: 1, paddingRight: 30 }}>
                                                            <Text style={{ fontSize: 12, color: '#3f3f3f', marginTop: 10 }}>{item.name}</Text>
                                                            <Text style={{ fontSize: 10, color: '#919191', marginVertical: 6 }}>{item.company}</Text>
                                                            <Text style={{ fontSize: 10, color: '#5a5a5a', lineHeight: 15 }}
                                                            /* 文本行数限制，添加后超过限制行数文本会在末尾默认以...的形式省略。 */
                                                             numberOfLines={2}   
                                                             /*  ellipsizeMode设置文本缩略格式 默认'tail'   */
                                                             ellipsizeMode='tail'  //在末尾...省略（默认值）
                                                            >{item.summary}</Text>
                                                            <ImageBackground
                                                                style={{ width: 8, height: 15, position: 'absolute', right: 11, top: '50%', transform: [{ translateY: -8 }] }}
                                                                source={ImgUrls.home_developer_arrow}
                                                            />
                                                        </View>
                                                    </View>
                                                </TouchableHighlight>
                                            );
                                        })
                                    );
                                },
                                data: [
                                    {
                                        key: 'section-list'
                                    }
                                ]
                            }
                        ]
                    }
                />

            </View>
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
    containter: {

    },
    sectionItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: 100,

    },
    developerImage: {
        width: 61,
        height: 65,
    }
});