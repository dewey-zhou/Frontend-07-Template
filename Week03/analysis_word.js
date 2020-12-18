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
// console.log(tokenize("1024 + 10 * 25"))
for(let token of tokenize("1024 + 10 * 25")){
    console.log(token)
}