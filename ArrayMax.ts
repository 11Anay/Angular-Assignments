// Assingment 2 - Q1

function Maximum1(numbers: number[]): number 
{
    let largest = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) 
    {
      if (numbers[i] > largest)
      {
        largest = numbers[i];
      }
    }
  
    return largest;
}
  
  const numbers = [23, 89, 6, 29, 56, 45, 77, 32];
  const largestNumber = Maximum1(numbers);
  console.log(`The Maximum number is: ${largestNumber}`); 
  