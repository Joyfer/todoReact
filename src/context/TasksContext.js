import { createContext, useState, useEffect } from "react";

const TasksContext = createContext();

const TaskProvider = ({ children }) => {
  useEffect(() => {
    let data = localStorage.getItem("myData");
    if (data === null) {
      return;
    } else {
      setTasks(JSON.parse(data));
    }
  }, []);
  const [tasks, setTasks] = useState([
    {
      category: "Programacion",
      list: [
        {
          id: "121",
          name: "Hi!",
          miniTasks: [{ name: "rodeo", completed: false }],
        },
      ],
    },
  ]);

  const addNewTask = ({ data }) => {
    let newElement = {
        id: `${data + 121}`,
        name: data,
        description: "My custom description",
        miniTasks: [{ name: "My task description", completed: false }],
      },
      newArray = [...tasks];
    newArray[category].list.push(newElement);
    setTasks(newArray);
    localStorage.setItem("myData", JSON.stringify(newArray));
  };

  const deleteTask = ({ idCallback }) => {
    let element = tasks[category].list.findIndex((el) => el.id === idCallback),
      newArray = [...tasks];
    newArray[category].list.splice(element, 1);
    setTasks(newArray);
    localStorage.setItem("myData", JSON.stringify(newArray));
  };

  const addNewMiniTask = ({ name, idCallback }) => {
    let element = tasks[category].list.findIndex((el) => el.id === idCallback),
      newArray = [...tasks];
    newArray[category].list[element].miniTasks.unshift({
      name: name,
      completed: false,
    });
    setTasks(newArray);
    localStorage.setItem("myData", JSON.stringify(newArray));
  };

  const deleteMiniTask = ({ index, idCallback }) => {
    let element = tasks[category].list.findIndex((el) => el.id === idCallback),
      newArray = [...tasks];
    newArray[category].list[element].miniTasks.splice(index, 1);
    setTasks(newArray);
    localStorage.setItem("myData", JSON.stringify(newArray));
  };

  const completedMiniTask = ({ index, idCallback }) => {
    let element = tasks[category].list.findIndex((el) => el.id === idCallback),
      newArray = [...tasks],
      completed = newArray[category].list[element].miniTasks[index];
    newArray[category].list[element].miniTasks.splice(index, 1);
    newArray[category].list[element].miniTasks.push({
      ...completed,
      completed: true,
    });
    setTasks(newArray);
    localStorage.setItem("myData", JSON.stringify(newArray));
  };

  const [category, setCategory] = useState(0);

  const changeCategory = (category) => {
    let myIndexCategory = tasks.findIndex((el) => el.category === category);
    setCategory(myIndexCategory);
  };

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel, isAcorddion) => (event, isExpanded) => {
    if (isAcorddion) {
      setExpanded(isExpanded ? panel : false);
    } else {
      setExpanded(panel);
    }
  };

  const data = {
    tasks,
    addNewMiniTask,
    deleteMiniTask,
    category,
    changeCategory,
    completedMiniTask,
    addNewTask,
    deleteTask,
    expanded,
    handleChange,
    setExpanded,
  };

  return <TasksContext.Provider value={data}>{children}</TasksContext.Provider>;
};

export { TaskProvider };
export default TasksContext;
