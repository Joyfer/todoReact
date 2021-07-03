import { createContext, useState } from "react";

const TasksContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: "121",
      name: "hola",
      description: "asdasdasdada",
      miniTasks: ["rodeo"],
    },
  ]);

  const addNewMiniTask = ({ name, idCallback }) => {
    let element = tasks.findIndex((el) => el.id === idCallback);
    let newArray = [...tasks];
    newArray[element].miniTasks.push(name);
    setTasks(newArray);
  };

  const deleteMiniTask = ({ index, idCallback }) => {
    let element = tasks.findIndex((el) => el.id === idCallback);
    let newArray = [...tasks];
    newArray[element].miniTasks.splice(index, 1);
    setTasks(newArray);
  };

  const data = { tasks, addNewMiniTask, deleteMiniTask };

  return <TasksContext.Provider value={data}>{children}</TasksContext.Provider>;
}

export { TaskProvider };
export default TasksContext;
