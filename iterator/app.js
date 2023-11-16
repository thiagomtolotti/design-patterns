class ListNode{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(head){
        this.head = head
        this.current = null
    }

    /*iterator(){
        this.current = this.head
        return this
    }*/

    next(){
        if(this.current){
            val = this.current.val
            this.current = this.current.next

            return val
        }
    }
}

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)

const myList = new LinkedList(head)

console.log(myList)

let n = head
while(n != null){
    console.log(n.value)
    n = n.next
}