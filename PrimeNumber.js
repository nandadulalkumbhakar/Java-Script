let n=8;
if(n<2)
{
    console.log("Not a Prime number");
    return;
}
for(let i=2;i<=n/2;i++)
{
    if(n%i==0)
    {
        console.log("Not prime number");
        return;
    }
}
console.log("Prime number");