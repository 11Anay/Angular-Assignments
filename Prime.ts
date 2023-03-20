// Assingment 1 - Q4

function ChkPrime(No1 : number) : boolean
{
    if(No1 === 1)
    {
        return false;
    }
    else if(No1 === 2)
    {
        return true;
    }
    else
    {
        for(var i = 2; i < No1; i++)
        {
            if(No1 % i === 0)
            {
                return false;
            }
        }
        return true;
    }
}

console.log(ChkPrime(11));