# 五周课程总结

## 三子棋

1. 利用document来创建棋盘和棋子，布局利用inline-block来实现3*3布局  
2. 实现判断胜负功能，就是判断连续三个不同方向是否存在同一个子
3. 实现预判胜负功能，原理是复制当前的棋盘，遍历没有子的点下一个，再判断胜负，从而实现预判
4. 实现AI功能：原理利用递归算法，不断的递归判断，取出最好的结果，对面最坏的结果就是我们最好的结果

## 红绿灯

1. callback方式
2. Promise方式
3. async/await方式

## 寻路问题  

1. 地图：利用画三子棋的思想来实现
2. 画地图：利用鼠标事件
3. 寻路：利用广度优先搜索来遍历寻找
4. 优化：启发式，利用当前点在广度基础上，针对与终点的直线距离来进行排序，优先进行距离短的点
5. 再优化：A* ，在启发式的基础上，计算距离终点的距离的同时，规定好上下左右斜八个方向对应的距离值，而未走过的则设为infinity，然后给每个点打好距离标签，当点的下一步a点所统计的距离比a点原先就有的标签距离要大时，则不走这一步  

## LL算法构建AST|四则运算

1. LL算法：是从左向右扫描的
2. AST：抽象语法树
3. LL算法来构建AST：   
   * 词法分析：这里用正则表达式来处理，分别将数字，加减乘除，空格给筛选出来，再将空格剔除，给其他的分好类
   * 语法分析：

```javaScript

<Expression>::= //这里是只有一种可能以EOF为终止符
    <AdditiveExpression><EOF>
//~~~~~~~~~~~~~~~~~~~~~~~~~~~
<AdditiveExpression>::= //这里是有三种可能，一种是乘法表达式，一种加法，一种减法
    <MultiplicationExpression>
    <AdditiveExpression><+><MultiplicationExpression>
    <AdditiveExpression><-><MultiplicationExpression>
//~~~~~~~~~~~~~~~~~~~~~~~~~~~
<MultiplicationExpression>::= //这里也是有三种可能，一种是数字，一种乘法，一种除法
    <Number> //我们把数字归为乘法这块
    <MultiplicationExpression><*><Number>
    <MultiplicationExpression><*><Number>
//所有的表达式都是从Expression开始，然后不断的嵌套，递归，循环

```

## Trie

在很多字符串中，找到重复的字符串，可找重复最少的或者最多的 也可指定重复次数，主要用在大量高重复字符串的存储与分析

## KMP算法

在长字符串中找到是否包括短字符串  
代码逻辑简单，主要是理解它的原理，而原理中最重要的就是搞清table（PMT部分匹配表）

## wildcard 

1. 介绍：*：可充当长度大于等于0的任一字符串；？：可充当任一字符串  

2. 算法分析：整个字符串可以拆分成三部分：第一个\*号之前的字符串；第一个\*号之后和最后一个\*号之前；最后一个\*号之后  

   - 第一个\*号之前，进行遍历匹配  

   - 第一个\*号之后和最后一个\*号之前，将其以\*号拆分成字符串再进行匹配（这里可以用正则匹配也可以用kmp算法进行匹配）  

   - 最后一个\*号之后，进行遍历匹配 ，这里要注意 由于\*号是充当任意长度的字符串，所以需要匹配的是目标字符的最后几个字符是否和模板字符的最好几个字符是否相等  

## Proxy

用于创建一个对象的代理，从而实现基本操作的拦截和自定义  
```javaScript
const p = new Proxy(target, handler)
```
参数  
target  
要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。  
handler  
一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。  

## Proxy 实现vue中的reactive

1. vue中的reactive：其实就是双向绑定中的一个单向绑定  
双向绑定：通过dom元素来改变数据，这个可以直接通过dom操作来实现；另一个，则就是reactive，通过数据来该表dom元素  
2. 实现步骤：
   - 构建一个Proxy代理
   - 在proxy中set里操作数据具体更新形式

3. 优化：
   - 封装成reactive函数
   - 因为需要进行一些操作处理，所以将具体的操作处理以回调函数的形式输入，这样只需收集这些callback再调用就行了
   - 但是由于 针对的数据不一样，不同数据可能有用不到的回调函数，那一味的收集后全部调用，就有点不够优化，所以里map来对不同数据收集它们有关联的callback即可，然后调用就根据数据来具体调用
4. 利用proxy实现reactive，从而实现数据与dom之间的双向绑定，实现调色器功能

## 在正常流里拖拽

1. 单独拖拽： 主要就是利用鼠标事件，来获取鼠标的x和y的坐标，然后再通过移动改变xy从而也改变div的位置
2. 在正常流中拖拽：首先先了解下range，这个东西是web接口下的一个api，用来表示一个包含节点与文本节点的一部分的文档片段，通过range来获取div中各个文本之间的位置（x，y），之后就通过鼠标拖拽，根据鼠标的位置来与各个文本的位置进行比较，得到最近的节点，再插入即可。
