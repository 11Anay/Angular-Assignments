// Assingment 2 - Q3


function Maximum(numbers: number[]): number 
{
    let largest: number = numbers[0];
    let secondLargest: number = numbers[0];
    for (let i = 1; i < numbers.length; i++) 
    {
      if (numbers[i] > largest) 
      {
        secondLargest = largest;
        largest = numbers[i];
      } 
      else if (numbers[i] > secondLargest && numbers[i] !== largest) 
      {
        secondLargest = numbers[i];
      }
    }
    return secondLargest;
  }
  
console.log(Maximum([23, 89, 6, 29, 56, 45, 77, 32]));  