# 操作系统

## shell

### shebang(指定解释器)
1. #! /usr/bin/bash
2. #!/ usr/bin/python
3. #! /user/evn

### 注释
1. # 注释
  
### 执行脚本的方式
1. bash shell（推荐）
2. 相对/绝对路径执行脚本，需要文件含有x权限、
3. source
4. sh < script.sh

### shell与运维
1. 基础命令
2. 存储服务
3. 定时任务
4. Zabbix监控
5. 虚拟化服务
6. 云计算服务
7. Linux系统服务
8. Django服务
9. Python服务
10. Nginx服务

### bash

#### 基本概念
1. bash是一个命令处理器，运行在文本窗口中，并能执行用户直接输入的命令
2. bash还能从文件中读取linux命令，称之为脚本
3. bash支持通配符、管道、命令替换、条件判断、循环等功能

#### 历史记录
1. echo $HISTSIZE
2. echo $HISTFILE
3. /root/.bash_history
4. history -c(clear)
5. history -r(reload-恢复)
6. !!(last command-执行最后一条命令)

#### 特性汇总
1. 文件路径tab键
2. 命令补全
3. 快捷键ctrl+ a,e,u,k,l
4. 通配符
5. 命令历史
6. 历史别名
7. 命令行展开 

#### 变量含义

##### 变量命名规则
  1. 中间不能有空格、
  2. 只能包含字母、数字、下划线
  3. 严格命名区分大小写

##### 变量的作用域