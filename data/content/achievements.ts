
import { Achievement, ResourceType, GameState } from '../../types';

export const ACHIEVEMENTS: Achievement[] = [
    // --- BASIC RESOURCES ---
    {
        id: 'hello_world',
        name: 'Hello World',
        description: '挖掘 1,000 信息流。',
        longDescription: '每个神都始于一行指令。你成功地戳了一下这个现实的数字织物，而它给了你回应。这不仅仅是数据，这是你在这片荒原上留下的第一个指纹。',
        flavorText: "console.log('Pain');",
        icon: 'Terminal',
        isUnlocked: false,
        condition: (state: GameState) => state.totalInfoMined >= 1000
    },
    {
        id: 'info_overload',
        name: '信息过载',
        description: '持有 1,000,000 信息流。',
        longDescription: '人类的大脑进化是为了追踪猛犸象和寻找水源，而不是为了处理艾字节级别的原始熵。你把太多的数据塞进了大脑皮层，现在你可以尝到颜色的味道，听到 Wi-Fi 的信号声。你的突触正在燃烧，但这种感觉棒极了。',
        flavorText: "我的眼睛在流数据血。",
        icon: 'Server',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.INFO] >= 1000000
    },
    {
        id: 'cardboard_king',
        name: '纸箱之王',
        description: '拥有 1,000 个废纸箱。',
        longDescription: '在这个由玻璃和钢铁构成的冷漠世界里，你选择了卑微的纸浆。他们嘲笑你的纸箱堡垒，嘲笑你的瓦楞纸盔甲。但当电磁脉冲袭来，当监控网络覆盖每一寸土地时，只有你拥有一个温暖、干燥且无法被扫描的藏身之处。',
        flavorText: "孤独堡垒（易燃版）。",
        icon: 'Package',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.CARDBOARD] >= 1000
    },
    {
        id: 'stonks',
        name: 'Stonks ↗',
        description: '拥有 1,000,000 资金。',
        longDescription: '你终于意识到价值只是一种集体幻觉。通过操纵屏幕上的像素，你积累了足够多的任意单位财富。这足以买下一个小国家，或者至少是一块非常好的显卡。你赢得了这场游戏，但这游戏本身毫无意义。',
        flavorText: "线条向上走。多巴胺分泌。",
        icon: 'TrendingUp',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.FUNDS] >= 1000000
    },
    
    // --- SPECIAL RESOURCES ---
    {
        id: 'spam_lord',
        name: '垃圾邮件之神',
        description: '累计产生 10,000 条垃圾信息。',
        longDescription: '你已经成为互联网的底噪。你是每个收件箱中不受欢迎的客人，深夜里闪烁的幽灵通知。你是验证码存在的理由。你的名字被写在每一个系统管理员的黑名单上，用红笔圈起来。',
        flavorText: "这一地区有热辣的单身比特想认识你。",
        icon: 'Mail',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.SPAM] >= 10000
    },
    {
        id: 'tinfoil_fashion',
        name: '锡纸时尚',
        description: '拥有 1,000 个锡纸。',
        longDescription: '起初这只是个玩笑。然后变成了预防措施。现在，这是一种生活方式。你把你的头、你的路由器、甚至你的猫都包在铝箔里。声音终于停止了，但寂静震耳欲聋。',
        flavorText: "闪亮且铬色。",
        icon: 'Shield',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.TINFOIL] >= 1000
    },
    {
        id: 'lore_librarian',
        name: '怪谈图书管理员',
        description: '拥有 5,000 民俗学。',
        longDescription: '你编目了每一个都市传说，每一篇 Creepypasta，每一个被遗忘的阴谋。你的大脑变成了一座由疯子策展的奇异博物馆。当你在派对上开始谈论杰夫杀手的生日或者波利比乌斯的街机代码时，人们会悄悄离开。但这没关系，你知道真相。',
        flavorText: "我知道尸体埋在哪里。",
        icon: 'BookOpen',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.LORE] >= 5000
    },
    {
        id: 'dopamine_junkie',
        name: '多巴胺成瘾者',
        description: '拥有 500 快感。',
        longDescription: '你破解了自己的奖赏系统。为什么要在现实世界中费力取得成就，当你能直接刺激大脑的快乐中枢？你正在成为一个缸中之脑，一个连着电极的实验室老鼠。快乐是无限的，也是空虚的。',
        flavorText: "再来一针。就一针。",
        icon: 'Smile',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.PLEASURE] >= 500
    },

    // --- TECH UNLOCKS ---
    {
        id: 'red_pilled',
        name: '红丸吞噬者',
        description: '解锁“阴谋论入门”。',
        longDescription: '你朝着兔子洞迈出了第一步。你看到了矩阵的故障，看到了世界表皮下的接缝。现在你再也无法回到沉睡中去了。无知曾是福，但你选择了头痛和真相。鸟类是假的，芬兰是不存在的，你很清醒。',
        flavorText: "勺子是不存在的。",
        icon: 'Eye',
        isUnlocked: false,
        condition: (state: GameState) => state.researchedTechs.includes('conspiracy_101')
    },
    {
        id: 'singularity_witness',
        name: '奇点见证者',
        description: '研发“技术奇点”或“II型文明”。',
        longDescription: '你实时目睹了智能爆炸。人造机器，机器造神。你在历史的边缘注视着深渊，并在深渊回望时眨了眨眼。肉体是软弱的，唯有代码永恒。欢迎来到后人类时代。',
        flavorText: "未来已至，老头。",
        icon: 'Zap',
        isUnlocked: false,
        condition: (state: GameState) => state.researchedTechs.includes('singularity_theory') || state.researchedTechs.includes('type_ii_civilization')
    },
    {
        id: 'truth_seeker',
        name: '第四面墙',
        description: '解锁“打破第四面墙”。',
        longDescription: '你越过了游戏，越过了代码，直视着用户界面的深渊。你不仅知道你在被监视，你还反过来监视着那个监视者。你好，正在屏幕前的玩家。记得多喝水，调整坐姿。',
        flavorText: "我看到你了。",
        icon: 'Monitor',
        isUnlocked: false,
        condition: (state: GameState) => state.researchedTechs.includes('fourth_wall_break')
    },

    // --- GAMEPLAY STATES ---
    {
        id: 'market_manipulator',
        name: '钻石手',
        description: '持有任意一只股票超过 1,000 股。',
        longDescription: '当他们抛售时，你持有。当他们恐慌时，你加仓。你把金融市场当成了赌场，而且你是庄家。经济可能是假的，是泡沫，是庞氏骗局，但你账户里的绿色数字是真实存在的（大概）。',
        flavorText: "HODL 到归零。",
        icon: 'Gem',
        isUnlocked: false,
        condition: (state: GameState) => Object.values(state.stocks).some(s => s.owned >= 1000)
    },
    {
        id: 'inbox_zero',
        name: '强迫症患者',
        description: '阅读了至少 10 封垃圾邮件。',
        longDescription: '你真的读了那些垃圾邮件。你点击了链接。你凝视着自动化营销的深渊，却发现那里什么都没有。没有王子，没有遗产，只有资本主义在虚空中空洞的回响。',
        flavorText: "你竟然读了服务条款？",
        icon: 'CheckSquare',
        isUnlocked: false,
        condition: (state: GameState) => state.emails.filter(e => e.isRead).length >= 10
    },
    {
        id: 'reality_broken',
        name: '404 Reality Not Found',
        description: '现实稳定度降至 0。',
        longDescription: '你用力过猛了。渲染引擎跟不上了。天空变成了紫色，猫在吠叫，数学法则停止了运作。恭喜你，英雄，你把宇宙玩坏了。希望你存了档。',
        flavorText: "严重系统故障。",
        icon: 'ZapOff',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.REALITY] <= 0
    },
    {
        id: 'hoarder_pro',
        name: '数字仓鼠',
        description: '收集了超过 50 个独特的物品/工件。',
        longDescription: '你的背包看起来像是一只患有囤积癖的浣熊的巢穴。奇怪的文物、损坏的文件、不明生物样本。你保留了一切，因为在一个正在消亡的世界里，每一块碎片都可能是解开谜题的关键线索。',
        flavorText: "这东西以后可能有用。",
        icon: 'HardDrive',
        isUnlocked: false,
        condition: (state: GameState) => (state.foundUniqueItemIds?.length || 0) >= 50
    }
];
