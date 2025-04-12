//How can I run tasks based on a given concurrency, ensuring that when one task finishes, another task starts?
function createTaskManager(concurrency = 2) {
    let running = 0;
    const queue = [];
  
    function runNext() {
      if (running >= concurrency || queue.length === 0) return;
  
      const taskFn = queue.shift();
      running++;
  
      taskFn()
        .then(() => {
          // Task completed
        })
        .catch(err => {
          console.error('Task error:', err);
        })
        .finally(() => {
          running--;
          runNext(); // Start next task after one finishes
          runNext(); // Start more if slots are available
        });
    }
  
    function add(taskFn) {
      queue.push(taskFn);
      runNext();
    }
  
    function addMultiple(tasks) {
      tasks.forEach(task => add(task));
    }
  
    return { add, addMultiple };
  }
  
  // Example usage
  const delayTask = (name, delay) => () =>
    new Promise(resolve => {
      console.log(`Starting ${name}`);
      setTimeout(() => {
        console.log(`Finished ${name}`);
        resolve();
      }, delay);
    });
  
  const tasks = [
    delayTask("Task 1", 1000),
    delayTask("Task 2", 1500),
    delayTask("Task 3", 500),
    delayTask("Task 4", 2000),
    delayTask("Task 5", 800),
  ];
  
  const manager = createTaskManager(2);
  manager.addMultiple(tasks);
  