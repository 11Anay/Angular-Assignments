// Assingment 1 - Q5

function fibonacci(No: number): void 
{
    let prev = 0;
    let curr = 1;
    let next = 1;
  
    console.log(prev);
    console.log(curr);
  
    while (next <= No) 
    {
      console.log(next);
      prev = curr;
      curr = next;
      next = prev + curr;
    }
}
  
fibonacci(21);
  