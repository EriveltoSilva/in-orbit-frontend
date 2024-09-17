import { GoalEntity } from "./../types/goals";
export const getPendingGoals = async (): Promise<GoalEntity[]> => {
  const response = await fetch("http://localhost:8000/api/v1/pending-goals", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  const { pending_goals } = await response.json();
  return pending_goals;
};

export const getWeekSummary = async (): Promise<GoalEntity[]> => {
  const response = await fetch("http://localhost:8000/api/v1/pending-goals", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  const { pending_goals } = await response.json();
  return pending_goals;
};
