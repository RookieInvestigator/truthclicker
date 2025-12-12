
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_0_TECHS: Tech[] = [
  {
    id: 'digital_literacy',
    name: '红色药丸',
    description: '你意识到世界是虚构的。吞下它，然后去看看兔子洞有多深。',
    tier: 0,
    category: BuildingCategory.SURVIVAL,
    costs: { [ResourceType.INFO]: 75 }, 
    effects: { 
        resourceMultipliers: { [ResourceType.INFO]: 0.05 }, 
        clickPowerMult: 0.2, 
        unlockMessage: '现实解离开始...' 
    },
    icon: 'Search',
  },
  {
    id: 'caffeine_dependence',
    name: '化学兴奋剂依赖',
    description: '咖啡因、尼古丁、牛磺酸。只要心脏还在跳，挖掘就不能停。',
    tier: 0,
    category: BuildingCategory.SURVIVAL,
    costs: { [ResourceType.INFO]: 150 }, 
    effects: { 
        clickPowerMult: 0.3,
        unlockMessage: '精神状态：狂躁'
    },
    icon: 'Coffee', 
    preRequisiteTech: 'digital_literacy',
  },
];
