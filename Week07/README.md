# 第七周
## 运算符和表达式
### 注：实际上 优先级，本质是通过产生式来判别
#### 优先级依次下降：
- Member
	- a.b
	- a[b]
	- foo 'string'
	- super.b
	- super['b']
	- new.target
	- new Foo()
- New
	- new.Foo
- Call
	- foo()
	- super()
	- foo()['b']
	- foo().b
	- foo()'abc'
- Update
	- a++
	- a--
	- --a
	- ++a
- Unary
	- delete a.b
	- void foo()
	- typeof a
	- +a
	- -a
	- ~a
	- !a
	- await a
- Exponental
	- **(注：这是js中唯一的右结合)
- Multplicarive
	-  \*
	- \
	- %
- Additive
	- \+
	- \-
- shift
	- <<
	- \>>
	- \>>>
- Relationship
	- <
	- \>
	- <=
	- \>=
	- instanceof
	- in
- Equality
	- ==
	- !=
	- ===
	- !==
- Bitwise
	- &
	- ^
	- |
- Logical
	- &&
	- ||
- Conditional
	- ?

### 类型转换
#### 拆箱转换
toString()  valueof()
注：若为null或undefined 则返回字面量
#### 装箱转换
把基本类型转换为对应的对象

#### 简单语句
- ExpressionStatement （表达式语句）
- EmptyStatement （空语句）
- DebuggerStatement （debugger关键字）
- ThrowStatement （抛出异常）
- ContinueStatement （continue语句）
- BreakStatement （break语句）
- ReturnStatement（return语句）
#### 复合语句
- BlockStatement （{}块语句）
- IfStatement（if语句）
- SwitchStatement（Switch语句）
- IterationStatement（for、forawait、while、do while、for in、for of）
- WithStatement（with语句，不推荐使用）
- LabelledStatement（label 与break、continue配合使用）
- TryStatement（try{ }catch(){  }finally{  }）注：try语句里面即使有return，catch到了，也会执行finally中的语句
#### 声明
- FunctionDeclaration （function）
- GeneratorDeclaration (function*)
- AsyncDeclaration (async function)
- AsyncGeneratorDeclaration (async function *)
- VariableStatement (变量声明 var)
- ClassDeclaration (class)
- LexicalDeclaration (const let)
- 注： class，const，let 这三个声明   在声明前使用会报错，其他声明不在乎前后
- 因为：JS引擎的预处理机制， 所有声明都是有预处理机制的，都会吧变量变成局部变量，但是 calss，const，let声明前就使用会报错

#### 作用域

#### 结构化
- 宏任务 （传给JS引擎的任务）
- 微任务 （Js引擎内部的任务，Promise）
- 函数调用（ExecutionContext）
- 语句/声明 （Completion Record）
- 表达式
- 直接量/变量/this 。。。


