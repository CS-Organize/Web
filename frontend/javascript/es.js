const sandwich = {
  bread: 'white',
  cheese: 'cheddar',
  veggies: 'lettuce'
}

let {bread: b, cheese: c, veggies: v} = sandwich;

console.log (b, c, v); // white cheddar lettuce

const [,fal] = [true, false];

console.log(fal); // true false
