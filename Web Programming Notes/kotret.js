let randomNumber
for (let i = 0; i < 1000; i++) {
  randomNumber = getRndInteger(1,1000000000)
  let result = 9 * randomNumber
  console.log(result)
  while(result > 10) {
    result = result.toString().split("").reduce((t,n) => t + parseInt(n),0)
    console.log(result)
    
  }
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}