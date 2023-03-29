class Circle
{
    Radius : number;
    PI : number;

    constructor(Data : number)
    {
        this.Radius = Data;
        this.PI = 3.14;
    }

    Area() : number
    {
        let res : number = 0;
        res = this.PI * this.Radius *this.Radius;
        return res;
    }
}

var obj1 = new Circle(7);
var obj2 = new Circle(11);

var Ret : number = 0;

Ret = obj1.Area();
console.log("Area of a circle of obj1 is : "+Ret);

Ret = obj2.Area();
console.log("Area of a circle of obj2 is : "+Ret);