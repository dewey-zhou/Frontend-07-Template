

// function state(str){
//     let found = 0
//     for(var item of str){
//         if(item =='a'){
//             found=1
//         }
//         else if (found==1&& item=='b'){
//             found=2
//         }
//         else if(found==2&&item =='c'){
//             found=3
//         }
//         else if(found==3&&item =='d'){
//             found=4
//         }
//         else if(found==4&&item =='e'){
//             found=5
//         }
//         else if(found==5&&item =='f'){
//             return true
//         }
//         else{found=0}
//     }
//     return false
// }

// //改进
// function state(str){
//     var target = 'abcdef'.split('')
//     var index =0
//     for(var item of str){
//         if(target[index]==item){index++}
//         else{index=0}
//         if(index >=target.length){return true}
//     }
//     return false
// }
// console.log(state('absabcdefss'))

//状态机
function match(str){
    var state = start
    for(var item of str){
        state = state(item)
    }
    return state===end
}

function start(item){
    if(item =='a')return foundA
    else return start
}
function foundA(item){
    if(item =='b')return foundB
    else return start(item)
}
function foundB(item){
    if(item =='c')return foundC
    else return start(item)
}
function foundC(item){
    if(item =='d')return foundD
    else return start(item)
}
function foundD(item){
    if(item =='e')return foundE
    else return start(item)
}
function foundE(item){
    if(item =='f')return end
    else return start(item)
}
function end(item){
    return end
}

console.log(match('ababcdefss'))
