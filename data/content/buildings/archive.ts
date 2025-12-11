
import { Building, ResourceType, BuildingCategory } from '../../../types';

export const ARCHIVE_BUILDINGS: Building[] = [
  {
    id: 'microfiche_dungeon',
    name: '缩微胶片地下室',
    description: '在干燥的地下室里堆满胶卷。虽然检索速度慢，但能防电磁脉冲。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.FUNDS]: 1000, [ResourceType.CARDBOARD]: 200 },
    baseProduction: { [ResourceType.INFO]: 2.0, [ResourceType.LORE]: 0.1 },
    costMultiplier: 1.15,
    icon: 'Film',
    unlockRequirement: 0, // Reset
    requireTech: ['data_hoarding_basics'],
  },
  {
    id: 'magnetic_tape_silo',
    name: '磁带筒仓',
    description: 'LTO 磁带库。机械臂发出的咔哒声是数据安睡的声音。冷存储的首选。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.FUNDS]: 3000, [ResourceType.OPS]: 100 },
    baseProduction: { [ResourceType.INFO]: 10.0, [ResourceType.CODE]: 0.5, [ResourceType.POWER]: -2.0 },
    costMultiplier: 1.2,
    icon: 'CassetteTape',
    unlockRequirement: 0, // Reset
    requireTech: ['deduplication'],
  },
  {
    id: 'seed_vault',
    name: '末日种子库',
    description: '不仅保存植物种子，也保存人类文明的种子。防止生物圈崩溃后的重启。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.FUNDS]: 5000, [ResourceType.BIOMASS]: 1000 },
    baseProduction: { [ResourceType.BIOMASS]: 5.0, [ResourceType.KNOWLEDGE]: 0.1 },
    costMultiplier: 1.3,
    icon: 'Sprout',
    unlockRequirement: 0, // Reset
    requireTech: ['chlorella_cultivation'],
  },
  {
    id: 'm_disc_archiver',
    name: '千年光盘 (M-Disc) 阵列',
    description: '将数据蚀刻在类岩石的层面上。号称能保存一千年。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.FUNDS]: 8000, [ResourceType.OPS]: 500 },
    baseProduction: { [ResourceType.INFO]: 25.0, [ResourceType.CULTURE]: 0.2 },
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
    baseCosts: { [ResourceType.FUNDS]: 15000, [ResourceType.CODE]: 5000 },
    baseProduction: { [ResourceType.CODE]: 3.0, [ResourceType.TECH_CAPITAL]: 0.2, [ResourceType.KNOWLEDGE]: 0.5 },
    costMultiplier: 1.35,
    icon: 'Code',
    unlockRequirement: 0, // Reset
    requireTech: ['cold_storage_protocols'],
  },
  {
    id: 'underwater_data_reef',
    name: '海底数据礁',
    description: '利用海水自然冷却的数据中心。藤壶和珊瑚会覆盖外壳，成为新的生态系统。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.FUNDS]: 30000, [ResourceType.OPS]: 2000 },
    baseProduction: { [ResourceType.INFO]: 100.0, [ResourceType.OPS]: 5.0, [ResourceType.BIOMASS]: 1.0 },
    costMultiplier: 1.4,
    icon: 'Waves',
    unlockRequirement: 0, // Reset
    requireTech: ['underwater_cooling'],
  },
  {
    id: 'dna_storage_vault', 
    name: 'DNA 存储库',
    description: '将数据编码进合成 DNA 的碱基对。1克 DNA 可以存储 215 PB 数据。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.BIOMASS]: 5000, [ResourceType.TECH_CAPITAL]: 500 },
    baseProduction: { [ResourceType.ANCIENT_WISDOM]: 0.5, [ResourceType.KNOWLEDGE]: 3.0, [ResourceType.BIOMASS]: -5.0 },
    costMultiplier: 1.5,
    icon: 'Dna',
    unlockRequirement: 0, // Reset
    requireTech: ['biohacking_basics'],
  },
  {
    id: 'crystal_holographic_etcher',
    name: '5D 水晶刻蚀机',
    description: '利用飞秒激光在石英玻璃中记录数据。由于其极高的稳定性，被称为“超人水晶”。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.TECH_CAPITAL]: 2000, [ResourceType.OPS]: 5000 },
    baseProduction: { [ResourceType.KNOWLEDGE]: 5.0, [ResourceType.TRUTH]: 0.1, [ResourceType.POWER]: -50.0 },
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
    baseCosts: { [ResourceType.BIOMASS]: 20000, [ResourceType.LORE]: 5000 },
    baseProduction: { [ResourceType.INFO]: 200.0, [ResourceType.BIOMASS]: 10.0, [ResourceType.LORE]: 1.0 },
    costMultiplier: 1.4,
    icon: 'Network',
    unlockRequirement: 0, // Reset
    requireTech: ['mycelial_network_theory'],
  },
  {
    id: 'lunar_library',
    name: '月球图书馆',
    description: '由 Arch Mission Foundation 建立。包含维基百科的镍片备份，即使地球毁灭也能幸存。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.OPS]: 500000, [ResourceType.TECH_CAPITAL]: 5000 },
    baseProduction: { [ResourceType.KNOWLEDGE]: 10.0, [ResourceType.TRUTH]: 0.3, [ResourceType.FUNDS]: -500.0 },
    costMultiplier: 1.6,
    icon: 'Moon',
    unlockRequirement: 0, // Reset
    requireTech: ['orbital_mechanics'],
  },
  {
    id: 'lagrange_point_buoy',
    name: '拉格朗日点浮标',
    description: '停泊在 L4 引力平衡点的数据胶囊。远离地球的政治纷争和物理灾难。',
    category: BuildingCategory.ARCHIVE,
    baseCosts: { [ResourceType.OPS]: 2000000, [ResourceType.TECH_CAPITAL]: 20000 },
    baseProduction: { [ResourceType.TRUTH]: 0.5, [ResourceType.ANCIENT_WISDOM]: 0.5, [ResourceType.INFO]: 5000.0 },
    costMultiplier: 1.7,
    icon: 'Satellite',
    unlockRequirement: 0, // Reset
    requireTech: ['orbital_mechanics'],
  },
];
