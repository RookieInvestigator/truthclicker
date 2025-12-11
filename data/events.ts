
import { GameEvent, ResourceType } from '../types';

// Helper to create template
const createEventTemplate = (
    id: string, 
    name: string, 
    description: string, 
    type: GameEvent['type'], 
    duration: number, 
    multipliers: { [key in ResourceType]?: number },
    reqTech?: string[]
): Omit<GameEvent, 'startTime'> => ({
    id, name, description, type, duration, multipliers, reqTech
});

export const POSSIBLE_EVENTS: Omit<GameEvent, 'startTime'>[] = [
    // ==========================================
    // GENERIC BUFFS/DEBUFFS (For Choice Events)
    // ==========================================
    createEventTemplate('temp_ops_boost', '算力超频', '临时分配了额外的云端资源。', 'positive', 30, { [ResourceType.OPS]: 1.5, [ResourceType.CODE]: 1.2 }),
    createEventTemplate('temp_ops_drain', '系统卡顿', '后台正在运行未知的更新进程。', 'negative', 30, { [ResourceType.OPS]: 0.5 }),
    
    createEventTemplate('temp_funds_boost', '牛市行情', '短期投资回报率上升。', 'positive', 45, { [ResourceType.FUNDS]: 1.5 }),
    createEventTemplate('temp_funds_leak', '账户冻结', '部分资金被临时锁定以进行安全审查。', 'negative', 45, { [ResourceType.FUNDS]: 0.5 }),

    createEventTemplate('temp_info_surge', '信息洪流', '发现了一个未受保护的数据接口。', 'positive', 60, { [ResourceType.INFO]: 2.0 }),
    createEventTemplate('temp_info_drought', '网络限流', 'ISP 正在对你的连接进行节流。', 'negative', 60, { [ResourceType.INFO]: 0.2 }),

    createEventTemplate('temp_panic_spike', '恐慌发作', '偏执狂的妄想控制了大脑。', 'negative', 40, { [ResourceType.PANIC]: 2.0, [ResourceType.MIND_CONTROL]: 1.2 }),
    createEventTemplate('temp_clarity', '思维清晰', '看穿了噪音。', 'positive', 40, { [ResourceType.PANIC]: 0.5, [ResourceType.TRUTH]: 1.2 }),

    createEventTemplate('temp_luck_boost', '命运眷顾', '宇宙的随机数生成器似乎偏向了你。', 'positive', 30, { [ResourceType.PROBABILITY]: 1.5, [ResourceType.CLUE]: 1.5 }),
    createEventTemplate('temp_glitch', '现实故障', '物理常数发生了轻微偏移。', 'glitch', 20, { [ResourceType.REALITY]: 0.5, [ResourceType.TRUTH]: 2.0 }),

    // ==========================================
    // STANDARD RANDOM EVENTS
    // ==========================================
    createEventTemplate(
        'viral_trend',
        '病毒式传播',
        '你的内容击中了算法的 G 点。流量如洪水般涌入。',
        'positive',
        60,
        { [ResourceType.INFO]: 1.3, [ResourceType.FOLLOWERS]: 1.3, [ResourceType.FUNDS]: 1.2 } 
    ),
    createEventTemplate(
        'ddos_attack',
        'DDoS 攻击',
        '海量僵尸网络正在轰炸你的端口。带宽被塞满。',
        'negative',
        45,
        { [ResourceType.INFO]: 0.6, [ResourceType.OPS]: 0.6 }
    ),
    createEventTemplate(
        'market_crash',
        '市场熔断',
        '恐慌性抛售。你的资产价值正在蒸发。',
        'negative',
        60,
        { [ResourceType.FUNDS]: 0.6, [ResourceType.TECH_CAPITAL]: 0.6 }
    ),
    createEventTemplate(
        'energy_grid_failure',
        '电网故障',
        '变压器爆炸。只能依靠备用电源维持最低限度的运行。',
        'negative',
        30,
        { [ResourceType.POWER]: 0.5, [ResourceType.OPS]: 0.5 }
    ),
    createEventTemplate(
        'flamewar',
        '网络骂战',
        '评论区变成了战场。虽然产生了大量流量，但都是有毒的。',
        'mixed',
        50,
        { [ResourceType.INFO]: 1.3, [ResourceType.SPAM]: 2.0, [ResourceType.PANIC]: 1.2, [ResourceType.CRED]: 0.7 } 
    ),

    // --- TIER 1+ TECH EVENTS ---
    createEventTemplate(
        'crypto_bull_run',
        '加密货币牛市',
        '甚至连空气币都在涨。这是套现的好时机。',
        'positive',
        45,
        { [ResourceType.FUNDS]: 1.3, [ResourceType.TECH_CAPITAL]: 1.15 }, 
        ['blockchain_basics']
    ),
    createEventTemplate(
        'zero_day_exploit',
        '0-Day 漏洞发现',
        '你在核心库中发现了一个未修补的后门。权限提升。',
        'positive',
        30,
        { [ResourceType.OPS]: 1.3, [ResourceType.CODE]: 1.3, [ResourceType.CRED]: 1.2 }, 
        ['basic_scripting']
    ),
    createEventTemplate(
        'retro_revival',
        '复古潮爆发',
        '现在每个人都想要那种低保真的感觉。旧数据变成了宝藏。',
        'positive',
        90,
        { [ResourceType.CULTURE]: 1.3, [ResourceType.LORE]: 1.25 }, 
        ['abandonware_archeology']
    ),

    // --- URBAN LEGENDS & MYSTERIES ---
    createEventTemplate(
        'polybius_cabinet',
        '波利比乌斯目击',
        '一台神秘的黑色街机出现在角落。玩过的人都出现了失忆和夜惊。',
        'glitch',
        60,
        { [ResourceType.MIND_CONTROL]: 1.3, [ResourceType.PANIC]: 1.5, [ResourceType.FUNDS]: 0.7 },
        ['conspiracy_101']
    ),
    createEventTemplate(
        'cicada_puzzle',
        '蝉 3301 谜题',
        '一张隐藏在JPEG噪点中的图片引发了全球极客的狂欢。智慧的试炼。',
        'positive',
        120,
        { [ResourceType.CODE]: 1.3, [ResourceType.KNOWLEDGE]: 1.2, [ResourceType.OPS]: 0.8 },
        ['steganography']
    ),
    createEventTemplate(
        'rokos_basilisk',
        '洛可蛇怪',
        '未来的超级AI正在审视你现在的贡献。如果你不全力帮它诞生，它就会惩罚你。快工作！',
        'negative',
        45,
        { [ResourceType.OPS]: 2.0, [ResourceType.CODE]: 2.0, [ResourceType.PANIC]: 3.0, [ResourceType.PLEASURE]: 0.5 },
        ['singularity_theory']
    ),
    createEventTemplate(
        'time_cube_truth',
        '时间立方',
        '地球同时有4个角！一天是4天！你受过的教育都是愚蠢的谎言！',
        'glitch',
        40,
        { [ResourceType.LORE]: 1.5, [ResourceType.KNOWLEDGE]: 0.5, [ResourceType.TRUTH]: 1.3, [ResourceType.CRED]: 0.5 },
        ['symbolism_decoding']
    ),
    createEventTemplate(
        'global_hum',
        '全球嗡嗡声',
        '只有2%的人能听到的低频噪音。它来自地下，还是来自潜艇通讯？',
        'mixed',
        60,
        { [ResourceType.PANIC]: 1.3, [ResourceType.CLUE]: 1.3, [ResourceType.PLEASURE]: 0.7 },
        ['radio_theory']
    ),
    createEventTemplate(
        'noclip_reality',
        '切出后室',
        '你靠墙太近，不小心卡出了现实边界。这里只有潮湿的地毯和单调的黄色。',
        'negative',
        90,
        { [ResourceType.REALITY]: 0.5, [ResourceType.INFO]: 0.5, [ResourceType.LORE]: 2.0, [ResourceType.PANIC]: 2.0 },
        ['liminal_space_theory']
    ),
    createEventTemplate(
        'y2k38_bug',
        '2038年问题',
        '32位时间戳溢出。系统以为时间回到了1901年。',
        'glitch',
        30,
        { [ResourceType.CODE]: 0.5, [ResourceType.OPS]: 0.5, [ResourceType.LORE]: 1.5 },
        ['basic_scripting']
    ),
    createEventTemplate(
        'time_traveler_post',
        '时间旅行者发帖',
        'ID为 TimeTravel_0 的用户贴出了 IBM 5100 的图纸。他说2036年没有奥运会。',
        'mixed',
        60,
        { [ResourceType.FOLLOWERS]: 1.25, [ResourceType.STORY]: 1.3, [ResourceType.TRUTH]: 0.8 }, 
        ['forum_culture']
    ),
    createEventTemplate(
        'echo_chamber_collapse',
        '回声室坍塌',
        '所有的评论都是同一个机器人发的。你对着镜子说了十年话。',
        'negative',
        50,
        { [ResourceType.FOLLOWERS]: 0.2, [ResourceType.REALITY]: 0.7, [ResourceType.PANIC]: 1.5 },
        ['dead_internet_theory']
    ),
    createEventTemplate(
        'reality_leak',
        '现实泄漏',
        '物理常数发生了微小的偏移。世界变得不稳定，但真相更容易被观测。',
        'glitch',
        40,
        { [ResourceType.REALITY]: 0.7, [ResourceType.TRUTH]: 1.4, [ResourceType.PANIC]: 1.5 }, 
        ['quantum_luck']
    ),
    createEventTemplate(
        'dopamine_overload',
        '多巴胺过载',
        '极致的快感导致理智下降。',
        'mixed',
        30,
        { [ResourceType.PLEASURE]: 1.5, [ResourceType.OPS]: 0.7, [ResourceType.KNOWLEDGE]: 0.7 }, 
        ['hedonistic_imperative']
    ),
    createEventTemplate(
        'solar_flare',
        '卡林顿级耀斑',
        '电磁干扰增强。电子设备失灵，但有些东西在噪音中苏醒。',
        'glitch',
        20,
        { [ResourceType.OPS]: 0.5, [ResourceType.ANCIENT_WISDOM]: 1.4, [ResourceType.POWER]: 1.5 }, 
        ['hardware_assembly']
    )
];
