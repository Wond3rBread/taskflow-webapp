"use client";
import React, { useState } from "react";
import ToDoList from "@/components/organisms/Section";
import Button from "@/components/atomic/Button";

const ToDoPage: React.FC = () => {
  const [sections, setSections] = useState<{ id: string; title: string }[]>([]);
  const [newSectionTitle, setNewSectionTitle] = useState("");

  const handleAddSection = () => {
    if (newSectionTitle.trim()) {
      setSections([
        ...sections,
        { id: Date.now().toString(), title: newSectionTitle },
      ]);
      setNewSectionTitle(""); // Clear input after adding section
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddSection();
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Your To-Do Sections</h1>

      <div className="flex items-center mb-6">
        <input
          type="text"
          className="border border-gray-300 rounded p-2 text-gray-900 dark:text-gray-300 w-full mr-4"
          placeholder="Enter section title"
          value={newSectionTitle}
          onChange={(e) => setNewSectionTitle(e.target.value)}
          onKeyDown={handleKeyDown} // Enable Enter key for section creation
        />
        <Button variant="primary" size="medium" onClick={handleAddSection}>
          Add Section
        </Button>
      </div>

      {sections.map((section) => (
        <ToDoList key={section.id} sectionTitle={section.title} />
      ))}
    </div>
  );
};

export default ToDoPage;
