const nemo = ['Nemo'];
const everyone = ['Asim', 'Nitish', 'Aakash' 'Ankit'];
const large = new Array(100).fill('Nemo');

function findNemo(array)
{
  let t0= performance.now();
  for (let i=0; i<array.length; i++)
  {
    if(array[i] === 'Nemo')
    {
      console.log('Found nemo');
    }
    else
    {
      console.log('Not found');
    }
  }
  let t1= performance.now();
  console.log('Time: '+ (t1-t0));
}

findNemo(large);
//findNemo(everyone);

