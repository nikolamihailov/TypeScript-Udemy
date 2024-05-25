// import { type ReactNode } from "react";
// import { type PropsWithChildren } from "react";

// import { FC } from "react";

// type decorator for import is added so that later when the code is compolid the IDE will know not to import
type CouseGoalProps = {
  title: string;
  description: string;
  // if we use children prop
  // children: ReactNode
};

// type CourseGoalPropsCh = PropsWithChildren<{ title: string }>;

function CourseGoal({ title, description }: CouseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>delete</button>
    </article>
  );
}

/* const CourseGoal: FC<CouseGoalProps> = ({ title, description }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>delete</button>
    </article>
  );
}; */

export default CourseGoal;
