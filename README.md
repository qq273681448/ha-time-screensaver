# Home Assistant Time Screensaver

基本设置 https://www.bilibili.com/video/BV1JTwfecEUn

进阶设置 https://www.bilibili.com/video/BV1wJ9SYQEHY

人来亮屏 https://www.bilibili.com/video/BV1Dao8YQEgx

控制平板屏保消失 https://v.douyin.com/61W-XwoV1UE/ 

【独立控制】设备关闭屏保 https://www.douyin.com/user/self?modal_id=7504318857876639033

这是一个Home Assistant的HACS前端插件，用于在Home Assistant界面上添加屏保功能。

![alt text](img/image.png)
## 安装
### 方法1
1. 首先确保已安装HACS
2. 在HACS中添加自定义仓库https://github.com/qq273681448/ha-time-screensaver
3. 搜索"TimeScreensaver"并安装
4. 刷新页面
### 方法2【暂不支持】
1. 搜索"Time Screensaver"并安装
2. 刷新页面

## 更新日志
### 2025-05-07
  1. 修复url上screenTime参数在平板手机不生效
  1. 修正url上allPage=0参数逻辑
  1. 支持独立控制设备，url上新增参数screenId=a，则设备id为a，辅助元素为input_button.screen_saver_bt_a
  1. 其他bug优化

### 2025.03.26
1. 增加修改屏保时间立即生效
2. 支持让屏保消失（新增辅助元素：按钮screen_saver_bt）点击即消失
3. 支持独立控制单设备

### 2025.03.04
1. 支持在设备实体里直接修改屏保时间（新增辅助元素：数值screen_saver_timeout）
2. 优化allPage控制所有页面显示屏保逻辑
3. F12新增提示屏保涉及页面及秒数。“所有页面 屏保时间: 10 秒。”
4. 修复ipad等触摸设备点击不消失bug

## URL上参数配置
### screenTime 参数
自动进入屏保时间（秒，默认60秒）

screenTime=-1 时，屏保程序完全不会启动

例如：

?screenTime=-1 - 不启动屏保

?screenTime=5 - 5秒后启动屏保

#### 还可以通过辅助元素控制
![Alt text](img/image2.png)

#### 优先级：url参数>辅助元素

### allPage 参数


当 allPage=0 时：

只在 /lovelace 路径下显示屏保，其他路径下会禁用屏保

当 allPage 不为 0 或不存在时：

屏保会在所有路径下正常工作

例如：
?allPage=0 - 只在 /lovelace 路径下显示屏保
?allPage=1 - 在所有路径下显示屏保
