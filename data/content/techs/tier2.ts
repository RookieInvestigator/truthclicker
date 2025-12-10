
import { Tech, ResourceType } from '../../../types';

export const TIER_2_TECHS: Tech[] = [
  // --- NETWORK EXPANSION ---
  {
    id: 'usenet_access', 
    name: 'Usenet 访问',
    description: '新闻组是互联网的活化石。所有现代梗的起源都在这里。',
    tier: 2,
    costs: { [ResourceType.INFO]: 5000, [ResourceType.CRED]: 50 }, 
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.25 },
        unlockMessage: '解锁: 新闻组归档'
    },
    icon: 'Newspaper',
    preRequisiteTech: 'rss_feeds'
  },
  {
    id: 'botnet_architecture',
    name: '僵尸网络架构',
    description: '理解如何利用漏洞控制成千上万台物联网设备。',
    tier: 2,
    costs: { [ResourceType.CODE]: 5000, [ResourceType.OPS]: 1500 }, 
    effects: {
        unlockMessage: '解锁: 僵尸网络 / 点击农场'
    },
    icon: 'Bot',
    preRequisiteTech: 'spam_algorithms'
  },
  {
    id: 'vpn_tunneling', 
    name: 'VPN 隧道',
    description: '绕过地理限制，隐藏真实IP。通往深网的第一步。',
    tier: 2,
    costs: { [ResourceType.INFO]: 7500, [ResourceType.FUNDS]: 300 }, 
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.15, [ResourceType.OPS]: 0.1 },
        unlockMessage: '解锁: 代理节点'
    },
    icon: 'Lock',
    preRequisiteTech: 'rss_feeds'
  },
  {
    id: 'creepypasta_analysis', 
    name: 'Creepypasta 分析',
    description: '分析 Slender Man 和 Jeff the Killer 的传播路径。',
    tier: 2,
    costs: { [ResourceType.INFO]: 4500, [ResourceType.LORE]: 50 }, 
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.2 },
        unlockMessage: '民俗学研究入门'
    },
    icon: 'Ghost',
    preRequisiteTech: 'forum_culture'
  },
  {
    id: 'steganography', 
    name: '隐写术 (Steganography)',
    description: '将秘密信息隐藏在图片的像素噪点中。',
    tier: 2,
    costs: { [ResourceType.CODE]: 1500, [ResourceType.INFO]: 8000 }, 
    effects: {
        artifactChanceMult: 0.1,
        unlockMessage: '解锁: 匿名贴图板'
    },
    icon: 'EyeOff',
    preRequisiteTech: 'pixel_art_basics'
  },
  {
    id: 'p2p_sharing', 
    name: 'P2P 文件共享',
    description: 'eMule 和 BitTorrent。人人为我，我为人人。',
    tier: 2,
    costs: { [ResourceType.INFO]: 8000, [ResourceType.OPS]: 1000 }, 
    effects: {
        unlockMessage: '解锁: 盗版软件 FTP'
    },
    icon: 'Share2',
    preRequisiteTech: 'usenet_access'
  },

  // --- HISTORY & ARCHAEOLOGY ---
  {
    id: 'carbon_dating', 
    name: '碳-14 测年法',
    description: '确定文物的年代。揭穿赝品，或者发现不该存在的物体。',
    tier: 2,
    costs: { [ResourceType.KNOWLEDGE]: 50, [ResourceType.INFO]: 3000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 0.1, [ResourceType.CLUE]: 0.1 },
        unlockMessage: '解锁: 时间胶囊挖掘'
    },
    icon: 'Clock',
    preRequisiteTech: 'abandonware_archeology'
  },
  {
    id: 'microfilm_scanning', 
    name: '缩微胶卷扫描',
    description: '在图书馆的地下室里，阅读1950年的报纸。',
    tier: 2,
    costs: { [ResourceType.INFO]: 6000, [ResourceType.CARDBOARD]: 150 }, 
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.2 },
        unlockMessage: '解锁: 缩微阅读器 / 口述历史项目'
    },
    icon: 'Film',
    preRequisiteTech: 'carbon_dating'
  },

  // --- KNOWLEDGE / ESOTERIC EXPANSION ---
  {
    id: 'automatic_writing', 
    name: '自动书写',
    description: '关闭显意识，让潜意识或“那边的东西”借你的手打字。',
    tier: 2,
    costs: { [ResourceType.INFO]: 5000, [ResourceType.KNOWLEDGE]: 15 }, // Reduced 7500 -> 5000
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.2 },
        unlockMessage: '灵感源源不断'
    },
    icon: 'PenTool',
    preRequisiteTech: 'symbolism_decoding'
  },
  {
    id: 'digital_gnosis', 
    name: '数字灵知',
    description: '互联网不仅是网络，它是集体潜意识的物理投射。信息即灵魂。',
    tier: 2,
    costs: { [ResourceType.INFO]: 7000, [ResourceType.KNOWLEDGE]: 40 }, // Reduced 10000 -> 7000
    effects: {
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 0.2 },
        unlockMessage: '神性火花已点燃'
    },
    icon: 'Sparkles',
    preRequisiteTech: 'numerology_basics'
  },

  // --- SURVIVAL / TECH ---
  {
    id: 'chlorella_cultivation',
    name: '小球藻培养槽',
    description: '在衣柜里用LED灯养殖高蛋白藻类。末日生存口粮。',
    tier: 2,
    costs: { [ResourceType.FUNDS]: 3000, [ResourceType.CARDBOARD]: 200 }, 
    effects: { 
        resourceMultipliers: { [ResourceType.BIOMASS]: 0.2, [ResourceType.FUNDS]: 0.1 }, 
        unlockMessage: '实现蛋白质自给自足' 
    },
    icon: 'FlaskConical',
    preRequisiteTech: 'cardboard_architecture',
  },
  {
    id: 'cryptozoology', 
    name: '神秘动物学',
    description: '相信天蛾人和大脚怪的存在并非迷信，而是对已知生物学的补充。',
    tier: 2,
    costs: { [ResourceType.INFO]: 4500, [ResourceType.CLUE]: 25 }, 
    effects: {
        resourceMultipliers: { [ResourceType.CLUE]: 0.2, [ResourceType.LORE]: 0.1 },
        unlockMessage: '解锁: 天蛾人诱捕灯'
    },
    icon: 'PawPrint',
    preRequisiteTech: 'abandoned_angelfire'
  },
  {
    id: 'magic_bullet_theory', 
    name: '魔弹理论 (Magic Bullet)',
    description: '一颗子弹怎么可能在空中转弯？JFK 档案的物理学并不存在。',
    tier: 2,
    costs: { [ResourceType.CLUE]: 80, [ResourceType.INFO]: 9000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.STORY]: 0.2, [ResourceType.CLUE]: 0.1 },
        unlockMessage: '解锁: Grassy Knoll 弹道模拟'
    },
    icon: 'Crosshair',
    preRequisiteTech: 'microfilm_scanning'
  },
  {
    id: 'evp_recording', 
    name: 'EVP 录音技术',
    description: '电子语音现象。在白噪音中捕捉死者的低语。',
    tier: 2,
    costs: { [ResourceType.INFO]: 3600, [ResourceType.CARDBOARD]: 100 }, 
    effects: {
        artifactChanceMult: 0.1,
        unlockMessage: '解锁: 灵界录音机'
    },
    icon: 'Mic',
    preRequisiteTech: 'basic_scripting'
  },
  {
    id: 'magnet_fishing', 
    name: '磁力打捞',
    description: '用强力磁铁在运河中吸附被谋杀案抛弃的凶器。',
    tier: 2,
    costs: { [ResourceType.CARDBOARD]: 200, [ResourceType.FUNDS]: 300 }, 
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 0.1, [ResourceType.CLUE]: 0.1 },
        unlockMessage: '解锁: 运河磁铁钓点'
    },
    icon: 'Anchor',
    preRequisiteTech: 'cardboard_architecture'
  },
  {
    id: 'pseudoscience_marketing', 
    name: '伪科学营销',
    description: '量子波动速读？负离子内裤？只要有人信，就能变现。',
    tier: 2,
    costs: { [ResourceType.INFO]: 6000, [ResourceType.CRED]: 50 }, 
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 0.3 },
        unlockMessage: '解锁: 智商税商店'
    },
    icon: 'DollarSign',
    preRequisiteTech: 'e_commerce_logic'
  },
  {
    id: 'hardware_assembly',
    name: '垃圾佬硬件组装',
    description: '用至强 E5 处理器搭建家用服务器。',
    tier: 2,
    costs: { [ResourceType.INFO]: 2500, [ResourceType.FUNDS]: 800 }, 
    effects: { 
        globalCostReduction: 0.02,
        unlockMessage: '解锁: 屋顶光伏阵列'
    },
    icon: 'Cpu',
    preRequisiteTech: 'basic_scripting',
  },
  {
    id: 'biohacking_basics',
    name: '生物黑客 (Grinders)',
    description: '在指尖植入磁体，感受微波炉的电磁场。',
    tier: 2,
    costs: { [ResourceType.FUNDS]: 8000, [ResourceType.BIOMASS]: 50 }, 
    effects: { 
        clickPowerMult: 0.4,
        artifactChanceMult: 0.2,
        unlockMessage: '解锁: DNA 存储库'
    },
    icon: 'Activity',
    preRequisiteTech: 'chlorella_cultivation',
  },
];
