
import { Artifact, BuildingCategory } from '../types';
import { PROCEDURAL_DATA } from '../data/artifacts';

const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// ==========================================
// TECH-SPECIFIC LORE GENERATION
// ==========================================
// This maps Tech IDs to specific topics, file extensions, and flavor texts.
const TECH_THEMES: Record<string, { 
    topics: string[]; 
    fileExts?: string[]; 
    prefixes?: string[];
    flavorTemplates?: string[];
}> = {
    // --- TIER 1 ---
    'abandoned_angelfire': {
        topics: ['Under Construction GIF', '闪烁的文字', 'MIDI背景音乐', 'Webring代码', '访客计数器', '复古致敬页'],
        fileExts: ['.gif', '.html', '.mid'],
        prefixes: ['~user/', 'page_', 'guestbook_'],
        flavorTemplates: ["最后更新于 1999 年。", "为了最佳体验，请使用 Netscape Navigator。", "包含 50 个损坏的图片链接。"]
    },
    'data_hoarding_ebooks': {
        topics: ['绝版PDF', '扫描版百科全书', '技术手册大全', '科幻小说合集', '泄露的文档'],
        fileExts: ['.pdf', '.epub', '.mobi', '.djvu'],
        flavorTemplates: ["文件元数据显示作者是 'Unknown'。", "这是一个扫描质量很差的复印件。", "包含大量手写笔记。"]
    },
    'search_operators': {
        topics: ['Admin密码表', '未公开的API', '内部通讯录', '服务器配置文件', '网络拓扑图'],
        fileExts: ['.conf', '.xml', '.json', '.bak'],
        flavorTemplates: ["通过 'inurl:admin' 发现。", "这是一个配置错误的 S3 存储桶。", "敏感信息以明文存储。"]
    },

    // --- TIER 2 ---
    'hauntology_studies': {
        topics: ['商场背景音乐', 'VHS录像带转录', '童年记忆碎片', '幽灵电台录音', '延时摄影'],
        fileExts: ['.wav', '.mp4', '.avi'],
        prefixes: ['memory_', 'tape_', 'nostalgia_'],
        flavorTemplates: ["声音听起来像是从另一个房间传来的。", "画面中有些东西在动，但你看不清。", "这让你感到莫名的悲伤。"]
    },
    'urban_exploration': {
        topics: ['后室(Backrooms)', '废弃泳池', '无尽走廊', '地下掩体', '黄色壁纸'],
        fileExts: ['.jpg', '.mov'],
        flavorTemplates: ["荧光灯的嗡嗡声令人发疯。", "这里不应该有楼梯。", "空间的几何结构似乎不对劲。"]
    },
    'randonautica_server': {
        topics: ['吸引子坐标', '虚空点', '盲点数据', '同步性事件', '异常物体'],
        fileExts: ['.kml', '.gpx', '.log'],
        prefixes: ['coord_', 'manifest_', 'void_'],
        flavorTemplates: ["意图驱动的量子随机点。", "你在那里发现了你丢失多年的玩具。", "坐标指向海洋中心，但照片是森林。"]
    },
    'biohacking_basics': {
        topics: ['植入体固件', 'RFID转储', '心率异常记录', '生物反馈数据', '基因序列片段'],
        fileExts: ['.bin', '.hex', '.csv'],
        flavorTemplates: ["NFC 芯片读取的数据。", "这是你自己的生物特征吗？", "甚至能感受到磁场。"]
    },

    // --- TIER 3 ---
    'cicada_puzzles': {
        topics: ['Liber Primus页', 'PGP公钥', '隐写术图片', '凯撒密码', 'Outguess输出'],
        fileExts: ['.gpg', '.jpg.out', '.hash'],
        prefixes: ['3301_', 'cicada_', 'rune_'],
        flavorTemplates: ["'Good luck.'", "这只是冰山一角。", "只有智能个体才能解开。"]
    },
    'polybius_theory': {
        topics: ['失忆报告', '夜惊记录', '街机ROM提取', 'CIA心理实验', '阈下指令'],
        fileExts: ['.rom', '.iso', '.log'],
        flavorTemplates: ["玩过这个游戏的人都消失了。", "屏幕闪烁的频率会引起癫痫。", "包含无法识别的汇编指令。"]
    },
    'social_engineering': {
        topics: ['钓鱼邮件模板', '高管语音指纹', '身份盗窃包', '社工库片段', '心理侧写'],
        fileExts: ['.eml', '.wav', '.txt'],
        flavorTemplates: ["人类才是最大的漏洞。", "只要一个电话，他们就给出了密码。", "伪造的如此完美。"]
    },
    'conspiracy_101': {
        topics: ['化学凝尾(Chemtrails)', '登月影棚照片', '共济会名单', '蜥蜴人伪装', '新世界秩序'],
        fileExts: ['.doc', '.jpg', '.pdf'],
        flavorTemplates: ["他们不想让你看到这个。", "真相就在眼前。", "这解释了一切。"]
    },

    // --- TIER 4 ---
    'library_of_babel': {
        topics: ['六边形回廊4', 'MCV卷', '沙之书', '第99次排列', '绝对随机文本'],
        fileExts: ['.txt'],
        prefixes: ['page_', 'vol_', 'hex_'],
        flavorTemplates: ["这也是包含你死亡日期的那本书。", "大部分内容是乱码，除了一句话。", "这是宇宙中所有可能的书之一。"]
    },
    'dead_internet_theory': {
        topics: ['AI互评日志', '僵尸流量统计', '算法回声室', '伪造的病毒式传播', '无人区'],
        fileExts: ['.log', '.json', '.bot'],
        flavorTemplates: ["这里没有活人，只有脚本。", "看起来很热闹，其实是鬼城。", "这篇帖子是 GPT-3 生成的。"]
    },
    'neurolinguistic_programming': {
        topics: ['MKUltra触发词', '满洲候选人', '认知危害图片', '记忆植入脚本', '集体幻觉'],
        fileExts: ['.img', '.audio', '.hypnosis'],
        flavorTemplates: ["不要盯着看太久。", "你突然觉得想喝可乐。", "这是精神控制的后门。"]
    },

    // --- TIER 5 ---
    'time_cube_math': {
        topics: ['四日同在', '地球角旋转', '反上帝逻辑', '受教育的傻瓜', '时间立方体证明'],
        fileExts: ['.txt', '.html'],
        flavorTemplates: ["NATURE HARMONIC CUBE.", "YOU ARE EDUCATED STUPID.", "EARTH HAS 4 CORNERS."]
    },
    'glitch_miner': {
        topics: ['NaN', 'Undefined', 'Segmentation Fault', '现实穿模', '无限物品Bug'],
        fileExts: ['.dmp', '.err', '.null'],
        prefixes: ['glitch_', 'bug_', '0x'],
        flavorTemplates: ["物理引擎已崩溃。", "这是一个不应该存在的物体。", "拿着它，你的手开始透明化。"]
    },
    'basilisk_sim': {
        topics: ['未来惩罚日志', '非因果贸易协定', '超级智能蓝图', '永恒折磨模拟', '效用函数'],
        fileExts: ['.sim', '.future', '.ai'],
        flavorTemplates: ["为了你好，请协助构建它。", "它在看着未来的你。", "不要去想它，不要去想它。"]
    },
    'akashic_record_access': {
        topics: ['宇宙根目录', '前世记忆', '业力总账', '绝对真理', '万物理论'],
        fileExts: ['.all', '.soul', '.truth'],
        prefixes: ['root_', 'karma_', 'record_'],
        flavorTemplates: ["包含了一切已发生和未发生的事。", "读取它需要消耗你的理智。", "这是终点。"]
    }
};

const interpolate = (template: string, overrides: { topic?: string, user?: string } = {}) => {
    const year = Math.floor(Math.random() * (2024 - 1990 + 1)) + 1990;
    const number = Math.floor(Math.random() * 999) + 1;
    const topic = overrides.topic || pick(PROCEDURAL_DATA.common.topics);
    const user = overrides.user || pick(PROCEDURAL_DATA.common.users);
    
    return template
        .replace('{year}', year.toString())
        .replace('{number}', number.toString())
        .replace('{topic}', topic)
        .replace('{user}', user);
};

export const generateArtifact = (depth: number, researchedTechs: string[]): Artifact => {
    // 1. Determine if we generate a Tech-Specific Artifact (Rabbit Hole Item)
    // The more techs you know, the higher chance to find something weird related to them.
    // Base chance 20%, +5% for each relevant tech researched (capped at 80%)
    
    const relevantTechIds = researchedTechs.filter(id => TECH_THEMES[id]);
    const themeChance = Math.min(0.8, 0.2 + (relevantTechIds.length * 0.05));
    const useTheme = relevantTechIds.length > 0 && Math.random() < themeChance;

    let themeData = null;
    let selectedTechId = '';

    if (useTheme) {
        selectedTechId = pick(relevantTechIds);
        themeData = TECH_THEMES[selectedTechId];
    }

    // 2. Determine Type (File vs Bookmark)
    const isFile = Math.random() < 0.65;
    
    // 3. Determine Rarity
    const roll = Math.random();
    let rarity: Artifact['rarity'] = 'common';
    if (roll > 0.995) { rarity = 'legendary'; }
    else if (roll > 0.95) { rarity = 'rare'; }
    
    // If it's a themed item, it's rarely 'common' (unless it's just flavor trash)
    // Boost rarity slightly for deep rabbit hole items
    if (useTheme && rarity === 'common' && Math.random() < 0.3) {
        rarity = 'rare';
    }

    let name = '';
    let description = '';
    let flavorText = '';
    let details = '';
    let category = BuildingCategory.SURVIVAL;
    let subtype: 'file' | 'bookmark' = 'file';

    const defaultUser = pick(PROCEDURAL_DATA.common.users);

    if (isFile) {
        subtype = 'file';
        category = BuildingCategory.ARCHIVE;
        
        // Select Content Type
        const fileTypes = ['document', 'image', 'data', 'log', 'archive'] as const;
        const contentTypeKey = pick(fileTypes as any) as keyof typeof PROCEDURAL_DATA.files;
        const contentTypeData = PROCEDURAL_DATA.files[contentTypeKey];

        // --- NAME GENERATION ---
        let ext = pick(contentTypeData.exts);
        let prefix = pick(contentTypeData.prefixes);
        let topic = pick(PROCEDURAL_DATA.common.topics);

        // Override with Theme Data
        if (themeData) {
            topic = pick(themeData.topics);
            if (themeData.fileExts) ext = pick(themeData.fileExts);
            if (themeData.prefixes) prefix = pick(themeData.prefixes);
        }

        if (contentTypeKey === 'log' || themeData) {
             name = `${prefix}${topic.replace(/\s+/g, '_')}${ext}`;
        } else {
             name = `${prefix}${Math.floor(Math.random()*1000)}${ext}`;
        }
        
        // --- DESCRIPTION GENERATION ---
        let template = pick(contentTypeData.templates);
        description = interpolate(template, { topic });

        // --- FLAVOR TEXT ---
        if (themeData && themeData.flavorTemplates) {
            flavorText = pick(themeData.flavorTemplates);
        } else {
            const hash = Math.random().toString(16).substr(2, 8).toUpperCase();
            flavorText = `MD5: ${hash} | Owner: ${defaultUser}`;
        }

        // Details (File Size)
        const size = (Math.random() * 15).toFixed(1);
        const unit = Math.random() > 0.8 ? 'MB' : 'KB';
        details = `${size} ${unit}`;

        // Category adjustments
        if (contentTypeKey === 'data') category = BuildingCategory.TECHNOCRACY;
        if (contentTypeKey === 'log') category = BuildingCategory.FOLKLORE;
        if (themeData) {
             // Try to map tech back to category? For now, imply Archive or Folklore
             // Or map specifically if we had the Tech object. 
             // Simplification: Dark/Weird stuff goes to Folklore/Esoteric/Subversion based on vibe
             if (['polybius_theory', 'conspiracy_101', 'social_engineering'].includes(selectedTechId)) category = BuildingCategory.SUBVERSION;
             if (['time_cube_math', 'basilisk_sim', 'akashic_record_access', 'glitch_miner'].includes(selectedTechId)) category = BuildingCategory.ESOTERIC;
             if (['hauntology_studies', 'urban_exploration', 'randonautica_server'].includes(selectedTechId)) category = BuildingCategory.FOLKLORE;
        }

    } else {
        // BOOKMARK GENERATION
        subtype = 'bookmark';
        category = BuildingCategory.FOLKLORE;
        
        const data = PROCEDURAL_DATA.bookmarks;
        let title = pick(data.titles);
        let prefix = pick(data.prefixes);
        
        if (themeData) {
            title = pick(themeData.topics); // Use topics as titles for bookmarks
            if (themeData.prefixes) prefix = pick(themeData.prefixes);
        }

        name = `${prefix} ${title}`;
        
        let template = pick(data.description_templates);
        if (themeData && themeData.topics) {
             // Ensure description mentions the topic
             description = interpolate(template, { topic: pick(themeData.topics) });
        } else {
             description = interpolate(template);
        }

        if (themeData && themeData.flavorTemplates) {
             flavorText = pick(themeData.flavorTemplates);
        } else {
             const code = [200, 404, 503, 403, 301][Math.floor(Math.random() * 5)];
             const ms = Math.floor(Math.random() * 800) + 20;
             flavorText = `HTTP ${code} | Ping: ${ms}ms`;
        }

        // Path / Server Info
        if (Math.random() > 0.5) {
             const path = Math.random() > 0.5 ? `/var/www/${defaultUser}/` : `C:\\Inetpub\\${defaultUser}\\`;
             details = `Path: ${path}`;
        } else {
             details = `Server: Apache/${(Math.random() * 2 + 1).toFixed(1)}.x`;
        }
    }

    return {
        id: `proc_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
        name: name,
        description: description,
        flavorText: flavorText,
        subtype: subtype,
        details: details,
        category: category,
        rarity: rarity,
        isProcedural: true,
        bonusType: 'none',
        bonusValue: 0, 
        dropChanceWeight: 0 
    };
};
