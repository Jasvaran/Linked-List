
const nodeFactory = (data, next = null) => {
    return {data, next}
}


const linkedListFactory = (head) => {

    function add(value){
        let newNode = nodeFactory(value)
        newNode.next = head
        head = newNode
        return
    }
    return {head, add}
}

let a = nodeFactory('a')
let b = nodeFactory('b')
let c = nodeFactory('c')
let d = nodeFactory('d')
a.next = b
a.next.next = c
a.next.next.next = d


let list = linkedListFactory(a);
console.log(list)

