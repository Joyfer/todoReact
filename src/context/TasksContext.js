import { createContext, useState } from "react";

const TasksContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      category: "Programacion",
      list: [
        {
          id: "121",
          name: "hola",
          description: "asdasdasdada",
          miniTasks: ["rodeo"],
        },
      ],
    },
  ]);

  const addNewMiniTask = ({ name, idCallback }) => {
    let element = tasks[category].list.findIndex((el) => el.id === idCallback),
      newArray = [...tasks];
    newArray[category].list[element].miniTasks.push(name);
    setTasks(newArray);
  };

  const deleteMiniTask = ({ index, idCallback }) => {
    let element = tasks[category].list.findIndex((el) => el.id === idCallback),
      newArray = [...tasks];
    newArray[category].list[element].miniTasks.splice(index, 1);
    setTasks(newArray);
  };

  const [category, setCategory] = useState(0);

  const changeCategory = (category) => {
    let myIndexCategory = tasks.findIndex((el) => el.category === category);
    setCategory(myIndexCategory);
  };

  const data = {
    tasks,
    addNewMiniTask,
    deleteMiniTask,
    category,
    changeCategory,
  };

  return <TasksContext.Provider value={data}>{children}</TasksContext.Provider>;
};

export { TaskProvider };
export default TasksContext;
