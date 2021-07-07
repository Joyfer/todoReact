// Componets
import React, { useContext } from "react";
import TasksContext from "../../context/TasksContext";
// MUI
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    padding: "0 0 20px 0",
  },
}));

const HeadInformation = () => {
  const classes = useStyles();
  const { tasks } = useContext(TasksContext);

  const completedTasks = () => {
    let totalTasks = [],
      completedTasks = [];
    for (let el of tasks[0].list) {
      totalTasks.push(...el.miniTasks);
      completedTasks.push(
        ...el.miniTasks.filter((el) => el.completed === true)
      );
    }
    if (totalTasks.length === 0) {
      return 0;
    } else {
      return Math.round((100 * completedTasks.length) / totalTasks.length);
    }
  };

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h3" color="inherit">
          TODO
        </Typography>
        <Box position="relative" display="inline-flex">
          <CircularProgress
            variant="determinate"
            value={completedTasks()}
            color="secondary"
            size={60}
          />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="caption" component="div" color="inherit">
              {completedTasks()}%
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box marginTop={3}>
        <Typography variant="body2" align="justify">
          Simple TODO with React, Context API and Local Storage!
        </Typography>
      </Box>
    </div>
  );
};

export default HeadInformation;
