# 组件化

## 基本概念
#### 区别于模块，也区别于对象 ，但也是一种特殊的模块，特殊的对象，即是对象，也是模块

## 特点
#### 以树形结构进行组合，有模板化配置的能力

## 组件成分
    - Properties
    - Methods
    - Inherit
    - Attribute
    - Config & State
    - Event
    - Lifcycle
    -children
## Attribute 与Property
### Attribute强调描述性，而Property强调从属关系
#### 若Property没有设置，则Property=attribute
#### 当value属性发生改变时，attribute不变property会变


## 如何设计组件状态
|Markup set   |	JS set| 	js change| 	User Input Change | |
| --------   | -----:  | :----: |  :-----:  | ----: | 
|X  | O |	O 	|? |	property|   
|O 	|O 	|O 	|? 	|attribute|   
|X 	|X 	|X 	|O 	|state |  
|X 	|O 	|X |	X 	|config |  


## 组件的生命周期
 见图：Lifecycle.png

 
