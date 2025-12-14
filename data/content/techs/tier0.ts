
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_0_TECHS: Tech[] = [
  {
    id: 'digital_literacy',
    name: '红色药丸',
    description: '你意识到世界是虚构的。吞下它，然后去看看兔子洞有多深。',
    longDescription: '兔子洞不是一个地点，而是一种心理状态。通过摄入这个隐喻性的构造体，你将你的感官输入与共识现实的数据流解耦。\n\n警告：本体论休克即将到来。一旦开始，你将无法再像普通人那样忽视屏幕背后的闪烁。你会开始看到代码，看到模式，看到那些不想被看到的真相。',
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
    id: 'scavenger_intuition',
    name: '拾荒者直觉',
    description: '你不再看到垃圾，你看到的是资源。那个纸箱不是废品，那是墙壁。那个易拉罐不是垃圾，那是 0.05 信用点。',
    tier: 0,
    category: BuildingCategory.SURVIVAL,
    costs: { [ResourceType.INFO]: 25 }, 
    effects: { 
        unlockMessage: '解锁: 废品回收跑腿'
    },
    icon: 'Trash2', 
    preRequisiteTech: 'digital_literacy',
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

  // --- COMBO TRIGGER PRE-REQUISITES (TEST) ---
  {
    id: 'triad_hardware',
    name: '【测试】三位一体：硬件',
    description: '组合组件 A。只有集齐全部三个组件，才能开启真理之门。',
    tier: 0,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.INFO]: 300 },
    effects: { unlockMessage: '组件 1/3 已就绪' },
    icon: 'Cpu',
    preRequisiteTech: 'digital_literacy'
  },
  {
    id: 'triad_software',
    name: '【测试】三位一体：软件',
    description: '组合组件 B。只有集齐全部三个组件，才能开启真理之门。',
    tier: 0,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.INFO]: 300 },
    effects: { unlockMessage: '组件 2/3 已就绪' },
    icon: 'Code',
    preRequisiteTech: 'digital_literacy'
  },
  {
    id: 'triad_wetware',
    name: '【测试】三位一体：湿件',
    description: '组合组件 C。只有集齐全部三个组件，才能开启真理之门。',
    tier: 0,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.INFO]: 300 },
    effects: { unlockMessage: '组件 3/3 已就绪' },
    icon: 'Brain',
    preRequisiteTech: 'digital_literacy'
  },

  // --- COMBO TRIGGER OUTCOMES (MUTUALLY EXCLUSIVE) ---
  {
    id: 'path_mechanical',
    name: '机械飞升协议',
    description: '你选择了钢铁。肉体是软弱的，唯有机械永恒。',
    longDescription: '通过将意识上传至去中心化的钢铁军团，你彻底摒弃了生物学的限制。这种形态拥有极致的物理强度和生存能力，但代价是失去了做梦的能力。',
    tier: 0,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.OPS]: 9999999 }, // Unbuyable normally
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 2.0, [ResourceType.POWER]: 0.5 },
        globalCostReduction: 0.2,
        unlockMessage: '血肉苦弱，机械飞升'
    },
    icon: 'Settings',
    exclusiveWith: ['path_digital', 'path_biological'],
    highlight: true
  },
  {
    id: 'path_digital',
    name: '数字永生协议',
    description: '你选择了代码。物质是累赘，唯有数据永存。',
    longDescription: '你将自己格式化为一段自我复制的波函数，栖息在互联网的底层协议中。你无处不在，却又无处可寻。世界对你来说只是可读写的变量。',
    tier: 0,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.INFO]: 9999999 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 2.0, [ResourceType.CODE]: 0.5 },
        clickPowerMult: 2.0,
        unlockMessage: '物质消解，数据永存'
    },
    icon: 'Wifi',
    exclusiveWith: ['path_mechanical', 'path_biological'],
    highlight: true
  },
  {
    id: 'path_biological',
    name: '血肉群巢协议',
    description: '你选择了基因。技术是死路，唯有进化永续。',
    longDescription: '通过基因重组和癌细胞控制技术，你将自己变成了一个不断增殖、适应、吞噬的生物群落。你不需要机器，因为你可以长出更有用的器官。',
    tier: 0,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.BIOMASS]: 9999999 },
    effects: {
        resourceMultipliers: { [ResourceType.BIOMASS]: 2.0, [ResourceType.FUNDS]: 0.5 },
        artifactChanceMult: 0.5,
        unlockMessage: '无限增殖，完美进化'
    },
    icon: 'Dna',
    exclusiveWith: ['path_mechanical', 'path_digital'],
    highlight: true
  },
];
