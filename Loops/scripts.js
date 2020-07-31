function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

let count = 0;
while (count<10) {
  let rng = randomNumber(6);
  document.write(rng+" ");
  count+=1;
}
