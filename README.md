# todo-list
 To to list React js + bootstrap 

---

### Explanation of Components and Functions

#### Imports:
- **useState**: A React hook that allows you to add state to functional components.

#### Initial State:
- `const [tasks, setTasks] = useState([]);`: Initializes the `tasks` state as an empty array.
- `const [task, setTask] = useState('');`: Initializes the `task` state as an empty string.

#### `handleAddTask` Function:
- Checks if the task is not empty using `task.trim()`.
- Adds the new task to the `tasks` state using `setTasks([...tasks, task])`.
- Clears the input field by setting `setTask('')`.

#### `handleRemoveTask` Function:
- Removes the selected task by filtering the `tasks` array based on the index.
- Updates the `tasks` state with the new array without the removed task.

#### Rendering:
- Renders a heading "To-Do List".
- Renders an input field and a button to add tasks.
- Renders the list of tasks, each with a button to remove the task.

This project demonstrates how to create a simple to-do list application using React and Bootstrap, highlighting essential React concepts such as state management and event handling.

## License
This project is licensed under the MIT License. See the LICENSE file for details.



Developed by Iure Castro.
