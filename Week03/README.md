# 学习笔记

# 使用LL算法构建AST
分两部分：第一部分是词法分析 ，这里用到正则表达式以及正则表达式里面的实例方法：.exec() （它这里有个性质：会将上次成功匹配到的位置记录在lastIndex属性中，这样 可以对单个字符串中的多次匹配结果进行逐条的遍历）之后  再将表达式  按照正则标准来筛选出需要的词法
第二部分是语法分析，个人觉得这是重中之中，需要分析出整个语法结构。这里四则运算的话，老师已经给我们分析好了，听是听明白了，也理解了各个expression对应的可能，但是感觉一个人想出这种语法结构估计够呛；
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
//所有的表达式都是从Expression开始，然后不断的嵌套，递归，循环，
```
理解了下面的语法定义，敲代码其实就是实现递归就行了

#  脑图更新
更新了正则表达式的相关内容

# 算法方面
去了解了二叉树，二叉搜索树，二叉堆，还有递归 对应着做了力扣题