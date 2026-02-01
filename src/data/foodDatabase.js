/**
 * 标准化食物数据库
 * 基于《本草纲目》和中医食疗理论建立
 * 包含食物的性味、归经、功效、适应体质等信息
 */

export const foodDatabase = [
    // ===== 谷类食物 =====
    {
        id: 'g001',
        name: '粳米',
        category: '谷类',
        nature: '平',           // 四性：寒、热、温、凉、平
        flavor: '甘',           // 五味：酸、苦、甘、辛、咸
        meridians: ['脾', '胃'], // 归经
        functions: ['补中益气', '健脾和胃', '除烦止渴'],
        contraindications: ['糖尿病患者不宜多食'],
        suitableConstitutions: ['balanced', 'qi_deficiency', 'yin_deficiency', 'phlegm_dampness'],
        avoidConstitutions: ['yang_deficiency'],
        seasonalAdvice: { spring: '适宜', summer: '适宜', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['煮粥', '煮饭', '蒸制'],
        nutritionalInfo: { calories: 130, protein: 2.6, carbs: 28, fiber: 0.3 }
    },
    {
        id: 'g002',
        name: '糯米',
        category: '谷类',
        nature: '温',
        flavor: '甘',
        meridians: ['脾', '胃', '肺'],
        functions: ['补中益气', '健脾止泻', '敛汗'],
        contraindications: ['消化不良者不宜多食', '糖尿病患者慎用'],
        suitableConstitutions: ['yang_deficiency', 'qi_deficiency', 'special'],
        avoidConstitutions: ['yin_deficiency', 'damp_heat', 'phlegm_dampness'],
        seasonalAdvice: { spring: '适量', summer: '不宜', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['煮粥', '煮饭', '制作糕点'],
        nutritionalInfo: { calories: 135, protein: 2.3, carbs: 30, fiber: 0.4 }
    },
    {
        id: 'g003',
        name: '小麦',
        category: '谷类',
        nature: '凉',
        flavor: '甘',
        meridians: ['心', '脾', '肾'],
        functions: ['养心除烦', '益肾止渴', '健脾和胃'],
        contraindications: ['脾胃虚寒者不宜多食'],
        suitableConstitutions: ['yin_deficiency', 'qi_stagnation', 'damp_heat'],
        avoidConstitutions: ['yang_deficiency', 'qi_deficiency'],
        seasonalAdvice: { spring: '适宜', summer: '适宜', autumn: '适量', winter: '不宜' },
        cookingMethods: ['煮粥', '制作面食', '蒸制'],
        nutritionalInfo: { calories: 127, protein: 3.6, carbs: 28, fiber: 1.2 }
    },
    {
        id: 'g004',
        name: '山药',
        category: '谷类',
        nature: '平',
        flavor: '甘',
        meridians: ['脾', '肺', '肾'],
        functions: ['补脾益肺', '固肾益精', '生津养阴'],
        contraindications: ['湿盛中满者不宜'],
        suitableConstitutions: ['qi_deficiency', 'yang_deficiency', 'yin_deficiency', 'balanced'],
        avoidConstitutions: ['phlegm_dampness'],
        seasonalAdvice: { spring: '适宜', summer: '适宜', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['蒸食', '煮粥', '炒食', '炖汤'],
        nutritionalInfo: { calories: 56, protein: 1.9, carbs: 12, fiber: 0.8 }
    },
    {
        id: 'g005',
        name: '薏苡仁',
        category: '谷类',
        nature: '凉',
        flavor: '甘淡',
        meridians: ['脾', '胃', '肺'],
        functions: ['健脾渗湿', '除痹止泻', '清热排脓'],
        contraindications: ['孕妇不宜', '脾胃虚寒者慎用'],
        suitableConstitutions: ['phlegm_dampness', 'damp_heat', 'qi_deficiency'],
        avoidConstitutions: ['yang_deficiency', 'qi_deficiency'],
        seasonalAdvice: { spring: '适量', summer: '适宜', autumn: '适量', winter: '不宜' },
        cookingMethods: ['煮粥', '煮汤', '炖煮'],
        nutritionalInfo: { calories: 357, protein: 12, carbs: 69, fiber: 2.0 }
    },
    {
        id: 'g006',
        name: '赤小豆',
        category: '谷类',
        nature: '平',
        flavor: '甘酸',
        meridians: ['心', '脾', '肾'],
        functions: ['利水消肿', '解毒排脓', '健脾止泻'],
        contraindications: ['阴虚无湿热者不宜多食'],
        suitableConstitutions: ['phlegm_dampness', 'damp_heat', 'qi_deficiency'],
        avoidConstitutions: ['yin_deficiency'],
        seasonalAdvice: { spring: '适量', summer: '适宜', autumn: '适量', winter: '适量' },
        cookingMethods: ['煮粥', '煮汤', '炖煮'],
        nutritionalInfo: { calories: 309, protein: 21, carbs: 63, fiber: 5.5 }
    },
    {
        id: 'g007',
        name: '燕麦',
        category: '谷类',
        nature: '平',
        flavor: '甘',
        meridians: ['脾', '肝'],
        functions: ['益脾养心', '敛汗', '滑肠'],
        contraindications: ['消化不良者不宜多食'],
        suitableConstitutions: ['phlegm_dampness', 'qi_deficiency', 'balanced'],
        avoidConstitutions: ['yin_deficiency'],
        seasonalAdvice: { spring: '适宜', summer: '适量', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['煮粥', '冲泡'],
        nutritionalInfo: { calories: 338, protein: 15, carbs: 66, fiber: 15 }
    },
    {
        id: 'g008',
        name: '小米',
        category: '谷类',
        nature: '凉',
        flavor: '甘咸',
        meridians: ['脾', '胃', '肾'],
        functions: ['健脾和胃', '除热解毒', '益肾'],
        contraindications: ['脾胃虚寒者不宜多食'],
        suitableConstitutions: ['yin_deficiency', 'damp_heat', 'qi_deficiency'],
        avoidConstitutions: ['yang_deficiency'],
        seasonalAdvice: { spring: '适宜', summer: '适宜', autumn: '适量', winter: '不宜' },
        cookingMethods: ['煮粥', '蒸饭'],
        nutritionalInfo: { calories: 361, protein: 9, carbs: 75, fiber: 1.6 }
    },
    {
        id: 'g009',
        name: '荞麦',
        category: '谷类',
        nature: '凉',
        flavor: '甘',
        meridians: ['脾', '胃', '大肠'],
        functions: ['开胃宽肠', '下气消积', '清热解毒'],
        contraindications: ['脾胃虚寒者不宜', '过敏体质者慎用'],
        suitableConstitutions: ['damp_heat', 'phlegm_dampness', 'qi_deficiency'],
        avoidConstitutions: ['yang_deficiency', 'qi_deficiency'],
        seasonalAdvice: { spring: '适量', summer: '适宜', autumn: '适量', winter: '不宜' },
        cookingMethods: ['煮粥', '制作面食'],
        nutritionalInfo: { calories: 324, protein: 11, carbs: 71, fiber: 2.4 }
    },

    // ===== 蔬菜类 =====
    {
        id: 'v001',
        name: '白萝卜',
        category: '蔬菜',
        nature: '凉',
        flavor: '辛甘',
        meridians: ['脾', '胃', '肺'],
        functions: ['消食化痰', '下气宽中', '生津利尿'],
        contraindications: ['脾胃虚寒者不宜', '服用人参时不宜'],
        suitableConstitutions: ['phlegm_dampness', 'damp_heat', 'qi_deficiency'],
        avoidConstitutions: ['yang_deficiency', 'qi_deficiency'],
        seasonalAdvice: { spring: '适宜', summer: '适量', autumn: '适宜', winter: '不宜' },
        cookingMethods: ['生食', '炒食', '煮汤', '腌制'],
        nutritionalInfo: { calories: 16, protein: 0.9, carbs: 4, fiber: 1 }
    },
    {
        id: 'v002',
        name: '胡萝卜',
        category: '蔬菜',
        nature: '平',
        flavor: '甘',
        meridians: ['脾', '肝', '肺'],
        functions: ['健脾化滞', '明目', '润肠通便'],
        contraindications: ['不宜过量食用'],
        suitableConstitutions: ['balanced', 'qi_deficiency', 'yin_deficiency'],
        avoidConstitutions: [],
        seasonalAdvice: { spring: '适宜', summer: '适宜', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['炒食', '煮汤', '生食', '榨汁'],
        nutritionalInfo: { calories: 41, protein: 0.9, carbs: 10, fiber: 1.2 }
    },
    {
        id: 'v003',
        name: '冬瓜',
        category: '蔬菜',
        nature: '凉',
        flavor: '甘淡',
        meridians: ['脾', '胃', '大肠', '小肠'],
        functions: ['利水消肿', '清热解毒', '生津止渴'],
        contraindications: ['脾胃虚寒者不宜多食'],
        suitableConstitutions: ['damp_heat', 'phlegm_dampness', 'yin_deficiency'],
        avoidConstitutions: ['yang_deficiency', 'qi_deficiency'],
        seasonalAdvice: { spring: '适量', summer: '适宜', autumn: '适宜', winter: '不宜' },
        cookingMethods: ['煮汤', '炒食', '凉拌'],
        nutritionalInfo: { calories: 12, protein: 0.4, carbs: 3, fiber: 0.5 }
    },
    {
        id: 'v004',
        name: '苦瓜',
        category: '蔬菜',
        nature: '寒',
        flavor: '苦',
        meridians: ['心', '脾', '肺'],
        functions: ['清热解暑', '明目解毒', '降血糖'],
        contraindications: ['脾胃虚寒者不宜', '孕妇慎用'],
        suitableConstitutions: ['damp_heat', 'yin_deficiency', 'yang_deficiency'],
        avoidConstitutions: ['yang_deficiency', 'qi_deficiency', 'special'],
        seasonalAdvice: { spring: '适量', summer: '适宜', autumn: '适量', winter: '不宜' },
        cookingMethods: ['凉拌', '炒食', '煮汤'],
        nutritionalInfo: { calories: 19, protein: 1, carbs: 4, fiber: 1.4 }
    },
    {
        id: 'v005',
        name: '芹菜',
        category: '蔬菜',
        nature: '凉',
        flavor: '甘苦',
        meridians: ['肝', '胃', '肺'],
        functions: ['平肝清热', '利水消肿', '降血压'],
        contraindications: ['脾胃虚寒者不宜多食'],
        suitableConstitutions: ['damp_heat', 'blood_stasis', 'yang_deficiency'],
        avoidConstitutions: ['qi_deficiency', 'yin_deficiency'],
        seasonalAdvice: { spring: '适宜', summer: '适宜', autumn: '适宜', winter: '适量' },
        cookingMethods: ['凉拌', '炒食', '榨汁'],
        nutritionalInfo: { calories: 14, protein: 0.8, carbs: 3, fiber: 1.2 }
    },
    {
        id: 'v006',
        name: '莲藕',
        category: '蔬菜',
        nature: '寒',
        flavor: '甘',
        meridians: ['心', '脾', '胃'],
        functions: ['清热生津', '凉血止血', '健脾止泻'],
        contraindications: ['脾胃虚寒者不宜生食'],
        suitableConstitutions: ['yin_deficiency', 'damp_heat', 'blood_stasis'],
        avoidConstitutions: ['yang_deficiency', 'qi_deficiency'],
        seasonalAdvice: { spring: '适量', summer: '适宜', autumn: '适宜', winter: '不宜' },
        cookingMethods: ['生食', '炒食', '煮汤', '榨汁'],
        nutritionalInfo: { calories: 43, protein: 1.6, carbs: 10, fiber: 1.2 }
    },
    {
        id: 'v007',
        name: '百合',
        category: '蔬菜',
        nature: '微寒',
        flavor: '甘',
        meridians: ['心', '肺'],
        functions: ['养阴润肺', '清心安神', '美容养颜'],
        contraindications: ['风寒咳嗽者不宜'],
        suitableConstitutions: ['yin_deficiency', 'qi_stagnation', 'damp_heat'],
        avoidConstitutions: ['yang_deficiency', 'qi_deficiency'],
        seasonalAdvice: { spring: '适宜', summer: '适量', autumn: '适宜', winter: '适量' },
        cookingMethods: ['煮粥', '煮汤', '炒食'],
        nutritionalInfo: { calories: 162, protein: 3.2, carbs: 38, fiber: 1.7 }
    },
    {
        id: 'v008',
        name: '银耳',
        category: '蔬菜',
        nature: '平',
        flavor: '甘',
        meridians: ['肺', '胃', '肾'],
        functions: ['滋阴润肺', '益胃生津', '美容养颜'],
        contraindications: ['外感风寒者不宜'],
        suitableConstitutions: ['yin_deficiency', 'yang_deficiency', 'balanced'],
        avoidConstitutions: ['phlegm_dampness'],
        seasonalAdvice: { spring: '适宜', summer: '适宜', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['煮羹', '煮汤', '凉拌'],
        nutritionalInfo: { calories: 200, protein: 10, carbs: 67, fiber: 30 }
    },
    {
        id: 'v009',
        name: '木耳',
        category: '蔬菜',
        nature: '平',
        flavor: '甘',
        meridians: ['胃', '大肠'],
        functions: ['益气补血', '润肺止咳', '活血止血'],
        contraindications: ['腹泻者不宜多食'],
        suitableConstitutions: ['blood_stasis', 'qi_deficiency', 'yin_deficiency'],
        avoidConstitutions: ['phlegm_dampness'],
        seasonalAdvice: { spring: '适宜', summer: '适宜', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['凉拌', '炒食', '煮汤'],
        nutritionalInfo: { calories: 205, protein: 12, carbs: 66, fiber: 29 }
    },
    {
        id: 'v010',
        name: '黄瓜',
        category: '蔬菜',
        nature: '凉',
        flavor: '甘',
        meridians: ['脾', '胃', '大肠'],
        functions: ['清热利水', '生津止渴', '美容养颜'],
        contraindications: ['脾胃虚寒者不宜'],
        suitableConstitutions: ['damp_heat', 'yin_deficiency', 'phlegm_dampness'],
        avoidConstitutions: ['yang_deficiency', 'qi_deficiency'],
        seasonalAdvice: { spring: '适量', summer: '适宜', autumn: '适量', winter: '不宜' },
        cookingMethods: ['生食', '凉拌', '炒食'],
        nutritionalInfo: { calories: 16, protein: 0.7, carbs: 4, fiber: 0.5 }
    },

    // ===== 水果类 =====
    {
        id: 'f001',
        name: '梨',
        category: '水果',
        nature: '微寒',
        flavor: '甘酸',
        meridians: ['肺', '胃'],
        functions: ['生津润燥', '清热化痰', '润肺止咳'],
        contraindications: ['脾胃虚寒者不宜多食'],
        suitableConstitutions: ['yin_deficiency', 'damp_heat', 'phlegm_dampness'],
        avoidConstitutions: ['yang_deficiency', 'qi_deficiency'],
        seasonalAdvice: { spring: '适量', summer: '适宜', autumn: '适宜', winter: '不宜' },
        cookingMethods: ['生食', '煮水', '煮汤'],
        nutritionalInfo: { calories: 51, protein: 0.4, carbs: 13, fiber: 2.6 }
    },
    {
        id: 'f002',
        name: '苹果',
        category: '水果',
        nature: '平',
        flavor: '甘酸',
        meridians: ['脾', '肺'],
        functions: ['益胃生津', '健脾止泻', '润肺'],
        contraindications: ['糖尿病患者不宜多食'],
        suitableConstitutions: ['balanced', 'qi_deficiency', 'yin_deficiency'],
        avoidConstitutions: [],
        seasonalAdvice: { spring: '适宜', summer: '适宜', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['生食', '煮食', '榨汁'],
        nutritionalInfo: { calories: 52, protein: 0.3, carbs: 14, fiber: 2.4 }
    },
    {
        id: 'f003',
        name: '香蕉',
        category: '水果',
        nature: '寒',
        flavor: '甘',
        meridians: ['脾', '胃', '大肠'],
        functions: ['清热润肠', '益胃生津', '解毒'],
        contraindications: ['脾胃虚寒者不宜', '腹泻者不宜'],
        suitableConstitutions: ['yin_deficiency', 'damp_heat', 'qi_stagnation'],
        avoidConstitutions: ['yang_deficiency', 'qi_deficiency'],
        seasonalAdvice: { spring: '适量', summer: '适宜', autumn: '适量', winter: '不宜' },
        cookingMethods: ['生食'],
        nutritionalInfo: { calories: 89, protein: 1.1, carbs: 23, fiber: 2.6 }
    },
    {
        id: 'f004',
        name: '葡萄',
        category: '水果',
        nature: '平',
        flavor: '甘',
        meridians: ['肺', '脾', '肾'],
        functions: ['补气血', '强筋骨', '利小便'],
        contraindications: ['糖尿病患者不宜多食'],
        suitableConstitutions: ['balanced', 'qi_deficiency', 'yin_deficiency'],
        avoidConstitutions: [],
        seasonalAdvice: { spring: '适量', summer: '适宜', autumn: '适宜', winter: '适量' },
        cookingMethods: ['生食', '酿酒', '榨汁'],
        nutritionalInfo: { calories: 69, protein: 0.7, carbs: 18, fiber: 0.9 }
    },
    {
        id: 'f005',
        name: '大枣',
        category: '水果',
        nature: '温',
        flavor: '甘',
        meridians: ['脾', '胃'],
        functions: ['补中益气', '养血安神', '缓和药性'],
        contraindications: ['糖尿病患者不宜多食', '湿热内盛者不宜'],
        suitableConstitutions: ['qi_deficiency', 'yang_deficiency', 'blood_stasis'],
        avoidConstitutions: ['damp_heat', 'yin_deficiency'],
        seasonalAdvice: { spring: '适宜', summer: '不宜', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['煮粥', '泡水', '生食', '炖汤'],
        nutritionalInfo: { calories: 264, protein: 3.3, carbs: 70, fiber: 6.2 }
    },
    {
        id: 'f006',
        name: '桂圆',
        category: '水果',
        nature: '温',
        flavor: '甘',
        meridians: ['心', '脾'],
        functions: ['补益心脾', '养血安神', '益智'],
        contraindications: ['阴虚火旺者不宜多食'],
        suitableConstitutions: ['yang_deficiency', 'qi_deficiency', 'blood_stasis'],
        avoidConstitutions: ['yin_deficiency', 'damp_heat'],
        seasonalAdvice: { spring: '适量', summer: '不宜', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['煮粥', '泡水', '生食'],
        nutritionalInfo: { calories: 277, protein: 5.4, carbs: 63, fiber: 2.9 }
    },
    {
        id: 'f007',
        name: '核桃',
        category: '水果',
        nature: '温',
        flavor: '甘',
        meridians: ['肾', '肺', '大肠'],
        functions: ['补肾固精', '温肺定喘', '润肠通便'],
        contraindications: ['腹泻者不宜多食', '阴虚火旺者不宜'],
        suitableConstitutions: ['yang_deficiency', 'qi_deficiency', 'blood_stasis'],
        avoidConstitutions: ['yin_deficiency', 'damp_heat'],
        seasonalAdvice: { spring: '适量', summer: '不宜', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['生食', '煮粥', '炖汤'],
        nutritionalInfo: { calories: 654, protein: 18, carbs: 14, fiber: 8.6 }
    },
    {
        id: 'f008',
        name: '枸杞子',
        category: '水果',
        nature: '平',
        flavor: '甘',
        meridians: ['肝', '肾', '肺'],
        functions: ['滋补肝肾', '益精明目', '润肺'],
        contraindications: ['外感邪热者不宜'],
        suitableConstitutions: ['yin_deficiency', 'yang_deficiency', 'qi_deficiency'],
        avoidConstitutions: ['phlegm_dampness'],
        seasonalAdvice: { spring: '适宜', summer: '适量', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['泡水', '煮粥', '炖汤'],
        nutritionalInfo: { calories: 258, protein: 14, carbs: 57, fiber: 13 }
    },
    {
        id: 'f009',
        name: '山楂',
        category: '水果',
        nature: '微温',
        flavor: '酸甘',
        meridians: ['脾', '胃', '肝'],
        functions: ['消食化积', '行气散瘀', '降脂'],
        contraindications: ['胃酸过多者不宜', '孕妇慎用'],
        suitableConstitutions: ['blood_stasis', 'phlegm_dampness', 'qi_stagnation'],
        avoidConstitutions: ['yin_deficiency', 'yang_deficiency'],
        seasonalAdvice: { spring: '适宜', summer: '适量', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['煮水', '煮汤', '生食'],
        nutritionalInfo: { calories: 102, protein: 0.5, carbs: 25, fiber: 2.9 }
    },
    {
        id: 'f010',
        name: '西瓜',
        category: '水果',
        nature: '寒',
        flavor: '甘',
        meridians: ['心', '胃', '膀胱'],
        functions: ['清热解暑', '除烦止渴', '利尿'],
        contraindications: ['脾胃虚寒者不宜', '糖尿病患者慎用'],
        suitableConstitutions: ['damp_heat', 'yin_deficiency', 'yang_deficiency'],
        avoidConstitutions: ['yang_deficiency', 'qi_deficiency'],
        seasonalAdvice: { spring: '不宜', summer: '适宜', autumn: '不宜', winter: '不宜' },
        cookingMethods: ['生食', '榨汁'],
        nutritionalInfo: { calories: 30, protein: 0.6, carbs: 8, fiber: 0.4 }
    },

    // ===== 肉类 =====
    {
        id: 'm001',
        name: '猪肉',
        category: '肉类',
        nature: '平',
        flavor: '咸',
        meridians: ['脾', '胃', '肾'],
        functions: ['补肾滋阴', '润燥', '益气'],
        contraindications: ['肥胖者不宜多食'],
        suitableConstitutions: ['balanced', 'yin_deficiency', 'qi_deficiency'],
        avoidConstitutions: ['phlegm_dampness', 'damp_heat'],
        seasonalAdvice: { spring: '适宜', summer: '适量', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['炒食', '煮汤', '炖煮'],
        nutritionalInfo: { calories: 143, protein: 21, carbs: 0, fiber: 0 }
    },
    {
        id: 'm002',
        name: '鸡肉',
        category: '肉类',
        nature: '温',
        flavor: '甘',
        meridians: ['脾', '胃', '肝'],
        functions: ['温中益气', '补精添髓', '活血调经'],
        contraindications: ['实热者不宜多食'],
        suitableConstitutions: ['qi_deficiency', 'yang_deficiency', 'blood_stasis'],
        avoidConstitutions: ['yin_deficiency', 'damp_heat'],
        seasonalAdvice: { spring: '适宜', summer: '不宜', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['炖汤', '清蒸', '炒食'],
        nutritionalInfo: { calories: 167, protein: 28, carbs: 0, fiber: 0 }
    },
    {
        id: 'm003',
        name: '羊肉',
        category: '肉类',
        nature: '温',
        flavor: '甘',
        meridians: ['脾', '胃', '肾'],
        functions: ['益气补虚', '温中暖下', '开胃健脾'],
        contraindications: ['实热者不宜', '阴虚火旺者不宜'],
        suitableConstitutions: ['yang_deficiency', 'qi_deficiency', 'blood_stasis'],
        avoidConstitutions: ['yin_deficiency', 'damp_heat'],
        seasonalAdvice: { spring: '适量', summer: '不宜', autumn: '适量', winter: '适宜' },
        cookingMethods: ['炖汤', '涮肉', '煮食'],
        nutritionalInfo: { calories: 118, protein: 20, carbs: 0, fiber: 0 }
    },
    {
        id: 'm004',
        name: '鸭肉',
        category: '肉类',
        nature: '平',
        flavor: '甘咸',
        meridians: ['脾', '胃', '肺'],
        functions: ['滋阴养胃', '利水消肿', '补虚'],
        contraindications: ['腹泻者不宜'],
        suitableConstitutions: ['yin_deficiency', 'damp_heat', 'qi_deficiency'],
        avoidConstitutions: ['yang_deficiency', 'qi_deficiency'],
        seasonalAdvice: { spring: '适量', summer: '适宜', autumn: '适宜', winter: '适量' },
        cookingMethods: ['炖汤', '烤制', '炒食'],
        nutritionalInfo: { calories: 149, protein: 21, carbs: 0, fiber: 0 }
    },
    {
        id: 'm005',
        name: '牛肉',
        category: '肉类',
        nature: '平',
        flavor: '甘',
        meridians: ['脾', '胃'],
        functions: ['补脾胃', '益气血', '强筋骨'],
        contraindications: ['湿疹者不宜'],
        suitableConstitutions: ['balanced', 'qi_deficiency', 'blood_stasis'],
        avoidConstitutions: ['phlegm_dampness', 'damp_heat'],
        seasonalAdvice: { spring: '适宜', summer: '适宜', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['炖煮', '炒食', '烤制'],
        nutritionalInfo: { calories: 106, protein: 22, carbs: 0, fiber: 0 }
    },

    // ===== 水产类 =====
    {
        id: 's001',
        name: '鲫鱼',
        category: '水产',
        nature: '平',
        flavor: '甘',
        meridians: ['脾', '胃', '大肠'],
        functions: ['健脾利湿', '通络下乳', '益气'],
        contraindications: ['过敏体质者慎用'],
        suitableConstitutions: ['qi_deficiency', 'phlegm_dampness', 'yang_deficiency'],
        avoidConstitutions: ['yin_deficiency'],
        seasonalAdvice: { spring: '适宜', summer: '适宜', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['煮汤', '清蒸', '红烧'],
        nutritionalInfo: { calories: 108, protein: 17, carbs: 0, fiber: 0 }
    },
    {
        id: 's002',
        name: '鲤鱼',
        category: '水产',
        nature: '平',
        flavor: '甘',
        meridians: ['脾', '胃', '肾'],
        functions: ['健脾利水', '通乳', '安胎'],
        contraindications: ['过敏体质者慎用'],
        suitableConstitutions: ['phlegm_dampness', 'qi_deficiency', 'yang_deficiency'],
        avoidConstitutions: ['yin_deficiency'],
        seasonalAdvice: { spring: '适宜', summer: '适宜', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['清蒸', '煮汤', '红烧'],
        nutritionalInfo: { calories: 109, protein: 17, carbs: 0, fiber: 0 }
    },
    {
        id: 's003',
        name: '虾',
        category: '水产',
        nature: '温',
        flavor: '甘',
        meridians: ['肝', '肾'],
        functions: ['补肾壮阳', '通乳', '祛风痰'],
        contraindications: ['过敏体质者禁用', '阴虚火旺者不宜'],
        suitableConstitutions: ['yang_deficiency', 'blood_stasis'],
        avoidConstitutions: ['yin_deficiency', 'special', 'damp_heat'],
        seasonalAdvice: { spring: '适宜', summer: '适量', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['清蒸', '煮汤', '炒食'],
        nutritionalInfo: { calories: 99, protein: 21, carbs: 0, fiber: 0 }
    },
    {
        id: 's004',
        name: '海参',
        category: '水产',
        nature: '平',
        flavor: '咸',
        meridians: ['心', '肾', '肺'],
        functions: ['补肾益精', '养血润燥', '增强免疫力'],
        contraindications: ['脾虚便溏者不宜'],
        suitableConstitutions: ['yang_deficiency', 'yin_deficiency', 'blood_stasis'],
        avoidConstitutions: ['phlegm_dampness', 'special'],
        seasonalAdvice: { spring: '适宜', summer: '适量', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['煮粥', '炖汤', '煮食'],
        nutritionalInfo: { calories: 71, protein: 16, carbs: 0, fiber: 0 }
    },

    // ===== 调味品/香料 =====
    {
        id: 'sp001',
        name: '生姜',
        category: '调味品',
        nature: '温',
        flavor: '辛',
        meridians: ['脾', '胃', '肺'],
        functions: ['解表散寒', '温中止呕', '化痰止咳'],
        contraindications: ['阴虚火旺者不宜', '痔疮者不宜多食'],
        suitableConstitutions: ['yang_deficiency', 'qi_deficiency', 'phlegm_dampness'],
        avoidConstitutions: ['yin_deficiency', 'damp_heat'],
        seasonalAdvice: { spring: '适宜', summer: '适量', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['煮水', '炒菜', '腌制'],
        nutritionalInfo: { calories: 41, protein: 1.3, carbs: 10, fiber: 2.4 }
    },
    {
        id: 'sp002',
        name: '红枣',
        category: '调味品',
        nature: '温',
        flavor: '甘',
        meridians: ['脾', '胃'],
        functions: ['补中益气', '养血安神', '缓和药性'],
        contraindications: ['糖尿病患者不宜', '湿热者不宜'],
        suitableConstitutions: ['qi_deficiency', 'yang_deficiency', 'blood_stasis'],
        avoidConstitutions: ['damp_heat', 'yin_deficiency'],
        seasonalAdvice: { spring: '适宜', summer: '不宜', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['煮粥', '泡水', '炖汤'],
        nutritionalInfo: { calories: 264, protein: 3.3, carbs: 70, fiber: 6.2 }
    },
    {
        id: 'sp003',
        name: '玫瑰花',
        category: '调味品',
        nature: '微温',
        flavor: '甘微苦',
        meridians: ['肝', '脾'],
        functions: ['行气解郁', '和血止痛', '美容养颜'],
        contraindications: ['孕妇慎用', '月经量多者不宜'],
        suitableConstitutions: ['qi_stagnation', 'blood_stasis', 'qi_deficiency'],
        avoidConstitutions: ['damp_heat', 'yin_deficiency'],
        seasonalAdvice: { spring: '适宜', summer: '适量', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['泡水代茶饮'],
        nutritionalInfo: { calories: 0, protein: 0, carbs: 0, fiber: 0 }
    },
    {
        id: 'sp004',
        name: '陈皮',
        category: '调味品',
        nature: '温',
        flavor: '辛苦',
        meridians: ['脾', '胃', '肺'],
        functions: ['理气健脾', '燥湿化痰', '降逆止呕'],
        contraindications: ['阴虚燥咳者不宜'],
        suitableConstitutions: ['phlegm_dampness', 'qi_stagnation', 'yang_deficiency'],
        avoidConstitutions: ['yin_deficiency', 'damp_heat'],
        seasonalAdvice: { spring: '适宜', summer: '适量', autumn: '适宜', winter: '适宜' },
        cookingMethods: ['煮水', '煮粥', '炖汤'],
        nutritionalInfo: { calories: 278, protein: 8.1, carbs: 69, fiber: 21 }
    }
]

/**
 * 根据体质类型获取推荐食物
 * @param {string} constitutionType - 体质类型
 * @returns {Array} 推荐食物列表
 */
export function getRecommendedFoodsByConstitution(constitutionType) {
    return foodDatabase.filter(food =>
        food.suitableConstitutions.includes(constitutionType)
    ).map(food => ({
        id: food.id,
        name: food.name,
        nature: food.nature,
        flavor: food.flavor,
        functions: food.functions,
        cookingMethods: food.cookingMethods
    }))
}

/**
 * 根据体质类型获取禁忌食物
 * @param {string} constitutionType - 体质类型
 * @returns {Array} 禁忌食物列表
 */
export function getAvoidedFoodsByConstitution(constitutionType) {
    return foodDatabase.filter(food =>
        food.avoidConstitutions && food.avoidConstitutions.includes(constitutionType)
    ).map(food => ({
        id: food.id,
        name: food.name,
        reason: food.contraindications ? food.contraindications[0] : '不适合此体质'
    }))
}

/**
 * 根据食物名称搜索食物信息
 * @param {string} foodName - 食物名称
 * @returns {Object|null} 食物信息
 */
export function searchFoodByName(foodName) {
    return foodDatabase.find(food =>
        food.name.includes(foodName) || foodName.includes(food.name)
    ) || null
}

/**
 * 根据体质和季节获取推荐食物
 * @param {string} constitutionType - 体质类型
 * @param {string} season - 季节 ('spring', 'summer', 'autumn', 'winter')
 * @returns {Array} 推荐的季节适宜食物
 */
export function getSeasonalFoodsByConstitution(constitutionType, season) {
    return foodDatabase.filter(food => {
        const seasonalAdvice = food.seasonalAdvice
        if (!seasonalAdvice) return false

        const seasonLevel = seasonalAdvice[season]
        // 排除"不宜"的选项
        if (seasonLevel === '不宜') return false

        return food.suitableConstitutions.includes(constitutionType)
    })
}

export default {
    foodDatabase,
    getRecommendedFoodsByConstitution,
    getAvoidedFoodsByConstitution,
    searchFoodByName,
    getSeasonalFoodsByConstitution
}
