/**
 * DescribeEnvLimit返回参数结构体
 */
export interface DescribeEnvLimitResponse {
    /**
      * 环境总数上限
      */
    MaxEnvNum: number;
    /**
      * 目前环境总数
      */
    CurrentEnvNum: number;
    /**
      * 免费环境数量上限
      */
    MaxFreeEnvNum: number;
    /**
      * 目前免费环境数量
      */
    CurrentFreeEnvNum: number;
    /**
      * 总计允许销毁环境次数上限
      */
    MaxDeleteTotal: number;
    /**
      * 目前已销毁环境次数
      */
    CurrentDeleteTotal: number;
    /**
      * 每月允许销毁环境次数上限
      */
    MaxDeleteMonthly: number;
    /**
      * 本月已销毁环境次数
      */
    CurrentDeleteMonthly: number;
    /**
      * 微信网关体验版可购买月份数
      */
    MaxFreeTrialNum: number;
    /**
      * 微信网关体验版已购买月份数
      */
    CurrentFreeTrialNum: number;
    /**
      * 转支付限额总数
      */
    ChangePayTotal: number;
    /**
      * 当前已用转支付次数
      */
    CurrentChangePayTotal: number;
    /**
      * 转支付每月限额
      */
    ChangePayMonthly: number;
    /**
      * 本月已用转支付额度
      */
    CurrentChangePayMonthly: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCloudBaseRunAllVpcs返回参数结构体
 */
export interface DescribeCloudBaseRunAllVpcsResponse {
    /**
      * 所有vpcid
注意：此字段可能返回 null，表示取不到有效值。
      */
    Vpcs: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 订单信息
 */
export interface OrderInfo {
    /**
      * 订单号
      */
    TranId: string;
    /**
      * 订单要切换的套餐ID
      */
    PackageId: string;
    /**
      * 订单类型
<li>1 购买</li>
<li>2 续费</li>
<li>3 变配</li>
      */
    TranType: string;
    /**
      * 订单状态。
<li>1未支付</li>
<li>2 支付中</li>
<li>3 发货中</li>
<li>4 发货成功</li>
<li>5 发货失败</li>
<li>6 已退款</li>
<li>7 已取消</li>
<li>100 已删除</li>
      */
    TranStatus: string;
    /**
      * 订单更新时间
      */
    UpdateTime: string;
    /**
      * 订单创建时间
      */
    CreateTime: string;
    /**
      * 付费模式.
<li>prepayment 预付费</li>
<li>postpaid 后付费</li>
      */
    PayMode: string;
    /**
      * 订单绑定的扩展ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExtensionId: string;
    /**
      * 资源初始化结果(仅当ExtensionId不为空时有效): successful(初始化成功), failed(初始化失败), doing(初始化进行中), init(准备初始化)
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceReady: string;
}
/**
 * CheckTcbService返回参数结构体
 */
export interface CheckTcbServiceResponse {
    /**
      * true表示已开通
      */
    Initialized?: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCloudBaseRunConfForGateWay请求参数结构体
 */
export interface DescribeCloudBaseRunConfForGateWayRequest {
    /**
      * 环境ID
      */
    EnvID: string;
    /**
      * vpc信息
      */
    VpcID?: string;
}
/**
 * DescribeCloudBaseRunServerVersion请求参数结构体
 */
export interface DescribeCloudBaseRunServerVersionRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 服务名称
      */
    ServerName: string;
    /**
      * 版本名称
      */
    VersionName: string;
}
/**
 * TurnOnStandaloneGateway返回参数结构体
 */
export interface TurnOnStandaloneGatewayResponse {
    /**
      * 小租户网关开启状态
      */
    Status: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEnvLimit请求参数结构体
 */
export declare type DescribeEnvLimitRequest = null;
/**
 * DescribeEnvDealRegion返回参数结构体
 */
export interface DescribeEnvDealRegionResponse {
    /**
      * 下单region
      */
    Region: string;
    /**
      * 下单zone
      */
    Zone: string;
    /**
      * 下单regionId
      */
    RegionId: number;
    /**
      * 下单zoneId
      */
    ZoneId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCloudBaseRunServerVersion返回参数结构体
 */
export interface DeleteCloudBaseRunServerVersionResponse {
    /**
      * 返回结果，succ为成功
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 独立网关信息
 */
export interface StandaloneGatewayInfo {
    /**
      * 独立网关名称
      */
    GatewayName: string;
    /**
      * CPU核心数
      */
    CPU: number;
    /**
      * 内存大小，单位MB
      */
    Mem: number;
    /**
      * 套餐包版本名称
      */
    PackageVersion: string;
    /**
      * 网关别名
      */
    GatewayAlias: string;
    /**
      * 私有网络ID
      */
    VpcId: string;
    /**
      * 子网ID列表
      */
    SubnetIds: Array<string>;
    /**
      * 网关描述
      */
    GatewayDesc: string;
    /**
      * 网关状态
      */
    GateWayStatus: string;
    /**
      * 服务信息
      */
    ServiceInfo: BackendServiceInfo;
    /**
      * 公网CLBIP
      */
    PublicClbIp: string;
    /**
      * 内网CLBIP
      */
    InternalClbIp: string;
}
/**
 * CloudBaseRun 的 Side 描述定义
 */
export interface CloudBaseRunSideSpec {
    /**
      * 容器镜像
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerImage?: string;
    /**
      * 容器端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerPort?: number;
    /**
      * 容器的名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerName?: string;
    /**
      * kv的json字符串
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvVar?: string;
    /**
      * InitialDelaySeconds 延迟多长时间启动健康检查
注意：此字段可能返回 null，表示取不到有效值。
      */
    InitialDelaySeconds?: number;
    /**
      * CPU大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cpu?: number;
    /**
      * 内存大小（单位：M）
注意：此字段可能返回 null，表示取不到有效值。
      */
    Mem?: number;
    /**
      * 安全特性
注意：此字段可能返回 null，表示取不到有效值。
      */
    Security?: CloudBaseSecurityContext;
    /**
      * 挂载信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    VolumeMountInfos?: Array<CloudBaseRunVolumeMount>;
}
/**
 * CommonServiceAPI返回参数结构体
 */
export interface CommonServiceAPIResponse {
    /**
      * json格式response
      */
    JSONResp?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeStandaloneGateway请求参数结构体
 */
export interface DescribeStandaloneGatewayRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 网关名称
      */
    GatewayName?: string;
    /**
      * 网关别名
      */
    GatewayAlias?: string;
}
/**
 * DescribeStandaloneGatewayPackage请求参数结构体
 */
export interface DescribeStandaloneGatewayPackageRequest {
    /**
      * 环境ID
      */
    EnvId?: string;
    /**
      * 套餐版本，包含starter、basic、advanced、enterprise
      */
    PackageVersion?: string;
}
/**
 * DescribePostpayPackageFreeQuotas请求参数结构体
 */
export interface DescribePostpayPackageFreeQuotasRequest {
    /**
      * 环境ID
      */
    EnvId?: string;
    /**
      * 免费额度类型标识
      */
    FreeQuotaType?: string;
}
/**
 * DescribeEndUserLoginStatistic请求参数结构体
 */
export interface DescribeEndUserLoginStatisticRequest {
    /**
      * 环境id
      */
    EnvId: string;
    /**
      * 终端用户来源
<li> qcloud </li>
<li>miniapp</li>
      */
    Source?: string;
}
/**
 * DescribeCloudBaseBuildService返回参数结构体
 */
export interface DescribeCloudBaseBuildServiceResponse {
    /**
      * 上传url
      */
    UploadUrl: string;
    /**
      * 上传heder
      */
    UploadHeaders: Array<KVPair>;
    /**
      * 包名
      */
    PackageName: string;
    /**
      * 包版本
      */
    PackageVersion: string;
    /**
      * 下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadUrl: string;
    /**
      * 下载Httpheader
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadHeaders: Array<KVPair>;
    /**
      * 下载链接是否过期
注意：此字段可能返回 null，表示取不到有效值。
      */
    OutDate: boolean;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEndUsers请求参数结构体
 */
export interface DescribeEndUsersRequest {
    /**
      * 开发者的环境ID
      */
    EnvId: string;
    /**
      * 可选参数，偏移量，默认 0
      */
    Offset?: number;
    /**
      * 可选参数，拉取数量，默认 20
      */
    Limit?: number;
    /**
      * 按照 uuid 列表过滤，最大个数为100
      */
    UUIds?: Array<string>;
}
/**
 * DescribeSpecialCostItems请求参数结构体
 */
export interface DescribeSpecialCostItemsRequest {
    /**
      * 环境id
      */
    EnvId?: string;
    /**
      * 查询开始时间
      */
    StartTime?: string;
    /**
      * 查询结束时间
      */
    EndTime?: string;
}
/**
 * DescribeCloudBaseRunVersion请求参数结构体
 */
export interface DescribeCloudBaseRunVersionRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 服务名称
      */
    ServerName: string;
    /**
      * 版本名称
      */
    VersionName: string;
}
/**
 * DestroyStandaloneGateway请求参数结构体
 */
export interface DestroyStandaloneGatewayRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 网名名称
      */
    GatewayName: string;
    /**
      * 是否强制释放
      */
    IsForce: boolean;
}
/**
 * CloudRunServiceSimpleVersionSnapshot 信息
 */
export interface CloudRunServiceSimpleVersionSnapshot {
    /**
      * 版本名
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionName?: string;
    /**
      * 版本备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark?: string;
    /**
      * cpu规格
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cpu?: number;
    /**
      * 内存规格
注意：此字段可能返回 null，表示取不到有效值。
      */
    Mem?: number;
    /**
      * 最小副本数
注意：此字段可能返回 null，表示取不到有效值。
      */
    MinNum?: number;
    /**
      * 最大副本数
注意：此字段可能返回 null，表示取不到有效值。
      */
    MaxNum?: number;
    /**
      * 镜像url
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageUrl?: string;
    /**
      * 扩容策略
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicyType?: string;
    /**
      * 策略阈值
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicyThreshold?: number;
    /**
      * 环境参数
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvParams?: string;
    /**
      * 容器端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerPort?: number;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime?: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime?: string;
    /**
      * 更新类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    UploadType?: string;
    /**
      * dockerfile路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    DockerfilePath?: string;
    /**
      * 构建路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    BuildDir?: string;
    /**
      * repo类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    RepoType?: string;
    /**
      * 仓库
注意：此字段可能返回 null，表示取不到有效值。
      */
    Repo?: string;
    /**
      * 分支
注意：此字段可能返回 null，表示取不到有效值。
      */
    Branch?: string;
    /**
      * 环境id
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvId?: string;
    /**
      * 服务名
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServerName?: string;
    /**
      * package名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageName?: string;
    /**
      * package版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageVersion?: string;
    /**
      * 自定义log路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomLogs?: string;
    /**
      * 延时健康检查时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    InitialDelaySeconds?: number;
    /**
      * snapshot名
注意：此字段可能返回 null，表示取不到有效值。
      */
    SnapshotName?: string;
    /**
      * 镜像信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageInfo?: CloudBaseRunImageInfo;
    /**
      * 代码仓库信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    CodeDetail?: CloudBaseCodeRepoDetail;
    /**
      * 状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status?: string;
}
/**
 * CreateWxCloudBaseRunServerDBCluster返回参数结构体
 */
export interface CreateWxCloudBaseRunServerDBClusterResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ReplaceActivityRecord返回参数结构体
 */
export interface ReplaceActivityRecordResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 云日志服务相关信息
 */
export interface LogServiceInfo {
    /**
      * log名
      */
    LogsetName: string;
    /**
      * log-id
      */
    LogsetId: string;
    /**
      * topic名
      */
    TopicName: string;
    /**
      * topic-id
      */
    TopicId: string;
    /**
      * cls日志所属地域
      */
    Region: string;
}
/**
 * DescribeCloudBaseRunResourceForExtend请求参数结构体
 */
export interface DescribeCloudBaseRunResourceForExtendRequest {
    /**
      * 环境ID
      */
    EnvId: string;
}
/**
 * ModifyEndUser请求参数结构体
 */
export interface ModifyEndUserRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * C端用户端的唯一ID
      */
    UUId: string;
    /**
      * 帐号的状态
<li>ENABLE</li>
<li>DISABLE</li>
      */
    Status?: string;
}
/**
 * DescribeCurveData返回参数结构体
 */
export interface DescribeCurveDataResponse {
    /**
      * 开始时间, 会根据数据的统计周期进行取整.
      */
    StartTime: string;
    /**
      * 结束时间, 会根据数据的统计周期进行取整.
      */
    EndTime: string;
    /**
      * 指标名.
      */
    MetricName: string;
    /**
      * 统计周期(单位秒), 当时间区间为1天内, 统计周期为5分钟; 当时间区间选择为1天以上, 15天以下, 统计周期为1小时; 当时间区间选择为15天以上, 180天以下, 统计周期为1天.
      */
    Period: number;
    /**
      * 有效的监控数据, 每个有效监控数据的上报时间可以从时间数组中的对应位置上获取到.
      */
    Values: Array<number>;
    /**
      * 时间数据, 标识监控数据Values中的点是哪个时间段上报的.
      */
    Time: Array<number>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * RollUpdateCloudBaseRunServerVersion返回参数结构体
 */
export interface RollUpdateCloudBaseRunServerVersionResponse {
    /**
      * succ为成功
      */
    Result: string;
    /**
      * 滚动更新的VersionName
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionName: string;
    /**
      * 操作记录id
注意：此字段可能返回 null，表示取不到有效值。
      */
    RunId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * cls日志信息
 */
export interface ClsInfo {
    /**
      * cls所属地域
      */
    ClsRegion: string;
    /**
      * cls日志集ID
      */
    ClsLogsetId: string;
    /**
      * cls日志主题ID
      */
    ClsTopicId: string;
    /**
      * 创建时间
      */
    CreateTime: string;
}
/**
 * DescribeCloudBaseRunOperationTypes请求参数结构体
 */
export interface DescribeCloudBaseRunOperationTypesRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 服务名称，精确匹配
      */
    ServerName?: string;
}
/**
 * DescribeAuthDomains返回参数结构体
 */
export interface DescribeAuthDomainsResponse {
    /**
      * 安全域名列表列表
      */
    Domains?: Array<AuthDomain>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeStandaloneGateway返回参数结构体
 */
export interface DescribeStandaloneGatewayResponse {
    /**
      * 独立网关信息列表
      */
    StandaloneGatewayList: Array<StandaloneGatewayInfo>;
    /**
      * 总数
      */
    Total: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeWxCloudBaseRunEnvs返回参数结构体
 */
export interface DescribeWxCloudBaseRunEnvsResponse {
    /**
      * env列表
      */
    EnvList: Array<EnvInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateHostingDomain请求参数结构体
 */
export interface CreateHostingDomainRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 域名
      */
    Domain: string;
    /**
      * 证书ID
      */
    CertId: string;
}
/**
 * DescribeCloudBaseRunResource请求参数结构体
 */
export interface DescribeCloudBaseRunResourceRequest {
    /**
      * 环境ID
      */
    EnvId: string;
}
/**
 * emptydir 数据卷详细信息
 */
export interface CloudBaseRunEmptyDirVolumeSource {
    /**
      * 启用emptydir数据卷
      */
    EnableEmptyDirVolume?: boolean;
    /**
      * "","Memory","HugePages"
      */
    Medium?: string;
    /**
      * emptydir数据卷大小
      */
    SizeLimit?: string;
}
/**
 * cfs挂载点
 */
export interface CloudBaseRunVolumeMount {
    /**
      * 资源名
      */
    Name?: string;
    /**
      * 挂载路径
      */
    MountPath?: string;
    /**
      * 是否只读
      */
    ReadOnly?: boolean;
    /**
      * Nfs挂载信息
      */
    NfsVolumes?: Array<CloudBaseRunNfsVolumeSource>;
}
/**
 * 网关服务信息
 */
export interface BackendServiceInfo {
    /**
      * 服务名称
      */
    ServiceName: string;
    /**
      * 服务状态
      */
    Status: string;
}
/**
 * DescribePostpayFreeQuotas请求参数结构体
 */
export interface DescribePostpayFreeQuotasRequest {
    /**
      * 环境ID
      */
    EnvId: string;
}
/**
 * DescribeActivityInfo返回参数结构体
 */
export interface DescribeActivityInfoResponse {
    /**
      * 活动详情
      */
    ActivityInfoList: Array<ActivityInfoItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CloudBaseRun 镜像信息
 */
export interface CloudBaseRunImageInfo {
    /**
      * 镜像仓库名称
      */
    RepositoryName: string;
    /**
      * 是否公有
      */
    IsPublic: boolean;
    /**
      * 镜像tag名称
      */
    TagName: string;
    /**
      * 镜像server
      */
    ServerAddr: string;
    /**
      * 镜像拉取地址
      */
    ImageUrl: string;
}
/**
 * DestroyStandaloneGateway返回参数结构体
 */
export interface DestroyStandaloneGatewayResponse {
    /**
      * 删除独立网关状态
      */
    Status: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCloudBaseRunServerVersion返回参数结构体
 */
export interface DescribeCloudBaseRunServerVersionResponse {
    /**
      * 版本名称
      */
    VersionName: string;
    /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * Dockefile的路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    DockerfilePath: string;
    /**
      * DockerBuild的目录
注意：此字段可能返回 null，表示取不到有效值。
      */
    BuildDir: string;
    /**
      * 请使用CPUSize
      */
    Cpu: number;
    /**
      * 请使用MemSize
      */
    Mem: number;
    /**
      * 副本最小值
      */
    MinNum: number;
    /**
      * 副本最大值
      */
    MaxNum: number;
    /**
      * 策略类型
      */
    PolicyType: string;
    /**
      * 策略阈值
      */
    PolicyThreshold: number;
    /**
      * 环境变量
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvParams: string;
    /**
      * 创建时间
      */
    CreatedTime: string;
    /**
      * 更新时间
      */
    UpdatedTime: string;
    /**
      * 版本的IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionIP: string;
    /**
      * 版本的端口号
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionPort: number;
    /**
      * 版本状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 代码包的名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageName: string;
    /**
      * 代码版本的名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageVersion: string;
    /**
      * 枚举（package/repository/image)
注意：此字段可能返回 null，表示取不到有效值。
      */
    UploadType: string;
    /**
      * Repo的类型(gitlab/github/coding)
注意：此字段可能返回 null，表示取不到有效值。
      */
    RepoType: string;
    /**
      * 地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Repo: string;
    /**
      * 分支
注意：此字段可能返回 null，表示取不到有效值。
      */
    Branch: string;
    /**
      * 服务名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServerName: string;
    /**
      * 是否对于外网开放
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsPublic: boolean;
    /**
      * vpc id
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId: string;
    /**
      * 子网实例id
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetIds: Array<string>;
    /**
      * 日志采集路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomLogs: string;
    /**
      * 监听端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerPort: number;
    /**
      * 延迟多长时间开始健康检查（单位s）
注意：此字段可能返回 null，表示取不到有效值。
      */
    InitialDelaySeconds: number;
    /**
      * 镜像地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageUrl: string;
    /**
      * CPU 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    CpuSize: number;
    /**
      * MEM 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    MemSize: number;
    /**
      * 是否有Dockerfile：0-default has, 1-has, 2-has not
注意：此字段可能返回 null，表示取不到有效值。
      */
    HasDockerfile: number;
    /**
      * 基础镜像
注意：此字段可能返回 null，表示取不到有效值。
      */
    BaseImage: string;
    /**
      * 容器启动入口命令
注意：此字段可能返回 null，表示取不到有效值。
      */
    EntryPoint: string;
    /**
      * 仓库语言
注意：此字段可能返回 null，表示取不到有效值。
      */
    RepoLanguage: string;
    /**
      * 自动扩缩容策略组
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicyDetail: Array<HpaPolicy>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 终端用户信息
 */
export interface EndUserInfo {
    /**
      * 用户唯一ID
      */
    UUId: string;
    /**
      * 微信ID
      */
    WXOpenId: string;
    /**
      * qq ID
      */
    QQOpenId: string;
    /**
      * 手机号
      */
    Phone: string;
    /**
      * 邮箱
      */
    Email: string;
    /**
      * 昵称
      */
    NickName: string;
    /**
      * 性别
      */
    Gender: string;
    /**
      * 头像地址
      */
    AvatarUrl: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 是否为匿名用户
      */
    IsAnonymous: boolean;
    /**
      * 是否禁用账户
      */
    IsDisabled: boolean;
    /**
      * 是否设置过密码
      */
    HasPassword: boolean;
    /**
      * 用户名
      */
    UserName: string;
}
/**
 * DeleteEndUser请求参数结构体
 */
export interface DeleteEndUserRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 用户列表，每一项都是uuid
      */
    UserList: Array<string>;
}
/**
 * DescribeHostingDomainTask请求参数结构体
 */
export interface DescribeHostingDomainTaskRequest {
    /**
      * 环境ID
      */
    EnvId: string;
}
/**
 * DescribeQuotaData返回参数结构体
 */
export interface DescribeQuotaDataResponse {
    /**
      * 指标名
      */
    MetricName?: string;
    /**
      * 指标的值
      */
    Value?: number;
    /**
      * 指标的附加值信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubValue?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 活动信息
 */
export interface ActivityInfoItem {
    /**
      * 活动id
      */
    ActivityId: number;
    /**
      * 记录插入时间
      */
    CreateTime: string;
    /**
      * 记录最后一次变更时间
      */
    UpdateTime: string;
    /**
      * 活动开始时间
      */
    StartTime: string;
    /**
      * 活动结束时间
      */
    ExpireTime: string;
    /**
      * 自定义备注信息
      */
    Tag: string;
}
/**
 * 键值对
 */
export interface KVPair {
    /**
      * 键
      */
    Key: string;
    /**
      * 值
      */
    Value: string;
}
/**
 * 短信免费量
 */
export interface SmsFreeQuota {
    /**
      * 免费量总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    FreeQuota: number;
    /**
      * 共计已使用总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalUsedQuota: number;
    /**
      * 免费周期起点，0000-00-00 00:00:00 形式
注意：此字段可能返回 null，表示取不到有效值。
      */
    CycleStart: string;
    /**
      * 免费周期终点，0000-00-00 00:00:00 形式
注意：此字段可能返回 null，表示取不到有效值。
      */
    CycleEnd: string;
    /**
      * 今天已使用总条数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TodayUsedQuota: number;
}
/**
 * 函数的信息
 */
export interface FunctionInfo {
    /**
      * 命名空间
      */
    Namespace: string;
    /**
      * 所属地域。
当前支持ap-shanghai
      */
    Region: string;
}
/**
 * CommonServiceAPI请求参数结构体
 */
export interface CommonServiceAPIRequest {
    /**
      * Service名，需要转发访问的接口名
      */
    Service: string;
    /**
      * 需要转发的云API参数，要转成JSON格式
      */
    JSONData?: string;
}
/**
 * DestroyStaticStore请求参数结构体
 */
export interface DestroyStaticStoreRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * cdn域名
      */
    CdnDomain?: string;
}
/**
 * CreateWxCloudBaseRunEnv请求参数结构体
 */
export interface CreateWxCloudBaseRunEnvRequest {
    /**
      * wx应用Id
      */
    WxAppId: string;
    /**
      * 环境别名，要以a-z开头，不能包含 a-z,0-9,- 以外的字符
      */
    Alias?: string;
    /**
      * 用户享有的免费额度级别，目前只能为“basic”，不传该字段或该字段为空，标识不享受免费额度。
      */
    FreeQuota?: string;
    /**
      * 订单标记。建议使用方统一转大小写之后再判断。
QuickStart：快速启动来源
Activity：活动来源
      */
    Flag?: string;
    /**
      * 私有网络Id
      */
    VpcId?: string;
    /**
      * 子网列表
      */
    SubNetIds?: Array<string>;
}
/**
 * ModifyCloudBaseRunServerFlowConf请求参数结构体
 */
export interface ModifyCloudBaseRunServerFlowConfRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 服务名称
      */
    ServerName: string;
    /**
      * 流量占比
      */
    VersionFlowItems?: Array<CloudBaseRunVersionFlowItem>;
    /**
      * 流量类型（URL_PARAMS / FLOW / HEADERS)
      */
    TrafficType?: string;
    /**
      * 操作备注
      */
    OperatorRemark?: string;
}
/**
 * DescribeActivityRecord返回参数结构体
 */
export interface DescribeActivityRecordResponse {
    /**
      * 活动记录详情
      */
    ActivityRecords: Array<ActivityRecordItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateStaticStore请求参数结构体
 */
export interface CreateStaticStoreRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 是否启用统一域名
      */
    EnableUnion?: boolean;
}
/**
 * CreateWxCloudBaseRunServerDBCluster请求参数结构体
 */
export interface CreateWxCloudBaseRunServerDBClusterRequest {
    /**
      * 账户密码
      */
    AccountPassword: string;
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 微信appid
      */
    WxAppId?: string;
}
/**
 * DeleteCloudBaseProjectLatestVersion返回参数结构体
 */
export interface DeleteCloudBaseProjectLatestVersionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAuthDomain返回参数结构体
 */
export interface CreateAuthDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDatabaseACL请求参数结构体
 */
export interface ModifyDatabaseACLRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 集合名称
      */
    CollectionName: string;
    /**
      * 权限标签。包含以下取值：
<li> READONLY：所有用户可读，仅创建者和管理员可写</li>
<li> PRIVATE：仅创建者及管理员可读写</li>
<li> ADMINWRITE：所有用户可读，仅管理员可写</li>
<li> ADMINONLY：仅管理员可读写</li>
      */
    AclTag: string;
}
/**
 * DescribeEnvs请求参数结构体
 */
export interface DescribeEnvsRequest {
    /**
      * 环境ID，如果传了这个参数则只返回该环境的相关信息
      */
    EnvId?: string;
    /**
      * 指定Channels字段为可见渠道列表或不可见渠道列表
如只想获取渠道A的环境 就填写IsVisible= true,Channels = ["A"], 过滤渠道A拉取其他渠道环境时填写IsVisible= false,Channels = ["A"]
      */
    IsVisible?: boolean;
    /**
      * 渠道列表，代表可见或不可见渠道由IsVisible参数指定
      */
    Channels?: Array<string>;
}
/**
 * 版本流量占比
 */
export interface CloudBaseRunVersionFlowItem {
    /**
      * 版本名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionName: string;
    /**
      * 流量占比
注意：此字段可能返回 null，表示取不到有效值。
      */
    FlowRatio?: number;
    /**
      * 流量参数键值对（URL参数/HEADERS参数）
注意：此字段可能返回 null，表示取不到有效值。
      */
    UrlParam?: ObjectKV;
    /**
      * 优先级
注意：此字段可能返回 null，表示取不到有效值。
      */
    Priority?: number;
    /**
      * 是否是默认兜底版本
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDefaultPriority?: boolean;
}
/**
 * DeleteWxGatewayRoute请求参数结构体
 */
export interface DeleteWxGatewayRouteRequest {
    /**
      * 环境id
      */
    EnvId: string;
    /**
      * 服务名称
      */
    GatewayRouteName: string;
}
/**
 * DescribeEnvPostpaidDeduct请求参数结构体
 */
export interface DescribeEnvPostpaidDeductRequest {
    /**
      * 资源方列表
      */
    ResourceTypes: Array<string>;
    /**
      * 环境id
      */
    EnvId?: string;
    /**
      * 查询开始时间
      */
    StartTime?: string;
    /**
      * 查询结束时间
      */
    EndTime?: string;
}
/**
 * DescribeExtraPkgBillingInfo请求参数结构体
 */
export interface DescribeExtraPkgBillingInfoRequest {
    /**
      * 已购买增值包的环境ID
      */
    EnvId?: string;
}
/**
 * BindEnvGateway返回参数结构体
 */
export interface BindEnvGatewayResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeWxCloudBaseRunSubNets返回参数结构体
 */
export interface DescribeWxCloudBaseRunSubNetsResponse {
    /**
      * 子网Id列表
      */
    SubNetIds: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEnvFreeQuota请求参数结构体
 */
export interface DescribeEnvFreeQuotaRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 资源类型：可选值：CDN, COS, FLEXDB, HOSTING, SCF
不传则返回全部资源指标
      */
    ResourceTypes?: Array<string>;
}
/**
 * cloudrun安全特性能力


 */
export interface CloudBaseCapabilities {
    /**
      * 启用安全能力项列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Add?: Array<string>;
    /**
      * 禁用安全能力向列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Drop?: Array<string>;
}
/**
 * DescribeEndUserLoginStatistic返回参数结构体
 */
export interface DescribeEndUserLoginStatisticResponse {
    /**
      * 环境终端用户新增与登录统计
注意：此字段可能返回 null，表示取不到有效值。
      */
    LoginStatistics?: Array<LoginStatistic>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEnvPostpaidDeduct返回参数结构体
 */
export interface DescribeEnvPostpaidDeductResponse {
    /**
      * 指标抵扣详情列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    PostPaidEnvDeductInfoList: Array<PostPaidEnvDeductInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 扩缩容策略
 */
export interface HpaPolicy {
    /**
      * 策略类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicyType?: string;
    /**
      * 策略阈值
注意：此字段可能返回 null，表示取不到有效值。
      */
    PolicyThreshold?: number;
}
/**
 * ImageSecretInfo的信息
 */
export interface CloudBaseRunImageSecretInfo {
    /**
      * 镜像地址
      */
    RegistryServer?: string;
    /**
      * 用户名
      */
    UserName?: string;
    /**
      * 仓库密码
      */
    Password?: string;
    /**
      * 邮箱
      */
    Email?: string;
}
/**
 * CreateCloudBaseRunResource返回参数结构体
 */
export interface CreateCloudBaseRunResourceResponse {
    /**
      * 返回集群创建是否成功 succ为成功。并且中间无err
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeStandaloneGatewayPackage返回参数结构体
 */
export interface DescribeStandaloneGatewayPackageResponse {
    /**
      * 总数
      */
    Total: number;
    /**
      * 套餐详情
      */
    StandaloneGatewayPackageList: Array<StandaloneGatewayPackageInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DestroyStaticStore返回参数结构体
 */
export interface DestroyStaticStoreResponse {
    /**
      * 条件任务结果(succ/fail)
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEndUser返回参数结构体
 */
export interface DeleteEndUserResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDatabaseACL返回参数结构体
 */
export interface ModifyDatabaseACLResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * es信息
 */
export interface CloudBaseEsInfo {
    /**
      * es的id
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id?: number;
    /**
      * secret名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecretName?: string;
    /**
      * ip地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Ip?: string;
    /**
      * 端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    Port?: number;
    /**
      * 索引
注意：此字段可能返回 null，表示取不到有效值。
      */
    Index?: string;
    /**
      * 用户名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Account?: string;
    /**
      * 密码
注意：此字段可能返回 null，表示取不到有效值。
      */
    Password?: string;
}
/**
 * 后付费计费详情
 */
export interface PostPaidEnvDeductInfo {
    /**
      * 资源方
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceType: string;
    /**
      * 指标名
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetricName: string;
    /**
      * 按量计费详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResQuota: number;
    /**
      * 资源包抵扣详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    PkgQuota: number;
    /**
      * 免费额度抵扣详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    FreeQuota: number;
    /**
      * 环境id
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvId: string;
}
/**
 * ModifyCloudBaseRunServerFlowConf返回参数结构体
 */
export interface ModifyCloudBaseRunServerFlowConfResponse {
    /**
      * 返回结果，succ代表成功
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCloudBaseRunOperationTypes返回参数结构体
 */
export interface DescribeCloudBaseRunOperationTypesResponse {
    /**
      * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Action: Array<string>;
    /**
      * 服务名列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServerName: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 1分钱计费详情
 */
export interface SpecialCostItem {
    /**
      * 上报日期
注意：此字段可能返回 null，表示取不到有效值。
      */
    ReportDate: string;
    /**
      * 腾讯云uin
注意：此字段可能返回 null，表示取不到有效值。
      */
    Uin: string;
    /**
      * 资源id:环境id
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvId: string;
    /**
      * 上报任务状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
}
/**
 * EstablishCloudBaseRunServer返回参数结构体
 */
export interface EstablishCloudBaseRunServerResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 环境信息
 */
export interface EnvInfo {
    /**
      * 账户下该环境唯一标识
      */
    EnvId: string;
    /**
      * 环境来源。包含以下取值：
<li>miniapp：微信小程序</li>
<li>qcloud ：腾讯云</li>
      */
    Source: string;
    /**
      * 环境别名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符
      */
    Alias: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 最后修改时间
      */
    UpdateTime: string;
    /**
      * 环境状态。包含以下取值：
<li>NORMAL：正常可用</li>
<li>UNAVAILABLE：服务不可用，可能是尚未初始化或者初始化过程中</li>
      */
    Status: string;
    /**
      * 数据库列表
      */
    Databases: Array<DatabasesInfo>;
    /**
      * 存储列表
      */
    Storages: Array<StorageInfo>;
    /**
      * 函数列表
      */
    Functions: Array<FunctionInfo>;
    /**
      * tcb产品套餐ID，参考DescribePackages接口的返回值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageId: string;
    /**
      * 套餐中文名称，参考DescribePackages接口的返回值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageName: string;
    /**
      * 云日志服务列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogServices: Array<LogServiceInfo>;
    /**
      * 静态资源信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    StaticStorages: Array<StaticStorageInfo>;
    /**
      * 是否到期自动降为免费版
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsAutoDegrade: boolean;
    /**
      * 环境渠道
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvChannel: string;
    /**
      * 支付方式。包含以下取值：
<li> prepayment：预付费</li>
<li> postpaid：后付费</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
    PayMode: string;
    /**
      * 是否为默认环境
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDefault: boolean;
    /**
      * 环境所属地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * 环境标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
    /**
      * 自定义日志服务
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomLogServices: Array<ClsInfo>;
}
/**
 * DestroyEnv请求参数结构体
 */
export interface DestroyEnvRequest {
    /**
      * 环境Id
      */
    EnvId: string;
    /**
      * 针对预付费 删除隔离中的环境时要传true 正常环境直接跳过隔离期删除
      */
    IsForce?: boolean;
    /**
      * 是否绕过资源检查，资源包等额外资源，默认为false，如果为true，则不检查资源是否有数据，直接删除。
      */
    BypassCheck?: boolean;
}
/**
 * DestroyEnv返回参数结构体
 */
export interface DestroyEnvResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCloudBaseProjectVersionList请求参数结构体
 */
export interface DescribeCloudBaseProjectVersionListRequest {
    /**
      * 环境id
      */
    EnvId: string;
    /**
      * 项目名称
      */
    ProjectName: string;
    /**
      * 页大小
      */
    PageSize?: number;
    /**
      * 第几页,从0开始
      */
    PageNum?: number;
    /**
      * 起始时间 2021-03-27 12:00:00
      */
    StartTime?: string;
    /**
      * 终止时间 2021-03-27 12:00:00
      */
    EndTime?: string;
}
/**
 * 云开发项目来源
 */
export interface CodeSource {
    /**
      * 类型, 可能的枚举: "coding","package","package_url","github","gitlab","gitee","rawcode"
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type?: string;
    /**
      * 下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url?: string;
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * 工作目录
注意：此字段可能返回 null，表示取不到有效值。
      */
    WorkDir?: string;
    /**
      * code包名, type为coding的时候需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
    CodingPackageName?: string;
    /**
      * coding版本名, type为coding的时候需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
    CodingPackageVersion?: string;
    /**
      * 源码
注意：此字段可能返回 null，表示取不到有效值。
      */
    RawCode?: string;
    /**
      * 代码分支
注意：此字段可能返回 null，表示取不到有效值。
      */
    Branch?: string;
    /**
      * coding项目ID，type为coding时需要填写
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectId?: number;
    /**
      * coding项目
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectName?: string;
}
/**
 * TurnOffStandaloneGateway返回参数结构体
 */
export interface TurnOffStandaloneGatewayResponse {
    /**
      * 关闭独立网关状态
      */
    Status: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeEnvs返回参数结构体
 */
export interface DescribeEnvsResponse {
    /**
      * 环境信息列表
      */
    EnvList: Array<EnvInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAuthDomain请求参数结构体
 */
export interface CreateAuthDomainRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 安全域名
      */
    Domains: Array<string>;
}
/**
 * CreateHostingDomain返回参数结构体
 */
export interface CreateHostingDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeActivityRecord请求参数结构体
 */
export interface DescribeActivityRecordRequest {
    /**
      * 渠道加密token
      */
    ChannelToken: string;
    /**
      * 渠道来源，每个来源对应不同secretKey
      */
    Channel: string;
    /**
      * 活动id列表
      */
    ActivityIdList?: Array<number>;
    /**
      * 过滤状态码，已废弃
      */
    Status?: number;
    /**
      * 状态码过滤数组，空数组时不过滤
      */
    Statuses?: Array<number>;
    /**
      * 根据是否软删除进行过滤，[0]未删除, [1] 删除，不传不过滤
      */
    IsDeletedList?: Array<number>;
}
/**
 * CreateWxCloudBaseRunEnv返回参数结构体
 */
export interface CreateWxCloudBaseRunEnvResponse {
    /**
      * 环境Id
      */
    EnvId: string;
    /**
      * 后付费订单号
      */
    TranId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteCloudBaseRunServerVersion请求参数结构体
 */
export interface DeleteCloudBaseRunServerVersionRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 服务名称
      */
    ServerName: string;
    /**
      * 版本名称
      */
    VersionName: string;
    /**
      * 是否删除服务，只有最后一个版本的时候，才生效。
      */
    IsDeleteServer?: boolean;
    /**
      * 只有删除服务的时候，才会起作用
      */
    IsDeleteImage?: boolean;
    /**
      * 操作备注
      */
    OperatorRemark?: string;
}
/**
 * CreateCloudBaseRunServerVersion请求参数结构体
 */
export interface CreateCloudBaseRunServerVersionRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 枚举（package/repository/image/jar/war)
      */
    UploadType: string;
    /**
      * 流量占比
      */
    FlowRatio: number;
    /**
      * Cpu的大小，单位：核
      */
    Cpu: number;
    /**
      * Mem的大小，单位：G
      */
    Mem: number;
    /**
      * 最小副本数，最小值：0
      */
    MinNum: number;
    /**
      * 副本最大数，最大值：50
      */
    MaxNum: number;
    /**
      * 策略类型(枚举值：比如cpu)
      */
    PolicyType: string;
    /**
      * 策略阈值
      */
    PolicyThreshold: number;
    /**
      * 服务端口
      */
    ContainerPort: number;
    /**
      * 服务名称
      */
    ServerName: string;
    /**
      * repository的类型(coding/gitlab/github/coding)
      */
    RepositoryType?: string;
    /**
      * Dockerfile地址
      */
    DockerfilePath?: string;
    /**
      * 构建目录
      */
    BuildDir?: string;
    /**
      * 环境变量
      */
    EnvParams?: string;
    /**
      * repository地址
      */
    Repository?: string;
    /**
      * 分支
      */
    Branch?: string;
    /**
      * 版本备注
      */
    VersionRemark?: string;
    /**
      * 代码包名字
      */
    PackageName?: string;
    /**
      * 代码包的版本
      */
    PackageVersion?: string;
    /**
      * Image的详情
      */
    ImageInfo?: CloudBaseRunImageInfo;
    /**
      * Github等拉取代码的详情
      */
    CodeDetail?: CloudBaseCodeRepoDetail;
    /**
      * 私有镜像秘钥信息
      */
    ImageSecretInfo?: CloudBaseRunImageSecretInfo;
    /**
      * 私有镜像 认证名称
      */
    ImagePullSecret?: string;
    /**
      * 用户自定义采集日志路径
      */
    CustomLogs?: string;
    /**
      * 延迟多长时间开始健康检查（单位s）
      */
    InitialDelaySeconds?: number;
    /**
      * cfs挂载信息
      */
    MountVolumeInfo?: Array<CloudBaseRunVolumeMount>;
    /**
      * 4 代表只能微信链路访问
      */
    AccessType?: number;
    /**
      * es信息
      */
    EsInfo?: CloudBaseEsInfo;
    /**
      * 是否使用统一域名
      */
    EnableUnion?: boolean;
    /**
      * 操作备注
      */
    OperatorRemark?: string;
    /**
      * 服务路径
      */
    ServerPath?: string;
    /**
      * 镜像复用的key
      */
    ImageReuseKey?: string;
    /**
      * 容器的描述文件
      */
    SidecarSpecs?: Array<CloudBaseRunSideSpec>;
    /**
      * 安全特性
      */
    Security?: CloudBaseSecurityContext;
    /**
      * 服务磁盘挂载
      */
    ServiceVolumes?: Array<CloudRunServiceVolume>;
    /**
      * 是否创建JnsGw 0未传默认创建 1创建 2不创建
      */
    IsCreateJnsGw?: number;
    /**
      * 数据卷挂载参数
      */
    ServiceVolumeMounts?: Array<CloudBaseRunServiceVolumeMount>;
    /**
      * 是否有Dockerfile：0-default has, 1-has, 2-has not
      */
    HasDockerfile?: number;
    /**
      * 基础镜像
      */
    BaseImage?: string;
    /**
      * 容器启动入口命令
      */
    EntryPoint?: string;
    /**
      * 仓库语言
      */
    RepoLanguage?: string;
    /**
      * 用户实际上传文件名（仅UploadType为jar/war时必填）
      */
    UploadFilename?: string;
    /**
      * 自动扩缩容策略组
      */
    PolicyDetail?: Array<HpaPolicy>;
}
/**
 * 终端用户登录新增统计
 */
export interface LoginStatistic {
    /**
      * 统计类型 新增NEWUSER 和登录 LOGIN
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatisticalType?: string;
    /**
      * 统计周期：日DAY，周WEEK，月MONTH
注意：此字段可能返回 null，表示取不到有效值。
      */
    StatisticalCycle?: string;
    /**
      * 统计总量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Count?: number;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime?: string;
}
/**
 * DescribeWxCloudBaseRunSubNets请求参数结构体
 */
export interface DescribeWxCloudBaseRunSubNetsRequest {
    /**
      * VPC id
      */
    VpcId: string;
    /**
      * 查询个数限制，不填或小于等于0，等于不限制
      */
    Limit?: number;
}
/**
 * DescribeCloudBaseRunAllVpcs请求参数结构体
 */
export interface DescribeCloudBaseRunAllVpcsRequest {
    /**
      * 环境ID
      */
    EnvId: string;
}
/**
 * CreatePostpayPackage返回参数结构体
 */
export interface CreatePostpayPackageResponse {
    /**
      * 后付费订单号
      */
    TranId: string;
    /**
      * 环境ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeExtensionUploadInfo请求参数结构体
 */
export interface DescribeExtensionUploadInfoRequest {
    /**
      * 待上传的文件
      */
    ExtensionFiles: Array<ExtensionFile>;
}
/**
 * ReplaceActivityRecord请求参数结构体
 */
export interface ReplaceActivityRecordRequest {
    /**
      * 活动id
      */
    ActivityId: number;
    /**
      * 状态码
      */
    Status: number;
    /**
      * 自定义子状态
      */
    SubStatus?: string;
    /**
      * 鉴权token
      */
    ChannelToken?: string;
    /**
      * 渠道名，不同渠道对应不同secretKey
      */
    Channel?: string;
}
/**
 * DeleteWxGatewayRoute返回参数结构体
 */
export interface DeleteWxGatewayRouteResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * EstablishCloudBaseRunServer请求参数结构体
 */
export interface EstablishCloudBaseRunServerRequest {
    /**
      * 环境id
      */
    EnvId: string;
    /**
      * 服务名称
      */
    ServiceName: string;
    /**
      * 是否开通外网访问
      */
    IsPublic: boolean;
    /**
      * 镜像仓库
      */
    ImageRepo?: string;
    /**
      * 服务描述
      */
    Remark?: string;
    /**
      * es信息
      */
    EsInfo?: CloudBaseEsInfo;
    /**
      * 日志类型; es/cls
      */
    LogType?: string;
    /**
      * 操作备注
      */
    OperatorRemark?: string;
    /**
      * 来源方（默认值：qcloud，微信侧来源miniapp)
      */
    Source?: string;
    /**
      * vpc信息
      */
    VpcInfo?: CloudBaseRunVpcInfo;
    /**
      * 0/1=允许公网访问;2=关闭公网访问
      */
    PublicAccess?: number;
    /**
      * OA PUBLIC MINIAPP VPC
      */
    OpenAccessTypes?: Array<string>;
    /**
      * 是否创建Path 0未传默认创建 1创建 2不创建
      */
    IsCreatePath?: number;
    /**
      * 指定创建路径（如不存在，则创建。存在，则忽略）
      */
    ServerPath?: string;
}
/**
 * 对标 EKS VolumeMount
 */
export interface CloudBaseRunServiceVolumeMount {
    /**
      * Volume 名称
      */
    Name?: string;
    /**
      * 挂载路径
      */
    MountPath?: string;
    /**
      * 是否只读
      */
    ReadOnly?: boolean;
    /**
      * 子路径
      */
    SubPath?: string;
    /**
      * 传播挂载方式
      */
    MountPropagation?: string;
}
/**
 * DescribeSpecialCostItems返回参数结构体
 */
export interface DescribeSpecialCostItemsResponse {
    /**
      * 1分钱抵扣详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    SpecialCostItems: Array<SpecialCostItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateStandaloneGateway请求参数结构体
 */
export interface CreateStandaloneGatewayRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 网关名
      */
    GatewayAlias: string;
    /**
      * 私有网络ID
      */
    VpcId: string;
    /**
      * 子网ID
      */
    SubnetIds: Array<string>;
    /**
      * 网关描述
      */
    GatewayDesc: string;
    /**
      * 网关套餐版本
      */
    PackageVersion: string;
}
/**
 * DescribeCloudBaseProjectVersionList返回参数结构体
 */
export interface DescribeCloudBaseProjectVersionListResponse {
    /**
      * 版本列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectVersions: Array<CloudBaseProjectVersion>;
    /**
      * 总个数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDownloadFile请求参数结构体
 */
export interface DescribeDownloadFileRequest {
    /**
      * 代码uri，格式如：extension://abcdefhhxxx.zip，对应 DescribeExtensionUploadInfo 接口的返回值
      */
    CodeUri: string;
}
/**
 * ReinstateEnv返回参数结构体
 */
export interface ReinstateEnvResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 云开发项目版本
 */
export interface CloudBaseProjectVersion {
    /**
      * 项目名
      */
    Name: string;
    /**
      * SAM json
注意：此字段可能返回 null，表示取不到有效值。
      */
    Sam: string;
    /**
      * 来源类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Source: CodeSource;
    /**
      * 创建时间, unix时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateTime: number;
    /**
      * 更新时间 ,unix时间戳
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime: number;
    /**
      * 项目状态, 枚举值:
        "creatingEnv"-创建环境中
    "createEnvFail"-创建环境失败
    "building"-构建中
    "buildFail"-构建失败
    "deploying"-部署中
     "deployFail"-部署失败
     "success"-部署成功
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 环境变量
注意：此字段可能返回 null，表示取不到有效值。
      */
    Parameters: Array<KVPair>;
    /**
      * 项目类型, 枚举值:
"framework-oneclick" 控制台一键部署
"framework-local-oneclick" cli本地一键部署
"qci-extension-cicd" 内网coding ci cd
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * ci的id
注意：此字段可能返回 null，表示取不到有效值。
      */
    CIId: string;
    /**
      * cd的id
注意：此字段可能返回 null，表示取不到有效值。
      */
    CDId: string;
    /**
      * 环境id
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvId: string;
    /**
      * 版本号
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionNum: number;
    /**
      * 错误原因
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailReason: string;
    /**
      * rc.json内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    RcJson: string;
    /**
      * 插件配置内容
注意：此字段可能返回 null，表示取不到有效值。
      */
    AddonConfig: string;
    /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<string>;
    /**
      * 网络配置
注意：此字段可能返回 null，表示取不到有效值。
      */
    NetworkConfig: string;
    /**
      * 扩展id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ExtensionId: string;
    /**
      * 错误类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    FailType: string;
    /**
      * 私有仓库地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    RepoUrl: string;
    /**
      * 是否私有仓库代码变更触发自动部署
注意：此字段可能返回 null，表示取不到有效值。
      */
    AutoDeployOnCodeChange: boolean;
    /**
      * ci部署进度（%）
注意：此字段可能返回 null，表示取不到有效值。
      */
    BuildPercent: number;
}
/**
 * 后付费免费额度
 */
export interface PackageFreeQuotaInfo {
    /**
      * 资源类型
<li>COS</li>
<li>CDN</li>
<li>FLEXDB</li>
<li>SCF</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceType: string;
    /**
      * 资源指标名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    ResourceMetric: string;
    /**
      * 资源指标免费量
注意：此字段可能返回 null，表示取不到有效值。
      */
    FreeQuota: number;
    /**
      * 指标单位
注意：此字段可能返回 null，表示取不到有效值。
      */
    MetricUnit: string;
    /**
      * 免费量抵扣周期
<li>sum-month:以月为单位抵扣</li>
<li>sum-day:以天为单位抵扣</li>
<li>totalize:总容量抵扣</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeductType: string;
    /**
      * 免费量类型
<li>basic:通用量抵扣</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
    FreeQuotaType: string;
}
/**
 * DescribeEnvFreeQuota返回参数结构体
 */
export interface DescribeEnvFreeQuotaResponse {
    /**
      * 免费抵扣配额详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    QuotaItems?: Array<PostpayEnvQuota>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAndDeployCloudBaseProject返回参数结构体
 */
export interface CreateAndDeployCloudBaseProjectResponse {
    /**
      * 环境Id
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 静态CDN资源信息
 */
export interface StaticStorageInfo {
    /**
      * 静态CDN域名
注意：此字段可能返回 null，表示取不到有效值。
      */
    StaticDomain: string;
    /**
      * 静态CDN默认文件夹，当前为根目录
注意：此字段可能返回 null，表示取不到有效值。
      */
    DefaultDirName: string;
    /**
      * 资源状态(process/online/offline/init)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * cos所属区域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * bucket信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Bucket: string;
}
/**
 * DescribeCloudBaseRunResourceForExtend返回参数结构体
 */
export interface DescribeCloudBaseRunResourceForExtendResponse {
    /**
      * 集群状态(creating/succ)
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterStatus?: string;
    /**
      * 虚拟集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    VirtualClusterId?: string;
    /**
      * vpc id信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId?: string;
    /**
      * 地域信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region?: string;
    /**
      * 子网信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetIds?: Array<CloudBaseRunVpcSubnet>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateAndDeployCloudBaseProject请求参数结构体
 */
export interface CreateAndDeployCloudBaseProjectRequest {
    /**
      * 项目名
      */
    Name: string;
    /**
      * 来源
      */
    Source: CodeSource;
    /**
      * 环境id
      */
    EnvId?: string;
    /**
      * 项目类型, 枚举值为: framework-oneclick,qci-extension-cicd
      */
    Type?: string;
    /**
      * 环境变量
      */
    Parameters?: Array<KVPair>;
    /**
      * 环境别名。要以a-z开头，不能包含a-zA-z0-9-以外的字符
      */
    EnvAlias?: string;
    /**
      * rc.json的内容
      */
    RcJson?: string;
    /**
      * 插件配置内容
      */
    AddonConfig?: string;
    /**
      * 标签
      */
    Tags?: Array<string>;
    /**
      * 网络配置
      */
    NetworkConfig?: string;
    /**
      * 用户享有的免费额度级别，目前只能为“basic”，不传该字段或该字段为空，标识不享受免费额度。
      */
    FreeQuota?: string;
    /**
      * 是否代码变更触发自动部署
      */
    AutoDeployOnCodeChange?: boolean;
    /**
      * 私有仓库地址
      */
    RepoUrl?: string;
}
/**
 * DescribeEndUserStatistic请求参数结构体
 */
export interface DescribeEndUserStatisticRequest {
    /**
      * 环境id
      */
    EnvId: string;
}
/**
 * EstablishWxGatewayRoute请求参数结构体
 */
export interface EstablishWxGatewayRouteRequest {
    /**
      * 网关id
      */
    GatewayId: string;
    /**
      * 服务名称
      */
    GatewayRouteName: string;
    /**
      * 服务地址
      */
    GatewayRouteAddr: string;
    /**
      * 协议类型 http/https
      */
    GatewayRouteProtocol: string;
    /**
      * 服务描述
      */
    GatewayRouteDesc?: string;
}
/**
 * DescribeCloudBaseRunConfForGateWay返回参数结构体
 */
export interface DescribeCloudBaseRunConfForGateWayResponse {
    /**
      * 最近更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    LastUpTime: string;
    /**
      * 配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: Array<CloudBaseRunForGatewayConf>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 数据库资源信息
 */
export interface DatabasesInfo {
    /**
      * 数据库唯一标识
      */
    InstanceId: string;
    /**
      * 状态。包含以下取值：
<li>INITIALIZING：资源初始化中</li>
<li>RUNNING：运行中，可正常使用的状态</li>
<li>UNUSABLE：禁用，不可用</li>
<li>OVERDUE：资源过期</li>
      */
    Status: string;
    /**
      * 所属地域。
当前支持ap-shanghai
      */
    Region: string;
}
/**
 * cloudrun安全特性


 */
export interface CloudBaseSecurityContext {
    /**
      * 安全特性
注意：此字段可能返回 null，表示取不到有效值。
      */
    Capabilities?: CloudBaseCapabilities;
}
/**
 * 扩展文件
 */
export interface ExtensionFile {
    /**
      * 文件类型。枚举值
<li>FUNCTION：函数代码</li>
<li>STATIC：静态托管代码</li>
<li>SMS：短信文件</li>
      */
    FileType: string;
    /**
      * 文件名，长度不超过24
      */
    FileName: string;
}
/**
 * TurnOffStandaloneGateway请求参数结构体
 */
export interface TurnOffStandaloneGatewayRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 网关名称
      */
    GatewayName: string;
    /**
      * 服务名称列表
      */
    ServiceNameList: Array<string>;
}
/**
 * ReinstateEnv请求参数结构体
 */
export interface ReinstateEnvRequest {
    /**
      * 环境ID
      */
    EnvId: string;
}
/**
 * EstablishWxGatewayRoute返回参数结构体
 */
export interface EstablishWxGatewayRouteResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDatabaseACL请求参数结构体
 */
export interface DescribeDatabaseACLRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 集合名称
      */
    CollectionName: string;
}
/**
 * CreateCloudBaseRunServerVersion返回参数结构体
 */
export interface CreateCloudBaseRunServerVersionResponse {
    /**
      * 状态(creating/succ)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: string;
    /**
      * 版本名称（只有Result为succ的时候，才会返回VersionName)
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionName: string;
    /**
      * 操作记录id
注意：此字段可能返回 null，表示取不到有效值。
      */
    RunId: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 终端用户平台统计信息
 */
export interface PlatformStatistic {
    /**
      * 终端用户从属平台
注意：此字段可能返回 null，表示取不到有效值。
      */
    Platform?: string;
    /**
      * 平台终端用户数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Count?: number;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdateTime?: string;
}
/**
 * DeleteCloudBaseProjectLatestVersion请求参数结构体
 */
export interface DeleteCloudBaseProjectLatestVersionRequest {
    /**
      * 环境id
      */
    EnvId: string;
    /**
      * 项目名
      */
    ProjectName: string;
    /**
      * 是否保留资源
      */
    KeepResource?: boolean;
}
/**
 * DescribeCloudBaseProjectLatestVersionList返回参数结构体
 */
export interface DescribeCloudBaseProjectLatestVersionListResponse {
    /**
      * 项目列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ProjectList: Array<CloudBaseProjectVersion>;
    /**
      * 总数
注意：此字段可能返回 null，表示取不到有效值。
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 小租户网关套餐配置
 */
export interface StandaloneGatewayPackageInfo {
    /**
      * CPU核心数
      */
    CPU: number;
    /**
      * 内存大小，单位MB
      */
    Mem: number;
    /**
      * 套餐包版本名称
      */
    PackageVersion: string;
}
/**
 * nfs挂载资源
 */
export interface CloudBaseRunNfsVolumeSource {
    /**
      * NFS挂载Server
      */
    Server?: string;
    /**
      * Server路径
      */
    Path?: string;
    /**
      * 是否只读
      */
    ReadOnly?: boolean;
    /**
      * secret名称
      */
    SecretName?: string;
    /**
      * 临时目录
      */
    EnableEmptyDirVolume?: boolean;
}
/**
 * DescribeSmsQuotas返回参数结构体
 */
export interface DescribeSmsQuotasResponse {
    /**
      * 短信免费量信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    SmsFreeQuotaList?: Array<SmsFreeQuota>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeWxCloudBaseRunEnvs请求参数结构体
 */
export interface DescribeWxCloudBaseRunEnvsRequest {
    /**
      * wx应用Id
      */
    WxAppId?: string;
}
/**
 * DescribeCloudBaseRunVersionRsByCondition返回参数结构体
 */
export interface DescribeCloudBaseRunVersionRsByConditionResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeCurveData请求参数结构体
 */
export interface DescribeCurveDataRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * <li> 指标名: </li>
<li> StorageRead: 存储读请求次数 </li>
<li> StorageWrite: 存储写请求次数 </li>
<li> StorageCdnOriginFlux: CDN回源流量, 单位字节 </li>
<li> CDNFlux: CDN回源流量, 单位字节 </li>
<li> FunctionInvocation: 云函数调用次数 </li>
<li> FunctionGBs: 云函数资源使用量, 单位Mb*Ms </li>
<li> FunctionFlux: 云函数流量, 单位千字节(KB) </li>
<li> FunctionError: 云函数调用错误次数 </li>
<li> FunctionDuration: 云函数运行时间, 单位毫秒 </li>
<li> DbRead: 数据库读请求数 </li>
<li> DbWrite: 数据库写请求数 </li>
<li> DbCostTime10ms: 数据库耗时在10ms~50ms请求数 </li>
<li> DbCostTime50ms: 数据库耗时在50ms~100ms请求数 </li>
<li> DbCostTime100ms: 数据库耗时在100ms以上请求数 </li>
<li> TkeCpuRatio: 容器CPU占用率 </li>
<li> TkeMemRatio: 容器内存占用率 </li>
<li> TkeCpuUsed: 容器CPU使用量 </li>
<li> TkeMemUsed: 容器内存使用量 </li>
<li> TkeInvokeNum: 调用量 </li>
      */
    MetricName: string;
    /**
      * 开始时间，如2018-08-24 10:50:00, 开始时间需要早于结束时间至少五分钟(原因是因为目前统计粒度最小是5分钟).
      */
    StartTime: string;
    /**
      * 结束时间，如2018-08-24 10:50:00, 结束时间需要晚于开始时间至少五分钟(原因是因为目前统计粒度最小是5分钟)..
      */
    EndTime: string;
    /**
      * 资源ID, 目前仅对云函数、容器托管相关的指标有意义。云函数(FunctionInvocation, FunctionGBs, FunctionFlux, FunctionError, FunctionDuration)、容器托管（服务名称）, 如果想查询某个云函数的指标则在ResourceId中传入函数名; 如果只想查询整个namespace的指标, 则留空或不传.如果想查询数据库某个集合相关信息，传入集合名称
      */
    ResourceID?: string;
}
/**
 * DescribeActivityInfo请求参数结构体
 */
export interface DescribeActivityInfoRequest {
    /**
      * 活动id列表
      */
    ActivityIdList?: Array<number>;
}
/**
 * BindEnvGateway请求参数结构体
 */
export interface BindEnvGatewayRequest {
    /**
      * 子环境id
      */
    SubEnvId: string;
}
/**
 * ModifyEnv返回参数结构体
 */
export interface ModifyEnvResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDownloadFile返回参数结构体
 */
export interface DescribeDownloadFileResponse {
    /**
      * 文件路径，该字段已废弃
注意：此字段可能返回 null，表示取不到有效值。
      */
    FilePath: string;
    /**
      * 加密key，用于计算下载加密文件的header。参考SSE-C https://cloud.tencent.com/document/product/436/7728#sse-c
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomKey: string;
    /**
      * 下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
    DownloadUrl: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateStandaloneGateway返回参数结构体
 */
export interface CreateStandaloneGatewayResponse {
    /**
      * 网关名称
      */
    GatewayName: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeQuotaData请求参数结构体
 */
export interface DescribeQuotaDataRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * <li> 指标名: </li>
<li> StorageSizepkg: 当月存储空间容量, 单位MB </li>
<li> StorageReadpkg: 当月存储读请求次数 </li>
<li> StorageWritepkg: 当月存储写请求次数 </li>
<li> StorageCdnOriginFluxpkg: 当月CDN回源流量, 单位字节 </li>
<li> StorageCdnOriginFluxpkgDay: 当日CDN回源流量, 单位字节 </li>
<li> StorageReadpkgDay: 当日存储读请求次数 </li>
<li> StorageWritepkgDay: 当日写请求次数 </li>
<li> CDNFluxpkg: 当月CDN流量, 单位为字节 </li>
<li> CDNFluxpkgDay: 当日CDN流量, 单位为字节 </li>
<li> FunctionInvocationpkg: 当月云函数调用次数 </li>
<li> FunctionGBspkg: 当月云函数资源使用量, 单位Mb*Ms </li>
<li> FunctionFluxpkg: 当月云函数流量, 单位千字节(KB) </li>
<li> FunctionInvocationpkgDay: 当日云函数调用次数 </li>
<li> FunctionGBspkgDay: 当日云函数资源使用量, 单位Mb*Ms </li>
<li> FunctionFluxpkgDay: 当日云函数流量, 单位千字节(KB) </li>
<li> DbSizepkg: 当月数据库容量大小, 单位MB </li>
<li> DbReadpkg: 当日数据库读请求数 </li>
<li> DbWritepkg: 当日数据库写请求数 </li>
<li> StaticFsFluxPkgDay: 当日静态托管流量 </li>
<li> StaticFsFluxPkg: 当月静态托管流量</li>
<li> StaticFsSizePkg: 当月静态托管容量 </li>
<li> TkeCpuUsedPkg: 当月容器托管CPU使用量，单位核*秒 </li>
<li> TkeCpuUsedPkgDay: 当天容器托管CPU使用量，单位核*秒 </li>
<li> TkeMemUsedPkg: 当月容器托管内存使用量，单位MB*秒 </li>
<li> TkeMemUsedPkgDay: 当天容器托管内存使用量，单位MB*秒 </li>
<li> CodingBuildTimePkgDay: 当天容器托管构建时间使用量，单位毫秒 </li>
<li> TkeHttpServiceNatPkgDay: 当天容器托管流量使用量，单位B </li>
      */
    MetricName: string;
    /**
      * 资源ID, 目前仅对云函数、容器托管相关的指标有意义。云函数(FunctionInvocationpkg, FunctionGBspkg, FunctionFluxpkg)、容器托管（服务名称）。如果想查询某个云函数的指标则在ResourceId中传入函数名; 如果只想查询整个namespace的指标, 则留空或不传。
      */
    ResourceID?: string;
}
/**
 * CreateStaticStore返回参数结构体
 */
export interface CreateStaticStoreResponse {
    /**
      * 创建静态资源结果(succ/fail)
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * vpc信息
 */
export interface CloudBaseRunVpcInfo {
    /**
      * vpc的id
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId?: string;
    /**
      * 子网id
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetIds?: Array<string>;
    /**
      * 创建类型(0=继承; 1=新建; 2=指定)
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreateType?: number;
}
/**
 * DescribeCloudBaseRunResource返回参数结构体
 */
export interface DescribeCloudBaseRunResourceResponse {
    /**
      * 集群状态(creating/succ)
注意：此字段可能返回 null，表示取不到有效值。
      */
    ClusterStatus?: string;
    /**
      * 虚拟集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    VirtualClusterId?: string;
    /**
      * vpc id信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId?: string;
    /**
      * 地域信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region?: string;
    /**
      * 子网信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetIds?: Array<CloudBaseRunVpcSubnet>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * StorageInfo 资源信息
 */
export interface StorageInfo {
    /**
      * 资源所属地域。
当前支持ap-shanghai
      */
    Region: string;
    /**
      * 桶名，存储资源的唯一标识
      */
    Bucket: string;
    /**
      * cdn 域名
      */
    CdnDomain: string;
    /**
      * 资源所属用户的腾讯云appId
      */
    AppId: string;
}
/**
 * DescribeCloudBaseRunVersionSnapshot请求参数结构体
 */
export interface DescribeCloudBaseRunVersionSnapshotRequest {
    /**
      * 服务名
      */
    ServerName: string;
    /**
      * 版本名
      */
    VersionName: string;
    /**
      * 环境id
      */
    EnvId: string;
    /**
      * 版本历史名
      */
    SnapshotName?: string;
    /**
      * 偏移量。默认0
      */
    Offset?: number;
    /**
      * 限制大小。默认10，最大20
      */
    Limit?: number;
}
/**
 * 后付费资源免费量信息
 */
export interface FreequotaInfo {
    /**
      * 资源类型
<li>COS</li>
<li>CDN</li>
<li>FLEXDB</li>
<li>SCF</li>
      */
    ResourceType: string;
    /**
      * 资源指标名称
      */
    ResourceMetric: string;
    /**
      * 资源指标免费量
      */
    FreeQuota: number;
    /**
      * 指标单位
      */
    MetricUnit: string;
    /**
      * 免费量抵扣周期
<li>sum-month:以月为单位抵扣</li>
<li>sum-day:以天为单位抵扣</li>
<li>totalize:总容量抵扣</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
    DeductType: string;
    /**
      * 免费量类型
<li>basic:通用量抵扣</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
    FreeQuotaType: string;
}
/**
 * TurnOnStandaloneGateway请求参数结构体
 */
export interface TurnOnStandaloneGatewayRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 网关名称
      */
    GatewayName: string;
    /**
      * 服务名称列表
      */
    ServiceNameList: Array<string>;
}
/**
 * DescribeUserActivityInfo返回参数结构体
 */
export interface DescribeUserActivityInfoResponse {
    /**
      * 自定义标记，1元钱裂变需求中即代指`团id`
      */
    Tag: string;
    /**
      * 自定义备注，1元钱裂变需求中返回`团列表`，uin列表通过","拼接
      */
    Notes: string;
    /**
      * 活动剩余时间，单位为s.1元钱裂变需求中即为 time(活动过期时间)-Now()), 过期后为0，即返回必为自然数
      */
    ActivityTimeLeft: number;
    /**
      * 拼团剩余时间，单位为s.1元钱裂变需求中即为time(成团时间)+24H-Now()，过期后为0，即返回必为自然数
      */
    GroupTimeLeft: number;
    /**
      * 昵称列表,通过","拼接， 1元钱裂变活动中与Notes中uin一一对应
注意：此字段可能返回 null，表示取不到有效值。
      */
    NickNameList: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePostpayFreeQuotas返回参数结构体
 */
export interface DescribePostpayFreeQuotasResponse {
    /**
      * 免费量资源信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    FreequotaInfoList?: Array<FreequotaInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 活动详情
 */
export interface ActivityRecordItem {
    /**
      * 用户uin
注意：此字段可能返回 null，表示取不到有效值。
      */
    Uin: string;
    /**
      * 活动id
注意：此字段可能返回 null，表示取不到有效值。
      */
    ActivityId: number;
    /**
      * 自定义状态码
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: number;
    /**
      * 自定义子状态码
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubStatus: string;
    /**
      * 整型子状态码
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubStatusInt: number;
    /**
      * 是否软删除
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsDeleted: boolean;
}
/**
 * 合法域名
 */
export interface AuthDomain {
    /**
      * 域名ID
      */
    Id: string;
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名类型。包含以下取值：
<li>SYSTEM</li>
<li>USER</li>
      */
    Type: string;
    /**
      * 状态。包含以下取值：
<li>ENABLE</li>
<li>DISABLE</li>
      */
    Status: string;
    /**
      * 创建时间
      */
    CreateTime: string;
    /**
      * 更新时间
      */
    UpdateTime: string;
}
/**
 * DescribeCloudBaseProjectLatestVersionList请求参数结构体
 */
export interface DescribeCloudBaseProjectLatestVersionListRequest {
    /**
      * 偏移量
      */
    Offset: number;
    /**
      * 个数
      */
    PageSize: number;
    /**
      * 环境id, 非必填
      */
    EnvId?: string;
    /**
      * 项目名称, 非必填
      */
    ProjectName?: string;
    /**
      * 项目类型: framework-oneclick,qci-extension-cicd
      */
    ProjectType?: string;
    /**
      * 标签
      */
    Tags?: Array<string>;
    /**
      * ci的id
      */
    CiId?: string;
}
/**
 * DescribeEndUsers返回参数结构体
 */
export interface DescribeEndUsersResponse {
    /**
      * 用户总数
      */
    Total?: number;
    /**
      * 用户列表
      */
    Users?: Array<EndUserInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeHostingDomainTask返回参数结构体
 */
export interface DescribeHostingDomainTaskResponse {
    /**
      * todo/doing/done/error
      */
    Status: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 环境计费信息
 */
export interface EnvBillingInfoItem {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * tcb产品套餐ID，参考DescribePackages接口的返回值。
      */
    PackageId: string;
    /**
      * 自动续费标记
      */
    IsAutoRenew: boolean;
    /**
      * 状态。包含以下取值：
<li> 空字符串：初始化中</li>
<li> NORMAL：正常</li>
<li> ISOLATE：隔离</li>
      */
    Status: string;
    /**
      * 支付方式。包含以下取值：
<li> PREPAYMENT：预付费</li>
<li> POSTPAID：后付费</li>
      */
    PayMode: string;
    /**
      * 隔离时间，最近一次隔离的时间
      */
    IsolatedTime: string;
    /**
      * 过期时间，套餐即将到期的时间
      */
    ExpireTime: string;
    /**
      * 创建时间，第一次接入计费方案的时间。
      */
    CreateTime: string;
    /**
      * 更新时间，计费信息最近一次更新的时间。
      */
    UpdateTime: string;
    /**
      * true表示从未升级过付费版。
      */
    IsAlwaysFree: boolean;
    /**
      * 付费渠道。
<li> miniapp：小程序</li>
<li> qcloud：腾讯云</li>
注意：此字段可能返回 null，表示取不到有效值。
      */
    PaymentChannel: string;
    /**
      * 最新的订单信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    OrderInfo: OrderInfo;
    /**
      * 免费配额信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
    FreeQuota: string;
}
/**
 * DescribeEndUserStatistic返回参数结构体
 */
export interface DescribeEndUserStatisticResponse {
    /**
      * 终端用户各平台统计
注意：此字段可能返回 null，表示取不到有效值。
      */
    PlatformStatistics?: Array<PlatformStatistic>;
    /**
      * 终端用户总数
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSmsQuotas请求参数结构体
 */
export interface DescribeSmsQuotasRequest {
    /**
      * 环境ID
      */
    EnvId: string;
}
/**
 * DescribeCloudBaseRunVersion返回参数结构体
 */
export interface DescribeCloudBaseRunVersionResponse {
    /**
      * 版本名称
      */
    VersionName: string;
    /**
      * 备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * Dockefile的路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    DockerfilePath: string;
    /**
      * DockerBuild的目录
注意：此字段可能返回 null，表示取不到有效值。
      */
    BuildDir: string;
    /**
      * 副本最小值
      */
    MinNum: number;
    /**
      * 副本最大值
      */
    MaxNum: number;
    /**
      * 策略类型
      */
    PolicyType: string;
    /**
      * 策略阈值
      */
    PolicyThreshold: number;
    /**
      * 环境变量
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnvParams: string;
    /**
      * 创建时间
      */
    CreatedTime: string;
    /**
      * 更新时间
      */
    UpdatedTime: string;
    /**
      * 版本的IP
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionIP: string;
    /**
      * 版本的端口号
注意：此字段可能返回 null，表示取不到有效值。
      */
    VersionPort: number;
    /**
      * 版本状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 代码包的名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageName: string;
    /**
      * 代码版本的名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageVersion: string;
    /**
      * 枚举（package/repository/image)
注意：此字段可能返回 null，表示取不到有效值。
      */
    UploadType: string;
    /**
      * Repo的类型(coding/gitlab/github/coding)
注意：此字段可能返回 null，表示取不到有效值。
      */
    RepoType: string;
    /**
      * 地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Repo: string;
    /**
      * 分支
注意：此字段可能返回 null，表示取不到有效值。
      */
    Branch: string;
    /**
      * 服务名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    ServerName: string;
    /**
      * 是否对于外网开放
注意：此字段可能返回 null，表示取不到有效值。
      */
    IsPublic: boolean;
    /**
      * vpc id
注意：此字段可能返回 null，表示取不到有效值。
      */
    VpcId: string;
    /**
      * 子网实例id
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubnetIds: Array<string>;
    /**
      * 日志采集路径
注意：此字段可能返回 null，表示取不到有效值。
      */
    CustomLogs: string;
    /**
      * 监听端口
注意：此字段可能返回 null，表示取不到有效值。
      */
    ContainerPort: number;
    /**
      * 延迟多长时间开始健康检查（单位s）
注意：此字段可能返回 null，表示取不到有效值。
      */
    InitialDelaySeconds: number;
    /**
      * 镜像地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageUrl: string;
    /**
      * CPU 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    CpuSize: number;
    /**
      * MEM 大小
注意：此字段可能返回 null，表示取不到有效值。
      */
    MemSize: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreatePostpayPackage请求参数结构体
 */
export interface CreatePostpayPackageRequest {
    /**
      * 环境ID，需要系统自动创建环境时，此字段不传
      */
    EnvId?: string;
    /**
      * 微信 AppId，微信必传
      */
    WxAppId?: string;
    /**
      * 付费来源
<li>miniapp</li>
<li>qcloud</li>
      */
    Source?: string;
    /**
      * 用户享有的免费额度级别，目前只能为“basic”，不传该字段或该字段为空，标识不享受免费额度。
      */
    FreeQuota?: string;
    /**
      * 环境创建来源，取值：
<li>miniapp</li>
<li>qcloud</li>
用法同CreateEnv接口的Source参数
和 Channel 参数同时传，或者同时不传；EnvId 为空时必传。
      */
    EnvSource?: string;
    /**
      * 环境别名，要以a-z开头，不能包含  a-z,0-9,-  以外的字符
      */
    Alias?: string;
    /**
      * 如果envsource为miniapp, channel可以为ide或api;
如果envsource为qcloud, channel可以为qc_console,cocos, qq, cloudgame,dcloud,serverless_framework
和 EnvSource 参数同时传，或者同时不传；EnvId 为空时必传。
      */
    Channel?: string;
    /**
      * 扩展ID
      */
    ExtensionId?: string;
    /**
      * 订单标记。建议使用方统一转大小写之后再判断。
<li>QuickStart：快速启动来源</li>
<li>Activity：活动来源</li>
      */
    Flag?: string;
}
/**
 * DescribeCloudBaseBuildService请求参数结构体
 */
export interface DescribeCloudBaseBuildServiceRequest {
    /**
      * 环境id
      */
    EnvId: string;
    /**
      * 服务名
      */
    ServiceName: string;
    /**
      * build类型,枚举值有: cloudbaserun, framework-ci
      */
    CIBusiness?: string;
    /**
      * 服务版本
      */
    ServiceVersion?: string;
}
/**
 * 代码仓库里 Repo的信息描述
 */
export interface CloudBaseCodeRepoDetail {
    /**
      * repo的名字
      */
    Name?: CloudBaseCodeRepoName;
    /**
      * repo的url
      */
    Url?: string;
}
/**
 * CheckTcbService请求参数结构体
 */
export declare type CheckTcbServiceRequest = null;
/**
 * DescribeCloudBaseRunVersionRsByCondition请求参数结构体
 */
export declare type DescribeCloudBaseRunVersionRsByConditionRequest = null;
/**
 * DescribeUserActivityInfo请求参数结构体
 */
export interface DescribeUserActivityInfoRequest {
    /**
      * 活动id
      */
    ActivityId: number;
    /**
      * 渠道加密token
      */
    ChannelToken?: string;
    /**
      * 渠道来源，每个来源对应不同secretKey
      */
    Channel?: string;
    /**
      * 团id, 1元钱裂变中活动团id不为空时根据团id来查询记录，为空时查询uin最新记录
      */
    GroupId?: string;
}
/**
 * 标签键值对
 */
export interface Tag {
    /**
      * 标签键
      */
    Key: string;
    /**
      * 标签值
      */
    Value: string;
}
/**
 * CreateCloudBaseRunResource请求参数结构体
 */
export interface CreateCloudBaseRunResourceRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * vpc的ID
      */
    VpcId?: string;
    /**
      * 子网ID列表，当VpcId不为空，SubnetIds也不能为空
      */
    SubnetIds?: Array<string>;
}
/**
 * ModifyEndUser返回参数结构体
 */
export interface ModifyEndUserResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeAuthDomains请求参数结构体
 */
export interface DescribeAuthDomainsRequest {
    /**
      * 环境ID
      */
    EnvId: string;
}
/**
 * 服务的volume
 */
export interface CloudRunServiceVolume {
    /**
      * 名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * NFS的挂载方式
注意：此字段可能返回 null，表示取不到有效值。
      */
    NFS?: CloudBaseRunNfsVolumeSource;
    /**
      * secret名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    SecretName?: string;
    /**
      * 是否开启临时目录逐步废弃，请使用 EmptyDir
注意：此字段可能返回 null，表示取不到有效值。
      */
    EnableEmptyDirVolume?: boolean;
    /**
      * emptydir数据卷详细信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    EmptyDir?: CloudBaseRunEmptyDirVolumeSource;
}
/**
 * 独立网关云托管服务配置信息
 */
export interface CloudBaseRunForGatewayConf {
    /**
      * 是否缩容到0
      */
    IsZero: boolean;
    /**
      * 按百分比灰度的权重
      */
    Weight: number;
    /**
      * 按请求/header参数的灰度Key
      */
    GrayKey: string;
    /**
      * 按请求/header参数的灰度Value
      */
    GrayValue: string;
    /**
      * 是否为默认版本(按请求/header参数)
      */
    IsDefault: boolean;
    /**
      * 访问权限，对应二进制分多段，vpc内网｜公网｜oa
      */
    AccessType: number;
    /**
      * 访问的URL（域名＋路径）列表
      */
    URLs: Array<string>;
    /**
      * 环境ID
      */
    EnvId?: string;
    /**
      * 服务名称
      */
    ServerName?: string;
    /**
      * 版本名称
      */
    VersionName?: string;
    /**
      * 灰度类型：FLOW(权重), URL_PARAMS/HEAD_PARAMS
      */
    GrayType?: string;
    /**
      * CLB的IP:Port
      */
    LbAddr?: string;
    /**
      * 0:http访问服务配置信息, 1: 服务域名
      */
    ConfigType?: number;
}
/**
 * 扩展文件信息
 */
export interface ExtensionFileInfo {
    /**
      * 模板里使用的地址
      */
    CodeUri: string;
    /**
      * 上传文件的临时地址，含签名
      */
    UploadUrl: string;
    /**
      * 自定义密钥。如果为空，则表示不需要加密
      */
    CustomKey: string;
    /**
      * 文件大小限制，单位M，客户端上传前需要主动检查文件大小，超过限制的文件会被删除。
      */
    MaxSize: number;
}
/**
 * Key-Value类型，模拟的 object 类型
 */
export interface ObjectKV {
    /**
      * object 的 key
      */
    Key: string;
    /**
      * object key 对应的 value
      */
    Value: string;
}
/**
 * 子网信息
 */
export interface CloudBaseRunVpcSubnet {
    /**
      * 子网id
注意：此字段可能返回 null，表示取不到有效值。
      */
    Id: string;
    /**
      * 子网的ipv4
注意：此字段可能返回 null，表示取不到有效值。
      */
    Cidr: string;
    /**
      * 可用区
注意：此字段可能返回 null，表示取不到有效值。
      */
    Zone: string;
    /**
      * 类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * subnet类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Target: string;
    /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
    Region: string;
    /**
      * 名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
}
/**
 * DescribeEnvDealRegion请求参数结构体
 */
export interface DescribeEnvDealRegionRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 订单类型：
ENV_PREPAY_MINIAPP= 预付费环境(微信小程序)
ENV_PREPAY_CLOUD= 预付费环境(腾讯云)
ENV_POSTPAY = 后付费环境
HOSTING_PREPAY = 预付费静态托管
PACKAGE=套餐包
      */
    DealType: string;
    /**
      * 下单类型：
CREATE = 新购
RENEW = 续费
MODIFY = 套餐调整(升级/降级)
REFUND = 退费
      */
    DealAction: string;
    /**
      * 下单地域：
ap-guangzhou = 广州地域
ap-shanghai = 上海地域
ap-beijing = 北京地域
      */
    DealRegion: string;
}
/**
 * DescribeDatabaseACL返回参数结构体
 */
export interface DescribeDatabaseACLResponse {
    /**
      * 权限标签。包含以下取值：
<li> READONLY：所有用户可读，仅创建者和管理员可写</li>
<li> PRIVATE：仅创建者及管理员可读写</li>
<li> ADMINWRITE：所有用户可读，仅管理员可写</li>
<li> ADMINONLY：仅管理员可读写</li>
      */
    AclTag?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeExtensionUploadInfo返回参数结构体
 */
export interface DescribeExtensionUploadInfoResponse {
    /**
      * 待上传文件的信息数组
      */
    FilesData: Array<ExtensionFileInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyEnv请求参数结构体
 */
export interface ModifyEnvRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 环境备注名，要以a-z开头，不能包含 a-zA-z0-9- 以外的字符
      */
    Alias?: string;
}
/**
 * 按量付费免费配额信息
 */
export interface PostpayEnvQuota {
    /**
      * 资源类型
      */
    ResourceType: string;
    /**
      * 指标名
      */
    MetricName: string;
    /**
      * 配额值
      */
    Value: number;
    /**
      * 配额生效时间
为空表示没有时间限制
      */
    StartTime: string;
    /**
      * 配额失效时间
为空表示没有时间限制
      */
    EndTime: string;
}
/**
 * DescribeCloudBaseRunVersionSnapshot返回参数结构体
 */
export interface DescribeCloudBaseRunVersionSnapshotResponse {
    /**
      * 版本历史
注意：此字段可能返回 null，表示取不到有效值。
      */
    Snapshots: Array<CloudRunServiceSimpleVersionSnapshot>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribePostpayPackageFreeQuotas返回参数结构体
 */
export interface DescribePostpayPackageFreeQuotasResponse {
    /**
      * 免费量资源信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    PackageFreeQuotaInfos?: Array<PackageFreeQuotaInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeExtraPkgBillingInfo返回参数结构体
 */
export interface DescribeExtraPkgBillingInfoResponse {
    /**
      * 增值包计费信息列表
      */
    EnvInfoList?: Array<EnvBillingInfoItem>;
    /**
      * 增值包数目
      */
    Total?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 代码仓库 repo的名字
 */
export interface CloudBaseCodeRepoName {
    /**
      * repo的名字
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name?: string;
    /**
      * repo的完整全名
注意：此字段可能返回 null，表示取不到有效值。
      */
    FullName?: string;
}
/**
 * RollUpdateCloudBaseRunServerVersion请求参数结构体
 */
export interface RollUpdateCloudBaseRunServerVersionRequest {
    /**
      * 环境ID
      */
    EnvId: string;
    /**
      * 要替换的版本名称，可以为latest
      */
    VersionName: string;
    /**
      * 枚举（package/repository/image)
      */
    UploadType?: string;
    /**
      * repository的类型(coding/gitlab/github)
      */
    RepositoryType?: string;
    /**
      * 流量占比
      */
    FlowRatio?: number;
    /**
      * dockerfile地址
      */
    DockerfilePath?: string;
    /**
      * 构建目录
      */
    BuildDir?: string;
    /**
      * Cpu的大小，单位：核
      */
    Cpu?: string;
    /**
      * Mem的大小，单位：G
      */
    Mem?: string;
    /**
      * 最小副本数，最小值：0
      */
    MinNum?: string;
    /**
      * 最大副本数
      */
    MaxNum?: string;
    /**
      * 策略类型
      */
    PolicyType?: string;
    /**
      * 策略阈值
      */
    PolicyThreshold?: string;
    /**
      * 环境变量
      */
    EnvParams?: string;
    /**
      * 容器端口
      */
    ContainerPort?: number;
    /**
      * 服务名称
      */
    ServerName?: string;
    /**
      * repository地址
      */
    Repository?: string;
    /**
      * 分支
      */
    Branch?: string;
    /**
      * 版本备注
      */
    VersionRemark?: string;
    /**
      * 代码包名字
      */
    PackageName?: string;
    /**
      * 代码包版本
      */
    PackageVersion?: string;
    /**
      * Image的详情
      */
    ImageInfo?: CloudBaseRunImageInfo;
    /**
      * Github等拉取代码的详情
      */
    CodeDetail?: CloudBaseCodeRepoDetail;
    /**
      * 是否回放流量
      */
    IsRebuild?: boolean;
    /**
      * 延迟多长时间开始健康检查（单位s）
      */
    InitialDelaySeconds?: number;
    /**
      * cfs挂载信息
      */
    MountVolumeInfo?: Array<CloudBaseRunVolumeMount>;
    /**
      * 是否回滚
      */
    Rollback?: boolean;
    /**
      * 版本历史名
      */
    SnapshotName?: string;
    /**
      * 自定义采集路径
      */
    CustomLogs?: string;
    /**
      * 是否启用统一域名
      */
    EnableUnion?: boolean;
    /**
      * 操作备注
      */
    OperatorRemark?: string;
    /**
      * 服务路径（只会第一次生效）
      */
    ServerPath?: string;
    /**
      * 是否更新Cls
      */
    IsUpdateCls?: boolean;
    /**
      * 自动扩缩容策略组
      */
    PolicyDetail?: Array<HpaPolicy>;
}
