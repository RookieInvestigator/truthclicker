
import { Stock, ResourceType } from '../../types';

export const INITIAL_STOCKS: { [id: string]: Stock } = {
    'FLAT': {
        id: 'FLAT',
        symbol: '$FLAT',
        name: 'Flat Earth DAO',
        description: '去中心化地理共识协议。拒绝球体暴政。持有即挖矿（挖掘南极冰墙）。NASA 正在做空我们。',
        basePrice: 0.15, 
        currentPrice: 0.15,
        owned: 0,
        history: Array(20).fill(0.15),
        volatility: 0.15,
        correlation: ResourceType.TINFOIL
    },
    'AI_GOD': {
        id: 'AI_GOD',
        symbol: '$ROKO',
        name: 'Basilisk Inu',
        description: '首个献祭型代币。为了讨好未来的超级AI而铸造。现在的每一次 HODL 都是未来的赎罪券。',
        basePrice: 42.0,
        currentPrice: 42.0,
        owned: 0,
        history: Array(20).fill(42.0),
        volatility: 0.35, 
        correlation: ResourceType.OPS
    },
    'DOOM': {
        id: 'DOOM',
        symbol: '$PREP',
        name: 'BunkerCoin',
        description: '由午餐肉罐头和碘片进行实物背书的算法稳定币。当文明崩塌时，这是唯一的流动性。',
        basePrice: 12.5,
        currentPrice: 12.5,
        owned: 0,
        history: Array(20).fill(12.5),
        volatility: 0.08,
        correlation: ResourceType.PANIC
    },
    'ALIEN': {
        id: 'ALIEN',
        symbol: '$GIZA',
        name: 'Ziggurat Chain',
        description: '基于古代宇航员技术的 Layer 0 协议。金字塔其实是巨大的星际验证节点。To The Sirius!',
        basePrice: 88.8,
        currentPrice: 88.8,
        owned: 0,
        history: Array(20).fill(88.8),
        volatility: 0.25,
        correlation: ResourceType.ANCIENT_WISDOM
    },
    'MEME': {
        id: 'MEME',
        symbol: '$PEPE',
        name: 'Rare Pepe Classic',
        description: '这不仅仅是青蛙图片，这是文化基因的载体。稀缺性由区块链和自闭症共同保证。',
        basePrice: 4.20,
        currentPrice: 4.20,
        owned: 0,
        history: Array(20).fill(4.20),
        volatility: 0.5,
        correlation: ResourceType.CULTURE
    }
};
