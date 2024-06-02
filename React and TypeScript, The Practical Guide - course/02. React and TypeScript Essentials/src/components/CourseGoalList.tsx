import { type CourseGoal as CourseGoalT } from "../types/CourseGoal";
import CourseGoal from "./CourseGoal";

type CourseGoalListProps = {
  goals: CourseGoalT[];
  onDeleteGoal: (id: number) => void;
};

function CourseGoalList({ goals, onDeleteGoal }: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoal
              title={goal.title}
              description={goal.description}
              id={goal.id}
              onDelete={onDeleteGoal}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default CourseGoalList;
