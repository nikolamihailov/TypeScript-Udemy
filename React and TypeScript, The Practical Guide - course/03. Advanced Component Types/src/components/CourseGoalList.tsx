import CourseGoal from "./CourseGoal.tsx";
import { type CourseGoal as CGoal } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no course goals yet. Start by adding some.</InfoBox>;
  }

  return (
    <>
      {goals.length >= 4 && (
        <InfoBox mode="warning" severity="high">
          Relax bro, too many goals, take it easy!
        </InfoBox>
      )}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
