import { useState } from "react";
import { type CourseGoal } from "./types/CourseGoal";
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import goalsImg from "../public/goals.jpg";
import NewGoal from "./components/NewGoal";

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, goalDesc: string) {
    const newGoal: CourseGoal = {
      id: Math.floor(Math.random() * 10000),
      title: goal,
      description: goalDesc,
    };
    setGoals((goals) => [...goals, newGoal]);
  }

  function handleDeleteGoal(id: number) {
    setGoals((goals) => goals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals:</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
