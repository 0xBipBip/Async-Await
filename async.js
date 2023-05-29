function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
  console.log('Start');
  await delay(2000); // Pause execution for 2000 milliseconds (2 seconds)
  console.log('End');
}

example();

//In this example, the delay function returns a promise that resolves after the specified 
//number of milliseconds. The example function is defined as an async function. Within this 
//function, the await keyword is used to pause execution for 2000 milliseconds while waiting 
//for the delay promise to resolve. This makes it appear as if the code is synchronous, and 
//the "End" message is logged after the delay.

//Note that the use of await is only valid inside an async function. If you try to use await 
//outside of an async function, you'll encounter a syntax error.
