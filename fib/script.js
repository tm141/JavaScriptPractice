function fib(index) {
  let fibo = new Array(1,1,2);
  if(index>0 && index<4){
    return fibo[index-1];
  }

  for(let i=0;i<index-3;i++){
    let tempVar = fibo[1]+fibo[2];
    fibo.shift(1);
    fibo.push(tempVar);
  }

  console.log(fibo[2]);
}
