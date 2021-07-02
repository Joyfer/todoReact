import React from "react";
import CardBody from "./CardBody";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [tasks, setTasks] = React.useState(["1", "2"]);

  const addNewTask = (data) => {
    setTasks([...tasks, data]);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {tasks.map((el) => {
        return (
          <Accordion
            key={el}
            expanded={expanded === `panel${el}`}
            onChange={handleChange(`panel${el}`)}
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
                value={100}
                size={30}
                style={{ marginRight: 8 }}
              />
              <Typography className={classes.heading}>
                General settings
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CardBody addTask={addNewTask} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
