function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
  console.log('Start');
  await delay(2000); // Pause execution for 2000 milliseconds (2 seconds)
  console.log('End');
}

example();
