import { 
  Compass, 
  BookOpen, 
  Calendar, 
  User, 
  Search, 
  Star, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  Clock,
  History,
  Info,
  Settings,
  LogOut,
  Edit3,
  AlertTriangle,
  Zap,
  Grid,
  Shield,
  FileText
} from 'lucide-react';

export type Category = '奇门遁甲' | '太乙神数' | '大六壬' | '八字命理' | '紫微斗数' | '梅花易数';

export interface SymbolDetail {
  id: string;
  name: string;
  brief: string;
  core: string[];
  dimensions: {
    people?: string[];
    things?: string[];
    geography?: string[];
    body?: string[];
    personality?: string[];
    weather?: string[];
    animals?: string[];
    plants?: string[];
    colors?: string[];
  };
  quotes?: string[];
  associations?: string[]; // IDs of related symbols
}

export interface Section {
  id: string;
  name: string;
  icon: string;
  type: 'symbols' | 'list' | 'content';
  subCategories?: {
    name: string;
    items: SymbolDetail[];
  }[];
  listItems?: {
    id: string;
    title: string;
    content: string;
    tags?: string[];
  }[];
  content?: string;
}

export interface ImageSymbol {
  id: string;
  name: string;
  description: string;
  icon: string;
  sections: Section[];
}

export const METAPHYSICS_DATA: ImageSymbol[] = [
  {
    id: 'qmdj',
    name: '奇门遁甲',
    description: '预测百事，趋吉避凶',
    icon: 'NinePalaces',
    sections: [
      {
        id: 'qmdj_symbols',
        name: '象意',
        icon: 'BookOpen',
        type: 'symbols',
        subCategories: [
          {
            name: '九星（天时）',
            items: [
          {
            id: 'tp',
            name: '天蓬星',
            brief: '大凶之星，代表盗贼、贪婪、流动、大财',
            core: ['盗贼', '水', '贪', '风险', '大财'],
            dimensions: {
              people: ['盗贼', '黑社会', '大企业家', '头发蓬松之人', '胡须浓密之人'],
              things: ['雨具', '渔具', '油漆涂料', '液体', '油类物品', '墨镜'],
              geography: ['亭子', '庙宇', '三角状建筑', '四面通风的房子', '水利工程'],
              body: ['泌尿生殖系统', '肾', '膀胱', '血液', '耳'],
              personality: ['胆大妄为', '敢于冒险', '聪明机智', '贪婪', '阴暗'],
              weather: ['阴雨', '大雨', '水灾'],
              animals: ['猪', '鼠', '水族', '蝙蝠'],
              plants: ['水草', '藻类', '喜阴植物'],
              colors: ['黑色', '深蓝色']
            },
            quotes: ['天蓬加临多凶险，行船走马需谨慎']
          },
          {
            id: 'tr_ren',
            name: '天任星',
            brief: '吉星，代表任劳任怨、厚道、农民、土地',
            core: ['压力', '担当', '厚道', '宽容'],
            dimensions: {
              people: ['地产商', '矿山开采人员', '驼背人', '寿星', '农民', '胸部丰满者'],
              things: ['桌椅', '柜子', '鞋子', '被子', '艺术品', '矿物'],
              geography: ['桥', '土包山丘', '梯田', '台阶门槛', '楼梯斜坡'],
              body: ['腿', '手', '乳房', '脾胃', '腹部'],
              personality: ['任劳任怨', '任性倔强', '保守', '忠厚老实', '固执'],
              weather: ['阴天', '云雾', '微风'],
              animals: ['狗', '虎', '牛', '骆驼'],
              plants: ['瓜果', '根茎类植物', '山地植物'],
              colors: ['黄色', '土黄色']
            }
          },
          {
            id: 'tc',
            name: '天冲星',
            brief: '武士之星，代表快速、冲动、向上、直爽',
            core: ['冲撞', '快速', '冲击', '武力'],
            dimensions: {
              people: ['军警', '运动员', '性情鲁莽之人', '武士', '飞行员'],
              things: ['汽车', '鞭炮', '弹药', '工具', '兵器类', '乐器音响', '火箭'],
              geography: ['机场车站', '公安局', '派出所', '高大建筑物', '公园'],
              body: ['肝', '大腿', '发', '左肋'],
              personality: ['雷厉风行', '敢说敢干', '鲁莽', '冲动', '没耐心'],
              weather: ['雷电', '疾风', '骤雨'],
              animals: ['龙', '蛇', '马', '鸣叫的鸟'],
              plants: ['高大树木', '竹子', '生长迅速的植物'],
              colors: ['绿色', '青色']
            }
          },
          {
            id: 'tf',
            name: '天辅星',
            brief: '文化之星，代表教育、辅佐、文雅、传播',
            core: ['文化', '教育', '辅助', '文昌'],
            dimensions: {
              people: ['教师', '秘书', '公安', '门卫', '军师', '策划人', '导游'],
              things: ['风扇空调', '窗帘', '桌椅板凳', '雨衣', '伞', '电线绳子', '家具'],
              geography: ['隔离带', '围墙', '护栏', '监狱', '看守所', '学校'],
              body: ['食道', '呼吸器官', '神经', '头发'],
              personality: ['文化程度高', '有涵养', '言行高雅', '谦虚', '没有主见'],
              weather: ['和风', '细雨', '彩虹'],
              animals: ['鸡', '鹅', '蝴蝶', '蜻蜓'],
              plants: ['花草', '藤蔓', '盆景'],
              colors: ['浅绿色', '碧色']
            }
          },
          {
            id: 'ty',
            name: '天英星',
            brief: '亮丽之星，代表名气、漂亮、急躁、火业',
            core: ['热烈', '漂亮', '名望', '光明'],
            dimensions: {
              people: ['明星', '演艺人员', '编剧导演', '美术画家', '文秘', '美容师'],
              things: ['灯具', '烟花爆竹', '望远镜', '家用电器', '证件', '化妆品'],
              geography: ['阳光充足之地', '图书馆', '电影院', '超市', '冶炼之地', '电站'],
              body: ['嘴唇', '眼睛', '血液', '心脏', '小肠'],
              personality: ['急躁', '暴躁', '热情', '虚荣浮夸', '爱表现'],
              weather: ['晴天', '烈日', '干旱'],
              animals: ['雉', '孔雀', '萤火虫', '马'],
              plants: ['红色花朵', '枫叶', '带刺植物'],
              colors: ['红色', '紫色', '橙色']
            }
          },
          {
            id: 'tr',
            name: '天芮星',
            brief: '病星，代表疾病、土地、学生、神佛',
            core: ['疾病', '土地', '贪婪', '孕妇', '问题'],
            dimensions: {
              people: ['医生', '病人', '农民', '学生', '老女人', '产妇'],
              things: ['书籍', '菩萨', '女神', '瓦罐', '瓷器', '丝织棉麻制品'],
              geography: ['学校', '医院', '街道', '走廊', '寺庙', '书店'],
              body: ['脾胃', '腹部', '肌肉', '肩部'],
              personality: ['固执', '迟钝', '好学', '认真严肃', '钻牛角尖'],
              weather: ['阴云', '雾气', '沙尘'],
              animals: ['牛', '羊', '猫', '软体动物'],
              plants: ['庄稼', '苔藓', '低矮灌木'],
              colors: ['黄色', '咖啡色']
            }
          },
          {
            id: 'tz',
            name: '天柱星',
            brief: '破坏之星，代表口才、顶梁柱、叛逆、肃杀',
            core: ['中流砥柱', '破坏力', '变革', '口才'],
            dimensions: {
              people: ['纪检人员', '律师', '艺人歌手', '军警', '讲解员'],
              things: ['音响乐器', '钟表喇叭', '筷子', '电器', '钢管', '水泥管'],
              geography: ['电线杆', '烟囱', '高塔', '水塔', '山口', '洞穴'],
              body: ['颈椎腰椎', '手指脚趾', '大腿', '口腔呼吸', '肺'],
              personality: ['能言善辩', '独挡一面', '性格叛逆', '好勇斗狠', '冷酷'],
              weather: ['阴雨', '浓雾', '秋霜'],
              animals: ['鸡', '羊', '猿猴', '鸣禽'],
              plants: ['芦苇', '残花', '带壳果实'],
              colors: ['白色', '银色']
            }
          },
          {
            id: 'tx',
            name: '天心星',
            brief: '核心之星，代表领导、医生、医药、管理',
            core: ['中心', '核心', '管理', '指挥'],
            dimensions: {
              people: ['管理人员', '医生', '参谋', '核心人物', '君王', '白领'],
              things: ['金银珍珠', '神像佛像', '铁器', '珠宝', '令印', '西医药'],
              geography: ['堂屋', '教堂', '领导办公室', '影壁墙', '市中心', '金融区'],
              body: ['头部', '心脏', '肺部', '大肠', '骨骼'],
              personality: ['有管理能力', '有才华', '正直善良', '老成持重', '缜密'],
              weather: ['晴朗', '冰雹', '严寒'],
              animals: ['虎', '狮', '鹤', '天鹅'],
              plants: ['菊花', '松柏', '坚硬果实'],
              colors: ['白色', '金色']
            }
          }
        ]
      },
      {
        name: '八门（人事）',
        items: [
          {
            id: 'xm',
            name: '休门',
            brief: '吉门，代表休息、调理、贵人、休闲',
            core: ['调理', '休息', '懒散', '退休'],
            dimensions: {
              people: ['公职之人', '离休人员', '护士', '美容师', '休闲之人'],
              things: ['液体物质', '饮料酒水', '松软物质', '绳子', '衣物', '海绵'],
              geography: ['有水的场所', '河流', '公园', '卧室', '美容院', '酒吧'],
              body: ['泌尿生殖系统', '血液', '内分泌'],
              personality: ['性情温和', '漫不经心', '从容']
            }
          },
          {
            id: 'sm',
            name: '生门',
            brief: '大吉之门，代表生意、利润、生长、房产',
            core: ['生意', '生长', '活着', '利润'],
            dimensions: {
              people: ['经商之人', '生产者', '劳动者', '金融从业者', '老板'],
              things: ['生活必需品', '钱', '新家具', '农作物'],
              geography: ['房屋', '街道', '生产地', '交易市场', '房地产', '养殖场'],
              body: ['脾胃', '肠', '胃', '嘴', '鼻'],
              personality: ['忠厚', '乐观', '有生机']
            }
          },
          {
            id: 'shangm',
            name: '伤门',
            brief: '凶门，代表受伤、竞争、车辆、捕猎',
            core: ['受伤', '伤灾', '伤心', '竞争'],
            dimensions: {
              people: ['公安', '驾驶员', '讨债人', '军警', '运动员', '猎人'],
              things: ['车辆', '刀剑枪', '炸药', '锐器', '破损的东西'],
              geography: ['停车场', '公安局', '医院', '危险环境', '屠宰场'],
              body: ['肝胆', '手脚', '伤疤', '手术部位'],
              personality: ['直爽', '易怒', '好斗']
            }
          },
          {
            id: 'dm',
            name: '杜门',
            brief: '中平之门，代表隐藏、保密、技术、阻塞',
            core: ['阻塞', '保守', '技术', '隐藏'],
            dimensions: {
              people: ['技术员', '军人', '公检法', '气功师', '僧道', '保密人员'],
              things: ['门窗', '被子', '窗帘', '内衣', '瓶子盖', '专利'],
              geography: ['围墙', '隔离带', '闸口', '闭塞拥堵之地', '保密部门'],
              body: ['肝胆', '大脑神经', '循环不畅部位'],
              personality: ['不爱说话', '文静内向', '沉稳']
            }
          },
          {
            id: 'jm_jing',
            name: '景门',
            brief: '中平之门，代表信息、广告、漂亮、火光',
            core: ['信息', '计划', '通讯', '景色'],
            dimensions: {
              people: ['策划人', '文秘', '作家', '电信人员', '广告人', '美容师'],
              things: ['图书', '图画', '文件', '合同', '电视', '手机', '颜料'],
              geography: ['公园', '电影院', '美容院', 'KTV', '景点', '酒吧'],
              body: ['眼睛', '小肠', '心脏', '血液'],
              personality: ['心直口快', '脾气急躁', '知书达理']
            }
          },
          {
            id: 'sim',
            name: '死门',
            brief: '凶门，代表死亡、固定、地皮、执着',
            core: ['神佛', '伤疤', '地皮', '执着'],
            dimensions: {
              people: ['死去的人', '固执死板的人', '屠夫', '风水师', '打工者'],
              things: ['神佛', '木偶', '死人照片', '枷锁', '凶器', '古董'],
              geography: ['地皮', '坟墓', '医院', '屠宰场', '刑场', '废屋'],
              body: ['伤疤', '肿块', '肿瘤', '没有活力的部位'],
              personality: ['固执迟钝', '死心眼', '不变通']
            }
          },
          {
            id: 'jingm',
            name: '惊门',
            brief: '凶门，代表担心、口舌、响声、官司',
            core: ['担心', '惊恐', '官非', '响声'],
            dimensions: {
              people: ['教师', '律师', '纪检人员', '歌手', '歌星', '公检法'],
              things: ['发声工艺品', '风铃', '钟', '影视', '乐器'],
              geography: ['法院', '公安局', '歌厅', '闹市', '歌剧院'],
              body: ['肺部', '喉咙'],
              personality: ['能说会道', '担惊受怕', '心里七上八下']
            }
          },
          {
            id: 'km',
            name: '开门',
            brief: '大吉之门，代表事业、公开、公司、开始',
            core: ['开始', '开创', '公开', '暴露'],
            dimensions: {
              people: ['法官', '检察官', '老板', '领导', '外科医生', '公务员'],
              things: ['贵重物品', '圆形物品', '金饰', '证件'],
              geography: ['高大建筑物', '店铺', '单位', '开阔地', '飞机场', '政府部门'],
              body: ['头部', '肺', '大肠', '脊椎', '骨骼'],
              personality: ['豁达开朗', '正直', '果断']
            }
          }
        ]
      },
      {
        name: '八神（神助）',
        items: [
          {
            id: 'zf',
            name: '值符',
            brief: '天乙之神，代表领导、权力、高贵、稀有',
            core: ['领导', '权力', '名贵', '中心'],
            dimensions: {
              people: ['当官的', '厂长', '经理', '老板', '名人', '贵人'],
              things: ['贵重物品', '名牌', '高档家具', '字画古玩', '印章', '国旗'],
              geography: ['高档场所', '金银首饰店', '首府首都', '中央地带'],
              body: ['头部', '面部', '手', '心脏'],
              personality: ['气概雄伟', '品质高雅', '不怒而威']
            }
          },
          {
            id: 'ts',
            name: '螣蛇',
            brief: '虚诈之神，代表变化、怪异、梦境、缠绕',
            core: ['虚诈', '怪异', '反复', '梦幻'],
            dimensions: {
              people: ['善变者', '狡猾奸诈者', '反复无常者', '精神病患者'],
              things: ['蛇形物', '绳索', '香火', '领带', '拉锁锁链'],
              geography: ['弯曲建筑', '山脉河流', '高压线', '海岸线'],
              body: ['精神神经', '血液血管', '经络心脏'],
              personality: ['缠人', '虚伪狡诈', '猜忌多疑', '足智多谋']
            }
          },
          {
            id: 'tyin',
            name: '太阴',
            brief: '庇护之神，代表隐藏、策划、细心、隐私',
            core: ['阴谋', '秘密', '策划', '佑护'],
            dimensions: {
              people: ['女人少女', '文人秘书', '保姆', '策划师', '雕刻者'],
              things: ['玉器', '雕刻品', '玩具字画', '化妆品', '金玉首饰'],
              geography: ['地下室', '背面阴面', '阴凉处', '佛寺'],
              body: ['腋下私处', '皮肤', '肺部', '嘴'],
              personality: ['内向', '爱静不爱动', '老谋深算', '心思细腻']
            }
          },
          {
            id: 'lh',
            name: '六合',
            brief: '护卫之神，代表合作、婚姻、中介、人缘',
            core: ['人缘', '合作', '婚姻', '契约'],
            dimensions: {
              people: ['乐善好施者', '人缘好的人', '中介人', '儿童', '媒人'],
              things: ['箱子盒子', '合同证书', '音信书契', '结婚证'],
              geography: ['公园草地', '相聚场所'],
              body: ['肝胆', '毛发眉毛', '手指脚趾'],
              personality: ['开朗平和', '仁慈谦让', '一团和气', '乐观']
            }
          },
          {
            id: 'bh',
            name: '白虎',
            brief: '凶煞之神，代表阻力、能力、凶猛、死伤',
            core: ['凶猛', '阻隔', '权力', '疾病'],
            dimensions: {
              people: ['仇人', '情敌', '军警', '医生', '公安', '掌权者'],
              things: ['武器凶器', '石制铁制品', '刀剑枪支', '毒品', '锁'],
              geography: ['道路路口', '关卡收费站'],
              body: ['骨骼', '肺部', '大肠'],
              personality: ['大义凌然', '凶猛明毅', '残暴易怒', '强硬']
            }
          },
          {
            id: 'xw',
            name: '玄武',
            brief: '小盗之神，代表偷盗、玄学、虚伪、不明白',
            core: ['盗耗', '虚伪', '玄秘', '不确定'],
            dimensions: {
              people: ['聪明多智者', '虚伪不实者', '小人', '小偷盗贼', '搞玄学的人'],
              things: ['流体类物质', '油盐酱醋酒', '油漆', '假货', '腐烂物'],
              geography: ['潮湿有水之地', '下水道', '低洼处', '厕所'],
              body: ['血液', '肾脏', '泌尿系统', '眼睛'],
              personality: ['机智灵活', '巧言善变', '偷奸取巧', '迷糊']
            }
          },
          {
            id: 'jd',
            name: '九地',
            brief: '坚牢之神，代表稳定、厚重、包容、缓慢',
            core: ['坚固', '稳重', '缓慢', '包容'],
            dimensions: {
              people: ['医生农民', '老妇人', '道姑', '地下工作者', '吝啬者'],
              things: ['土制品', '储衣柜', '首饰盒', '砖瓦沙石', '农作物'],
              geography: ['低洼之地', '地铁地下室', '地窖', '地面及以下'],
              body: ['脾胃', '腹部'],
              personality: ['柔顺文静', '自私消极', '缺乏上进心', '稳扎稳打']
            }
          },
          {
            id: 'jt',
            name: '九天',
            brief: '威悍之神，代表高大、积极、志向远大、变动',
            core: ['高远', '变动', '宏大', '志向'],
            dimensions: {
              people: ['长辈领导', '有威望之人', '吹牛者'],
              things: ['金玉珠宝', '刀枪剑戟', '钱币', '直升机', '飞机'],
              geography: ['高原高空', '高层建筑', '开阔之地'],
              body: ['头部额头', '肺部大肠', '皮毛'],
              personality: ['不怒而威', '刚强好动', '好高骛远', '求新求变']
            }
          }
        ]
      },
      {
        name: '十天干（用神）',
        items: [
          {
            id: 'jia',
            name: '甲',
            brief: '东方木，为有名望、高贵、第一、栋梁',
            core: ['名望', '重要', '第一', '保护'],
            dimensions: {
              people: ['领导', '名人', '头目', '贵人', '长辈'],
              things: ['金玉珠宝', '帽子', '古董', '大树'],
              geography: ['名人居所', '高大建筑物', '首都', '办公室'],
              body: ['头部', '指甲', '肝胆'],
              personality: ['直爽', '有能力', '亲力亲为']
            }
          },
          {
            id: 'yi',
            name: '乙',
            brief: '东方木，为希望、转机、弯曲、柔弱',
            core: ['希望', '弯曲', '艺术', '依靠'],
            dimensions: {
              people: ['女人', '妻子', '艺人', '作家', '医生', '中医'],
              things: ['艺术品', '葫芦', '油画', '桌椅', '装饰物', '丝绸'],
              geography: ['花园', '草地', '菜园', '漂亮的建筑', '花店'],
              body: ['手足', '肩发', '肝胆', '淋巴', '神经'],
              personality: ['柔嫩', '婉转', '能屈能伸', '矫揉造作']
            }
          },
          {
            id: 'bing',
            name: '丙',
            brief: '南方火，为光明、雄威、热烈、急躁',
            core: ['希望', '光明', '乱子', '暴力'],
            dimensions: {
              people: ['有权之人', '电厂工作者', '脾气暴躁者', '情人'],
              things: ['灯灶', '发热物', '饼干', '火箭', '变压器', '电器'],
              geography: ['厨房', '化工厂', '煤炭冶炼', '明亮场所'],
              body: ['眼', '血液', '唇', '心脏', '小肠'],
              personality: ['暴烈', '强悍', '虚荣', '正义', '果断']
            }
          },
          {
            id: 'ding',
            name: '丁',
            brief: '南方火，为希望、执著、尖锐、突出',
            core: ['希望', '发展', '尖锐', '目标'],
            dimensions: {
              people: ['情人', '歌星', '技术一流者', '表现突出者'],
              things: ['发光体', '灯', '刀针剑', '票据', '电子产品', '手机'],
              geography: ['路口', '屋檐', '屋角', '房顶'],
              body: ['眼牙', '心脏', '血液', '骨刺'],
              personality: ['文雅', '多思', '神秘', '智慧', '机灵']
            }
          },
          {
            id: 'wu',
            name: '戊',
            brief: '中央土，为钱财、厚重、土地、诚信',
            core: ['钱财', '资本', '土地', '诚信'],
            dimensions: {
              people: ['会计', '金融人员', '地产商', '诚实之人'],
              things: ['钱币', '黄金', '陶瓷', '土制品', '面粉'],
              geography: ['银行', '金库', '农场', '停车场', '墙角'],
              body: ['胃', '鼻子', '肌肉', '面部'],
              personality: ['诚实', '厚道', '呆板', '守信']
            }
          },
          {
            id: 'ji',
            name: '己',
            brief: '中央土，为策划、欲望、弯曲、垃圾',
            core: ['策划', '欲望', '弯曲', '杂乱'],
            dimensions: {
              people: ['策划人', '广告人', '欲望强烈者', '身体矮小者'],
              things: ['垃圾', '粪便', '绳索', '弯曲之物', '泥土'],
              geography: ['坑洞', '垃圾场', '下水道', '弯曲的小路'],
              body: ['脾', '腹部', '皮肤', '肛门'],
              personality: ['多疑', '吝啬', '有心计', '自私']
            }
          },
          {
            id: 'geng',
            name: '庚',
            brief: '西方金，为阻力、仇人、公安、刚强',
            core: ['阻力', '仇人', '变革', '刚硬'],
            dimensions: {
              people: ['公安军警', '仇人', '对手', '黑社会', '刚毅之人'],
              things: ['大型金属', '汽车', '刀具', '矿石', '骨头'],
              geography: ['工厂', '五金店', '马路', '关卡'],
              body: ['大肠', '骨骼', '肺', '牙齿'],
              personality: ['刚强', '好斗', '固执', '威严']
            }
          },
          {
            id: 'xin',
            name: '辛',
            brief: '西方金，为错误、精巧、罪人、变革',
            core: ['错误', '罪人', '精美', '变革'],
            dimensions: {
              people: ['犯过错误的人', '罪犯', '首饰匠', '精明之人'],
              things: ['小金属', '首饰', '针', '钱币', '法律条文'],
              geography: ['珠宝店', '钟表店', '五金加工厂'],
              body: ['肺', '支气管', '骨骼', '牙齿'],
              personality: ['精明', '刻薄', '爱虚荣', '灵动']
            }
          },
          {
            id: 'ren',
            name: '壬',
            brief: '北方水，为流动、智慧、大水、运输',
            core: ['流动', '智慧', '大水', '运输'],
            dimensions: {
              people: ['运输人员', '水利工作者', '聪明人', '孕妇'],
              things: ['大水', '河流', '海产品', '黑色物品', '循环物'],
              geography: ['大海', '江河', '码头', '车站', '电影院'],
              body: ['膀胱', '血液', '循环系统', '耳朵'],
              personality: ['聪明', '多变', '任性', '有远见']
            }
          },
          {
            id: 'gui',
            name: '癸',
            brief: '北方水，为玄学、变化、小水、阴暗',
            core: ['玄学', '变化', '小水', '阴暗'],
            dimensions: {
              people: ['搞玄学的人', '心理学家', '阴险小人', '潜水员'],
              things: ['雨水', '泉水', '眼泪', '化妆品', '黑色液体'],
              geography: ['厕所', '浴室', '地下室', '阴暗处'],
              body: ['肾脏', '生殖系统', '内分泌', '耳朵'],
              personality: ['阴沉', '多愁善感', '机灵', '神秘']
            }
          }
        ]
      },
      {
        name: '九宫八卦（地利）',
        items: [
          {
            id: 'kan',
            name: '坎一宫',
            brief: '北方，属水，代表陷阱、困难、流动',
            core: ['陷阱', '困难', '流动', '智慧'],
            dimensions: {
              people: ['中年男子', '江湖之人', '盗贼', '思想家'],
              things: ['水', '酒', '黑色物品', '带核之物'],
              geography: ['河流', '湖泊', '低洼地', '浴室'],
              body: ['肾', '膀胱', '耳朵', '血液'],
              personality: ['聪明', '阴险', '随和', '忧郁']
            }
          },
          {
            id: 'kun',
            name: '坤二宫',
            brief: '西南方，属土，代表大地、包容、吝啬',
            core: ['包容', '大地', '柔顺', '吝啬'],
            dimensions: {
              people: ['老妇人', '母亲', '农民', '众人'],
              things: ['方形物', '土制品', '布帛', '五谷'],
              geography: ['田野', '平地', '故乡', '西南方'],
              body: ['腹部', '脾胃', '肌肉'],
              personality: ['温厚', '懦弱', '自私', '稳重']
            }
          },
          {
            id: 'zhen',
            name: '震三宫',
            brief: '东方，属木，代表震动、快速、威严',
            core: ['震动', '快速', '奋起', '威严'],
            dimensions: {
              people: ['长男', '名人', '执法者', '躁动之人'],
              things: ['乐器', '闹钟', '车船', '竹木'],
              geography: ['闹市', '森林', '东方', '高大处'],
              body: ['足', '肝', '发', '喉'],
              personality: ['急躁', '果断', '虚惊']
            }
          },
          {
            id: 'xun',
            name: '巽四宫',
            brief: '东南方，属木，代表风、进入、飘散',
            core: ['进入', '飘散', '名望', '命令'],
            dimensions: {
              people: ['长女', '文人', '商人', '教师'],
              things: ['绳索', '木制品', '香料', '羽毛'],
              geography: ['花园', '草地', '东南方', '直道'],
              body: ['股', '胆', '神经', '气管'],
              personality: ['优柔寡断', '和气', '奔波']
            }
          },
          {
            id: 'zhong',
            name: '中五宫',
            brief: '中央，属土，代表核心、变动、寄居',
            core: ['核心', '变动', '寄居', '平衡'],
            dimensions: {
              people: ['核心人物', '中间人'],
              things: ['土制品', '核心部件'],
              geography: ['中央', '中心地带'],
              body: ['脾胃', '腹部'],
              personality: ['稳重', '中庸']
            }
          },
          {
            id: 'qian',
            name: '乾六宫',
            brief: '西北方，属金，代表天、权力、高贵',
            core: ['权力', '高贵', '刚健', '圆'],
            dimensions: {
              people: ['老父', '领导', '长辈', '名人'],
              things: ['金玉', '宝珠', '圆形物', '钟表'],
              geography: ['西北方', '名胜', '高处', '首都'],
              body: ['头', '肺', '骨骼', '大肠'],
              personality: ['刚毅', '自尊', '果断']
            }
          },
          {
            id: 'dui',
            name: '兑七宫',
            brief: '西方，属金，代表口舌、喜悦、破损',
            core: ['口舌', '喜悦', '破损', '泽'],
            dimensions: {
              people: ['少女', '艺人', '律师', '解说员'],
              things: ['金属', '乐器', '带口之物', '废品'],
              geography: ['西方', '沼泽', '废墟', '歌厅'],
              body: ['口', '舌', '肺', '痰'],
              personality: ['喜悦', '雄辩', '多言']
            }
          },
          {
            id: 'gen',
            name: '艮八宫',
            brief: '东北方，属土，代表停止、稳重、山',
            core: ['停止', '稳重', '阻隔', '山'],
            dimensions: {
              people: ['少男', '闲人', '守门人'],
              things: ['土制品', '石头', '门槛', '桌椅'],
              geography: ['东北方', '山径', '丘陵', '门阙'],
              body: ['手', '鼻', '背', '关节'],
              personality: ['固执', '安静', '保守']
            }
          },
          {
            id: 'li',
            name: '离九宫',
            brief: '南方，属火，代表光明、美丽、虚心',
            core: ['光明', '美丽', '虚幻', '火'],
            dimensions: {
              people: ['中女', '文人', '明星', '美容师'],
              things: ['火', '灯', '书画', '证件'],
              geography: ['南方', '明亮处', '图书馆', '电站'],
              body: ['眼', '心', '血液', '小肠'],
              personality: ['急躁', '虚荣', '热情']
            }
          }
        ]
      },
      {
        name: '十二地支（时空）',
        items: [
          {
            id: 'zi',
            name: '子',
            brief: '北方水，代表智慧、流动、种子、极致',
            core: ['智慧', '流动', '极致', '种子'],
            dimensions: {
              people: ['聪明人', '少男', '盗贼', '水利工作者'],
              things: ['水', '黑色物品', '圆润之物', '种子'],
              geography: ['河流', '湖泊', '北方', '阴暗处'],
              body: ['肾', '膀胱', '耳朵', '血液'],
              personality: ['聪明', '多变', '内敛']
            }
          },
          {
            id: 'chou',
            name: '丑',
            brief: '东北土，代表转折、库房、缓慢、冤仇',
            core: ['转折', '库房', '缓慢', '冤仇'],
            dimensions: {
              people: ['农民', '建筑工', '老实人', '丑陋之人'],
              things: ['土制品', '柜子', '锁', '牛'],
              geography: ['东北方', '田野', '桥梁', '坟墓'],
              body: ['脾', '腹部', '肌肉', '足'],
              personality: ['固执', '厚道', '阴沉']
            }
          },
          {
            id: 'yin',
            name: '寅',
            brief: '东北木，代表开始、向上、威严、官禄',
            core: ['开始', '向上', '威严', '官禄'],
            dimensions: {
              people: ['领导', '贵人', '长辈', '公职人员'],
              things: ['大树', '木材', '车辆', '文书'],
              geography: ['东北方', '山林', '政府部门', '高大建筑'],
              body: ['肝', '胆', '手', '发'],
              personality: ['刚直', '威严', '有志向']
            }
          },
          {
            id: 'mao',
            name: '卯',
            brief: '东方木，代表希望、快速、门窗、艺术',
            core: ['希望', '快速', '门窗', '艺术'],
            dimensions: {
              people: ['艺人', '作家', '少年', '手艺人'],
              things: ['花草', '绳索', '乐器', '门窗'],
              geography: ['东方', '花园', '草地', '闹市'],
              body: ['肝', '胆', '手', '指甲'],
              personality: ['灵动', '柔和', '敏捷']
            }
          },
          {
            id: 'chen',
            name: '辰',
            brief: '东南土，代表变动、水库、斗争、华丽',
            core: ['变动', '水库', '斗争', '华丽'],
            dimensions: {
              people: ['公职人员', '有权之人', '斗争者'],
              things: ['瓷器', '水缸', '龙形物', '华丽之物'],
              geography: ['东南方', '水库', '池塘', '高岗'],
              body: ['脾', '胃', '皮肤', '肩'],
              personality: ['好动', '威严', '多变']
            }
          },
          {
            id: 'si',
            name: '巳',
            brief: '东南火，代表变化、信息、明亮、口舌',
            core: ['变化', '信息', '明亮', '口舌'],
            dimensions: {
              people: ['文人', '艺人', '传播者', '狡猾之人'],
              things: ['灯火', '电器', '文书', '蛇形物'],
              geography: ['东南方', '明亮处', '路口', '闹市'],
              body: ['心', '血液', '面部', '齿'],
              personality: ['机灵', '多疑', '热情']
            }
          },
          {
            id: 'wu',
            name: '午',
            brief: '南方火，代表热烈、名气、端正、文书',
            core: ['热烈', '名气', '端正', '文书'],
            dimensions: {
              people: ['名人', '长辈', '军警', '漂亮女性'],
              things: ['火', '灯', '书画', '旗帜'],
              geography: ['南方', '明亮处', '政府部门', '广场'],
              body: ['心', '眼', '血液', '小肠'],
              personality: ['正直', '急躁', '爱表现']
            }
          },
          {
            id: 'wei',
            name: '未',
            brief: '西南土，代表味道、医药、结束、包容',
            core: ['味道', '医药', '结束', '包容'],
            dimensions: {
              people: ['医生', '厨师', '老妇人', '吝啬者'],
              things: ['药', '食物', '衣服', '土制品'],
              geography: ['西南方', '药店', '厨房', '废墟'],
              body: ['脾', '胃', '腹部', '脊椎'],
              personality: ['温顺', '固执', '内敛']
            }
          },
          {
            id: 'shen',
            name: '申',
            brief: '西南金，代表流动、传送、刚硬、阻力',
            core: ['流动', '传送', '刚硬', '阻力'],
            dimensions: {
              people: ['运输人员', '军警', '刚毅之人', '行人'],
              things: ['大型金属', '车辆', '刀具', '矿石'],
              geography: ['西南方', '车站', '码头', '工厂'],
              body: ['大肠', '骨骼', '肺', '经络'],
              personality: ['果断', '刚强', '好动']
            }
          },
          {
            id: 'you',
            name: '酉',
            brief: '西方金，代表精美、口舌、酒水、变革',
            core: ['精美', '口舌', '酒水', '变革'],
            dimensions: {
              people: ['少女', '艺人', '律师', '精明之人'],
              things: ['小金属', '首饰', '酒', '钟表'],
              geography: ['西方', '酒店', '首饰店', '闹市'],
              body: ['肺', '口', '舌', '牙齿'],
              personality: ['精明', '爱美', '好辩']
            }
          },
          {
            id: 'xu',
            name: '戌',
            brief: '西北土，代表守卫、技术、火库、诚信',
            core: ['守卫', '技术', '火库', '诚信'],
            dimensions: {
              people: ['军警', '技术员', '诚实之人', '长辈'],
              things: ['土制品', '锁', '兵器', '狗'],
              geography: ['西北方', '军营', '化工厂', '高岗'],
              body: ['脾', '胃', '皮肤', '命门'],
              personality: ['忠诚', '固执', '威严']
            }
          },
          {
            id: 'gui_branch',
            name: '亥',
            brief: '西北水，代表流动、玄学、极致、包容',
            core: ['流动', '玄学', '极致', '包容'],
            dimensions: {
              people: ['搞玄学的人', '聪明人', '长辈', '醉酒者'],
              things: ['大水', '黑色物品', '圆润之物', '酒'],
              geography: ['西北方', '江河', '大海', '寺庙'],
              body: ['肾', '膀胱', '耳朵', '血液'],
              personality: ['聪明', '宽容', '随和']
            }
          }
            ]
          }
        ]
      },
      {
        id: 'qmdj_harms',
        name: '四害',
        icon: 'AlertTriangle',
        type: 'list',
        listItems: [
          { id: 'h1', title: '门迫', content: '门克宫。如开门在震宫，金克木。', tags: ['凶'] },
          { id: 'h2', title: '击刑', content: '地支相刑。如甲子戊在震宫，子卯相刑。', tags: ['大凶'] },
          { id: 'h3', title: '入墓', content: '天干入地支之墓。如甲子戊在坤宫，子入水墓。', tags: ['陷'] },
          { id: 'h4', title: '空亡', content: '旬空。代表虚假、无力、消失。', tags: ['虚'] }
        ]
      },
      {
        id: 'qmdj_charms',
        name: '符咒',
        icon: 'Zap',
        type: 'content',
        content: '奇门符咒主要用于化解四害或增强吉气。常见有：六甲符、三奇符等。'
      },
      {
        id: 'qmdj_formations',
        name: '阵法',
        icon: 'Grid',
        type: 'content',
        content: '奇门阵法包括：天覆阵、地载阵、风扬阵、云垂阵、龙飞阵、虎翼阵、鸟翔阵、蛇蟠阵。'
      }
    ]
  },
  {
    id: 'tysn',
    name: '太乙神数',
    description: '天道运行，国运兴衰',
    icon: 'TaiYi',
    sections: [
      {
        id: 'tysn_symbols',
        name: '象意',
        icon: 'BookOpen',
        type: 'symbols',
        subCategories: [
          {
            name: '核心象意',
            items: [
              { id: 't1', name: '太乙', brief: '至尊之神，主宰万物运行。', core: ['核心'], dimensions: {} },
              { id: 't2', name: '天目', brief: '主察视，预示事物的动向。', core: ['神将'], dimensions: {} },
              { id: 't3', name: '计神', brief: '主谋略，代表计划与筹谋。', core: ['神将'], dimensions: {} },
              { id: 't4', name: '十六神', brief: '分布十六方，主宰不同方位吉凶。', core: ['基础'], dimensions: {} }
            ]
          }
        ]
      },
      {
        id: 'tysn_logic',
        name: '推演逻辑',
        icon: 'Grid',
        type: 'content',
        content: '太乙神数以岁、月、日、时计，推算天时、地利、人和。其核心在于“太乙”在十六宫中的运行轨迹，结合天目、计神等神将的方位，判断国运、战争及重大自然现象。'
      }
    ]
  },
  {
    id: 'dlr',
    name: '大六壬',
    description: '三传四课，神机妙算',
    icon: 'DaLiuRen',
    sections: [
      {
        id: 'dlr_symbols',
        name: '象意',
        icon: 'BookOpen',
        type: 'symbols',
        subCategories: [
          {
            name: '十天干',
            items: [
          {
            id: 'jm_dlr',
            name: '甲',
            brief: '阳木，代表首领、公门、文书、高大',
            core: ['首领', '公门', '文书', '木'],
            dimensions: {
              people: ['尊贵之人', '长官', '医生'],
              things: ['公文', '印信', '高大之物'],
              geography: ['衙门', '森林', '高地'],
              body: ['头', '胆'],
              personality: ['刚直', '仁慈']
            }
          },
          {
            id: 'ym_dlr',
            name: '乙',
            brief: '阴木，代表阴私、艺术、花草、柔弱',
            core: ['阴私', '艺术', '花草', '木'],
            dimensions: {
              people: ['妇女', '艺人', '温柔之人'],
              things: ['花草', '纸张', '丝绸'],
              geography: ['公园', '草地', '出入口'],
              body: ['颈', '肝'],
              personality: ['柔顺', '敏感']
            }
          },
          {
            id: 'bh_dlr',
            name: '丙',
            brief: '阳火，代表光明、文书、热情、急躁',
            core: ['光明', '文书', '热情', '火'],
            dimensions: {
              people: ['名流', '演说家', '兄长'],
              things: ['火', '电器', '书画'],
              geography: ['南方', '影剧院', '发电厂'],
              body: ['眼', '小肠'],
              personality: ['热情', '急躁']
            }
          },
          {
            id: 'dh_dlr',
            name: '丁',
            brief: '阴火，代表玉女、灵动、思想、灯烛',
            core: ['玉女', '灵动', '思想', '火'],
            dimensions: {
              people: ['少女', '思想家', '晚辈'],
              things: ['灯光', '电子产品', '文字'],
              geography: ['图书馆', '厨房', '繁华街道'],
              body: ['心', '舌'],
              personality: ['温和', '内敛']
            }
          },
          {
            id: 'wt_dlr',
            name: '戊',
            brief: '阳土，代表厚重、诚信、阻隔、城墙',
            core: ['厚重', '诚信', '阻隔', '土'],
            dimensions: {
              people: ['诚实之人', '建筑师', '长辈'],
              things: ['土石', '古董', '皮具'],
              geography: ['山岗', '堤坝', '仓库'],
              body: ['胃', '皮肤'],
              personality: ['稳重', '固执']
            }
          },
          {
            id: 'jt_dlr',
            name: '己',
            brief: '阴土，代表卑湿、包容、策划、田园',
            core: ['卑湿', '包容', '策划', '土'],
            dimensions: {
              people: ['策划者', '农夫', '母亲'],
              things: ['泥土', '文具', '内衣'],
              geography: ['田野', '平原', '卧室'],
              body: ['脾', '腹部'],
              personality: ['含蓄', '多疑']
            }
          },
          {
            id: 'gj_dlr',
            name: '庚',
            brief: '阳金，代表刚强、变革、阻力、武职',
            core: ['刚强', '变革', '阻力', '金'],
            dimensions: {
              people: ['军警', '武职', '丈夫'],
              things: ['大型金属', '刀剑', '车辆'],
              geography: ['工厂', '马路', '神坛'],
              body: ['大肠', '骨骼'],
              personality: ['果断', '刚毅']
            }
          },
          {
            id: 'xj_dlr',
            name: '辛',
            brief: '阴金，代表精美、变革、口舌、珠宝',
            core: ['精美', '变革', '口舌', '金'],
            dimensions: {
              people: ['少女', '律师', '艺人'],
              things: ['首饰', '金银', '针'],
              geography: ['首饰店', '酒店', '闹市'],
              body: ['肺', '口'],
              personality: ['精明', '爱美']
            }
          },
          {
            id: 'rs_dlr',
            name: '壬',
            brief: '阳水，代表流动、智慧、包容、江河',
            core: ['流动', '智慧', '包容', '水'],
            dimensions: {
              people: ['商人', '聪明之人', '父亲'],
              things: ['大水', '黑色物品', '交通工具'],
              geography: ['江河', '大海', '码头'],
              body: ['膀胱', '血液'],
              personality: ['聪明', '奔放']
            }
          },
          {
            id: 'gs_dlr',
            name: '癸',
            brief: '阴水，代表雨露、玄学、灵感、至阴',
            core: ['雨露', '玄学', '灵感', '水'],
            dimensions: {
              people: ['搞玄学的人', '文人', '晚辈'],
              things: ['雨水', '墨水', '黑色物品'],
              geography: ['泉水', '池塘', '寺庙'],
              body: ['肾', '足'],
              personality: ['内向', '聪明']
            }
          }
        ]
      },
      {
        name: '十二地支',
        items: [
          {
            id: 'zi_dlr',
            name: '子',
            brief: '北水，代表流动、玄学、聪明、子孙',
            core: ['流动', '玄学', '聪明', '水'],
            dimensions: {
              people: ['聪明人', '妇女', '术士'],
              things: ['水', '黑色物', '书信'],
              geography: ['北方', '江河', '暗处'],
              body: ['肾', '耳朵'],
              personality: ['机智', '内敛']
            }
          },
          {
            id: 'chou_dlr',
            name: '丑',
            brief: '北土，代表阴湿、库房、金融、诚信',
            core: ['阴湿', '库房', '金融', '土'],
            dimensions: {
              people: ['长辈', '金融从业者', '贵人'],
              things: ['土堆', '金库', '首饰'],
              geography: ['东北方', '银行', '坟墓'],
              body: ['脾', '腹部'],
              personality: ['稳重', '踏实']
            }
          },
          {
            id: 'yin_dlr',
            name: '寅',
            brief: '东木，代表高大、文书、官禄、生机',
            core: ['高大', '文书', '官禄', '木'],
            dimensions: {
              people: ['官员', '文人', '长辈'],
              things: ['木材', '车辆', '书画'],
              geography: ['东方', '山林', '高楼'],
              body: ['胆', '手'],
              personality: ['威严', '仁慈']
            }
          },
          {
            id: 'mao_dlr',
            name: '卯',
            brief: '东木，代表花草、艺术、门户、柔韧',
            core: ['花草', '艺术', '门户', '木'],
            dimensions: {
              people: ['少女', '艺人', '兄弟'],
              things: ['花草', '纸张', '绳索'],
              geography: ['东方', '花店', '出入口'],
              body: ['肝', '四肢'],
              personality: ['柔顺', '敏感']
            }
          },
          {
            id: 'chen_dlr',
            name: '辰',
            brief: '东南土，代表水库、变动、华丽、诚信',
            core: ['水库', '变动', '华丽', '土'],
            dimensions: {
              people: ['长辈', '有权势的人', '术士'],
              things: ['土石', '水池', '华丽物'],
              geography: ['东南方', '水库', '寺庙'],
              body: ['胃', '皮肤'],
              personality: ['威严', '多变']
            }
          },
          {
            id: 'si_dlr',
            name: '巳',
            brief: '南火，代表文明、思想、变化、灵动',
            core: ['文明', '思想', '变化', '火'],
            dimensions: {
              people: ['文人', '艺人', '妇女'],
              things: ['火', '电器', '文字'],
              geography: ['东南方', '闹市', '厨房'],
              body: ['心', '面部'],
              personality: ['灵动', '多疑']
            }
          },
          {
            id: 'wu_dlr',
            name: '午',
            brief: '南火，代表光明、热情、礼仪、奔放',
            core: ['光明', '热情', '礼仪', '火'],
            dimensions: {
              people: ['名流', '军警', '热情人'],
              things: ['火', '旗帜', '书画'],
              geography: ['正南方', '闹市', '高地'],
              body: ['心', '眼'],
              personality: ['奔放', '急躁']
            }
          },
          {
            id: 'wei_dlr',
            name: '未',
            brief: '南土，代表木库、温厚、艺术、诚信',
            core: ['木库', '温厚', '艺术', '土'],
            dimensions: {
              people: ['长辈', '农夫', '艺人'],
              things: ['土石', '药材', '衣服'],
              geography: ['西南方', '田野', '药店'],
              body: ['脾', '胃'],
              personality: ['温厚', '含蓄']
            }
          },
          {
            id: 'shen_dlr',
            name: '申',
            brief: '西金，代表流动、刚硬、阻力、传送',
            core: ['流动', '刚硬', '阻力', '金'],
            dimensions: {
              people: ['军警', '运输员', '行人'],
              things: ['大型金属', '车辆', '刀具'],
              geography: ['西南方', '车站', '工厂'],
              body: ['大肠', '骨骼'],
              personality: ['果断', '刚强']
            }
          },
          {
            id: 'you_dlr',
            name: '酉',
            brief: '西金，代表精美、变革、口舌、酒水',
            core: ['精美', '变革', '口舌', '金'],
            dimensions: {
              people: ['少女', '艺人', '律师'],
              things: ['首饰', '金银', '酒'],
              geography: ['正西方', '酒店', '闹市'],
              body: ['肺', '口'],
              personality: ['精明', '爱美']
            }
          },
          {
            id: 'xu_dlr',
            name: '戌',
            brief: '西土，代表火库、守卫、技术、诚信',
            core: ['火库', '守卫', '技术', '土'],
            dimensions: {
              people: ['军警', '技术员', '长辈'],
              things: ['土石', '锁', '兵器'],
              geography: ['西北方', '军营', '高岗'],
              body: ['胃', '皮肤'],
              personality: ['忠诚', '威严']
            }
          },
          {
            id: 'hai_dlr',
            name: '亥',
            brief: '北水，代表流动、包容、玄学、极致',
            core: ['流动', '包容', '玄学', '水'],
            dimensions: {
              people: ['术士', '聪明人', '长辈'],
              things: ['大水', '黑色物', '圆润物'],
              geography: ['西北方', '江河', '寺庙'],
              body: ['肾', '膀胱'],
              personality: ['聪明', '宽容']
            }
          }
        ]
      },
      {
        name: '十二月将',
        items: [
          {
            id: 'dm',
            name: '登明 (亥)',
            brief: '正月将，代表流动、玄学、极致、包容',
            core: ['流动', '玄学', '极致', '水'],
            dimensions: {
              people: ['术士', '长辈', '聪明人'],
              things: ['大水', '酒', '圆润之物'],
              geography: ['西北方', '江河', '寺庙'],
              body: ['肾', '膀胱'],
              personality: ['聪明', '宽容']
            }
          },
          {
            id: 'hk',
            name: '河魁 (戌)',
            brief: '二月将，代表守卫、技术、火库、诚信',
            core: ['守卫', '技术', '火库', '土'],
            dimensions: {
              people: ['军警', '技术员', '长辈'],
              things: ['土石', '锁', '兵器'],
              geography: ['西北方', '军营', '高岗'],
              body: ['胃', '皮肤'],
              personality: ['忠诚', '威严']
            }
          },
          {
            id: 'ck',
            name: '从魁 (酉)',
            brief: '三月将，代表精美、变革、口舌、酒水',
            core: ['精美', '变革', '口舌', '金'],
            dimensions: {
              people: ['少女', '艺人', '律师'],
              things: ['首饰', '金银', '酒'],
              geography: ['正西方', '酒店', '闹市'],
              body: ['肺', '口'],
              personality: ['精明', '爱美']
            }
          },
          {
            id: 'cs',
            name: '传送 (申)',
            brief: '四月将，代表流动、刚硬、阻力、传送',
            core: ['流动', '刚硬', '阻力', '金'],
            dimensions: {
              people: ['军警', '运输员', '行人'],
              things: ['大型金属', '车辆', '刀具'],
              geography: ['西南方', '车站', '工厂'],
              body: ['大肠', '骨骼'],
              personality: ['果断', '刚强']
            }
          },
          {
            id: 'xj_yj',
            name: '小吉 (未)',
            brief: '五月将，代表木库、温厚、艺术、诚信',
            core: ['木库', '温厚', '艺术', '土'],
            dimensions: {
              people: ['长辈', '农夫', '艺人'],
              things: ['土石', '药材', '衣服'],
              geography: ['西南方', '田野', '药店'],
              body: ['脾', '胃'],
              personality: ['温厚', '含蓄']
            }
          },
          {
            id: 'sg_yj',
            name: '胜光 (午)',
            brief: '六月将，代表光明、热情、礼仪、奔放',
            core: ['光明', '热情', '礼仪', '火'],
            dimensions: {
              people: ['名流', '军警', '热情人'],
              things: ['火', '旗帜', '书画'],
              geography: ['正南方', '闹市', '高地'],
              body: ['心', '眼'],
              personality: ['奔放', '急躁']
            }
          },
          {
            id: 'ty_yj',
            name: '太乙 (巳)',
            brief: '七月将，代表文明、思想、变化、灵动',
            core: ['文明', '思想', '变化', '火'],
            dimensions: {
              people: ['文人', '艺人', '妇女'],
              things: ['火', '电器', '文字'],
              geography: ['东南方', '闹市', '厨房'],
              body: ['心', '面部'],
              personality: ['灵动', '多疑']
            }
          },
          {
            id: 'tg',
            name: '天罡 (辰)',
            brief: '八月将，代表水库、变动、华丽、诚信',
            core: ['水库', '变动', '华丽', '土'],
            dimensions: {
              people: ['长辈', '有权势的人', '术士'],
              things: ['土石', '水池', '华丽物'],
              geography: ['东南方', '水库', '寺庙'],
              body: ['胃', '皮肤'],
              personality: ['威严', '多变']
            }
          },
          {
            id: 'tc',
            name: '太冲 (卯)',
            brief: '九月将，代表花草、艺术、门户、柔韧',
            core: ['花草', '艺术', '门户', '木'],
            dimensions: {
              people: ['少女', '艺人', '兄弟'],
              things: ['花草', '纸张', '绳索'],
              geography: ['东方', '花店', '出入口'],
              body: ['肝', '四肢'],
              personality: ['柔顺', '敏感']
            }
          },
          {
            id: 'gc',
            name: '功曹 (寅)',
            brief: '十月将，代表高大、文书、官禄、生机',
            core: ['高大', '文书', '官禄', '木'],
            dimensions: {
              people: ['官员', '文人', '长辈'],
              things: ['木材', '车辆', '书画'],
              geography: ['东方', '山林', '高楼'],
              body: ['胆', '手'],
              personality: ['威严', '仁慈']
            }
          },
          {
            id: 'dj',
            name: '大吉 (丑)',
            brief: '十一月将，代表阴湿、库房、金融、诚信',
            core: ['阴湿', '库房', '金融', '土'],
            dimensions: {
              people: ['长辈', '金融从业者', '贵人'],
              things: ['土堆', '金库', '首饰'],
              geography: ['东北方', '银行', '坟墓'],
              body: ['脾', '腹部'],
              personality: ['稳重', '踏实']
            }
          },
          {
            id: 'sh',
            name: '神后 (子)',
            brief: '十二月将，代表流动、玄学、聪明、子孙',
            core: ['流动', '玄学', '聪明', '水'],
            dimensions: {
              people: ['聪明人', '妇女', '术士'],
              things: ['水', '黑色物', '书信'],
              geography: ['北方', '江河', '暗处'],
              body: ['肾', '耳朵'],
              personality: ['机智', '内敛']
            }
          }
        ]
      },
      {
        name: '十二贵神',
        items: [
          {
            id: 'gl',
            name: '贵人',
            brief: '大吉之神，代表尊贵、助力、官禄',
            core: ['尊贵', '助力', '官禄', '土'],
            dimensions: {
              people: ['贵人', '长官', '大人物'],
              things: ['金玉', '印信', '公文'],
              geography: ['朝廷', '高堂', '名胜'],
              body: ['面部', '脾胃'],
              personality: ['端庄', '仁慈', '守信']
            }
          },
          {
            id: 'ts',
            name: '腾蛇',
            brief: '凶神，代表惊恐、怪异、虚诈、忧疑',
            core: ['惊恐', '怪异', '虚诈', '火'],
            dimensions: {
              people: ['卑贱之人', '虚伪之人', '受惊者'],
              things: ['蛇', '绳索', '虚假信息'],
              geography: ['火地', '弯曲小路'],
              body: ['心', '血液', '经络'],
              personality: ['狡诈', '多疑', '惊恐']
            }
          },
          {
            id: 'zj',
            name: '朱雀',
            brief: '凶神，代表口舌、文书、官司、火烛',
            core: ['口舌', '文书', '官司', '火'],
            dimensions: {
              people: ['善辩之人', '文人', '信使'],
              things: ['书信', '公文', '火', '鸟'],
              geography: ['南方', '影剧院', '学校'],
              body: ['心', '眼', '舌'],
              personality: ['急躁', '好辩']
            }
          },
          {
            id: 'lh',
            name: '六合',
            brief: '吉神，代表和合、婚姻、交易、阴私',
            core: ['和合', '婚姻', '交易', '木'],
            dimensions: {
              people: ['媒人', '商人', '夫妻'],
              things: ['合同', '礼物', '丝绸'],
              geography: ['东方', '交易场所', '卧室'],
              body: ['肝', '四肢'],
              personality: ['和蔼', '圆滑']
            }
          },
          {
            id: 'gc_gs',
            name: '勾陈',
            brief: '凶神，代表迟滞、争斗、勾连、土木',
            core: ['迟滞', '争斗', '勾连', '土'],
            dimensions: {
              people: ['军警', '争斗者', '固执之人'],
              things: ['土石', '枷锁', '陈旧物'],
              geography: ['东南方', '牢狱', '旧屋'],
              body: ['脾', '胃', '皮肤'],
              personality: ['固执', '威严']
            }
          },
          {
            id: 'ql',
            name: '青龙',
            brief: '吉神，代表财帛、喜庆、官爵、仁慈',
            core: ['财帛', '喜庆', '官爵', '木'],
            dimensions: {
              people: ['富贵之人', '官员', '新郎'],
              things: ['钱财', '丝绸', '喜事'],
              geography: ['东方', '林木', '繁华之地'],
              body: ['肝', '胆'],
              personality: ['仁慈', '高傲']
            }
          },
          {
            id: 'tk',
            name: '天空',
            brief: '凶神，代表虚无、欺诈、空亡、奏书',
            core: ['虚无', '欺诈', '空亡', '土'],
            dimensions: {
              people: ['虚伪之人', '僧道', '仆役'],
              things: ['空盒', '虚假文书', '废弃物'],
              geography: ['西北方', '荒野', '空屋'],
              body: ['脾', '胃'],
              personality: ['虚伪', '孤独']
            }
          },
          {
            id: 'bh_gs',
            name: '白虎',
            brief: '凶神，代表道路、血光、威严、疾病',
            core: ['道路', '血光', '威严', '金'],
            dimensions: {
              people: ['军警', '凶恶之人', '病人'],
              things: ['武器', '车辆', '丧服'],
              geography: ['西方', '马路', '险地'],
              body: ['肺', '骨骼', '血液'],
              personality: ['刚毅', '凶猛']
            }
          },
          {
            id: 'tc_gs',
            name: '太常',
            brief: '吉神，代表宴会、衣服、赏赐、平稳',
            core: ['宴会', '衣服', '赏赐', '土'],
            dimensions: {
              people: ['长辈', '农夫', '艺人'],
              things: ['衣服', '酒食', '赏赐物'],
              geography: ['西南方', '田野', '宴会厅'],
              body: ['脾', '胃'],
              personality: ['温厚', '平稳']
            }
          },
          {
            id: 'xw',
            name: '玄武',
            brief: '凶神，代表盗贼、阴私、流动、遗失',
            core: ['盗贼', '阴私', '流动', '水'],
            dimensions: {
              people: ['盗贼', '小人', '聪明人'],
              things: ['水', '遗失物', '黑色物'],
              geography: ['北方', '江河', '暗处'],
              body: ['肾', '膀胱'],
              personality: ['阴险', '聪明']
            }
          },
          {
            id: 'ty_gs',
            name: '太阴',
            brief: '吉神，代表阴私、文书、精美、暗助',
            core: ['阴私', '文书', '精美', '金'],
            dimensions: {
              people: ['少女', '艺人', '暗中助力者'],
              things: ['首饰', '金银', '文书'],
              geography: ['西方', '酒店', '暗室'],
              body: ['肺', '口'],
              personality: ['精明', '含蓄']
            }
          },
          {
            id: 'th',
            name: '天后',
            brief: '吉神，代表恩泽、妇女、阴私、柔顺',
            core: ['恩泽', '妇女', '阴私', '水'],
            dimensions: {
              people: ['贵妇', '妻子', '温柔之人'],
              things: ['水', '丝绸', '化妆品'],
              geography: ['北方', '江河', '卧室'],
              body: ['肾', '膀胱'],
              personality: ['柔顺', '聪明']
            }
          }
            ]
          }
        ]
      },
      {
        id: 'dlr_lessons',
        name: '三传四课',
        icon: 'Grid',
        type: 'content',
        content: '大六壬的核心判断逻辑。四课代表事物的现状与环境，三传代表事物的发展过程：初传为发端，中传为移易，末传为归计。'
      }
    ]
  },
  {
    id: 'bzml',
    name: '八字命理',
    description: '天干地支，五行流转',
    icon: 'BaZi',
    sections: [
      {
        id: 'bzml_symbols',
        name: '象意',
        icon: 'BookOpen',
        type: 'symbols',
        subCategories: [
          {
            name: '十天干',
            items: [
          {
            id: 'jm',
            name: '甲木',
            brief: '阳木，代表大树、首领、向上、仁慈',
            core: ['大树', '首领', '仁慈', '头部'],
            dimensions: {
              people: ['领导者', '长辈', '医生', '高大之人'],
              things: ['木材', '柱子', '高大之物', '公文'],
              geography: ['森林', '闹市', '高地', '政府机构'],
              body: ['头', '胆', '肝', '毛发'],
              personality: ['刚直', '仁慈', '自负', '有进取心']
            }
          },
          {
            id: 'ym',
            name: '乙木',
            brief: '阴木，代表花草、藤蔓、柔韧、艺术',
            core: ['花草', '柔韧', '艺术', '颈部'],
            dimensions: {
              people: ['文人', '艺人', '温柔之人', '妻子'],
              things: ['花草', '纸张', '丝绸', '手工艺品'],
              geography: ['公园', '草地', '花店', '出入口'],
              body: ['颈', '喉咙', '肝', '四肢'],
              personality: ['柔顺', '敏感', '多虑', '有毅力']
            }
          },
          {
            id: 'bh',
            name: '丙火',
            brief: '阳火，代表太阳、光明、热情、礼仪',
            core: ['太阳', '光明', '热情', '眼目'],
            dimensions: {
              people: ['演说家', '名流', '热情之人', '兄长'],
              things: ['火', '电器', '书画', '勋章'],
              geography: ['南方', '影剧院', '闹市', '发电厂'],
              body: ['眼', '小肠', '肩', '血液'],
              personality: ['热情', '急躁', '虚荣', '光明磊落']
            }
          },
          {
            id: 'dh',
            name: '丁火',
            brief: '阴火，代表灯烛、文明、思想、灵动',
            core: ['灯烛', '思想', '灵动', '心脏'],
            dimensions: {
              people: ['思想家', '教师', '灵气之人', '晚辈'],
              things: ['灯光', '香火', '电子产品', '文字'],
              geography: ['图书馆', '名胜', '厨房', '繁华街道'],
              body: ['心', '舌', '眼', '牙齿'],
              personality: ['温和', '内敛', '多疑', '富有同情心']
            }
          },
          {
            id: 'wt',
            name: '戊土',
            brief: '阳土，代表大地、城墙、厚重、诚信',
            core: ['大地', '厚重', '诚信', '胃'],
            dimensions: {
              people: ['诚实之人', '建筑师', '长辈', '胖子'],
              things: ['土石', '古董', '皮具', '农产品'],
              geography: ['山岗', '堤坝', '仓库', '寺庙'],
              body: ['胃', '皮肤', '肌肉', '鼻子'],
              personality: ['稳重', '固执', '守信', '宽厚']
            }
          },
          {
            id: 'jt',
            name: '己土',
            brief: '阴土，代表田园、卑湿、包容、多才',
            core: ['田园', '包容', '多才', '脾'],
            dimensions: {
              people: ['策划者', '农夫', '多才多艺之人', '母亲'],
              things: ['泥土', '水泥', '文具', '内衣'],
              geography: ['田野', '平原', '低洼地', '卧室'],
              body: ['脾', '腹部', '皮肤', '面部'],
              personality: ['含蓄', '多疑', '包容', '细心']
            }
          },
          {
            id: 'gj',
            name: '庚金',
            brief: '阳金，代表斧钺、刚强、变革、肃杀',
            core: ['斧钺', '刚强', '变革', '大肠'],
            dimensions: {
              people: ['军警', '武职', '刚毅之人', '丈夫'],
              things: ['大型金属', '刀剑', '车辆', '矿石'],
              geography: ['工厂', '五金店', '马路', '神坛'],
              body: ['大肠', '骨骼', '肺', '牙齿'],
              personality: ['果断', '刚毅', '好胜', '讲义气']
            }
          },
          {
            id: 'xj',
            name: '辛金',
            brief: '阴金，代表珠宝、精美、变革、灵敏',
            core: ['珠宝', '精美', '变革', '肺'],
            dimensions: {
              people: ['少女', '律师', '精明之人', '艺人'],
              things: ['首饰', '金银', '针', '钟表'],
              geography: ['首饰店', '酒店', '银行', '闹市'],
              body: ['肺', '口', '鼻', '牙齿'],
              personality: ['精明', '爱美', '自尊心强', '温润']
            }
          },
          {
            id: 'rs',
            name: '壬水',
            brief: '阳水，代表江河、流动、智慧、包容',
            core: ['江河', '流动', '智慧', '膀胱'],
            dimensions: {
              people: ['水手', '商人', '聪明之人', '父亲'],
              things: ['大水', '黑色物品', '圆润之物', '交通工具'],
              geography: ['江河', '大海', '码头', '车站'],
              body: ['膀胱', '血液', '循环系统', '耳朵'],
              personality: ['聪明', '奔放', '多变', '有远见']
            }
          },
          {
            id: 'gs',
            name: '癸水',
            brief: '阴水，代表雨露、至阴、玄学、灵感',
            core: ['雨露', '至阴', '玄学', '肾'],
            dimensions: {
              people: ['搞玄学的人', '文人', '温柔之人', '晚辈'],
              things: ['雨水', '墨水', '黑色物品', '圆润之物'],
              geography: ['泉水', '池塘', '低洼地', '寺庙'],
              body: ['肾', '心包', '足', '耳朵'],
              personality: ['内向', '聪明', '多愁善感', '灵感强']
            }
          }
        ]
      },
      {
        name: '十二地支',
        items: [
          {
            id: 'zi_bz',
            name: '子',
            brief: '北水，代表流动、玄学、聪明、子孙',
            core: ['流动', '玄学', '聪明', '肾'],
            dimensions: {
              people: ['聪明人', '妇女', '术士', '盗贼'],
              things: ['水', '黑色物', '圆润物', '书信'],
              geography: ['北方', '江河', '泉水', '暗处'],
              body: ['肾', '膀胱', '耳朵', '血液'],
              personality: ['机智', '多变', '内敛']
            }
          },
          {
            id: 'chou_bz',
            name: '丑',
            brief: '北土，代表阴湿、库房、金融、诚信',
            core: ['阴湿', '库房', '金融', '脾'],
            dimensions: {
              people: ['长辈', '金融从业者', '诚实人', '贵人'],
              things: ['土堆', '金库', '首饰', '牛'],
              geography: ['东北方', '银行', '坟墓', '湿地'],
              body: ['脾', '胃', '腹部', '皮肤'],
              personality: ['稳重', '固执', '踏实']
            }
          },
          {
            id: 'yin_bz',
            name: '寅',
            brief: '东木，代表高大、文书、官禄、生机',
            core: ['高大', '文书', '官禄', '胆'],
            dimensions: {
              people: ['官员', '文人', '长辈', '贵人'],
              things: ['木材', '车辆', '书画', '虎'],
              geography: ['东方', '山林', '政府机构', '高楼'],
              body: ['胆', '手', '指甲', '毛发'],
              personality: ['威严', '仁慈', '好动']
            }
          },
          {
            id: 'mao_bz',
            name: '卯',
            brief: '东木，代表花草、艺术、门户、柔韧',
            core: ['花草', '艺术', '门户', '肝'],
            dimensions: {
              people: ['少女', '艺人', '兄弟', '手艺人'],
              things: ['花草', '纸张', '绳索', '兔'],
              geography: ['东方', '花店', '公园', '出入口'],
              body: ['肝', '四肢', '十指', '毛发'],
              personality: ['柔顺', '敏感', '多虑']
            }
          },
          {
            id: 'chen_bz',
            name: '东土',
            brief: '东南土，代表水库、变动、华丽、诚信',
            core: ['水库', '变动', '华丽', '胃'],
            dimensions: {
              people: ['长辈', '有权势的人', '术士', '龙'],
              things: ['土石', '水池', '华丽物', '渔网'],
              geography: ['东南方', '水库', '寺庙', '高岗'],
              body: ['胃', '皮肤', '肩', '胸'],
              personality: ['威严', '固执', '多变']
            }
          },
          {
            id: 'si_bz',
            name: '巳',
            brief: '南火，代表文明、思想、变化、灵动',
            core: ['文明', '思想', '变化', '心'],
            dimensions: {
              people: ['文人', '艺人', '妇女', '蛇'],
              things: ['火', '电器', '文字', '画'],
              geography: ['东南方', '闹市', '厨房', '影院'],
              body: ['心', '面部', '眼', '牙齿'],
              personality: ['灵动', '多疑', '热情']
            }
          },
          {
            id: 'wu_bz',
            name: '午',
            brief: '南火，代表光明、热情、礼仪、奔放',
            core: ['光明', '热情', '礼仪', '心'],
            dimensions: {
              people: ['名流', '军警', '热情人', '马'],
              things: ['火', '旗帜', '书画', '信息'],
              geography: ['正南方', '闹市', '体育场', '高地'],
              body: ['心', '眼', '血液', '小肠'],
              personality: ['奔放', '急躁', '光明']
            }
          },
          {
            id: 'wei_bz',
            name: '未',
            brief: '南土，代表木库、温厚、艺术、诚信',
            core: ['木库', '温厚', '艺术', '脾'],
            dimensions: {
              people: ['长辈', '农夫', '艺人', '羊'],
              things: ['土石', '药材', '衣服', '酒'],
              geography: ['西南方', '田野', '药店', '林地'],
              body: ['脾', '胃', '腹部', '皮肤'],
              personality: ['温厚', '含蓄', '固执']
            }
          },
          {
            id: 'shen_bz',
            name: '申',
            brief: '西金，代表流动、刚硬、阻力、传送',
            core: ['流动', '刚硬', '阻力', '大肠'],
            dimensions: {
              people: ['军警', '运输员', '行人', '猴'],
              things: ['大型金属', '车辆', '刀具', '矿石'],
              geography: ['车站', '码头', '工厂'],
              body: ['大肠', '骨骼', '肺', '经络'],
              personality: ['果断', '刚强', '好动']
            }
          },
          {
            id: 'you_bz',
            name: '酉',
            brief: '西金，代表精美、变革、口舌、酒水',
            core: ['精美', '变革', '口舌', '肺'],
            dimensions: {
              people: ['少女', '艺人', '律师', '鸡'],
              things: ['首饰', '金银', '酒', '钟表'],
              geography: ['正西方', '酒店', '首饰店', '闹市'],
              body: ['肺', '口', '舌', '牙齿'],
              personality: ['精明', '爱美', '好辩']
            }
          },
          {
            id: 'xu_bz',
            name: '戌',
            brief: '西土，代表火库、守卫、技术、诚信',
            core: ['火库', '守卫', '技术', '胃'],
            dimensions: {
              people: ['军警', '技术员', '长辈', '狗'],
              things: ['土石', '锁', '兵器', '古董'],
              geography: ['西北方', '军营', '化工厂', '高岗'],
              body: ['胃', '皮肤', '命门', '背'],
              personality: ['忠诚', '固执', '威严']
            }
          },
          {
            id: 'hai_bz',
            name: '亥',
            brief: '北水，代表流动、包容、玄学、极致',
            core: ['流动', '包容', '玄学', '肾'],
            dimensions: {
              people: ['术士', '聪明人', '长辈', '猪'],
              things: ['大水', '黑色物', '圆润物', '酒'],
              geography: ['西北方', '江河', '大海', '寺庙'],
              body: ['肾', '膀胱', '耳朵', '血液'],
              personality: ['聪明', '宽容', '随和']
            }
          }
        ]
      },
      {
        name: '十神',
        items: [
          {
            id: 'bj',
            name: '比肩',
            brief: '同我者，代表兄弟、朋友、竞争、自尊',
            core: ['兄弟', '朋友', '竞争', '自尊'],
            dimensions: {
              people: ['兄弟', '朋友', '同事', '竞争对手'],
              things: ['健身器材', '运动服', '竞争'],
              geography: ['运动场', '竞争场所', '社交场合'],
              body: ['手', '脚', '肌肉'],
              personality: ['刚毅', '自尊', '固执', '好胜']
            }
          },
          {
            id: 'jc',
            name: '劫财',
            brief: '异我者，代表竞争、破财、豪爽、奋斗',
            core: ['竞争', '破财', '豪爽', '奋斗'],
            dimensions: {
              people: ['竞争者', '异性兄弟', '朋友', '小人'],
              things: ['钱财', '消耗品', '竞争'],
              geography: ['赌场', '消费场所', '竞争地'],
              body: ['四肢', '骨骼'],
              personality: ['豪爽', '急躁', '双重性格', '奋斗']
            }
          },
          {
            id: 'ss',
            name: '食神',
            brief: '我生者，代表福气、才华、口福、温和',
            core: ['福气', '才华', '口福', '温和'],
            dimensions: {
              people: ['晚辈', '学生', '厨师', '温和之人'],
              things: ['食物', '艺术品', '娱乐', '福气'],
              geography: ['餐厅', '娱乐场', '公园'],
              body: ['口', '胃', '消化系统'],
              personality: ['温和', '宽厚', '多才多艺', '知足']
            }
          },
          {
            id: 'sg',
            name: '伤官',
            brief: '我生者，代表才华、傲气、变革、反叛',
            core: ['才华', '傲气', '变革', '反叛'],
            dimensions: {
              people: ['晚辈', '艺术家', '反叛者', '聪明人'],
              things: ['艺术', '技术', '言语', '变革'],
              geography: ['艺术馆', '技术中心', '闹市'],
              body: ['口', '生殖系统', '排泄系统'],
              personality: ['聪明', '傲气', '反叛', '多才多艺']
            }
          },
          {
            id: 'pc',
            name: '偏财',
            brief: '我克者，代表横财、父亲、慷慨、流动',
            core: ['横财', '父亲', '慷慨', '流动'],
            dimensions: {
              people: ['父亲', '情人', '商人', '慷慨之人'],
              things: ['横财', '股票', '奖金', '流动资产'],
              geography: ['交易所', '商场', '远方'],
              body: ['肝', '胆', '呼吸系统'],
              personality: ['慷慨', '圆滑', '多情', '好动']
            }
          },
          {
            id: 'zc',
            name: '正财',
            brief: '我克者，代表薪俸、妻子、勤劳、保守',
            core: ['薪俸', '妻子', '勤劳', '保守'],
            dimensions: {
              people: ['妻子', '勤劳者', '工薪族'],
              things: ['工资', '房产', '实物', '固定资产'],
              geography: ['银行', '家中', '办公室'],
              body: ['脾', '胃', '消化系统'],
              personality: ['勤劳', '保守', '现实', '守信']
            }
          },
          {
            id: 'qs',
            name: '七杀',
            brief: '克我者，代表权力、压力、变革、威严',
            core: ['权力', '压力', '变革', '威严'],
            dimensions: {
              people: ['上司', '敌人', '军警', '严厉之人'],
              things: ['权力', '压力', '武器', '变革'],
              geography: ['军营', '法院', '险地'],
              body: ['骨骼', '肝', '血液'],
              personality: ['威严', '急躁', '果断', '有魄力']
            }
          },
          {
            id: 'zg',
            name: '正官',
            brief: '克我者，代表名誉、地位、自律、传统',
            core: ['名誉', '地位', '自律', '传统'],
            dimensions: {
              people: ['长官', '丈夫', '正派之人'],
              things: ['名誉', '地位', '法律', '传统'],
              geography: ['政府机构', '办公室', '庄重场所'],
              body: ['心脏', '血液', '循环系统'],
              personality: ['自律', '正直', '保守', '守法']
            }
          },
          {
            id: 'py',
            name: '偏印',
            brief: '生我者，代表玄学、灵感、孤独、偏门',
            core: ['玄学', '灵感', '孤独', '偏门'],
            dimensions: {
              people: ['母亲', '术士', '偏门人才', '孤独者'],
              things: ['玄学书籍', '灵感', '偏门技术'],
              geography: ['寺庙', '偏僻地', '研究室'],
              body: ['皮肤', '消化系统', '神经系统'],
              personality: ['精明', '孤独', '灵感强', '多疑']
            }
          },
          {
            id: 'zy',
            name: '正印',
            brief: '生我者，代表学问、名誉、慈悲、长辈',
            core: ['学问', '名誉', '慈悲', '长辈'],
            dimensions: {
              people: ['母亲', '长辈', '老师', '慈悲之人'],
              things: ['书籍', '证书', '名誉', '房产'],
              geography: ['学校', '图书馆', '家中'],
              body: ['心脏', '大脑', '皮肤'],
              personality: ['慈悲', '稳重', '好学', '保守']
            }
          }
            ]
          }
        ]
      },
      {
        id: 'bzml_officials',
        name: '十二建除',
        icon: 'Shield',
        type: 'list',
        listItems: [
          { id: 'o1', title: '建', content: '万物之始，吉。', tags: ['吉'] },
          { id: 'o2', title: '除', content: '扫除障碍，吉。', tags: ['吉'] },
          { id: 'o3', title: '满', content: '丰收圆满，吉。', tags: ['吉'] },
          { id: 'o4', title: '平', content: '平稳安定，中。', tags: ['中'] },
          { id: 'o5', title: '定', content: '定局不动，吉。', tags: ['吉'] },
          { id: 'o6', title: '执', content: '执行权力，中。', tags: ['中'] },
          { id: 'o7', title: '破', content: '冲破阻碍，凶。', tags: ['凶'] },
          { id: 'o8', title: '危', content: '危险警示，凶。', tags: ['凶'] },
          { id: 'o9', title: '成', content: '成就圆满，吉。', tags: ['吉'] },
          { id: 'o10', title: '收', content: '收获归仓，吉。', tags: ['吉'] },
          { id: 'o11', title: '开', content: '开启新局，吉。', tags: ['吉'] },
          { id: 'o12', title: '闭', content: '闭塞不通，凶。', tags: ['凶'] }
        ]
      }
    ]
  },
  {
    id: 'zwds',
    name: '紫微斗数',
    description: '星辰罗列，命宫推演',
    icon: 'ZiWei',
    sections: [
      {
        id: 'zwds_symbols',
        name: '象意',
        icon: 'BookOpen',
        type: 'symbols',
        subCategories: [
          {
            name: '十四主星',
            items: [
              {
                id: 'zw',
                name: '紫微星',
                brief: '帝座之星，代表权力、尊贵、领导',
                core: ['权力', '尊贵', '领导', '土'],
                dimensions: {
                  people: ['帝王', '领袖', '老板'],
                  things: ['珠宝', '高档品', '印章'],
                  geography: ['皇宫', '中心地带', '高楼'],
                  body: ['头部', '心脏'],
                  personality: ['厚重', '自尊心强', '耳根软']
                }
              },
              {
                id: 'tj',
                name: '天机星',
                brief: '智多星，代表智慧、变动、谋略',
                core: ['智慧', '变动', '谋略', '木'],
                dimensions: {
                  people: ['谋士', '技术人员', '兄弟'],
                  things: ['机械', '车辆', '书籍'],
                  geography: ['马路', '林地'],
                  body: ['肝', '胆', '四肢'],
                  personality: ['机敏', '多虑', '善良']
                }
              },
              {
                id: 'tyang',
                name: '太阳星',
                brief: '光明之星，代表博爱、名誉、父亲',
                core: ['光明', '博爱', '名誉', '火'],
                dimensions: {
                  people: ['父亲', '丈夫', '公众人物'],
                  things: ['灯具', '眼镜', '发热物'],
                  geography: ['法院', '政府', '开阔地'],
                  body: ['眼', '心脏', '小肠'],
                  personality: ['热情', '大方', '急躁']
                }
              },
              {
                id: 'wq',
                name: '武曲星',
                brief: '财星，代表刚毅、财富、执行力',
                core: ['刚毅', '财富', '金'],
                dimensions: {
                  people: ['军警', '商人', '金融人员'],
                  things: ['金属', '钱币', '利器'],
                  geography: ['银行', '工厂', '寺庙'],
                  body: ['肺', '大肠', '鼻'],
                  personality: ['果断', '孤独', '正直']
                }
              }
            ]
          }
        ]
      },
      {
        id: 'zwds_palaces',
        name: '十二宫位',
        icon: 'Grid',
        type: 'list',
        listItems: [
          { id: 'mg', title: '命宫', content: '核心宫位，代表性格、相貌、天赋、一生总格。' },
          { id: 'bg', title: '兄弟宫', content: '代表兄弟姐妹、合作伙伴、资金周转。' },
          { id: 'qg', title: '夫妻宫', content: '代表配偶、感情、婚姻状况、审美观。' },
          { id: 'zg', title: '子女宫', content: '代表子女、下属、性生活、合伙生意。' },
          { id: 'cg', title: '财帛宫', content: '代表求财方式、理财能力、现金流。' },
          { id: 'jg', title: '疾厄宫', content: '代表身体健康、隐疾、脾气、潜意识。' }
        ]
      },
      {
        id: 'zwds_formations',
        name: '格局',
        icon: 'Shield',
        type: 'list',
        listItems: [
          { id: 'zfg', title: '紫府同宫格', content: '紫微、天府同在寅申宫，主大富大贵。' },
          { id: 'slg', title: '三奇加会格', content: '化禄、化权、化科在三方四正会照。' }
        ]
      },
      {
        id: 'zwds_transformations',
        name: '四化',
        icon: 'Zap',
        type: 'list',
        listItems: [
          { id: 'hl', title: '化禄', content: '主财禄、缘分、顺利、享受。' },
          { id: 'hq', title: '化权', content: '主权力、成就、争执、刚强。' },
          { id: 'hk', title: '化科', content: '主名誉、科甲、贵人、斯文。' },
          { id: 'hj', title: '化忌', content: '主阻碍、变动、是非、执着。' }
        ]
      }
    ]
  },
  {
    id: 'mhys',
    name: '梅花易数',
    description: '心易神卜，见相识机',
    icon: 'BookOpen',
    sections: [
      {
        id: 'mhys_symbols',
        name: '象意',
        icon: 'BookOpen',
        type: 'symbols',
        subCategories: [
          {
            name: '八卦万物类象',
            items: [
              {
                id: 'qian_mh',
                name: '乾卦',
                brief: '天，代表刚健、领导、父亲、圆形',
                core: ['刚健', '领导', '高大', '圆'],
                dimensions: {
                  people: ['父亲', '领导', '长辈', '名人'],
                  things: ['金玉', '珠宝', '钟表', '圆形物'],
                  geography: ['西北方', '名胜', '高处', '首都'],
                  body: ['头', '肺', '骨骼', '大肠'],
                  personality: ['刚毅', '自尊', '果断']
                }
              }
            ]
          }
        ]
      }
    ]
  }
];

export interface UserData {
  favorites: string[]; // IDs
  notes: Record<string, string>; // ID -> note
  checkIns: string[]; // ISO dates
  checkInNotes: Record<string, string>; // ISO date -> note
  tasks: Record<string, boolean>; // taskName -> completed
  visibleCategories: string[]; // IDs of categories to show on home screen
}

export const INITIAL_USER_DATA: UserData = {
  favorites: [],
  notes: {},
  checkIns: [],
  checkInNotes: {},
  tasks: {
    '温习一个象意': false,
    '完成一次自我占测': false,
    '背诵一句卦辞': false
  },
  visibleCategories: ['qmdj', 'tysn', 'dlr', 'bzml', 'zwds', 'mhys']
};
