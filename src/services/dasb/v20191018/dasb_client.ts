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
  ResetDeviceAccountPasswordResponse,
  BindDeviceAccountPasswordRequest,
  DeleteAclsRequest,
  DeleteDeviceGroupsResponse,
  DescribeDeviceGroupsResponse,
  DeleteCmdTemplatesResponse,
  DeleteDevicesResponse,
  Department,
  DeviceAccount,
  BindDeviceAccountPasswordResponse,
  ResetDeviceAccountPasswordRequest,
  AddUserGroupMembersRequest,
  DescribeDevicesResponse,
  ResetUserResponse,
  DeleteUserGroupMembersRequest,
  DeleteUserGroupsResponse,
  ModifyDeviceRequest,
  ImportExternalDeviceRequest,
  BindDeviceResourceResponse,
  DeleteUserGroupMembersResponse,
  CmdTemplate,
  CreateUserGroupRequest,
  BindDeviceAccountPrivateKeyResponse,
  CreateDeviceGroupResponse,
  DescribeUserGroupMembersRequest,
  CreateUserResponse,
  DescribeAssetSyncStatusResponse,
  CreateAclRequest,
  DeleteDeviceGroupMembersRequest,
  CreateDeviceGroupRequest,
  CreateAclResponse,
  DescribeAclsResponse,
  CreateCmdTemplateResponse,
  ModifyAclRequest,
  TagFilter,
  DeleteUsersResponse,
  AssetSyncStatus,
  DescribeResourcesResponse,
  DescribeUsersRequest,
  DeployResourceRequest,
  CreateCmdTemplateRequest,
  ResetDeviceAccountPrivateKeyRequest,
  CreateAssetSyncJobResponse,
  BindDeviceAccountPrivateKeyRequest,
  CreateAssetSyncJobRequest,
  Group,
  DescribeAssetSyncStatusRequest,
  ResetDeviceAccountPrivateKeyResponse,
  DeleteUsersRequest,
  DeleteDeviceAccountsRequest,
  DeleteDeviceGroupMembersResponse,
  ModifyDeviceGroupResponse,
  DescribeUserGroupMembersResponse,
  ImportExternalDeviceResponse,
  DeleteUserGroupsRequest,
  User,
  ResetUserRequest,
  Device,
  DescribeDasbImageIdsRequest,
  CreateDeviceAccountResponse,
  ModifyDeviceGroupRequest,
  Filter,
  DescribeUsersResponse,
  DeployResourceResponse,
  CreateUserRequest,
  DescribeUserGroupsResponse,
  ModifyUserResponse,
  DescribeCmdTemplatesResponse,
  CreateDeviceAccountRequest,
  AddDeviceGroupMembersResponse,
  DeleteCmdTemplatesRequest,
  ModifyDeviceResponse,
  AddUserGroupMembersResponse,
  DescribeDeviceAccountsRequest,
  DescribeDasbImageIdsResponse,
  DescribeCmdTemplatesRequest,
  DeleteAclsResponse,
  CreateUserGroupResponse,
  DeleteDevicesRequest,
  DescribeDeviceAccountsResponse,
  DescribeDeviceGroupMembersRequest,
  ModifyAclResponse,
  DescribeResourcesRequest,
  DeleteDeviceGroupsRequest,
  DescribeDeviceGroupMembersResponse,
  Resource,
  BindDeviceResourceRequest,
  Acl,
  DescribeDevicesRequest,
  DescribeDeviceGroupsRequest,
  ExternalDevice,
  DescribeUserGroupsRequest,
  ModifyUserRequest,
  DescribeAclsRequest,
  AddDeviceGroupMembersRequest,
  DeleteDeviceAccountsResponse,
} from "./dasb_models"

/**
 * dasb client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("dasb.tencentcloudapi.com", "2019-10-18", clientConfig)
  }

  /**
   * 修改资产组
   */
  async ModifyDeviceGroup(
    req: ModifyDeviceGroupRequest,
    cb?: (error: string, rep: ModifyDeviceGroupResponse) => void
  ): Promise<ModifyDeviceGroupResponse> {
    return this.request("ModifyDeviceGroup", req, cb)
  }

  /**
   * 查询资产组成员列表
   */
  async DescribeDeviceGroupMembers(
    req: DescribeDeviceGroupMembersRequest,
    cb?: (error: string, rep: DescribeDeviceGroupMembersResponse) => void
  ): Promise<DescribeDeviceGroupMembersResponse> {
    return this.request("DescribeDeviceGroupMembers", req, cb)
  }

  /**
   * 新建资产组
   */
  async CreateDeviceGroup(
    req: CreateDeviceGroupRequest,
    cb?: (error: string, rep: CreateDeviceGroupResponse) => void
  ): Promise<CreateDeviceGroupResponse> {
    return this.request("CreateDeviceGroup", req, cb)
  }

  /**
   * 查询主机账号列表
   */
  async DescribeDeviceAccounts(
    req: DescribeDeviceAccountsRequest,
    cb?: (error: string, rep: DescribeDeviceAccountsResponse) => void
  ): Promise<DescribeDeviceAccountsResponse> {
    return this.request("DescribeDeviceAccounts", req, cb)
  }

  /**
   * 重置用户
   */
  async ResetUser(
    req: ResetUserRequest,
    cb?: (error: string, rep: ResetUserResponse) => void
  ): Promise<ResetUserResponse> {
    return this.request("ResetUser", req, cb)
  }

  /**
   * 删除主机
   */
  async DeleteDevices(
    req: DeleteDevicesRequest,
    cb?: (error: string, rep: DeleteDevicesResponse) => void
  ): Promise<DeleteDevicesResponse> {
    return this.request("DeleteDevices", req, cb)
  }

  /**
   * 添加用户组成员
   */
  async AddUserGroupMembers(
    req: AddUserGroupMembersRequest,
    cb?: (error: string, rep: AddUserGroupMembersResponse) => void
  ): Promise<AddUserGroupMembersResponse> {
    return this.request("AddUserGroupMembers", req, cb)
  }

  /**
   * 查询用户组列表
   */
  async DescribeUserGroups(
    req: DescribeUserGroupsRequest,
    cb?: (error: string, rep: DescribeUserGroupsResponse) => void
  ): Promise<DescribeUserGroupsResponse> {
    return this.request("DescribeUserGroups", req, cb)
  }

  /**
   * 开通服务，初始化资源，只针对新购资源
   */
  async DeployResource(
    req: DeployResourceRequest,
    cb?: (error: string, rep: DeployResourceResponse) => void
  ): Promise<DeployResourceResponse> {
    return this.request("DeployResource", req, cb)
  }

  /**
   * 修改资产信息
   */
  async ModifyDevice(
    req: ModifyDeviceRequest,
    cb?: (error: string, rep: ModifyDeviceResponse) => void
  ): Promise<ModifyDeviceResponse> {
    return this.request("ModifyDevice", req, cb)
  }

  /**
   * 修改资产绑定的堡垒机服务
   */
  async BindDeviceResource(
    req: BindDeviceResourceRequest,
    cb?: (error: string, rep: BindDeviceResourceResponse) => void
  ): Promise<BindDeviceResourceResponse> {
    return this.request("BindDeviceResource", req, cb)
  }

  /**
   * 绑定主机账号密码
   */
  async BindDeviceAccountPassword(
    req: BindDeviceAccountPasswordRequest,
    cb?: (error: string, rep: BindDeviceAccountPasswordResponse) => void
  ): Promise<BindDeviceAccountPasswordResponse> {
    return this.request("BindDeviceAccountPassword", req, cb)
  }

  /**
   * 删除访问权限
   */
  async DeleteAcls(
    req: DeleteAclsRequest,
    cb?: (error: string, rep: DeleteAclsResponse) => void
  ): Promise<DeleteAclsResponse> {
    return this.request("DeleteAcls", req, cb)
  }

  /**
   * 查询用户购买的堡垒机服务信息，包括资源ID、授权点数、VPC、过期时间等。
   */
  async DescribeResources(
    req: DescribeResourcesRequest,
    cb?: (error: string, rep: DescribeResourcesResponse) => void
  ): Promise<DescribeResourcesResponse> {
    return this.request("DescribeResources", req, cb)
  }

  /**
   * 删除用户组成员
   */
  async DeleteUserGroupMembers(
    req: DeleteUserGroupMembersRequest,
    cb?: (error: string, rep: DeleteUserGroupMembersResponse) => void
  ): Promise<DeleteUserGroupMembersResponse> {
    return this.request("DeleteUserGroupMembers", req, cb)
  }

  /**
   * 创建手工资产同步任务
   */
  async CreateAssetSyncJob(
    req: CreateAssetSyncJobRequest,
    cb?: (error: string, rep: CreateAssetSyncJobResponse) => void
  ): Promise<CreateAssetSyncJobResponse> {
    return this.request("CreateAssetSyncJob", req, cb)
  }

  /**
   * 查询访问权限列表
   */
  async DescribeAcls(
    req: DescribeAclsRequest,
    cb?: (error: string, rep: DescribeAclsResponse) => void
  ): Promise<DescribeAclsResponse> {
    return this.request("DescribeAcls", req, cb)
  }

  /**
   * 清除设备账号绑定密码
   */
  async ResetDeviceAccountPassword(
    req: ResetDeviceAccountPasswordRequest,
    cb?: (error: string, rep: ResetDeviceAccountPasswordResponse) => void
  ): Promise<ResetDeviceAccountPasswordResponse> {
    return this.request("ResetDeviceAccountPassword", req, cb)
  }

  /**
   * 删除资产组
   */
  async DeleteDeviceGroups(
    req: DeleteDeviceGroupsRequest,
    cb?: (error: string, rep: DeleteDeviceGroupsResponse) => void
  ): Promise<DeleteDeviceGroupsResponse> {
    return this.request("DeleteDeviceGroups", req, cb)
  }

  /**
   * 修改访问权限
   */
  async ModifyAcl(
    req: ModifyAclRequest,
    cb?: (error: string, rep: ModifyAclResponse) => void
  ): Promise<ModifyAclResponse> {
    return this.request("ModifyAcl", req, cb)
  }

  /**
   * 删除用户
   */
  async DeleteUsers(
    req: DeleteUsersRequest,
    cb?: (error: string, rep: DeleteUsersResponse) => void
  ): Promise<DeleteUsersResponse> {
    return this.request("DeleteUsers", req, cb)
  }

  /**
   * 新建访问权限
   */
  async CreateAcl(
    req: CreateAclRequest,
    cb?: (error: string, rep: CreateAclResponse) => void
  ): Promise<CreateAclResponse> {
    return this.request("CreateAcl", req, cb)
  }

  /**
   * 获取镜像列表
   */
  async DescribeDasbImageIds(
    req?: DescribeDasbImageIdsRequest,
    cb?: (error: string, rep: DescribeDasbImageIdsResponse) => void
  ): Promise<DescribeDasbImageIdsResponse> {
    return this.request("DescribeDasbImageIds", req, cb)
  }

  /**
   * 新建主机账号
   */
  async CreateDeviceAccount(
    req: CreateDeviceAccountRequest,
    cb?: (error: string, rep: CreateDeviceAccountResponse) => void
  ): Promise<CreateDeviceAccountResponse> {
    return this.request("CreateDeviceAccount", req, cb)
  }

  /**
   * 删除资产组成员
   */
  async DeleteDeviceGroupMembers(
    req: DeleteDeviceGroupMembersRequest,
    cb?: (error: string, rep: DeleteDeviceGroupMembersResponse) => void
  ): Promise<DeleteDeviceGroupMembersResponse> {
    return this.request("DeleteDeviceGroupMembers", req, cb)
  }

  /**
   * 删除主机账号
   */
  async DeleteDeviceAccounts(
    req: DeleteDeviceAccountsRequest,
    cb?: (error: string, rep: DeleteDeviceAccountsResponse) => void
  ): Promise<DeleteDeviceAccountsResponse> {
    return this.request("DeleteDeviceAccounts", req, cb)
  }

  /**
   * 删除用户组
   */
  async DeleteUserGroups(
    req: DeleteUserGroupsRequest,
    cb?: (error: string, rep: DeleteUserGroupsResponse) => void
  ): Promise<DeleteUserGroupsResponse> {
    return this.request("DeleteUserGroups", req, cb)
  }

  /**
   * 新建高危命令模板
   */
  async CreateCmdTemplate(
    req: CreateCmdTemplateRequest,
    cb?: (error: string, rep: CreateCmdTemplateResponse) => void
  ): Promise<CreateCmdTemplateResponse> {
    return this.request("CreateCmdTemplate", req, cb)
  }

  /**
   * 修改用户信息
   */
  async ModifyUser(
    req: ModifyUserRequest,
    cb?: (error: string, rep: ModifyUserResponse) => void
  ): Promise<ModifyUserResponse> {
    return this.request("ModifyUser", req, cb)
  }

  /**
   * 查询命令模板列表
   */
  async DescribeCmdTemplates(
    req: DescribeCmdTemplatesRequest,
    cb?: (error: string, rep: DescribeCmdTemplatesResponse) => void
  ): Promise<DescribeCmdTemplatesResponse> {
    return this.request("DescribeCmdTemplates", req, cb)
  }

  /**
   * 删除高危命令模板
   */
  async DeleteCmdTemplates(
    req: DeleteCmdTemplatesRequest,
    cb?: (error: string, rep: DeleteCmdTemplatesResponse) => void
  ): Promise<DeleteCmdTemplatesResponse> {
    return this.request("DeleteCmdTemplates", req, cb)
  }

  /**
   * 查询资产同步状态
   */
  async DescribeAssetSyncStatus(
    req: DescribeAssetSyncStatusRequest,
    cb?: (error: string, rep: DescribeAssetSyncStatusResponse) => void
  ): Promise<DescribeAssetSyncStatusResponse> {
    return this.request("DescribeAssetSyncStatus", req, cb)
  }

  /**
   * 查询资产组列表
   */
  async DescribeDeviceGroups(
    req: DescribeDeviceGroupsRequest,
    cb?: (error: string, rep: DescribeDeviceGroupsResponse) => void
  ): Promise<DescribeDeviceGroupsResponse> {
    return this.request("DescribeDeviceGroups", req, cb)
  }

  /**
   * 查询用户列表
   */
  async DescribeUsers(
    req: DescribeUsersRequest,
    cb?: (error: string, rep: DescribeUsersResponse) => void
  ): Promise<DescribeUsersResponse> {
    return this.request("DescribeUsers", req, cb)
  }

  /**
   * 查询资产列表
   */
  async DescribeDevices(
    req: DescribeDevicesRequest,
    cb?: (error: string, rep: DescribeDevicesResponse) => void
  ): Promise<DescribeDevicesResponse> {
    return this.request("DescribeDevices", req, cb)
  }

  /**
   * 查询用户组成员列表
   */
  async DescribeUserGroupMembers(
    req: DescribeUserGroupMembersRequest,
    cb?: (error: string, rep: DescribeUserGroupMembersResponse) => void
  ): Promise<DescribeUserGroupMembersResponse> {
    return this.request("DescribeUserGroupMembers", req, cb)
  }

  /**
   * 导入外部资产信息
   */
  async ImportExternalDevice(
    req: ImportExternalDeviceRequest,
    cb?: (error: string, rep: ImportExternalDeviceResponse) => void
  ): Promise<ImportExternalDeviceResponse> {
    return this.request("ImportExternalDevice", req, cb)
  }

  /**
   * 添加资产组成员
   */
  async AddDeviceGroupMembers(
    req: AddDeviceGroupMembersRequest,
    cb?: (error: string, rep: AddDeviceGroupMembersResponse) => void
  ): Promise<AddDeviceGroupMembersResponse> {
    return this.request("AddDeviceGroupMembers", req, cb)
  }

  /**
   * 新建用户组
   */
  async CreateUserGroup(
    req: CreateUserGroupRequest,
    cb?: (error: string, rep: CreateUserGroupResponse) => void
  ): Promise<CreateUserGroupResponse> {
    return this.request("CreateUserGroup", req, cb)
  }

  /**
   * 清除设备账号绑定的密钥
   */
  async ResetDeviceAccountPrivateKey(
    req: ResetDeviceAccountPrivateKeyRequest,
    cb?: (error: string, rep: ResetDeviceAccountPrivateKeyResponse) => void
  ): Promise<ResetDeviceAccountPrivateKeyResponse> {
    return this.request("ResetDeviceAccountPrivateKey", req, cb)
  }

  /**
   * 新建用户
   */
  async CreateUser(
    req: CreateUserRequest,
    cb?: (error: string, rep: CreateUserResponse) => void
  ): Promise<CreateUserResponse> {
    return this.request("CreateUser", req, cb)
  }

  /**
   * 绑定主机账号私钥
   */
  async BindDeviceAccountPrivateKey(
    req: BindDeviceAccountPrivateKeyRequest,
    cb?: (error: string, rep: BindDeviceAccountPrivateKeyResponse) => void
  ): Promise<BindDeviceAccountPrivateKeyResponse> {
    return this.request("BindDeviceAccountPrivateKey", req, cb)
  }
}
