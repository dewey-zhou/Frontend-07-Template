# 找出Javascript标准里面所有具有特殊行为的对象  

Array：Array的length属性会根据最大的下标发生自动变化

Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了

String：为了支持下标运算，String的正整数访问回去字符串里面查找

Arguments：arguments的非负整数型下标属性跟对应的变量联动

模块化的namespace对象：特殊的地方非常多，跟一般对象完全不一样，建议不使用，尽量用import

类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊

bind后的function：跟原来的函数相关联
