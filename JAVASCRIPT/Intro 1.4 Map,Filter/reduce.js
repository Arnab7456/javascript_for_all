let arr = [ 12, 80, 40, 20 ]
let arr1 =arr.reduce((ar,ar1)=>
{
        return ar+ar1
})

console.log(arr1)

// reduce meaning is sum of array like arr/2 and other part is sum combination done here

// we don't use any reduce case 
 function findsum(arr){
        let sum =0
        for(let i =0 ; i<arr.length;i++){
                sum += arr[i];
        }
        return sum
 }

 console.log(findsum(arr))