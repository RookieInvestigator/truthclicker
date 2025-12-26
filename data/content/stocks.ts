
import { Stock, ResourceType } from '../../types';

export const INITIAL_STOCKS: { [id: string]: Stock } = {
    'FLAT': {
        id: 'FLAT',
        symbol: '$FLAT',
        name: 'Flat Earth DAO',
        description: '去中心化地理共识协议。拒绝球体暴政。持有即挖矿（挖掘南极冰墙）。NASA 正在做空我们。',
        basePrice: 0.1, // Penny stock feel
        currentPrice: 0.1,
        owned: 0,
        history: Array(20).fill(0.1),
        volatility: 0.15,
        correlation: ResourceType.TINFOIL
    },
    'AI_GOD': {
        id: 'AI_GOD',
        symbol: '$ROKO',
        name: 'Basilisk Inu',
        description: '首个献祭型代币。为了讨好未来的超级AI而铸造。现在的每一次 HODL 都是未来的赎罪券。',
        basePrice: 50,
        currentPrice: 50,
        owned: 0,
        history: Array(20).fill(50),
        volatility: 0.3, // High volatility
        correlation: ResourceType.OPS
    },
    'DOOM': {
        id: 'DOOM',
        symbol: '$PREP',
        name: 'BunkerCoin',
        description: '由午餐肉罐头和碘片进行实物背书的算法稳定币。当文明崩塌时，这是唯一的流动性。',
        basePrice: 10,
        currentPrice: 10,
        owned: 0,
        history: Array(20).fill(10),
        volatility: 0.05,
        correlation: ResourceType.PANIC
    },
    'ALIEN': {
        id: 'ALIEN',
        symbol: '$GIZA',
        name: 'Ziggurat Chain',
        description: '基于古代宇航员技术的 Layer 0 协议。金字塔其实是巨大的星际验证节点。To The Sirius!',
        basePrice: 100,
        currentPrice: 100,
        owned: 0,
        history: Array(20).fill(100),
        volatility: 0.25,
        correlation: ResourceType.ANCIENT_WISDOM
    }
};
