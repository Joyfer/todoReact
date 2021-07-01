import React from "react";
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
  itemCompleted: {
    color: "white",
    backgroundColor: theme.palette.success.main,
  },
  checkButton: {
    color: theme.palette.success.main,
  },
  deleteButton: {
    color: theme.palette.error.main,
    marginLeft: 15,
  },
}));
const CardHeader = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography>
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
        Aliquam eget maximus est, id dignissim quam.
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Single-line item" />
          <ListItemSecondaryAction>
            <IconButton
              className={classes.checkButton}
              edge="end"
              aria-label="delete"
            >
              <CheckIcon />
            </IconButton>
            <IconButton className={classes.deleteButton} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem disabled className={classes.itemCompleted}>
          <ListItemIcon>
            <CheckIcon className={classes.itemCompleted} />
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
        </ListItem>
      </List>
    </Box>
  );
};

export default CardHeader;
