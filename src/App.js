import React from 'react'; // Import React
import TodoList from './components/TodoList'; // Import the TodoList component

// Define the App component
function App() {
  return (
    <div className="App">
      <TodoList /> {/* Render the TodoList component */}
    </div>
  );
}

export default App; // Export the App component as the default export
