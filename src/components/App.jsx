import { useEffect } from "react";
import { Todo } from "./Todo/Todo";


export const App = () => {
  useEffect(() => {
  document.body.style.background = '#DCDCDC'
  })

  return (
<>
<Todo/>
</>
  );
};
