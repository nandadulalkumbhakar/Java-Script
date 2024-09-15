// in java script has 2 type of variable 
// 1) Global variable(var)
// 2)Local variable/block of variable(const,let)
//  if the variable datatype is 'const' then we need to inicialize during the decralation and we can't change the value of that variable 
var a=10 //Global variable
var b=20
let c=40
d="ram"
console.log(d);
{
    let c=a+b //local variable
    console.log(c);
    console.log("Nanda")
    //const d;// Error, here d is decralation but not inicialize
    const d=10;
    console.log(d);
    let e="nanda"
    console.log(typeof a, typeof(b),typeof c,typeof d,typeof e)

}
console.log(c)
//console.log()
console.log("Hi")
                            //object
let obj={
    name:"nanda",
    roll:147,
    student: true
};
console.log(obj);
console.log(typeof obj)
console.table([a,b,c,d]);