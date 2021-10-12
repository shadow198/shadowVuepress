# 数据库

## 数据库设计三大范式
1. 1NF是对属性的原子性，要求属性具有原子性，不可再分解；
2. 2NF是对记录的唯一性，要求记录有唯一标识，即实体的唯一性，即不存在部分依赖；
3. 3NF是对字段的冗余性，要求任何字段不能由其他字段派生出来，它要求字段没有冗余，即不存在传递依赖；

## SQL

### 关系模型

#### 主键
> 对于关系表，有个很重要的约束，就是任意两条记录不能重复。不能重复不是指两条记录不完全相同，而是指能够通过某个字段唯一区分出不同的记录，这个字段被称为主键。

##### 主键类型
1. 自增整数类型：数据库会在插入数据时自动为每一条记录分配一个自增整数，这样我们就完全不用担心主键重复，也不用自己预先生成主键；

2. 全局唯一GUID类型：使用一种全局唯一的字符串作为主键，类似8f55d96b-8acc-4636-8cb8-76bf8abc2f57。GUID算法通过网卡MAC地址、时间戳和随机数保证任意计算机在任意时间生成的字符串都是不同的，大部分编程语言都内置了GUID算法，可以自己预算出主键。

#### 外键

#### 索引


### 查询数据

#### 基本查询
```
SELECT * FROM students;
```

#### 条件查询
```
SELECT * FROM students WHERE score >= 80;
```

#### 投影查询
```
SELECT id, score, name FROM students;
```

#### 排序
```
SELECT id, name, gender, score FROM students ORDER BY score DESC;
```

#### 分页查询
```
SELECT id, name, gender, score
FROM students
ORDER BY score DESC
LIMIT 3 OFFSET 0;
```

#### 聚合查询
```
SELECT COUNT(*) num FROM students;
```

#### 多表查询
```
SELECT
    students.id sid,
    students.name,
    students.gender,
    students.score,
    classes.id cid,
    classes.name cname
FROM students, classes;
```

#### 连接查询

> 连接查询是另一种类型的多表查询。连接查询对多个表进行JOIN运算，简单地说，就是先确定一个主表作为结果集，然后，把其他表的行有选择性地“连接”在主表结果集上。

```
SELECT s.id, s.name, s.class_id, c.name class_name, s.gender, s.score
FROM students s
INNER JOIN classes c
ON s.class_id = c.id;
```

### 修改数据

#### INSERT
```
INSERT INTO students (class_id, name, gender, score) VALUES (2, '大牛', 'M', 80);
```

#### UPDATE
> 语法 UPDATE <表名> SET 字段1=值1, 字段2=值2, ... WHERE ...;
```
UPDATE students SET name='大牛', score=66 WHERE id=1;
```

#### DELETE
> 语法: DELETE FROM <表名> WHERE ...;
```
DELETE FROM students WHERE id=1;
```

##  MySQL



##  MongoDB

## SQLite