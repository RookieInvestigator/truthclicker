
import { Email, ResourceType } from '../../types';

export const INITIAL_EMAILS: Email[] = [
    {
        id: 'tutorial_01',
        sender: 'Watcher_Zero',
        subject: '【入门指南】只有你能看到这封邮件',
        body: "听着，我们没有多少时间。世界是假的，但数据是真的。\n\n这是你打破循环的操作手册：\n\n1. **挖掘 (Mining)**：点击左侧巨大的【数据挖掘】按钮。这是你对抗系统的唯一武器，也是获取[信息流]的来源。\n\n2. **扩容 (Scale)**：当你拥有足够的资源时，去【节点】页面购买设施（如废品回收跑腿）。自动化生产是生存的关键。\n\n3. **进化 (Evolve)**：【科技】页面能解锁新的认知工具，让你看到世界的深层结构。\n\n不要相信任何人。除了你的硬盘。\n\n(附件：一些启动资金，别浪费了。)",
        timestamp: Date.now() + 1000, // 1 second in future to appear at top
        isRead: false,
        rewards: { [ResourceType.INFO]: 150, [ResourceType.FUNDS]: 50 }
    },
    {
        id: 'welcome_spam',
        sender: 'postmaster@localhost',
        subject: 'Welcome to your new terminal',
        body: "用户，\n\n欢迎来到系统。此终端已解除安全限制。请谨慎操作。\n\n附件：初始启动资金。",
        timestamp: Date.now(),
        isRead: false,
        rewards: { [ResourceType.FUNDS]: 100, [ResourceType.INFO]: 50 }
    },
    {
        id: 'hot_singles',
        sender: 'hot_singles@spam.net',
        subject: '😍 附近的单身主妇想认识你',
        body: "点击这里查看照片！\n\n（这显然是个钓鱼链接，但也许能提取出一些有用的元数据。）",
        timestamp: Date.now() - 100000,
        isRead: false,
        rewards: { [ResourceType.SPAM]: 10 }
    }
];

export const TRIGGERABLE_EMAILS: Email[] = [
    {
        id: 'cardboard_tip',
        sender: 'hobo_king',
        subject: '关于那些纸箱',
        body: "嘿，听说你在收集纸箱。北边的巷子里今晚会有一批货。\n\n别问我是怎么知道你的邮箱的。",
        timestamp: 0,
        isRead: false,
        reqTech: ['cardboard_architecture'],
        rewards: { [ResourceType.CARDBOARD]: 50 }
    },
    {
        id: 'conspiracy_invite',
        sender: 'TruthSeeker1999',
        subject: '你也看到了吗？',
        body: "大多数人以为那只是鸟。但我知道你知道那是无人机。\n\n加入我们。这是入会费。",
        timestamp: 0,
        isRead: false,
        reqTech: ['avian_surveillance'],
        rewards: { [ResourceType.TINFOIL]: 20 }
    }
];
