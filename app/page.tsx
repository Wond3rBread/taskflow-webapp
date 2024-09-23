"use client";
import Button from "@/components/atomic/Button";
import RadioButton from "@/components/atomic/Checkbox";
import React, { useState } from "react";

export default function Home() {
  const [taskStatus, setTaskStatus] = useState<string | null>(null);
  const handleRadioChange = (value: string) => {
    // If the selected value is the same as the current one, unmark it
    setTaskStatus((prevStatus) => (prevStatus === value ? null : value));
  };
  return (
    <div className="p-4">
      <Button
        variant="primary"
        size="medium"
        onClick={() => alert("Primary Button Clicked")}
      >
        Primary Button
      </Button>

      <Button
        variant="secondary"
        size="large"
        onClick={() => alert("Secondary Button Clicked")}
        className="ml-4"
      >
        Secondary Button
      </Button>

      <Button variant="outline" size="small" disabled className="ml-4">
        Disabled Outline Button
      </Button>

      
    </div>
  );
}
