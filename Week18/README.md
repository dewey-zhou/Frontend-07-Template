## 工具链
## 测试框架：mocha
### 使用 mocha 进行功能测试

## 基础使用

进入要进行测试的项目，npm 应该已经进行过初始化了。

**安装 mocha：**
```
npm install -g mocha//全局安装
```

```
npm install --save-dev mocha
```

**修改 package.json ：**

添加测试指令

```json
{
  "scripts": {
    "test": "mocha"
  }
}
```

**添加测试文件：**

同时，在项目中新建 **test** 文件夹，文件夹下创建 **test.js** 文件：

```js
// 引入测试工具库
const assert = require('assert')

// 需要测试的文件
     add = function add(a, b) {
  return a + b
}

// 导入需要测试的文件，建立一个简单的测试方法
it('简单加法测试', () => {
  assert.equal(add(1, 3), 4)
})

// 成组的进行测试
describe('计算测试组', () => {
  it('加法测试 1 + 3', () => {
    assert.equal(add(1, 3), 4)
  })
  it('加法测试 2 + 3', () => {
    assert.equal(add(2, 3), 5)
  })
})
```

**执行测试：**

```sh
npm run test
```

控制台输出如下：

```
  ✓ 简单加法测试
  计算测试组
    ✓ 加法测试 1 + 3
    ✓ 加法测试 2 + 3


  3 passing (11ms)
```


## 使用 babel

### 安装babel
```
    npm install @babel/core @babel/cli
```
要进行测试的项目，可能是 node 项目也可能是前端项目，很有可能已经使用了 babel，现在需要让 mocha 也能正常支持 babel。

需要下面两个依赖，可能已经安装配置过了，要注意。

```sh
npm install --save-dev @babel/preset-env @babel/register
```

**添加或修改 .babelrc：**


```js
{
  "presets": ["@babel/preset-env"]
}
```

**修改 package.json ：**

添加测试指令

```json
{
  "scripts": {
    "test": "mocha --require @babel/register"
  }
}
```

然后，就可以使用 ES6 的 import 等语法了。

## 添加测试覆盖率检测工具

覆盖率检测工具（code coverage）可以告诉我们测试的覆盖率，这里使用的是 **istanbul/nyc**。

**安装：**

```sh
npm install --save-dev nyc
```

### 如果没有使用 babel 工具

**修改 package.json 的测试指令：**

```json
{
  "scripts": {
    "coverage": "nyc mocha"
  }
}
```

然后需要修改 **test/test.js**  文件：

```js
const assert = require('assert')
const add = require('../src/compute.js').add

it('简单加法测试', () => {
  assert.equal(add(1, 3), 4)
})

describe('计算测试组', () => {
  it('加法测试 1 + 3', () => {
    assert.equal(add(1, 3), 4)
  })
  it('加法测试 2 + 3', () => {
    assert.equal(add(2, 3), 5)
  })
})
```

这里我们把要测试的方法移到外部了，需要创建 **compute.js** 文件：

```js
exports.add = function add(a, b) {
  return a + b
}

exports.mul = function mul(a, b) {
  return a * b
}
```

再执行测试指令npm run coverage，输出如下：

```sh
  ✓ 简单加法测试
  计算测试组
    ✓ 加法测试 1 + 3
    ✓ 加法测试 2 + 3


  3 passing (8ms)

------------|---------|----------|---------|---------|-------------------
File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------|---------|----------|---------|---------|-------------------
All files   |      75 |      100 |      50 |      75 |                   
 compute.js |      75 |      100 |      50 |      75 | 6                 
------------|---------|----------|---------|---------|-------------------
```

它会多输出一个表格，告诉我们覆盖率情况。

### 如果使用了 babel 工具

使用了 babel，再已经配置了 mocha 支持 babel 的基础上：

- 给 babel 安装一个支持 nyc 的插件
- 给 nyc 安装一个支持 babel 的插件

#### 配置 babel

**给 babel 安装一个支持 nyc 的插件：**

```sh
npm install --save-dev babel-plugin-istanbul
```

**配置 .babelrc：**

保留原先配置的同时，**添加** 如下插件：

```json
{
    
  "presets": ["@babel/preset-env"],
  "plugins": ["istanbul"]
}
```

#### 配置 nyc

**给 nyc 安装一个支持 babel 的插件：**

```sh
npm install --save-dev @istanbuljs/nyc-config-babel
```

**添加 .nycrc 文件：**

```json
{
  "extends": "@istanbuljs/nyc-config-babel"
}
```
### 覆盖测试：
    - 一般要求Funcs达到100%
    - Lines达到90%


