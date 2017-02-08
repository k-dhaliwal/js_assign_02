let arr=[1,2,3]
function add(b)
{
    return b+2
}
console.log(' first array is')
console.log(arr)
for(let i=0;i<arr.length;i++){
    arr[i]=add(arr[i])
}
console.log('new array is:')
console.log(arr)
    
