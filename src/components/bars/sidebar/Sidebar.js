// Components
import React, { useContext } from "react";
import MenuItem from "./menu/MenuItem";
import TasksContext from "../../../context/TasksContext";
// MUI
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "transparent",
    borderColor: "transparent",
    color: "white",
  },
}));
// Function
const SideBar = () => {
  const classes = useStyles();
  const { tasks } = useContext(TasksContext);

  return (
    <List component="nav" className={classes.root}>
      {tasks.map((el) => {
        return (
          <div key={el}>
            <MenuItem data={el} />
          </div>
        );
      })}
    </List>
  );
};

export default SideBar;
