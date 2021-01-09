function encodeUtf8 (text){
    const code = encodeURIComponent(text)
    console.log(code)
    const bytes =[]
    for(var i=0;i<code.length;i++){
        const c= code.charAt(i)
        if(c==='%'){
            //取%后面两个字符
            const hex = code.charAt(i+1)+code.charAt(i+2)
            //将十六进制的字符转化成十进制
            const hexVal = parseInt(hex,16)
            bytes.push(hexVal)
            i+=2
        }else bytes.push(c.charCodeAat(0))
    }
    return bytes
}
console.log( encodeUtf8("一"))