
import { Building, ResourceType, BuildingCategory } from '../../../types';

export const CAPITAL_BUILDINGS: Building[] = [
  {
    id: 'crypto_faucet',
    name: '加密水龙头',
    description: '每小时点击一次验证码以获取微量的数字货币。数字时代的乞讨。',
    category: BuildingCategory.CAPITAL,
    baseCosts: { [ResourceType.INFO]: 1000, [ResourceType.CODE]: 100 },
    baseProduction: { [ResourceType.FUNDS]: 5.0, [ResourceType.SPAM]: 1.0 }, // 2 -> 5
    costMultiplier: 1.25,
    icon: 'Bitcoin',
    unlockRequirement: 0, 
    requireTech: ['blockchain_basics'],
  },
  {
    id: 'dropshipping_store',
    name: '代发货网店',
    description: '从世界另一端直接发货的廉价小商品。你甚至不需要看到实物，只需要运营流量。',
    category: BuildingCategory.CAPITAL,
    baseCosts: { [ResourceType.FUNDS]: 8000, [ResourceType.INFO]: 5000 }, 
    baseProduction: { [ResourceType.FUNDS]: 150.0, [ResourceType.SPAM]: 10.0 }, // 50 -> 150
    costMultiplier: 1.4,
    icon: 'Globe',
    unlockRequirement: 0, 
    requireTech: ['e_commerce_logic'],
  },
  {
    id: 'nft_minting_rig',
    name: 'NFT 铸造工厂',
    description: '批量生成像素艺术并铸造上链。主要是为了洗钱，偶尔也能骗到韭菜。',
    category: BuildingCategory.CAPITAL,
    baseCosts: { [ResourceType.FUNDS]: 5000, [ResourceType.OPS]: 2000, [ResourceType.CODE]: 500 }, 
    baseProduction: { [ResourceType.FUNDS]: 300.0, [ResourceType.SPAM]: 20.0, [ResourceType.CRED]: -5.0, [ResourceType.TECH_CAPITAL]: 1.0 }, // 80 -> 300
    costMultiplier: 1.5,
    icon: 'Image', 
    unlockRequirement: 0, 
    requireTech: ['blockchain_basics'],
  },
  {
    id: 'shell_company_network',
    name: '离岸空壳公司',
    description: '层层嵌套的公司结构。把你的存在从官方税务数据库中抹去。',
    category: BuildingCategory.CAPITAL,
    baseCosts: { [ResourceType.FUNDS]: 50000, [ResourceType.INFO]: 20000 },
    baseProduction: { [ResourceType.FUNDS]: 1000, [ResourceType.CRED]: 5.0 }, // 200 -> 1000
    costMultiplier: 1.6,
    icon: 'Briefcase',
    unlockRequirement: 0, 
    requireTech: ['mixers_and_tumblers'],
  },
  {
    id: 'defi_liquidity_pool',
    name: 'DeFi 流动性池',
    description: '成为去中心化交易所的做市商。无常损失是不可避免的代价。',
    category: BuildingCategory.CAPITAL,
    baseCosts: { [ResourceType.FUNDS]: 100000, [ResourceType.CODE]: 10000 },
    baseProduction: { [ResourceType.FUNDS]: 3000, [ResourceType.TECH_CAPITAL]: 10.0, [ResourceType.PROBABILITY]: -0.2 }, // 500 -> 3000
    costMultiplier: 1.7,
    icon: 'RefreshCw',
    unlockRequirement: 0,
    requireTech: ['algorithmic_trading_bot'],
  },
  {
    id: 'high_freq_trading_node',
    name: '高频交易节点',
    description: '将服务器搬到离交易所 10 米远的地方，只为了快 1 毫秒。',
    category: BuildingCategory.CAPITAL,
    baseCosts: { [ResourceType.FUNDS]: 250000, [ResourceType.OPS]: 50000, [ResourceType.CODE]: 20000 },
    baseProduction: { [ResourceType.FUNDS]: 15000, [ResourceType.OPS]: -200.0, [ResourceType.TECH_CAPITAL]: 50.0 }, // 1500 -> 15000
    costMultiplier: 2.0,
    icon: 'Zap',
    unlockRequirement: 0,
    requireTech: ['algorithmic_trading_bot'],
  }
];
