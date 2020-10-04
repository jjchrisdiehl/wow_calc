const order = false;
const breakfastPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
  if (order) {
    resolve('Order up!');
  } else {
    reject(Error('Order down!'));
  }
             
   }, 3000);
});

console.log(breakfastPromise);
breakfastPromise
  .then(val => console.log(val))
  .catch(err => console.log(err))