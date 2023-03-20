// Assingment 1 - Q3

function DisplayFactors(No1 : number) : void
{
    for(var i = 1; i < No1; i++)
    {
        if(No1 % i == 0)
        {
            console.log(i);
        }
    }
}

DisplayFactors(20)