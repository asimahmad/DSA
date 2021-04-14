// Try to modelarize the code ( have differents function for different operation).


// const nemo = ['Nemo'];
// const everyone = ['Asim', 'Nitish', 'Aakash', 'Ankit'];
// const large = new Array(10000).fill('Nemo');

// function findNemo(array)
// {
//   let t0= performance.now();
//   for (let i=0; i<array.length; i++)
//   {
//     if(array[i] === 'Nemo')
//     {
//       console.log('Found nemo');
//     }
//     else
//     {
//       console.log('Not found');
//     }
//   }
//   let t1= performance.now();
//   console.log('Time: '+ (t1-t0));
// }

// findNemo(large);
// //findNemo(everyone);
// const boxes = [0,1,2,3,4,5];

// function logFirstTwoBoxes(boxes)
// {
//   console.log(boxes[0]);
//   console.log(boxes[1]);
// }
// logFirstTwoBoxes(boxes);

// function func(input)
// {
//   let a = 10;
//   a = 50+3;
//   for(let i = 0; i<input.length; i++)
//   {
//     anotherFunction();
//     let stranger = true;
//     a++;
//   }
//   return a;
// }
// func();

// Math.floor(input.length/2); gives the whole number


// check if array1 is having something same as array2.

// const array1 = ['a', 'b', 'c'];
// const array2 = ['x', 'y', 'z'];

 // 2 inputs (arrays) // no size limit
 // return true and false
 // brute force: O(n^2);
 // O(1): space complexity.

 //use hash table

// const array1 = ['a', 'b', 'c'];
// const array2 = ['x', 'y', 'z', 'a'];

// array1 ==> obj {
  // a: true,
  // b: true,
  // c: true,
  // x: true
//}

// array2[index] === obj.properties

// function containsCommonItems(arr1, arr2)
// {
//   // loop through first array and create object where properties === items in the array
//   let map = {};
//   for (let i=0; i<arr1.length; i++)
//   {
//     if(!map[arr1[i]])
//     {
//       const item = arr1[i];
//       map[item] = true;
//     }
//   }
//   console.log(map);

//   //loop through second array and check if item in second array exists on created object.


//   for(let j=0; j<arr2.length; j++)
//   {
//     if(map[arr2[j]])
//     return true;
//   }
//   return false;
// } // O(n): time complexity.
//   // O(size1): Space complexity.
// console.log(containsCommonItems(array1, array2));



// // Using java script inbuild function.

// function containsCommonItems2( arr1, arr2)
// {
//   return arr1.some(item => arr2.includes(item));
// }
// console.log(containsCommonItems2(array1, array2));

// Naive/Brute method
// function hasPairWithSum(arr1, sum)
// {
//   var len = arr1.length;
//   for(let i=0; i<len-1; i++)
//   {
//     for(let j=i;j<len; j++)
//     {
//       if(arr1[1] + arr1[j] === sum)
//       return true;
//     }
//   }
//   return false;
// }

// // Better method
// function hasPairWithSum1(arr1, sum)
// {
//   const mySet = new Set();
//   const len = arr1.length;
//   for ( let i=0; i<len; i++)
//   {
//     if(mySet.has(arr1[i]))
//     {
//       return true;
//     }
//     mySet.add(sum - arr1[i])
//   }
//   return false;
// }


// console.log(hasPairWithSum([1,2,3,4,5],5));
// console.log(hasPairWithSum1([1,2,3,4,5,6,7,8],9));

// Array


// const strings = ['a', 'b', 'c', 'd']; // dynamic array. 
// // 4*4 = 16 bytes of storage.

// //push
// strings.push('e'); // O(1), add the element at last.
// console.log(strings);

// //pop
// strings.pop();  // O(1);
// console.log(strings);

// // Unshift
// strings.unshift('x'); // add at the begining. O(n)
// console.log(strings);

// //splice
// strings.splice(2,0,'Alien'); // 2- index, 0- delete item, 'Alien' add element
// console.log(strings);


// referance type.

// var obj1 = { value: 10};
// var obj2 = obj1;
// var obj3 = { value: 10};
// console.log(obj1===obj2);
// console.log(obj1===obj3);

// // context vs scope.

// function context()
// {
//   let a = 4;
//   console.log(this);
// }
// //context();
// window.context();
// //console.log(this === window)
// console.log( context() === window);


// const object1 = {
//   a: function()
//   {
//     console.log(this); 
// console.log(object1);

// instantiations

// class Player {
//   constructor (name, type)
//   {
//     console.log('Player', this);
//     this.name = name;
//     this.type = type;
//   }
//   introduce(){
//     console.log('Hi I am ${this.name}, I am a ${this.type}');
//   }
// }
// class Wizard extends Player{
//   constructor(name, type)
//   {
//     super(name, type);
//     console.log('Wizard', this);
//   }
//   play()
//   {
//     console.log("Weeeeee I'm a ${this.type}");
//   }
// }
// Wizard wizard1 = new Wizard('Asim', 'Healer');
// Wizard wizard2 = new Wizard('Ankit', 'Dark magic');

//console.log(wizard1);


// // Arrays 
// class myArray{
//   constructor(){
//     this.length = 0;
//     this.data = {};
//   }

//   get(index){
//     return this.data[index];
//   }

//   push(item){
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   pop(){
//     const lastItem = this.data[this.length-1];
//     delete this.data[this.length-1]; // predefine delete
//     this.length--;
//     return lastItem;
//   }

//   delete(index){
//     const item = this.data[index];
//     this.shiftItems(index);

//   }

//   shiftItems(index)
//   {
//     for(let i=0; i<this.length-1; i++)
//     this.data[i] = this.data[i+1];
//     delete this.data[this.length-1];
//     this.length--;
//   }
// }
// const newArray = new myArray();
// // console.log(newArray);
// // console.log(newArray.get(0));
// // console.log(newArray.push('Hi'));
// // console.log(newArray.push('you'));
// // console.log(newArray);
// // console.log(newArray.get(0));
// // console.log(newArray.pop());
// // console.log(newArray);
// // console.log(newArray.get(0));

// newArray.push('Hi');
// newArray.push('you');
// newArray.push('!');
// newArray.delete(0);
// newArray.push('are');
// newArray.push('nice');
// newArray.push('person');
// newArray.delete(1);
// console.log(newArray);

// reverse a string

// function reverseString(str){
//   //let a ={};

//   if(!str || str.length <2 || typeof str !== 'string'){
//     return 'Hmm that is not good.';
//   }
//   for(let i=str.length-1; i>=0;i--)
//   {
//     console.log(str[i]);
//   }
// }

// using built-in methods
// function reverse2(str){
//   return str.split('').reverse().join('');
// }

// // new model styling
// const reverse3 = str => str.split('').reverse().join('');

// console.log(reverse3('Asim'));



// Merge two arrays
// function mergeSortedArrays(array1, array2){
//   const mergedArray = [];
//   let array1Item = array1[0];
//   let array2Item = array2[0];
//   let i = 1;
//   let j = 1;
  
//   //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
//   if(array1.length === 0) {
//     return array2;
//   }
//   if(array2.length === 0) {
//     return array1;
//   }

//   while (array1Item || array2Item){
//    if(array2Item === undefined || array1Item < array2Item){
//      mergedArray.push(array1Item);
//      array1Item = array1[i];
//      i++;
//    }   
//    else {
//      mergedArray.push(array2Item);
//      array2Item = array2[j];
//      j++;
//    }
//   }
//   return mergedArray;
// }

// console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));


// Hash table

// let user ={
//   age: 54,
//   name: 'Kylie',
//   magic: true,
//   scream: function(){
//     console.log('aaaahhhhhhhhh!!!!');
//   },
//   // intro(name, designation): function(){
//   //   console.log('Hello I am ' + user + ' ' + designation);
//   // }
// }

// console.log(user.age); //O(1)
// console.log(user.name); //O(1)
// console.log(user.scream()); //O(1)
// user.spell = 'Abra kadara'; //O(1)
// //user.intro('Asim', 'Software Engineer');
// console.log(user); // O(1)


// O(n) for lookup if collisions are there.


