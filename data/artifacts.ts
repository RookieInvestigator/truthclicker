
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
    history: '这不仅仅是一个授权文件，它是对某种古老荣誉体系的致敬。在一个破解软件横行的时代，拥有这个文件象征着你是互联网的贵族，一个愿意为免费午餐付费的道德楷模。传说中，拥有此文件的人解压速度会快 0.01%。',
    flavorText: 'License: PAID_USER',
    category: BuildingCategory.TECHNOCRACY,
    rarity: 'legendary',
    bonusType: 'cost_reduction',
    bonusValue: 0.03, // Nerfed from 0.05
    dropChanceWeight: 5,
    linkedProceduralType: 'archive'
  },
  {
    id: 'btc_wallet_lost',
    name: 'wallet.dat',
    subtype: 'file',
    details: '256 KB',
    description: '一个来自2010年的比特币钱包文件。遗憾的是，你猜不出密码。',
    history: '这是无数寻宝者的圣杯。硬盘被丢进垃圾填埋场的故事在论坛上流传，而你手中握着的正是这样一个被遗忘的宝藏。里面的比特币如果还在，足够买下一个小国。但没有密码，它只是 256KB 的加密痛苦。',
    flavorText: 'Encryption: AES-256',
    category: BuildingCategory.SURVIVAL,
    rarity: 'mythic',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.FUNDS,
    bonusValue: 0.05, // Nerfed from 2.5
    dropChanceWeight: 2,
    linkedProceduralType: 'data'
  },
  {
    id: 'library_of_babel',
    name: '巴别图书馆索引.json',
    subtype: 'file',
    details: '1024 PB',
    description: '这里包含了所有可能被写出来的书，也包含这行无聊的描述。',
    history: '豪尔赫·路易斯·博尔赫斯的噩梦成为了现实。这个 JSON 文件不仅索引了已经写出的书，还索引了所有尚未写出的书。你的出生证明、你的死亡日期、明天的彩票号码……它们都在这里，只是淹没在无穷无尽的乱码海洋中。',
    flavorText: 'Index: Infinite',
    category: BuildingCategory.ARCHIVE,
    rarity: 'legendary',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.KNOWLEDGE,
    bonusValue: 0.03, // Nerfed from 1.3
    dropChanceWeight: 3,
    linkedProceduralType: 'data'
  },
  {
    id: 'cicada_pgp',
    name: '3301_signed_message.asc',
    subtype: 'file',
    details: '4 KB',
    description: '一条经过 PGP 签名的神秘信息。它不仅仅是文本，而是一个入口。',
    history: '2012年，一只死蝉的图片开启了互联网历史上最复杂的解谜游戏。这个文件是由 Cicada 3301 的私钥签名的，证明了它的真实性。它不仅仅是一段代码，它是一张邀请函，通往一个只有高智商精英才能进入的隐秘世界。',
    flavorText: 'Verification: VALID',
    category: BuildingCategory.ESOTERIC,
    rarity: 'rare',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.CODE,
    bonusValue: 0.02, // Nerfed from 0.2
    dropChanceWeight: 8,
    linkedProceduralType: 'image'
  },
  {
    id: 'jfk_magic_bullet',
    name: '弹道分析报告_63.pdf',
    subtype: 'file',
    details: '15 MB',
    description: '这份报告证明了子弹在空中转了三个弯。物理学不存在了。',
    history: '沃伦委员会报告的未删减附录。这颗著名的“魔弹”不仅造成了七处伤口，甚至在飞行过程中似乎拥有了自己的意识。这份文件从物理学角度论证了当时必然存在第二名枪手，或者……那颗子弹本身就是一种异常技术。',
    flavorText: 'Classification: TOP SECRET',
    category: BuildingCategory.HISTORY,
    rarity: 'legendary',
    bonusType: 'luck',
    bonusValue: 0.05, // Nerfed from 1.1
    dropChanceWeight: 4,
    linkedProceduralType: 'document'
  },
  {
    id: 'templeos_iso',
    name: 'TempleOS.iso',
    subtype: 'file',
    details: '17 MB',
    description: 'Terry A. Davis 编写的上帝操作系统。只支持 640x480 16色。',
    history: '特里·戴维斯花在精神病院和编程上的时间一样多。他声称上帝亲自指导他编写了这个操作系统。虽然它看起来像 Commodore 64 时代的产物，但其底层的 HolyC 编译器和随机数生成器似乎真的能连接到某种高维度的神圣意志。',
    flavorText: 'Divine Intellect: ACTIVE',
    category: BuildingCategory.ESOTERIC,
    rarity: 'legendary',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.CODE,
    bonusValue: 0.03, // Nerfed from 1.5
    dropChanceWeight: 3,
    linkedProceduralType: 'archive'
  },
  {
    id: 'snowden_slide',
    name: 'PRISM_Overview.ppt',
    subtype: 'file',
    details: '4 MB',
    description: '一张详细描述了 NSA 监控项目的幻灯片。历史的转折点。',
    history: '这就是那张改变世界的 PPT。它证实了棱镜计划的存在：政府正在监听互联网的主干。在看到这个文件之前，大规模监控只是阴谋论；看到它之后，这是冷酷的现实。持有它本身就是一种叛国行为。',
    flavorText: 'Classification: TOP SECRET // NOFORN',
    category: BuildingCategory.SUBVERSION,
    rarity: 'rare',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.TRUTH,
    bonusValue: 0.01, // Nerfed from 0.5
    dropChanceWeight: 6,
    linkedProceduralType: 'document'
  },
  {
    id: 'voynich_scan',
    name: 'Voynich_Page_78r.jpg',
    subtype: 'file',
    details: '22 MB',
    description: '伏尼契手稿的高清扫描件。画着不存在的植物和裸体浴女。',
    history: '数百年来，无数密码学家、语言学家甚至 AI 都试图破解这本“世界上最神秘的书”。这页扫描件展示了那种著名的、无法在地球植物学分类中找到的奇怪植物。有人说它是中世纪的恶作剧，有人说它是炼金术指南，还有人说它是来自平行宇宙的植物图鉴。',
    flavorText: 'Language: Unknown',
    category: BuildingCategory.HISTORY,
    rarity: 'rare',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.ANCIENT_WISDOM,
    bonusValue: 0.02, // Nerfed from 0.3
    dropChanceWeight: 7,
    linkedProceduralType: 'image'
  },
  {
    id: 'half_life_3_alpha',
    name: 'hl3_build_0.0.1.exe',
    subtype: 'file',
    details: '45 GB',
    description: '它真的存在。不，等等，这只是一个非常复杂的木马。或者...？',
    history: '互联网上最大的都市传说之一。每隔几年就会有所谓的“泄露版”出现。这个文件体积巨大，包含着似乎是起源 2 引擎的早期版本。启动它，你会看到那个著名的 G-Man 站在一片紫黑色的格子纹理中对你微笑。然后电脑蓝屏。真相与谎言叠加在一起。',
    flavorText: 'Version: Alpha',
    category: BuildingCategory.INTERNET_CULTURE,
    rarity: 'mythic',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.PLEASURE,
    bonusValue: 0.05, // Nerfed from 5.0
    dropChanceWeight: 1,
    linkedProceduralType: 'archive'
  },
  {
    id: 'stuxnet_source',
    name: 'stuxnet.c',
    subtype: 'file',
    details: '150 KB',
    description: '世界上第一个数字武器的源代码。专门用于摧毁离心机。',
    history: '震网病毒开启了网络战的新纪元。它不窃取数据，它造成物理破坏。这段优雅而致命的代码专门寻找西门子 PLC 控制器，让离心机转速失控直到自我解体。持有这段源码，你就拥有了摧毁工业设施的核按钮。',
    flavorText: 'Target: SCADA Systems',
    category: BuildingCategory.TECHNOCRACY,
    rarity: 'legendary',
    bonusType: 'click_power',
    bonusValue: 0.05, // Nerfed from 2.0
    dropChanceWeight: 3,
    linkedProceduralType: 'code'
  },
  // --- NEW UNIQUES ---
  {
    id: 'silk_road_backup',
    name: 'silk_road_server_img.dd',
    subtype: 'file',
    details: '20 GB',
    description: '臭名昭著的暗网黑市服务器镜像。包含了所有交易记录。',
    history: '在 FBI 查封之前的一瞬间生成的快照。里面记录了数百万笔比特币交易，涵盖了从非法药物到伪造护照的一切。DPR 的私钥或许就藏在某个角落。这不仅是犯罪证据，也是自由意志主义者乌托邦破灭的墓碑。',
    flavorText: 'Status: SEIZED',
    category: BuildingCategory.CAPITAL,
    rarity: 'legendary',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.FUNDS,
    bonusValue: 0.03, // Nerfed from 1.5
    dropChanceWeight: 2,
    linkedProceduralType: 'data'
  },
  {
    id: 'ibm_5100_manual',
    name: 'IBM_5100_Ref.pdf',
    subtype: 'file',
    details: '8 MB',
    description: '时间旅行者 John Titor 指名寻找的设备手册。',
    history: '2000年，一位名为 John Titor 的时间旅行者出现在论坛上，声称他回到过去是为了寻找一台 IBM 5100 电脑。只有这台电脑具备调试 2038 年 Unix 时间溢出问题的独特功能。这份手册详细记载了该机器未公开的 APL 和 BASIC 切换指令。',
    flavorText: 'Timeline: Diverged',
    category: BuildingCategory.TECHNOCRACY,
    rarity: 'rare',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.OPS,
    bonusValue: 0.02, // Nerfed from 0.8
    dropChanceWeight: 4,
    linkedProceduralType: 'document'
  },
  {
    id: 'cicada_liber_primus',
    name: 'Liber_Primus_Pages.zip',
    subtype: 'file',
    details: '120 MB',
    description: 'Cicada 3301 的圣书。大部分页面至今未被破译。',
    history: '这是互联网上最深奥的谜题的核心。这本书用符文写成，充满了哲学、数论和神秘主义。虽然前几页已被社区合力破解，但剩余的部分依然是一堵高墙。据说，完全解读这本书就能获得“开悟”，或者被吸纳进那个影子组织。',
    flavorText: 'Runes: Encrypted',
    category: BuildingCategory.ESOTERIC,
    rarity: 'mythic',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.KNOWLEDGE,
    bonusValue: 0.05, // Nerfed from 2.0
    dropChanceWeight: 1,
    linkedProceduralType: 'archive'
  },
  {
    id: 'iloveyou_virus',
    name: 'LOVE-LETTER-FOR-YOU.TXT.vbs',
    subtype: 'file',
    details: '5 KB',
    description: '2000年感染了全球 10% 联网电脑的蠕虫病毒原件。',
    history: '在那个纯真的年代，人们还会轻易打开标题为“情书”的邮件附件。这个简单的 VBScript 脚本造成了数十亿美元的损失。它象征着互联网童年的终结，那是我们最后一次如此轻易地相信陌生人。',
    flavorText: 'Subject: I Love You',
    category: BuildingCategory.INTERNET_CULTURE,
    rarity: 'rare',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.SPAM,
    bonusValue: 0.03, // Nerfed from 2.0
    dropChanceWeight: 5,
    linkedProceduralType: 'code'
  },
  {
    id: 'max_headroom_mask',
    name: 'Incident_1987_Mask.obj',
    subtype: 'file',
    details: '45 MB',
    description: '1987 年电视信号劫持事件中那个人使用的面具的 3D 扫描。',
    history: '这是电视史上最著名的未解之谜。一个人戴着 Max Headroom 的面具切断了芝加哥电视台的信号，说了一堆语无伦次的话。尽管 FCC 和 FBI 展开了大规模调查，但从未找到肇事者。这个面具的数字模型似乎保留了当晚的某种混沌能量。',
    flavorText: 'Signal: Intrusion',
    category: BuildingCategory.COUNTER_CULTURE,
    rarity: 'legendary',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.CULTURE,
    bonusValue: 0.03, // Nerfed from 1.2
    dropChanceWeight: 3,
    linkedProceduralType: 'image'
  },
  {
    id: 'backrooms_original',
    name: 'Level_0_Original.raw',
    subtype: 'file',
    details: '24 MB',
    description: '那张著名的黄色房间照片的原始文件。元数据显示它拍摄于 2002 年。',
    history: '如果一定要给“阈限空间”找一个原点，那就是这张照片。单调的黄色壁纸，潮湿的地毯味，嗡嗡作响的荧光灯。这张 RAW 格式照片包含了拍摄时的所有光照信息，证明这个地方是真实存在的。如果你盯着它看太久，你会感觉自己在往下掉。',
    flavorText: 'Location: Noclip',
    category: BuildingCategory.FOLKLORE,
    rarity: 'mythic',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.LORE,
    bonusValue: 0.05, // Nerfed from 1.5
    dropChanceWeight: 2,
    linkedProceduralType: 'image'
  },
  {
    id: 'a858_log',
    name: 'A858_Hex_Dump.txt',
    subtype: 'file',
    details: '500 MB',
    description: 'Reddit 神秘板块 r/A858 的所有十六进制代码备份。',
    history: '多年来，一个名为 A858DE45F56D9BC9 的账号不断发布看似随机的十六进制字符串。成千上万的解密者试图破解它。有人说它是僵尸网络的控制码，有人说它是外星信号。直到板块私有化，只有极少部分被解码为 ASCII 艺术，真相依然成谜。',
    flavorText: 'Pattern: Unknown',
    category: BuildingCategory.NETWORK,
    rarity: 'rare',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.CODE,
    bonusValue: 0.02, // Nerfed from 0.5
    dropChanceWeight: 6,
    linkedProceduralType: 'log'
  },
  {
    id: 'markovian_parallax',
    name: 'Markovian_Parallax_Denigrate.msg',
    subtype: 'file',
    details: '2 KB',
    description: '来自 1996 年 Usenet 的神秘信息。互联网最早的谜团之一。',
    history: '在 90 年代中期的 Usenet 新闻组中，这串毫无意义的单词组合引发了恐慌。虽然看起来像是简单的马尔可夫链生成的垃圾文本，但有人将其与 Susan Lindauer（一位被控通敌的记者）联系起来，认为这是冷战后遗留的间谍数字电台在互联网上的回响。',
    flavorText: 'Origin: Usenet',
    category: BuildingCategory.FOLKLORE,
    rarity: 'rare',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.LORE,
    bonusValue: 0.02, // Nerfed from 0.4
    dropChanceWeight: 7,
    linkedProceduralType: 'document'
  },
  {
    id: 'satoshi_genesis',
    name: 'Genesis_Block.log',
    subtype: 'file',
    details: '1 KB',
    description: '比特币创世区块的原始日志，包含中本聪的留言。',
    history: '2009年1月3日，中本聪挖出了比特币的第一个区块，并在其中留下了不可磨灭的信息：“The Times 03/Jan/2009 Chancellor on brink of second bailout for banks.” 这不仅是一个时间戳，更是一份政治宣言，标志着去中心化金融革命的开始。',
    flavorText: 'Nonce: 2083236893',
    category: BuildingCategory.CAPITAL,
    rarity: 'mythic',
    bonusType: 'cost_reduction',
    bonusValue: 0.05, // Nerfed from 0.1 (Max 5% global cost reduction is reasonable)
    dropChanceWeight: 1,
    linkedProceduralType: 'data'
  },
  {
    id: 'jeff_original',
    name: 'jeff.jpg',
    subtype: 'file',
    details: '88 KB',
    description: '杰夫杀手的原始未编辑照片。比网络上流传的版本更令人不安。',
    history: '这张照片是互联网 creepypasta 的基石之一。关于它的起源众说纷纭，有人说是经过 Photoshop 处理的女性照片，有人说是戴着面具的人。但这个原始文件显示，那张苍白的脸和没有眼睑的眼睛，似乎不是编辑出来的。看着它，你会感到一种原始的被捕食的恐惧。',
    flavorText: 'Go to Sleep',
    category: BuildingCategory.FOLKLORE,
    rarity: 'rare',
    bonusType: 'production_multiplier',
    targetResource: ResourceType.PANIC,
    bonusValue: 0.02, // Nerfed from 0.8
    dropChanceWeight: 5,
    linkedProceduralType: 'image'
  }
];

export const PROCEDURAL_DATA = {
  common: {
    // 基础话题池（平凡 -> 离奇）
    topics: [
      '猫咪护理', 'Linux发行版', 'N级火车模型', '多肉植物', 'UFO目击', '星球大战', 
      'Flash游戏', 'Winamp皮肤', '酸种面包', '飞蝇钓', '无线电', '稀有邮票',
      'Minecraft', '地平论', '本田思域', '生酮饮食', 'Java编程', '东方Project',
      '干墙修复', '降雨量统计', '过期优惠券', '噪音投诉', '监控录像',
      '人体工学', '打印机卡纸', '低钠盐', '假发保养', '混凝土',
      '下水道疏通', '公车时刻表', '超市传单', '税务审计', '指甲刀',
      '空调遥控器', '霉菌', '旧电池', '水印去除', '防脱发', '彩票走势',
      '二手车估价', '通马桶技巧', 'Excel快捷键', '办公室瑜伽',
      '量子波动', '水下焊接', '工业事故', '被遗忘的神', '真菌网络', 
      '地下室的门', '夜间广播', '失踪人口', '奇怪的梦', '重复的数字'
    ],
    // 基础用户池
    users: [
      'admin', 'guest', 'webmaster', 'cool_guy_88', 'dark_angel', 'skater_boi', 
      'anime_fan_2000', 'sysadmin', 'root', 'user1234', 'xX_Shadow_Xx', 'Neo',
      'hackerman', 'l33t_hax0r', 'cat_lover', 'doge', 'john_doe', 'jane_doe', 
      'pizza_lover', 'noob_master', 'blue_screen', '404_brain', 'null_ptr',
      'Karen_from_HR', 'anon', 'throwaway_123', 'deleted_user', 'bot_01',
      'Watcher', 'Nobody', 'System', 'Ghost', 'Echo', 'Oracle'
    ]
  },

  // --- FILE TEMPLATES (Generic) ---
  files: {
    document: {
      exts: ['.txt', '.doc', '.pdf', '.rtf', '.wps', '.md', '.nfo'],
      prefixes: ['未命名_', '简历_', '草稿_', '说明书_', '合同_', '笔记_', '作业_', '计划_', 'README_', 'TODO_', 'CONFIDENTIAL_', 'MANIFESTO_'],
      templates: [
        "一份关于 {topic} 的文档，只有标题，正文是空的。",
        "文件头部损坏，无法预览。最后修改于 {year} 年。",
        "包含 {number} 页关于 {topic} 的法律免责声明。",
        "一份枯燥的 {year} 年度 {topic} 统计报表草稿。",
        "辞职信草稿，内容充满了对 {topic} 的抱怨。",
        "被 {user} 重命名了 {number} 次的文件，内容依然不明。",
        "一份未完成的 {topic} 教程，只写了第一章。",
        "看起来像是 {user} 的购物清单，里面混入了 {topic}。",
        "全是乱码，只有 '{topic}' 这个词清晰可见。",
        "一份 {year} 年的 {topic} 研讨会会议纪要。",
        "针对 {topic} 的投诉信草稿，措辞非常激烈。",
        "列出了 {number} 个痛恨 {topic} 的理由。",
        "一篇关于 {topic} 的同人文，主角是 {user}。",
        "详细记录了 {topic} 的历史价格波动。",
        "警告：{topic} 可能会导致严重的副作用。",
        "这是给未来的 {user} 的一封信，关于 {topic}。"
      ]
    },
    image: {
      exts: ['.jpg', '.png', '.gif', '.bmp', '.tiff', '.webp', '.svg'],
      prefixes: ['IMG_', 'DSC_', 'Scan_', 'Screenshot_', '未标题_', '头像_', '证据_', 'thumb_', 'render_', 'CAM_'],
      templates: [
        "分辨率极低的 {topic} 图片，甚至看不清轮廓 (320x240)。",
        "扫描件显示这是一张 {year} 年的披萨外卖传单。",
        "一张过曝的照片，拍摄的是 {user} 的 {topic}。",
        "看起来像是打印机的测试页扫描件。",
        "截图显示 {year} 年的桌面，壁纸是 {topic}。",
        "一个闪烁的 GIF，内容是旋转的 {topic}。",
        "图片元数据显示拍摄地点在南极洲，但内容是 {topic}。",
        "{user} 的自拍，背景里有一个模糊的 {topic}。",
        "一张 {topic} 的高清渲染图，但光影效果很假。",
        "被裁剪过的图片，缺失了 {topic} 的关键部分。",
        "夜视摄像头拍摄到的 {topic}，只有两只发光的眼睛。",
        "一张 {year} 年的家庭合影，所有人的脸都被 {topic} 遮住了。",
        "显微镜下的 {topic} 切片，看起来像外星地貌。",
        "一张 {topic} 的设计草图，旁边有咖啡渍。"
      ]
    },
    data: {
      exts: ['.sql', '.csv', '.xls', '.json', '.xml', '.dat', '.mdb', '.yaml'],
      prefixes: ['db_backup_', 'users_', 'export_', 'log_', 'data_', 'finance_', 'list_', 'dump_', 'config_', 'save_'],
      templates: [
        "包含 {number} 条用户记录，但密码都是明文的 '123456'。",
        "一张关于 {topic} 的库存表，大部分物品数量为 0。",
        "泄露的 {year} 年交易记录，金额列全是负数。",
        "Excel表格，记录了 {user} 在 {year} 年的所有咖啡支出。",
        "字段名全是 'col1', 'col2' 等无意义的代号。",
        "包含大量 {user} 的登录尝试记录，全部失败。",
        "这是一个被 SQL 注入攻击后的残留数据片段。",
        "记录了 {number} 个被封禁的 IP 地址。",
        "关于 {topic} 的 JSON 数据，但是括号不匹配。",
        "看起来是 {topic} 的哈希表，无法逆向。",
        "一组 {year} 年的气象数据，专注于 {topic}。",
        "配置文件，将 {topic} 设置为 'DISABLED'。",
        "游戏存档，{user} 已经在 {topic} 上花费了 {number} 小时。",
        "一份加密的联系人列表，备注里提到了 {topic}。"
      ]
    },
    log: {
      exts: ['.log', '.txt', '.history', '.err', '.out'],
      prefixes: ['chat_', 'irc_', 'syslog_', 'error_', 'debug_', 'msn_', 'access_', 'console_'],
      templates: [
        "[{year}] <{user}>: 任何人？有人在吗？... (无人回应)",
        "系统日志显示 {year} 年发生了严重错误：{topic} not found。",
        "[{year}] <Admin>: 请不要在群里讨论 {topic}，这是最后一次警告。",
        "一段关于 {topic} 的激烈争吵，最后演变成了辱骂。",
        "<{user}> 发送了一个文件: 'virus.exe' (12KB)。",
        "[{year}] <{user}>: 为什么我的屏幕变成蓝色的了？",
        "服务器启动日志，但在加载 {topic} 模块时卡住了。",
        "一段无法解析的加密聊天记录。",
        "[{year}] Kernel panic: syncronizing {topic}...",
        "自动化脚本每隔 5 秒尝试连接 {topic}，全部超时。",
        "<{user}>: 我发誓我昨晚看到了 {topic}。",
        "[{year}] Warning: {topic} temperature critical.",
        "聊天记录中断，最后一条消息是 '它来了'。",
        "调试信息显示 {topic} 的内存泄漏导致了崩溃。"
      ]
    },
    archive: {
      exts: ['.zip', '.rar', '.7z', '.tar.gz', '.exe', '.iso', '.dmg'],
      prefixes: ['setup_', 'crack_', 'backup_', 'game_', 'driver_', 'tool_', 'Full_', 'Project_'],
      templates: [
        "一个包含 {number} 个同名文件的压缩包，解压需要密码。",
        "文件名声称是游戏作弊器，但实际只是一个弹窗脚本。",
        "这可能是一个误报的病毒，或者只是一个损坏的屏保程序。",
        "安装程序在 {number}% 处报错并退出。",
        "光盘镜像文件，标签写着 '{topic} 2000'。",
        "压缩包内只有一个名为 'READ ME' 的文本文件，写着“不要打开”。",
        "似乎是 {user} 的整个 'My Documents' 文件夹备份。",
        "包含 {number} 个版本的 {topic} 驱动程序。",
        "一个自解压文件，运行后会播放 {topic} 的音效。",
        "名为 '{topic}_final_v2_real_final.zip' 的项目文件。"
      ]
    },
    code: { // NEW for Source Code items
        exts: ['.c', '.py', '.js', '.ts', '.go', '.rb', '.asm'],
        prefixes: ['main_', 'test_', 'hack_', 'script_', 'exploit_', 'bot_'],
        templates: [
            "一段乱糟糟的 {topic} 脚本，没有注释。",
            "看起来是复制粘贴自 StackOverflow 的代码。",
            "包含硬编码密码的源文件。",
            "一个死循环，会不断打印 '{topic}'。",
            "试图连接到暗网节点的 Python 脚本。"
        ]
    }
  },

  // --- NEW TYPES ---
  hardware: {
      names: ['损坏的内存条', '烧毁的 CPU', '古董显卡', '机械硬盘碟片', '软盘驱动器', 'SCSI转接卡', '以太网终结器', '声霸卡', '3dfx Voodoo', '轨迹球鼠标'],
      templates: [
          "金手指部分有明显的氧化痕迹。可能还能用。",
          "闻起来有股焦糊味。电容已经爆浆了。",
          "标签上写着 '{topic} 专用'，手写字迹模糊。",
          "这块电路板上的布线看起来像是一个迷宫。",
          "一枚 {year} 年生产的芯片，针脚歪了。",
          "这东西比现在的手机还要重。军工级做工。",
          "不知道用途的接口，看起来像是某种专有协议。",
          "上面粘着 {user} 的口香糖。",
          "风扇叶片上积满了灰尘，必须用压缩空气清理。",
          "这不仅是硬件，这是 {year} 年的梦想尸体。"
      ]
  },
  media: {
      names: ['VHS 录像带', '3.5寸软盘', '刻录 CD-R', 'MiniDisc', '磁带', 'ZIP 驱动盘', '打孔卡', '幻灯片转盘'],
      templates: [
          "标签上写着“{topic} - 请勿播放”，字迹潦草。",
          "光盘表面划痕严重，不知道能不能读出数据。",
          "一盘混音磁带，包含了 {year} 年的所有流行金曲。",
          "这盘录像带的防抹写滑块被贴上了胶带。",
          "里面似乎存储了 {topic} 的安装程序。",
          "一张贴着骷髅头贴纸的软盘，容量只有 1.44MB。",
          "播放时会听到令人不安的背景噪音。",
          "看起来像是 {user} 的个人备份。",
          "盒子里并没有光盘，只有一张写着密码的纸条。",
          "这盘磁带在 {topic} 部分被消磁了。"
      ]
  },
  creature: {
      names: ['未知的毛发', '干燥的粘液', '奇怪的鳞片', '琥珀中的昆虫', '培养皿样本', '石化骨骼', '脱落的牙齿', '真菌孢子'],
      templates: [
          "DNA 分析显示它不属于地球上任何已知物种。",
          "它在紫外线下会发出微弱的荧光。",
          "这是 {topic} 留下的痕迹？还是某种突变的老鼠？",
          "样本在培养皿中缓慢移动，即使没有营养源。",
          "闻起来像臭氧和 {topic} 的混合物。",
          "传说中 {user} 在下水道里发现过这东西。",
          "它似乎对无线电波有反应，随着信号颤动。",
          "这绝对不是宠物的毛发。太粗糙了。",
          " touching it causes a mild tingling sensation.",
          "这块骨头上刻着微小的符文。"
      ]
  },
  signal: {
      names: ['数字电台录音', 'SSTV 图像', '莫尔斯电码', '白噪音样本', '来自深空的脉冲', '加密语音', '鲸歌', '地下震动波形'],
      templates: [
          "一段循环播放数字 {number} 的录音。声音毫无感情。",
          "解调后的音频听起来像是 {topic} 的名字。",
          "频谱图中隐藏着 {user} 的头像。",
          "这不仅是噪音，这是一种数学语言。",
          "录音背景里有微弱的呼吸声。",
          "信号源似乎在移动，速度极快。",
          "这段莫尔斯电码拼写出了 '{topic}'。",
          "来自 {year} 年的广播，但在当时这个频段并未启用。",
          "听久了会让人感到头晕恶心。",
          "它在重复同一句话：“由于 {topic}，系统已关闭。”"
      ]
  },

  // --- BOOKMARKS (No URLs, just paths/titles) ---
  bookmarks: {
    prefixes: [
      '索引:', '目录:', '缓存:', '快照:', 'FTP:', 
      '[403]', '[500]', '镜像:', '备份:', '旧版:', '洋葱:', 'I2P:', 'Intranet:'
    ],
    titles: [
      'Public_HTML', 'Member_Area', 'Uploads', 'Cgi-bin', 'Images', 'Backup_2001',
      'Forum_Root', 'Wiki_Main', 'Guestbook_DB', 'Admin_Panel', 'Logs', 'Temp',
      'Hidden_Service', 'Private_Tracker', 'Mail_Spool', 'Confidential', 'Do_Not_Delete'
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
      "这是一个 {topic} 论坛的归档镜像，无法发帖。",
      "网站已被 FBI 查封的通知页面。",
      "一个正在建设中的页面，有一个挖掘工人的动图。",
      "重定向循环，最终指向了 {topic}。",
      "页面的源代码里藏着一段关于 {user} 的注释。"
    ]
  }
};

// ==========================================
// TECH LORE INJECTIONS
// ==========================================
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
