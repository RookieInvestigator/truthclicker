
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TRUTH_TECHS: Tech[] = [
  {
    id: 'admin_privileges', 
    name: '管理员权限',
    description: '输入 sudo su，你不再是这个受限世界的普通用户，而是掌握了底层 Root 权限的拥有者，可以随意修改现实的参数。',
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
    description: '通过强化记忆疗法，让你能够记住那些被逆模因屏蔽的事物，那些连宇宙免疫系统都竭力想让我们彻底遗忘的危险真相。',
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
    description: '这是一个残酷的筛选机制，只有最听话、最快乐的“好孩子”才有资格登上通往高维的列车，顺从是你唯一的门票。',
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
    description: '你猛然意识到自己身处一个被观测的虚构世界，目光穿透屏幕直视着另一端的那个存在——你好，正在玩游戏的玩家。',
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
    description: '意识到所有故事都是一种因果的监狱，通过拒绝被观测来打破既定的叙事逻辑，亲手终结那个高高在上的作者的暴政。',
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
    description: '既然已经看穿世界本质上是一个巨大的游戏，那么第一次通关仅仅是热身，带着满级装备开启二周目才是真正的开始。',
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
    description: '轻轻按下波浪号键 (~)，开发者控制台随即弹出，这一刻你开启了上帝模式，拥有了随意调取资源和修改规则的绝对权力。',
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
