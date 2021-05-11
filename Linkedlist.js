// 10 -> 20 -> 30

// const linkedlist = {
//   head:{
//     value: 10,
//     next: {
//       value: 20,
//       next: {
//         value: 30,
//         next: null
//       }
//     }
//   }
// }

class Linkedlist{
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value){
    this.newNode = {
      value: value,
      next:null
    }
    this.tail.next = this.newNode;
    this.tail = this.newNode;
    this.length = this.length + 1;
    return this;
  }

  prepand(value)
  {
    this.newNode = {
      value: value,
      //next:this.head   // or 
      next: null
    }
    this.newNode.next = this.head;
    this.head =  this.newNode;
    this.length++;
  }
}

const myLinkedlist = new Linkedlist(10);
myLinkedlist.append(20);
myLinkedlist.append(30);
myLinkedlist.prepand(5);
console.log(myLinkedlist);