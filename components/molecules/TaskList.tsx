// TaskList.tsx
import React from "react";
import Checkbox from "@/components/atomic/Checkbox";

interface Task {
  id: string;
  label: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggle: (taskId: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Checkbox
          key={task.id}
          id={task.id}
          label={task.label}
          checked={task.completed}
          labelStyling={
            task.completed
              ? "text-sm font-medium hover:cursor-pointer line-through text-gray-500 dark:text-gray-300"
              : "text-sm font-medium hover:cursor-pointer text-gray-900 dark:text-gray-300"
          }
          onChange={() => onToggle(task.id)}
        />
      ))}
    </>
  );
};

export default TaskList;
