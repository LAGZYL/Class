//call back

function greet(name, callback){
    console.log(`hello ${name}`);
    callback();
}

function goodbye() {
    console.log("goodbye");
}

greet("rita", goodbye);

console.log("Start");

// Simulating async tasks with setTimeout
setTimeout(() => {
  console.log("1️ Task 1 complete");

  setTimeout(() => {
    console.log("2️ Task 2 complete");

    setTimeout(() => {
      console.log("3️ Task 3 complete");

      setTimeout(() => {
        console.log("4️ Task 4 complete");
        console.log("All tasks done!");
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);


console.log("Start");


// Example 2: Callback hell with event-based simulation
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    callback("Data fetched successfully");
  }, 1500);
}

function processData(data, callback) {
  console.log("Processing: " + data);
  setTimeout(() => {
    callback("Data processed");
  }, 1500);
}

fetchData(result => {
  console.log(result);
  processData(result, processed => {
    console.log(processed);
    setTimeout(() => {
      console.log("Final step complete");
    }, 1000);
  });
});
