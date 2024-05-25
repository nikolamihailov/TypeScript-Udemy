import { useState } from "react";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "../public/goals.jpg";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    const newGoal: CourseGoal = {
      id: Math.floor(Math.random() * 10),
      title: "Learn React + TS",
      description: "Learn it in depth",
    };
    setGoals((goals) => [...goals, newGoal]);
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals:</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <CourseGoal title={goal.title} description={goal.description} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
