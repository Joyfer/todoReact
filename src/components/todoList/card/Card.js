import React, { useContext } from "react";
import CardBody from "./CardBody";
import AddForm from "../input/AddForm";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TasksContext from "../../../context/TasksContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    margin: "auto 0",
  },
  card: {
    backgroundColor: theme.palette.info.main,
    color: "white",
    marginBottom: 5,
    borderRadius: 3,
    border: "none",
    "&:before": {
      border: "none",
    },
  },
  details: {
    display: "block",
  },
  addForm: {
    marginBottom: 10,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const { tasks, addNewTask, expanded, handleChange } = useContext(TasksContext);

  const completedPercentages = (miniTasks) => {
    let completed = miniTasks.filter((el) => el.completed === true);
    return (100 * completed.length) / miniTasks.length;
  };

  return (
    <div className={classes.root}>
      <div className={classes.addForm}>
        <AddForm myFunction={addNewTask} />
      </div>
      {tasks[0].list.map(({ id, name, miniTasks }, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`, true)}
            classes={{
              root: classes.card,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <CircularProgress
                variant="determinate"
                color="secondary"
                value={completedPercentages(miniTasks)}
                size={30}
                style={{ marginRight: 8 }}
              />
              <Typography className={classes.heading}>{name}</Typography>
            </AccordionSummary>
            <AccordionDetails
              classes={{
                root: classes.details,
              }}
            >
              <CardBody
                miniTasks={miniTasks}
                idCallback={id}
              ></CardBody>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
