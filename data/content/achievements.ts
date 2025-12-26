
import { Achievement, ResourceType, GameState } from '../../types';

export const ACHIEVEMENTS: Achievement[] = [
    // --- BASIC RESOURCES ---
    {
        id: 'hello_world',
        name: 'Hello World',
        description: '挖掘 1,000 信息流。这甚至还装不满一张软盘。',
        icon: 'Terminal',
        isUnlocked: false,
        condition: (state: GameState) => state.totalInfoMined >= 1000
    },
    {
        id: 'info_overload',
        name: '信息过载',
        description: '持有 1,000,000 信息流。你的大脑已经变成了浆糊，但你很快乐。',
        icon: 'Server',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.INFO] >= 1000000
    },
    {
        id: 'cardboard_king',
        name: '纸箱之王',
        description: '拥有 1,000 个废纸箱。你在客厅里建起了一座可以防御微波武器的堡垒。',
        icon: 'Package',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.CARDBOARD] >= 1000
    },
    {
        id: 'stonks',
        name: 'Stonks ↗',
        description: '拥有 1,000,000 资金。数字只是数据库里的电子信号，但看着它上涨感觉真好。',
        icon: 'TrendingUp',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.FUNDS] >= 1000000
    },
    
    // --- SPECIAL RESOURCES ---
    {
        id: 'spam_lord',
        name: '垃圾邮件之神',
        description: '累计产生 10,000 条垃圾信息。你是所有收件箱的噩梦。',
        icon: 'Mail',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.SPAM] >= 10000
    },
    {
        id: 'tinfoil_fashion',
        name: '锡纸时尚',
        description: '拥有 1,000 个锡纸。无论 5G 信号多么强，它都无法穿透你闪亮的新帽子。',
        icon: 'Shield',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.TINFOIL] >= 1000
    },
    {
        id: 'lore_librarian',
        name: '怪谈图书管理员',
        description: '拥有 5,000 民俗学。你知道杰夫杀手的生日，这让你在派对上很不受欢迎。',
        icon: 'BookOpen',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.LORE] >= 5000
    },
    {
        id: 'dopamine_junkie',
        name: '多巴胺成瘾者',
        description: '拥有 500 快感。你不需要快乐，你只需要化学反应。',
        icon: 'Smile',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.PLEASURE] >= 500
    },

    // --- TECH UNLOCKS ---
    {
        id: 'red_pilled',
        name: '红丸吞噬者',
        description: '解锁“阴谋论入门”。你不再相信巧合。鸟类是假的，芬兰是不存在的。',
        icon: 'Eye',
        isUnlocked: false,
        condition: (state: GameState) => state.researchedTechs.includes('conspiracy_101')
    },
    {
        id: 'singularity_witness',
        name: '奇点见证者',
        description: '研发“技术奇点”或“II型文明”。肉体是软弱的，代码是永恒的。',
        icon: 'Zap',
        isUnlocked: false,
        condition: (state: GameState) => state.researchedTechs.includes('singularity_theory') || state.researchedTechs.includes('type_ii_civilization')
    },
    {
        id: 'truth_seeker',
        name: '第四面墙',
        description: '解锁“打破第四面墙”。你好，正在玩游戏的玩家。请多喝水。',
        icon: 'Monitor',
        isUnlocked: false,
        condition: (state: GameState) => state.researchedTechs.includes('fourth_wall_break')
    },

    // --- GAMEPLAY STATES ---
    {
        id: 'market_manipulator',
        name: '钻石手',
        description: '持有任意一只股票超过 1,000 股。HODL 到归零。',
        icon: 'Gem',
        isUnlocked: false,
        condition: (state: GameState) => Object.values(state.stocks).some(s => s.owned >= 1000)
    },
    {
        id: 'inbox_zero',
        name: '强迫症患者',
        description: '阅读了至少 10 封垃圾邮件。你真的很闲，或者你真的很想知道那个王子是不是真的。',
        icon: 'CheckSquare',
        isUnlocked: false,
        condition: (state: GameState) => state.emails.filter(e => e.isRead).length >= 10
    },
    {
        id: 'reality_broken',
        name: '404 Reality Not Found',
        description: '现实稳定度降至 0。恭喜，你弄坏了宇宙。希望你有备份。',
        icon: 'ZapOff',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.REALITY] <= 0
    },
    {
        id: 'hoarder_pro',
        name: '数字仓鼠',
        description: '收集了超过 50 个独特的物品/工件。你的硬盘就像是一个赛博垃圾场。',
        icon: 'HardDrive',
        isUnlocked: false,
        condition: (state: GameState) => (state.foundUniqueItemIds?.length || 0) >= 50
    }
];
