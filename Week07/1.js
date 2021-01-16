const HEX_MAp = {
    2:{
        reg:/^(0b)[0-1]+$/g,
        prefix:'0b'
    },
    8:{
        reg:/^(0o)[0-7]+$/g,
        prefix:'0o'
    },
    10:{
        reg:/(^\d+$)|(^\.\d+$)|(^\d+e[\+]\d+$)/g,
        prefix:''
    },
    16:{
        reg:/^(0x)([\da-f])+$/,
        prefix:'0x'
    }
}

const NumToString = (num,hex)=>{
    if(hex in HEX_MAp){
        return HEX_MAp[hex].prefix+num.toString(hex)
    }
    return 'NaN'
}

const StringToNum = (str)=>{
    for(let hex in HEX_MAp){
        const {reg} = HEX_MAp[hex]
        if(reg && reg.test(str)){
            if(hex !=='10'){
                return Number.parseInt(str.slice(2),hex)
            }
            return Number(str)
        }
    }
    return NaN
}

console.log(StringToNum('21'))
console.log(NumToString(23,8))