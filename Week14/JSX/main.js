import {Component,createElement} from './framework.js'

class Carousel extends Component{
    constructor(){
        super()
        this.attributes = {}
    }
    setAttribute(name,value){
        this.attributes[name]=value
    }
    render(){
        this.root =document.createElement("div")
        this.root.classList.add('carousel')
        for(let record of this.attributes.src){
            let child = document.createElement("div")
            child.style.backgroundImage = `url('${record}')`
            this.root.appendChild(child)
        }

        let currentIndex = 0
        setInterval(()=>{
            let children = this.root.children
            let nextIndex = (currentIndex +1)%children.length
            let current = children[currentIndex]
            let next = children[nextIndex]

            next.style.transition = "none"
            next.style.transform = `translateX(${100-nextIndex*100}%)`
            setTimeout(()=>{
                next.style.transition = ""
                current.style.transform=`translateX(${-100-currentIndex*100}%)`
                next.style.transform=`translateX(${-nextIndex*100}%)`
                currentIndex = nextIndex
            },16)
        },3000)
        return  this.root
    }
    mountTo(parent){
        parent.appendChild(this.render())
    }
}
console.log('test')
var d = [
    "https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg",
    "https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg",
    "https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg",
    "https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg",
]
var a =<div><Carousel src ={d}/></div>

//var a = createElement(\"div\", {\n  id: \"a\"\n}, \"a\", createElement(\"span\", null));\ndocument.body.appendChild(a);
// document.body.appendChild(a)
a.mountTo(document.body)

