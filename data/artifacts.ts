
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
];

// ==========================================
// PROCEDURAL DATA SOURCES
// ==========================================

export const PROCEDURAL_DATA = {
  common: {
    topics: [
      '猫咪护理', 'Linux发行版', 'N级火车模型', '多肉植物', 'UFO目击', '星球大战', 
      'Flash游戏', 'Winamp皮肤', '酸种面包', '飞蝇钓', '无线电', '稀有邮票',
      'Minecraft', '地平论', '本田思域', '生酮饮食', 'Java编程', '东方Project',
      '干墙修复', '降雨量统计', '过期优惠券', '噪音投诉', '监控录像',
      '人体工学', '打印机卡纸', '低钠盐', '假发保养', '混凝土',
      '下水道疏通', '公车时刻表', '超市传单', '税务审计', '指甲刀',
      '空调遥控器', '霉菌', '旧电池', '水印去除', '防脱发'
    ],
    users: [
      'admin', 'guest', 'webmaster', 'cool_guy_88', 'dark_angel', 'skater_boi', 
      'anime_fan_2000', 'sysadmin', 'root', 'user1234', 'xX_Shadow_Xx', 'Neo',
      'hackerman', 'l33t_hax0r', 'cat_lover', 'doge', 'john_doe', 'jane_doe', 
      'pizza_lover', 'noob_master', 'blue_screen', '404_brain', 'null_ptr'
    ]
  },

  // --- FILE CONTENT TYPES (Ensures extension matches description) ---
  files: {
    // 1. Documents (Text based)
    document: {
      exts: ['.txt', '.doc', '.pdf', '.rtf', '.wps'],
      prefixes: ['未命名_', '简历_', '草稿_', '说明书_', '合同_', '笔记_', '作业_', '计划_'],
      templates: [
        "一份关于 {topic} 的文档，只有标题，正文是空的。",
        "文件头部损坏，无法预览。最后修改于 {year} 年。",
        "包含 {number} 页关于 {topic} 的法律免责声明。",
        "一份枯燥的 {year} 年度 {topic} 统计报表草稿。",
        "辞职信草稿，内容充满了对 {topic} 的抱怨。",
        "被 {user} 重命名了 {number} 次的文件，内容依然不明。",
        "一份未完成的 {topic} 教程，只写了第一章。"
      ]
    },
    // 2. Images
    image: {
      exts: ['.jpg', '.png', '.gif', '.bmp', '.tiff'],
      prefixes: ['IMG_', 'DSC_', 'Scan_', 'Screenshot_', '未标题_', '头像_', '证据_'],
      templates: [
        "分辨率极低的 {topic} 图片，甚至看不清轮廓 (320x240)。",
        "扫描件显示这是一张 {year} 年的披萨外卖传单。",
        "一张过曝的照片，拍摄的是 {user} 的 {topic}。",
        "看起来像是打印机的测试页扫描件。",
        "截图显示 {year} 年的桌面，壁纸是 {topic}。",
        "一个闪烁的 GIF，内容是旋转的 {topic}。"
      ]
    },
    // 3. Data / Database (Formerly Database Type)
    data: {
      exts: ['.sql', '.csv', '.xls', '.json', '.xml', '.dat', '.mdb'],
      prefixes: ['db_backup_', 'users_', 'export_', 'log_', 'data_', 'finance_', 'list_'],
      templates: [
        "包含 {number} 条用户记录，但密码都是明文的 '123456'。",
        "一张关于 {topic} 的库存表，大部分物品数量为 0。",
        "泄露的 {year} 年交易记录，金额列全是负数。",
        "Excel表格，记录了 {user} 在 {year} 年的所有咖啡支出。",
        "字段名全是 'col1', 'col2' 等无意义的代号。",
        "包含大量 {user} 的登录尝试记录，全部失败。",
        "这是一个被 SQL 注入攻击后的残留数据片段。",
        "记录了 {number} 个被封禁的 IP 地址。"
      ]
    },
    // 4. Logs / Chat (Formerly Chat Type)
    log: {
      exts: ['.log', '.txt', '.history'],
      prefixes: ['chat_', 'irc_', 'syslog_', 'error_', 'debug_', 'msn_'],
      templates: [
        "[{year}] <{user}>: 任何人？有人在吗？... (无人回应)",
        "系统日志显示 {year} 年发生了严重错误：{topic} not found。",
        "[{year}] <Admin>: 请不要在群里讨论 {topic}，这是最后一次警告。",
        "一段关于 {topic} 的激烈争吵，最后演变成了辱骂。",
        "<{user}> 发送了一个文件: 'virus.exe' (12KB)。",
        "[{year}] <{user}>: 为什么我的屏幕变成蓝色的了？",
        "服务器启动日志，但在加载 {topic} 模块时卡住了。",
        "一段无法解析的加密聊天记录。"
      ]
    },
    // 5. Archives / Executables
    archive: {
      exts: ['.zip', '.rar', '.7z', '.tar.gz', '.exe', '.iso'],
      prefixes: ['setup_', 'crack_', 'backup_', 'game_', 'driver_', 'tool_'],
      templates: [
        "一个包含 {number} 个同名文件的压缩包，解压需要密码。",
        "文件名声称是游戏作弊器，但实际只是一个弹窗脚本。",
        "这可能是一个误报的病毒，或者只是一个损坏的屏保程序。",
        "安装程序在 {number}% 处报错并退出。",
        "光盘镜像文件，标签写着 '{topic} 2000'。"
      ]
    }
  },

  // --- BOOKMARKS (No URLs, just paths/titles) ---
  bookmarks: {
    prefixes: [
      '索引:', '目录:', '缓存:', '快照:', 'FTP:', 
      '[403]', '[500]', '镜像:', '备份:', '旧版:'
    ],
    titles: [
      'Public_HTML', 'Member_Area', 'Uploads', 'Cgi-bin', 'Images', 'Backup_2001',
      'Forum_Root', 'Wiki_Main', 'Guestbook_DB', 'Admin_Panel', 'Logs', 'Temp'
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
