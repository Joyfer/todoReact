import React, { useState, useContext } from "react";
import TasksContext from "../../../context/TasksContext";
// MUI
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  gridFlex: {
    margin: "auto 0",
  },
}));

const AddForm = ({ idCallback, myFunction }) => {
  const classes = useStyles();
  const [taskData, setTaskData] = useState("");

  const runMyFunction = () => {
    if (taskData !== "") {
      myFunction({ data: taskData });
      setTaskData("");
    }
    return;
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <FormControl fullWidth>
          <InputLabel htmlFor={`${idCallback}`}>Add</InputLabel>
          <Input
            style={{ color: "white" }}
            id={`${idCallback}`}
            aria-describedby="mi-texto-de-ayuda"
            value={taskData}
            onChange={(e) => setTaskData(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                runMyFunction();
              }
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={2} className={classes.gridFlex}>
        <Button
          fullWidth
          color="primary"
          variant="text"
          onClick={runMyFunction}
        >
          ADD
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddForm;
