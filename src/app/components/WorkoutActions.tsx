"use client";

import { useState } from "react";
import { Workout } from "../types/workout";
import { useFitLog } from "./FitLogProvider";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const { addToPlan, saveWorkout } = useFitLog();
  const [message, setMessage] = useState("");

  function handleAddToPlan() {
    addToPlan(workout);
    setMessage("Added to today's plan");
  }

  function handleSave() {
    saveWorkout(workout);
    setMessage("Saved for later");
  }

  return (
    <div className="mt-8">
      <div className="flex gap-3">
        <button
          onClick={handleAddToPlan}
          className="flex-1 bg-[#ccff00] px-5 py-3 text-sm font-bold uppercase text-black"
        >
          Add to Today's Plan
        </button>

        <button
          onClick={handleSave}
          className="flex-1 border border-white/20 px-5 py-3 text-sm font-bold uppercase text-white"
        >
          Save for Later
        </button>
      </div>

      {message && (
        <p className="mt-3 text-center text-sm text-[#ccff00]">
          {message}
        </p>
      )}
    </div>
  );
}