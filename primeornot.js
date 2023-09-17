function prime(number)
{
    var flag=0;
    for(let i=2;i<number;i++)
    {
        if(number%i==0)
        {
            flag=1;
        }
    }
    if(flag==1)
    {
        console.log(number+" is not Prime");
    }
    else
    {
        console.log(number+" is Prime");
    }
}

arr=[5,3,6,7,9,21,11];
prime(arr[0]);