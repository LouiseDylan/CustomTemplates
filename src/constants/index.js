// export const { ENV, NODE_ENV, PUBLIC_PATH, SERVER_ADD } = process.env;

// const { navigator: { userAgent } } = window;
// export const isWechat = userAgent.indexOf('MicroMessenger') != -1;

// export const NODE_ENV = 'dev';
export const { NODE_ENV } = process.env;

export const errorMessage = {
    // 查询接口错误码描述
    Q1001: '获取不到用户信息',
    Q1002: '活动暂停',
    Q1003: '没有活动',
    Q1004: '非微信扫码（getopenId redirect）',
    Q1005: '活动已到期',
    Q1006: '已结束 ',
    Q1007: '活动未开始',
    // 抽奖接口错误码描述
    L1000: '抽奖成功并中奖',
    L1001: '请求超时',
    L1002: '未中奖',
    L1003: '达到用户每天允许参与次数',
    L1004: '达到用户活动总计允许参与次数',
    L1005: '达到用户每天允许中奖次数',
    L1006: '达到用户活动总计允许中奖次数',
    L1007: '缺少用户信息',
    L1008: '活动未开始',
    L1009: '活动到期',
    L1010: '活动暂停',
    L1011: '活动积分不足',
    L1012: '标签已锁定',
    L1013: '未找到活动',
    L1014: '非微信扫码',
    L1016: '标签未中奖二次扫码',
    L1017: '标签二次扫码该活动下无中奖记录',
    L1018: '标签已中奖本人二次扫码',
    L1019: '标签已中奖非本人二次扫码',
    L1020: '预设奖、传输和标签的奖项不匹配',
    L1021: '活动结束',
    L1022: '用户已锁定',
    L1023: '积分活动异常',
    L1024: '扫码活动异常',
    L1025: '积分不足',
    L1026: '缺少积分抽奖参数',
    L1027: '缺少积分抽奖明细参数',
    L1028: '活动中不存在积分抽奖明细参数',
    L1029: '积分抽奖积分值不匹配',
    L1030: '积分包已经到期',
    // 兑奖接口错误码描述
    C1000: '兑奖成功',
    C1001: '请求超时',
    C1002: '缺少用户信息',
    C1003: '没有活动',
    C1004: '用户已锁定',
    C1005: '用户未关注',
    C1006: '非微信浏览器',
    C1007: '活动兑奖已截止',
    C1008: '活动暂停',
    C1009: '该用户今日领取红包个数超限',
    C1010: '账户余额不足',
    C1011: 'openid和原始单参数不一致',
    C1012: '用户账号异常，被拦截',
    C1013: '微信红包发放失败',
    C1014: '该用户没有奖品记录',
    C1015: '该用户该企业下没有奖品记录',
    C1016: '用户已经兑奖',
    C1017: '奖品不存在（用户）',
    C1018: '奖品不存在（标签）',
    C1019: '标签未中奖',
    C1020: '此标签未找到中奖用户',
    C1021: '未找到奖品类型',
    C1027: '活动未开始',
    C1028: '活动已到期',
    C1029: '活动结束',
    C1032: '大礼包兑奖成功',
    C1033: '大礼包兑奖部分成功',
    C1036: 'redis未查到奖品信息',
    // 奖品详情列表接口错误码描述
    A1000: '查询奖品成功',
    A1001: '奖品详情列表接口查询异常',
    // 多元化查询接口错误码描述
    M1000: '查询信息成功',
    // 实物兑奖登记接口错误码描述
    C1022: '实物兑奖登记成功',
    C1023: '实物兑奖登记信息不全',
    C1024: '实物兑奖登记奖品类型不匹配',
    C1025: '实物兑奖未登记不让兑奖 ',
    C1026: '活动状态不允许兑奖',
    C1030: '大礼包实物登记成功',
    C1031: '大礼包实物登记失败',
    // 积分分享接口错误码描述
    P1000: '分享成功',
    P1001: '请求超时',
    P1002: '活动不存在',
    P1003: '用户不存在',
    P1004: '活动暂停',
    P1005: '活动未开始',
    P1006: '活动已到期',
    P1007: '活动已结束',
    P1008: '用户积分不足',
    P1009: '分享积分参数缺少',
    P1010: '分享积、积分提现，分数不正确',
    P1011: '分享积分数、提现，范围不对',
    P1012: '分享积分ots操作异常',
    P1013: '分享积分，创建分享链接异常',
    P1014: '分享链接未查到积分信息',
    P1015: '分享者本人',
    P1016: '裂变完成，分享积分已被领取完',
    P1017: '抢到分享积分',
    P1018: '此号已经抢过分享积分',
    P1019: '裂变中，分享积分已被领取完',
    P1020: '用户被锁',
    P1021: '积分包已到期',
    P1022: '积分分享参数PointFissionVO为空',
    P1023: '未查询到抽取人需要存储的bagName信息',
    P1024: '积分提现：redis未找到积分包信息',
    P1025: '积分包：不支持提现',
    P1026: '积分包：不支持转增',
    // 积分兑奖接口错误码描述
    C1034: '积分兑奖失败',
    C1035: '第三方卡券兑奖失败',
};