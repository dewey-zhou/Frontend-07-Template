export function createElement(type,attribute,...children){
    let element 
    if(typeof type==='string'){
        element=new ElementWrapper(type)
    }else{
        element = new type
    }
    for(var name in attribute){
        element.setAttribute(name,attribute[name])
    }
    for(let child of children){
        if(typeof child === "string"){
            child = new TextWrapper(child)
        }
        element.appendChild(child)
    }
    return element
}
export class Component{
    constructor(){
        
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value)
    }
    appendChild(child){
        child.mountTo(this.root)
    }
    mountTo(parent){
        parent.appendChild(this.root)
    }
}
class ElementWrapper extends Component{
    constructor(type){
        super()
        this.root = document.createElement(type)
    }
    render(){
    //    return this.root
    }

}
class TextWrapper extends Component{
    constructor(content){
        super()
        this.root = document.createTextNode(content)
    }
    render(){
        // return this.root
    }
 
}