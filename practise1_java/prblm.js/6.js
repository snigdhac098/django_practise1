var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const friend=(array) =>
{
    let big_name=array[4];

    for(let i=0;i<array.length;i++)
    {
        const element=array[i];
        if(array[i].length == big_name.length)
        {
            big_name=element;
        }
    }
    return big_name;
}

const result=friend(friends)
console.log(result);