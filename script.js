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

 //use hash table

const array1 = ['a', 'b', 'c'];
const array2 = ['x', 'y', 'z', 'a'];

// array1 ==> obj {
  // a: true,
  // b: true,
  // c: true,
  // x: true
//}

// array2[index] === obj.properties

function containsCommonItems(arr1, arr2)
{
  // loop through first array and create object where properties === items in the array
  let map = {};
  for (let i=0; i<arr1.length; i++)
  {
    if(!map[arr1[i]])
    {
      const item = arr1[i];
      map[item] = true;
    }
  }
  console.log(map);

  //loop through second array and check if item in second array exists on created object.


  for(let j=0; j<arr2.length; j++)
  {
    if(map[arr2[j]])
    return true;
  }
  return false;
}

console.log(containsCommonItems(array1, array2));

