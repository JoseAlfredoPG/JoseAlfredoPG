/* Return the next higher prime number

   My solution
*/

// function myFunction(a) {
//    let res = a;
//    let primo = true;

//    // if (a === 0 || a === 1 || a === 4) {
//    //    console.log('jajaj');
//    // }

//    for (let i = 2; i < a; i++) {
//       if (a % i == 0) { primo = false; }
//    }

//    if(!primo) {
//       while (primo == false) {
//          a++;
//          primo = true;
//          for (let i = 2; i < a; i++) {
//             if (a % i == 0) 
//             { primo = false; }
//          }
//          if(primo==true){res=a;}

//       }
//    }
//   return res;

// }


// JSchallenger solution\

// function myFunction(a) {
//    function isPrime(num) 
//    {
//       for (let i = 2; i <= Math.sqrt(num); i++) {
//          if (num % i === 0) return false;
//       }
//       return num > 1;
//    }
//    let n = a;
//    while (!isPrime(n)) n++;
//    return n
// }

// console.log(myFunction(38))
// console.log(myFunction(7))
// console.log(myFunction(127))
// console.log(myFunction(2003))


//------------------------------------------------------------------------------------
/* Find next higher natural number that is divisble by y */

// Your solution
// function myFunction(x, y) {
//    if(x%y==0){
//    return x;
//    }
//    else{
//       while(x%y!==0)
//       {x++;}
//       return x;
//    }
// }
// // The author's solution

// function myFunction(x, y) {
//   while (x % y !== 0) x++;
//   return x;
// }


function myFunction(x, y) {
  let cx=x.split('');
  let s=[];
  let con=0;
  for(let i=cx.length-1; i>=0; i--)
  {
    if(con<3)
    {s.push(cx[i]);
      con++;}
    else{
      s.push(cx[i])
      s.push(y)
      con=0;
    }
    
  }
  console.log(s);

}


console.log(myFunction('1234567','.'))
console.log(myFunction('abcde','$'))