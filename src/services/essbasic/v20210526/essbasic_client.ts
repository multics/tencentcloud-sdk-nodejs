/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  SyncProxyOrganizationResponse,
  ChannelCreateConvertTaskApiResponse,
  ChannelCreateFlowRemindsResponse,
  ChannelDeleteSealPoliciesRequest,
  ChannelBatchCancelFlowsResponse,
  Department,
  ChannelCreateFlowSignReviewRequest,
  AuthFailMessage,
  DescribeFlowDetailInfoRequest,
  ModifyExtendedServiceRequest,
  DescribeResourceUrlsByFlowsRequest,
  RemindFlowRecords,
  ChannelCreateFlowSignUrlResponse,
  CreateSealByImageResponse,
  OperateChannelTemplateResponse,
  FlowFileInfo,
  CreateConsoleLoginUrlResponse,
  SyncProxyOrganizationRequest,
  CreateSealByImageRequest,
  ChannelCreateFlowRemindsRequest,
  ChannelCreateSealPolicyResponse,
  ChannelCancelFlowResponse,
  DownloadFlowInfo,
  FlowApproverUrlInfo,
  ChannelCreateConvertTaskApiRequest,
  ChannelCreateFlowByFilesRequest,
  Agent,
  FlowApproverDetail,
  RelieveInfo,
  ChannelCreateFlowGroupByFilesRequest,
  DescribeFlowDetailInfoResponse,
  ResourceUrlInfo,
  FlowApproverInfo,
  PrepareFlowsResponse,
  TemplateInfo,
  GetDownloadFlowUrlResponse,
  Recipient,
  DescribeTemplatesResponse,
  StaffRole,
  ChannelVerifyPdfRequest,
  CreateChannelFlowEvidenceReportRequest,
  ChannelVerifyPdfResponse,
  CreateConsoleLoginUrlRequest,
  OrganizationInfo,
  PdfVerifyResult,
  ChannelCancelMultiFlowSignQRCodeRequest,
  UploadFilesRequest,
  ChannelDescribeOrganizationSealsRequest,
  DescribeUsageRequest,
  DescribeExtendedServiceAuthInfoRequest,
  FormField,
  FlowInfo,
  UserInfo,
  TaskInfo,
  DescribeUsageResponse,
  Staff,
  ChannelCreateBoundFlowsRequest,
  ChannelDescribeEmployeesRequest,
  AuthorizedUser,
  DescribeResourceUrlsByFlowsResponse,
  SyncProxyOrganizationOperatorsRequest,
  CreateSignUrlsRequest,
  ChannelCreateMultiFlowSignQRCodeRequest,
  SignQrCode,
  ChannelGetTaskResultApiRequest,
  FlowDetailInfo,
  CreateFlowsByTemplatesResponse,
  DescribeChannelFlowEvidenceReportRequest,
  SyncProxyOrganizationOperatorsResponse,
  SignUrlInfo,
  FlowResourceUrlInfo,
  UploadFile,
  ExtentServiceAuthInfo,
  Filter,
  ReleasedApprover,
  CreateSignUrlsResponse,
  UploadFilesResponse,
  ChannelCreateBatchCancelFlowUrlRequest,
  ApproverRestriction,
  PrepareFlowsRequest,
  ChannelCreateFlowByFilesResponse,
  ChannelCreateFlowSignReviewResponse,
  ChannelDescribeOrganizationSealsResponse,
  ChannelCancelMultiFlowSignQRCodeResponse,
  ChannelCreateReleaseFlowRequest,
  ChannelCreateFlowGroupByFilesResponse,
  ChannelCreateMultiFlowSignQRCodeResponse,
  ApproverOption,
  ChannelCreateBoundFlowsResponse,
  ProxyOrganizationOperator,
  ModifyExtendedServiceResponse,
  ChannelGetTaskResultApiResponse,
  ChannelDeleteSealPoliciesResponse,
  Component,
  GetDownloadFlowUrlRequest,
  ChannelBatchCancelFlowsRequest,
  ChannelUpdateSealStatusRequest,
  SignUrl,
  ChannelCancelFlowRequest,
  DescribeTemplatesRequest,
  ChannelCreateSealPolicyRequest,
  OccupiedSeal,
  CreateFlowsByTemplatesRequest,
  UsageDetail,
  ChannelCreateBatchCancelFlowUrlResponse,
  OperateChannelTemplateRequest,
  CreateChannelFlowEvidenceReportResponse,
  SyncFailReason,
  ChannelDescribeEmployeesResponse,
  ChannelCreateReleaseFlowResponse,
  DescribeChannelFlowEvidenceReportResponse,
  ChannelUpdateSealStatusResponse,
  ChannelCreateFlowSignUrlRequest,
  DescribeExtendedServiceAuthInfoResponse,
  CcInfo,
} from "./essbasic_models"

/**
 * essbasic client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("essbasic.tencentcloudapi.com", "2021-05-26", clientConfig)
  }

  /**
   * 删除指定印章下多个授权信息
   */
  async ChannelDeleteSealPolicies(
    req: ChannelDeleteSealPoliciesRequest,
    cb?: (error: string, rep: ChannelDeleteSealPoliciesResponse) => void
  ): Promise<ChannelDeleteSealPoliciesResponse> {
    return this.request("ChannelDeleteSealPolicies", req, cb)
  }

  /**
     * 提交企业签署流程审批结果

在通过接口(CreateFlowsByTemplates 或者ChannelCreateFlowByFiles)创建签署流程时，若指定了参数 NeedSignReview 为true,则可以调用此接口提交企业内部签署审批结果。
若签署流程状态正常，且本企业存在签署方未签署，同一签署流程可以多次提交签署审批结果，签署时的最后一个“审批结果”有效。
     */
  async ChannelCreateFlowSignReview(
    req: ChannelCreateFlowSignReviewRequest,
    cb?: (error: string, rep: ChannelCreateFlowSignReviewResponse) => void
  ): Promise<ChannelCreateFlowSignReviewResponse> {
    return this.request("ChannelCreateFlowSignReview", req, cb)
  }

  /**
     * 此接口（ChannelCreateMultiFlowSignQRCode）用于创建一码多扫签署流程二维码。
适用的模版仅限于B2C（1、无序签署，2、顺序签署时B静默签署，3、顺序签署时B非首位签署）、单C的模版，且模版中发起方没有填写控件。
     */
  async ChannelCreateMultiFlowSignQRCode(
    req: ChannelCreateMultiFlowSignQRCodeRequest,
    cb?: (error: string, rep: ChannelCreateMultiFlowSignQRCodeResponse) => void
  ): Promise<ChannelCreateMultiFlowSignQRCodeResponse> {
    return this.request("ChannelCreateMultiFlowSignQRCode", req, cb)
  }

  /**
   * 接口（ChannelCreateFlowByFiles）用于通过文件创建签署流程。此接口静默签能力不可直接使用，需要运营申请
   */
  async ChannelCreateFlowByFiles(
    req: ChannelCreateFlowByFilesRequest,
    cb?: (error: string, rep: ChannelCreateFlowByFilesResponse) => void
  ): Promise<ChannelCreateFlowByFilesResponse> {
    return this.request("ChannelCreateFlowByFiles", req, cb)
  }

  /**
   * 通过图片为子客企业代创建印章，图片最大5MB
   */
  async CreateSealByImage(
    req: CreateSealByImageRequest,
    cb?: (error: string, rep: CreateSealByImageResponse) => void
  ): Promise<CreateSealByImageResponse> {
    return this.request("CreateSealByImage", req, cb)
  }

  /**
   * 此接口（ChannelCancelMultiFlowSignQRCode）用于取消一码多扫二维码。该接口对传入的二维码ID，若还在有效期内，可以提前失效。
   */
  async ChannelCancelMultiFlowSignQRCode(
    req: ChannelCancelMultiFlowSignQRCodeRequest,
    cb?: (error: string, rep: ChannelCancelMultiFlowSignQRCodeResponse) => void
  ): Promise<ChannelCancelMultiFlowSignQRCodeResponse> {
    return this.request("ChannelCancelMultiFlowSignQRCode", req, cb)
  }

  /**
   * 查询企业扩展服务授权信息，企业经办人需要是企业超管或者法人
   */
  async DescribeExtendedServiceAuthInfo(
    req: DescribeExtendedServiceAuthInfoRequest,
    cb?: (error: string, rep: DescribeExtendedServiceAuthInfoResponse) => void
  ): Promise<DescribeExtendedServiceAuthInfoResponse> {
    return this.request("DescribeExtendedServiceAuthInfo", req, cb)
  }

  /**
   * 修改（操作）企业扩展服务 ，企业经办人需要是企业超管或者法人
   */
  async ModifyExtendedService(
    req: ModifyExtendedServiceRequest,
    cb?: (error: string, rep: ModifyExtendedServiceResponse) => void
  ): Promise<ModifyExtendedServiceResponse> {
    return this.request("ModifyExtendedService", req, cb)
  }

  /**
   * 创建文件转换任务
   */
  async ChannelCreateConvertTaskApi(
    req: ChannelCreateConvertTaskApiRequest,
    cb?: (error: string, rep: ChannelCreateConvertTaskApiResponse) => void
  ): Promise<ChannelCreateConvertTaskApiResponse> {
    return this.request("ChannelCreateConvertTaskApi", req, cb)
  }

  /**
     * 此接口（DescribeUsage）用于获取第三方平台所有合作企业流量消耗情况。
 注: 此接口每日限频2次，若要扩大限制次数,请提前与客服经理或邮件至e-contract@tencent.com进行联系。
     */
  async DescribeUsage(
    req: DescribeUsageRequest,
    cb?: (error: string, rep: DescribeUsageResponse) => void
  ): Promise<DescribeUsageResponse> {
    return this.request("DescribeUsage", req, cb)
  }

  /**
     * 撤销签署流程接口，可以撤回：未全部签署完成；不可以撤回（终态）：已全部签署完成、已拒签、已过期、已撤回。
注意:
能撤回合同的只能是合同的发起人或者发起企业的超管、法人
     */
  async ChannelCancelFlow(
    req: ChannelCancelFlowRequest,
    cb?: (error: string, rep: ChannelCancelFlowResponse) => void
  ): Promise<ChannelCancelFlowResponse> {
    return this.request("ChannelCancelFlow", req, cb)
  }

  /**
   * 将指定印章授权给第三方平台子客企业下的某些员工
   */
  async ChannelCreateSealPolicy(
    req: ChannelCreateSealPolicyRequest,
    cb?: (error: string, rep: ChannelCreateSealPolicyResponse) => void
  ): Promise<ChannelCreateSealPolicyResponse> {
    return this.request("ChannelCreateSealPolicy", req, cb)
  }

  /**
     * 查询子客企业电子印章，需要操作者具有管理印章权限
客户指定需要获取的印章数量和偏移量，数量最多100，超过100按100处理；入参InfoType控制印章是否携带授权人信息，为1则携带，为0则返回的授权人信息为空数组。接口调用成功返回印章的信息列表还有企业印章的总数。
     */
  async ChannelDescribeOrganizationSeals(
    req: ChannelDescribeOrganizationSealsRequest,
    cb?: (error: string, rep: ChannelDescribeOrganizationSealsResponse) => void
  ): Promise<ChannelDescribeOrganizationSealsResponse> {
    return this.request("ChannelDescribeOrganizationSeals", req, cb)
  }

  /**
     * 创建跳转小程序查看或签署的链接。

跳转小程序的几种方式：主要是设置不同的EndPoint
1. 通过链接Url直接跳转到小程序，不需要返回
设置EndPoint为WEIXINAPP，得到链接打开即可。（与短信提醒用户签署形式一样）。
2. 通过链接Url打开H5引导页-->点击跳转到小程序-->签署完退出小程序-->回到H5引导页-->跳转到指定JumpUrl
设置EndPoint为CHANNEL，指定JumpUrl，得到链接打开即可。
3. 客户App直接跳转到小程序-->小程序签署完成-->返回App
跳转到小程序的实现，参考官方文档（分为全屏、半屏两种方式）
全屏方式：
（https://developers.weixin.qq.com/miniprogram/dev/api/navigate/wx.navigateToMiniProgram.html）
半屏方式：
（https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/openEmbeddedMiniProgram.html）
其中小程序的原始Id，请联系<对接技术人员>获取，或者查看小程序信息自助获取。
使用CreateSignUrls，设置EndPoint为APP，得到path。
4. 客户小程序直接跳到电子签小程序-->签署完成退出电子签小程序-->回到客户小程序
实现方式同App跳小程序。
     */
  async CreateSignUrls(
    req: CreateSignUrlsRequest,
    cb?: (error: string, rep: CreateSignUrlsResponse) => void
  ): Promise<CreateSignUrlsResponse> {
    return this.request("CreateSignUrls", req, cb)
  }

  /**
     * 此接口（CreateConsoleLoginUrl）用于创建第三方平台子客企业控制台Web/移动登录链接。登录链接是子客控制台的唯一入口。
若子客企业未激活，会进入企业激活流程，首次参与激活流程的经办人会成为超管。（若企业激活过程中填写信息有误，需要重置激活流程，可以换一个经办人OpenId获取新的链接进入。）
若子客企业已激活，使用了新的经办人OpenId进入，则会进入经办人的实名流程。
若子客企业、经办人均已完成认证，则会直接进入子客Web控制台。
     */
  async CreateConsoleLoginUrl(
    req: CreateConsoleLoginUrlRequest,
    cb?: (error: string, rep: CreateConsoleLoginUrlResponse) => void
  ): Promise<CreateConsoleLoginUrlResponse> {
    return this.request("CreateConsoleLoginUrl", req, cb)
  }

  /**
   * 此接口（ChannelCreateBoundFlows）用于子客领取合同，经办人需要有相应的角色，合同不能重复领取。
   */
  async ChannelCreateBoundFlows(
    req: ChannelCreateBoundFlowsRequest,
    cb?: (error: string, rep: ChannelCreateBoundFlowsResponse) => void
  ): Promise<ChannelCreateBoundFlowsResponse> {
    return this.request("ChannelCreateBoundFlows", req, cb)
  }

  /**
     * 指定需要批量撤销的签署流程Id，获取批量撤销链接 - 不建议使用此接口，可使用ChannelBatchCancelFlows
客户指定需要撤销的签署流程Id，最多100个，超过100不处理；
接口调用成功返回批量撤销合同的链接，通过链接跳转到电子签小程序完成批量撤销;
可以撤回：未全部签署完成；不可以撤回（终态）：已全部签署完成、已拒签、已过期、已撤回。
注意:
能撤回合同的只能是合同的发起人或者发起企业的超管、法人
     */
  async ChannelCreateBatchCancelFlowUrl(
    req: ChannelCreateBatchCancelFlowUrlRequest,
    cb?: (error: string, rep: ChannelCreateBatchCancelFlowUrlResponse) => void
  ): Promise<ChannelCreateBatchCancelFlowUrlResponse> {
    return this.request("ChannelCreateBatchCancelFlowUrl", req, cb)
  }

  /**
   * 查询转换任务状态
   */
  async ChannelGetTaskResultApi(
    req: ChannelGetTaskResultApiRequest,
    cb?: (error: string, rep: ChannelGetTaskResultApiResponse) => void
  ): Promise<ChannelGetTaskResultApiResponse> {
    return this.request("ChannelGetTaskResultApi", req, cb)
  }

  /**
     * 创建出证报告，返回报告 ID。需要配合出证套餐才能调用。
出证需要一定时间，建议调用创建出证24小时之后再通过DescribeChannelFlowEvidenceReport进行查询。
     */
  async CreateChannelFlowEvidenceReport(
    req: CreateChannelFlowEvidenceReportRequest,
    cb?: (error: string, rep: CreateChannelFlowEvidenceReportResponse) => void
  ): Promise<CreateChannelFlowEvidenceReportResponse> {
    return this.request("CreateChannelFlowEvidenceReport", req, cb)
  }

  /**
   * 本接口（ChannelUpdateSealStatus）用于第三方应用平台为子客企业更新印章状态
   */
  async ChannelUpdateSealStatus(
    req: ChannelUpdateSealStatusRequest,
    cb?: (error: string, rep: ChannelUpdateSealStatusResponse) => void
  ): Promise<ChannelUpdateSealStatusResponse> {
    return this.request("ChannelUpdateSealStatus", req, cb)
  }

  /**
   * 合同文件验签
   */
  async ChannelVerifyPdf(
    req: ChannelVerifyPdfRequest,
    cb?: (error: string, rep: ChannelVerifyPdfResponse) => void
  ): Promise<ChannelVerifyPdfResponse> {
    return this.request("ChannelVerifyPdf", req, cb)
  }

  /**
     * 此接口（GetDownloadFlowUrl）用于创建电子签批量下载地址，让合作企业进入控制台直接下载，支持客户合同（流程）按照自定义文件夹形式 分类下载。
当前接口限制最多合同（流程）50个.
     */
  async GetDownloadFlowUrl(
    req: GetDownloadFlowUrlRequest,
    cb?: (error: string, rep: GetDownloadFlowUrlResponse) => void
  ): Promise<GetDownloadFlowUrlResponse> {
    return this.request("GetDownloadFlowUrl", req, cb)
  }

  /**
   * 创建签署链接，需要联系运营人员开白后才可使用
   */
  async ChannelCreateFlowSignUrl(
    req: ChannelCreateFlowSignUrlRequest,
    cb?: (error: string, rep: ChannelCreateFlowSignUrlResponse) => void
  ): Promise<ChannelCreateFlowSignUrlResponse> {
    return this.request("ChannelCreateFlowSignUrl", req, cb)
  }

  /**
     * 发起解除协议，主要应用场景为：基于一份已经签署的合同，进行解除操作。
合同发起人必须在电子签已经进行实名。
     */
  async ChannelCreateReleaseFlow(
    req: ChannelCreateReleaseFlowRequest,
    cb?: (error: string, rep: ChannelCreateReleaseFlowResponse) => void
  ): Promise<ChannelCreateReleaseFlowResponse> {
    return this.request("ChannelCreateReleaseFlow", req, cb)
  }

  /**
   * 查询企业员工列表
   */
  async ChannelDescribeEmployees(
    req: ChannelDescribeEmployeesRequest,
    cb?: (error: string, rep: ChannelDescribeEmployeesResponse) => void
  ): Promise<ChannelDescribeEmployeesResponse> {
    return this.request("ChannelDescribeEmployees", req, cb)
  }

  /**
     * 指定需要批量撤销的签署流程Id，批量撤销合同
客户指定需要撤销的签署流程Id，最多100个，超过100不处理；接口失败后返回错误信息
注意:
能撤回合同的只能是合同的发起人或者发起企业的超管、法人
     */
  async ChannelBatchCancelFlows(
    req: ChannelBatchCancelFlowsRequest,
    cb?: (error: string, rep: ChannelBatchCancelFlowsResponse) => void
  ): Promise<ChannelBatchCancelFlowsResponse> {
    return this.request("ChannelBatchCancelFlows", req, cb)
  }

  /**
     * 该接口 (PrepareFlows) 用于创建待发起文件
用户通过该接口进入签署流程发起的确认页面，进行发起信息二次确认， 如果确认则进行正常发起。
目前该接口只支持B2C，不建议使用，将会废弃。
     */
  async PrepareFlows(
    req: PrepareFlowsRequest,
    cb?: (error: string, rep: PrepareFlowsResponse) => void
  ): Promise<PrepareFlowsResponse> {
    return this.request("PrepareFlows", req, cb)
  }

  /**
     * 接口（CreateFlowsByTemplates）用于使用多个模板批量创建签署流程。当前可批量发起合同（签署流程）数量最大为20个。
如若在模板中配置了动态表格, 上传的附件必须为A4大小
合同发起人必须在电子签已经进行实名。
     */
  async CreateFlowsByTemplates(
    req: CreateFlowsByTemplatesRequest,
    cb?: (error: string, rep: CreateFlowsByTemplatesResponse) => void
  ): Promise<CreateFlowsByTemplatesResponse> {
    return this.request("CreateFlowsByTemplates", req, cb)
  }

  /**
     * 根据签署流程信息批量获取资源下载链接，可以下载签署中、签署完的合同，需合作企业先进行授权。
此接口直接返回下载的资源的url，与接口GetDownloadFlowUrl跳转到控制台的下载方式不同。
     */
  async DescribeResourceUrlsByFlows(
    req: DescribeResourceUrlsByFlowsRequest,
    cb?: (error: string, rep: DescribeResourceUrlsByFlowsResponse) => void
  ): Promise<DescribeResourceUrlsByFlowsResponse> {
    return this.request("DescribeResourceUrlsByFlows", req, cb)
  }

  /**
   * 通过此接口（DescribeTemplates）查询该第三方平台子客企业在电子签拥有的有效模板，不包括第三方平台模板
   */
  async DescribeTemplates(
    req: DescribeTemplatesRequest,
    cb?: (error: string, rep: DescribeTemplatesResponse) => void
  ): Promise<DescribeTemplatesResponse> {
    return this.request("DescribeTemplates", req, cb)
  }

  /**
     * 此接口（UploadFiles）用于文件上传。
调用时需要设置Domain, 正式环境为 file.ess.tencent.cn。
代码示例：
HttpProfile httpProfile = new HttpProfile();
httpProfile.setEndpoint("file.test.ess.tencent.cn");
     */
  async UploadFiles(
    req: UploadFilesRequest,
    cb?: (error: string, rep: UploadFilesResponse) => void
  ): Promise<UploadFilesResponse> {
    return this.request("UploadFiles", req, cb)
  }

  /**
     * 指定需要批量催办的签署流程Id，批量催办合同，最多100个；接口失败后返回错误信息
注意:
该接口不可直接调用，请联系电子签运营开通后方可调用。
     */
  async ChannelCreateFlowReminds(
    req: ChannelCreateFlowRemindsRequest,
    cb?: (error: string, rep: ChannelCreateFlowRemindsResponse) => void
  ): Promise<ChannelCreateFlowRemindsResponse> {
    return this.request("ChannelCreateFlowReminds", req, cb)
  }

  /**
   * 此接口（SyncProxyOrganization）用于同步第三方平台子客企业信息，主要是子客企业的营业执照，便于子客企业开通过程中不用手动上传。若有需要调用此接口，需要在创建控制链接CreateConsoleLoginUrl之后即刻进行调用。
   */
  async SyncProxyOrganization(
    req: SyncProxyOrganizationRequest,
    cb?: (error: string, rep: SyncProxyOrganizationResponse) => void
  ): Promise<SyncProxyOrganizationResponse> {
    return this.request("SyncProxyOrganization", req, cb)
  }

  /**
     * 此接口（SyncProxyOrganizationOperators）用于同步 第三方平台子客企业经办人列表，主要是同步经办人的离职状态。子客Web控制台的组织架构管理，是依赖于第三方应用平台的，无法针对员工做新增/更新/离职等操作。
若经办人信息有误，或者需要修改，也可以先将之前的经办人做离职操作，然后重新使用控制台链接CreateConsoleLoginUrl让经办人重新实名。
     */
  async SyncProxyOrganizationOperators(
    req: SyncProxyOrganizationOperatorsRequest,
    cb?: (error: string, rep: SyncProxyOrganizationOperatorsResponse) => void
  ): Promise<SyncProxyOrganizationOperatorsResponse> {
    return this.request("SyncProxyOrganizationOperators", req, cb)
  }

  /**
   * 查询出证报告，返回报告 URL。
   */
  async DescribeChannelFlowEvidenceReport(
    req: DescribeChannelFlowEvidenceReportRequest,
    cb?: (error: string, rep: DescribeChannelFlowEvidenceReportResponse) => void
  ): Promise<DescribeChannelFlowEvidenceReportResponse> {
    return this.request("DescribeChannelFlowEvidenceReport", req, cb)
  }

  /**
     * 此接口（OperateChannelTemplate）用于针对第三方应用平台模板库中的模板对子客企业可见性的查询和设置，不会直接分配第三方应用平台模板给子客企业。
1、OperateType=select时：
查询第三方应用平台模板库
2、OperateType=update或者delete时：
对子客企业进行模板库中模板可见性的修改、删除操作。
     */
  async OperateChannelTemplate(
    req: OperateChannelTemplateRequest,
    cb?: (error: string, rep: OperateChannelTemplateResponse) => void
  ): Promise<OperateChannelTemplateResponse> {
    return this.request("OperateChannelTemplate", req, cb)
  }

  /**
   * 接口（ChannelCreateFlowGroupByFiles）用于通过多文件创建合同组签署流程。
   */
  async ChannelCreateFlowGroupByFiles(
    req: ChannelCreateFlowGroupByFilesRequest,
    cb?: (error: string, rep: ChannelCreateFlowGroupByFilesResponse) => void
  ): Promise<ChannelCreateFlowGroupByFilesResponse> {
    return this.request("ChannelCreateFlowGroupByFiles", req, cb)
  }

  /**
   * 此接口（DescribeFlowDetailInfo）用于查询合同(签署流程)的详细信息。
   */
  async DescribeFlowDetailInfo(
    req: DescribeFlowDetailInfoRequest,
    cb?: (error: string, rep: DescribeFlowDetailInfoResponse) => void
  ): Promise<DescribeFlowDetailInfoResponse> {
    return this.request("DescribeFlowDetailInfo", req, cb)
  }
}
