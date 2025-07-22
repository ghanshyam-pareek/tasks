let largest = [12,3,54,188,6,7,54,3,54,8];
// 1...  sum of the array
let sum =0;
for(let value of largest) {
     sum += value; 
}
console.log('Sum of the array', sum); 



// 2.  Biggest number and second-biggest number in the array
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
console.log('Second Biggest Number', secondBig); // Output the second largest number in the array
console.log('Biggest Number', bigNum); 
