function checkPrime(num){
for(let i=1; i<=num; i++){
if(num%i){
return true;
}
}
checkPrime(13);