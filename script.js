const nemo = ['Nemo'];
function findNemo(array)
{
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
}

