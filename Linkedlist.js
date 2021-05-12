// // 10 -> 20 -> 30

// // const linkedlist = {
// //   head:{
// //     value: 10,
// //     next: {
// //       value: 20,
// //       next: {
// //         value: 30,
// //         next: null
// //       }
// //     }
// //   }
// // }

// class Node{
//   constructor(value){
//     this.value = value,
//     this.next = null;
//   }
// }

// class Linkedlist{
//   constructor(value){
//     this.head = {
//       value: value,
//       next: null
//     }
//     this.tail = this.head;
//     this.length = 1;
//   }

//   append(value){
//     this.newNode = {
//       value: value,
//       next:null
//     }
//     this.tail.next = this.newNode;
//     this.tail = this.newNode;
//     this.length = this.length + 1;
//     return this;
//   }

//   prepand(value)
//   {
//     this.newNode = new Node(value);
//     this.newNode.next = this.head;
//     this.head =  this.newNode;
//     this.length++;
//   }

//   printList()
//   {
//     const arr = [];
//     let currentNode = this.head;
//     while(currentNode !== null)
//     {
//       arr.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return arr;
//   }

//   insert(index, value)
//   {
//     // check params
//     if(index>=this.length){
//       return this.append(value);
//     }

//     const newNode = {
//       value: value,
//       next: null
//     };

//     const leader = this.traverseToIndex(index-1)
//     const holdingPointer = leader.next;
//     leader.next = newNode;
//     newNode.next = holdingPointer;
//     this.length++;
//     return this.printList()
//   }

//   traverseToIndex(index){
//     let counter =0;
//     let currentNode = this.head;
//     while(counter!== index){
//       currentNode = currentNode.next;
//       counter++;
//     }

//     return currentNode;
//   }

//   remove(index){
//     // check params


//     const leader = this.traverseToIndex(index-1);
//     const unwantedNode = leader.next;
//     leader.next = unwantedNode.next;
//     this.length--;
//     return this.printList();
//   }


//   reverse(){
//     if(!this.head.next){
//       return this.head;
//     }
//     let first = this.head;
//     this.tail = this.head;
//     let second = first.next;

//     while(second){
//       const temp = second.next;
//       second.next = first;
//       first = second;
//       second = temp;
//     }
//     this.head.next = null;
//     this.head = first;
//     return this.printList();
//   }

// }

// const myLinkedlist = new Linkedlist(10);
// myLinkedlist.append(20);
// myLinkedlist.append(30);
// myLinkedlist.prepand(5);
// myLinkedlist.insert(200, 99);
// console.log(myLinkedlist.printList());
// myLinkedlist.insert(2, 110);
// console.log(myLinkedlist.printList());
// myLinkedlist.remove(3);
// console.log(myLinkedlist.printList());
// console.log(myLinkedlist.reverse());
// // console.log(myLinkedlist);