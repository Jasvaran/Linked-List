class linkedList{
  constructor(head){
    this.head = head || null
  }

  prepend(value){
    let newNode = node(value)
    if (this.head === null){
      return (this.head = newNode)
    }
    newNode.next = this.head
    this.head = newNode
  }

  append(value){
    let newNode = node(value)
    if (!this.head){
      this.head = newNode;
      return this.head
    } else {
      let tail = this.head
      while(tail.next !== null){
        tail = tail.next
      }
      tail.next = newNode
      return this.head
    }
  }

  size() {
    let count = 0
    let node = this.head
    while(node){
      count++
      node = node.next
    }
    return count
  }

  returnFirst(){
    let tmp =  this.head
    if (tmp){
      return tmp
    } else {
      return null
    }
  }

  returnLast() {
    let tmp = this.head
    while(tmp){
      tmp = tmp.next
      if(tmp.next === null){
        return tmp
      }
    }
  }

  atIndex(index){
    let count = 0
    let node = this.head
    if (index === 0){
      return this.head
    }
    while(node){
      count++
      node = node.next
      if (count === index){
        return node
      }
    }
  }


  stringify(){
    let tmp = this.head
    let result = `${tmp.data}-->`
    while(tmp !== null){
      tmp = tmp.next
      if (tmp){       
        result = result.concat(`${tmp.data}-->`)
      }
    }
    if (tmp === null){
      result = result.concat('null')
    }
    console.log(result)
  }


  removeLast(){
    let current = this.head
    let next = current.next
    while(this.head){
      next = next.next
      current = current.next
      if (next.next === null){
        current.next = null
        return current
      }
    }
  }

  contains(value){
    let node = this.head
    while(node){
      if(node.data === value){
        return node
      }
      node = node.next
    }
  }

  find(value){
    let count = 0
    let node = this.head
    while(node){
      if (node.data === value){
        return count
      }
      count++
      node = node.next
    }
    return null
  }

  insertAt(value, index){
    let count = 0
    let current = this.head
    while(current){
      if (count === index - 1) {
        const newNode = node(value)
        current.next = newNode
      }
      current = current.next
      count++
    }
  }

  removeAt(index){
    let current = this.head
    let prev = null
    for (let i = 0; i < index; i++){
      prev = current
      current = current.next
    }
    prev.next = current.next
  }
  
// a --> b --> c --> d --> null

}

const node = (data) => {
  let next = null
  return {data, next}
}

let a = node('a')
let b = node('b')
let c = node('c')
let d = node('d')
a.next = b
b.next = c
c.next = d

let list = new linkedList()
list.head = a
// list.prepend('e')

list.stringify();

