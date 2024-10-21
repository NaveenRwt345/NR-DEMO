// Find the sum of all multiples of 3 or 5 below 1000.

function multiply (limit)
{
    let sum = 0;
    for (let i=1;i<limit;i++)
    {
        if(i%3==0 || i%5==0)
        {
            sum = sum + i;
        }
    }
    return sum;
}
const result = multiply(1000);
console.log("The sum of all multiples of 3 or 5 is:" + result);



// Create a function to find the sum of all the multiples of a or b below n.
(a,b,n) are function parameters

function multiply1(a,b,n)
{
    let sum = 0;
    for (let i=1; i<n; i++)
    {
        if(i%a==0 || i%b==0)
        {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(multiply1(3,5,1000));

//  Allow the user to enter the parameters via text box(es)
and alert them to the output

