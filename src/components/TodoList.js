import React, { useState } from 'react'; // Import React and the useState hook

const TodoList = () => {
  const [tasks, setTasks] = useState([]); // State to store the list of tasks
  const [task, setTask] = useState(''); // State to store the current task input

  // Function to add a new task
  const handleAddTask = () => {
    if (task.trim()) { // Check if the task is not empty
      setTasks([...tasks, task]); // Add the new task to the tasks array
      setTask(''); // Clear the input field
    }
  };

  // Function to remove a task
  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Filter out the task by index
    setTasks(newTasks); // Update the tasks state
  };

  return (
    <div className="container">
      <h1 className="mt-5">To-Do List</h1>
      <div className="input-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new task"
          value={task} // Set the input value from the task state
          onChange={(e) => setTask(e.target.value)} // Update the task state as the user types
        />
        <button className="btn btn-primary" onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {task}
            <button className="btn btn-danger btn-sm" onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList; // Export the TodoList component as the default export
