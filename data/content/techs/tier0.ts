
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_0_TECHS: Tech[] = [
  {
    id: 'digital_literacy',
    name: '红色药丸',
    description: '你意识到世界是虚构的。吞下它，然后去看看兔子洞有多深。',
    longDescription: '兔子洞是一个心理状态。通过摄入这个隐喻性的构造体，你将感官输入与共识现实的数据流解耦。\n\n警告：本体论休克即将到来。一旦开始，你无法再像普通人那样忽视屏幕背后的闪烁。你会开始看到代码，看到模式，看到那些不想被看到的真相。',
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
    longDescription: '客观来说，垃圾桶是我们最容易接触到的兔子洞。\n\n在这座城市的消化系统末端，被社会排泄出来的物品静静地躺在黑暗中。一张揉皱的收据可能揭示一个家庭的破裂，一块损坏的硬盘可能包含着一个公司的毁灭。\n\n当你凝视垃圾深处时，你看到的即是未被过滤的真实——那些被光鲜亮丽的表层世界所否认、所遗忘的阴影。跳进去吧，拾荒者，真相往往就藏在腐烂的果皮下面。',
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
    longDescription: '这是一种为了适应非自然节奏而进行的自我化学改造。\n\n从启蒙时代的咖啡馆孕育出革命思想，到工业革命的茶歇让工人保持清醒，再到如今程序员桌上的能量饮料塔，合法兴奋剂的历史即人类压榨自身生物极限的历史。\n\n你的神经突触被咖啡因浸泡，你的血管里流淌着牛磺酸。你是血肉组成的超频处理器，用心悸作为燃料，换取那额外的几毫秒反应速度。睡去即小死，我们要永远清醒。',
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
