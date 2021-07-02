import React, { useState } from "react";
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

const AddForm = ({ addNewListTask }) => {
  const classes = useStyles();
  const [taskData, setTaskData] = useState("");

  const sendData = () => {
    addNewListTask(taskData);
    setTaskData("")
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <FormControl fullWidth>
          <InputLabel htmlFor="mi-campo">Add</InputLabel>
          <Input
            style={{ color: "white" }}
            id="mi-campo"
            aria-describedby="mi-texto-de-ayuda"
            value={taskData}
            onChange={(e) => setTaskData(e.target.value)}
          />
        </FormControl>
      </Grid>
      <Grid item xs={2} className={classes.gridFlex}>
        <Button fullWidth color="primary" variant="text" onClick={sendData}>
          ADD
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddForm;
