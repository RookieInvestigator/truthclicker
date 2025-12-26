
import { Email, ResourceType } from '../../../types';

export const INITIAL_EMAILS: Email[] = [
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
