"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * dasb client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("dasb.tencentcloudapi.com", "2019-10-18", clientConfig);
    }
    /**
     * 修改资产组
     */
    async ModifyDeviceGroup(req, cb) {
        return this.request("ModifyDeviceGroup", req, cb);
    }
    /**
     * 查询资产组成员列表
     */
    async DescribeDeviceGroupMembers(req, cb) {
        return this.request("DescribeDeviceGroupMembers", req, cb);
    }
    /**
     * 新建资产组
     */
    async CreateDeviceGroup(req, cb) {
        return this.request("CreateDeviceGroup", req, cb);
    }
    /**
     * 查询主机账号列表
     */
    async DescribeDeviceAccounts(req, cb) {
        return this.request("DescribeDeviceAccounts", req, cb);
    }
    /**
     * 重置用户
     */
    async ResetUser(req, cb) {
        return this.request("ResetUser", req, cb);
    }
    /**
     * 删除主机
     */
    async DeleteDevices(req, cb) {
        return this.request("DeleteDevices", req, cb);
    }
    /**
     * 添加用户组成员
     */
    async AddUserGroupMembers(req, cb) {
        return this.request("AddUserGroupMembers", req, cb);
    }
    /**
     * 查询用户组列表
     */
    async DescribeUserGroups(req, cb) {
        return this.request("DescribeUserGroups", req, cb);
    }
    /**
     * 开通服务，初始化资源，只针对新购资源
     */
    async DeployResource(req, cb) {
        return this.request("DeployResource", req, cb);
    }
    /**
     * 修改资产信息
     */
    async ModifyDevice(req, cb) {
        return this.request("ModifyDevice", req, cb);
    }
    /**
     * 修改资产绑定的堡垒机服务
     */
    async BindDeviceResource(req, cb) {
        return this.request("BindDeviceResource", req, cb);
    }
    /**
     * 绑定主机账号密码
     */
    async BindDeviceAccountPassword(req, cb) {
        return this.request("BindDeviceAccountPassword", req, cb);
    }
    /**
     * 删除访问权限
     */
    async DeleteAcls(req, cb) {
        return this.request("DeleteAcls", req, cb);
    }
    /**
     * 查询用户购买的堡垒机服务信息，包括资源ID、授权点数、VPC、过期时间等。
     */
    async DescribeResources(req, cb) {
        return this.request("DescribeResources", req, cb);
    }
    /**
     * 删除用户组成员
     */
    async DeleteUserGroupMembers(req, cb) {
        return this.request("DeleteUserGroupMembers", req, cb);
    }
    /**
     * 创建手工资产同步任务
     */
    async CreateAssetSyncJob(req, cb) {
        return this.request("CreateAssetSyncJob", req, cb);
    }
    /**
     * 查询访问权限列表
     */
    async DescribeAcls(req, cb) {
        return this.request("DescribeAcls", req, cb);
    }
    /**
     * 清除设备账号绑定密码
     */
    async ResetDeviceAccountPassword(req, cb) {
        return this.request("ResetDeviceAccountPassword", req, cb);
    }
    /**
     * 删除资产组
     */
    async DeleteDeviceGroups(req, cb) {
        return this.request("DeleteDeviceGroups", req, cb);
    }
    /**
     * 修改访问权限
     */
    async ModifyAcl(req, cb) {
        return this.request("ModifyAcl", req, cb);
    }
    /**
     * 删除用户
     */
    async DeleteUsers(req, cb) {
        return this.request("DeleteUsers", req, cb);
    }
    /**
     * 新建访问权限
     */
    async CreateAcl(req, cb) {
        return this.request("CreateAcl", req, cb);
    }
    /**
     * 获取镜像列表
     */
    async DescribeDasbImageIds(req, cb) {
        return this.request("DescribeDasbImageIds", req, cb);
    }
    /**
     * 新建主机账号
     */
    async CreateDeviceAccount(req, cb) {
        return this.request("CreateDeviceAccount", req, cb);
    }
    /**
     * 删除资产组成员
     */
    async DeleteDeviceGroupMembers(req, cb) {
        return this.request("DeleteDeviceGroupMembers", req, cb);
    }
    /**
     * 删除主机账号
     */
    async DeleteDeviceAccounts(req, cb) {
        return this.request("DeleteDeviceAccounts", req, cb);
    }
    /**
     * 删除用户组
     */
    async DeleteUserGroups(req, cb) {
        return this.request("DeleteUserGroups", req, cb);
    }
    /**
     * 新建高危命令模板
     */
    async CreateCmdTemplate(req, cb) {
        return this.request("CreateCmdTemplate", req, cb);
    }
    /**
     * 修改用户信息
     */
    async ModifyUser(req, cb) {
        return this.request("ModifyUser", req, cb);
    }
    /**
     * 查询命令模板列表
     */
    async DescribeCmdTemplates(req, cb) {
        return this.request("DescribeCmdTemplates", req, cb);
    }
    /**
     * 删除高危命令模板
     */
    async DeleteCmdTemplates(req, cb) {
        return this.request("DeleteCmdTemplates", req, cb);
    }
    /**
     * 查询资产同步状态
     */
    async DescribeAssetSyncStatus(req, cb) {
        return this.request("DescribeAssetSyncStatus", req, cb);
    }
    /**
     * 查询资产组列表
     */
    async DescribeDeviceGroups(req, cb) {
        return this.request("DescribeDeviceGroups", req, cb);
    }
    /**
     * 查询用户列表
     */
    async DescribeUsers(req, cb) {
        return this.request("DescribeUsers", req, cb);
    }
    /**
     * 查询资产列表
     */
    async DescribeDevices(req, cb) {
        return this.request("DescribeDevices", req, cb);
    }
    /**
     * 查询用户组成员列表
     */
    async DescribeUserGroupMembers(req, cb) {
        return this.request("DescribeUserGroupMembers", req, cb);
    }
    /**
     * 导入外部资产信息
     */
    async ImportExternalDevice(req, cb) {
        return this.request("ImportExternalDevice", req, cb);
    }
    /**
     * 添加资产组成员
     */
    async AddDeviceGroupMembers(req, cb) {
        return this.request("AddDeviceGroupMembers", req, cb);
    }
    /**
     * 新建用户组
     */
    async CreateUserGroup(req, cb) {
        return this.request("CreateUserGroup", req, cb);
    }
    /**
     * 清除设备账号绑定的密钥
     */
    async ResetDeviceAccountPrivateKey(req, cb) {
        return this.request("ResetDeviceAccountPrivateKey", req, cb);
    }
    /**
     * 新建用户
     */
    async CreateUser(req, cb) {
        return this.request("CreateUser", req, cb);
    }
    /**
     * 绑定主机账号私钥
     */
    async BindDeviceAccountPrivateKey(req, cb) {
        return this.request("BindDeviceAccountPrivateKey", req, cb);
    }
}
exports.Client = Client;
