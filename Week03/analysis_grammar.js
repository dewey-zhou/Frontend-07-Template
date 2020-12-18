var regexp = /([0-9\.]+)|([ \t]+)|([\r\n]+)|(\*)|(\/)|(\+)|(\-)/g
var dictionary = ["Number","Whitespace","LineTerminator","*","/","+","-"]

function* tokenize(source){
    var result = null
    var lastIndex = null
    while(true){
        lastIndex = regexp.lastIndex
        result = regexp.exec(source)//.exec()返回一个数组(数组是根据（）捕获来确认元素的这里捕获七个括号，所以数组长度为7，然后再依次匹配属于这七种的哪种)，并更新正则表达式对象的lastIndex属性
        if(!result) break
        if(regexp.lastIndex-lastIndex>result[0].length)break//比较这次匹配的长度是否和捕获的长度一致
        let token={
            type:null,
            value:null
        }

        for(var i=1;i<=dictionary.length;i++){
            if(result[i])
                token.type = dictionary[i-1]  
        }
        token.value = result[0]
        yield token
    }
    yield{
        type:"EOF"
    }
}
let source =[]
// console.log(tokenize("1024 + 10 * 25"))
for(let token of tokenize("1024 + 10 * 25")){
    if(token.type !=="Whitespace"&&token.type!=="LineTerminator"){
        
        source.push(token)
    }
}
console.log(source)

function Expression(source){
    if(source[0].type=="AdditiveExpression"&&source[1]&&source[1].type ==="EOF"){
        let node = {
            type:"Expression",
            children:[source.shift(),source.shift()]
        }
        source.unshift(node)
        return node
    }
    AdditiveExpression(source)
    return Expression(source)
}
function AdditiveExpression(source){
    if(source[0].type ==="MultiplicativeExpression"){
        let node={
            type:"AdditiveExpression",
            children:[source[0]]
        }
        source[0]=node
        return AdditiveExpression(source)
    }
    if(source[0].type==="AdditiveExpression"&&source[1]&&source[1].type =="+"){
        let node = {
            type:"AdditiveExpression",
            operator:"+",
            children:[]
        }
        node.children.push(source.shift())
        node.children.push(source.shift())
        MultiplicativeExpression(source)
        node.children.push(source.shift())
        source.unshift(node)
        return AdditiveExpression(source)
    }
    if(source[0].type==="AdditiveExpression"&&source[1]&&source[1].type =="-"){
        let node = {
            type:"AdditiveExpression",
            operator:"-",
            children:[]
        }
        node.children.push(source.shift())
        node.children.push(source.shift())
        MultiplicativeExpression(source)
        node.children.push(source.shift())
        source.unshift(node)
        return AdditiveExpression(source)
    }
    if(source[0].type ==="AdditiveExpression"){
        return source[0]
    }
    MultiplicativeExpression(source)
    return AdditiveExpression(source)
}
function MultiplicativeExpression(source){
    if(source[0].type =="Number"){
        let node ={
            type:"MultiplicativeExpression",
            children:[source[0]]
        }
        source[0]=node
        return MultiplicativeExpression(source)
    }
    if(source[0].type=="MultiplicativeExpression"&&source[1]&&source[1].type =="*"){
        let node = {
            type:"MultiplicativeExpression",
            operator:"*",
            children:[]
        }
        node.children.push(source.shift())
        node.children.push(source.shift())
        node.children.push(source.shift())
        source.unshift(node)
        return MultiplicativeExpression(source)
    }
    if(source[0].type=="MultiplicativeExpression"&&source[1]&&source[1].type =="/"){
        let node = {
            type:"MultiplicativeExpression",
            operator:"/",
            children:[]
        }
        node.children.push(source.shift())
        node.children.push(source.shift())
        node.children.push(source.shift())
        source.unshift(node)
        return MultiplicativeExpression(source)
    }
    if(source[0].type=="MultiplicativeExpression"){
        return source[0]
    }
    return MultiplicativeExpression(source)
}
console.log(Expression(source)) 