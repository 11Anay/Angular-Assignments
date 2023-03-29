class Arithmetic
{
    No1 : number;
    No2 : number;

    constructor(X : number, Y : number)
    {
        this.No1 = X;
        this.No2 = Y;
    }

    Addition() : number
    {
        return this.No1 + this.No2;
    }

    Subtraction() : number
    {
        return this.No1 - this.No2;
    }

    Multiplication() : number
    {
        return this.No1 * this.No2;
    }

    Division() : number
    {
        return this.No1 / this.No2;
    }
}

var obj1 = new Arithmetic(21,11);
var obj2 = new Arithmetic(101,51);

var Ret : number = 0;

Ret = obj1.Addition();
console.log("Addition of obj1 is : "+Ret);

Ret = obj1.Subtraction();
console.log("Subtraction of obj1 is : "+Ret);

Ret = obj1.Multiplication();
console.log("Multiplication of obj1 is : "+Ret);

Ret = obj1.Division();
console.log("Division of obj1 is : "+Ret);

Ret = obj2.Addition();
console.log("Addition of obj2 is : "+Ret);

Ret = obj2.Subtraction();
console.log("Subtraction of obj2 is : "+Ret);

Ret = obj2.Multiplication();
console.log("Multiplication of obj2 is : "+Ret);

Ret = obj2.Division();
console.log("Division of obj2 is : "+Ret);