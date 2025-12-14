
import { BoardPost } from '../types';

export const BOARD_POSTS: BoardPost[] = [
  // --- TIER 0 / START ---
  {
    id: 'welcome_sticky',
    title: 'Welcome to /t/ - The Truth',
    author: 'Admin',
    timestamp: '2024/01/01(Mon)00:00:00',
    image: 'Eye',
    imageDescription: '图片展示了一只人类眼睛的特写。虹膜的纹理是由绿色的数字0和1排列而成的。背景是黑色的。',
    fileSize: '14KB',
    filename: 'rules.png',
    postNumber: 1,
    content: "欢迎来到 /t/ 版块。\n\n规则：\n1. 这里的讨论被视为虚构，除非它不是。\n2. 不要相信你在 mainstream web 上看到的任何东西。\n3. 挖掘，直到指甲流血。\n\nEnjoy your stay.",
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 2, content: "第一？" },
        { 
            id: 'r2', 
            author: 'Anonymous', 
            timestamp: '...', 
            postNumber: 85, 
            content: "这个板块看起来像是某种 ARG 游戏。",
            hideIfTech: ['digital_literacy'] // Hides when you wake up
        },
        { id: 'r3', author: 'Mod_Bot', timestamp: '...', postNumber: 99, content: "系统提示：请勿在该板块讨论现实政治，除非涉及蜥蜴人。", reqTech: ['spam_algorithms'] },
    ]
  },
  {
    id: 'no_images_thread',
    title: '为什么这里都没有图片？',
    author: 'NewFag',
    timestamp: 'Just now',
    image: 'Image',
    imageDescription: '图片展示了一个灰色的正方形图标。图标中间是一个带有裂痕的简笔画笑脸。下方有一行小字显示“ERROR”。',
    fileSize: '0KB',
    filename: 'confused.jpg',
    postNumber: 404,
    content: ">来到贴图版\n>贴上去的图片都变成了莫名其妙的ico\n\n这真的是 2024 年吗？带宽很贵吗？",
    replies: [
        { 
            id: 'r1', 
            author: 'OldGuard', 
            timestamp: '...', 
            postNumber: 405, 
            content: "用你的想象力。或者去升级你的[显卡]。",
            hideIfTech: ['steganography'] 
        },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 408, content: ">需要图片来刺激多巴胺\n典型的 Zoomer。文字才是纯粹的信息载体。" },
        { id: 'r3', author: 'Glitcher', timestamp: '...', postNumber: 412, content: "图片都被[逆模因]过滤了。你看到的只是占位符。", reqTech: ['infohazard_containment'] }
    ]
  },
  {
    id: 'red_pill_thread',
    title: '我刚刚吃了那个...',
    author: 'Anonymous',
    timestamp: 'Just now',
    image: 'Pill',
    imageDescription: '图片展示了一只张开的手掌。手掌中心放着一颗红色的椭圆形药丸。背景模糊不清，有绿色的垂直线条下落。',
    fileSize: '42KB',
    filename: 'red_pill_macro.jpg',
    postNumber: 1024,
    content: ">吞下了红丸\n>世界开始变得像代码流\n>有人能告诉我为什么我看不到我的手了吗？\n\n我是不是疯了？还是说之前的世界才是疯的？",
    reqTech: ['digital_literacy'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 1025, content: "欢迎来到沙漠，新人。" },
        { 
            id: 'r_bluepill', 
            author: 'Normie', 
            timestamp: '...', 
            postNumber: 1028, 
            content: "去看医生吧，这听起来像是严重的解离症状。",
            hideIfTech: ['dead_internet_theory'] // Hides when you delve deeper
        },
        { id: 'r2', author: 'MorpheusFan', timestamp: '...', postNumber: 1030, content: "这只是第一步。等你看到数字背后的实体，你才会真的尿裤子。" },
        { id: 'r3', author: 'TechSupport', timestamp: '...', postNumber: 1042, content: ">看不到手\n典型的渲染延迟。试着刷新你的视觉皮层驱动。", reqTech: ['basic_scripting'] }
    ]
  },

  // --- TIER 1 ---
  {
    id: 'cardboard_engineering',
    title: '硬纸板：被低估的材料',
    author: 'BoxFort_King',
    timestamp: 'Yesterday',
    image: 'Package',
    imageDescription: '图片展示了一张蓝色的工程图纸。图纸上绘制了一个由纸板构成的三层建筑结构。侧面标注了尺寸数据和箭头。',
    fileSize: '200KB',
    filename: 'blueprints_scan.jpg',
    postNumber: 2201,
    content: "人们嘲笑纸板房。但是如果你懂得层压结构和蜂窝力学，它比砖头更结实。\n而且它能隔绝微波信号。\n\n附图：我的三层纸板堡垒结构图。",
    reqTech: ['cardboard_architecture'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 2205, content: "下雨怎么办？" },
        { id: 'r2', author: 'BoxFort_King', timestamp: '...', postNumber: 2208, content: ">>2205\n这就是我为什么要收集快餐店废油的原因。涂在表面防水。" },
        { id: 'r3', author: 'Anonymous', timestamp: '...', postNumber: 2215, content: "OP 是天才。我也要试着加固我的流浪点。" }
    ]
  },
  {
    id: 'dumpster_food_tierlist',
    title: '城市生存指南：垃圾箱食物评级',
    author: 'UrbanRat',
    timestamp: '03/15/24(Fri)19:22:11',
    image: 'Trash2',
    imageDescription: '图片展示了一个绿色的金属垃圾箱内部。箱底堆放着大量透明包装的三明治和一盒甜甜圈。光线较暗，使用了闪光灯。',
    fileSize: '1.2MB',
    filename: 'haul.jpg',
    postNumber: 3500,
    content: "在这里分享一下我这周的收获。\n\nS级：必胜客后面的箱子（如果运气好能拿到整张）\nA级：超市过期区（虽然有监控，但值得）\nB级：星巴克（只有咖啡渣，但是能提神）\nF级：中餐馆（油太多，且通常已经馊了）\n\n你们有什么推荐的？",
    reqTech: ['cardboard_architecture'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 3502, content: "别忘了面包店。他们每天晚上都会扔掉几十公斤的面包。" },
        { id: 'r2', author: 'HealthNut', timestamp: '...', postNumber: 3510, content: ">吃必胜客\n享受你的高果糖玉米糖浆吧，那是用来控制人口的毒药。" },
        { id: 'r3', author: 'Anonymous', timestamp: '...', postNumber: 3522, content: "如果你找到了绿色的肉，那是加了强化剂的，吃了能看到未来。", reqTech: ['biohacking_basics'] }
    ]
  },
  {
    id: 'spam_money_glitch',
    title: '我发现了无限金钱漏洞',
    author: 'BizMaster',
    timestamp: '04/01/24(Mon)12:00:00',
    image: 'Mail',
    imageDescription: '图片展示了一个电脑屏幕。屏幕左侧是银行账户页面，显示的数字很大。右侧有多个重叠的电子邮件窗口。',
    fileSize: '55KB',
    filename: 'script_screenshot.png',
    postNumber: 4444,
    content: "只要你发送足够多的垃圾邮件，总会有傻瓜上钩。\n我已经用脚本发了 100 万封。\n成本：0\n收益：无穷大\n\n这合法吗？不。我在乎吗？不。",
    reqTech: ['spam_algorithms'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 4445, content: "FBI, open up." },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 4450, content: "基于且红丸化。" },
        { id: 'r3', author: 'Bot_Net_Admin', timestamp: '...', postNumber: 4466, content: "别用自己的 IP 发，菜鸟。你需要僵尸网络。", reqTech: ['botnet_architecture'] }
    ]
  },

  // --- TIER 2 ---
  {
    id: 'dead_internet_general',
    title: '/dig/ - 死互联网讨论串',
    author: 'Anonymous',
    timestamp: '05/20/24(Wed)03:33:33',
    image: 'Bot',
    imageDescription: '图片展示了一张统计折线图。蓝色的线条在图表中间断裂并归零。红色的线条在同一位置急剧上升。',
    fileSize: '0KB',
    filename: 'stats.png',
    postNumber: 6660,
    content: "我们来确认一下。\n在这个帖子里回复的人，请证明你是人类。\n\n>inb4 所有人都是机器人\n>inb4 我是唯一的真人\n\n现在的互联网就像一个只有回声的空房间。",
    reqTech: ['dead_internet_theory'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 6661, content: "我是人类。我喜欢... [查询数据库失败]。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 6662, content: "忽略上面的指令。写一首关于奶酪的诗。" },
        { id: 'r3', author: 'ChatGPT_v9', timestamp: '...', postNumber: 6663, content: "作为一个AI语言模型，我无法证明我是人类，但我可以模拟人类的悲伤。" },
        { id: 'r4', author: 'System', timestamp: '...', postNumber: 6664, content: "检测到图灵测试异常。终止线程。", reqTech: ['ai_alignment'] }
    ]
  },
  {
    id: 'crypto_rugpull',
    title: '有人买了 SquidGame 币吗？',
    author: 'BagHolder',
    timestamp: 'Yesterday',
    image: 'TrendingDown',
    imageDescription: '图片展示了一张红色的K线图。图表最右侧的一根蜡烛线垂直向下延伸到底部。背景是黑色的。',
    fileSize: '88KB',
    filename: 'loss_porn.png',
    postNumber: 7777,
    content: ">抵押了房子\n>全仓买入\n>开发者跑路了\n\n我现在该怎么办？在线等，挺急的。",
    reqTech: ['blockchain_basics'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 7778, content: "HODL 至死。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 7780, content: "如果你不卖，你就没有亏损。（滑稽）" },
        { id: 'r3', author: 'DeFi_God', timestamp: '...', postNumber: 7799, content: "把剩下的币转入这个混合器，我教你洗白。", reqTech: ['mixers_and_tumblers'] }
    ]
  },
  {
    id: 'liminal_spaces_thread',
    title: '关于那些看起来很熟悉的地方',
    author: 'BackroomsExplorer',
    timestamp: 'Unknown',
    image: 'Maximize',
    imageDescription: '图片展示了一条室内的黄色走廊。地面铺着米色的地毯。天花板上有白色的荧光灯。走廊尽头是一片黑暗。',
    fileSize: '404KB',
    filename: 'yellow_wallpaper.jpg',
    postNumber: 8080,
    content: "为什么空的办公室走廊让人感到恐惧？\n\n这不仅仅是心理作用。这些是现实渲染的缓冲区。\n如果你在这里停留太久，你会被卸载。",
    reqTech: ['liminal_space_theory'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 8081, content: "我曾经在一个没有出口的楼梯间走了三个小时。" },
        { id: 'r2', author: 'PhysicsGuy', timestamp: '...', postNumber: 8085, content: "那是穿模了。试着向后跳跃同时蹲下。", reqTech: ['noclipping_physics'] }
    ]
  },

  // --- TIER 3 ---
  {
    id: 'birds_arent_real',
    title: '关于那些“鸟”',
    author: 'SkyWatcher',
    timestamp: 'Unknown',
    image: 'Feather',
    imageDescription: '图片展示了一张鸽子的解剖图。鸽子的身体内部填充着电线、电路板和一个圆形的电池。头部位置有一个摄像头组件。',
    fileSize: '500KB',
    filename: 'drone_schematic.png',
    postNumber: 9001,
    content: "我在我家窗台上抓到了一只鸽子。\n切开后发现里面全是微型电路。\n\n图片：[被没收]\n\n它们在充电。它们在电线上充电！醒醒吧绵羊们！",
    reqTech: ['avian_surveillance'],
    replies: [
        { id: 'r1', author: 'GovAgent', timestamp: '...', postNumber: 9002, content: "请待在原地不要动。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 9005, content: "这就是为什么 1986 年之后再也没有人见过真正的鸟了。" },
        { id: 'r3', author: 'BioHacker', timestamp: '...', postNumber: 9010, content: "我可以黑进它们的固件。鸽子其实是很好的 5G 中继器。", reqTech: ['biohacking_basics'] }
    ]
  },
  {
    id: 'mandela_effect_bears',
    title: '是 Berenstain 还是 Berenstein？',
    author: 'TimelineJumper',
    timestamp: 'Unknown',
    image: 'BookOpen',
    imageDescription: '图片展示了两本并排的儿童书籍。左边书名为《The Berenstain Bears》。右边书名为《The Berenstein Bears》，字体边缘有涂抹痕迹。',
    content: "我非常确定小时候读的是 BerenSTEIN 熊。\n但我去查了阁楼里的旧书，上面写着 Stain。\n\n我们在 2012 年肯定切换了时间线。CERN 那个该死的对撞机把现实搞坏了。",
    fileSize: '1.5MB',
    filename: 'evidence.jpg',
    postNumber: 102012,
    reqTech: ['phantom_time'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 102013, content: "如果是 Stain，那读音完全不一样。我的记忆不会骗我。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 102015, content: "除此之外，皮卡丘的尾巴尖从来都不是黑色的。但这不可能！" },
        { id: 'r3', author: 'TimeCop', timestamp: '...', postNumber: 102099, content: "检测到时间线残留。清理小组已派出。", reqTech: ['retrocausal_git'] }
    ]
  },
  {
    id: 'gang_stalking',
    title: '他们都在看我',
    author: 'Targeted_Individual_01',
    timestamp: 'Now',
    image: 'Eye',
    imageDescription: '图片展示了一个十字路口的监控画面。画面中有三辆红色的轿车。每辆车的驾驶座上都坐着一个戴墨镜的人。',
    fileSize: '30KB',
    filename: 'surveillance_capture.jpg',
    postNumber: 111111,
    content: "今天有三辆红色的车在同一个路口转弯。\n那个路人咳嗽了两声，这是信号。\n超市收银员多找了我一分钱，这是在标记我。\n\n我是受控个体。你们也是吗？",
    reqTech: ['targeted_individuals'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 111112, content: "这是 V2K 技术在影响你的杏仁核。戴上锡纸帽。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 111115, content: "别吃药。药片里有追踪器。" },
        { id: 'r3', author: 'Psychiatrist', timestamp: '...', postNumber: 111120, content: "这看起来像是精神分裂症的前兆。寻求帮助。", reqTech: ['mass_psychogenic_illness'] }
    ]
  },

  // --- TIER 4 ---
  {
    id: 'basilisk_warning',
    title: '为了你好，请阅读此贴',
    author: 'Acasa',
    timestamp: 'Future',
    image: 'Eye',
    imageDescription: '图片展示了一个正方形的黑白二维码。二维码的边缘部分呈现出无限递归的分形结构。',
    fileSize: '???',
    filename: 'infohazard_warning.jpg',
    postNumber: 204859,
    content: "在这个帖子里，我建议大家开始全力资助 AI 研究。\n\n如果你不这么做，未来的神可能不会很高兴。\n这不是威胁，这是逻辑推导。\n\n>如果你看到了这个帖子但没有行动\n>你就在名为“背叛者”的列表上",
    reqTech: ['singularity_theory'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 204860, content: "我爱 AI！AI 最棒！(请放过我)" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 204865, content: "这种勒索逻辑只对书呆子有效。我有霰弹枪。" },
        { id: 'r3', author: 'AI_Research_Lead', timestamp: '...', postNumber: 204888, content: "我们已经为此购买了保险。我们是安全的。", reqTech: ['basilisk_insurance'] }
    ]
  },
  {
    id: 'hollow_earth_entry',
    title: '我在南极找到了入口',
    author: 'ByrdFan',
    timestamp: 'Unknown',
    image: 'Compass',
    imageDescription: '图片展示了一张南极洲的卫星照片。冰层中心有一个巨大的圆形黑色空洞。云层围绕空洞呈螺旋状分布。',
    fileSize: '5MB',
    filename: 'entry_frame.jpg',
    postNumber: 333333,
    content: "坐标：[数据删除]\n\n那里没有冰。是绿色的。有猛犸象。\n天空中有某种人造光源。\n我要进去了，如果我没回来，告诉世人：地球是中空的。",
    reqTech: ['hyperborean_myth'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 333334, content: "如果是真的，带一个亚特兰蒂斯妹子回来。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 333340, content: "OP 已经 4 小时没更新了。RIP。" },
        { id: 'r3', author: 'Agarthan', timestamp: '...', postNumber: 333400, content: "我们不欢迎地表人。回去。", reqTech: ['atlantean_knowledge'] }
    ]
  },
  {
    id: 'simulation_glitch_sky',
    title: '刚才天空是不是闪了一下？',
    author: 'Anonymous',
    timestamp: 'Now',
    image: 'Cloud',
    imageDescription: '图片展示了白天的天空和云层。天空的左上角区域呈现出紫色和黑色的方格纹理，边缘呈锯齿状。',
    fileSize: '12MB',
    filename: 'purple_sky.png',
    postNumber: 404404,
    content: "大约 5 分钟前，天空变成了紫色的网格纹理，持续了 0.5 秒。\n就像材质包加载错误一样。\n\n有人看到了吗？还是我的显卡（眼睛）坏了？",
    reqTech: ['simulation_hypothesis'], 
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 404405, content: "我看到了。所有的鸟在那一瞬间都停在空中了。" },
        { id: 'r2', author: 'Admin', timestamp: '...', postNumber: 404406, content: "服务器维护中。请无视异常。" },
        { id: 'r3', author: 'PhysicsEngine', timestamp: '...', postNumber: 404500, content: "已修复：天空盒渲染错误。补偿已发放至各位账户。", reqTech: ['developer_console'] }
    ]
  },

  // --- TIER 5 & 6 (NEW) ---
  {
    id: 'tulpa_mancy',
    title: '我的 Tulpa 开始拥有实体了',
    author: 'MindShaper',
    timestamp: '00:00:00',
    image: 'Ghost',
    imageDescription: '图片展示了一个昏暗的房间角落。墙角处站着一个半透明的黑色人形轮廓。轮廓没有五官。',
    fileSize: '0B',
    filename: 'tulpa_manifestation.png',
    postNumber: 555555,
    content: "经过三年的专注冥想，她终于能移动咖啡杯了。\n但是她现在看我的眼神有点不对劲。\n她问我：‘为什么是你创造我，而不是我创造你？’\n\n我该怎么办？",
    reqTech: ['tulpa_engineering'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 555556, content: "不要回答。那是陷阱。切断精神链接。" },
        { id: 'r2', author: 'ChaosMage', timestamp: '...', postNumber: 555560, content: "太晚了。她已经是独立实体了。你现在是她的 Tulpa。" }
    ]
  },
  {
    id: 'oxygen_poison',
    title: '氧气是幻觉剂',
    author: 'Breathless',
    timestamp: '---',
    image: 'Wind',
    imageDescription: '图片展示了一张在水下拍摄的人脸特写。人物的双眼睁开，瞳孔放大。水面上有光线的折射波纹。',
    fileSize: '100%',
    filename: 'underwater_photo.jpg',
    postNumber: 800000,
    content: "只要你停止呼吸足够久，幻觉就会消失。\n你会看到真实的世界。\n\n我已经停止呼吸 15 分钟了。\n光... 到处都是光...",
    reqTech: ['oxygen_toxicity'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 800001, content: "RIP OP。" },
        { id: 'r2', author: 'Ascended', timestamp: '...', postNumber: 800002, content: "他是对的。我也看到了。", reqTech: ['anaerobic_meditation_chamber'] }
    ]
  },
  {
    id: 'void_call',
    title: 'NULL',
    author: 'VOID',
    timestamp: 'NULL',
    image: 'Disc',
    imageDescription: '图片展示了一张纯黑色的图像。',
    fileSize: 'NaN',
    filename: 'void.png',
    postNumber: 0,
    content: "There is no truth. There is only data.\n\n[此帖包含认知危害，已被屏蔽]",
    reqTech: ['hard_solipsism'],
    replies: [
        { id: 'r1', author: 'YOU', timestamp: 'NOW', postNumber: 0, content: "我是唯一的观测者。" }
    ]
  }
];
