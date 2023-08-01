/**
 * 
 * 링크드 리스트 만들기
 * 출처 : https://www.freecodecamp.org/korean/news/implementing-a-linked-list-in-javascript/
 * 
 */
const list = {
    head: {
        value: 6,
        next: {
            value: 10,                                        
            next: {
                value: 12,
                next: {
                    value: 3,
                    next: null	
                }
            }
        }
    }
}

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;

console.log(node2);