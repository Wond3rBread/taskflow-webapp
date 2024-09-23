import React, { useState } from "react";
import TaskList from "@/components/molecules/TaskList";
import AddTask from "@/components/molecules/AddTask";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface Task {
  id: string;
  label: string;
  completed: boolean;
}

interface ToDoListProps {
  sectionTitle: string;
}

const Section: React.FC<ToDoListProps> = ({ sectionTitle }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(false); // Toggle for collapsing

  const handleAddTask = (label: string) => {
    const newTask: Task = {
      id: (tasks.length + 1).toString(),
      label,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleTaskToggle = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTask(e.currentTarget.value);
      e.currentTarget.value = ""; // Clear input
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-md shadow-md mb-6">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex items-center justify-between w-full focus:outline-none"
      >
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {sectionTitle}
        </h2>
        <div className="text-gray-500 hover:text-gray-700">
          {isCollapsed ? (
            <ChevronUpIcon className="h-6 w-6 stroke-2" />
          ) : (
            <ChevronDownIcon className="h-6 w-6 stroke-2" />
          )}
        </div>
      </button>

      {/* Collapsible Content with smooth animation */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isCollapsed ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-4">
          <TaskList tasks={tasks} onToggle={handleTaskToggle} />
          <AddTask onAddTask={handleAddTask} />
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            {tasks.filter((task) => task.completed).length} tasks completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
