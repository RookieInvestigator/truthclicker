
import { Building, ResourceType, BuildingCategory } from '../../../types';

export const NETWORK_BUILDINGS: Building[] = [
  {
    id: 'info_waterfall', 
    name: '信息瀑布流',
    description: '手指机械下滑。算法精准投喂。无尽的多巴胺与数据。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.INFO]: 25 }, // Cost increased 15 -> 25
    baseProduction: { [ResourceType.INFO]: 0.8 }, // Prod increased 0.5 -> 0.8
    costMultiplier: 1.15,
    icon: 'ArrowDown',
    unlockRequirement: 0, // Starter building
  },
  {
    id: 'directory_indexer', 
    name: '开放目录索引',
    description: '寻找配置错误的服务器文件列表。垃圾山中的真实碎片。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.INFO]: 3500 }, // Cost increased 2500 -> 3500
    baseProduction: { [ResourceType.INFO]: 3.5, [ResourceType.TRUTH]: 0.0001 }, // Prod increased 2.0 -> 3.5
    costMultiplier: 1.15,
    icon: 'FolderSearch',
    unlockRequirement: 0,
    requireTech: ['directory_traversal'],
  },
  {
    id: 'open_directory_scraper',
    name: '全网爬虫脚本',
    description: '不再手动翻阅。自动化的脚本日夜不休地抓取公开数据。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.INFO]: 1200, [ResourceType.CODE]: 20 }, // Cost increased 600 -> 1200
    baseProduction: { [ResourceType.INFO]: 7.0, [ResourceType.LORE]: 0.05 }, // Prod increased 4.0 -> 7.0
    costMultiplier: 1.2,
    icon: 'Bot',
    unlockRequirement: 0,
    requireTech: ['search_operators'],
  },
  {
    id: 'encrypted_relay',
    name: '加密中继节点',
    description: '一个位于离岸服务器上的聊天室中转站。用于匿名交换情报。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.INFO]: 800, [ResourceType.CODE]: 20 }, // Cost increased 400 -> 800
    baseProduction: { [ResourceType.INFO]: 4.5, [ResourceType.CRED]: 0.02 }, // Prod increased 2.5 -> 4.5
    costMultiplier: 1.15,
    icon: 'MessageSquare',
    unlockRequirement: 0,
    requireTech: ['doomscrolling'],
  },
  {
    id: 'imageboard_node', 
    name: '匿名贴图板',
    description: '绿字黑底。身份毫无意义，只有观点和梗在传播。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.INFO]: 1500, [ResourceType.FUNDS]: 20 }, // Cost increased 500 -> 1500
    baseProduction: { [ResourceType.INFO]: 6.0, [ResourceType.CRED]: 0.05, [ResourceType.POWER]: -1 }, // Prod increased 3 -> 6
    costMultiplier: 1.2,
    icon: 'FileImage',
    unlockRequirement: 0,
    requireTech: ['doomscrolling'], 
  },
  {
    id: 'commercial_vpn',
    name: '商业数据流',
    description: '付费购买的高带宽数据通道。用金钱换取纯粹的信息流。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.FUNDS]: 3000, [ResourceType.CODE]: 100 },
    baseProduction: { [ResourceType.INFO]: 80.0, [ResourceType.FUNDS]: -8.0 }, // Prod increased 50 -> 80
    costMultiplier: 1.2,
    icon: 'Globe',
    unlockRequirement: 0,
    requireTech: ['payment_processing'],
  },
  {
    id: 'rss_aggregator',
    name: '信息聚合器',
    description: '整合RSS和API接口。将互联网碎片集中到仪表盘。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.INFO]: 3000, [ResourceType.CODE]: 100 }, // Cost increased 1500 -> 3000
    baseProduction: { [ResourceType.INFO]: 15.0, [ResourceType.SPAM]: 0.5 }, // Prod increased 8.0 -> 15.0
    costMultiplier: 1.2,
    icon: 'Rss',
    unlockRequirement: 0,
    requireTech: ['rss_feeds'],
  },
  {
    id: 'ham_radio_station',
    name: '业余无线电台',
    description: '当互联网断开时，只有短波还在。捕捉来自电离层的模拟信号。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.FUNDS]: 300, [ResourceType.CARDBOARD]: 50, [ResourceType.INFO]: 500 }, // Added Info cost
    baseProduction: { [ResourceType.INFO]: 8.0, [ResourceType.LORE]: 0.1, [ResourceType.POWER]: -2 }, // Prod increased 4.0 -> 8.0
    costMultiplier: 1.2,
    icon: 'Radio',
    unlockRequirement: 0,
    requireTech: ['wire_splicing'],
  },
  {
    id: 'spam_bot_swarm', 
    name: '垃圾邮件机器人',
    description: '不知疲倦地发送“尼日利亚王子”的问候。现在它们更加猖獗了。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.CODE]: 200, [ResourceType.INFO]: 1500 }, // Info cost 500 -> 1500
    baseProduction: { [ResourceType.SPAM]: 300.0, [ResourceType.FUNDS]: 2.0 }, 
    costMultiplier: 1.2,
    icon: 'Mail',
    unlockRequirement: 0,
    requireTech: ['spam_algorithms'],
  },
  {
    id: 'lan_party', 
    name: '局域网派对',
    description: '几个人挤在地下室。空气中弥漫着披萨味。物理连接总是最快的。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.FUNDS]: 200, [ResourceType.CARDBOARD]: 20, [ResourceType.INFO]: 1000 }, // Added Info cost
    baseProduction: { [ResourceType.INFO]: 30, [ResourceType.OPS]: 0.5, [ResourceType.POWER]: -5.0 }, // Prod increased 15 -> 30
    costMultiplier: 1.25,
    icon: 'Gamepad2',
    unlockRequirement: 0,
    requireTech: ['doomscrolling'],
  },
  {
    id: 'public_cam_network',
    name: '公网摄像头嗅探',
    description: '利用默认密码扫描全球监控探头。窥视世界的眼睛。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.INFO]: 8000, [ResourceType.CODE]: 200 }, // Cost increased 2500 -> 8000
    baseProduction: { [ResourceType.INFO]: 25.0, [ResourceType.CLUE]: 0.1, [ResourceType.SPAM]: 5.0 }, // Prod increased 12 -> 25
    costMultiplier: 1.25,
    icon: 'Video',
    unlockRequirement: 0,
    requireTech: ['port_scanner_bot'],
  },
  {
    id: 'proxy_node', 
    name: '代理节点',
    description: '一个位于不知名岛国的服务器，让你的流量在黑暗中跳跃。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.INFO]: 10000, [ResourceType.OPS]: 50 }, // Cost increased 3000 -> 10000
    baseProduction: { [ResourceType.INFO]: 60, [ResourceType.OPS]: 0.8, [ResourceType.POWER]: -5.0 }, // Prod increased 30 -> 60
    costMultiplier: 1.2,
    icon: 'Globe',
    unlockRequirement: 0,
    requireTech: ['vpn_tunneling'],
  },
  {
    id: 'tor_node', 
    name: 'Tor 节点',
    description: '成为洋葱路由的一部分。你的带宽将用于保护他人的匿名性。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.INFO]: 20000, [ResourceType.CODE]: 500 }, // Cost increased 5000 -> 20000
    baseProduction: { [ResourceType.INFO]: 120, [ResourceType.OPS]: 1.5, [ResourceType.POWER]: -10.0 }, // Prod increased 60 -> 120
    costMultiplier: 1.25,
    icon: 'Layers',
    unlockRequirement: 0,
    requireTech: ['tor_network'],
  },
  {
    id: 'dark_fiber_tap',
    name: '骨干网窃听点',
    description: '物理接入洲际光缆。如同直接饮用消防栓里的水。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.OPS]: 1000, [ResourceType.FUNDS]: 5000, [ResourceType.INFO]: 50000 }, // Added massive INFO cost
    baseProduction: { [ResourceType.INFO]: 400, [ResourceType.OPS]: 4.0, [ResourceType.POWER]: -20.0 }, // Prod increased 200 -> 400
    costMultiplier: 1.3,
    icon: 'Zap',
    unlockRequirement: 0,
    requireTech: ['dark_fiber'],
  },
  {
    id: 'bot_comment_factory', 
    name: '僵尸评论工厂',
    description: '数百万个账号同时生成看起来很真实的评论。死互联网的基石。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.CODE]: 8000, [ResourceType.INFO]: 40000 }, // Info cost 20k -> 40k
    baseProduction: { [ResourceType.SPAM]: 100.0, [ResourceType.INFO]: 80.0, [ResourceType.FOLLOWERS]: 2.0, [ResourceType.OPS]: -5.0 }, // Info prod 50 -> 80
    costMultiplier: 1.25,
    icon: 'MessageSquare',
    unlockRequirement: 0,
    requireTech: ['dead_internet_theory'],
  },
  {
    id: 'satellite_uplink',
    name: '卫星上行链路',
    description: '绕过地面基站，直接与轨道通讯。不再受制于ISP。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.FUNDS]: 20000, [ResourceType.OPS]: 2000, [ResourceType.INFO]: 80000 }, // Added massive INFO cost
    baseProduction: { [ResourceType.INFO]: 600, [ResourceType.OPS]: 8.0, [ResourceType.POWER]: -30.0 }, // Prod increased 300 -> 600
    costMultiplier: 1.35,
    icon: 'Satellite',
    unlockRequirement: 0,
    requireTech: ['orbital_mechanics'],
  },
  {
    id: 'quantum_entanglement_link',
    name: '量子纠缠链路',
    description: '超越光速的通信。即使服务器在火星，ping值也是0。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.OPS]: 50000, [ResourceType.TECH_CAPITAL]: 1000, [ResourceType.INFO]: 200000 }, // Added INFO cost
    baseProduction: { [ResourceType.INFO]: 2000, [ResourceType.OPS]: 40.0, [ResourceType.POWER]: -100.0 }, // Prod 1000 -> 2000
    costMultiplier: 1.5,
    icon: 'Activity',
    unlockRequirement: 0,
    requireTech: ['ansible_network'],
  },
  {
    id: 'neuromorphic_internet',
    name: '神经形态互联网',
    description: '网络本身即大脑。信息不再传输，而是自我繁殖。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.OPS]: 200000, [ResourceType.BIOMASS]: 10000, [ResourceType.CODE]: 50000 },
    baseProduction: { [ResourceType.INFO]: 35000.0, [ResourceType.OPS]: -500.0, [ResourceType.MIND_CONTROL]: 2.0, [ResourceType.POWER]: -500.0 }, // Prod 25k -> 35k
    costMultiplier: 1.8,
    icon: 'BrainCircuit',
    unlockRequirement: 0,
    requireTech: ['neural_cloud'],
  },
  {
    id: 'event_horizon_telescope',
    name: '视界捕获阵列',
    description: '读取黑洞视界表面编码的信息。宇宙的回收站。',
    category: BuildingCategory.NETWORK,
    baseCosts: { [ResourceType.OPS]: 1000000, [ResourceType.TECH_CAPITAL]: 500000, [ResourceType.POWER]: 100000 },
    baseProduction: { [ResourceType.INFO]: 300000.0, [ResourceType.TRUTH]: 0.005, [ResourceType.REALITY]: -0.0001, [ResourceType.OPS]: -5000.0 }, // Prod 200k -> 300k
    costMultiplier: 2.0,
    icon: 'Aperture',
    unlockRequirement: 0,
    requireTech: ['holographic_principle'],
  }
];
