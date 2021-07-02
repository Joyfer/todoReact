import React from "react";
import AddForm from "../input/AddForm";
// MUI
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
  },
  checkButton: {
    color: theme.palette.success.main,
  },
  deleteButton: {
    color: theme.palette.error.main,
    marginLeft: 15,
  },
}));
const CardBody = ({ addTask }) => {
  const classes = useStyles();
  const [listTask, setListTask] = React.useState(["1", "2"]);

  const addNewListTask = (data) => {
    setListTask([...listTask, data]);
  };

  return (
    <Box>
      <Typography style={{ paddingBottom: 8 }}>
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
        Aliquam eget maximus est, id dignissim quam.
      </Typography>
      <AddForm addNewListTask={addNewListTask} />
      <List>
        {listTask.map((el) => {
          return (
            <ListItem key={el}>
              <ListItemText primary={el} />
              <ListItemSecondaryAction>
                <IconButton
                  className={classes.checkButton}
                  edge="end"
                  aria-label="delete"
                >
                  <CheckIcon />
                </IconButton>
                <IconButton
                  className={classes.deleteButton}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
        {/* <ListItem disabled>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText primary="Single-line item" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete" style={{ marginLeft: 15 }}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem> */}
      </List>
    </Box>
  );
};

export default CardBody;
