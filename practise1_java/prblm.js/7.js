var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
const check=(array) =>
{
let duplicate=array[0];
let new_array=[];
for (let i=1;i<array.length;i++)
{
    const num=array[i];
    if(num == duplicate)
    {
        new_array.push(num[i]);
    }
}
return new_array;
}
const result=check(numbers);
console.log(result);

   