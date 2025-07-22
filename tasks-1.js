let largest = [12,3,54,188,6,7,54,3,54,8];
// 1...  sum of the array
let sum =0;
for(let value of largest) {
     sum += value; 
}
console.log('Sum of the array', sum); 



// 2 & 3 Tasks :  Biggest number and second-biggest number in the array
let  bigNum = 0;
for (let i = 0; i < largest.length; i++) {
    if (largest[i] > bigNum) {
        bigNum = largest[i];
       
    } 
}

let  secondBig = 0;
for (let i = 0; i < largest.length; i++) {
    if (largest[i] > bigNum) {
        console.log('big number',bigNum);
        bigNum = largest[i];        
        secondBig = bigNum;
               
    } 
    console.log('sec number',secondBig);
    if (largest[i] > secondBig && largest[i] < bigNum) {
        console.log('second biggest',largest[i]);
        secondBig = largest[i];
    }

}
console.log('Second Biggest Number', secondBig); 
console.log('Biggest Number', bigNum); 


//4-5 : Sum of even and odd numbers in the array
 let  evenTotal = 0;
 for (let i = 0; i < largest.length; i++) {
    if (largest[i] % 2 == 0) { 
      evenTotal  += largest[i]; 
    //console.log('even total' ,evenTotal);
    } 
  }
 console.log('even total' ,evenTotal); 

 let oddTotal = 0;
    for (let i = 0; i < largest.length; i++) {
        if (largest[i] % 2 !== 0) { 
        oddTotal += largest[i];
        console.log('odd totals' ,oddTotal); 
        } 
        
    }
 let oddVal =0;  
 for (let oddValue of largest) {
         if (oddValue % 2 !== 0) {
            oddVal += oddValue;
            console.log('oddtotal',oddVal); // Add to odd total
        }
    }
console.log('for-of-odd value',oddVal);

// 6 Middle value is even or odd
let c = [152,258,545,625,325,123,654,789,456,321];

let even = 0;
for (let i = 0; i < c.length; i++) {
    even = c[i];
    let secondDigit = ((even % 100 - even % 10) / 10);
   if (secondDigit % 2 === 0) {
        console.log('Second digit of', even, 'is', secondDigit);
    } else {
        console.log('Second digit of', even, 'is not even');
    }  
}
