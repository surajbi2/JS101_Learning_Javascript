let a=[1,2,3,4,5];
let sum=0;
let count=0;
for(i=0;i<a.length;i++){
  if(a[i]%2==0){
    sum+=a[i];
    count++;
  }
  
}
console.log(sum/count);