// Components
import React, { useContext } from "react";
import MenuItem from "./menu/MenuItem";
import TasksContext from "../../../context/TasksContext";
import PropTypes from "prop-types";
// MUI
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "transparent",
    borderColor: "transparent",
    color: "white",
  },
  fixed: {
    position: "fixed",
    top: "20px",
  },
}));
// Function
const SideBar = ({ width }) => {
  const classes = useStyles();
  const { tasks } = useContext(TasksContext);

  return (
    <List
      component="nav"
      className={
        width === "md" || width === "sm" || width === "xs" ? classes.root : `${classes.fixed} ${classes.root}`
        }
    >
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

SideBar.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(SideBar);
