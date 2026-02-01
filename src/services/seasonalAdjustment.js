/**
 * 五行季节调整服务
 * 基于中医五行理论和四季养生原则
 * 实现根据季节变化动态调整膳食推荐
 */

// 五行与季节的对应关系
const FIVE_ELEMENTS_SEASON_MAP = {
    spring: {
        element: '木',
        elementEn: 'wood',
        organ: '肝',
        color: '绿色',
        taste: '酸',
        direction: '东',
        emotion: '怒',
        climate: '风',
        description: '春属木，与肝相应。春季养肝为主，宜疏肝理气。'
    },
    summer: {
        element: '火',
        elementEn: 'fire',
        organ: '心',
        color: '红色',
        taste: '苦',
        direction: '南',
        emotion: '喜',
        climate: '热',
        description: '夏属火，与心相应。夏季养心为主，宜清心泻火。'
    },
    longSummer: {
        element: '土',
        elementEn: 'earth',
        organ: '脾',
        color: '黄色',
        taste: '甘',
        direction: '中',
        emotion: '思',
        climate: '湿',
        description: '长夏属土，与脾相应。长夏养脾为主，宜健脾祛湿。'
    },
    autumn: {
        element: '金',
        elementEn: 'metal',
        organ: '肺',
        color: '白色',
        taste: '辛',
        direction: '西',
        emotion: '悲',
        climate: '燥',
        description: '秋属金，与肺相应。秋季养肺为主，宜润肺滋阴。'
    },
    winter: {
        element: '水',
        elementEn: 'water',
        organ: '肾',
        color: '黑色',
        taste: '咸',
        direction: '北',
        emotion: '恐',
        climate: '寒',
        description: '冬属水，与肾相应。冬季养肾为主，宜温肾固精。'
    }
}

// 五行相生相克关系
const FIVE_ELEMENTS_RELATIONS = {
    generating: {
        wood: 'fire',
        fire: 'earth',
        earth: 'metal',
        metal: 'water',
        water: 'wood'
    },
    overcoming: {
        wood: 'earth',
        earth: 'water',
        water: 'fire',
        fire: 'metal',
        metal: 'wood'
    }
}

/**
 * 根据日期确定当前季节
 * @param {Date} date - 日期对象
 * @returns {string} 季节类型
 */
export function getCurrentSeason(date = new Date()) {
    const month = date.getMonth() + 1
    const day = date.getDate()

    // 春季：3月-5月
    if (month >= 3 && month <= 5) {
        return 'spring'
    }
    // 夏季：6月-7月
    if (month >= 6 && month <= 7) {
        return 'summer'
    }
    // 长夏（梅雨季）：8月
    if (month === 8) {
        return 'longSummer'
    }
    // 秋季：9月-11月
    if (month >= 9 && month <= 11) {
        return 'autumn'
    }
    // 冬季：12月-2月
    return 'winter'
}

/**
 * 获取季节详细信息
 * @param {string} season - 季节类型
 * @returns {Object} 季节详细信息
 */
export function getSeasonInfo(season) {
    return FIVE_ELEMENTS_SEASON_MAP[season] || FIVE_ELEMENTS_SEASON_MAP.spring
}

/**
 * 根据体质和季节调整推荐分数
 * @param {number} baseScore - 基础推荐分数
 * @param {string} constitutionType - 体质类型
 * @param {string} season - 季节类型
 * @returns {number} 调整后的分数
 */
export function adjustScoreBySeason(baseScore, constitutionType, season) {
    let adjustedScore = baseScore

    // 根据季节调整
    switch (season) {
        case 'spring':
            // 春季宜疏肝理气，对气郁质、肝火旺者有利
            if (constitutionType === 'qi_stagnation') {
                adjustedScore *= 1.15
            }
            // 春季肝旺，对肝阳上亢者不利
            if (constitutionType === 'yang_deficiency') {
                adjustedScore *= 0.9
            }
            break

        case 'summer':
            // 夏季宜清心泻火
            if (constitutionType === 'yin_deficiency') {
                adjustedScore *= 1.1
            }
            if (constitutionType === 'damp_heat') {
                adjustedScore *= 1.15
            }
            // 夏季炎热，对阳虚质是调理好时机
            if (constitutionType === 'yang_deficiency') {
                adjustedScore *= 0.85
            }
            break

        case 'longSummer':
            // 长夏宜健脾祛湿
            if (constitutionType === 'phlegm_dampness') {
                adjustedScore *= 1.2
            }
            if (constitutionType === 'damp_heat') {
                adjustedScore *= 1.15
            }
            // 长夏湿重，对阴虚质不利
            if (constitutionType === 'yin_deficiency') {
                adjustedScore *= 0.9
            }
            break

        case 'autumn':
            // 秋季宜润肺滋阴
            if (constitutionType === 'yin_deficiency') {
                adjustedScore *= 1.2
            }
            if (constitutionType === 'damp_heat') {
                adjustedScore *= 1.1
            }
            // 秋燥伤肺，对肺气虚者不利
            if (constitutionType === 'qi_deficiency') {
                adjustedScore *= 0.9
            }
            break

        case 'winter':
            // 冬季宜温肾固精
            if (constitutionType === 'yang_deficiency') {
                adjustedScore *= 1.25
            }
            if (constitutionType === 'qi_deficiency') {
                adjustedScore *= 1.1
            }
            // 冬季寒冷，对阴虚质不利
            if (constitutionType === 'yin_deficiency') {
                adjustedScore *= 0.85
            }
            break
    }

    return Math.round(adjustedScore * 100) / 100
}

/**
 * 根据季节获取调理建议
 * @param {string} season - 季节类型
 * @returns {Object} 调理建议
 */
export function getSeasonalAdvice(season) {
    const seasonInfo = getSeasonInfo(season)

    const adviceMap = {
        spring: {
            diet: [
                '多食绿色蔬菜，如菠菜、芹菜、青菜等',
                '适量酸味食物，如山楂、醋等（养肝）',
                '少食辛辣油腻，以免肝火过旺',
                '可食用枸杞、菊花茶养肝明目'
            ],
            lifestyle: [
                '早睡早起，保证充足睡眠',
                '保持心情舒畅，避免抑郁恼怒',
                '适度运动，如散步、太极拳',
                '注意保暖，春季多变'
            ],
            avoid: [
                '过度熬夜',
                '情绪抑郁或暴躁',
                '过量饮酒',
                '食用发物'
            ]
        },
        summer: {
            diet: [
                '多食清热解暑食物，如绿豆、苦瓜、西瓜',
                '适量苦味食物，如苦菜、苦丁茶（养心）',
                '多饮水，补充津液',
                '少食辛辣温热食物'
            ],
            lifestyle: [
                '晚睡早起，午休片刻',
                '保持心境平和，避免急躁',
                '适度运动，避免大汗淋漓',
                '注意防暑降温'
            ],
            avoid: [
                '贪凉饮冷',
                '长时间暴晒',
                '剧烈运动后立即洗冷水澡',
                '食用变质食物'
            ]
        },
        longSummer: {
            diet: [
                '多食健脾祛湿食物，如薏米、赤小豆、冬瓜',
                '适量甘味食物，如山药、大枣（养脾）',
                '少食生冷油腻',
                '可食用荷叶茶、绿豆汤'
            ],
            lifestyle: [
                '保持环境干燥通风',
                '避免久坐湿地',
                '适度运动促进排汗',
                '注意个人卫生'
            ],
            avoid: [
                '久居潮湿环境',
                '贪凉涉水',
                '过食生冷',
                '暴饮暴食'
            ]
        },
        autumn: {
            diet: [
                '多食润肺滋阴食物，如梨、银耳、百合',
                '适量辛味食物，如生姜、葱白（养肺）',
                '少食辛辣燥热食物',
                '可食用蜂蜜、杏仁露'
            ],
            lifestyle: [
                '早睡早起，收敛神气',
                '保持乐观情绪',
                '适度运动，增强体质',
                '注意皮肤保湿'
            ],
            avoid: [
                '过度悲伤忧愁',
                '食用燥热食物',
                '过度进补',
                '熬夜伤阴'
            ]
        },
        winter: {
            diet: [
                '多食温补肾阳食物，如羊肉、核桃、桂圆',
                '适量咸味食物，如海带、紫菜（养肾）',
                '少食生冷寒凉食物',
                '可食用当归羊肉汤'
            ],
            lifestyle: [
                '早睡晚起，保证充足睡眠',
                '减少剧烈运动，宜静养',
                '注意保暖，尤其是腰膝',
                '节制房事，保养肾精'
            ],
            avoid: [
                '过度劳累',
                '熬夜伤肾',
                '贪凉受冻',
                '过度房事'
            ]
        }
    }

    return {
        ...seasonInfo,
        advice: adviceMap[season] || adviceMap.spring
    }
}

/**
 * 根据体质类型和当前季节生成个性化推荐
 * @param {Object} constitutionResult - 体质判定结果
 * @param {Date} date - 日期（可选，默认当前日期）
 * @returns {Object} 包含推荐食物、禁忌食物、调理建议的综合结果
 */
export function generateSeasonalRecommendation(constitutionResult, date = new Date()) {
    const season = getCurrentSeason(date)
    const seasonInfo = getSeasonInfo(season)
    const seasonalAdvice = getSeasonalAdvice(season)

    // 获取兼夹体质的处理
    let constitutionTypes = []
    if (constitutionResult.isMixed) {
        constitutionTypes = constitutionResult.allTypes
    } else {
        constitutionTypes = [constitutionResult.type]
    }

    // 计算每种体质的调整系数
    const adjustmentFactors = {}
    constitutionTypes.forEach(type => {
        adjustmentFactors[type] = {
            factor: adjustScoreBySeason(1, type, season),
            info: getSeasonInfo(season)
        }
    })

    return {
        season,
        seasonInfo,
        constitutionTypes,
        adjustmentFactors,
        generalAdvice: seasonalAdvice.advice,
        personalizedRecommendation: {
            diet: seasonalAdvice.advice.diet,
            lifestyle: seasonalAdvice.advice.lifestyle,
            avoid: seasonalAdvice.advice.avoid
        },
        // 体质与季节的综合分析
        comprehensiveAnalysis: generateComprehensiveAnalysis(constitutionResult, season)
    }
}

/**
 * 生成综合分析报告
 * @param {Object} constitutionResult - 体质判定结果
 * @param {string} season - 季节类型
 * @returns {Object} 分析报告
 */
function generateComprehensiveAnalysis(constitutionResult, season) {
    const analysis = {
        favorableFactors: [],
        unfavorableFactors: [],
        recommendations: []
    }

    const constitutionType = constitutionResult.type
    const isMixed = constitutionResult.isMixed

    // 体质与季节的相生相克关系分析
    const seasonElement = FIVE_ELEMENTS_SEASON_MAP[season].elementEn

    // 体质对应的脏腑
    const constitutionOrgans = {
        balanced: null,
        qi_deficiency: ['脾', '肺'],
        yang_deficiency: ['肾', '脾'],
        yin_deficiency: ['心', '肝', '肾'],
        phlegm_dampness: ['脾', '肺'],
        damp_heat: ['肝', '胆', '脾'],
        blood_stasis: ['心', '肝'],
        qi_stagnation: ['肝', '脾'],
        special: ['肺', '脾']
    }

    const organs = constitutionOrgans[constitutionType] || []

    // 分析有利因素
    if (season === 'spring' && (constitutionType === 'qi_stagnation' || constitutionType === 'blood_stasis')) {
        analysis.favorableFactors.push('春季是疏肝理气的好时机，建议多进行户外活动')
    }
    if (season === 'summer' && constitutionType === 'yin_deficiency') {
        analysis.favorableFactors.push('夏季阳气旺盛，是滋阴的好时机，建议多食滋阴润燥食物')
    }
    if (season === 'winter' && constitutionType === 'yang_deficiency') {
        analysis.favorableFactors.push('冬季是温补肾阳的最佳时机，建议适当进补')
    }

    // 分析不利因素
    if (season === 'summer' && constitutionType === 'yang_deficiency') {
        analysis.unfavorableFactors.push('夏季炎热，阳气外浮，温补效果可能不佳，建议适量进补')
    }
    if (season === 'winter' && constitutionType === 'yin_deficiency') {
        analysis.unfavorableFactors.push('冬季干燥，容易伤阴，建议多食滋阴润燥食物')
    }
    if (season === 'longSummer' && constitutionType === 'yin_deficiency') {
        analysis.unfavorableFactors.push('长夏湿重，滋阴可能助湿，建议在健脾基础上滋阴')
    }

    // 生成个性化建议
    analysis.recommendations = generatePersonalizedRecommendations(constitutionResult, season)

    return analysis
}

/**
 * 生成个性化建议
 */
function generatePersonalizedRecommendations(constitutionResult, season) {
    const recommendations = []

    // 基础建议
    recommendations.push({
        category: '饮食',
        items: getSeasonalAdvice(season).diet
    })

    // 体质特异性建议
    if (constitutionResult.isMixed) {
        recommendations.push({
            category: '兼夹体质特别提醒',
            items: [
                '您的体质较为复杂，兼有多种体质特征',
                '调理时请综合考虑各种体质的特点',
                '建议在专业中医师指导下进行调理',
                '定期复查体质变化，及时调整方案'
            ]
        })
    }

    return recommendations
}

/**
 * 获取二十四节气的养生建议
 * @param {string} solarTerm - 二十四节气名称
 * @returns {Object} 节气养生建议
 */
export function getSolarTermAdvice(solarTerm) {
    const solarTermAdvice = {
        '立春': {
            advice: '春季开始，万物复苏。宜早睡早起，舒展筋骨。饮食宜甘不宜酸。',
            diet: ['韭菜', '香菜', '生姜', '红枣']
        },
        '雨水': {
            advice: '降雨增多，湿气渐重。宜健脾祛湿，避免受凉。',
            diet: ['薏米', '赤小豆', '山药', '鲫鱼']
        },
        '惊蛰': {
            advice: '春雷惊醒，肝阳上亢。宜清肝泻火，保持情绪稳定。',
            diet: ['芹菜', '菊花', '枸杞', '绿叶蔬菜']
        },
        '春分': {
            advice: '昼夜平分，阴阳调和。宜调和肝脾，保持平衡。',
            diet: ['山药', '大枣', '蜂蜜', '时令蔬菜']
        },
        '清明': {
            advice: '气清景明，适合踏青。宜疏肝解郁，放松心情。',
            diet: ['绿茶', '菊花', '薄荷', '青团']
        },
        '谷雨': {
            advice: '雨生百谷，湿气较重。宜健脾祛湿，预防过敏。',
            diet: ['薏米', '冬瓜', '香椿', '鲫鱼']
        },
        '立夏': {
            advice: '夏季开始，心火渐旺。宜清心泻火，养心安神。',
            diet: ['莲子', '苦瓜', '绿豆', '西瓜']
        },
        '小满': {
            advice: '麦穗饱满，湿热渐盛。宜清热利湿，防暑降温。',
            diet: ['绿豆', '冬瓜', '苦菜', '薏米']
        },
        '芒种': {
            advice: '农忙时节，耗气伤阴。宜益气养阴，补充水分。',
            diet: ['乌梅', '山楂', '绿豆', '荷叶']
        },
        '夏至': {
            advice: '阳气最盛，宜清心泻火，养护心阴。',
            diet: ['苦瓜', '西瓜', '绿豆', '莲子']
        },
        '小暑': {
            advice: '暑热渐盛，宜清热解暑，益气生津。',
            diet: ['绿豆', '西瓜子', '荷叶', '菊花']
        },
        '大暑': {
            advice: '最热时节，宜防暑降温，清热利湿。',
            diet: ['绿豆', '苦瓜', '冬瓜', '西瓜']
        },
        '立秋': {
            advice: '秋季开始，燥气渐盛。宜润肺滋阴，防秋燥。',
            diet: ['梨', '银耳', '百合', '蜂蜜']
        },
        '处暑': {
            advice: '暑气渐消，秋燥明显。宜养阴润燥，滋补肺肾。',
            diet: ['梨', '蜂蜜', '银耳', '芝麻']
        },
        '白露': {
            advice: '露水凝白，昼夜温差大。宜滋阴润肺，预防感冒。',
            diet: ['龙眼', '梨', '银耳', '红枣']
        },
        '秋分': {
            advice: '昼夜平分，阴阳平衡。宜调和肺脾，滋阴润燥。',
            diet: ['山药', '莲子', '银耳', '蜂蜜']
        },
        '寒露': {
            advice: '露水寒冷，燥邪加重。宜润燥养阴，温补脾胃。',
            diet: ['芝麻', '核桃', '红枣', '梨']
        },
        '霜降': {
            advice: '霜降露凝，渐入冬季。宜滋阴润燥，温补肝肾。',
            diet: ['柿子', '板栗', '蜂蜜', '羊肉']
        },
        '立冬': {
            advice: '冬季开始，阳气潜藏。宜温补肾阳，固护精气。',
            diet: ['羊肉', '桂圆', '核桃', '生姜']
        },
        '小雪': {
            advice: '雪落初冬，温补肾阳。宜食用温热食物，保暖防寒。',
            diet: ['羊肉', '牛肉', '桂圆', '红枣']
        },
        '大雪': {
            advice: '雪量大增，宜温补肾阳，养阴润燥。',
            diet: ['羊肉', '海参', '枸杞', '核桃']
        },
        '冬至': {
            advice: '阳气初生，宜温补肾阳，夏病冬治。',
            diet: ['饺子', '羊肉', '汤圆', '桂圆']
        },
        '小寒': {
            advice: '最冷时节将至，宜温补肾阳，防寒保暖。',
            diet: ['羊肉', '生姜', '红枣', '桂圆']
        },
        '大寒': {
            advice: '最冷时节，温补肾阳，储备阳气。',
            diet: ['羊肉', '牛肉', '桂圆', '八宝粥']
        }
    }

    return solarTermAdvice[solarTerm] || {
        advice: '注意季节变化，适时调理',
        diet: []
    }
}

export default {
    getCurrentSeason,
    getSeasonInfo,
    adjustScoreBySeason,
    getSeasonalAdvice,
    generateSeasonalRecommendation,
    getSolarTermAdvice
}
