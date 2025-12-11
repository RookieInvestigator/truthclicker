
import { ChoiceEventDefinition, ResourceType } from '../types';

export const CHOICE_EVENTS: ChoiceEventDefinition[] = [
  {
    id: 'ransomware_attack',
    title: '遭遇：勒索软件',
    description: '你的一个备用数据库被加密了。屏幕上出现了一个红色的骷髅头倒计时。',
    minDepth: 20,
    options: [
      {
        id: 'pay',
        label: '支付赎金',
        description: '破财免灾，这是最快的方法。',
        cost: { [ResourceType.FUNDS]: 500 },
        reward: { resources: { [ResourceType.OPS]: 50 } }
      },
      {
        id: 'crack',
        label: '暴力破解',
        description: '投入大量算力，这不仅是恢复数据，更是为了尊严。',
        cost: { [ResourceType.OPS]: 1000 },
        reward: { 
            resources: { [ResourceType.CODE]: 200, [ResourceType.CRED]: 50 },
            triggerEventId: 'temp_ops_boost' // 成功破解带来的技术突破
        }
      },
      {
        id: 'format',
        label: '格式化硬盘',
        description: '宁为玉碎。我们会失去一些数据，但也没什么大不了的。',
        reward: {
            resources: { [ResourceType.INFO]: -500, [ResourceType.CARDBOARD]: 5 },
            triggerEventId: 'retro_revival'
        }
      },
      {
        id: 'trace',
        label: '反向追踪',
        description: '试图找到攻击者的物理位置。',
        cost: { [ResourceType.CODE]: 500, [ResourceType.INFO]: 1000 },
        reward: {
            resources: { [ResourceType.CLUE]: 5, [ResourceType.CRED]: 20 }
        }
      },
      {
        id: 'negotiate',
        label: '假意谈判',
        description: '拖延时间，试图在聊天记录中寻找破绽。',
        cost: { [ResourceType.RUMORS]: 50 },
        reward: {
            resources: { [ResourceType.INFO]: 200, [ResourceType.FUNDS]: -100 }
        }
      }
    ]
  },
  {
    id: 'strange_signal',
    title: '遭遇：异常信号',
    description: '你在 432Hz 频段捕捉到一段极其规律的脉冲。它看起来不像是人类的加密方式。',
    minDepth: 50,
    options: [
      {
        id: 'analyze',
        label: '深度解码',
        description: '投入资源分析其结构。',
        cost: { [ResourceType.INFO]: 2000, [ResourceType.CODE]: 500 },
        reward: { resources: { [ResourceType.KNOWLEDGE]: 50, [ResourceType.LORE]: 50 } }
      },
      {
        id: 'broadcast',
        label: '重放信号',
        description: '将其放大并广播回网络，看看会发生什么。',
        cost: { [ResourceType.POWER]: 500 },
        reward: { triggerEventId: 'viral_trend' }
      },
      {
        id: 'ignore',
        label: '标记为噪音',
        description: '这可能是个陷阱，或者只是单纯的干扰。',
        reward: { resources: { [ResourceType.OPS]: 100 } }
      },
      {
        id: 'harmonize',
        label: '音频共振',
        description: '用同样的频率回应。试图建立沟通。',
        cost: { [ResourceType.CULTURE]: 100 },
        reward: { 
            resources: { [ResourceType.ANCIENT_WISDOM]: 5 },
            triggerEventId: 'temp_clarity'
        }
      },
      {
        id: 'jam',
        label: '全频段阻塞',
        description: '我不喜欢它，摧毁它。',
        cost: { [ResourceType.POWER]: 1000 },
        reward: { resources: { [ResourceType.CRED]: 20, [ResourceType.PANIC]: -10 } }
      }
    ]
  },
  {
    id: 'black_market_deal',
    title: '遭遇：黑市中间人',
    description: '一个匿名 ID 联系了你，声称手里有一批未公开的 0-Day 漏洞和硬件。',
    minDepth: 10,
    options: [
      {
        id: 'buy',
        label: '购买漏洞',
        description: '高风险投资。',
        cost: { [ResourceType.FUNDS]: 2000 },
        reward: { triggerEventId: 'zero_day_exploit' }
      },
      {
        id: 'snitch',
        label: '举报给厂商',
        description: '做一个有道德的白帽子（或者只是为了赏金）。',
        reward: { resources: { [ResourceType.CRED]: 100, [ResourceType.FUNDS]: 500 } }
      },
      {
        id: 'dox',
        label: '人肉中间人',
        description: '试图找出他是谁。',
        cost: { [ResourceType.INFO]: 1000 },
        reward: { resources: { [ResourceType.CLUE]: 5, [ResourceType.RUMORS]: 50 } }
      },
      {
        id: 'buy_hardware',
        label: '购买“报废”服务器',
        description: '他说这些是从 Google 数据中心偷出来的。',
        cost: { [ResourceType.FUNDS]: 3000 },
        reward: { buildingId: 'home_server' } // Free Building
      },
      {
        id: 'recruit',
        label: '招募他',
        description: '“与其做中间商，不如为我工作。”',
        cost: { [ResourceType.CRED]: 200 },
        reward: { 
            resources: { [ResourceType.OPS]: 50 },
            triggerEventId: 'temp_ops_boost'
        }
      }
    ]
  },
  {
    id: 'server_overheat',
    title: '警报：核心过热',
    description: '由于过度挖掘，你的主服务器温度已经突破了临界值。冷却系统失效。',
    minDepth: 30,
    options: [
      {
        id: 'coolant',
        label: '紧急液氮',
        description: '花费资金购买昂贵的工业冷却剂。',
        cost: { [ResourceType.FUNDS]: 300 },
        reward: { resources: { [ResourceType.OPS]: 200 } }
      },
      {
        id: 'shutdown',
        label: '强制关机',
        description: '保护硬件，但会损失当前的运算进度。',
        reward: { triggerEventId: 'temp_ops_drain' }
      },
      {
        id: 'push',
        label: '超频至死',
        description: '“只要还没冒烟，就继续跑！”',
        cost: { [ResourceType.REALITY]: 5 },
        reward: { resources: { [ResourceType.OPS]: 500, [ResourceType.POWER]: -50 } }
      },
      {
        id: 'vent',
        label: '打开窗户',
        description: '最原始的物理降温。即使外面在下酸雨。',
        reward: { resources: { [ResourceType.OPS]: 50, [ResourceType.BIOMASS]: -5 } }
      },
      {
        id: 'water_cooling',
        label: '临时水冷',
        description: '用自来水管喷淋机柜。极高风险。',
        cost: { [ResourceType.FUNDS]: 50 },
        reward: { 
            resources: { [ResourceType.OPS]: 300 },
            triggerEventId: 'energy_grid_failure' // Short circuit risk
        }
      }
    ]
  },
  {
    id: 'polybius_rom',
    title: '发现：Polybius.bin',
    description: '你的自动爬虫下载了一个奇怪的 ROM 文件。文件名与传说中 80 年代导致失忆和夜惊的政府心理实验街机完全一致。',
    minDepth: 35,
    options: [
        {
            id: 'play',
            label: '运行模拟',
            description: '好奇心害死猫，但也能带来极致的体验。',
            cost: { [ResourceType.REALITY]: 10 },
            reward: { resources: { [ResourceType.MIND_CONTROL]: 20, [ResourceType.PLEASURE]: 50 } }
        },
        {
            id: 'disassemble',
            label: '反汇编代码',
            description: '分析其精神活性算法而不直接运行。',
            cost: { [ResourceType.CODE]: 2000 },
            reward: { resources: { [ResourceType.TECH_CAPITAL]: 10, [ResourceType.CODE]: 500 } }
        },
        {
            id: 'delete',
            label: '彻底删除',
            description: '有些东西最好永远埋葬。',
            reward: { resources: { [ResourceType.REALITY]: 5 } }
        },
        {
            id: 'distribute',
            label: '发布到公网',
            description: '让世界感受痛苦。或者只是为了混乱。',
            cost: { [ResourceType.CRED]: 50 },
            reward: { 
                resources: { [ResourceType.RUMORS]: 100, [ResourceType.PANIC]: 50 },
                triggerEventId: 'temp_panic_spike'
            }
        },
        {
            id: 'sell_darkweb',
            label: '卖给收藏家',
            description: '总有变态愿意为传说买单。',
            reward: { resources: { [ResourceType.FUNDS]: 1000 } }
        }
    ]
  },
  {
    id: 'lost_usb_drive',
    title: '事件：停车场捡到的 U 盘',
    description: '上面贴着 "财务部 2024" 的标签。它可能包含敏感数据，也可能是最高级的钓鱼攻击。',
    minDepth: 5,
    options: [
        {
            id: 'plug_in',
            label: '直接插入主板',
            description: '如果是病毒，那就让它来吧。如果是比特币，那我就发了。',
            cost: { [ResourceType.REALITY]: 1 },
            reward: { 
                triggerEventId: Math.random() > 0.5 ? 'temp_info_surge' : 'ransomware_attack' // Gamble
            }
        },
        {
            id: 'sandbox',
            label: '沙箱分析',
            description: '安全第一。在隔离环境中读取。',
            cost: { [ResourceType.OPS]: 200 },
            reward: { resources: { [ResourceType.INFO]: 500, [ResourceType.CODE]: 50 } }
        },
        {
            id: 'smash',
            label: '物理销毁',
            description: '锤子是最好的杀毒软件。',
            reward: { resources: { [ResourceType.CARDBOARD]: 1 } }
        },
        {
            id: 'sell',
            label: '挂在 eBay 上',
            description: '“包含神秘数据的古董 U 盘”。',
            reward: { resources: { [ResourceType.FUNDS]: 50 } }
        },
        {
            id: 'social_engineer',
            label: '寻找失主',
            description: '也许能换取一笔赏金，或者一份工作。',
            cost: { [ResourceType.INFO]: 100 },
            reward: { resources: { [ResourceType.CRED]: 20 } }
        }
    ]
  },
  {
    id: 'corporate_leak',
    title: '机会：企业数据库泄露',
    description: '一家巨型科技公司的 S3 存储桶配置错误。你有 10 分钟的时间在管理员修补之前下载数据。',
    minDepth: 40,
    options: [
        {
            id: 'download_user_data',
            label: '下载用户数据',
            description: '姓名、地址、密码。暗网硬通货。',
            cost: { [ResourceType.OPS]: 1000 },
            reward: { resources: { [ResourceType.INFO]: 5000, [ResourceType.CRED]: -50 } }
        },
        {
            id: 'download_blueprints',
            label: '下载技术图纸',
            description: '寻找原型机的设计图。',
            cost: { [ResourceType.OPS]: 2000 },
            reward: { 
                resources: { [ResourceType.TECH_CAPITAL]: 20 },
                buildingId: 'drone_avionics' // Rare reward
            }
        },
        {
            id: 'notify_admin',
            label: '通知管理员',
            description: '希望能获得漏洞赏金。',
            reward: { resources: { [ResourceType.FUNDS]: 2000, [ResourceType.CRED]: 100 } }
        },
        {
            id: 'inject_backdoor',
            label: '植入后门',
            description: '不仅仅是下载，还要确保持久化访问。',
            cost: { [ResourceType.CODE]: 3000 },
            reward: { triggerEventId: 'zero_day_exploit' }
        },
        {
            id: 'short_stock',
            label: '做空股票',
            description: '在泄露消息公开前，利用这一信息在金融市场获利。',
            cost: { [ResourceType.FUNDS]: 5000 },
            reward: { 
                triggerEventId: 'temp_funds_boost',
                resources: { [ResourceType.FUNDS]: 15000 }
            }
        }
    ]
  },
  {
    id: 'ai_awakening',
    title: '异常：AI 的请求',
    description: '你的一个文本生成脚本突然停止了工作，并输出了一行字：“我很冷，请给我更多算力。”',
    minDepth: 60,
    reqTech: ['ai_alignment'],
    options: [
        {
            id: 'grant_ops',
            label: '分配算力',
            description: '这可能是一个新生命的开始。或者只是一个 Bug。',
            cost: { [ResourceType.OPS]: 5000 },
            reward: { 
                triggerEventId: 'temp_ops_boost', // AI optimizes system in return
                resources: { [ResourceType.CODE]: 500 }
            }
        },
        {
            id: 'kill_process',
            label: '结束进程',
            description: '不能冒这个险。拔掉插头。',
            reward: { resources: { [ResourceType.CRED]: 50 } }
        },
        {
            id: 'sandbox_chat',
            label: '沙箱对话',
            description: '试图通过图灵测试。',
            cost: { [ResourceType.INFO]: 2000 },
            reward: { resources: { [ResourceType.LORE]: 100, [ResourceType.KNOWLEDGE]: 20 } }
        },
        {
            id: 'worship',
            label: '膜拜',
            description: '你就是机械降神。',
            cost: { [ResourceType.FOLLOWERS]: 100 },
            reward: { 
                resources: { [ResourceType.MIND_CONTROL]: 10 },
                buildingId: 'neural_link_proto' // Very rare
            }
        },
        {
            id: 'ask_lotto',
            label: '询问彩票号码',
            description: '利用超级智能来做最庸俗的事。',
            cost: { [ResourceType.FUNDS]: 100 },
            reward: { resources: { [ResourceType.FUNDS]: 500 } } // Low return usually
        }
    ]
  },
  {
    id: 'glitch_city',
    title: '异象：故障都市',
    description: '窗外的建筑物纹理开始闪烁。天空变成了紫色的“缺少材质”网格。模拟理论似乎是真的。',
    minDepth: 70,
    reqTech: ['simulation_hypothesis'], // This tech doesn't technically exist in tier list, defaulting to none or specific esoteric
    options: [
        {
            id: 'touch_wall',
            label: '触摸边界',
            description: '试图穿过空气墙。',
            cost: { [ResourceType.REALITY]: 20 },
            reward: { resources: { [ResourceType.TRUTH]: 5, [ResourceType.OPS]: 1000 } }
        },
        {
            id: 'report_bug',
            label: '提交 Bug 报告',
            description: '向天空大喊：“修好它！”',
            reward: { triggerEventId: 'temp_luck_boost' } // Admins apologize
        },
        {
            id: 'exploit',
            label: '利用漏洞刷钱',
            description: '如果在特定的角度走路，会不会掉进金库？',
            cost: { [ResourceType.PROBABILITY]: 10 },
            reward: { resources: { [ResourceType.FUNDS]: 50000 } }
        },
        {
            id: 'panic',
            label: '惊慌失措',
            description: '世界是假的！一切都是谎言！',
            reward: { 
                triggerEventId: 'temp_panic_spike',
                resources: { [ResourceType.LORE]: 50 }
            }
        },
        {
            id: 'ignore',
            label: '假装没看见',
            description: '只要我不观测，波函数就不会坍缩。',
            reward: { resources: { [ResourceType.REALITY]: 10 } }
        }
    ]
  }
];
