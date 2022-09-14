/**
 * 图片段信息
 */
export interface ImageSegments {
    /**
      * 截帧时间。
点播文件：该值为相对于视频偏移时间，单位为秒，例如：0，5，10
直播流：该值为时间戳，例如：1594650717
      */
    OffsetTime: string;
    /**
      * 画面截帧结果详情
      */
    Result: ImageResult;
}
/**
 * 图片输出结果的子结果
 */
export interface ImageResultResult {
    /**
      * 场景
Porn 色情
Sexy 性感
Polity 政治
Illegal 违法
Abuse 谩骂
Terror 暴恐
Ad 广告
注意：此字段可能返回 null，表示取不到有效值。
      */
    Scene: string;
    /**
      * 是否命中
0 未命中
1 命中
注意：此字段可能返回 null，表示取不到有效值。
      */
    HitFlag: number;
    /**
      * 审核建议，可选值：
Pass 通过，
Review 建议人审，
Block 确认违规
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 子标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubLabel: string;
    /**
      * 分数
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 如果命中场景为涉政，则该数据为人物姓名列表，否则null
注意：此字段可能返回 null，表示取不到有效值。
      */
    Names: Array<string>;
    /**
      * 图片OCR文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 其他详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Details: Array<ImageResultsResultDetail>;
}
/**
 *  数据存储信息
 */
export interface StorageInfo {
    /**
      * 类型 可选：
URL 资源链接类型
COS 腾讯云对象存储类型
      */
    Type?: string;
    /**
      * 资源链接
      */
    Url?: string;
    /**
      * 腾讯云存储桶信息
      */
    BucketInfo?: BucketInfo;
}
/**
 * 文件桶信息
参考腾讯云存储相关说明 https://cloud.tencent.com/document/product/436/44352
 */
export interface BucketInfo {
    /**
      * 腾讯云对象存储，存储桶名称
      */
    Bucket: string;
    /**
      * 地域
      */
    Region: string;
    /**
      * 对象Key
      */
    Object: string;
}
/**
 * CreateVideoModerationTask返回参数结构体
 */
export interface CreateVideoModerationTaskResponse {
    /**
      * 任务创建结果
注意：此字段可能返回 null，表示取不到有效值。
      */
    Results: Array<TaskResult>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 创建任务时的返回结果
 */
export interface TaskResult {
    /**
      * 请求时传入的DataId
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataId: string;
    /**
      * TaskId，任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId: string;
    /**
      * 错误码。如果code为OK，则表示创建成功，其他则参考公共错误码
注意：此字段可能返回 null，表示取不到有效值。
      */
    Code: string;
    /**
      * 如果错误，该字段表示错误详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    Message: string;
}
/**
 * CancelTask请求参数结构体
 */
export interface CancelTaskRequest {
    /**
      * 任务ID
      */
    TaskId: string;
}
/**
 * DescribeTaskDetail返回参数结构体
 */
export interface DescribeTaskDetailResponse {
    /**
      * 该字段用于返回创建视频审核任务后返回的任务ID（在Results参数中），用于标识需要查询任务详情的审核任务。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId: string;
    /**
      * 该字段用于返回调用视频审核接口时传入的数据ID参数，方便数据的辨别和管理。
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataId: string;
    /**
      * 该字段用于返回调用视频审核接口时传入的BizType参数，方便数据的辨别和管理。
注意：此字段可能返回 null，表示取不到有效值。
      */
    BizType: string;
    /**
      * 该字段用于返回调用视频审核接口时传入的TaskInput参数中的任务名称，方便任务的识别与管理。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 该字段用于返回所查询内容的任务状态。
<br>取值：**FINISH**（任务已完成）、**PENDING** （任务等待中）、**RUNNING** （任务进行中）、**ERROR** （任务出错）、**CANCELLED** （任务已取消）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 该字段用于返回调用视频审核接口时输入的视频审核类型，取值为：**VIDEO**（点播视频）和**LIVE_VIDEO**（直播视频），默认值为VIDEO。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 该字段用于返回基于恶意标签的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Labels: Array<TaskLabel>;
    /**
      * 该字段用于返回输入媒体文件的详细信息，包括编解码格式、分片时长等信息。详细内容敬请参考MediaInfo数据结构的描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MediaInfo: MediaInfo;
    /**
      * 该字段用于返回审核服务的媒体内容信息，主要包括传入文件类型和访问地址。
注意：此字段可能返回 null，表示取不到有效值。
      */
    InputInfo: InputInfo;
    /**
      * 该字段用于返回被查询任务创建的时间，格式采用 ISO 8601标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedAt: string;
    /**
      * 该字段用于返回被查询任务最后更新时间，格式采用 ISO 8601标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdatedAt: string;
    /**
      * 在秒后重试
注意：此字段可能返回 null，表示取不到有效值。
      */
    TryInSeconds: number;
    /**
      * 该字段用于返回视频中截帧审核的结果，详细返回内容敬请参考ImageSegments数据结构的描述。<br>备注：数据有效期为24小时，如需要延长存储时间，请在已配置的COS储存桶中设置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ImageSegments: Array<ImageSegments>;
    /**
      * 该字段用于返回视频中音频审核的结果，详细返回内容敬请参考AudioSegments数据结构的描述。<br>备注：数据有效期为24小时，如需要延长存储时间，请在已配置的COS储存桶中设置。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AudioSegments: Array<AudioSegments>;
    /**
      * 当任务状态为Error时，返回对应错误的类型，取值：**DECODE_ERROR**: 解码失败。（输入资源中可能包含无法解码的视频）
**URL_ERROR**：下载地址验证失败。
**TIMEOUT_ERROR**：处理超时。任务状态非Error时默认返回为空。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorType: string;
    /**
      * 当任务状态为Error时，该字段用于返回对应错误的详细描述，任务状态非Error时默认返回为空。
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrorDescription: string;
    /**
      * 该字段用于返回检测结果所对应的标签。如果未命中恶意，返回Normal，如果命中恶意，则返回Labels中优先级最高的标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 该字段用于返回音频文件识别出的对应文本内容，最大支持**前1000个字符**。
注意：此字段可能返回 null，表示取不到有效值。
      */
    AudioText: string;
    /**
      * 该字段用于返回音频文件识别出的对应文本内容。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Asrs: Array<RcbAsr>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeTasks请求参数结构体
 */
export interface DescribeTasksRequest {
    /**
      * 该参数表示任务列表每页展示的任务条数，**默认值为10**（每页展示10条任务）。
      */
    Limit?: number;
    /**
      * 该参数表示任务筛选器的输入参数，可根据业务类型、审核文件类型、处理建议及任务状态筛选想要查看的审核任务，具体参数内容请参见TaskFilter数据结构的详细描述。
      */
    Filter?: TaskFilter;
    /**
      * 该参数表示翻页时使用的Token信息，由系统自动生成，并在翻页时向下一个生成的页面传递此参数，以方便快速翻页功能的实现。当到最后一页时，该字段为空。
      */
    PageToken?: string;
    /**
      * 该参数表示任务列表的开始时间，格式为ISO8601标准的时间戳。**默认值为最近3天**，若传入该参数，则在这一时间到EndTime之间的任务将会被筛选出来。<br>备注：该参数与Filter共同起到任务筛选作用，二者作用无先后顺序。
      */
    StartTime?: string;
    /**
      * 该参数表示任务列表的结束时间，格式为ISO8601标准的时间戳。**默认值为空**，若传入该参数，则在这StartTime到这一时间之间的任务将会被筛选出来。<br>备注：该参数与Filter共同起到任务筛选作用，二者作用无先后顺序。
      */
    EndTime?: string;
}
/**
 * 音视频任务结构
 */
export interface TaskInput {
    /**
      * 数据ID
      */
    DataId?: string;
    /**
      * 任务名
      */
    Name?: string;
    /**
      * 任务输入
      */
    Input?: StorageInfo;
}
/**
 * DescribeTaskDetail请求参数结构体
 */
export interface DescribeTaskDetailRequest {
    /**
      * 任务ID，创建任务后返回的TaskId字段
      */
    TaskId: string;
    /**
      * 是否展示所有分片，默认只展示命中规则的分片
      */
    ShowAllSegments?: boolean;
}
/**
 * 任务输出标签
 */
export interface TaskLabel {
    /**
      * 命中的标签
Porn 色情
Sexy 性感
Polity 政治
Illegal 违法
Abuse 谩骂
Terror 暴恐
Ad 广告
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 审核建议，可选值：
Pass 通过，
Review 建议人审，
Block 确认违规
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 得分，分数是 0 ～ 100
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
}
/**
 * 具体场景下的图片识别结果
 */
export interface ImageResultsResultDetail {
    /**
      * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * OCR识别文本
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 位置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    Location: ImageResultsResultDetailLocation;
    /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 库ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibId: string;
    /**
      * 库名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibName: string;
    /**
      * 命中的关键词
注意：此字段可能返回 null，表示取不到有效值。
      */
    Keywords: Array<string>;
    /**
      * 建议
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 得分
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 子标签码
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubLabelCode: string;
}
/**
 * 输入信息详情
 */
export interface InputInfo {
    /**
      * 传入的类型可选：URL，COS
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * Url地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
    /**
      * 桶信息。当输入当时COS时，该字段不为空
注意：此字段可能返回 null，表示取不到有效值。
      */
    BucketInfo: string;
}
/**
 * CreateVideoModerationTask请求参数结构体
 */
export interface CreateVideoModerationTaskRequest {
    /**
      * 业务类型, 定义 模版策略，输出存储配置。如果没有BizType，可以先参考 【创建业务配置】接口进行创建
      */
    BizType: string;
    /**
      * 任务类型：可选VIDEO（点播视频），LIVE_VIDEO（直播视频）
      */
    Type: string;
    /**
      * 输入的任务信息，最多可以同时创建10个任务
      */
    Tasks: Array<TaskInput>;
    /**
      * 回调签名key，具体可以查看签名文档。
      */
    Seed?: string;
    /**
      * 接收审核信息回调地址，如果设置，则审核过程中产生的违规音频片段和画面截帧发送此接口
      */
    CallbackUrl?: string;
    /**
      * 审核排队优先级。当您有多个视频审核任务排队时，可以根据这个参数控制排队优先级。用于处理插队等逻辑。默认该参数为0
      */
    Priority?: number;
}
/**
 * DescribeTasks返回参数结构体
 */
export interface DescribeTasksResponse {
    /**
      * 该字段用于返回当前查询的任务总量，格式为int字符串。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Total: string;
    /**
      * 该字段用于返回当前页的任务详细数据，具体输出内容请参见TaskData数据结构的详细描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Data: Array<TaskData>;
    /**
      * 该字段用于返回翻页时使用的Token信息，由系统自动生成，并在翻页时向下一个生成的页面传递此参数，以方便快速翻页功能的实现。当到最后一页时，该字段为空。
注意：此字段可能返回 null，表示取不到有效值。
      */
    PageToken: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 音频小语种检测结果
 */
export interface AudioResultDetailLanguageResult {
    /**
      * 语种
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 得分
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 开始时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: number;
    /**
      * 结束时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: number;
    /**
      * 子标签码
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubLabelCode: string;
}
/**
 * Cos TaskFilter
 */
export interface TaskFilter {
    /**
      * 任务业务类型
      */
    BizType?: string;
    /**
      * 任务类型，可选：VIDEO，AUDIO， LIVE_VIDEO, LIVE_AUDIO
      */
    Type?: string;
    /**
      * 建议，可选：Pass, Review,Block
      */
    Suggestion?: string;
    /**
      * 状态，可选：PENDING，RUNNING，ERROR，FINISH，CANCELLED
      */
    TaskStatus?: string;
}
/**
 * 识别类标签结果信息
 */
export interface RecognitionResult {
    /**
      * 可能的取值有：Teenager 、Gender
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 识别标签列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    Tags: Array<Tag>;
}
/**
 * CancelTask返回参数结构体
 */
export interface CancelTaskResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 音频ASR文本审核结果
 */
export interface AudioResultDetailTextResult {
    /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 命中的关键词
注意：此字段可能返回 null，表示取不到有效值。
      */
    Keywords: Array<string>;
    /**
      * 命中的LibId
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibId: string;
    /**
      * 命中的LibName
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibName: string;
    /**
      * 得分
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 词库类型 1 黑白库 2 自定义库
注意：此字段可能返回 null，表示取不到有效值。
      */
    LibType: number;
    /**
      * 审核建议
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
}
/**
 * 审核切片asr文本信息
 */
export interface RcbAsr {
    /**
      * 该字段用于返回音频文件识别出的对应文本内容，最大支持**前1000个字符**。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 该字段用于返回被查询任务创建的时间，格式采用 ISO 8601标准。
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedAt: string;
}
/**
 * 音频输出参数
 */
export interface AudioResult {
    /**
      * 该字段用于返回审核内容是否命中审核模型；取值：0（**未命中**）、1（**命中**）。
注意：此字段可能返回 null，表示取不到有效值。
      */
    HitFlag: number;
    /**
      * 该字段用于返回检测结果所对应的恶意标签。<br>返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。<br>
返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 该字段用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 该字段用于返回音频文件经ASR识别后的文本信息。最长可识别**5小时**的音频文件，若超出时长限制，接口将会报错。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Text: string;
    /**
      * 该字段用于返回音频片段存储的链接地址，该地址有效期为1天。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
    /**
      * 该字段用于返回音频文件的时长，单位为毫秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Duration: string;
    /**
      * 该字段用于返回输入参数中的额外附加信息（Extra），如未配置则默认返回值为空。<br>备注：不同客户或Biztype下返回信息不同，如需配置该字段请提交工单咨询或联系售后专员处理。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Extra: string;
    /**
      * 该字段用于返回音频文件经ASR识别后产生的文本的详细审核结果。具体结果内容请参见AudioResultDetailLanguageResult数据结构的细节描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    TextResults: Array<AudioResultDetailTextResult>;
    /**
      * 该字段用于返回音频文件呻吟检测的详细审核结果。具体结果内容请参见AudioResultDetailMoanResult数据结构的细节描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    MoanResults: Array<AudioResultDetailMoanResult>;
    /**
      * 该字段用于返回音频小语种检测的详细审核结果。具体结果内容请参见AudioResultDetailLanguageResult数据结构的细节描述。
注意：此字段可能返回 null，表示取不到有效值。
      */
    LanguageResults: Array<AudioResultDetailLanguageResult>;
    /**
      * 该字段用于返回当前标签（Lable）下的二级标签。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubLabel: string;
    /**
      * 识别类标签结果信息列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecognitionResults: Array<RecognitionResult>;
}
/**
 * 音频呻吟审核结果
 */
export interface AudioResultDetailMoanResult {
    /**
      * 该字段用于返回检测结果需要检测的内容类型，此处固定为**Moan**（呻吟）以调用呻吟检测功能。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 该字段用于返回呻吟检测的置信度，取值范围：0（**置信度最低**）-100（**置信度最高**），越高代表音频越有可能属于呻吟内容。
      */
    Score: number;
    /**
      * 该字段用于返回对应呻吟标签的片段在音频文件内的开始时间，单位为毫秒。
      */
    StartTime: number;
    /**
      * 该字段用于返回对应呻吟标签的片段在音频文件内的结束时间，单位为毫秒。
      */
    EndTime: number;
    /**
      * *内测中，敬请期待*
      */
    SubLabelCode: string;
    /**
      * 该字段用于返回当前标签（Lable）下的二级标签。
      */
    SubLabel: string;
    /**
      * 该字段用于返回基于恶意标签的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。<br>返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过
      */
    Suggestion: string;
}
/**
 * 任务数据
 */
export interface TaskData {
    /**
      * 任务ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    TaskId: string;
    /**
      * 输入的数据ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    DataId: string;
    /**
      * 业务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    BizType: string;
    /**
      * 任务名称
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 状态，可选：PENDING，RUNNING，ERROR，FINISH，CANCELLED
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 任务类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Type: string;
    /**
      * 处理建议
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 标签
注意：此字段可能返回 null，表示取不到有效值。
      */
    Labels: Array<TaskLabel>;
    /**
      * 媒体信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    MediaInfo: MediaInfo;
    /**
      * 输入信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    InputInfo: InputInfo;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedAt: string;
    /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    UpdatedAt: string;
}
/**
 * 媒体类型
 */
export interface MediaInfo {
    /**
      * 编码格式
      */
    Codecs: string;
    /**
      * 流检测时分片时长
注意：此字段可能返回 0，表示取不到有效值。
      */
    Duration: number;
    /**
      * 宽，单位为像素
      */
    Width: number;
    /**
      * 高，单位为像素
      */
    Height: number;
    /**
      * 封面
      */
    Thumbnail: string;
}
/**
 * 音频切片识别标签
 */
export interface Tag {
    /**
      * 根据Label字段确定具体名称：
当Label 为Teenager 时 Name可能取值有：Teenager
当Label 为Gender 时 Name可能取值有：Male 、Female
注意：此字段可能返回 null，表示取不到有效值。
      */
    Name: string;
    /**
      * 置信分：0～100，数值越大表示置信度越高
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 识别开始偏移时间，单位：毫秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    StartTime: number;
    /**
      * 识别结束偏移时间，单位：毫秒
注意：此字段可能返回 null，表示取不到有效值。
      */
    EndTime: number;
}
/**
 * 声音段信息
 */
export interface AudioSegments {
    /**
      * 截帧时间。
点播文件：该值为相对于视频偏移时间，单位为秒，例如：0，5，10
直播流：该值为时间戳，例如：1594650717
注意：此字段可能返回 null，表示取不到有效值。
      */
    OffsetTime: string;
    /**
      * 结果集
注意：此字段可能返回 null，表示取不到有效值。
      */
    Result: AudioResult;
}
/**
 * 图片详情位置信息
 */
export interface ImageResultsResultDetailLocation {
    /**
      * x坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    X: number;
    /**
      * y坐标
注意：此字段可能返回 null，表示取不到有效值。
      */
    Y: number;
    /**
      * 宽度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Width: number;
    /**
      * 高度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Height: number;
    /**
      * 旋转角度
注意：此字段可能返回 null，表示取不到有效值。
      */
    Rotate: number;
}
/**
 * Result结果详情
 */
export interface ImageResult {
    /**
      * 违规标志
0 未命中
1 命中
注意：此字段可能返回 null，表示取不到有效值。
      */
    HitFlag: number;
    /**
      * 命中的标签
Porn 色情
Sexy 性感
Polity 政治
Illegal 违法
Abuse 谩骂
Terror 暴恐
Ad 广告
注意：此字段可能返回 null，表示取不到有效值。
      */
    Label: string;
    /**
      * 审核建议，可选值：
Pass 通过，
Review 建议人审，
Block 确认违规
注意：此字段可能返回 null，表示取不到有效值。
      */
    Suggestion: string;
    /**
      * 得分
注意：此字段可能返回 null，表示取不到有效值。
      */
    Score: number;
    /**
      * 画面截帧图片结果集
注意：此字段可能返回 null，表示取不到有效值。
      */
    Results: Array<ImageResultResult>;
    /**
      * 图片URL地址
注意：此字段可能返回 null，表示取不到有效值。
      */
    Url: string;
    /**
      * 附加字段
注意：此字段可能返回 null，表示取不到有效值。
      */
    Extra: string;
}
