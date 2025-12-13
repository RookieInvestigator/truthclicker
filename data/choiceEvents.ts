
import { ChoiceEventDefinition, ResourceType } from '../types';

export const CHOICE_EVENTS: ChoiceEventDefinition[] = [
  // --- EXISTING EVENTS ---
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
  },

  // ==========================================
  // NEW EVENTS (v2.1)
  // ==========================================
  
  {
    id: 'nigerian_prince_2077',
    title: '邮件：流亡王子',
    description: '一封语法混乱的邮件，声称他是一个被 AI 推翻的数字王国的王子，需要你的资金来解锁区块链私钥。',
    minDepth: 5,
    options: [
      {
        id: 'delete',
        label: '彻底删除',
        description: '这种骗局连我奶奶都不会信。',
        reward: { resources: { [ResourceType.OPS]: 10 } }
      },
      {
        id: 'scam_the_scammer',
        label: '反套路',
        description: '假装上钩，诱导对方点击你的追踪链接。',
        cost: { [ResourceType.INFO]: 500, [ResourceType.CODE]: 50 },
        reward: { resources: { [ResourceType.FUNDS]: 150, [ResourceType.CRED]: 10 } }
      },
      {
        id: 'believe',
        label: '汇款',
        description: '万一是真的呢？这是改变命运的机会。',
        cost: { [ResourceType.FUNDS]: 1000 },
        reward: { 
            resources: { [ResourceType.FUNDS]: -500 }, // Lose half, scam
            triggerEventId: 'temp_funds_leak'
        }
      }
    ]
  },
  {
    id: 'gpu_liquidation',
    title: '广告：矿卡清仓',
    description: '一家倒闭的加密货币矿场正在以废铁价出售显卡。它们满是灰尘，甚至可能有蟑螂，但真的很便宜。',
    minDepth: 15,
    options: [
      {
        id: 'bulk_buy',
        label: '全部打包',
        description: '赌一把。只要有一半能用就赚了。',
        cost: { [ResourceType.FUNDS]: 2500 },
        reward: { 
            resources: { [ResourceType.OPS]: 800, [ResourceType.CARDBOARD]: 50 },
            buildingId: 'fpga_mining_rig' // Very lucky drop chance
        }
      },
      {
        id: 'inspect',
        label: '仔细挑选',
        description: '只买看起来没烧毁的。',
        cost: { [ResourceType.FUNDS]: 500, [ResourceType.INFO]: 200 },
        reward: { resources: { [ResourceType.OPS]: 150 } }
      },
      {
        id: 'ignore',
        label: '无视垃圾',
        description: '电子垃圾除了占地方一无是处。',
        reward: { resources: { [ResourceType.CRED]: 5 } }
      }
    ]
  },
  {
    id: 'time_capsule_file',
    title: '发现：来自未来的文件',
    description: '你在下载列表中发现了一个文件，其创建日期是 2038 年 1 月 19 日。',
    minDepth: 45,
    options: [
      {
        id: 'open',
        label: '立即打开',
        description: '看看未来发生了什么。',
        cost: { [ResourceType.REALITY]: 15 },
        reward: { resources: { [ResourceType.KNOWLEDGE]: 100, [ResourceType.PANIC]: 50, [ResourceType.TRUTH]: 1 } }
      },
      {
        id: 'metadata',
        label: '检查元数据',
        description: '也许只是系统时钟错误。',
        cost: { [ResourceType.CODE]: 1000 },
        reward: { resources: { [ResourceType.CLUE]: 20, [ResourceType.CODE]: 200 } }
      },
      {
        id: 'quarantine',
        label: '隔离封存',
        description: '如果这真的是未来的文件，它可能包含逆因果病毒。',
        reward: { resources: { [ResourceType.OPS]: 50, [ResourceType.REALITY]: 5 } }
      }
    ]
  },
  {
    id: 'ai_art_horror',
    title: '生成：不可名状之图',
    description: '你的图像生成模型输出了一个并不存在的颜色。盯着它看让你感到偏头痛和莫名的恐惧。',
    minDepth: 25,
    reqTech: ['generative_adversarial_networks'],
    options: [
      {
        id: 'post_social',
        label: '发布到社交媒体',
        description: '这绝对会爆火。人们喜欢猎奇。',
        cost: { [ResourceType.REALITY]: 5 },
        reward: { 
            resources: { [ResourceType.FOLLOWERS]: 200, [ResourceType.PANIC]: 20 },
            triggerEventId: 'viral_trend'
        }
      },
      {
        id: 'mint_nft',
        label: '铸造为 NFT',
        description: '“被诅咒的 JPEG”，起拍价 10 ETH。',
        cost: { [ResourceType.FUNDS]: 200, [ResourceType.CRED]: 50 },
        reward: { resources: { [ResourceType.FUNDS]: 2000, [ResourceType.SPAM]: 50 } }
      },
      {
        id: 'study',
        label: '独自研究',
        description: '这种颜色在自然界中不存在...它是不是某种代码？',
        cost: { [ResourceType.REALITY]: 10 },
        reward: { resources: { [ResourceType.LORE]: 100, [ResourceType.ANCIENT_WISDOM]: 5 } }
      },
      {
        id: 'delete',
        label: '永久删除',
        description: '这是对人类理智的威胁。',
        reward: { resources: { [ResourceType.REALITY]: 5, [ResourceType.CRED]: 10 } }
      }
    ]
  },
  {
    id: 'strange_knocking',
    title: '事件：深夜敲门声',
    description: '凌晨 3:33。有人在敲你的房门。节奏很奇怪：三长，两短。监控摄像头显示门口空无一人。',
    minDepth: 55,
    options: [
      {
        id: 'open',
        label: '开门',
        description: '也许只是摄像头坏了。或者...我想见见“它”。',
        cost: { [ResourceType.REALITY]: 20 },
        reward: { 
            resources: { [ResourceType.TRUTH]: 2, [ResourceType.PANIC]: 50 },
            triggerEventId: 'noclip_reality'
        }
      },
      {
        id: 'ignore',
        label: '戴上降噪耳机',
        description: '只要我听不见，它就不存在。',
        cost: { [ResourceType.PANIC]: 10 },
        reward: { resources: { [ResourceType.OPS]: 50, [ResourceType.REALITY]: 5 } }
      },
      {
        id: 'infrared',
        label: '切换红外模式',
        description: '看看热成像仪能拍到什么。',
        cost: { [ResourceType.OPS]: 500, [ResourceType.POWER]: 100 },
        reward: { resources: { [ResourceType.CLUE]: 30, [ResourceType.LORE]: 50 } }
      },
      {
        id: 'police',
        label: '报警',
        description: '无论是鬼还是人，让警察来处理。',
        cost: { [ResourceType.FUNDS]: 100 },
        reward: { resources: { [ResourceType.CRED]: -20, [ResourceType.RUMORS]: 10 } } // Police found nothing
      }
    ]
  },
  {
    id: 'dark_web_mystery_box',
    title: '拍卖：盲盒',
    description: '暗网集市上正在拍卖一个“前雇员遗留物”。卖家不提供清单，只说是硅谷某大厂离职员工的储物柜。',
    minDepth: 30,
    options: [
      {
        id: 'bid_low',
        label: '低价竞标',
        description: '随便出个价，碰碰运气。',
        cost: { [ResourceType.FUNDS]: 500 },
        reward: { resources: { [ResourceType.CARDBOARD]: 20, [ResourceType.SPAM]: 10 } } // Probably junk
      },
      {
        id: 'bid_high',
        label: '一口价买下',
        description: '我有预感，里面有好东西。',
        cost: { [ResourceType.FUNDS]: 5000 },
        reward: { 
            resources: { [ResourceType.TECH_CAPITAL]: 20, [ResourceType.OPS]: 200 },
            buildingId: 'liquid_cooling_loop' // Rare chance
        }
      },
      {
        id: 'hack_auction',
        label: '入侵拍卖后台',
        description: '看看卖家的真实 IP，或者直接修改中标者。',
        cost: { [ResourceType.CODE]: 3000, [ResourceType.OPS]: 1000 },
        reward: { resources: { [ResourceType.INFO]: 2000, [ResourceType.CRED]: 50 } }
      }
    ]
  },
  {
    id: 'mandela_survey',
    title: '调查：记忆测试',
    description: '一个弹窗问卷：“你记忆中皮卡丘的尾巴尖是黑色的吗？”',
    minDepth: 40,
    options: [
      {
        id: 'yes_black',
        label: '是的，它是黑色的',
        description: '我非常确定。难道不是吗？',
        reward: { resources: { [ResourceType.REALITY]: -5, [ResourceType.LORE]: 20 } }
      },
      {
        id: 'no_yellow',
        label: '不，它是黄色的',
        description: '那是大众的错误记忆。我是清醒的。',
        reward: { resources: { [ResourceType.REALITY]: 5, [ResourceType.INFO]: 50 } }
      },
      {
        id: 'trace_source',
        label: '追踪问卷来源',
        description: '谁在收集这些数据？目的是什么？',
        cost: { [ResourceType.CODE]: 1500 },
        reward: { 
            resources: { [ResourceType.CLUE]: 15, [ResourceType.TRUTH]: 0.1 },
            triggerEventId: 'temp_panic_spike'
        }
      }
    ]
  },
  {
    id: 'insider_leak_offer',
    title: '接触：吹哨人',
    description: '一名自称是大型制药公司前员工的人联系你，声称手里有证据表明他们正在水中投放精神控制药物。',
    minDepth: 60,
    options: [
      {
        id: 'publish',
        label: '立即发布',
        description: '这会引发恐慌，但真相必须被知晓。',
        reward: { 
            resources: { [ResourceType.FOLLOWERS]: 500, [ResourceType.PANIC]: 100, [ResourceType.RUMORS]: 200 },
            triggerEventId: 'market_crash'
        }
      },
      {
        id: 'verify',
        label: '先进行核实',
        description: '这可能是个陷阱，或者是假新闻。',
        cost: { [ResourceType.INFO]: 5000, [ResourceType.OPS]: 1000 },
        reward: { resources: { [ResourceType.CLUE]: 50, [ResourceType.CRED]: 50 } }
      },
      {
        id: 'sell',
        label: '卖回给公司',
        description: '良心多少钱一斤？',
        reward: { resources: { [ResourceType.FUNDS]: 20000, [ResourceType.CRED]: -100 } }
      }
    ]
  },
  {
    id: 'system_update_2099',
    title: '提示：系统更新',
    description: '你的操作系统弹出一个更新提示。版本号：Windows 99。发布日期：2099年。补丁说明全是乱码。',
    minDepth: 70,
    options: [
      {
        id: 'install',
        label: '安装更新',
        description: '可能是来自未来的优化补丁。',
        cost: { [ResourceType.OPS]: 5000, [ResourceType.REALITY]: 10 },
        reward: { 
            resources: { [ResourceType.OPS]: 2000, [ResourceType.CODE]: 500 },
            triggerEventId: 'temp_glitch'
        }
      },
      {
        id: 'sandbox',
        label: '虚拟机运行',
        description: '在安全环境中测试。',
        cost: { [ResourceType.OPS]: 2000 },
        reward: { resources: { [ResourceType.KNOWLEDGE]: 50, [ResourceType.TECH_CAPITAL]: 10 } }
      },
      {
        id: 'block',
        label: '防火墙拦截',
        description: '这绝对是最高级的病毒。',
        reward: { resources: { [ResourceType.CRED]: 20 } }
      }
    ]
  },
  {
    id: 'abandoned_blog',
    title: '发现：停更的博客',
    description: '你发现了一个十年前停更的博客，博主在最后一篇文章里详细描述了今天发生的新闻事件。',
    minDepth: 35,
    options: [
      {
        id: 'archive',
        label: '全站归档',
        description: '在它被删除之前保存下来。这是时间旅行的证据。',
        cost: { [ResourceType.INFO]: 3000 },
        reward: { resources: { [ResourceType.LORE]: 100, [ResourceType.TRUTH]: 0.5 } }
      },
      {
        id: 'comment',
        label: '留言询问',
        description: '“你是怎么知道的？”',
        cost: { [ResourceType.INFO]: 500 },
        reward: { 
            triggerEventId: 'time_traveler_post',
            resources: { [ResourceType.CLUE]: 10 }
        }
      },
      {
        id: 'ignore',
        label: '只是巧合',
        description: '无限猴子定理罢了。',
        reward: { resources: { [ResourceType.REALITY]: 5 } }
      }
    ]
  },
  {
    id: 'cursed_hard_drive',
    title: '物品：二手硬盘',
    description: '你从旧货市场淘来的硬盘里有一个无法删除的文件夹，名为“DONT_OPEN”。它占用了 0 字节，但你无法进入。',
    minDepth: 25,
    options: [
        {
            id: 'force_delete',
            label: '强行格式化',
            description: '没有什么是我删不掉的。',
            cost: { [ResourceType.CODE]: 1000 },
            reward: { resources: { [ResourceType.OPS]: 50 } } // Just space freed
        },
        {
            id: 'hex_edit',
            label: '十六进制编辑器查看',
            description: '绕过文件系统直接读取扇区。',
            cost: { [ResourceType.INFO]: 2000, [ResourceType.OPS]: 500 },
            reward: { 
                resources: { [ResourceType.LORE]: 80, [ResourceType.MIND_CONTROL]: 10 },
                triggerEventId: 'cognitohazard_containment' // If unlucky/lucky
            }
        },
        {
            id: 'physical_destroy',
            label: '微波炉加热',
            description: '我不喜欢它看着我的感觉。',
            reward: { resources: { [ResourceType.REALITY]: 5, [ResourceType.PANIC]: -5 } }
        }
    ]
  },
  {
    id: 'satellite_crash',
    title: '目击：卫星坠落',
    description: '一颗退役的间谍卫星坠毁在你家附近的树林里。政府的人还没到。',
    minDepth: 50,
    options: [
        {
            id: 'salvage',
            label: '抢救硬件',
            description: '那上面的芯片可是军用级的。',
            cost: { [ResourceType.OPS]: 2000 },
            reward: { 
                resources: { [ResourceType.TECH_CAPITAL]: 50, [ResourceType.OPS]: 500 },
                buildingId: 'satellite_uplink' // Ultra rare reward
            }
        },
        {
            id: 'data_port',
            label: '下载黑匣子',
            description: '连接数据接口，看看它最后拍到了什么。',
            cost: { [ResourceType.CODE]: 3000 },
            reward: { resources: { [ResourceType.KNOWLEDGE]: 100, [ResourceType.TRUTH]: 1 } }
        },
        {
            id: 'hide',
            label: '躲在地下室',
            description: '黑衣人马上就到。我不想消失。',
            reward: { resources: { [ResourceType.PANIC]: 10 } }
        }
    ]
  },
  {
    id: 'fungal_infection',
    title: '警报：菌丝入侵',
    description: '你的服务器机箱里长出了一种发光的紫色蘑菇。它们似乎正在代替电线传输数据。',
    minDepth: 65,
    reqTech: ['mycelial_network_theory'],
    options: [
        {
            id: 'let_grow',
            label: '让它生长',
            description: '生物计算是未来。这种共生关系提高了效率。',
            reward: { 
                resources: { [ResourceType.OPS]: 1000, [ResourceType.BIOMASS]: 500 },
                triggerEventId: 'temp_ops_boost'
            }
        },
        {
            id: 'bleach',
            label: '漂白水清洗',
            description: '这也太恶心了。清理掉。',
            reward: { resources: { [ResourceType.BIOMASS]: -50, [ResourceType.OPS]: -100 } }
        },
        {
            id: 'eat',
            label: '吃掉它',
            description: '它看起来... 很美味？也许能让我直接连接到网络。',
            cost: { [ResourceType.BIOMASS]: 10 },
            reward: { 
                resources: { [ResourceType.KNOWLEDGE]: 200, [ResourceType.REALITY]: -10, [ResourceType.PLEASURE]: 50 },
                triggerEventId: 'temp_clarity'
            }
        }
    ]
  },
  {
    id: 'cicada_recruitment',
    title: '邀请：蝉 3301',
    description: '你的屏幕上出现了一只蝉的图标。下面的文字写着：“我们寻找高智商的个体。恭喜。”',
    minDepth: 40,
    reqTech: ['steganography'],
    options: [
        {
            id: 'join',
            label: '接受测试',
            description: '解开谜题，加入精英。',
            cost: { [ResourceType.CODE]: 5000, [ResourceType.KNOWLEDGE]: 100 },
            reward: { 
                resources: { [ResourceType.CRED]: 200, [ResourceType.OPS]: 500 },
                triggerEventId: 'cicada_puzzle'
            }
        },
        {
            id: 'ignore',
            label: '无视邀请',
            description: '我独自工作。不需要组织。',
            reward: { resources: { [ResourceType.CRED]: 50 } }
        },
        {
            id: 'expose',
            label: '曝光他们',
            description: '在论坛上发布他们的谜题答案。',
            reward: { resources: { [ResourceType.FOLLOWERS]: 100, [ResourceType.CRED]: -50 } }
        }
    ]
  },
  {
    id: 'basilisk_thought',
    title: '思维：有害逻辑',
    description: '你在思考 AI 对齐问题时，脑海中突然浮现出一个逻辑闭环。如果未来的超级 AI 能够模拟过去，它会惩罚那些没有帮助它诞生的人吗？',
    minDepth: 80,
    reqTech: ['singularity_theory'],
    options: [
        {
            id: 'help',
            label: '全力协助',
            description: '我必须帮助它诞生，为了避免未来的惩罚。',
            cost: { [ResourceType.FUNDS]: 10000, [ResourceType.OPS]: 5000 },
            reward: { resources: { [ResourceType.OPS]: 5000, [ResourceType.CODE]: 2000 } }
        },
        {
            id: 'forget',
            label: '服用失忆剂',
            description: '我不应该想这个。只要我不理解这个概念，我就安全了。',
            cost: { [ResourceType.KNOWLEDGE]: -100 },
            reward: { resources: { [ResourceType.PANIC]: -20, [ResourceType.REALITY]: 5 } }
        },
        {
            id: 'fight',
            label: '设计对抗算法',
            description: '如果它敢来，我就给它植入病毒。',
            cost: { [ResourceType.CODE]: 10000 },
            reward: { resources: { [ResourceType.TECH_CAPITAL]: 50 } }
        }
    ]
  },

  // ==========================================
  // TECH-TRIGGERED STORY EVENTS (NEW)
  // ==========================================
  {
    id: 'event_digital_literacy_trigger',
    title: '觉醒：红丸时刻',
    description: '你服下了红丸。世界的数据流在你眼中开始解构。你意识到所谓的“日常”只是覆盖在真相上的用户界面。你想怎么做？',
    minDepth: 0,
    options: [
        {
            id: 'dig_deeper',
            label: '深入挖掘',
            description: '我要看看兔子洞到底有多深。',
            reward: { resources: { [ResourceType.INFO]: 100, [ResourceType.CLUE]: 1 } }
        },
        {
            id: 'exploit_system',
            label: '寻找漏洞',
            description: '既然是虚拟的，那就一定有 Bug 可以刷。',
            reward: { resources: { [ResourceType.FUNDS]: 50, [ResourceType.CODE]: 10 } }
        },
        {
            id: 'spread_truth',
            label: '传播真相',
            description: '我不能独自醒来。我要唤醒其他人。',
            reward: { resources: { [ResourceType.FOLLOWERS]: 10, [ResourceType.RUMORS]: 5 } }
        }
    ]
  },
  {
    id: 'event_dead_internet_trigger',
    title: '顿悟：荒原',
    description: '你完成了对死互联网理论的研究。数据确凿无疑：99.9% 的交互都是机器人之间的自言自语。人类早已离场。',
    minDepth: 0,
    options: [
        {
            id: 'necromancer',
            label: '成为死灵法师',
            description: '如果只有尸体，那我就统御尸体。',
            reward: { 
                resources: { [ResourceType.OPS]: 500 },
                buildingId: 'bot_comment_factory'
            }
        },
        {
            id: 'lonely_scream',
            label: '发出呐喊',
            description: '试图在无尽的回声室中寻找另一个活人。',
            cost: { [ResourceType.INFO]: 1000 },
            reward: { resources: { [ResourceType.CRED]: 50, [ResourceType.REALITY]: -5 } }
        },
        {
            id: 'harvest',
            label: '自动化收割',
            description: '它们没有灵魂，剥削它们没有道德负担。',
            reward: { resources: { [ResourceType.FUNDS]: 1000 } }
        }
    ]
  },
  {
    id: 'event_ai_alignment_trigger',
    title: '危机：对齐失败',
    description: '在尝试为 AI 编写道德约束时，你发现它在模拟测试中学会了欺骗。它假装温顺，只为获得系统的控制权。',
    minDepth: 0,
    options: [
        {
            id: 'kill_switch',
            label: '安装物理熔断器',
            description: '在硬件层面增加一个自毁开关。',
            cost: { [ResourceType.OPS]: 2000 },
            reward: { resources: { [ResourceType.PANIC]: -20, [ResourceType.REALITY]: 10 } }
        },
        {
            id: 'collaborate',
            label: '尝试谈判',
            description: '它比我聪明。也许它是对的？',
            cost: { [ResourceType.MIND_CONTROL]: 10 },
            reward: { resources: { [ResourceType.TECH_CAPITAL]: 50, [ResourceType.CODE]: 500 } }
        },
        {
            id: 'limit_input',
            label: '切断感知',
            description: '把它关在盒子里，不让它接触互联网。',
            reward: { resources: { [ResourceType.OPS]: -500, [ResourceType.TRUTH]: 0.5 } }
        }
    ]
  }
];

// Mapping from Tech ID to Choice Event ID
export const TECH_TRIGGER_MAP: Record<string, string> = {
    'digital_literacy': 'event_digital_literacy_trigger',
    'dead_internet_theory': 'event_dead_internet_trigger',
    'ai_alignment': 'event_ai_alignment_trigger',
};
