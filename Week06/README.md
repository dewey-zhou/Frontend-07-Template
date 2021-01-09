#  第六周总结
## 1.语言分类分：非形式语言、形式语言
####     非形式语言语法没有严格定义；形式语言有一个形式化定义
#### 形式的分类（乔姆斯基谱系）：
1. 0型  无限制文法 ===> 包括所有文法
2. 1型 上下相关文法 ===> 生成上下相关语言
3. 2型 上下无关文法 ===> 生成上下无关语言 
4. 3型 正则文法 ===> 生成正则语言

## 2.产生式（BNF）：
#### 用尖括号 括起来的名称来表示语法结构名
#### 语法结构分成基础结构和需要用其他语言结构定义的复合结构
基础结构称为终结符（terminal Symbol）   复合结构称为非终结符（noterminal Symbol） 
引号和中间的字符 也表示为终结符  
可以使用括号，*（表示重复多次），|（表示或），+（表示至少一次）  

四则运算产生式：见 产生式练习.md  

## 3.类型系统：动态类型系统，静态类型系统
#### 动态类型系统（JavaScript）：用到什么，规定什么类型
#### 静态类型系统（C++）：在用之前，就规定好什么类型
## 4.强类型和弱类型
#### 强类型：类型转化不会默认发生，对应着静态语言，在编译时变量的数据类型即可确定
#### 弱类型：类型转化会默认发生，对应着是动态语言，在运行时才确定数据类型

## 5.Number （Double float）
使用IEEE754格式来表示整数和浮点数值,用64位二进制表示（1个符号位，11个指数位，52个精度位）
#### Number-->Grammer
Decimal Literal 十进制  0；0.；.0;1le3
Binary Integer Literal 二进制 以0b开头  0b111
Octall Integer Literal 八进制 以0o开头 0o10
Hex Integer Literal 十六进制 以0x开头 0xFF
#### Number 类型数值存储机制
把浮点数转换为对应的二进制数，并用科学计数法表示，把转换之后的数通过IEEE754标准表示成真正会在计算机存储的值
##### 所以，有关0.1+0.2！=0.3
因为Number为64位双精度浮点型，存储于计算机中会先将数字转化成二进制，而0.1和0.2转成二进制为一个无限循环的数，由于只能存储最多53位有效数字，所以必须进行舍入，从而造成精度丢失导致不等于0.3
#### 数值范围
-Infinity~Infinity （5e-324 ---- 1.797693148623157e+308）  
-  判断数值是有穷还是无穷可使用isFinite()函数

#### NaN
非数值，是一个特殊的数值
- isNaN()函数可以判断是否不是数值

#### 数值转换
- Number() ：可以用于任何数据类型
- parseInt() ：专门用于把字符串转换成整数
- parseFloat() ：专门用来把字符串转换成数值（可以有小数）
## 6.String
字符串通过字符（character）、码点（codePoint）、编码方式（encoding）组成的

#### 字符集
- ASCII  只规定了127个字符（a-z；A-Z；0-9；各种制表符，控制符）
- Unicode 联合的编码集 （包含各国的文字）
- UCS ：0000-FFFF
- GB ：GB2312    、GBK（GB13000）、GB18030 （注：GB与Unicode字符码点不一致，对应不一致会出现乱码情况）
- ISO-8859 ：欧洲使用的
- BIG5：台湾使用的
#### 字符字面量
- \n：换行
- \t：制表
- \b:空格
- \r：回车
- \f：进纸
- \\：斜杠
- \xnn：以十六进制代码nn表示的一个字符，比如：\x41表示A
- \unnn：以十六进制代码nnnn表示一个Unicode字符
#### 字符串 是不可变的
发生改变其实是先删除再填充新的进去
#### 转换为字符串
- toString()：数值、布尔值、对象和字符串值时用这个方法，null和undefined没有这个方法
- string()：当不确定转换的值是不是null或undefined的情况下，用这个方法，如果不是这两种，则string()会调用toString()方法，如果是这两种，则会返回他们的字面量
#### 书写字符串三种方式
- "  "
- ' '
- \` `

## Boolean
- true
- false
## Null和undefined
Null：属于关键字；定义了，值为空
undefined：属于全局变量；未定义（一般用void 0 来表示undefined）
## Object
任何一个对象都是唯一的，与它本身的状态无关
即使状态完全一致的两个对象，也并不相等   

用状态来描述对象；状态的改变即是行为  

Object有三个方面组成：state（状态）、behavior（行为）、identifier（标识）

### Class 类 是一种常见的描述对象的方式
- 归类：提取共性，变成类，可有多个类，多继承结构
- 分类：属于从属关系，单继承结构
#### JavaScript 利用原型prototype来进行分类  
任何对象仅仅需要描述它自己与原型的区别即可  
对象的行为必须是改变对象状态的

#### JS中的Object两个要素：property；属性  
唯一标识用内存地址的唯一性来表示
#### property   
对象的原型机制：如果对象属性没有，则会沿着原型的向上指向，一直找下去，直到找到或者原型为Null 

#### 属性   
即可以描述状态，也可以描述行为  
key，value对
key：两种类型：String，symbol（symbol可以很好的实现了属性访问的权限控制）
value：两种形态：
- 数据属性：用于描述状态；有value，writable，enunmerable，configurable
- 访问器属性：用于描述行为；有get，set，enumerable，configurable
### Grammer
- ()，[]，Object.defineProperty
- Object.create /Object.setPrototypeOf/Object.getPrototypeOf
- new /class /extends
- new /function /prototype
具体内容见 Dewey前端.xmind


