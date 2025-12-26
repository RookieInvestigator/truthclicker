
import { Achievement, ResourceType, GameState } from '../../types';

export const ACHIEVEMENTS: Achievement[] = [
    {
        id: 'first_blood',
        name: 'Hello World',
        description: '挖掘 1,000 信息流。',
        icon: 'Terminal',
        isUnlocked: false,
        condition: (state: GameState) => state.totalInfoMined >= 1000
    },
    {
        id: 'hoarder',
        name: '赛博拾荒者',
        description: '拥有 1,000 个废纸箱。',
        icon: 'Package',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.CARDBOARD] >= 1000
    },
    {
        id: 'millionaire',
        name: '第一桶金',
        description: '拥有 1,000,000 资金。',
        icon: 'DollarSign',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.FUNDS] >= 1000000
    },
    {
        id: 'conspiracist',
        name: '锡纸帽协会',
        description: '解锁“阴谋论入门”科技。',
        icon: 'Eye',
        isUnlocked: false,
        condition: (state: GameState) => state.researchedTechs.includes('conspiracy_101')
    },
    {
        id: 'clicker_god',
        name: '指尖宇宙',
        description: '点击挖掘次数超过 5,000 次（预估）。',
        icon: 'MousePointer',
        isUnlocked: false,
        condition: (state: GameState) => false // Needs click tracker, placeholder
    },
    {
        id: 'reality_broken',
        name: '故障制造者',
        description: '现实稳定度降至 0。',
        icon: 'ZapOff',
        isUnlocked: false,
        condition: (state: GameState) => state.resources[ResourceType.REALITY] <= 0
    }
];
