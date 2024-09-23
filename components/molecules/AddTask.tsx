import React, { useState } from "react";
import Button from "@/components/atomic/Button";

interface AddTaskProps {
  onAddTask: (label: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask(""); // Clear the input after adding the task
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTask(); // Call the same function that the button uses
    }
  };

  return (
    <div className="flex items-center mt-4 w-1/3 relative">
      <input
        type="text"
        name="addTask"
        className="border border-gray-300 rounded p-2 text-gray-900 dark:text-gray-300 w-full pr-24"
        placeholder="Enter new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyDown} // Trigger task add on Enter key press
      />
      <div className="absolute right-1 top-1/2 transform -translate-y-1/2">
        <Button variant="primary" size="small" onClick={handleAddTask}>
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default AddTask;
