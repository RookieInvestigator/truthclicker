
import { Tech, ResourceType } from '../../../types';

export const TIER_0_TECHS: Tech[] = [
  {
    id: 'digital_literacy',
    name: '网络冲浪常识',
    description: '你知道真正的互联网在水面之下。解锁更高级的生存方式。',
    tier: 0,
    costs: { [ResourceType.INFO]: 75 }, 
    effects: { 
        resourceMultipliers: { [ResourceType.INFO]: 0.05 }, // Nerfed 0.1 -> 0.05
        clickPowerMult: 0.2, 
        unlockMessage: '系统初始化... 连入网络' 
    },
    icon: 'Search',
  },
  {
    id: 'caffeine_dependence',
    name: '咖啡因依赖',
    description: '用睡眠换取效率。调查员不需要休息。',
    tier: 0,
    costs: { [ResourceType.INFO]: 150 }, 
    effects: { 
        clickPowerMult: 0.3,
        unlockMessage: '精神状态：亢奋'
    },
    icon: 'Coffee', 
    preRequisiteTech: 'digital_literacy',
  },
];
