
import { Artifact, BuildingCategory, ResourceType } from '../types';

// ==========================================
// UNIQUE ARTIFACTS (Hand-crafted)
// ==========================================
export const UNIQUE_ARTIFACTS: Artifact[] = [
  {
    id: 'winrar_license',
    name: 'WinRAR_License.key',
    subtype: 'file',
    details: '1 KB',
    description: '一个真正的正版授权文件。这在互联网上比独角兽还罕见。',
    flavorText: 'License: PAID_USER',
    category: BuildingCategory.TECHNOCRACY,
    rarity: 'legendary',
    bonusType: 'cost_reduction',
    bonusValue: 0.05,
    dropChanceWeight: 5,
  },
  {
    id: 'btc_wallet_lost',
    name: 'wallet.dat',
    subtype: 'file',
    details: '256 KB',
    description: '一个来自2010年的比特币钱包文件。遗憾的是，你猜不出密码。',
    flavorText: 'Encryption: AES-256',
    category: BuildingCategory.SURVIVAL,
    rarity: 'mythic',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.FUNDS,
    bonusValue: 2.5,
    dropChanceWeight: 2,
  },
  {
    id: 'library_of_babel',
    name: '巴别图书馆索引.json',
    subtype: 'file',
    details: '1024 PB',
    description: '这里包含了所有可能被写出来的书，也包含这行无聊的描述。',
    flavorText: 'Index: Infinite',
    category: BuildingCategory.ARCHIVE,
    rarity: 'legendary',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.KNOWLEDGE,
    bonusValue: 1.3,
    dropChanceWeight: 3,
  },
  {
    id: 'cicada_pgp',
    name: '3301_signed_message.asc',
    subtype: 'file',
    details: '4 KB',
    description: '一条经过 PGP 签名的神秘信息。它不仅仅是文本，而是一个入口。',
    flavorText: 'Verification: VALID',
    category: BuildingCategory.ESOTERIC,
    rarity: 'rare',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.CODE,
    bonusValue: 0.2,
    dropChanceWeight: 8,
  },
  {
    id: 'jfk_magic_bullet',
    name: '弹道分析报告_63.pdf',
    subtype: 'file',
    details: '15 MB',
    description: '这份报告证明了子弹在空中转了三个弯。物理学不存在了。',
    flavorText: 'Classification: TOP SECRET',
    category: BuildingCategory.HISTORY,
    rarity: 'legendary',
    bonusType: 'luck',
    bonusValue: 1.1,
    dropChanceWeight: 4,
  }
];

// ==========================================
// PROCEDURAL DATA SOURCES
// ==========================================

export const PROCEDURAL_DATA = {
  common: {
    // 基础话题池（平凡）
    topics: [
      '猫咪护理', 'Linux发行版', 'N级火车模型', '多肉植物', 'UFO目击', '星球大战', 
      'Flash游戏', 'Winamp皮肤', '酸种面包', '飞蝇钓', '无线电', '稀有邮票',
      'Minecraft', '地平论', '本田思域', '生酮饮食', 'Java编程', '东方Project',
      '干墙修复', '降雨量统计', '过期优惠券', '噪音投诉', '监控录像',
      '人体工学', '打印机卡纸', '低钠盐', '假发保养', '混凝土',
      '下水道疏通', '公车时刻表', '超市传单', '税务审计', '指甲刀',
      '空调遥控器', '霉菌', '旧电池', '水印去除', '防脱发', '彩票走势',
      '二手车估价', '通马桶技巧', 'Excel快捷键', '办公室瑜伽'
    ],
    // 基础用户池
    users: [
      'admin', 'guest', 'webmaster', 'cool_guy_88', 'dark_angel', 'skater_boi', 
      'anime_fan_2000', 'sysadmin', 'root', 'user1234', 'xX_Shadow_Xx', 'Neo',
      'hackerman', 'l33t_hax0r', 'cat_lover', 'doge', 'john_doe', 'jane_doe', 
      'pizza_lover', 'noob_master', 'blue_screen', '404_brain', 'null_ptr',
      'Karen_from_HR', 'anon', 'throwaway_123', 'deleted_user', 'bot_01'
    ]
  },

  // --- FILE TEMPLATES (Generic) ---
  files: {
    document: {
      exts: ['.txt', '.doc', '.pdf', '.rtf', '.wps', '.md'],
      prefixes: ['未命名_', '简历_', '草稿_', '说明书_', '合同_', '笔记_', '作业_', '计划_', 'README_', 'TODO_'],
      templates: [
        "一份关于 {topic} 的文档，只有标题，正文是空的。",
        "文件头部损坏，无法预览。最后修改于 {year} 年。",
        "包含 {number} 页关于 {topic} 的法律免责声明。",
        "一份枯燥的 {year} 年度 {topic} 统计报表草稿。",
        "辞职信草稿，内容充满了对 {topic} 的抱怨。",
        "被 {user} 重命名了 {number} 次的文件，内容依然不明。",
        "一份未完成的 {topic} 教程，只写了第一章。",
        "看起来像是 {user} 的购物清单，里面混入了 {topic}。",
        "全是乱码，只有 '{topic}' 这个词清晰可见。"
      ]
    },
    image: {
      exts: ['.jpg', '.png', '.gif', '.bmp', '.tiff', '.webp'],
      prefixes: ['IMG_', 'DSC_', 'Scan_', 'Screenshot_', '未标题_', '头像_', '证据_', 'thumb_'],
      templates: [
        "分辨率极低的 {topic} 图片，甚至看不清轮廓 (320x240)。",
        "扫描件显示这是一张 {year} 年的披萨外卖传单。",
        "一张过曝的照片，拍摄的是 {user} 的 {topic}。",
        "看起来像是打印机的测试页扫描件。",
        "截图显示 {year} 年的桌面，壁纸是 {topic}。",
        "一个闪烁的 GIF，内容是旋转的 {topic}。",
        "图片元数据显示拍摄地点在南极洲，但内容是 {topic}。",
        "{user} 的自拍，背景里有一个模糊的 {topic}。"
      ]
    },
    data: {
      exts: ['.sql', '.csv', '.xls', '.json', '.xml', '.dat', '.mdb'],
      prefixes: ['db_backup_', 'users_', 'export_', 'log_', 'data_', 'finance_', 'list_', 'dump_'],
      templates: [
        "包含 {number} 条用户记录，但密码都是明文的 '123456'。",
        "一张关于 {topic} 的库存表，大部分物品数量为 0。",
        "泄露的 {year} 年交易记录，金额列全是负数。",
        "Excel表格，记录了 {user} 在 {year} 年的所有咖啡支出。",
        "字段名全是 'col1', 'col2' 等无意义的代号。",
        "包含大量 {user} 的登录尝试记录，全部失败。",
        "这是一个被 SQL 注入攻击后的残留数据片段。",
        "记录了 {number} 个被封禁的 IP 地址。",
        "关于 {topic} 的 JSON 数据，但是括号不匹配。"
      ]
    },
    log: {
      exts: ['.log', '.txt', '.history', '.err'],
      prefixes: ['chat_', 'irc_', 'syslog_', 'error_', 'debug_', 'msn_', 'access_'],
      templates: [
        "[{year}] <{user}>: 任何人？有人在吗？... (无人回应)",
        "系统日志显示 {year} 年发生了严重错误：{topic} not found。",
        "[{year}] <Admin>: 请不要在群里讨论 {topic}，这是最后一次警告。",
        "一段关于 {topic} 的激烈争吵，最后演变成了辱骂。",
        "<{user}> 发送了一个文件: 'virus.exe' (12KB)。",
        "[{year}] <{user}>: 为什么我的屏幕变成蓝色的了？",
        "服务器启动日志，但在加载 {topic} 模块时卡住了。",
        "一段无法解析的加密聊天记录。",
        "[{year}] Kernel panic: syncronizing {topic}..."
      ]
    },
    archive: {
      exts: ['.zip', '.rar', '.7z', '.tar.gz', '.exe', '.iso'],
      prefixes: ['setup_', 'crack_', 'backup_', 'game_', 'driver_', 'tool_', 'Full_'],
      templates: [
        "一个包含 {number} 个同名文件的压缩包，解压需要密码。",
        "文件名声称是游戏作弊器，但实际只是一个弹窗脚本。",
        "这可能是一个误报的病毒，或者只是一个损坏的屏保程序。",
        "安装程序在 {number}% 处报错并退出。",
        "光盘镜像文件，标签写着 '{topic} 2000'。",
        "压缩包内只有一个名为 'READ ME' 的文本文件，写着“不要打开”。"
      ]
    }
  },

  // --- BOOKMARKS (No URLs, just paths/titles) ---
  bookmarks: {
    prefixes: [
      '索引:', '目录:', '缓存:', '快照:', 'FTP:', 
      '[403]', '[500]', '镜像:', '备份:', '旧版:', '洋葱:', 'I2P:'
    ],
    titles: [
      'Public_HTML', 'Member_Area', 'Uploads', 'Cgi-bin', 'Images', 'Backup_2001',
      'Forum_Root', 'Wiki_Main', 'Guestbook_DB', 'Admin_Panel', 'Logs', 'Temp',
      'Hidden_Service', 'Private_Tracker', 'Mail_Spool'
    ],
    description_templates: [
      "服务器返回了 404 错误，但缓存中保留了标题。",
      "这是一个 {year} 年的目录索引，里面全是空文件夹。",
      "页面背景是刺眼的亮黄色，字体是红色的 Comic Sans。",
      "需要安装 RealPlayer 才能查看到任何内容。",
      "页面底部有一个访问计数器，显示你是第 {number} 位访客。",
      "包含大量滚动的文字跑马灯特效，内容是关于 {topic} 的。",
      "整个页面是一张巨大的切割图片，加载非常慢。",
      "提示：此页面使用了过期的 Java Applet。",
      "一个纯文本的目录列表，最后修改于 {year} 年。",
      "只有管理员权限才能查看此目录的完整内容。",
      "页面上唯一的元素是一个旋转的骷髅头 GIF。",
      "这是一个 {topic} 论坛的归档镜像，无法发帖。"
    ]
  }
};

// ==========================================
// TECH LORE INJECTIONS
// ==========================================
// When these techs are researched, NEW content is added to the randomization pools.
export const TECH_LORE_INJECTIONS: Record<string, {
    topics?: string[];
    prefixes?: string[]; // for files/bookmarks
    templates?: string[]; // Generic descriptions
}> = {
    // --- TIER 1 ---
    'cardboard_architecture': {
        topics: ['纸板结构力学', '防潮技巧', '城市拾荒地图', '流浪猫社会学'],
        templates: ["画在披萨盒背面的建筑蓝图。", "列出了哪个街区的垃圾箱里有最好的食物。"]
    },
    'ocr_basics': {
        topics: ['模糊的车牌', '扫描的收据', '手写日记', '古老报纸'],
        prefixes: ['OCR_', 'Scan_', 'Recognized_'],
        templates: ["OCR 识别错误率高达 40%，几乎无法阅读。", "扫描件的边缘有明显的手指遮挡痕迹。"]
    },
    'spam_algorithms': {
        topics: ['伟哥广告', '尼日利亚王子', '彩票中奖', '热辣单身主妇'],
        templates: ["这封邮件试图用糟糕的语法骗取你的信用卡号。", "标题是：‘RE: 你的 {topic} 到了’。"]
    },
    'railfan_logistics': {
        topics: ['废弃车站', '列车时刻表', '地铁隧道图', '机车引擎参数'],
        templates: ["一张标注了所有监控盲区的地铁线路图。", "记录了 {year} 年所有货运列车的延误时间。"]
    },

    // --- TIER 2 ---
    'magnet_fishing': {
        topics: ['生锈的左轮手枪', '二战勋章', '抛弃的保险箱', '河底自行车'],
        templates: ["这东西在水里泡了至少 {year} 年。", "上面覆盖着厚厚的藻类和藤壶。"]
    },
    'creepypasta_analysis': {
        topics: ['Slender Man', 'Jeff the Killer', 'SCP-173', '微笑狗', '紫苑镇音调'],
        templates: ["这是一个关于 {topic} 的诅咒图片，据说看过的人都死了。", "音频倒放后能听到‘救命’的声音。"]
    },
    'steganography': {
        topics: ['隐藏的Zip文件', 'LSB隐写', '频谱图中的人脸', '不可见水印'],
        prefixes: ['hidden_', 'steg_', 'carrier_'],
        templates: ["这张 {topic} 图片的文件尾部附加了一串乱码。", "如果你调整对比度，能在阴影里看到字。"]
    },
    'vs_debating': {
        topics: ['孙悟空 vs 超人', '一拳超人', '克苏鲁战力', '多元宇宙级'],
        templates: ["一份长达 50 页的文档，论证 {topic} 的拳头能摧毁几个星系。", "充满了复杂的数学公式，只为了证明这个角色比光速快。"]
    },
    'nutrient_paste': {
        topics: ['藻类培养', '维生素粉末', '氨基酸配比', '生存口粮'],
        templates: ["一份 {topic} 的配方，备注写着‘味道像土，但能活命’。", "记录了 {user} 连续 30 天只吃流食的身体数据。"]
    },

    // --- TIER 3 ---
    'conspiracy_101': {
        topics: ['登月伪造', '罗斯威尔', '51区', '共济会握手', '光明会'],
        templates: ["证明了 {topic} 其实是政府的掩护行动。", "照片里的阴影角度完全不对。"]
    },
    'dead_internet_theory': {
        topics: ['AI 互评', '僵尸流量', '算法回声', '死区'],
        templates: ["这篇帖子的所有 500 条回复看起来都是同一个 AI 生成的。", "虽然有几百万次点击，但没有一个真人评论。"]
    },
    'magic_bullet_theory': {
        topics: ['肯尼迪遇刺', '雨伞人', '草丘', '弹道凝胶'],
        templates: ["逐帧分析了 Zapruder 影片。", "这份弹道报告被涂黑了大部分内容。"]
    },

    // --- TIER 4 ---
    'mud_flood': {
        topics: ['鞑靼利亚帝国', '被掩埋的地下室', '巨人骨骼', '免费能源塔'],
        templates: ["照片显示这座建筑的一楼窗户在地下。", "证明了我们在 1800 年代倒退了技术。"]
    },
    'remote_viewing': {
        topics: ['火星基地', '苏联潜艇位置', '木星环', '密封信封内容'],
        prefixes: ['coordinate_', 'target_', 'session_'],
        templates: ["受试者画出了 {topic}，尽管他从未离开过房间。", "坐标指向了南极洲的冰层之下。"]
    },
    'deep_state_mapping': {
        topics: ['彼尔德伯格会议', '波希米亚树林', '黑色预算', '旋转门'],
        templates: ["一张连接了所有大公司董事会的复杂图表。", "这份名单上的人控制了全球 80% 的 {topic}。"]
    },
    'googology': {
        topics: ['葛立恒数', 'TREE(3)', 'Rayo数', '阿列夫零'],
        templates: ["这个数字大到无法在宇宙中写下，否则会坍缩成黑洞。", "关于 {topic} 的数学证明，大部分人看一眼就会发疯。"]
    },

    // --- TIER 5 & 6 ---
    'atlantean_knowledge': {
        topics: ['奥利哈刚', '水晶能源', '沉没大陆', '维摩那'],
        prefixes: ['tablet_', 'glyph_', 'atlantis_'],
        templates: ["这种几何结构不符合已知的物理法则。", "它在微微振动，发出低频嗡嗡声。"]
    },
    'neurolinguistic_programming': {
        topics: ['触发词', '锚定效应', '催眠脚本', '记忆植入'],
        templates: ["读这段文字让你感到莫名的恐惧。", "这是一个用来在潜意识中植入 {topic} 概念的音频。"]
    },
    'aklo_language': {
        topics: ['不可名状', '非欧几何', '疯狂山脉', '黄衣之王'],
        templates: ["这些文字似乎在纸上蠕动。", "试图阅读它会导致偏头痛和流鼻血。"]
    },
    'simulation_hypothesis': { // Hypothetical check if you add this tech
        topics: ['渲染错误', '既视感', '普朗克长度', '上帝模式'],
        templates: ["这不仅仅是 {topic}，这是它的 3D 模型线框图。", "如果你盯着它看太久，现实会开始闪烁。"]
    }
};
