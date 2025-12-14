
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
      '地下室的门', '夜间广播', '失踪人口', '奇怪的梦', '重复的数字',
      '瘦长鬼影', '紫苑镇', '后室', '联邦控制局', '曼德拉效应', '黑衣人'
    ],
    // 基础用户池
    users: [
      'admin', 'guest', 'webmaster', 'cool_guy_88', 'dark_angel', 'skater_boi', 
      'anime_fan_2000', 'sysadmin', 'root', 'user1234', 'xX_Shadow_Xx', 'Neo',
      'hackerman', 'l33t_hax0r', 'cat_lover', 'doge', 'john_doe', 'jane_doe', 
      'pizza_lover', 'noob_master', 'blue_screen', '404_brain', 'null_ptr',
      'Karen_from_HR', 'anon', 'throwaway_123', 'deleted_user', 'bot_01',
      'Watcher', 'Nobody', 'System', 'Ghost', 'Echo', 'Oracle', 'Ben', 'Jeff', 'Slender'
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
    code: { 
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
      names: ['损坏的内存条', '烧毁的 CPU', '古董显卡', '机械硬盘碟片', '软盘驱动器', 'SCSI转接卡', '以太网终结器', '声霸卡', '3dfx Voodoo', '轨迹球鼠标', '不明电路板', '传感器模块'],
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
          "这不只是硬件，这是 {year} 年的梦想尸体。"
      ]
  },
  media: {
      names: ['VHS 录像带', '3.5寸软盘', '刻录 CD-R', 'MiniDisc', '磁带', 'ZIP 驱动盘', '打孔卡', '幻灯片转盘', 'U-matic 带'],
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
      names: ['未知的毛发', '干燥的粘液', '奇怪的鳞片', '琥珀中的昆虫', '培养皿样本', '石化骨骼', '脱落的牙齿', '真菌孢子', '干瘪的眼球'],
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
      names: ['数字电台录音', 'SSTV 图像', '莫尔斯电码', '白噪音样本', '来自深空的脉冲', '加密语音', '鲸歌', '地下震动波形', 'EVP 录音'],
      templates: [
          "一段循环播放数字 {number} 的录音。声音毫无感情。",
          "解调后的音频听起来像是 {topic} 的名字。",
          "频谱图中隐藏着 {user} 的头像。",
          "这是数学语言，一种复杂的通信协议。",
          "录音背景里有微弱的呼吸声。",
          "信号源似乎在移动，速度极快。",
          "这段莫尔斯电码拼写出了 '{topic}'。",
          "来自 {year} 年的广播，但在当时这个频段并未启用。",
          "听久了会让人感到头晕恶心。",
          "它在重复同一句话：“由于 {topic}，系统已关闭。”"
      ]
  },

  // --- BOOKMARKS ---
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
        topics: ['夜总会广告', '尼日利亚王子', '彩票中奖', '热辣单身主妇'],
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
        topics: ['Slender Man', 'Jeff the Killer', 'The Rake', '微笑狗', '紫苑镇音调', 'Momo', 'Herobrine'],
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
    'simulation_hypothesis': {
        topics: ['渲染错误', '既视感', '普朗克长度', '上帝模式'],
        templates: ["这是 {topic} 的 3D 模型线框图，透视完全错误。", "如果你盯着它看太久，现实会开始闪烁。"]
    }
};
