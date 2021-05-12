// // if stack with linkedList
// class Node{
//   constructor(value){
//     this.vaue = value;
//     this.next = null;
//   }
// }

// class Stack{
//   constructor(){
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }

//   peek(){
//     return this.top;
//   }

//   push(value){
//     const newNode = new Node(value);
//     if(this.length===0){
//       this.top = newNode;
//       this.bottom = newNode;
//     }
//     else{
//       const holidingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holidingPointer;
//     }
//     this.length++;

//     return this;
//   }
//   pop(){
//     if(!this.top){
//       return null;
//     }

//     if(this.top === this.bottom){
//       this.bottom = null;
//     }
//     const holidingPointer = this.top;
//     this.top = this.top.next;
//     this.length--;
//     return this;
//   }
// }

// const myStack = new Stack();
// myStack.push("Google");
// myStack.push("Udemy");
// myStack.push("Discord");
// myStack.peek();
// myStack.pop();




// if stack with array


class Stack{
  constructor(){
    this.array = [];
  }

  peek(){
    return this.array[this.array.length-1];
  }

  push(value){
    this.array.push(value);
    return this;
  }

  pop(){
    this.array.pop();
    return this.array;
  }
}

const myStack = new Stack();
myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.peek();
myStack.pop();