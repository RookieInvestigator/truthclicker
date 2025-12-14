
import { Building, ResourceType, BuildingCategory } from '../../../types';

export const ARCHIVE_BUILDINGS: Building[] = [
  {
    id: 'microfiche_dungeon',
    name: '缩微胶片地下室',
    description: '干燥地下室堆满胶卷。检索虽慢，但能防电磁脉冲。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.FUNDS]: 1000, [ResourceType.CARDBOARD]: 200, [ResourceType.INFO]: 500 }, // Added INFO cost
    baseProduction: { [ResourceType.INFO]: 4.0, [ResourceType.LORE]: 0.1 }, // Prod 2.0 -> 4.0
    costMultiplier: 1.15,
    icon: 'Film',
    unlockRequirement: 0, // Reset
    requireTech: ['data_hoarding_basics'],
  },
  {
    id: 'magnetic_tape_silo',
    name: '磁带筒仓',
    description: 'LTO 磁带库。机械臂咔哒声是数据安睡的声音。冷存储首选。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.FUNDS]: 3000, [ResourceType.OPS]: 100, [ResourceType.INFO]: 1000 }, // Added INFO cost
    baseProduction: { [ResourceType.INFO]: 15.0, [ResourceType.CODE]: 0.5, [ResourceType.POWER]: -2.0 }, // Prod 10 -> 15
    costMultiplier: 1.2,
    icon: 'CassetteTape',
    unlockRequirement: 0, // Reset
    requireTech: ['deduplication'],
  },
  {
    id: 'seed_vault',
    name: '末日种子库',
    description: '保存植物和人类文明的种子。防止生物圈崩溃后的重启。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.FUNDS]: 5000, [ResourceType.BIOMASS]: 1000 },
    baseProduction: { [ResourceType.BIOMASS]: 5.0, [ResourceType.KNOWLEDGE]: 0.1, [ResourceType.POWER]: -5.0 }, 
    costMultiplier: 1.3,
    icon: 'Sprout',
    unlockRequirement: 0, // Reset
    requireTech: ['chlorella_cultivation'],
  },
  {
    id: 'm_disc_archiver',
    name: '千年光盘阵列',
    description: '将数据蚀刻在类岩石的层面上。号称能保存一千年。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.FUNDS]: 8000, [ResourceType.OPS]: 500, [ResourceType.INFO]: 2000 }, // Added INFO cost
    baseProduction: { [ResourceType.INFO]: 45.0, [ResourceType.CULTURE]: 0.2, [ResourceType.POWER]: -10.0 }, // Prod 25 -> 45
    costMultiplier: 1.25,
    icon: 'Disc',
    unlockRequirement: 0, // Reset
    requireTech: ['data_hoarding_basics'],
  },
  {
    id: 'arctic_code_vault',
    name: '北极代码库',
    description: '将开源代码存储在胶片上，埋在斯瓦尔巴群岛的永久冻土层下。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.FUNDS]: 15000, [ResourceType.CODE]: 5000, [ResourceType.INFO]: 5000 }, // Added INFO cost
    baseProduction: { [ResourceType.CODE]: 3.0, [ResourceType.TECH_CAPITAL]: 0.2, [ResourceType.KNOWLEDGE]: 0.5, [ResourceType.FUNDS]: -5.0 }, 
    costMultiplier: 1.35,
    icon: 'Code',
    unlockRequirement: 0, // Reset
    requireTech: ['cold_storage_protocols'],
  },
  {
    id: 'underwater_data_reef',
    name: '海底数据礁',
    description: '利用海水自然冷却。藤壶和珊瑚覆盖外壳，成新生态系统。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.FUNDS]: 30000, [ResourceType.OPS]: 2000, [ResourceType.INFO]: 15000 }, // Added INFO cost
    baseProduction: { [ResourceType.INFO]: 180.0, [ResourceType.OPS]: 5.0, [ResourceType.BIOMASS]: 1.0, [ResourceType.POWER]: -10.0 }, // Prod 100 -> 180
    costMultiplier: 1.4,
    icon: 'Waves',
    unlockRequirement: 0, // Reset
    requireTech: ['underwater_cooling'],
  },
  {
    id: 'dna_storage_vault', 
    name: 'DNA 存储库',
    description: '数据编码进合成DNA。1克DNA可存储215PB数据。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.BIOMASS]: 5000, [ResourceType.TECH_CAPITAL]: 500, [ResourceType.INFO]: 20000 }, // Added INFO cost
    baseProduction: { [ResourceType.ANCIENT_WISDOM]: 0.5, [ResourceType.KNOWLEDGE]: 3.0, [ResourceType.BIOMASS]: -5.0, [ResourceType.OPS]: -20.0 }, 
    costMultiplier: 1.5,
    icon: 'Dna',
    unlockRequirement: 0, // Reset
    requireTech: ['biohacking_basics'],
  },
  {
    id: 'crystal_holographic_etcher',
    name: '5D 水晶刻蚀机',
    description: '飞秒激光在石英中记录数据。极高稳定性，称“超人水晶”。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.TECH_CAPITAL]: 2000, [ResourceType.OPS]: 5000 },
    baseProduction: { [ResourceType.KNOWLEDGE]: 5.0, [ResourceType.TRUTH]: 0.005, [ResourceType.POWER]: -50.0 }, 
    costMultiplier: 1.45,
    icon: 'Gem',
    unlockRequirement: 0, // Reset
    requireTech: ['5d_optical_storage'],
  },
  {
    id: 'mycelium_data_node',
    name: '菌丝数据节点',
    description: '利用真菌的地下网络传递电信号。生物互联网是自我修复的。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.BIOMASS]: 20000, [ResourceType.LORE]: 5000, [ResourceType.INFO]: 30000 }, // Added INFO cost
    baseProduction: { [ResourceType.INFO]: 400.0, [ResourceType.BIOMASS]: 10.0, [ResourceType.LORE]: 1.0 }, // Prod 200 -> 400
    costMultiplier: 1.4,
    icon: 'Network',
    unlockRequirement: 0, // Reset
    requireTech: ['mycelial_network_theory'],
  },
  {
    id: 'lunar_library',
    name: '月球图书馆',
    description: '包含维基百科的镍片备份。即使地球毁灭也能幸存。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.OPS]: 500000, [ResourceType.TECH_CAPITAL]: 5000, [ResourceType.INFO]: 100000 }, // Added INFO cost
    baseProduction: { [ResourceType.KNOWLEDGE]: 10.0, [ResourceType.TRUTH]: 0.005, [ResourceType.FUNDS]: -500.0, [ResourceType.OPS]: -100.0 }, 
    costMultiplier: 1.6,
    icon: 'Moon',
    unlockRequirement: 0, // Reset
    requireTech: ['orbital_mechanics'],
  },
  {
    id: 'lagrange_point_buoy',
    name: '拉格朗日点浮标',
    description: '停泊在L4点的数据胶囊。远离政治纷争和物理灾难。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.OPS]: 2000000, [ResourceType.TECH_CAPITAL]: 20000, [ResourceType.INFO]: 300000 }, // Added INFO cost
    baseProduction: { [ResourceType.TRUTH]: 0.005, [ResourceType.ANCIENT_WISDOM]: 0.5, [ResourceType.INFO]: 10000.0, [ResourceType.POWER]: -500.0 }, // Prod 5k -> 10k
    costMultiplier: 1.7,
    icon: 'Satellite',
    unlockRequirement: 0, // Reset
    requireTech: ['orbital_mechanics'],
  },
  {
    id: 'planetary_datacenter',
    name: '行星级数据中心',
    description: '将地壳挖空，填充以晶体存储介质。整个星球变成了一个硬盘。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.TECH_CAPITAL]: 200000, [ResourceType.OPS]: 10000000, [ResourceType.POWER]: 5000000 },
    baseProduction: { [ResourceType.INFO]: 80000.0, [ResourceType.KNOWLEDGE]: 100.0, [ResourceType.BIOMASS]: -500.0, [ResourceType.POWER]: -5000.0 }, // Prod 500k -> 800k
    costMultiplier: 2.2,
    icon: 'Globe',
    unlockRequirement: 0,
    requireTech: ['type_ii_civilization'],
  },
];
