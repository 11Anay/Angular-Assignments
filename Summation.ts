// Assingment 2 - Q2

function Summation(numbers: number[]): number 
{
    let sum: number = 0;
    for (let i = 0; i < numbers.length; i++) 
    {
      sum += numbers[i];
    }
    return sum;
}
  
console.log(Summation([23, 6, 7, 4, 5, 7]));
  