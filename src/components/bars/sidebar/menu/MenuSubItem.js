// Components
import React, { useContext } from "react";
import PropTypes from "prop-types";
import TasksContext from "../../../../context/TasksContext";
//MUI
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const MenuSubItem = ({ onOpen, list }) => {
  const classes = useStyles();
  const { handleChange } = useContext(TasksContext);
  return (
    <Collapse in={onOpen} timeout={300} unmountOnExit>
      <List component="div" disablePadding>
        {list.map(({ name }, index) => {
          return (
            <ListItem
              key={index}
              button
              className={classes.nested}
              onClick={handleChange(`panel${index}`, false)}
            >
              <ListItemText primary={name} />
            </ListItem>
          );
        })}
      </List>
    </Collapse>
  );
};

MenuSubItem.propTypes = {
  onOpen: PropTypes.bool.isRequired,
};

export default MenuSubItem;
