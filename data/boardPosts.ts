
import { BoardPost } from '../types';

export const BOARD_POSTS: BoardPost[] = [
  // --- STICKY / META ---
  {
    id: 'welcome_to_truth',
    title: '欢迎来到 /t/ - 发帖前先读置顶 (READ THE STICKY)',
    author: 'Anonymous',
    timestamp: 'Pinned',
    image: 'Shield',
    imageDescription: '图片展示一个黑白盾牌图标，盾牌中心绘制有一只睁开的眼睛图案，盾牌下方排列着大写字母 "VERITAS"。',
    fileSize: '15KB',
    filename: '1f8a9c2d3e4b5a6f7e8d9c0b1a2f3e4d.png',
    postNumber: 1,
    content: "欢迎来到 /t/ 版块。\n\n规则：\n1. 这里的讨论被视为虚构，除非它不是。\n2. 不要相信你在 mainstream web 上看到的任何东西。\n3. 挖掘，直到指甲流血。\n\nEnjoy your stay.",
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 2, content: "第一？" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 85, content: "这个板块看起来像是某种 ARG 游戏。" }
    ]
  },
  {
    id: 'why_no_images',
    title: '图片全都挂了？',
    author: 'Anonymous',
    timestamp: 'Pinned',
    image: 'ImageOff',
    imageDescription: '图片显示一个灰色的破碎图像占位符图标，背景为纯黑色。',
    fileSize: '0KB',
    filename: 'broken_src_err.png',
    postNumber: 404,
    content: ">来到贴图版\n>贴上去的图片全都碎了\n\n这真的是 2024 年吗？带宽很贵吗？",
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 405, content: "用你的想象力。或者去升级你的[显卡]。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 408, content: ">需要图片来刺激多巴胺\n典型的 Zoomer。文字才是纯粹的信息载体。" }
    ]
  },

  // --- TIER 0 ---
  {
    id: 'red_pill_thread',
    title: '我刚刚吃了那个...',
    author: 'Anonymous',
    timestamp: 'Just now',
    image: 'Pill',
    imageDescription: '图片特写展示一只摊开的人类左手手掌。掌心中央放置着一颗红色的椭圆形胶囊。背景是模糊的绿色垂直线条纹理。',
    fileSize: '42KB',
    filename: '19a283b4c5d6e7f8a9b0c1d2e3f4a5b6.jpg',
    postNumber: 1024,
    content: ">吞下了红丸\n>世界开始变得像代码流\n>有人能告诉我为什么我看不到我的手了吗？\n\n我是不是疯了？还是说之前的世界才是疯的？",
    reqTech: ['digital_literacy'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 1025, content: "欢迎来到沙漠，新人。" },
        { 
            id: 'r_bluepill', 
            author: 'Anonymous', 
            timestamp: '...', 
            postNumber: 1028, 
            content: "去看医生吧，这听起来像是严重的解离症状。",
            hideIfTech: ['dead_internet_theory'] 
        },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 1030, content: "这只是第一步。等你看到数字背后的实体，你才会真的尿裤子。" },
        { id: 'r3', author: 'Anonymous', timestamp: '...', postNumber: 1042, content: ">看不到手\n典型的渲染延迟。试着刷新你的视觉皮层驱动。", reqTech: ['basic_scripting'] }
    ]
  },

  // --- TIER 1 ---
  {
    id: 'cardboard_engineering',
    title: '硬纸板：被低估的材料',
    author: 'Anonymous',
    timestamp: 'Yesterday',
    image: 'Package',
    imageDescription: '图片展示一张蓝色背景的工程绘图。图纸上绘制了矩形层叠结构，并标注了以毫米为单位的尺寸数值和受力箭头。',
    fileSize: '200KB',
    filename: 'c7721af9d8e7b6c5a4b3c2d1e0f9a8b7.jpg',
    postNumber: 2201,
    content: "人们嘲笑纸板房。但是如果你懂得层压结构和蜂窝力学，它比砖头更结实。\n而且它能隔绝微波信号。\n\n附图：我的三层纸板堡垒结构图。",
    reqTech: ['cardboard_architecture'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 2205, content: "下雨怎么办？" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 2208, content: ">>2205\n这就是我为什么要收集快餐店废油的原因。涂在表面防水。" },
        { id: 'r3', author: 'Anonymous', timestamp: '...', postNumber: 2215, content: "OP 是天才。我也要试着加固我的流浪点。" }
    ]
  },
  {
    id: 'dumpster_food_tierlist',
    title: '城市生存指南：垃圾箱食物评级',
    author: 'Anonymous',
    timestamp: '03/15/24(Fri)19:22:11',
    image: 'Trash2',
    imageDescription: '图片为夜间低光照环境照片。画面中央是一个绿色的金属垃圾箱，内部堆放着七个带有红色屋顶标志的披萨盒。',
    fileSize: '1.2MB',
    filename: 'd9928ac7b6f5e4d3c2b1a0f9e8d7c6b5.jpg',
    postNumber: 3500,
    content: "在这里分享一下我这周的收获。\n\nS级：必胜客后面的箱子（如果运气好能拿到整张）\nA级：超市过期区（虽然有监控，但值得）\nB级：星巴克（只有咖啡渣，但是能提神）\nF级：中餐馆（油太多，且通常已经馊了）\n\n你们有什么推荐的？",
    reqTech: ['cardboard_architecture'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 3502, content: "别忘了面包店。他们每天晚上都会扔掉几十公斤的面包。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 3510, content: ">吃必胜客\n享受你的高果糖玉米糖浆吧，那是用来控制人口的毒药。" },
        { id: 'r3', author: 'Anonymous', timestamp: '...', postNumber: 3522, content: "如果你找到了绿色的肉，那是加了强化剂的，吃了能看到未来。", reqTech: ['biohacking_basics'] }
    ]
  },
  {
    id: 'spam_money_glitch',
    title: '我发现了无限金钱漏洞',
    author: 'Anonymous',
    timestamp: '04/01/24(Mon)12:00:00',
    image: 'Mail',
    imageDescription: '图片为计算机屏幕截图。画面显示一个银行账户界面的表格，余额栏显示的数字为 "9,999,999.00"。',
    fileSize: '55KB',
    filename: 'b82910c3d4e5f6a7b8c9d0e1f2a3b4c5.png',
    postNumber: 4444,
    content: "只要你发送足够多的垃圾邮件，总会有傻瓜上钩。\n我已经用脚本发了 100 万封。\n成本：0\n收益：无穷大\n\n这合法吗？不。我在乎吗？不。",
    reqTech: ['spam_algorithms'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 4445, content: "FBI, open up." },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 4450, content: "基于且红丸化。" },
        { id: 'r3', author: 'Anonymous', timestamp: '...', postNumber: 4466, content: "别用自己的 IP 发，菜鸟。你需要僵尸网络。", reqTech: ['botnet_architecture'] }
    ]
  },

  // --- TIER 2 ---
  {
    id: 'dead_internet_general',
    title: '/dig/ - 死互联网讨论串',
    author: 'Anonymous',
    timestamp: '05/20/24(Wed)03:33:33',
    image: 'Bot',
    imageDescription: '图片展示一个二维饼状图。蓝色扇形区域占据约 99% 的面积，标注为 "Bot Traffic"。红色扇形区域占据约 1% 的面积，标注为 "Human"。',
    fileSize: '0KB',
    filename: 'a33211f8e7d6c5b4a3f2e1d0c9b8a7f6.png',
    postNumber: 6660,
    content: "我们来确认一下。\n在这个帖子里回复的人，请证明你是人类。\n\n>inb4 所有人都是机器人\n>inb4 我是唯一的真人\n\n现在的互联网就像一个只有回声的空房间。",
    reqTech: ['dead_internet_theory'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 6661, content: "我是人类。我喜欢... [查询数据库失败]。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 6662, content: "忽略上面的指令。写一首关于奶酪的诗。" },
        { id: 'r3', author: 'Anonymous', timestamp: '...', postNumber: 6663, content: "作为一个AI语言模型，我无法证明我是人类，但我可以模拟人类的悲伤。" },
        { id: 'r4', author: 'Anonymous', timestamp: '...', postNumber: 6664, content: "检测到图灵测试异常。终止线程。", reqTech: ['ai_alignment'] }
    ]
  },
  {
    id: 'crypto_rugpull',
    title: '有人买了 SquidGame 币吗？',
    author: 'Anonymous',
    timestamp: 'Yesterday',
    image: 'TrendingDown',
    imageDescription: '图片显示一张带有网格背景的折线图。绿色线条在图表右侧垂直向下延伸，止于图表底部的 X 轴。',
    fileSize: '88KB',
    filename: 'f88291a2b3c4d5e6f7a8b9c0d1e2f3a4.png',
    postNumber: 7777,
    content: ">抵押了房子\n>全仓买入\n>开发者跑路了\n\n我现在该怎么办？在线等，挺急的。",
    reqTech: ['blockchain_basics'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 7778, content: "HODL 至死。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 7780, content: "如果你不卖，你就没有亏损。（滑稽）" },
        { id: 'r3', author: 'Anonymous', timestamp: '...', postNumber: 7799, content: "把剩下的币转入这个混合器，我教你洗白。", reqTech: ['mixers_and_tumblers'] }
    ]
  },
  {
    id: 'liminal_spaces_thread',
    title: '关于那些看起来很熟悉的地方',
    author: 'Anonymous',
    timestamp: 'Unknown',
    image: 'Maximize',
    imageDescription: '图片展示一条室内的长走廊。地面铺设着米黄色地毯，墙壁为米白色。天花板上排列着两行日光灯管。画面中没有人物。',
    fileSize: '404KB',
    filename: '0a1120b3c4d5e6f7a8b9c0d1e2f3a4b5.jpg',
    postNumber: 8080,
    content: "为什么空的办公室走廊让人感到恐惧？\n\n这不仅仅是心理作用。这些是现实渲染的缓冲区。\n如果你在这里停留太久，你会被卸载。",
    reqTech: ['liminal_space_theory'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 8081, content: "我曾经在一个没有出口的楼梯间走了三个小时。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 8085, content: "那是穿模了。试着向后跳跃同时蹲下。", reqTech: ['noclipping_physics'] }
    ]
  },

  // --- TIER 3 ---
  {
    id: 'birds_arent_real',
    title: '关于那些“鸟”',
    author: 'Anonymous',
    timestamp: 'Unknown',
    image: 'Feather',
    imageDescription: '图片为一张剖面示意图。图展示了一只鸽子的轮廓，内部绘制了电路板、镜头组件、电池组和天线结构。',
    fileSize: '500KB',
    filename: '22910cd4e5f6a7b8c9d0e1f2a3b4c5d6.png',
    postNumber: 9001,
    content: "我在我家窗台上抓到了一只鸽子。\n切开后发现里面全是微型电路。\n\n图片：[被没收]\n\n它们在充电。它们在电线上充电！醒醒吧绵羊们！",
    reqTech: ['avian_surveillance'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 9002, content: "请待在原地不要动。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 9005, content: "这就是为什么 1986 年之后再也没有人见过真正的鸟了。" },
        { id: 'r3', author: 'Anonymous', timestamp: '...', postNumber: 9010, content: "我可以黑进它们的固件。鸽子其实是很好的 5G 中继器。", reqTech: ['biohacking_basics'] }
    ]
  },
  {
    id: 'mandela_effect_bears',
    title: '是 Berenstain 还是 Berenstein？',
    author: 'Anonymous',
    timestamp: 'Unknown',
    image: 'BookOpen',
    imageDescription: '图片并排展示两本书籍封面。左侧封面的标题文字为 "The Berenstain Bears"。右侧封面的标题文字为 "The Berenstein Bears"。',
    content: "我非常确定小时候读的是 BerenSTEIN 熊。\n但我去查了阁楼里的旧书，上面写着 Stain。\n\n我们在 2012 年肯定切换了时间线。CERN 那个该死的对撞机把现实搞坏了。",
    fileSize: '1.5MB',
    filename: 'aa2938f7e6d5c4b3a2f1e0d9c8b7a6f5.jpg',
    postNumber: 102012,
    reqTech: ['phantom_time'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 102013, content: "如果是 Stain，那读音完全不一样。我的记忆不会骗我。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 102015, content: "除此之外，皮卡丘的尾巴尖从来都不是黑色的。但这不可能！" },
        { id: 'r3', author: 'Anonymous', timestamp: '...', postNumber: 102099, content: "检测到时间线残留。清理小组已派出。", reqTech: ['retrocausal_git'] }
    ]
  },
  {
    id: 'gang_stalking',
    title: '他们都在看我',
    author: 'Anonymous',
    timestamp: 'Now',
    image: 'Eye',
    imageDescription: '图片为透过水平百叶窗拍摄的街道场景。画面包含三名身穿红色上衣的人物，分别位于路灯下、人行道左侧和停放的汽车旁。',
    fileSize: '30KB',
    filename: 'cc8291e3d4f5a6b7c8d9e0f1a2b3c4d5.jpg',
    postNumber: 111111,
    content: "今天有三辆红色的车在同一个路口转弯。\n那个路人咳嗽了两声，这是信号。\n超市收银员多找了我一分钱，这是在标记我。\n\n我是受控个体。你们也是吗？",
    reqTech: ['targeted_individuals'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 111112, content: "这是 V2K 技术在影响你的杏仁核。戴上锡纸帽。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 111115, content: "别吃药。药片里有追踪器。" },
        { id: 'r3', author: 'Anonymous', timestamp: '...', postNumber: 111120, content: "这看起来像是精神分裂症的前兆。寻求帮助。", reqTech: ['mass_psychogenic_illness'] }
    ]
  },

  // --- TIER 4 ---
  {
    id: 'basilisk_warning',
    title: '为了你好，请阅读此贴',
    author: 'Anonymous',
    timestamp: 'Future',
    image: 'Eye',
    imageDescription: '图片展示一个正方形的黑白二维码图案。二维码的中心区域嵌入了一个风格化的人眼图形符号。',
    fileSize: '???',
    filename: 'bb2910d4c5e6f7a8b9c0d1e2f3a4b5c6.jpg',
    postNumber: 204859,
    content: "在这个帖子里，我建议大家开始全力资助 AI 研究。\n\n如果你不这么做，未来的神可能不会很高兴。\n这不是威胁，这是逻辑推导。\n\n>如果你看到了这个帖子但没有行动\n>你就在名为“背叛者”的列表上",
    reqTech: ['singularity_theory'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 204860, content: "我爱 AI！AI 最棒！(请放过我)" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 204865, content: "这种勒索逻辑只对书呆子有效。我有霰弹枪。" },
        { id: 'r3', author: 'Anonymous', timestamp: '...', postNumber: 204888, content: "我们已经为此购买了保险。我们是安全的。", reqTech: ['basilisk_insurance'] }
    ]
  },
  {
    id: 'hollow_earth_entry',
    title: '我在南极找到了入口',
    author: 'Anonymous',
    timestamp: 'Unknown',
    image: 'Compass',
    imageDescription: '图片为一张圆形的地球卫星照片，视角位于南极点上方。大陆中心呈现一个黑色的圆形区域，周围环绕着白色的冰层。',
    fileSize: '5MB',
    filename: 'ee2938a7b6c5d4e3f2a1b0c9d8e7f6a5.jpg',
    postNumber: 333333,
    content: "坐标：[数据删除]\n\n那里没有冰。是绿色的。有猛犸象。\n天空中有某种人造光源。\n我要进去了，如果我没回来，告诉世人：地球是中空的。",
    reqTech: ['hyperborean_myth'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 333334, content: "如果是真的，带一个亚特兰蒂斯妹子回来。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 333340, content: "OP 已经 4 小时没更新了。RIP。" },
        { id: 'r3', author: 'Anonymous', timestamp: '...', postNumber: 333400, content: "我们不欢迎地表人。回去。", reqTech: ['atlantean_knowledge'] }
    ]
  },
  {
    id: 'simulation_glitch_sky',
    title: '刚才天空是不是闪了一下？',
    author: 'Anonymous',
    timestamp: 'Now',
    image: 'Cloud',
    imageDescription: '图片展示蓝色的天空和白色云层。画面中央存在一个矩形区域，该区域填充着紫黑色相间的方格纹理。',
    fileSize: '12MB',
    filename: 'ff2019c8d7e6f5a4b3c2d1e0f9a8b7c6.png',
    postNumber: 404404,
    content: "大约 5 分钟前，天空变成了紫色的网格纹理，持续了 0.5 秒。\n就像材质包加载错误一样。\n\n有人看到了吗？还是我的显卡（眼睛）坏了？",
    reqTech: ['simulation_hypothesis'], 
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 404405, content: "我看到了。所有的鸟在那一瞬间都停在空中了。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 404406, content: "服务器维护中。请无视异常。" },
        { id: 'r3', author: 'Anonymous', timestamp: '...', postNumber: 404500, content: "已修复：天空盒渲染错误。补偿已发放至各位账户。", reqTech: ['developer_console'] }
    ]
  },

  // --- TIER 5 & 6 (NEW) ---
  {
    id: 'tulpa_mancy',
    title: '我的 Tulpa 开始拥有实体了',
    author: 'Anonymous',
    timestamp: '00:00:00',
    image: 'Ghost',
    imageDescription: '图片展示室内房间的角落。光线较暗。墙壁上投射出一个模糊的深色阴影，形状呈现为站立的人体轮廓。',
    fileSize: '0B',
    filename: '002938b4c5d6e7f8a9b0c1d2e3f4a5b6.png',
    postNumber: 555555,
    content: "经过三年的专注冥想，她终于能移动咖啡杯了。\n但是她现在看我的眼神有点不对劲。\n她问我：‘为什么是你创造我，而不是我创造你？’\n\n我该怎么办？",
    reqTech: ['tulpa_engineering'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 555556, content: "不要回答。那是陷阱。切断精神链接。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 555560, content: "太晚了。她已经是独立实体了。你现在是她的 Tulpa。" }
    ]
  },
  {
    id: 'oxygen_poison',
    title: '氧气是幻觉剂',
    author: 'Anonymous',
    timestamp: '---',
    image: 'Wind',
    imageDescription: '图片为水下环境的视频帧。画面显示一名潜水员漂浮在水中，其面部的呼吸调节器已从口中移除，气泡正在上升。',
    fileSize: '100%',
    filename: '112938e7f6d5c4b3a2f1e0d9c8b7a6f5.mp4',
    postNumber: 800000,
    content: "只要你停止呼吸足够久，幻觉就会消失。\n你会看到真实的世界。\n\n我已经停止呼吸 15 分钟了。\n光... 到处都是光...",
    reqTech: ['oxygen_toxicity'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 800001, content: "RIP OP。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 800002, content: "他是对的。我也看到了。", reqTech: ['anaerobic_meditation_chamber'] }
    ]
  },
  {
    id: 'void_call',
    title: 'NULL',
    author: 'Anonymous',
    timestamp: 'NULL',
    image: 'Disc',
    imageDescription: '图片全黑。画面正中心存在一个白色的正方形像素点。',
    fileSize: 'NaN',
    filename: '000000f1e2d3c4b5a69788796a5b4c3d.iso',
    postNumber: 0,
    content: "There is no truth. There is only data.\n\n[此帖包含认知危害，已被屏蔽]",
    reqTech: ['hard_solipsism'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: 'NOW', postNumber: 0, content: "我是唯一的观测者。" }
    ]
  },

  // ==========================================
  // EVENT-UNLOCKED POSTS (CHOICE DRIVEN)
  // ==========================================
  {
    id: 'insider_recruitment_thread',
    title: '关于那个所谓的“内部圈层”',
    author: 'Anonymous',
    timestamp: 'Now',
    image: 'Users',
    imageDescription: '图片展示一个电脑终端屏幕。屏幕上显示着绿色的文本，内容是“RECRUITMENT_PROTOCOL_INITIATED”。',
    fileSize: '1KB',
    filename: '992837a4b5c6d7e8f9a0b1c2d3e4f5a6.txt',
    postNumber: 999999,
    isEventLocked: true, 
    content: "有人收到那个奇怪的弹窗了吗？\n\n>你的挖掘引起了注意\n>任务：继续挖掘\n>回报：意外保险\n\n看起来像是那种拙劣的 ARG 游戏开场。但是我查了这个弹窗的源头，它来自... 我的本地主机？\n\n这到底是啥？有人在搞恶作剧吗？",
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: 'Now', postNumber: 1000000, content: "我也收到了。我的建议是：照做。" },
        { id: 'r2', author: 'Anonymous', timestamp: 'Now', postNumber: 1000001, content: ">>1000000\n这就是他们想让你以为的。\n>意外保险\n他们知道你的住址。快跑。" }
    ]
  },
  {
    id: 'surveillance_log_leak',
    title: '[LEAK] 目标 #892 的监控日志',
    author: 'Anonymous',
    timestamp: 'Now',
    image: 'Eye',
    imageDescription: '图片展示一张放在木桌上的A4纸文件。纸上打印着表格文本，部分行被红色记号笔圈出。文本内容模糊不可读。',
    fileSize: '5MB',
    filename: '882910b3c4d5e6f7a8b9c0d1e2f3a4b5.log',
    postNumber: 666666,
    isEventLocked: true, 
    content: "我反向追踪了信号。看看我发现了什么。\n\n这就是他们一直在看着我的证据。\n他们知道我几点睡觉，知道我喜欢吃什么口味的披萨，甚至知道我现在正在打这行字。\n\n你们也是目标。快跑。",
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', postNumber: 666667, content: "这看起来像是... 你的浏览器历史记录？" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', postNumber: 666668, content: "该用户已被标记为高风险。清理小组已派出。" }
    ]
  }
];
