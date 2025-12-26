
import { Stock, ResourceType } from '../../../types';

export const INITIAL_STOCKS: { [id: string]: Stock } = {
    'FLAT': {
        id: 'FLAT',
        symbol: '$FLAT',
        name: '地平论',
        description: '相信地球是平的。受谣言和锡纸帽需求驱动。',
        basePrice: 10,
        currentPrice: 10,
        owned: 0,
        history: Array(20).fill(10),
        volatility: 0.05,
        correlation: ResourceType.TINFOIL
    },
    'AI_GOD': {
        id: 'AI_GOD',
        symbol: '$AIGOD',
        name: 'AI 神格化',
        description: '相信 AI 将成为新神。受算力和代码产出驱动。',
        basePrice: 50,
        currentPrice: 50,
        owned: 0,
        history: Array(20).fill(50),
        volatility: 0.08,
        correlation: ResourceType.OPS
    },
    'DOOM': {
        id: 'DOOM',
        symbol: '$DOOM',
        name: '末日准备',
        description: '世界即将终结。受恐慌和生存物资驱动。',
        basePrice: 25,
        currentPrice: 25,
        owned: 0,
        history: Array(20).fill(25),
        volatility: 0.03,
        correlation: ResourceType.PANIC
    },
    'ALIEN': {
        id: 'ALIEN',
        symbol: '$ALIEN',
        name: '古代宇航员',
        description: '金字塔是飞船着陆点。受古代知识驱动。',
        basePrice: 100,
        currentPrice: 100,
        owned: 0,
        history: Array(20).fill(100),
        volatility: 0.12,
        correlation: ResourceType.ANCIENT_WISDOM
    }
};
