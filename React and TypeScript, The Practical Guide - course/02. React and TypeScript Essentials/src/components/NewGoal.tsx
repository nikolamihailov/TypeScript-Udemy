import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, goalDesc: string) => void;
};
function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const goalDesc = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredGoalDesc = goalDesc.current!.value;
    onAddGoal(enteredGoal, enteredGoalDesc);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal:</label>
        <input type="text" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="desc">Goal description:</label>
        <input type="text" id="desc" ref={goalDesc} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

export default NewGoal;
