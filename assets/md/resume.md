# 格莱亚sale系统_接口文档


**简介**:格莱亚sale系统_接口文档


**HOST**:http://39.104.58.143:7080


**联系人**:Glaya-Crm


**Version**:版本号:3.8.0


**接口路径**:/v3/api-docs


[TOC]






# 用户信息


## 用户基本信息


**接口地址**:`/sale/api/user/baseInfo/{userId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userId|用户id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 编辑基本信息


**接口地址**:`/sale/api/user/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "defaultImg": "",
  "id": 0,
  "name": "",
  "openId": "",
  "password": "",
  "sex": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|修改用户基本信息（UserBaseInfoParam）|修改用户基本信息|body|true|修改用户基本信息（UserBaseInfoParam）|修改用户基本信息（UserBaseInfoParam）|
|&emsp;&emsp;defaultImg|图像||false|string||
|&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;name|用户姓名||false|string||
|&emsp;&emsp;openId|微信openId||false|string||
|&emsp;&emsp;password|密码||false|string||
|&emsp;&emsp;sex|性别(0=男,1=女,2=未知),可用值:0,1,2||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 根据code获取微信基本信息


**接口地址**:`/sale/api/user/weixinUerInfo/{code}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|code|code|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 忘记密码


**接口地址**:`/sale/api/user/forgetPwd`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "password": "admin123",
  "code": "",
  "uuid": "",
  "account": "18888888888"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|用户登录参数（LoginBody）|用户登录参数（LoginBody）|body|true|用户登录参数（LoginBody）|用户登录参数（LoginBody）|
|&emsp;&emsp;accessToken|一键登录token||false|string||
|&emsp;&emsp;account|用户账号(手机号)||true|string||
|&emsp;&emsp;code|验证码||false|string||
|&emsp;&emsp;openId|微信openID||false|string||
|&emsp;&emsp;password|用户密码||true|string||
|&emsp;&emsp;sign|防盗刷加密标识||false|string||
|&emsp;&emsp;uuid|唯一标识||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 登录模块


## 一键登录


**接口地址**:`/sale/api/oneClickLogin`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "accessToken": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|用户登录参数（LoginBody）|用户登录参数（LoginBody）|body|true|用户登录参数（LoginBody）|用户登录参数（LoginBody）|
|&emsp;&emsp;accessToken|一键登录token||false|string||
|&emsp;&emsp;account|用户账号(手机号)||true|string||
|&emsp;&emsp;code|验证码||false|string||
|&emsp;&emsp;openId|微信openID||false|string||
|&emsp;&emsp;password|用户密码||true|string||
|&emsp;&emsp;sign|防盗刷加密标识||false|string||
|&emsp;&emsp;uuid|唯一标识||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 账号密码登录


**接口地址**:`/sale/api/login`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "password": "admin123",
  "account": "18888888888"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|用户登录参数（LoginBody）|用户登录参数（LoginBody）|body|true|用户登录参数（LoginBody）|用户登录参数（LoginBody）|
|&emsp;&emsp;accessToken|一键登录token||false|string||
|&emsp;&emsp;account|用户账号(手机号)||true|string||
|&emsp;&emsp;code|验证码||false|string||
|&emsp;&emsp;openId|微信openID||false|string||
|&emsp;&emsp;password|用户密码||true|string||
|&emsp;&emsp;sign|防盗刷加密标识||false|string||
|&emsp;&emsp;uuid|唯一标识||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 验证码登录


**接口地址**:`/sale/api/sms/login`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "code": "",
  "uuid": "",
  "account": "18888888888"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|用户登录参数（LoginBody）|用户登录参数（LoginBody）|body|true|用户登录参数（LoginBody）|用户登录参数（LoginBody）|
|&emsp;&emsp;accessToken|一键登录token||false|string||
|&emsp;&emsp;account|用户账号(手机号)||true|string||
|&emsp;&emsp;code|验证码||false|string||
|&emsp;&emsp;openId|微信openID||false|string||
|&emsp;&emsp;password|用户密码||true|string||
|&emsp;&emsp;sign|防盗刷加密标识||false|string||
|&emsp;&emsp;uuid|唯一标识||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 微信openId登录


**接口地址**:`/sale/api/wx/login/{openId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|openId|微信openId|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 微信openId绑定手机号


**接口地址**:`/sale/api/wx/bindPhone`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "code": "",
  "openId": "",
  "uuid": "",
  "account": "18888888888"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|用户登录参数（LoginBody）|用户登录参数（LoginBody）|body|true|用户登录参数（LoginBody）|用户登录参数（LoginBody）|
|&emsp;&emsp;accessToken|一键登录token||false|string||
|&emsp;&emsp;account|用户账号(手机号)||true|string||
|&emsp;&emsp;code|验证码||false|string||
|&emsp;&emsp;openId|微信openID||false|string||
|&emsp;&emsp;password|用户密码||true|string||
|&emsp;&emsp;sign|防盗刷加密标识||false|string||
|&emsp;&emsp;uuid|唯一标识||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 获取腾讯云令牌


**接口地址**:`/sale/api/getUserSig/{userId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userId|用户主键id|query|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 客户模块


## 所有客户列表


**接口地址**:`/sale/api/store/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "city": "",
  "district": "",
  "state": "",
  "nameOrPhone": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|客户查询参数（UserStoreParam）|客户查询参数|body|true|客户查询参数（UserStoreParam）|客户查询参数（UserStoreParam）|
|&emsp;&emsp;city|城市||false|string||
|&emsp;&emsp;customerStatus|分类条件(1:即将退回公海,2:7天未拜访客户,3:未回款客户,4:回款超期客户),可用值:1,2,3,4||false|string||
|&emsp;&emsp;district|区||false|string||
|&emsp;&emsp;endCreateTime|录入结束时间||false|string(date-time)||
|&emsp;&emsp;endReturnHighSeasTime|即将退回公海结束时间（仅私海查询条件）||false|string(date-time)||
|&emsp;&emsp;endReturnedMoneyTime|回款结束时间（仅成交查询条件）||false|string(date-time)||
|&emsp;&emsp;endVisitTime|拜访结束时间||false|string(date-time)||
|&emsp;&emsp;equipmentNo|设备号||false|string||
|&emsp;&emsp;levels|客户分级(0:0-5家小型,1:6-20家中型,2:20家以上),可用值:0,1,2||false|string||
|&emsp;&emsp;nameOrPhone|客户名称或手机||false|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;startCreateTime|录入起始时间||false|string(date-time)||
|&emsp;&emsp;startReturnHighSeasTime|即将退回公海起始时间（仅私海查询条件）||false|string(date-time)||
|&emsp;&emsp;startReturnedMoneyTime|回款起始时间（仅成交查询条件）||false|string(date-time)||
|&emsp;&emsp;startVisitTime|拜访起始时间||false|string(date-time)||
|&emsp;&emsp;state|省||false|string||
|&emsp;&emsp;status|客户状态(0:未合作,1:已领取,2:已合作,3:已终止),可用值:0,1,2,3||false|string||
|&emsp;&emsp;storeId|门店主键id||false|integer(int32)||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeStatus|客户查询筛选状态(0:公海,1:私海,2:已成交,3:私海+已成交),可用值:0,1,2,3||false|string||
|&emsp;&emsp;transferUserId|转交用户id||false|integer(int32)||
|&emsp;&emsp;type|客户性质（1:连锁  2:自营  3:加盟）,可用值:1,2,3||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 公海客户列表


**接口地址**:`/sale/api/store/highSeasList`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "city": "",
  "customerStatus": "",
  "district": "",
  "endCreateTime": "",
  "endReturnHighSeasTime": "",
  "endReturnedMoneyTime": "",
  "endVisitTime": "",
  "equipmentNo": "",
  "levels": "",
  "nameOrPhone": "",
  "pageNo": 0,
  "startCreateTime": "",
  "startReturnHighSeasTime": "",
  "startReturnedMoneyTime": "",
  "startVisitTime": "",
  "state": "",
  "status": "",
  "storeId": 0,
  "storeName": "",
  "storeStatus": "",
  "transferUserId": 0,
  "type": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|客户查询参数（UserStoreParam）|客户查询参数|body|true|客户查询参数（UserStoreParam）|客户查询参数（UserStoreParam）|
|&emsp;&emsp;city|城市||false|string||
|&emsp;&emsp;customerStatus|分类条件(1:即将退回公海,2:7天未拜访客户,3:未回款客户,4:回款超期客户),可用值:1,2,3,4||false|string||
|&emsp;&emsp;district|区||false|string||
|&emsp;&emsp;endCreateTime|录入结束时间||false|string(date-time)||
|&emsp;&emsp;endReturnHighSeasTime|即将退回公海结束时间（仅私海查询条件）||false|string(date-time)||
|&emsp;&emsp;endReturnedMoneyTime|回款结束时间（仅成交查询条件）||false|string(date-time)||
|&emsp;&emsp;endVisitTime|拜访结束时间||false|string(date-time)||
|&emsp;&emsp;equipmentNo|设备号||false|string||
|&emsp;&emsp;levels|客户分级(0:0-5家小型,1:6-20家中型,2:20家以上),可用值:0,1,2||false|string||
|&emsp;&emsp;nameOrPhone|客户名称或手机||false|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;startCreateTime|录入起始时间||false|string(date-time)||
|&emsp;&emsp;startReturnHighSeasTime|即将退回公海起始时间（仅私海查询条件）||false|string(date-time)||
|&emsp;&emsp;startReturnedMoneyTime|回款起始时间（仅成交查询条件）||false|string(date-time)||
|&emsp;&emsp;startVisitTime|拜访起始时间||false|string(date-time)||
|&emsp;&emsp;state|省||false|string||
|&emsp;&emsp;status|客户状态(0:未合作,1:已领取,2:已合作,3:已终止),可用值:0,1,2,3||false|string||
|&emsp;&emsp;storeId|门店主键id||false|integer(int32)||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeStatus|客户查询筛选状态(0:公海,1:私海,2:已成交,3:私海+已成交),可用值:0,1,2,3||false|string||
|&emsp;&emsp;transferUserId|转交用户id||false|integer(int32)||
|&emsp;&emsp;type|客户性质（1:连锁  2:自营  3:加盟）,可用值:1,2,3||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 私海客户列表


**接口地址**:`/sale/api/store/privateSeasList`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "city": "",
  "customerStatus": "",
  "district": "",
  "endCreateTime": "",
  "endReturnHighSeasTime": "",
  "endReturnedMoneyTime": "",
  "endVisitTime": "",
  "equipmentNo": "",
  "levels": "",
  "nameOrPhone": "",
  "pageNo": 0,
  "startCreateTime": "",
  "startReturnHighSeasTime": "",
  "startReturnedMoneyTime": "",
  "startVisitTime": "",
  "state": "",
  "status": "",
  "storeId": 0,
  "storeName": "",
  "storeStatus": "",
  "transferUserId": 0,
  "type": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|客户查询参数（UserStoreParam）|客户查询参数|body|true|客户查询参数（UserStoreParam）|客户查询参数（UserStoreParam）|
|&emsp;&emsp;city|城市||false|string||
|&emsp;&emsp;customerStatus|分类条件(1:即将退回公海,2:7天未拜访客户,3:未回款客户,4:回款超期客户),可用值:1,2,3,4||false|string||
|&emsp;&emsp;district|区||false|string||
|&emsp;&emsp;endCreateTime|录入结束时间||false|string(date-time)||
|&emsp;&emsp;endReturnHighSeasTime|即将退回公海结束时间（仅私海查询条件）||false|string(date-time)||
|&emsp;&emsp;endReturnedMoneyTime|回款结束时间（仅成交查询条件）||false|string(date-time)||
|&emsp;&emsp;endVisitTime|拜访结束时间||false|string(date-time)||
|&emsp;&emsp;equipmentNo|设备号||false|string||
|&emsp;&emsp;levels|客户分级(0:0-5家小型,1:6-20家中型,2:20家以上),可用值:0,1,2||false|string||
|&emsp;&emsp;nameOrPhone|客户名称或手机||false|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;startCreateTime|录入起始时间||false|string(date-time)||
|&emsp;&emsp;startReturnHighSeasTime|即将退回公海起始时间（仅私海查询条件）||false|string(date-time)||
|&emsp;&emsp;startReturnedMoneyTime|回款起始时间（仅成交查询条件）||false|string(date-time)||
|&emsp;&emsp;startVisitTime|拜访起始时间||false|string(date-time)||
|&emsp;&emsp;state|省||false|string||
|&emsp;&emsp;status|客户状态(0:未合作,1:已领取,2:已合作,3:已终止),可用值:0,1,2,3||false|string||
|&emsp;&emsp;storeId|门店主键id||false|integer(int32)||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeStatus|客户查询筛选状态(0:公海,1:私海,2:已成交,3:私海+已成交),可用值:0,1,2,3||false|string||
|&emsp;&emsp;transferUserId|转交用户id||false|integer(int32)||
|&emsp;&emsp;type|客户性质（1:连锁  2:自营  3:加盟）,可用值:1,2,3||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 成交客户列表


**接口地址**:`/sale/api/store/dealList`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "city": "",
  "customerStatus": "",
  "district": "",
  "endCreateTime": "",
  "endReturnHighSeasTime": "",
  "endReturnedMoneyTime": "",
  "endVisitTime": "",
  "equipmentNo": "",
  "levels": "",
  "nameOrPhone": "",
  "pageNo": 0,
  "startCreateTime": "",
  "startReturnHighSeasTime": "",
  "startReturnedMoneyTime": "",
  "startVisitTime": "",
  "state": "",
  "status": "",
  "storeId": 0,
  "storeName": "",
  "storeStatus": "",
  "transferUserId": 0,
  "type": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|客户查询参数（UserStoreParam）|客户查询参数|body|true|客户查询参数（UserStoreParam）|客户查询参数（UserStoreParam）|
|&emsp;&emsp;city|城市||false|string||
|&emsp;&emsp;customerStatus|分类条件(1:即将退回公海,2:7天未拜访客户,3:未回款客户,4:回款超期客户),可用值:1,2,3,4||false|string||
|&emsp;&emsp;district|区||false|string||
|&emsp;&emsp;endCreateTime|录入结束时间||false|string(date-time)||
|&emsp;&emsp;endReturnHighSeasTime|即将退回公海结束时间（仅私海查询条件）||false|string(date-time)||
|&emsp;&emsp;endReturnedMoneyTime|回款结束时间（仅成交查询条件）||false|string(date-time)||
|&emsp;&emsp;endVisitTime|拜访结束时间||false|string(date-time)||
|&emsp;&emsp;equipmentNo|设备号||false|string||
|&emsp;&emsp;levels|客户分级(0:0-5家小型,1:6-20家中型,2:20家以上),可用值:0,1,2||false|string||
|&emsp;&emsp;nameOrPhone|客户名称或手机||false|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;startCreateTime|录入起始时间||false|string(date-time)||
|&emsp;&emsp;startReturnHighSeasTime|即将退回公海起始时间（仅私海查询条件）||false|string(date-time)||
|&emsp;&emsp;startReturnedMoneyTime|回款起始时间（仅成交查询条件）||false|string(date-time)||
|&emsp;&emsp;startVisitTime|拜访起始时间||false|string(date-time)||
|&emsp;&emsp;state|省||false|string||
|&emsp;&emsp;status|客户状态(0:未合作,1:已领取,2:已合作,3:已终止),可用值:0,1,2,3||false|string||
|&emsp;&emsp;storeId|门店主键id||false|integer(int32)||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeStatus|客户查询筛选状态(0:公海,1:私海,2:已成交,3:私海+已成交),可用值:0,1,2,3||false|string||
|&emsp;&emsp;transferUserId|转交用户id||false|integer(int32)||
|&emsp;&emsp;type|客户性质（1:连锁  2:自营  3:加盟）,可用值:1,2,3||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 未绑定的成交客户


**接口地址**:`/sale/api/store/unbindCooperatedList`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "city": "",
  "customerStatus": "",
  "district": "",
  "endCreateTime": "",
  "endReturnHighSeasTime": "",
  "endReturnedMoneyTime": "",
  "endVisitTime": "",
  "equipmentNo": "",
  "levels": "",
  "nameOrPhone": "",
  "pageNo": 0,
  "startCreateTime": "",
  "startReturnHighSeasTime": "",
  "startReturnedMoneyTime": "",
  "startVisitTime": "",
  "state": "",
  "status": "",
  "storeId": 0,
  "storeName": "",
  "storeStatus": "",
  "transferUserId": 0,
  "type": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|客户查询参数（UserStoreParam）|客户查询参数|body|true|客户查询参数（UserStoreParam）|客户查询参数（UserStoreParam）|
|&emsp;&emsp;city|城市||false|string||
|&emsp;&emsp;customerStatus|分类条件(1:即将退回公海,2:7天未拜访客户,3:未回款客户,4:回款超期客户),可用值:1,2,3,4||false|string||
|&emsp;&emsp;district|区||false|string||
|&emsp;&emsp;endCreateTime|录入结束时间||false|string(date-time)||
|&emsp;&emsp;endReturnHighSeasTime|即将退回公海结束时间（仅私海查询条件）||false|string(date-time)||
|&emsp;&emsp;endReturnedMoneyTime|回款结束时间（仅成交查询条件）||false|string(date-time)||
|&emsp;&emsp;endVisitTime|拜访结束时间||false|string(date-time)||
|&emsp;&emsp;equipmentNo|设备号||false|string||
|&emsp;&emsp;levels|客户分级(0:0-5家小型,1:6-20家中型,2:20家以上),可用值:0,1,2||false|string||
|&emsp;&emsp;nameOrPhone|客户名称或手机||false|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;startCreateTime|录入起始时间||false|string(date-time)||
|&emsp;&emsp;startReturnHighSeasTime|即将退回公海起始时间（仅私海查询条件）||false|string(date-time)||
|&emsp;&emsp;startReturnedMoneyTime|回款起始时间（仅成交查询条件）||false|string(date-time)||
|&emsp;&emsp;startVisitTime|拜访起始时间||false|string(date-time)||
|&emsp;&emsp;state|省||false|string||
|&emsp;&emsp;status|客户状态(0:未合作,1:已领取,2:已合作,3:已终止),可用值:0,1,2,3||false|string||
|&emsp;&emsp;storeId|门店主键id||false|integer(int32)||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeStatus|客户查询筛选状态(0:公海,1:私海,2:已成交,3:私海+已成交),可用值:0,1,2,3||false|string||
|&emsp;&emsp;transferUserId|转交用户id||false|integer(int32)||
|&emsp;&emsp;type|客户性质（1:连锁  2:自营  3:加盟）,可用值:1,2,3||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 查询客户详情


**接口地址**:`/sale/api/store/{storeId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeId|客户id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 个人客户列表


**接口地址**:`/sale/api/store/personalList`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "storeStatus": "",
  "nameOrPhone": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|客户查询参数（UserStoreParam）|客户查询参数|body|true|客户查询参数（UserStoreParam）|客户查询参数（UserStoreParam）|
|&emsp;&emsp;city|城市||false|string||
|&emsp;&emsp;customerStatus|分类条件(1:即将退回公海,2:7天未拜访客户,3:未回款客户,4:回款超期客户),可用值:1,2,3,4||false|string||
|&emsp;&emsp;district|区||false|string||
|&emsp;&emsp;endCreateTime|录入结束时间||false|string(date-time)||
|&emsp;&emsp;endReturnHighSeasTime|即将退回公海结束时间（仅私海查询条件）||false|string(date-time)||
|&emsp;&emsp;endReturnedMoneyTime|回款结束时间（仅成交查询条件）||false|string(date-time)||
|&emsp;&emsp;endVisitTime|拜访结束时间||false|string(date-time)||
|&emsp;&emsp;equipmentNo|设备号||false|string||
|&emsp;&emsp;levels|客户分级(0:0-5家小型,1:6-20家中型,2:20家以上),可用值:0,1,2||false|string||
|&emsp;&emsp;nameOrPhone|客户名称或手机||false|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;startCreateTime|录入起始时间||false|string(date-time)||
|&emsp;&emsp;startReturnHighSeasTime|即将退回公海起始时间（仅私海查询条件）||false|string(date-time)||
|&emsp;&emsp;startReturnedMoneyTime|回款起始时间（仅成交查询条件）||false|string(date-time)||
|&emsp;&emsp;startVisitTime|拜访起始时间||false|string(date-time)||
|&emsp;&emsp;state|省||false|string||
|&emsp;&emsp;status|客户状态(0:未合作,1:已领取,2:已合作,3:已终止),可用值:0,1,2,3||false|string||
|&emsp;&emsp;storeId|门店主键id||false|integer(int32)||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeStatus|客户查询筛选状态(0:公海,1:私海,2:已成交,3:私海+已成交),可用值:0,1,2,3||false|string||
|&emsp;&emsp;transferUserId|转交用户id||false|integer(int32)||
|&emsp;&emsp;type|客户性质（1:连锁  2:自营  3:加盟）,可用值:1,2,3||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 添加客户


**接口地址**:`/sale/api/store/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "image": "http://www.***.jpg",
  "isLock": false,
  "kps": "[]",
  "latitude": "118.18658",
  "levels": "0",
  "longitude": "35.128",
  "name": "小菜园",
  "pageNo": 0,
  "personChange": "张三",
  "personPhone": "15851817747",
  "state": "江苏省",
  "status": "",
  "type": "1"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|客户实体类（UserStore）|客户的基本模型|body|true|客户实体类（UserStore）|客户实体类（UserStore）|
|&emsp;&emsp;address|详细地址||true|string||
|&emsp;&emsp;city|市||true|string||
|&emsp;&emsp;district|区||true|string||
|&emsp;&emsp;id|客户门店主键id||false|integer(int32)||
|&emsp;&emsp;image|客户图片||true|string||
|&emsp;&emsp;isLock|是否锁机||false|boolean||
|&emsp;&emsp;kps|kp电话列表||true|array|KP实体类|
|&emsp;&emsp;&emsp;&emsp;id|KP主键id||false|integer||
|&emsp;&emsp;&emsp;&emsp;name|KP名字||true|string||
|&emsp;&emsp;&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer||
|&emsp;&emsp;&emsp;&emsp;phone|KP联系方式||false|string||
|&emsp;&emsp;&emsp;&emsp;storeId|客户的ID||false|integer||
|&emsp;&emsp;&emsp;&emsp;title|KP职位||true|string||
|&emsp;&emsp;&emsp;&emsp;wechat|KP联系方式||false|string||
|&emsp;&emsp;latitude|纬度||true|string||
|&emsp;&emsp;levels|客户分级(0:0-5家小型,1:6-20家中型,2:20家以上),可用值:0,1,2||true|string||
|&emsp;&emsp;longitude|经度||true|string||
|&emsp;&emsp;name|客户名称||true|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;personChange|联系人||false|string||
|&emsp;&emsp;personPhone|联系人电话||false|string||
|&emsp;&emsp;state|省||true|string||
|&emsp;&emsp;status|状态(0:未合作,1:已领取,2:已合作,3:已到期),可用值:0,1,2,3||false|string||
|&emsp;&emsp;type|客户类型（1:连锁 2:自营 3:加盟）,可用值:1,2,3||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 修改客户


**接口地址**:`/sale/api/store/edit`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "address": "管家桥65号2080室",
  "city": "南京市",
  "district": "鼓楼区",
  "id": 0,
  "image": "http://www.***.jpg",
  "isLock": false,
  "kps": "[]",
  "latitude": "118.18658",
  "levels": "0",
  "longitude": "35.128",
  "name": "小菜园",
  "pageNo": 0,
  "personChange": "张三",
  "personPhone": "15851817747",
  "state": "江苏省",
  "status": "",
  "type": "1"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|客户实体类（UserStore）|客户的基本模型|body|true|客户实体类（UserStore）|客户实体类（UserStore）|
|&emsp;&emsp;address|详细地址||true|string||
|&emsp;&emsp;city|市||true|string||
|&emsp;&emsp;district|区||true|string||
|&emsp;&emsp;id|客户门店主键id||false|integer(int32)||
|&emsp;&emsp;image|客户图片||true|string||
|&emsp;&emsp;isLock|是否锁机||false|boolean||
|&emsp;&emsp;kps|kp电话列表||true|array|KP实体类|
|&emsp;&emsp;&emsp;&emsp;id|KP主键id||false|integer||
|&emsp;&emsp;&emsp;&emsp;name|KP名字||true|string||
|&emsp;&emsp;&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer||
|&emsp;&emsp;&emsp;&emsp;phone|KP联系方式||false|string||
|&emsp;&emsp;&emsp;&emsp;storeId|客户的ID||false|integer||
|&emsp;&emsp;&emsp;&emsp;title|KP职位||true|string||
|&emsp;&emsp;&emsp;&emsp;wechat|KP联系方式||false|string||
|&emsp;&emsp;latitude|纬度||true|string||
|&emsp;&emsp;levels|客户分级(0:0-5家小型,1:6-20家中型,2:20家以上),可用值:0,1,2||true|string||
|&emsp;&emsp;longitude|经度||true|string||
|&emsp;&emsp;name|客户名称||true|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;personChange|联系人||false|string||
|&emsp;&emsp;personPhone|联系人电话||false|string||
|&emsp;&emsp;state|省||true|string||
|&emsp;&emsp;status|状态(0:未合作,1:已领取,2:已合作,3:已到期),可用值:0,1,2,3||false|string||
|&emsp;&emsp;type|客户类型（1:连锁 2:自营 3:加盟）,可用值:1,2,3||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 删除客户


**接口地址**:`/sale/api/store/{storeId}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeId|客户id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|204|No Content||
|401|Unauthorized||
|403|Forbidden||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 客户门店名称查重


**接口地址**:`/sale/api/store/checkDuplicate`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "city": "南京市",
  "district": "鼓楼区",
  "name": "小菜园",
  "state": "江苏省"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|客户实体类（UserStore）|客户的基本模型|body|true|客户实体类（UserStore）|客户实体类（UserStore）|
|&emsp;&emsp;address|详细地址||true|string||
|&emsp;&emsp;city|市||true|string||
|&emsp;&emsp;district|区||true|string||
|&emsp;&emsp;id|客户门店主键id||false|integer(int32)||
|&emsp;&emsp;image|客户图片||true|string||
|&emsp;&emsp;isLock|是否锁机||false|boolean||
|&emsp;&emsp;kps|kp电话列表||true|array|KP实体类|
|&emsp;&emsp;&emsp;&emsp;id|KP主键id||false|integer||
|&emsp;&emsp;&emsp;&emsp;name|KP名字||true|string||
|&emsp;&emsp;&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer||
|&emsp;&emsp;&emsp;&emsp;phone|KP联系方式||false|string||
|&emsp;&emsp;&emsp;&emsp;storeId|客户的ID||false|integer||
|&emsp;&emsp;&emsp;&emsp;title|KP职位||true|string||
|&emsp;&emsp;&emsp;&emsp;wechat|KP联系方式||false|string||
|&emsp;&emsp;latitude|纬度||true|string||
|&emsp;&emsp;levels|客户分级(0:0-5家小型,1:6-20家中型,2:20家以上),可用值:0,1,2||true|string||
|&emsp;&emsp;longitude|经度||true|string||
|&emsp;&emsp;name|客户名称||true|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;personChange|联系人||false|string||
|&emsp;&emsp;personPhone|联系人电话||false|string||
|&emsp;&emsp;state|省||true|string||
|&emsp;&emsp;status|状态(0:未合作,1:已领取,2:已合作,3:已到期),可用值:0,1,2,3||false|string||
|&emsp;&emsp;type|客户类型（1:连锁 2:自营 3:加盟）,可用值:1,2,3||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 检测新增客户是否已达私海上限数量(true:未达上限;false:已达上限)


**接口地址**:`/sale/api/store/privateSeasUpperLimit`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 查询门店设备号


**接口地址**:`/sale/api/store/equipmentNoList/{storeId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeId|客户id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 查询门店服务报告报表


**接口地址**:`/sale/api/store/reportForm`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "equipmentNo": "",
  "reportDate": "",
  "type": "",
  "userStoreId": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|客户报表查询参数类（ReportParam）|客户报表查询参数类|body|true|客户报表查询参数类（ReportParam）|客户报表查询参数类（ReportParam）|
|&emsp;&emsp;equipmentNo|设备号||false|string||
|&emsp;&emsp;reportDate|报告查询年月||false|string(date-time)||
|&emsp;&emsp;type|快捷时间类型(3 本月 5 本年),可用值:3,5||false|string||
|&emsp;&emsp;userStoreId|客户门店主键id||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 门店设备列表


**接口地址**:`/sale/api/store/equipments`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "storeName": "",
  "storeId": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|客户查询参数（UserStoreParam）|客户查询参数|body|true|客户查询参数（UserStoreParam）|客户查询参数（UserStoreParam）|
|&emsp;&emsp;city|城市||false|string||
|&emsp;&emsp;customerStatus|分类条件(1:即将退回公海,2:7天未拜访客户,3:未回款客户,4:回款超期客户),可用值:1,2,3,4||false|string||
|&emsp;&emsp;district|区||false|string||
|&emsp;&emsp;endCreateTime|录入结束时间||false|string(date-time)||
|&emsp;&emsp;endReturnHighSeasTime|即将退回公海结束时间（仅私海查询条件）||false|string(date-time)||
|&emsp;&emsp;endReturnedMoneyTime|回款结束时间（仅成交查询条件）||false|string(date-time)||
|&emsp;&emsp;endVisitTime|拜访结束时间||false|string(date-time)||
|&emsp;&emsp;equipmentNo|设备号||false|string||
|&emsp;&emsp;levels|客户分级(0:0-5家小型,1:6-20家中型,2:20家以上),可用值:0,1,2||false|string||
|&emsp;&emsp;nameOrPhone|客户名称或手机||false|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;startCreateTime|录入起始时间||false|string(date-time)||
|&emsp;&emsp;startReturnHighSeasTime|即将退回公海起始时间（仅私海查询条件）||false|string(date-time)||
|&emsp;&emsp;startReturnedMoneyTime|回款起始时间（仅成交查询条件）||false|string(date-time)||
|&emsp;&emsp;startVisitTime|拜访起始时间||false|string(date-time)||
|&emsp;&emsp;state|省||false|string||
|&emsp;&emsp;status|客户状态(0:未合作,1:已领取,2:已合作,3:已终止),可用值:0,1,2,3||false|string||
|&emsp;&emsp;storeId|门店主键id||false|integer(int32)||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeStatus|客户查询筛选状态(0:公海,1:私海,2:已成交,3:私海+已成交),可用值:0,1,2,3||false|string||
|&emsp;&emsp;transferUserId|转交用户id||false|integer(int32)||
|&emsp;&emsp;type|客户性质（1:连锁  2:自营  3:加盟）,可用值:1,2,3||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 销售-客户(关系)


## 领取客户


**接口地址**:`/sale/api/saleStore/bindSeller/{storeId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeId|客户id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 领取历史成交客户


**接口地址**:`/sale/api/saleStore/bindCooperatedSeller/{storeId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeId|客户id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 释放客户


**接口地址**:`/sale/api/saleStore/unBindSeller/{storeId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeId|客户id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# KP模块


## KP列表


**接口地址**:`/sale/api/kp/list/{storeId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|storeId|客户门店id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 添加KP


**接口地址**:`/sale/api/kp/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "name": "张师傅",
  "pageNo": 0,
  "phone": "15851817747",
  "storeId": 6,
  "title": "厨师长",
  "wechat": "davydtz"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|kP实体类|KP对象信息|body|true|KP实体类|KP实体类|
|&emsp;&emsp;id|KP主键id||false|integer(int32)||
|&emsp;&emsp;name|KP名字||true|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;phone|KP联系方式||false|string||
|&emsp;&emsp;storeId|客户的ID||false|integer(int32)||
|&emsp;&emsp;title|KP职位||true|string||
|&emsp;&emsp;wechat|KP联系方式||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 修改KP


**接口地址**:`/sale/api/kp/edit`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "id": 1,
  "name": "张师傅",
  "pageNo": 0,
  "phone": "15851817747",
  "storeId": 6,
  "title": "厨师长",
  "wechat": "davydtz"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|kP实体类|KP对象信息|body|true|KP实体类|KP实体类|
|&emsp;&emsp;id|KP主键id||false|integer(int32)||
|&emsp;&emsp;name|KP名字||true|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;phone|KP联系方式||false|string||
|&emsp;&emsp;storeId|客户的ID||false|integer(int32)||
|&emsp;&emsp;title|KP职位||true|string||
|&emsp;&emsp;wechat|KP联系方式||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 删除KP(批量)


**接口地址**:`/sale/api/kp/deleteByIds`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|ids|KP的ID数组|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 删除KP(单个)


**接口地址**:`/sale/api/kp/deleteById/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|kpId|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 拜访模块


## 查询拜访列表


**接口地址**:`/sale/api/visit/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "createUserId": 1,
  "createUserIdArr": "1",
  "date": "2021-12-12",
  "endDate": "2021-12-12",
  "stage": "1",
  "startDate": "2021-12-12",
  "storeId": 1,
  "storeName": "小菜园"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|拜访记录查询参数（VisitParam）|拜访记录的请求参数|body|true|拜访记录查询参数（VisitParam）|拜访记录查询参数（VisitParam）|
|&emsp;&emsp;createUserId|创建者ID||false|integer(int32)||
|&emsp;&emsp;createUserIdArr|创建者ID数组（批量查询）||false|array|integer|
|&emsp;&emsp;date|时间||false|string||
|&emsp;&emsp;endDate|结束时间||false|string||
|&emsp;&emsp;stage|跟进阶段||false|string||
|&emsp;&emsp;startDate|开始时间||false|string||
|&emsp;&emsp;storeId|客户ID||true|integer(int32)||
|&emsp;&emsp;storeName|客户门店关键字||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 查询拜访详细信息


**接口地址**:`/sale/api/visit/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|拜访记录id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 新增拜访


**接口地址**:`/sale/api/visit/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "content": "这里是拜访内容，拜访心得",
  "date": "2020-12-12",
  "id": 0,
  "imageArr": [],
  "kpArr": [],
  "pageNo": 0,
  "stage": 1,
  "storeId": 1
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|拜访记录实体类（visit）|拜访记录信息|body|true|拜访记录实体类（visit）|拜访记录实体类（visit）|
|&emsp;&emsp;content|拜访内容||true|string||
|&emsp;&emsp;date|拜访时间||true|string||
|&emsp;&emsp;id|拜访主键id||false|integer(int32)||
|&emsp;&emsp;imageArr|图片地址数组||true|array|string|
|&emsp;&emsp;kpArr|KP数组||true|array|object|
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;stage|客户的意向||true|integer(int32)||
|&emsp;&emsp;storeId|客户的ID||true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 门店收藏夹模块


## 我收藏的客户列表


**接口地址**:`/sale/api/collectionStore/collections`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "nameOrPhone": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|客户查询参数（UserStoreParam）|客户查询参数|body|true|客户查询参数（UserStoreParam）|客户查询参数（UserStoreParam）|
|&emsp;&emsp;city|城市||false|string||
|&emsp;&emsp;customerStatus|分类条件(1:即将退回公海,2:7天未拜访客户,3:未回款客户,4:回款超期客户),可用值:1,2,3,4||false|string||
|&emsp;&emsp;district|区||false|string||
|&emsp;&emsp;endCreateTime|录入结束时间||false|string(date-time)||
|&emsp;&emsp;endReturnHighSeasTime|即将退回公海结束时间（仅私海查询条件）||false|string(date-time)||
|&emsp;&emsp;endReturnedMoneyTime|回款结束时间（仅成交查询条件）||false|string(date-time)||
|&emsp;&emsp;endVisitTime|拜访结束时间||false|string(date-time)||
|&emsp;&emsp;equipmentNo|设备号||false|string||
|&emsp;&emsp;levels|客户分级(0:0-5家小型,1:6-20家中型,2:20家以上),可用值:0,1,2||false|string||
|&emsp;&emsp;nameOrPhone|客户名称或手机||false|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;startCreateTime|录入起始时间||false|string(date-time)||
|&emsp;&emsp;startReturnHighSeasTime|即将退回公海起始时间（仅私海查询条件）||false|string(date-time)||
|&emsp;&emsp;startReturnedMoneyTime|回款起始时间（仅成交查询条件）||false|string(date-time)||
|&emsp;&emsp;startVisitTime|拜访起始时间||false|string(date-time)||
|&emsp;&emsp;state|省||false|string||
|&emsp;&emsp;status|客户状态(0:未合作,1:已领取,2:已合作,3:已终止),可用值:0,1,2,3||false|string||
|&emsp;&emsp;storeId|门店主键id||false|integer(int32)||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;storeStatus|客户查询筛选状态(0:公海,1:私海,2:已成交,3:私海+已成交),可用值:0,1,2,3||false|string||
|&emsp;&emsp;transferUserId|转交用户id||false|integer(int32)||
|&emsp;&emsp;type|客户性质（1:连锁  2:自营  3:加盟）,可用值:1,2,3||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 收藏客户


**接口地址**:`/sale/api/collectionStore/collection/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|客户id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 取消收藏客户


**接口地址**:`/sale/api/collectionStore/cancelCollection/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|客户id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# Banner模块


## banner列表


**接口地址**:`/sale/api/banner/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "airSwitchImg": "",
  "connectionImg": "",
  "content": "",
  "examineTime": "",
  "id": 0,
  "pageNo": 0,
  "repairId": 0,
  "routingImg": "",
  "status": 0,
  "submitTime": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|实体类基类（BaseEntity）|实体类公共属性部分|body|true|实体类基类（BaseEntity）|实体类基类（BaseEntity）|
|&emsp;&emsp;airSwitchImg|||false|string||
|&emsp;&emsp;connectionImg|||false|string||
|&emsp;&emsp;content|||false|string||
|&emsp;&emsp;examineTime|||false|string(date-time)||
|&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;repairId|||false|integer(int32)||
|&emsp;&emsp;routingImg|||false|string||
|&emsp;&emsp;status|||false|integer(int32)||
|&emsp;&emsp;submitTime|||false|string(date-time)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# Message模块


## 重要提醒列表


**接口地址**:`/sale/api/message/importantMeassage`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 重要提醒列表


**接口地址**:`/sale/api/message/importantMessage`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 版本号


## 获取APP版本号


**接口地址**:`/sale/api/version/listAppVersion`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "content": "本次更新的内容详细描述",
  "forceUpdate": false,
  "id": 0,
  "pageNo": 0,
  "platform": 1,
  "tips": false,
  "type": 1,
  "versionNo": "1.0.2"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|aPP版本号（AppVersion）|APP版本号|body|true|APP版本号（AppVersion）|APP版本号（AppVersion）|
|&emsp;&emsp;content|更新内容||true|string||
|&emsp;&emsp;forceUpdate|是否强制更新(0:不强制更新，1：强制更新)||true|boolean||
|&emsp;&emsp;id|主键id||false|integer(int32)||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;platform|平台1: IOS 2: 安卓）||true|integer(int32)||
|&emsp;&emsp;tips|是否提示(0:不提示，1：提示)||true|boolean||
|&emsp;&emsp;type|1：小格厨房；2小格维修；3：CRM||true|integer(int32)||
|&emsp;&emsp;versionNo|版本号||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 评论模块


## 查询评论列表


**接口地址**:`/sale/api/comment/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "sourceId": 0,
  "type": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|查询评论参数（CommentParam）|查询评论参数|body|true|查询评论参数（CommentParam）|查询评论参数（CommentParam）|
|&emsp;&emsp;sourceId|被评论的源ID||false|integer(int32)||
|&emsp;&emsp;type|评论资源类型1:OA审批,2:派工单,3:账单(真实账单),可用值:1,2,3||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 发布评论和回复


**接口地址**:`/sale/api/comment/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "atUserIdArr": [],
  "attachArr": [],
  "content": "",
  "id": 0,
  "imageArr": [],
  "pageNo": 0,
  "replyId": 0,
  "sourceId": 0,
  "type": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|评论实体类（Comment）|评论对象实体类|body|true|评论实体类（Comment）|评论实体类（Comment）|
|&emsp;&emsp;atUserIdArr|被AT的人的ID数组||true|array|string|
|&emsp;&emsp;attachArr|附件数组||true|array|object|
|&emsp;&emsp;content|评论内容||false|string||
|&emsp;&emsp;id|评论主键id||false|integer(int32)||
|&emsp;&emsp;imageArr|图片数组||true|array|string|
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;replyId|被回复的评论的ID||false|integer(int32)||
|&emsp;&emsp;sourceId|被评论的源ID||true|integer(int32)||
|&emsp;&emsp;type|评论资源类型1:OA审批,2:派工单,3:账单(真实账单),可用值:1,2,3||true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 删除评论


**接口地址**:`/sale/api/comment/delete/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 合同模块


## 合同列表


**接口地址**:`/sale/api/contract/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "createUserId": 0,
  "flowId": "",
  "id": 0,
  "keyword": "张三",
  "orderCode": "",
  "status": 0,
  "storeId": 0,
  "userPhone": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|查询合同参数（ContractParam）|查询合同参数|body|true|查询合同参数（ContractParam）|查询合同参数（ContractParam）|
|&emsp;&emsp;createUserId|创建者的ID||false|integer(int32)||
|&emsp;&emsp;flowId|合同流程id||false|string||
|&emsp;&emsp;id|合同主键id||false|integer(int32)||
|&emsp;&emsp;keyword|关键字||false|string||
|&emsp;&emsp;orderCode|订单编号||false|string||
|&emsp;&emsp;status|状态||false|integer(int32)||
|&emsp;&emsp;storeId|客户的ID||false|integer(int32)||
|&emsp;&emsp;userPhone|经办人的手机号||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 获取合同信息详细信息


**接口地址**:`/sale/api/contract/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|合同主键id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 新增合同


**接口地址**:`/sale/api/contract/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "accountId": "",
  "attachArr": [],
  "copierList": [
    {
      "airSwitchImg": "",
      "connectionImg": "",
      "content": "",
      "examineTime": "",
      "id": 0,
      "pageNo": 0,
      "repairId": 0,
      "routingImg": "",
      "status": 0,
      "submitTime": ""
    }
  ],
  "flowId": "",
  "id": 0,
  "imageArr": [],
  "name": "格莱亚洗碗机租赁合同-南京格莱亚厨房设备有限公司",
  "orderCode": "",
  "orgId": "",
  "orgName": "南京格莱亚厨房设备有限公司",
  "pageNo": 0,
  "sourceFrom": 0,
  "status": 0,
  "storeId": 6,
  "systemFrom": "",
  "type": 0,
  "userName": "戴伟",
  "userPhone": "15851817747"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|合同信息实体类（Contract）|合同信息实体类|body|true|合同信息实体类（Contract）|合同信息实体类（Contract）|
|&emsp;&emsp;accountId|合同用户的accountId||false|string||
|&emsp;&emsp;attachArr|附件数组||false|array|object|
|&emsp;&emsp;copierList|||false|array|实体类基类（BaseEntity）|
|&emsp;&emsp;&emsp;&emsp;airSwitchImg|||false|string||
|&emsp;&emsp;&emsp;&emsp;connectionImg|||false|string||
|&emsp;&emsp;&emsp;&emsp;content|||false|string||
|&emsp;&emsp;&emsp;&emsp;examineTime|||false|string||
|&emsp;&emsp;&emsp;&emsp;id|||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer||
|&emsp;&emsp;&emsp;&emsp;repairId|||false|integer||
|&emsp;&emsp;&emsp;&emsp;routingImg|||false|string||
|&emsp;&emsp;&emsp;&emsp;status|||false|integer||
|&emsp;&emsp;&emsp;&emsp;submitTime|||false|string||
|&emsp;&emsp;flowId|流程id||false|string||
|&emsp;&emsp;id|合同信息主键id||false|integer(int32)||
|&emsp;&emsp;imageArr|图片数组||true|array|string|
|&emsp;&emsp;name|合同名称||true|string||
|&emsp;&emsp;orderCode|结算单编号||false|string||
|&emsp;&emsp;orgId|合同签署公司的id||false|string||
|&emsp;&emsp;orgName|公司名称||true|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;sourceFrom|订单类型1：订单，2：账单,可用值:1,2||false|integer(int32)||
|&emsp;&emsp;status|状态||false|integer(int32)||
|&emsp;&emsp;storeId|门店ID||true|integer(int32)||
|&emsp;&emsp;systemFrom|合同来源(1:后台,2:小格厨房,3:维修端，4：销售端),可用值:1,2,3,4||false|string||
|&emsp;&emsp;type|类型(0未知1电子合同2纸质合同),可用值:0,1,2||false|integer(int32)||
|&emsp;&emsp;userName|经办人姓名||true|string||
|&emsp;&emsp;userPhone|经办人手机号码||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# E签宝模块


## 合同处理回调


**接口地址**:`/sale/api/esign/flowNotifyUrl`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 获取电子合同签署地址


**接口地址**:`/sale/api/esign/getExecuteUrl/{id}/{accountId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|path|true|integer(int32)||
|accountId|accountId|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# OA审批-通用


## 审批列表


**接口地址**:`/sale/api/approval/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "approvalStatus": 1,
  "flowStatus": 1,
  "title": "租赁申请",
  "type": 1
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|查询OA审批参数（OaApprovalParam）|审批列表查询参数|body|true|查询OA审批参数（OaApprovalParam）|查询OA审批参数（OaApprovalParam）|
|&emsp;&emsp;approvalStatus|状态0全部1审批完成2审批中3已取消,可用值:0,1,2,3||false|integer(int32)||
|&emsp;&emsp;flowStatus|状态0待处理1已处理2抄送,可用值:0,1||false|integer(int32)||
|&emsp;&emsp;title|标题（模糊搜索）||false|string||
|&emsp;&emsp;type|审批单类型1租赁申请2发货申请3账单申请4终止合作,可用值:1,2,3,4||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 审批详情


**接口地址**:`/sale/api/approval/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|审批主键ID|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 撤销审批流程


**接口地址**:`/sale/api/approval/cancel/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|审批主键ID|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 流程预览


**接口地址**:`/sale/api/flow/preview`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "object": {},
  "sourceId": 1,
  "sourceType": 1
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|流程查询参数（OaApprovalFlowParam）|流程查询参数|body|true|流程查询参数（OaApprovalFlowParam）|流程查询参数（OaApprovalFlowParam）|
|&emsp;&emsp;object|申请模型||false|object||
|&emsp;&emsp;sourceId|表单ID||false|integer(int32)||
|&emsp;&emsp;sourceType|表单类型(1租赁申请2发货申请3账单申请4终止申请),可用值:1,2,3,4||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 审批通过


**接口地址**:`/sale/api/flow/agree/{approvalId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|approvalId|审批主键ID|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 审批拒绝


**接口地址**:`/sale/api/flow/refuse/{approvalId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|approvalId|审批主键ID|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# OA审批-申请租赁模块


## 发起租赁申请


**接口地址**:`/sale/api/rentApply/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "businessLinkName": "张三",
  "businessLinkPhone": "15851817747",
  "businessLinkTitle": "店长",
  "cycleCount": 3,
  "cycleMonth": 2,
  "deposit": 1000,
  "discountType": 1,
  "dishwasherTypeId": 1,
  "finalPrice": 1000,
  "financialAddrAddress": "淳化街道梨树园路9号",
  "financialAddrCity": "南京市",
  "financialAddrDistrict": "江宁区",
  "financialAddrState": "江苏省",
  "financialLinkName": "张三",
  "financialLinkPhone": "15851817747",
  "id": 0,
  "isNew": 1,
  "maintainSellerId": 15,
  "needLength": 0,
  "needWiring": 0,
  "needWorkbench": 0,
  "newWorkbench": 0,
  "originPrice": 1200,
  "packageArr": "[]",
  "pageNo": 0,
  "receivingAddrAddress": "淳化街道梨树园路9号",
  "receivingAddrCity": "南京市",
  "receivingAddrDistrict": "江宁区",
  "receivingAddrState": "江苏省",
  "receivingLinkName": "戴伟",
  "receivingLinkPhone": "15851817747",
  "storeId": 6,
  "wiringPrice": 12.5,
  "workbenchArr": "[]",
  "workbenchPrice": 36.5,
  "workbenchs": "[]"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|租赁申请记录实体类（OaRentApply）|租赁申请记录实体类|body|true|租赁申请记录实体类（OaRentApply）|租赁申请记录实体类（OaRentApply）|
|&emsp;&emsp;businessLinkName|业务联系人||true|string||
|&emsp;&emsp;businessLinkPhone|业务联系人电话||true|string||
|&emsp;&emsp;businessLinkTitle|业务联系人职位||true|string||
|&emsp;&emsp;cycleCount|几期||true|integer(int32)||
|&emsp;&emsp;cycleMonth|周期的月数||false|integer(int32)||
|&emsp;&emsp;deposit|押金||true|integer(int64)||
|&emsp;&emsp;discountType|优惠方式-1付10免2  2付12免2 3年付 4半年付 5季付 6月付 7其他 如果是1或者2，则cycleMonth可以不传,可用值:1,2,3,4,5,6,7||true|integer(int32)||
|&emsp;&emsp;dishwasherTypeId|洗碗机类型id||true|integer(int32)||
|&emsp;&emsp;finalPrice|成交价格||true|number(bigdecimal)||
|&emsp;&emsp;financialAddrAddress|财务地址-详细地址||true|string||
|&emsp;&emsp;financialAddrCity|财务地址-市||true|string||
|&emsp;&emsp;financialAddrDistrict|财务地址-区||true|string||
|&emsp;&emsp;financialAddrState|财务地址-省||true|string||
|&emsp;&emsp;financialLinkName|财务联系人姓名||true|string||
|&emsp;&emsp;financialLinkPhone|财务联系人电话||true|string||
|&emsp;&emsp;id|租赁申请主键id||false|integer(int32)||
|&emsp;&emsp;isNew|是否是新机器||true|integer(int32)||
|&emsp;&emsp;maintainSellerId|维护销售id||true|integer(int32)||
|&emsp;&emsp;needLength|布线长度||false|integer(int64)||
|&emsp;&emsp;needWiring|是否需要布线||true|integer(int32)||
|&emsp;&emsp;needWorkbench|是否需要工作台||true|integer(int32)||
|&emsp;&emsp;newWorkbench|是否是新工作台||false|integer(int32)||
|&emsp;&emsp;originPrice|机器原价||true|number(bigdecimal)||
|&emsp;&emsp;packageArr|安装包数组||true|array|string|
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;receivingAddrAddress|收货地址||true|string||
|&emsp;&emsp;receivingAddrCity|收货地址-市||true|string||
|&emsp;&emsp;receivingAddrDistrict|收货地址-区||true|string||
|&emsp;&emsp;receivingAddrState|收货地址-省||true|string||
|&emsp;&emsp;receivingLinkName|收货人||true|string||
|&emsp;&emsp;receivingLinkPhone|收货电话||true|string||
|&emsp;&emsp;storeId|门店id||true|integer(int32)||
|&emsp;&emsp;wiringPrice|布线价格||false|number(bigdecimal)||
|&emsp;&emsp;workbenchArr|工作台数组||true|array|string|
|&emsp;&emsp;workbenchPrice|工作台价格||false|number(bigdecimal)||
|&emsp;&emsp;workbenchs|工作台数组||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 租赁申请列表


**接口地址**:`/sale/api/rentApply/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "keyWord": "小菜园",
  "pageNo": 0,
  "status": 0,
  "storeId": 1
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|租赁申请参数（OaRentApplyParam）|租赁申请参数|body|true|租赁申请参数（OaRentApplyParam）|租赁申请参数（OaRentApplyParam）|
|&emsp;&emsp;keyWord|关键字||false|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;status|状态0全部1审批中2审批结束3被拒绝4已取消,可用值:0,1,2,3,4||false|integer(int32)||
|&emsp;&emsp;storeId|门店id||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# OA审批-申请发货模块


## 添加发货申请


**接口地址**:`/sale/api/deliveryApply/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "deliveryDate": "2020-12-12",
  "detailArr": [],
  "id": 0,
  "imageArr": [],
  "installDate": "2020-12-12",
  "pageNo": 0,
  "receivingAddrAddress": "梨树园路9号 宏阳曙光春晓",
  "receivingAddrCity": "南京市",
  "receivingAddrDistrict": "江宁区",
  "receivingAddrState": "江苏省",
  "receivingLinkName": "张三1号",
  "receivingLinkPhone": "15851817747",
  "rentApplyId": 1,
  "storeId": 6,
  "type": 1
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|oA发货申请实体类（OaDeliveryApply）|OA发货申请实体类|body|true|OA发货申请实体类（OaDeliveryApply）|OA发货申请实体类（OaDeliveryApply）|
|&emsp;&emsp;deliveryDate|预计发货时间||false|string||
|&emsp;&emsp;detailArr|发货详细清单||true|array|object|
|&emsp;&emsp;id|OA发货申请主键ID||false|integer(int32)||
|&emsp;&emsp;imageArr|图片数组||true|array|string|
|&emsp;&emsp;installDate|预计安装时间||false|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;receivingAddrAddress|地址||true|string||
|&emsp;&emsp;receivingAddrCity|市||true|string||
|&emsp;&emsp;receivingAddrDistrict|区||true|string||
|&emsp;&emsp;receivingAddrState|省||true|string||
|&emsp;&emsp;receivingLinkName|收货人姓名||true|string||
|&emsp;&emsp;receivingLinkPhone|收货人电话||true|string||
|&emsp;&emsp;rentApplyId|租赁申请单的ID,发机器的时候要传||false|integer(int32)||
|&emsp;&emsp;storeId|客户的ID||true|integer(int32)||
|&emsp;&emsp;type|类型1机器2赠送3不收费4收费,可用值:1,2,3,4||true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 发货申请列表


**接口地址**:`/sale/api/deliveryApply/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "keyWord": "小菜园",
  "status": 0,
  "storeId": 1,
  "type": 1,
  "userId": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|查询发货申请实体类（OaDeliveryApplyParam）|查询发货申请参数|body|true|查询发货申请实体类（OaDeliveryApplyParam）|查询发货申请实体类（OaDeliveryApplyParam）|
|&emsp;&emsp;keyWord|关键字||false|string||
|&emsp;&emsp;status|状态0全部1审批中2审批结束3被拒绝4已取消,可用值:0,1,2,3,4||false|integer(int32)||
|&emsp;&emsp;storeId|门店id||false|integer(int32)||
|&emsp;&emsp;type|类型1机器2赠送3不收费4收费,可用值:1,2,3,4||false|integer(int32)||
|&emsp;&emsp;userId|||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# OA审批-申请账单计费模块


## 添加账单计费申请


**接口地址**:`/sale/api/billApply/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "deposit": 1000,
  "discountTypeStr": "",
  "finalPrice": 1000,
  "id": 0,
  "originPrice": 1000,
  "pageNo": 0,
  "rentApplyId": 1,
  "startDate": "2120-01-01",
  "storeId": 1
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|oA账单申请实体类（OaDeliveryApply）|OA账单申请实体类|body|true|OA账单申请实体类（OaDeliveryApply）|OA账单申请实体类（OaDeliveryApply）|
|&emsp;&emsp;deposit|押金||true|integer(int64)||
|&emsp;&emsp;discountTypeStr|优惠方式(前台使用该字段)||false|string||
|&emsp;&emsp;finalPrice|成交价格||true|number(bigdecimal)||
|&emsp;&emsp;id|OA账单申请主键ID||false|integer(int32)||
|&emsp;&emsp;originPrice|原价格||true|number(bigdecimal)||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;rentApplyId|租赁申请的ID||true|integer(int32)||
|&emsp;&emsp;startDate|开始计费日期||true|string||
|&emsp;&emsp;storeId|客户的ID||true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 账单计费申请列表


**接口地址**:`/sale/api/billApply/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "keyWord": "小菜园",
  "status": 0,
  "storeId": "1",
  "userId": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|查询账单申请实体类（OaBillApplyParam）|查询账单申请参数|body|true|查询账单申请实体类（OaBillApplyParam）|查询账单申请实体类（OaBillApplyParam）|
|&emsp;&emsp;keyWord|关键字||false|string||
|&emsp;&emsp;status|状态0全部1审批中2审批结束3被拒绝4已取消,可用值:0,1,2,3,4||false|integer(int32)||
|&emsp;&emsp;storeId|门店id||false|string||
|&emsp;&emsp;userId|||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# OA审批-申请终止合作模块


## 添加终止合作申请


**接口地址**:`/sale/api/stopCooperation/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "contactName": "李四",
  "contactPhone": "17315441990",
  "depositRemark": "押金处置",
  "dishwasherTypeId": 1,
  "dismantleDate": "2020-12-12",
  "id": 0,
  "imageArr": [],
  "pageNo": 0,
  "price": 1000,
  "reason": "终止理由",
  "rentApplyId": 6,
  "sallerId": 1,
  "stopDate": "2020-12-12",
  "storeId": 6,
  "type": 1
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|oA终止合作申请实体类（OaStopCooperationApply）|OA终止合作申请实体类|body|true|OA终止合作申请实体类（OaStopCooperationApply）|OA终止合作申请实体类（OaStopCooperationApply）|
|&emsp;&emsp;contactName|联系人||true|string||
|&emsp;&emsp;contactPhone|联系电话||true|string||
|&emsp;&emsp;depositRemark|押金处置||true|string||
|&emsp;&emsp;dishwasherTypeId|洗碗机类型||true|integer(int32)||
|&emsp;&emsp;dismantleDate|拆机日期||true|string||
|&emsp;&emsp;id|OA终止合作申请主键ID||false|integer(int32)||
|&emsp;&emsp;imageArr|图片数组||true|array|string|
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;price|月价格||true|number(bigdecimal)||
|&emsp;&emsp;reason|终止理由||true|string||
|&emsp;&emsp;rentApplyId|租赁申请单ID||false|integer(int32)||
|&emsp;&emsp;sallerId|终止类型||true|integer(int32)||
|&emsp;&emsp;stopDate|押金截止日期||true|string||
|&emsp;&emsp;storeId|客户ID||true|integer(int32)||
|&emsp;&emsp;type|终止类型,可用值:1,2||true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 终止合作申请列表


**接口地址**:`/sale/api/stopCooperation/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "keyWord": "小菜园",
  "status": 0,
  "storeId": 1
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|终止合作申请参数（OaStopCooperationApplyParam）|终止合作申请参数|body|true|终止合作申请参数（OaStopCooperationApplyParam）|终止合作申请参数（OaStopCooperationApplyParam）|
|&emsp;&emsp;keyWord|关键字||false|string||
|&emsp;&emsp;status|状态0全部1审批中2审批结束3被拒绝4已取消,可用值:0,1,2,3,4||false|integer(int32)||
|&emsp;&emsp;storeId|门店id||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 快递模块


## 查询快递列表


**接口地址**:`/sale/api/express/onlineList`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "expressNo": "",
  "expressCom": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|快递查询参数（ExpressParam）|快递查询参数|body|true|快递查询参数（ExpressParam）|快递查询参数（ExpressParam）|
|&emsp;&emsp;expressCom|快递公司||false|string||
|&emsp;&emsp;expressNo|快递单号||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 账单模块


## 首页回款列表


**接口地址**:`/sale/api/bill/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "billId": 0,
  "id": 0,
  "storeId": 0,
  "type": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|账单明细查询参数Param（UserBillDetailParam）|账单明细查询参数|body|true|账单明细查询参数Param（UserBillDetailParam）|账单明细查询参数Param（UserBillDetailParam）|
|&emsp;&emsp;billId|账单主键id||false|integer(int32)||
|&emsp;&emsp;id|账单详情主键id||false|integer(int32)||
|&emsp;&emsp;storeId|客户门店id||false|integer(int32)||
|&emsp;&emsp;type|类型（1:全部;2:已逾期;3:本期待缴;4:其他;）,可用值:1,2,3,4||true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 门店回款列表


**接口地址**:`/sale/api/bill/listOfStore`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "billId": 0,
  "id": 0,
  "storeId": 0,
  "type": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|账单明细查询参数Param（UserBillDetailParam）|账单明细查询参数|body|true|账单明细查询参数Param（UserBillDetailParam）|账单明细查询参数Param（UserBillDetailParam）|
|&emsp;&emsp;billId|账单主键id||false|integer(int32)||
|&emsp;&emsp;id|账单详情主键id||false|integer(int32)||
|&emsp;&emsp;storeId|客户门店id||false|integer(int32)||
|&emsp;&emsp;type|类型（1:全部;2:已逾期;3:本期待缴;4:其他;）,可用值:1,2,3,4||true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 通用模块


## 洗碗机类型列表


**接口地址**:`/sale/api/common/dishwasherType/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|false|integer(int32)||
|image||query|false|string||
|isAsc|排序的方向descending或者ascending,可用值:ascending,descending|query|false|string||
|name||query|false|string||
|orderBy||query|false|string||
|orderByColumn|排序列|query|false|string||
|pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一|query|false|integer(int32)||
|pageNum|当前记录起始索引|query|false|integer(int32)||
|pageSize|每页显示记录数|query|false|integer(int32)||
|price||query|false|number(bigdecimal)||
|reasonable|分页参数合理化（仅web端使用）|query|false|boolean||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 获取内部员工 部门下拉树列表


**接口地址**:`/sale/api/common/treeSelectDeptStaff`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|deptId|部门id|query|false|integer(int32)||
|name|用户名/部门名模糊查询|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 获取城市下拉树列表


**接口地址**:`/sale/api/common/treeSelectRegion`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 生成验证码


**接口地址**:`/sale/api/common/sms/code`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "sign": "",
  "account": "18888888888"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|用户登录参数（LoginBody）|用户登录参数（LoginBody）|body|true|用户登录参数（LoginBody）|用户登录参数（LoginBody）|
|&emsp;&emsp;accessToken|一键登录token||false|string||
|&emsp;&emsp;account|用户账号(手机号)||true|string||
|&emsp;&emsp;code|验证码||false|string||
|&emsp;&emsp;openId|微信openID||false|string||
|&emsp;&emsp;password|用户密码||true|string||
|&emsp;&emsp;sign|防盗刷加密标识||false|string||
|&emsp;&emsp;uuid|唯一标识||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 工单模块


## 发布派工单


**接口地址**:`/sale/api/workOrder/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "addressName": "",
  "cityName": "",
  "dispatchType": "",
  "districtName": "",
  "equipmentNo": "",
  "faultDesc": "",
  "faultImg": "",
  "faultType": "",
  "faultVideo": "",
  "finalAmount": 0,
  "finalCostType": "",
  "firstReceiptTime": "",
  "highestAmount": 0,
  "highestCostType": "",
  "id": 0,
  "isOffline": false,
  "isOver": false,
  "isTransfer": false,
  "latitude": 0,
  "linkMan": "",
  "linkPhone": "",
  "longitude": 0,
  "model": 0,
  "pageNo": 0,
  "provinceName": "",
  "receiptTime": "",
  "receiptUserId": 0,
  "repairCode": "",
  "reportFrom": 0,
  "reportTime": "",
  "status": 0,
  "storeId": 0,
  "storeName": "",
  "userId": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|工单信息实体类（RepairInfo）|工单信息实体类|body|true|工单信息实体类（RepairInfo）|工单信息实体类（RepairInfo）|
|&emsp;&emsp;addressName|详细地址||false|string||
|&emsp;&emsp;cityName|市||false|string||
|&emsp;&emsp;dispatchType|派单类型(D01:维修单;D02:巡检单;D03:现场勘查;D04:客户培训;D05:电源布线;D06:装机移机;D07:拆机;D08:药水包月;),可用值:D01,D02,D03,D04,D05,D06,D07,D08||false|string||
|&emsp;&emsp;districtName|区||false|string||
|&emsp;&emsp;equipmentNo|设备编号||false|string||
|&emsp;&emsp;faultDesc|故障描述||false|string||
|&emsp;&emsp;faultImg|故障图片||false|string||
|&emsp;&emsp;faultType|故障类型（F01:不开机;F02:不上水;F03:不加热;F04:洗不干净;F05:洗剂不进;F06:其他;）,可用值:F01,F02,F03,F04,F05,F06||false|string||
|&emsp;&emsp;faultVideo|故障视频||false|string||
|&emsp;&emsp;finalAmount|最终金额||false|number(bigdecimal)||
|&emsp;&emsp;finalCostType|费用类型(用来计算单据的实际金额) ||false|string||
|&emsp;&emsp;firstReceiptTime|第一次接单时间||false|string(date-time)||
|&emsp;&emsp;highestAmount|单据最高可得金额||false|number(bigdecimal)||
|&emsp;&emsp;highestCostType|费用类型(用来计算单据的最高金额)||false|string||
|&emsp;&emsp;id|服务工单主键id||false|integer(int32)||
|&emsp;&emsp;isOffline|是否线上单子||false|boolean||
|&emsp;&emsp;isOver|是否超期||false|boolean||
|&emsp;&emsp;isTransfer|是否转派||false|boolean||
|&emsp;&emsp;latitude|纬度||false|number(double)||
|&emsp;&emsp;linkMan|联系人||false|string||
|&emsp;&emsp;linkPhone|联系电话||false|string||
|&emsp;&emsp;longitude|经度||false|number(double)||
|&emsp;&emsp;model|机型(在派单类型为装机移机时有用),可用值:1,2,3||false|integer(int32)||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;provinceName|省||false|string||
|&emsp;&emsp;receiptTime|当前处理人接单时间||false|string(date-time)||
|&emsp;&emsp;receiptUserId|当前处理人||false|integer(int32)||
|&emsp;&emsp;repairCode|工单编号||false|string||
|&emsp;&emsp;reportFrom|工单来源（1:kitchen；2:设备；3：后端；4:CRM）,可用值:1,2,3,4||false|integer(int32)||
|&emsp;&emsp;reportTime|申请工单时间||false|string(date-time)||
|&emsp;&emsp;status|状态(1:新任务;2:待处理,待提交;3:已处理，待提交;4:已提交，待审核;5:已审核;6:已转交;7:系统回收;8:取消),可用值:1,2,3,4,5,6,7,8||false|integer(int32)||
|&emsp;&emsp;storeId|店铺id||false|integer(int32)||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;userId|申请工单人id||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 取消工单


**接口地址**:`/sale/api/workOrder/cancel/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|工单id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 查询工单列表


**接口地址**:`/sale/api/workOrder/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "dispatchType": "",
  "selfData": false,
  "storeName": "",
  "storeId": 0,
  "statusAdmin": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|工单信息查询参数（RepairInfoParam）|工单信息查询参数|body|true|工单信息查询参数（RepairInfoParam）|工单信息查询参数（RepairInfoParam）|
|&emsp;&emsp;cityName|城市||false|string||
|&emsp;&emsp;dispatchType|派单类型(D01:维修单;D02:巡检单;D03:现场勘查;D04:客户培训;D05:电源布线;D06:装机移机;D07:拆机;D08:药水包月;),可用值:D01,D02,D03,D04,D05,D06,D07,D08||false|string||
|&emsp;&emsp;districtName|区||false|string||
|&emsp;&emsp;endDate|起始日期||false|string(date-time)||
|&emsp;&emsp;equipmentNo|设备号||false|string||
|&emsp;&emsp;forwardUserId|转交后的用户id||false|integer(int32)||
|&emsp;&emsp;id|工单主键id||false|integer(int32)||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;provinceName|省||false|string||
|&emsp;&emsp;receiptUserId|当前处理用户id||false|integer(int32)||
|&emsp;&emsp;repairCode|工单的单号||false|string||
|&emsp;&emsp;reportDate|报表查询日期||false|string(date-time)||
|&emsp;&emsp;reportFrom|报修来源（1:kitchen；2:设备；3：后端；4:CRM）,可用值:1,2,3,4||false|integer(int32)||
|&emsp;&emsp;reportId|报告主键id||false|integer(int32)||
|&emsp;&emsp;reportUserId|报修人id||false|integer(int32)||
|&emsp;&emsp;selfData|仅看本人数据（false 否 true 是）||false|boolean||
|&emsp;&emsp;startDate|结束日期||false|string(date-time)||
|&emsp;&emsp;status|状态(1:新任务;2:待处理,待提交;3:已处理，待提交;4:已提交，待审核;5:已审核;6:已转交;7:系统回收;8:取消),可用值:1,2,3,4,5,6,7,8||false|integer(int32)||
|&emsp;&emsp;statusAdmin|(admin系统)管理员关注的状态：1 新任务 2 未完成（已接单的，已处理的，转交等等，反正没有提交的都算未完成） 3 已完成（已经提交的，已审核的，都算已完成）,可用值:1,2,3||false|integer(int32)||
|&emsp;&emsp;storeId|门店主键id||false|integer(int32)||
|&emsp;&emsp;storeName|门店名称||false|string||
|&emsp;&emsp;type|快捷时间类型(3 本月 5 本年)报表使用,可用值:3,5||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 获取工单详细信息


**接口地址**:`/sale/api/workOrder/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|工单主键id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 查询备件列表


**接口地址**:`/sale/api/workOrder/partsList`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "repairId": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|备件申请查询参数（RepairPartsParam）|备件申请查询参数|body|true|备件申请查询参数（RepairPartsParam）|备件申请查询参数（RepairPartsParam）|
|&emsp;&emsp;applyUserName|申请人姓名||false|string||
|&emsp;&emsp;equipmentNo|设备编号||false|string||
|&emsp;&emsp;expressCom|快递公司||false|string||
|&emsp;&emsp;expressNo|快递单号||false|string||
|&emsp;&emsp;id|备件申请主键id||false|integer(int32)||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;receiverAddress|收货地址||false|string||
|&emsp;&emsp;receiverCity|城市||false|string||
|&emsp;&emsp;receiverDistrict|区/县||false|string||
|&emsp;&emsp;receiverMobile|移动电话||false|string||
|&emsp;&emsp;receiverName|收货人姓名||false|string||
|&emsp;&emsp;receiverState|省份||false|string||
|&emsp;&emsp;repairId|工单id||false|integer(int32)||
|&emsp;&emsp;status|状态0:审批中 1:未通过 2:已发出 3:已送达,可用值:0,1,2,3||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 查询备件明细


**接口地址**:`/sale/api/workOrder/parts/{id}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|备件申请主键id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 查询工单处理过程列表


**接口地址**:`/sale/api/workOrder/processList/{workOrderId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|workOrderId|工单主键id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 定时任务


## 查询定时任务列表


**接口地址**:`/sale/monitor/job/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|cronExpression|cron执行表达式|query|true|string||
|invokeTarget|调用目标字符串|query|true|string||
|jobName|任务名称|query|true|string||
|concurrent|是否并发执行（0允许 1禁止）,可用值:0,1|query|false|string||
|isAsc|排序的方向descending或者ascending,可用值:ascending,descending|query|false|string||
|jobGroup|任务组名|query|false|string||
|jobId|任务主键id|query|false|integer(int32)||
|misfirePolicy|cron计划策略（0默认 1立即触发执行 2触发一次执行 3不触发立即执行）,可用值:0,1,2,3|query|false|string||
|nextValidTime||query|false|string(date-time)||
|orderBy||query|false|string||
|orderByColumn|排序列|query|false|string||
|pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一|query|false|integer(int32)||
|pageNum|当前记录起始索引|query|false|integer(int32)||
|pageSize|每页显示记录数|query|false|integer(int32)||
|reasonable|分页参数合理化（仅web端使用）|query|false|boolean||
|status|任务状态（0正常 1暂停）,可用值:0,1|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|表格分页数据对象（TableDataInfo）|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|消息状态码|integer(int32)|integer(int32)|
|data|data数据|object||
|msg|消息内容|string||
|pageNo|当前记录起始索引|integer(int32)|integer(int32)|
|pageSize|每页显示记录数|integer(int32)|integer(int32)|
|rows|列表数据|array||
|total|总记录数|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": "",
	"pageNo": 0,
	"pageSize": 0,
	"rows": [],
	"total": 0
}
```


## 获取定时任务详细信息


**接口地址**:`/sale/monitor/job/{jobId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|jobId|定时任务主键id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 新增定时任务


**接口地址**:`/sale/monitor/job`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "concurrent": "",
  "cronExpression": "",
  "invokeTarget": "",
  "jobGroup": "",
  "jobId": 0,
  "jobName": "",
  "misfirePolicy": "",
  "pageNo": 0,
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|定时任务实体类（SysJob）|定时任务实体类|body|true|定时任务实体类（SysJob）|定时任务实体类（SysJob）|
|&emsp;&emsp;concurrent|是否并发执行（0允许 1禁止）,可用值:0,1||false|string||
|&emsp;&emsp;cronExpression|cron执行表达式||false|string||
|&emsp;&emsp;invokeTarget|调用目标字符串||false|string||
|&emsp;&emsp;jobGroup|任务组名||false|string||
|&emsp;&emsp;jobId|任务主键id||false|integer(int32)||
|&emsp;&emsp;jobName|任务名称||false|string||
|&emsp;&emsp;misfirePolicy|cron计划策略（0默认 1立即触发执行 2触发一次执行 3不触发立即执行）,可用值:0,1,2,3||false|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;status|任务状态（0正常 1暂停）,可用值:0,1||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 修改定时任务


**接口地址**:`/sale/monitor/job`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "concurrent": "",
  "cronExpression": "",
  "invokeTarget": "",
  "jobGroup": "",
  "jobId": 0,
  "jobName": "",
  "misfirePolicy": "",
  "pageNo": 0,
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|定时任务实体类（SysJob）|定时任务实体类|body|true|定时任务实体类（SysJob）|定时任务实体类（SysJob）|
|&emsp;&emsp;concurrent|是否并发执行（0允许 1禁止）,可用值:0,1||false|string||
|&emsp;&emsp;cronExpression|cron执行表达式||false|string||
|&emsp;&emsp;invokeTarget|调用目标字符串||false|string||
|&emsp;&emsp;jobGroup|任务组名||false|string||
|&emsp;&emsp;jobId|任务主键id||false|integer(int32)||
|&emsp;&emsp;jobName|任务名称||false|string||
|&emsp;&emsp;misfirePolicy|cron计划策略（0默认 1立即触发执行 2触发一次执行 3不触发立即执行）,可用值:0,1,2,3||false|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;status|任务状态（0正常 1暂停）,可用值:0,1||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 定时任务状态修改


**接口地址**:`/sale/monitor/job/changeStatus`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "concurrent": "",
  "cronExpression": "",
  "invokeTarget": "",
  "jobGroup": "",
  "jobId": 0,
  "jobName": "",
  "misfirePolicy": "",
  "pageNo": 0,
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|定时任务实体类（SysJob）|定时任务实体类|body|true|定时任务实体类（SysJob）|定时任务实体类（SysJob）|
|&emsp;&emsp;concurrent|是否并发执行（0允许 1禁止）,可用值:0,1||false|string||
|&emsp;&emsp;cronExpression|cron执行表达式||false|string||
|&emsp;&emsp;invokeTarget|调用目标字符串||false|string||
|&emsp;&emsp;jobGroup|任务组名||false|string||
|&emsp;&emsp;jobId|任务主键id||false|integer(int32)||
|&emsp;&emsp;jobName|任务名称||false|string||
|&emsp;&emsp;misfirePolicy|cron计划策略（0默认 1立即触发执行 2触发一次执行 3不触发立即执行）,可用值:0,1,2,3||false|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;status|任务状态（0正常 1暂停）,可用值:0,1||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 定时任务立即执行一次


**接口地址**:`/sale/monitor/job/run`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "concurrent": "",
  "cronExpression": "",
  "invokeTarget": "",
  "jobGroup": "",
  "jobId": 0,
  "jobName": "",
  "misfirePolicy": "",
  "pageNo": 0,
  "status": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|定时任务实体类（SysJob）|定时任务实体类|body|true|定时任务实体类（SysJob）|定时任务实体类（SysJob）|
|&emsp;&emsp;concurrent|是否并发执行（0允许 1禁止）,可用值:0,1||false|string||
|&emsp;&emsp;cronExpression|cron执行表达式||false|string||
|&emsp;&emsp;invokeTarget|调用目标字符串||false|string||
|&emsp;&emsp;jobGroup|任务组名||false|string||
|&emsp;&emsp;jobId|任务主键id||false|integer(int32)||
|&emsp;&emsp;jobName|任务名称||false|string||
|&emsp;&emsp;misfirePolicy|cron计划策略（0默认 1立即触发执行 2触发一次执行 3不触发立即执行）,可用值:0,1,2,3||false|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;status|任务状态（0正常 1暂停）,可用值:0,1||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 删除定时任务


**接口地址**:`/sale/monitor/job/{jobIds}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|jobIds|定时任务主键ids数组|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|204|No Content||
|401|Unauthorized||
|403|Forbidden||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 定时任务日志


## 查询定时任务调度日志列表


**接口地址**:`/sale/monitor/jobLog/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|exceptionInfo|异常信息|query|false|string||
|invokeTarget|调用目标字符串|query|false|string||
|isAsc|排序的方向descending或者ascending,可用值:ascending,descending|query|false|string||
|jobGroup|任务组名|query|false|string||
|jobLogId|日志序号主键id|query|false|integer(int64)||
|jobMessage|日志信息|query|false|string||
|jobName|任务名称|query|false|string||
|orderBy||query|false|string||
|orderByColumn|排序列|query|false|string||
|pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一|query|false|integer(int32)||
|pageNum|当前记录起始索引|query|false|integer(int32)||
|pageSize|每页显示记录数|query|false|integer(int32)||
|reasonable|分页参数合理化（仅web端使用）|query|false|boolean||
|startTime|开始时间|query|false|string(date-time)||
|status|执行状态（0正常 1失败）,可用值:0,1|query|false|string||
|stopTime|停止时间|query|false|string(date-time)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|表格分页数据对象（TableDataInfo）|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|消息状态码|integer(int32)|integer(int32)|
|data|data数据|object||
|msg|消息内容|string||
|pageNo|当前记录起始索引|integer(int32)|integer(int32)|
|pageSize|每页显示记录数|integer(int32)|integer(int32)|
|rows|列表数据|array||
|total|总记录数|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": "",
	"pageNo": 0,
	"pageSize": 0,
	"rows": [],
	"total": 0
}
```


## 根据调度编号获取详细信息


**接口地址**:`/sale/monitor/jobLog/{configId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|jobLogId|定时任务编号(主键id)|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 删除定时任务调度日志


**接口地址**:`/sale/monitor/jobLog/{jobLogIds}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|jobLogId|定时任务编号(主键id)|path|true|||
|jobLogIds|jobLogIds|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|204|No Content||
|401|Unauthorized||
|403|Forbidden||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 清空定时任务调度日志


**接口地址**:`/sale/monitor/jobLog/clean`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|204|No Content||
|401|Unauthorized||
|403|Forbidden||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 代码生成


## 查询代码生成列表


**接口地址**:`/sale/tool/gen/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|businessName|生成业务名|query|true|string||
|className|实体类名称(首字母大写)|query|true|string||
|columns[0].javaField|JAVA字段名|query|true|string||
|functionAuthor|生成作者|query|true|string||
|functionName|生成功能名|query|true|string||
|moduleName|生成模块名|query|true|string||
|packageName|生成包路径|query|true|string||
|pkColumn.javaField|JAVA字段名|query|true|string||
|tableComment|表描述|query|true|string||
|tableName|表名称|query|true|string||
|columns[0].capJavaField||query|false|string||
|columns[0].columnComment|列描述|query|false|string||
|columns[0].columnId|业务字段表编号（主键）|query|false|integer(int32)||
|columns[0].columnName|列名称|query|false|string||
|columns[0].columnType|列类型|query|false|string||
|columns[0].dictType|字典类型|query|false|string||
|columns[0].edit||query|false|boolean||
|columns[0].htmlType|显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件）,可用值:checkbox,datetime,editor,image,input,radio,select,textarea,upload|query|false|string||
|columns[0].increment||query|false|boolean||
|columns[0].insert||query|false|boolean||
|columns[0].isAsc|排序的方向descending或者ascending,可用值:ascending,descending|query|false|string||
|columns[0].isEdit|是否编辑字段（1是），不填为否|query|false|string||
|columns[0].isIncrement|是否自增（1是），不填为否|query|false|string||
|columns[0].isInsert|是否为插入字段（1是），不填为否|query|false|string||
|columns[0].isList|是否列表字段（1是），不填为否|query|false|string||
|columns[0].isPk|是否主键（1是），不填为否|query|false|string||
|columns[0].isQuery|是否查询字段（1是），不填为否|query|false|string||
|columns[0].isRequired|是否必填（1是），不填为否|query|false|string||
|columns[0].javaType|JAVA类型|query|false|string||
|columns[0].list||query|false|boolean||
|columns[0].orderBy||query|false|string||
|columns[0].orderByColumn|排序列|query|false|string||
|columns[0].pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一|query|false|integer(int32)||
|columns[0].pageNum|当前记录起始索引|query|false|integer(int32)||
|columns[0].pageSize|每页显示记录数|query|false|integer(int32)||
|columns[0].pk||query|false|boolean||
|columns[0].query||query|false|boolean||
|columns[0].queryType|查询方式（EQ等于、NE不等于、GT大于、GTE大于等于、LT小于、LTE小于等于、LIKE模糊、BETWEEN范围）,可用值:BETWEEN,EQ,GT,GTE,LIKE,LT,LTE,NE|query|false|string||
|columns[0].reasonable|分页参数合理化（仅web端使用）|query|false|boolean||
|columns[0].required||query|false|boolean||
|columns[0].sort|排序|query|false|integer(int32)||
|columns[0].superColumn||query|false|boolean||
|columns[0].tableId|归属表编号|query|false|integer(int32)||
|columns[0].usableColumn||query|false|boolean||
|crud||query|false|boolean||
|genPath|生成路径（不填默认项目路径）|query|false|string||
|genType|生成代码方式（0zip压缩包 1自定义路径）,可用值:0,1|query|false|string||
|isAsc|排序的方向descending或者ascending,可用值:ascending,descending|query|false|string||
|options|其它生成选项|query|false|string||
|orderBy||query|false|string||
|orderByColumn|排序列|query|false|string||
|pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一|query|false|integer(int32)||
|pageNum|当前记录起始索引|query|false|integer(int32)||
|pageSize|每页显示记录数|query|false|integer(int32)||
|parentMenuId|上级菜单ID字段|query|false|string||
|parentMenuName|上级菜单名称字段|query|false|string||
|pkColumn.capJavaField||query|false|string||
|pkColumn.columnComment|列描述|query|false|string||
|pkColumn.columnId|业务字段表编号（主键）|query|false|integer(int32)||
|pkColumn.columnName|列名称|query|false|string||
|pkColumn.columnType|列类型|query|false|string||
|pkColumn.dictType|字典类型|query|false|string||
|pkColumn.edit||query|false|boolean||
|pkColumn.htmlType|显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件）,可用值:checkbox,datetime,editor,image,input,radio,select,textarea,upload|query|false|string||
|pkColumn.increment||query|false|boolean||
|pkColumn.insert||query|false|boolean||
|pkColumn.isAsc|排序的方向descending或者ascending,可用值:ascending,descending|query|false|string||
|pkColumn.isEdit|是否编辑字段（1是），不填为否|query|false|string||
|pkColumn.isIncrement|是否自增（1是），不填为否|query|false|string||
|pkColumn.isInsert|是否为插入字段（1是），不填为否|query|false|string||
|pkColumn.isList|是否列表字段（1是），不填为否|query|false|string||
|pkColumn.isPk|是否主键（1是），不填为否|query|false|string||
|pkColumn.isQuery|是否查询字段（1是），不填为否|query|false|string||
|pkColumn.isRequired|是否必填（1是），不填为否|query|false|string||
|pkColumn.javaType|JAVA类型|query|false|string||
|pkColumn.list||query|false|boolean||
|pkColumn.orderBy||query|false|string||
|pkColumn.orderByColumn|排序列|query|false|string||
|pkColumn.pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一|query|false|integer(int32)||
|pkColumn.pageNum|当前记录起始索引|query|false|integer(int32)||
|pkColumn.pageSize|每页显示记录数|query|false|integer(int32)||
|pkColumn.pk||query|false|boolean||
|pkColumn.query||query|false|boolean||
|pkColumn.queryType|查询方式（EQ等于、NE不等于、GT大于、GTE大于等于、LT小于、LTE小于等于、LIKE模糊、BETWEEN范围）,可用值:BETWEEN,EQ,GT,GTE,LIKE,LT,LTE,NE|query|false|string||
|pkColumn.reasonable|分页参数合理化（仅web端使用）|query|false|boolean||
|pkColumn.required||query|false|boolean||
|pkColumn.sort|排序|query|false|integer(int32)||
|pkColumn.superColumn||query|false|boolean||
|pkColumn.tableId|归属表编号|query|false|integer(int32)||
|pkColumn.usableColumn||query|false|boolean||
|reasonable|分页参数合理化（仅web端使用）|query|false|boolean||
|sub||query|false|boolean||
|subTableFkName|本表关联父表的外键名|query|false|string||
|subTableName|关联父表的表名|query|false|string||
|tableId|业务表编号（主键）|query|false|integer(int32)||
|tplCategory|使用的模板（crud单表操作 tree树表操作 sub主子表操作）,可用值:crud,sub,tree|query|false|string||
|tree||query|false|boolean||
|treeCode|树编码字段|query|false|string||
|treeName|树名称字段|query|false|string||
|treeParentCode|树父编码字段|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|表格分页数据对象（TableDataInfo）|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|消息状态码|integer(int32)|integer(int32)|
|data|data数据|object||
|msg|消息内容|string||
|pageNo|当前记录起始索引|integer(int32)|integer(int32)|
|pageSize|每页显示记录数|integer(int32)|integer(int32)|
|rows|列表数据|array||
|total|总记录数|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": "",
	"pageNo": 0,
	"pageSize": 0,
	"rows": [],
	"total": 0
}
```


## 修改代码生成业务（查询）


**接口地址**:`/sale/tool/gen/{talbleId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|talbleId|业务表主键id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 查询数据库列表


**接口地址**:`/sale/tool/gen/db/list`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|businessName|生成业务名|query|true|string||
|className|实体类名称(首字母大写)|query|true|string||
|columns[0].javaField|JAVA字段名|query|true|string||
|functionAuthor|生成作者|query|true|string||
|functionName|生成功能名|query|true|string||
|moduleName|生成模块名|query|true|string||
|packageName|生成包路径|query|true|string||
|pkColumn.javaField|JAVA字段名|query|true|string||
|tableComment|表描述|query|true|string||
|tableName|表名称|query|true|string||
|columns[0].capJavaField||query|false|string||
|columns[0].columnComment|列描述|query|false|string||
|columns[0].columnId|业务字段表编号（主键）|query|false|integer(int32)||
|columns[0].columnName|列名称|query|false|string||
|columns[0].columnType|列类型|query|false|string||
|columns[0].dictType|字典类型|query|false|string||
|columns[0].edit||query|false|boolean||
|columns[0].htmlType|显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件）,可用值:checkbox,datetime,editor,image,input,radio,select,textarea,upload|query|false|string||
|columns[0].increment||query|false|boolean||
|columns[0].insert||query|false|boolean||
|columns[0].isAsc|排序的方向descending或者ascending,可用值:ascending,descending|query|false|string||
|columns[0].isEdit|是否编辑字段（1是），不填为否|query|false|string||
|columns[0].isIncrement|是否自增（1是），不填为否|query|false|string||
|columns[0].isInsert|是否为插入字段（1是），不填为否|query|false|string||
|columns[0].isList|是否列表字段（1是），不填为否|query|false|string||
|columns[0].isPk|是否主键（1是），不填为否|query|false|string||
|columns[0].isQuery|是否查询字段（1是），不填为否|query|false|string||
|columns[0].isRequired|是否必填（1是），不填为否|query|false|string||
|columns[0].javaType|JAVA类型|query|false|string||
|columns[0].list||query|false|boolean||
|columns[0].orderBy||query|false|string||
|columns[0].orderByColumn|排序列|query|false|string||
|columns[0].pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一|query|false|integer(int32)||
|columns[0].pageNum|当前记录起始索引|query|false|integer(int32)||
|columns[0].pageSize|每页显示记录数|query|false|integer(int32)||
|columns[0].pk||query|false|boolean||
|columns[0].query||query|false|boolean||
|columns[0].queryType|查询方式（EQ等于、NE不等于、GT大于、GTE大于等于、LT小于、LTE小于等于、LIKE模糊、BETWEEN范围）,可用值:BETWEEN,EQ,GT,GTE,LIKE,LT,LTE,NE|query|false|string||
|columns[0].reasonable|分页参数合理化（仅web端使用）|query|false|boolean||
|columns[0].required||query|false|boolean||
|columns[0].sort|排序|query|false|integer(int32)||
|columns[0].superColumn||query|false|boolean||
|columns[0].tableId|归属表编号|query|false|integer(int32)||
|columns[0].usableColumn||query|false|boolean||
|crud||query|false|boolean||
|genPath|生成路径（不填默认项目路径）|query|false|string||
|genType|生成代码方式（0zip压缩包 1自定义路径）,可用值:0,1|query|false|string||
|isAsc|排序的方向descending或者ascending,可用值:ascending,descending|query|false|string||
|options|其它生成选项|query|false|string||
|orderBy||query|false|string||
|orderByColumn|排序列|query|false|string||
|pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一|query|false|integer(int32)||
|pageNum|当前记录起始索引|query|false|integer(int32)||
|pageSize|每页显示记录数|query|false|integer(int32)||
|parentMenuId|上级菜单ID字段|query|false|string||
|parentMenuName|上级菜单名称字段|query|false|string||
|pkColumn.capJavaField||query|false|string||
|pkColumn.columnComment|列描述|query|false|string||
|pkColumn.columnId|业务字段表编号（主键）|query|false|integer(int32)||
|pkColumn.columnName|列名称|query|false|string||
|pkColumn.columnType|列类型|query|false|string||
|pkColumn.dictType|字典类型|query|false|string||
|pkColumn.edit||query|false|boolean||
|pkColumn.htmlType|显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件）,可用值:checkbox,datetime,editor,image,input,radio,select,textarea,upload|query|false|string||
|pkColumn.increment||query|false|boolean||
|pkColumn.insert||query|false|boolean||
|pkColumn.isAsc|排序的方向descending或者ascending,可用值:ascending,descending|query|false|string||
|pkColumn.isEdit|是否编辑字段（1是），不填为否|query|false|string||
|pkColumn.isIncrement|是否自增（1是），不填为否|query|false|string||
|pkColumn.isInsert|是否为插入字段（1是），不填为否|query|false|string||
|pkColumn.isList|是否列表字段（1是），不填为否|query|false|string||
|pkColumn.isPk|是否主键（1是），不填为否|query|false|string||
|pkColumn.isQuery|是否查询字段（1是），不填为否|query|false|string||
|pkColumn.isRequired|是否必填（1是），不填为否|query|false|string||
|pkColumn.javaType|JAVA类型|query|false|string||
|pkColumn.list||query|false|boolean||
|pkColumn.orderBy||query|false|string||
|pkColumn.orderByColumn|排序列|query|false|string||
|pkColumn.pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一|query|false|integer(int32)||
|pkColumn.pageNum|当前记录起始索引|query|false|integer(int32)||
|pkColumn.pageSize|每页显示记录数|query|false|integer(int32)||
|pkColumn.pk||query|false|boolean||
|pkColumn.query||query|false|boolean||
|pkColumn.queryType|查询方式（EQ等于、NE不等于、GT大于、GTE大于等于、LT小于、LTE小于等于、LIKE模糊、BETWEEN范围）,可用值:BETWEEN,EQ,GT,GTE,LIKE,LT,LTE,NE|query|false|string||
|pkColumn.reasonable|分页参数合理化（仅web端使用）|query|false|boolean||
|pkColumn.required||query|false|boolean||
|pkColumn.sort|排序|query|false|integer(int32)||
|pkColumn.superColumn||query|false|boolean||
|pkColumn.tableId|归属表编号|query|false|integer(int32)||
|pkColumn.usableColumn||query|false|boolean||
|reasonable|分页参数合理化（仅web端使用）|query|false|boolean||
|sub||query|false|boolean||
|subTableFkName|本表关联父表的外键名|query|false|string||
|subTableName|关联父表的表名|query|false|string||
|tableId|业务表编号（主键）|query|false|integer(int32)||
|tplCategory|使用的模板（crud单表操作 tree树表操作 sub主子表操作）,可用值:crud,sub,tree|query|false|string||
|tree||query|false|boolean||
|treeCode|树编码字段|query|false|string||
|treeName|树名称字段|query|false|string||
|treeParentCode|树父编码字段|query|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|表格分页数据对象（TableDataInfo）|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|消息状态码|integer(int32)|integer(int32)|
|data|data数据|object||
|msg|消息内容|string||
|pageNo|当前记录起始索引|integer(int32)|integer(int32)|
|pageSize|每页显示记录数|integer(int32)|integer(int32)|
|rows|列表数据|array||
|total|总记录数|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": "",
	"pageNo": 0,
	"pageSize": 0,
	"rows": [],
	"total": 0
}
```


## 查询数据表字段列表


**接口地址**:`/sale/tool/gen/column/{talbleId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|talbleId|业务表主键id|path|true|||
|tableId|tableId|query|false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|表格分页数据对象（TableDataInfo）|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code|消息状态码|integer(int32)|integer(int32)|
|data|data数据|object||
|msg|消息内容|string||
|pageNo|当前记录起始索引|integer(int32)|integer(int32)|
|pageSize|每页显示记录数|integer(int32)|integer(int32)|
|rows|列表数据|array||
|total|总记录数|integer(int64)|integer(int64)|


**响应示例**:
```javascript
{
	"code": 0,
	"data": {},
	"msg": "",
	"pageNo": 0,
	"pageSize": 0,
	"rows": [],
	"total": 0
}
```


## 导入表结构（保存）


**接口地址**:`/sale/tool/gen/importTable`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|tables|业务表名称（多个使用英文逗号分割）|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 修改保存代码生成业务


**接口地址**:`/sale/tool/gen`


**请求方式**:`PUT`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "businessName": "",
  "className": "",
  "columns": [
    {
      "columnComment": "",
      "columnId": 0,
      "columnName": "",
      "columnType": "",
      "dictType": "",
      "htmlType": "",
      "isEdit": "",
      "isIncrement": "",
      "isInsert": "",
      "isList": "",
      "isPk": "",
      "isQuery": "",
      "isRequired": "",
      "javaField": "",
      "javaType": "",
      "pageNo": 0,
      "queryType": "",
      "sort": 0,
      "tableId": 0
    }
  ],
  "functionAuthor": "",
  "functionName": "",
  "genPath": "",
  "genType": "",
  "moduleName": "",
  "options": "",
  "packageName": "",
  "pageNo": 0,
  "parentMenuId": "",
  "parentMenuName": "",
  "pkColumn": {
    "columnComment": "",
    "columnId": 0,
    "columnName": "",
    "columnType": "",
    "dictType": "",
    "htmlType": "",
    "isEdit": "",
    "isIncrement": "",
    "isInsert": "",
    "isList": "",
    "isPk": "",
    "isQuery": "",
    "isRequired": "",
    "javaField": "",
    "javaType": "",
    "pageNo": 0,
    "queryType": "",
    "sort": 0,
    "tableId": 0
  },
  "subTable": {
    "businessName": "",
    "className": "",
    "columns": [],
    "functionAuthor": "",
    "functionName": "",
    "genPath": "",
    "genType": "",
    "moduleName": "",
    "options": "",
    "packageName": "",
    "pageNo": 0,
    "parentMenuId": "",
    "parentMenuName": "",
    "pkColumn": "",
    "subTable": "",
    "subTableFkName": "",
    "subTableName": "",
    "tableComment": "",
    "tableId": 0,
    "tableName": "",
    "tplCategory": "",
    "treeCode": "",
    "treeName": "",
    "treeParentCode": ""
  },
  "subTableFkName": "",
  "subTableName": "",
  "tableComment": "",
  "tableId": 0,
  "tableName": "",
  "tplCategory": "",
  "treeCode": "",
  "treeName": "",
  "treeParentCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|代码生成业务表实体类（GenTable）|代码生成业务表实体类|body|true|代码生成业务表实体类（GenTable）|代码生成业务表实体类（GenTable）|
|&emsp;&emsp;businessName|生成业务名||false|string||
|&emsp;&emsp;className|实体类名称(首字母大写)||false|string||
|&emsp;&emsp;columns|表列信息||false|array|代码生成业务字段表实体类（GenTableColumn）|
|&emsp;&emsp;&emsp;&emsp;columnComment|列描述||false|string||
|&emsp;&emsp;&emsp;&emsp;columnId|业务字段表编号（主键）||false|integer||
|&emsp;&emsp;&emsp;&emsp;columnName|列名称||false|string||
|&emsp;&emsp;&emsp;&emsp;columnType|列类型||false|string||
|&emsp;&emsp;&emsp;&emsp;dictType|字典类型||false|string||
|&emsp;&emsp;&emsp;&emsp;htmlType|显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件）,可用值:checkbox,datetime,editor,image,input,radio,select,textarea,upload||false|string||
|&emsp;&emsp;&emsp;&emsp;isEdit|是否编辑字段（1是），不填为否||false|string||
|&emsp;&emsp;&emsp;&emsp;isIncrement|是否自增（1是），不填为否||false|string||
|&emsp;&emsp;&emsp;&emsp;isInsert|是否为插入字段（1是），不填为否||false|string||
|&emsp;&emsp;&emsp;&emsp;isList|是否列表字段（1是），不填为否||false|string||
|&emsp;&emsp;&emsp;&emsp;isPk|是否主键（1是），不填为否||false|string||
|&emsp;&emsp;&emsp;&emsp;isQuery|是否查询字段（1是），不填为否||false|string||
|&emsp;&emsp;&emsp;&emsp;isRequired|是否必填（1是），不填为否||false|string||
|&emsp;&emsp;&emsp;&emsp;javaField|JAVA字段名||false|string||
|&emsp;&emsp;&emsp;&emsp;javaType|JAVA类型||false|string||
|&emsp;&emsp;&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer||
|&emsp;&emsp;&emsp;&emsp;queryType|查询方式（EQ等于、NE不等于、GT大于、GTE大于等于、LT小于、LTE小于等于、LIKE模糊、BETWEEN范围）,可用值:BETWEEN,EQ,GT,GTE,LIKE,LT,LTE,NE||false|string||
|&emsp;&emsp;&emsp;&emsp;sort|排序||false|integer||
|&emsp;&emsp;&emsp;&emsp;tableId|归属表编号||false|integer||
|&emsp;&emsp;functionAuthor|生成作者||false|string||
|&emsp;&emsp;functionName|生成功能名||false|string||
|&emsp;&emsp;genPath|生成路径（不填默认项目路径）||false|string||
|&emsp;&emsp;genType|生成代码方式（0zip压缩包 1自定义路径）,可用值:0,1||false|string||
|&emsp;&emsp;moduleName|生成模块名||false|string||
|&emsp;&emsp;options|其它生成选项||false|string||
|&emsp;&emsp;packageName|生成包路径||false|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;parentMenuId|上级菜单ID字段||false|string||
|&emsp;&emsp;parentMenuName|上级菜单名称字段||false|string||
|&emsp;&emsp;pkColumn|主键信息||false|代码生成业务字段表实体类（GenTableColumn）|代码生成业务字段表实体类（GenTableColumn）|
|&emsp;&emsp;&emsp;&emsp;columnComment|列描述||false|string||
|&emsp;&emsp;&emsp;&emsp;columnId|业务字段表编号（主键）||false|integer||
|&emsp;&emsp;&emsp;&emsp;columnName|列名称||false|string||
|&emsp;&emsp;&emsp;&emsp;columnType|列类型||false|string||
|&emsp;&emsp;&emsp;&emsp;dictType|字典类型||false|string||
|&emsp;&emsp;&emsp;&emsp;htmlType|显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件）,可用值:checkbox,datetime,editor,image,input,radio,select,textarea,upload||false|string||
|&emsp;&emsp;&emsp;&emsp;isEdit|是否编辑字段（1是），不填为否||false|string||
|&emsp;&emsp;&emsp;&emsp;isIncrement|是否自增（1是），不填为否||false|string||
|&emsp;&emsp;&emsp;&emsp;isInsert|是否为插入字段（1是），不填为否||false|string||
|&emsp;&emsp;&emsp;&emsp;isList|是否列表字段（1是），不填为否||false|string||
|&emsp;&emsp;&emsp;&emsp;isPk|是否主键（1是），不填为否||false|string||
|&emsp;&emsp;&emsp;&emsp;isQuery|是否查询字段（1是），不填为否||false|string||
|&emsp;&emsp;&emsp;&emsp;isRequired|是否必填（1是），不填为否||false|string||
|&emsp;&emsp;&emsp;&emsp;javaField|JAVA字段名||false|string||
|&emsp;&emsp;&emsp;&emsp;javaType|JAVA类型||false|string||
|&emsp;&emsp;&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer||
|&emsp;&emsp;&emsp;&emsp;queryType|查询方式（EQ等于、NE不等于、GT大于、GTE大于等于、LT小于、LTE小于等于、LIKE模糊、BETWEEN范围）,可用值:BETWEEN,EQ,GT,GTE,LIKE,LT,LTE,NE||false|string||
|&emsp;&emsp;&emsp;&emsp;sort|排序||false|integer||
|&emsp;&emsp;&emsp;&emsp;tableId|归属表编号||false|integer||
|&emsp;&emsp;subTable|子表信息||false|代码生成业务表实体类（GenTable）|代码生成业务表实体类（GenTable）|
|&emsp;&emsp;subTableFkName|本表关联父表的外键名||false|string||
|&emsp;&emsp;subTableName|关联父表的表名||false|string||
|&emsp;&emsp;tableComment|表描述||false|string||
|&emsp;&emsp;tableId|业务表编号（主键）||false|integer(int32)||
|&emsp;&emsp;tableName|表名称||false|string||
|&emsp;&emsp;tplCategory|使用的模板（crud单表操作 tree树表操作 sub主子表操作）,可用值:crud,sub,tree||false|string||
|&emsp;&emsp;treeCode|树编码字段||false|string||
|&emsp;&emsp;treeName|树名称字段||false|string||
|&emsp;&emsp;treeParentCode|树父编码字段||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 删除代码生成


**接口地址**:`/sale/tool/gen/{tableIds}`


**请求方式**:`DELETE`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|tableIds|业务表主键ids数组|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|204|No Content||
|401|Unauthorized||
|403|Forbidden||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 预览代码


**接口地址**:`/sale/tool/gen/preview/{tableId}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|tableId|业务表主键id|path|true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 生成代码（下载方式）


**接口地址**:`/sale/tool/gen/download/{tableName}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|tableName|业务表名称|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 生成代码（自定义路径）


**接口地址**:`/sale/tool/gen/genCode/{tableName}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|tableName|业务表名称|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 同步数据库


**接口地址**:`/sale/tool/gen/synchDb/{tableName}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|tableName|业务表名称|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 批量生成代码


**接口地址**:`/sale/tool/gen/batchGenCode`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|tables|业务表名称（多个使用英文逗号分割）|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 七牛云


## 查询七牛云上传图片的token


**接口地址**:`/sale/api/qiniu/token`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# test-controller


## test2


**接口地址**:`/sale/test2`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "address": "",
  "city": "",
  "collected": false,
  "createTime": "",
  "createUserName": "",
  "district": "",
  "id": 0,
  "image": "",
  "isLock": false,
  "isPermission": false,
  "latitude": "",
  "levels": "",
  "longitude": "",
  "name": "",
  "repaymentDate": "",
  "repaymentDays": 0,
  "repaymentStr": "",
  "returnHighSeasDays": 0,
  "returnHighSeasStr": "",
  "returnHighSeasTime": "",
  "state": "",
  "status": "",
  "type": "",
  "visitTime": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|客户Vo（UserStoreVo）|客户查询返回数据|body|true|客户Vo（UserStoreVo）|客户Vo（UserStoreVo）|
|&emsp;&emsp;address|地址||false|string||
|&emsp;&emsp;city|市||false|string||
|&emsp;&emsp;collected|是否已收藏||false|boolean||
|&emsp;&emsp;createTime|客户创建时间||false|string(date-time)||
|&emsp;&emsp;createUserName|创建人||false|string||
|&emsp;&emsp;district|区||false|string||
|&emsp;&emsp;id|主键id||false|integer(int32)||
|&emsp;&emsp;image|客户图片||false|string||
|&emsp;&emsp;isLock|是否锁机(0:否，1:是)||false|boolean||
|&emsp;&emsp;isPermission|门店信息是否有权限查看 所有客户查询界面（电话等）标签显示 || 客户详情信息||false|boolean||
|&emsp;&emsp;latitude|纬度||false|string||
|&emsp;&emsp;levels|客户分级(0:0-5家小型,1:6-20家中型,2:20家以上)||false|string||
|&emsp;&emsp;longitude|经度||false|string||
|&emsp;&emsp;name|客户名称||false|string||
|&emsp;&emsp;repaymentDate|下次还款日期||false|string(date-time)||
|&emsp;&emsp;repaymentDays|几天后还款||false|integer(int32)||
|&emsp;&emsp;repaymentStr|还款提醒时间字符串||false|string||
|&emsp;&emsp;returnHighSeasDays|几天后退回公海||false|integer(int32)||
|&emsp;&emsp;returnHighSeasStr|退回公海提醒时间字符串||false|string||
|&emsp;&emsp;returnHighSeasTime|即将退回公海时间||false|string(date-time)||
|&emsp;&emsp;state|省||false|string||
|&emsp;&emsp;status|客户状态(0:未合作,1:已领取,2:已合作,3:已终止)||false|string||
|&emsp;&emsp;type|客户类型（1:连锁  2:自营  3:加盟）||false|string||
|&emsp;&emsp;visitTime|最近一次拜访时间||false|string(date-time)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## test3


**接口地址**:`/sale/test3`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "childLotionReportDetail": [
    {
      "childLotionReportDetail": [],
      "num": 0,
      "productName": "",
      "skuName": "",
      "timeAxis": ""
    }
  ],
  "num": 0,
  "productName": "",
  "skuName": "",
  "timeAxis": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|lotionReportDetailVo|LotionReportDetailVo|body|true|LotionReportDetailVo|LotionReportDetailVo|
|&emsp;&emsp;childLotionReportDetail|时间轴下各洗剂详情||false|array|LotionReportDetailVo|
|&emsp;&emsp;num|数量||false|integer(int32)||
|&emsp;&emsp;productName|物料名称||false|string||
|&emsp;&emsp;skuName|sku名称||false|string||
|&emsp;&emsp;timeAxis|时间轴||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## test4


**接口地址**:`/sale/test4`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "averagePerMainTemp": 0,
  "averagePerPower": 0,
  "averagePerRinceTemp": 0,
  "averageWash": 0,
  "equipmentDataReportVos": [
    {
      "averagePerMainTemp": 0,
      "averagePerPower": 0,
      "averagePerRinceTemp": 0,
      "exceptRate": 0,
      "timeAxis": "",
      "todayChangeWater": 0,
      "todayExcept": 0,
      "todayPower": 0,
      "todayPowerOn": 0,
      "todayWash": 0
    }
  ],
  "exceptRate": 0,
  "exceptRateGT5Days": 0,
  "exceptRateGT5Str": [],
  "exceptRateGTEQ1AndLT5Days": 0,
  "exceptRateLT1Days": 0,
  "maxWashStr": "",
  "noChangeWaterStr": [],
  "repairInfoVos": [
    {
      "createTimeStr": "",
      "dispatchTypeStr": ""
    }
  ],
  "totalChangeWaterDays": 0,
  "totalNoChangeWaterDays": 0,
  "totalPower": 0,
  "totalWash": 0,
  "useDays": 0,
  "user": {
    "account": "",
    "accountId": "",
    "defaultImg": "",
    "deptIds": [],
    "id": 0,
    "isLogout": false,
    "isReal": false,
    "isVip": false,
    "lastVisitTime": "",
    "loginIp": "",
    "name": "",
    "openId": "",
    "pageNo": 0,
    "password": "",
    "postIds": [],
    "roleIds": [],
    "sex": 0,
    "status": 0,
    "userType": ""
  },
  "userStore": {
    "address": "管家桥65号2080室",
    "city": "南京市",
    "district": "鼓楼区",
    "id": 0,
    "image": "http://www.***.jpg",
    "isLock": false,
    "kps": "[]",
    "latitude": "118.18658",
    "levels": "0",
    "longitude": "35.128",
    "name": "小菜园",
    "pageNo": 0,
    "personChange": "张三",
    "personPhone": "15851817747",
    "state": "江苏省",
    "status": "",
    "type": "1"
  }
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|客户报表返回数据（StoreReportVo）|客户报表返回数据|body|true|客户报表返回数据（StoreReportVo）|客户报表返回数据（StoreReportVo）|
|&emsp;&emsp;averagePerMainTemp|||false|number(double)||
|&emsp;&emsp;averagePerPower|平均每筐耗电||false|number(bigdecimal)||
|&emsp;&emsp;averagePerRinceTemp|||false|number(double)||
|&emsp;&emsp;averageWash|平均洗涤框数||false|number(double)||
|&emsp;&emsp;equipmentDataReportVos|设备运行数据||false|array|设备运行报表数据(EquipmentDataReportVo)|
|&emsp;&emsp;&emsp;&emsp;averagePerMainTemp|平均主洗温度||false|integer||
|&emsp;&emsp;&emsp;&emsp;averagePerPower|平均每筐耗电||false|number||
|&emsp;&emsp;&emsp;&emsp;averagePerRinceTemp|平均漂洗温度||false|integer||
|&emsp;&emsp;&emsp;&emsp;exceptRate|揭盖率||false|number||
|&emsp;&emsp;&emsp;&emsp;timeAxis|最后推送时间||false|string||
|&emsp;&emsp;&emsp;&emsp;todayChangeWater|今日换水次数||false|integer||
|&emsp;&emsp;&emsp;&emsp;todayExcept|今日中途揭盖||false|integer||
|&emsp;&emsp;&emsp;&emsp;todayPower|今日耗电||false|number||
|&emsp;&emsp;&emsp;&emsp;todayPowerOn|今日开机时长||false|number||
|&emsp;&emsp;&emsp;&emsp;todayWash|今日清洗框数||false|integer||
|&emsp;&emsp;exceptRate|揭盖率(中途揭盖率)||false|number(bigdecimal)||
|&emsp;&emsp;exceptRateGT5Days|揭盖率大于5%天数||false|integer(int32)||
|&emsp;&emsp;exceptRateGT5Str|揭盖率大于5%日期||false|array|string|
|&emsp;&emsp;exceptRateGTEQ1AndLT5Days|揭盖率大于等于1%小于5%天数||false|integer(int32)||
|&emsp;&emsp;exceptRateLT1Days|揭盖率小于1%天数||false|integer(int32)||
|&emsp;&emsp;maxWashStr|洗涤峰值字符串||false|string||
|&emsp;&emsp;noChangeWaterStr|未按流程换水日期||false|array|string|
|&emsp;&emsp;repairInfoVos|工单||false|array|客户工单报表返回数据（WorkOrderReportDetailVo）|
|&emsp;&emsp;&emsp;&emsp;createTimeStr|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;dispatchTypeStr|工单类型中文||false|string||
|&emsp;&emsp;totalChangeWaterDays|换水天数||false|integer(int32)||
|&emsp;&emsp;totalNoChangeWaterDays|未按流程换水天数||false|integer(int32)||
|&emsp;&emsp;totalPower|总耗电量||false|number(bigdecimal)||
|&emsp;&emsp;totalWash|总洗涤框数||false|integer(int32)||
|&emsp;&emsp;useDays|平均洗涤框数||false|integer(int32)||
|&emsp;&emsp;user|维护销售人员信息||false|用户实体类（User）|用户实体类（User）|
|&emsp;&emsp;&emsp;&emsp;account|用户账号||true|string||
|&emsp;&emsp;&emsp;&emsp;accountId|e签宝用户的accountId||false|string||
|&emsp;&emsp;&emsp;&emsp;defaultImg|图像||false|string||
|&emsp;&emsp;&emsp;&emsp;deptIds|部门id数组||false|array|integer|
|&emsp;&emsp;&emsp;&emsp;id|用户主键id||false|integer||
|&emsp;&emsp;&emsp;&emsp;isLogout|是否注销(true,false)||false|boolean||
|&emsp;&emsp;&emsp;&emsp;isReal|是否实名认证(true,false)||false|boolean||
|&emsp;&emsp;&emsp;&emsp;isVip|是否vip(true,false)||false|boolean||
|&emsp;&emsp;&emsp;&emsp;lastVisitTime|最后登录时间||false|string||
|&emsp;&emsp;&emsp;&emsp;loginIp|最后登录IP||false|string||
|&emsp;&emsp;&emsp;&emsp;name|用户姓名||false|string||
|&emsp;&emsp;&emsp;&emsp;openId|微信openId||false|string||
|&emsp;&emsp;&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer||
|&emsp;&emsp;&emsp;&emsp;password|||false|string||
|&emsp;&emsp;&emsp;&emsp;postIds|岗位id数组||false|array|integer|
|&emsp;&emsp;&emsp;&emsp;roleIds|角色id数组||false|array|integer|
|&emsp;&emsp;&emsp;&emsp;sex|性别(0=男,1=女,2=未知),可用值:0,1,2||false|integer||
|&emsp;&emsp;&emsp;&emsp;status|性别(0=正常,1=停用),可用值:0,1||false|integer||
|&emsp;&emsp;&emsp;&emsp;userType|用户类型（0：普通用户;1:维修人员-内部;2：维修人员-外部;3:管理员;4:销售人员）,可用值:0,1,2,3,4||true|string||
|&emsp;&emsp;userStore|客户信息||false|客户实体类（UserStore）|客户实体类（UserStore）|
|&emsp;&emsp;&emsp;&emsp;address|详细地址||true|string||
|&emsp;&emsp;&emsp;&emsp;city|市||true|string||
|&emsp;&emsp;&emsp;&emsp;district|区||true|string||
|&emsp;&emsp;&emsp;&emsp;id|客户门店主键id||false|integer||
|&emsp;&emsp;&emsp;&emsp;image|客户图片||true|string||
|&emsp;&emsp;&emsp;&emsp;isLock|是否锁机||false|boolean||
|&emsp;&emsp;&emsp;&emsp;kps|kp电话列表||true|array|KP实体类|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|KP主键id||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;name|KP名字||true|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;phone|KP联系方式||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;storeId|客户的ID||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|KP职位||true|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;wechat|KP联系方式||false|string||
|&emsp;&emsp;&emsp;&emsp;latitude|纬度||true|string||
|&emsp;&emsp;&emsp;&emsp;levels|客户分级(0:0-5家小型,1:6-20家中型,2:20家以上),可用值:0,1,2||true|string||
|&emsp;&emsp;&emsp;&emsp;longitude|经度||true|string||
|&emsp;&emsp;&emsp;&emsp;name|客户名称||true|string||
|&emsp;&emsp;&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer||
|&emsp;&emsp;&emsp;&emsp;personChange|联系人||false|string||
|&emsp;&emsp;&emsp;&emsp;personPhone|联系人电话||false|string||
|&emsp;&emsp;&emsp;&emsp;state|省||true|string||
|&emsp;&emsp;&emsp;&emsp;status|状态(0:未合作,1:已领取,2:已合作,3:已到期),可用值:0,1,2,3||false|string||
|&emsp;&emsp;&emsp;&emsp;type|客户类型（1:连锁 2:自营 3:加盟）,可用值:1,2,3||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 意见反馈


## 新增意见反馈


**接口地址**:`/sale/api/feedback/add`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "contact": "15851817747",
  "content": "问题详情",
  "id": 0,
  "imags": "问题图片",
  "pageNo": 0,
  "source": 1,
  "type": 1
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|意见反馈（Feedback）|意见反馈|body|true|意见反馈（Feedback）|意见反馈（Feedback）|
|&emsp;&emsp;contact|联系方式||false|string||
|&emsp;&emsp;content|反馈的内容||true|string||
|&emsp;&emsp;id|主键id||false|integer(int32)||
|&emsp;&emsp;imags|问题图片||false|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;source|来源1厨房2维修3CRM,可用值:1||true|integer(int32)||
|&emsp;&emsp;type|类型(1：功能异常，2：产品建议，3：其他问题),可用值:1||true|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 操作记录


## 查询操作记录列表


**接口地址**:`/sale/api/adminLog/list`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
  "sourceId": 0,
  "type": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|操作记录实体类（AdminLog）|操作记录实体类|body|true|操作记录实体类（AdminLog）|操作记录实体类（AdminLog）|
|&emsp;&emsp;avatar|操作者的头像||false|string||
|&emsp;&emsp;content|操作内容||false|string||
|&emsp;&emsp;id|操作记录主键id||false|integer(int32)||
|&emsp;&emsp;nickName|操作者的昵称||false|string||
|&emsp;&emsp;pageNo|当前记录起始索引，兼容原项目，与pageNum属性2选一||false|integer(int32)||
|&emsp;&emsp;sourceId|原始记录的ID||false|integer(int32)||
|&emsp;&emsp;subType|子类型(1领取客户 2释放客户 3添加拜访 4添加KP 5转交 6编辑),可用值:1,2,3,4,5,6||false|integer(int32)||
|&emsp;&emsp;targetId|目标ID(跳转的ID)||false|integer(int32)||
|&emsp;&emsp;type|类型(1洗剂 2维修单 3设备 4订单 5客户),可用值:1,2,3,4,5||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```