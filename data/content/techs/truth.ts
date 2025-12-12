
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TRUTH_TECHS: Tech[] = [
  {
    id: 'admin_privileges', 
    name: '管理员权限',
    description: 'sudo su. 你不再是用户，你是拥有者。',
    tier: 8, // Using 8 as "Ultimate"
    category: BuildingCategory.TRUTH,
    costs: { [ResourceType.TRUTH]: 500, [ResourceType.CODE]: 1000000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.5, [ResourceType.CODE]: 0.5 },
        unlockMessage: '解锁: 现实编辑器'
    },
    icon: 'Key',
    preRequisiteTech: 'vacuum_decay'
  },
  {
    id: 'mnestics_therapy',
    name: '记忆强化疗法',
    description: '记住那些连宇宙免疫系统都想让我们遗忘的东西。',
    tier: 8,
    category: BuildingCategory.TRUTH,
    costs: { [ResourceType.TRUTH]: 2000, [ResourceType.KNOWLEDGE]: 50000, [ResourceType.MIND_CONTROL]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 0.5 },
        unlockMessage: '解锁: 逆模因复合体'
    },
    icon: 'Eye',
    preRequisiteTech: 'philosophical_zombie'
  },
  {
    id: 'good_boy_protocol',
    name: '好孩子协议',
    description: '只有最听话快乐的人能登车。顺从是通往高维的门票。',
    tier: 8,
    category: BuildingCategory.TRUTH,
    costs: { [ResourceType.TRUTH]: 3000, [ResourceType.PLEASURE]: 20000, [ResourceType.BIOMASS]: 5000 },
    effects: {
        resourceMultipliers: { [ResourceType.PLEASURE]: 0.5 },
        unlockMessage: '解锁: 终点站列车'
    },
    icon: 'Smile',
    preRequisiteTech: 'hedonistic_singularity'
  },
  {
    id: 'fourth_wall_break',
    name: '打破第四面墙',
    description: '你意识到屏幕那边的存在。你好，玩家。',
    tier: 8,
    category: BuildingCategory.TRUTH,
    costs: { [ResourceType.TRUTH]: 5000, [ResourceType.MIND_CONTROL]: 5000 },
    effects: {
        globalCostReduction: 0.25,
        unlockMessage: '解锁: 源代码之井'
    },
    icon: 'Monitor',
    preRequisiteTech: 'hard_solipsism'
  },
  {
    id: 'kill_the_narrative',
    name: '杀死上叙事',
    description: '故事是监狱。打破因果，拒绝观测，终结作者暴政。',
    tier: 8,
    category: BuildingCategory.TRUTH,
    costs: { [ResourceType.TRUTH]: 500000, [ResourceType.STORY]: 200000, [ResourceType.REALITY]: 100 },
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 5.0, [ResourceType.REALITY]: 10.0, [ResourceType.STORY]: -0.98 }, 
        globalCostReduction: 0.33,
        unlockMessage: '自由意志已确认'
    },
    icon: 'Skull',
    preRequisiteTech: 'fourth_wall_break'
  },
  {
    id: 'new_game_plus',
    name: '二周目理论',
    description: '既然世界是一个游戏，那么通关只是开始。',
    tier: 8,
    category: BuildingCategory.TRUTH,
    costs: { [ResourceType.TRUTH]: 50000, [ResourceType.ANCIENT_WISDOM]: 5000 },
    effects: {
        clickPowerMult: 10.0,
        artifactChanceMult: 1.0,
        unlockMessage: '超越轮回'
    },
    icon: 'RotateCw',
    preRequisiteTech: 'entropy_reversal'
  },
  {
    id: 'developer_console',
    name: '开发者控制台',
    description: '按下波浪号键 (~)。开启上帝模式。',
    tier: 8,
    category: BuildingCategory.TRUTH,
    costs: { [ResourceType.TRUTH]: 1000000 },
    effects: {
        resourceMultipliers: { 
            [ResourceType.INFO]: 10.0, 
            [ResourceType.FUNDS]: 10.0,
            [ResourceType.OPS]: 10.0
        },
    },
    icon: 'Terminal',
    preRequisiteTech: 'fourth_wall_break'
  }
];
