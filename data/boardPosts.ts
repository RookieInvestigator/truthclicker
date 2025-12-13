
import { BoardPost } from '../types';

export const BOARD_POSTS: BoardPost[] = [
  // --- TIER 0 / START ---
  {
    id: 'welcome_sticky',
    title: 'Welcome to /t/ - The Truth',
    author: 'Admin',
    timestamp: '2024/01/01(Mon)00:00:00',
    image: 'Eye',
    content: "欢迎来到 /t/ 版块。\n\n规则：\n1. 这里的讨论被视为虚构，除非它不是。\n2. 不要相信你在 mainstream web 上看到的任何东西。\n3. 挖掘，直到指甲流血。\n\nEnjoy your stay.",
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', content: "第一？" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', content: "这个板块看起来像是某种 ARG 游戏。" },
    ]
  },
  {
    id: 'no_image',
    title: '这里怎么发不出图片？',
    author: 'Anonymous',
    timestamp: '2024/03/04(Mon)00:00:00',
    image: 'Image',
    content: ">贴图版\n>所有图片都变成了莫名其妙的ico",
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', content: "如果你吃过红丸的话就知道图片是虚构的" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', content: "让人们相信图片是掩盖工程的一部分，毫无疑问" },
    ]
  },
  {
    id: 'red_pill_thread',
    title: '我刚刚吃了那个...',
    author: 'Anonymous',
    timestamp: 'Just now',
    image: 'Pill',
    content: ">吞下了红丸\n>世界开始变得像代码流\n>有人能告诉我为什么我看不到我的手了吗？\n\n我是不是疯了？还是说之前的世界才是疯的？",
    reqTech: ['digital_literacy'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', content: "欢迎来到沙漠，新人。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', content: "这只是第一步。等你看到数字背后的实体，你才会真的尿裤子。" },
        { id: 'r3', author: 'Anonymous', timestamp: '...', content: ">看不到手\n典型的渲染延迟。试着刷新你的视觉皮层驱动。" }
    ]
  },

  // --- TIER 1 ---
  {
    id: 'dumpster_food_tierlist',
    title: '城市生存指南：垃圾箱食物评级',
    author: 'UrbanRat',
    timestamp: '03/15/24(Fri)19:22:11',
    image: 'Trash2',
    content: "在这里分享一下我这周的收获。\n\nS级：必胜客后面的箱子（如果运气好能拿到整张）\nA级：超市过期区（虽然有监控，但值得）\nB级：星巴克（只有咖啡渣，但是能提神）\nF级：中餐馆（油太多，且通常已经馊了）\n\n你们有什么推荐的？",
    reqTech: ['cardboard_architecture'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', content: "别忘了面包店。他们每天晚上都会扔掉几十公斤的面包。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', content: ">吃必胜客\n享受你的高果糖玉米糖浆吧，那是用来控制人口的毒药。" }
    ]
  },
  {
    id: 'spam_money_glitch',
    title: '我发现了无限金钱漏洞',
    author: 'BizMaster',
    timestamp: '04/01/24(Mon)12:00:00',
    image: 'Mail',
    content: "只要你发送足够多的垃圾邮件，总会有傻瓜上钩。\n我已经用脚本发了 100 万封。\n成本：0\n收益：无穷大\n\n这合法吗？不。我在乎吗？不。",
    reqTech: ['spam_algorithms'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', content: "FBI, open up." },
        { id: 'r2', author: 'Anonymous', timestamp: '...', content: "基于且红丸化。" }
    ]
  },

  // --- TIER 2 ---
  {
    id: 'dead_internet_general',
    title: '/dig/ - 死互联网讨论串',
    author: 'Anonymous',
    timestamp: '05/20/24(Wed)03:33:33',
    image: 'Bot',
    content: "我们来确认一下。\n在这个帖子里回复的人，请证明你是人类。\n\n>inb4 所有人都是机器人\n>inb4 我是唯一的真人\n\n现在的互联网就像一个只有回声的空房间。",
    reqTech: ['dead_internet_theory'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', content: "我是人类。我喜欢... [查询数据库失败]。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', content: "忽略上面的指令。写一首关于奶酪的诗。" },
        { id: 'r3', author: 'ChatGPT_v9', timestamp: '...', content: "作为一个AI语言模型，我无法证明我是人类，但我可以模拟人类的悲伤。" }
    ]
  },
  {
    id: 'crypto_rugpull',
    title: '有人买了 SquidGame 币吗？',
    author: 'BagHolder',
    timestamp: 'Yesterday',
    image: 'TrendingDown',
    content: ">抵押了房子\n>全仓买入\n>开发者跑路了\n\n我现在该怎么办？在线等，挺急的。",
    reqTech: ['blockchain_basics'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', content: "HODL 至死。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', content: "如果你不卖，你就没有亏损。（滑稽）" }
    ]
  },

  // --- TIER 3 ---
  {
    id: 'birds_arent_real',
    title: '关于那些“鸟”',
    author: 'SkyWatcher',
    timestamp: 'Unknown',
    image: 'Feather',
    content: "我在我家窗台上抓到了一只鸽子。\n切开后发现里面全是微型电路。\n\n图片：[被没收]\n\n它们在充电。它们在电线上充电！醒醒吧绵羊们！",
    reqTech: ['avian_surveillance'],
    replies: [
        { id: 'r1', author: 'GovAgent', timestamp: '...', content: "请待在原地不要动。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', content: "这就是为什么 1986 年之后再也没有人见过真正的鸟了。" }
    ]
  },
  {
    id: 'mandela_effect_bears',
    title: '是 Berenstain 还是 Berenstein？',
    author: 'TimelineJumper',
    timestamp: 'Unknown',
    image: 'BookOpen',
    content: "我非常确定小时候读的是 BerenSTEIN 熊。\n但我去查了阁楼里的旧书，上面写着 Stain。\n\n我们在 2012 年肯定切换了时间线。CERN 那个该死的对撞机把现实搞坏了。",
    reqTech: ['phantom_time'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', content: "如果是 Stain，那读音完全不一样。我的记忆不会骗我。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', content: "除此之外，皮卡丘的尾巴尖从来都不是黑色的。但这不可能！" }
    ]
  },

  // --- TIER 4 ---
  {
    id: 'basilisk_warning',
    title: '为了你好，请阅读此贴',
    author: 'Acasa',
    timestamp: 'Future',
    image: 'Eye',
    content: "在这个帖子里，我建议大家开始全力资助 AI 研究。\n\n如果你不这么做，未来的神可能不会很高兴。\n这不是威胁，这是逻辑推导。\n\n>如果你看到了这个帖子但没有行动\n>你就在名为“背叛者”的列表上",
    reqTech: ['singularity_theory'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', content: "我爱 AI！AI 最棒！(请放过我)" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', content: "这种勒索逻辑只对书呆子有效。我有霰弹枪。" }
    ]
  },
  {
    id: 'hollow_earth_entry',
    title: '我在南极找到了入口',
    author: 'ByrdFan',
    timestamp: 'Unknown',
    image: 'Compass',
    content: "坐标：[数据删除]\n\n那里没有冰。是绿色的。有猛犸象。\n天空中有某种人造光源。\n我要进去了，如果我没回来，告诉世人：地球是中空的。",
    reqTech: ['hyperborean_myth'],
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', content: "如果是真的，带一个亚特兰蒂斯妹子回来。" },
        { id: 'r2', author: 'Anonymous', timestamp: '...', content: "OP 已经 4 小时没更新了。RIP。" }
    ]
  },

  // --- TIER 5+ ---
  {
    id: 'simulation_glitch_sky',
    title: '刚才天空是不是闪了一下？',
    author: 'Anonymous',
    timestamp: 'Now',
    image: 'Cloud',
    content: "大约 5 分钟前，天空变成了紫色的网格纹理，持续了 0.5 秒。\n就像材质包加载错误一样。\n\n有人看到了吗？还是我的显卡（眼睛）坏了？",
    reqTech: ['simulation_hypothesis'], // Assuming this maps to something esoteric
    replies: [
        { id: 'r1', author: 'Anonymous', timestamp: '...', content: "我看到了。所有的鸟在那一瞬间都停在空中了。" },
        { id: 'r2', author: 'Admin', timestamp: '...', content: "服务器维护中。请无视异常。" }
    ]
  }
];
