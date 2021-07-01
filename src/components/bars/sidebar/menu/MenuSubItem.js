// Components
import React from "react";
import PropTypes from "prop-types";
//MUI
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { ListItemIcon } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const MenuSubItem = ({ onOpen }) => {
  const classes = useStyles();

  return (
    <Collapse in={onOpen} timeout={300} unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <FiberManualRecordIcon
              fontSize="small"
              style={{ color: "white" }}
            />
          </ListItemIcon>
          <ListItemText primary="Starred" />
        </ListItem>
      </List>
    </Collapse>
  );
};

MenuSubItem.propTypes = {
  onOpen: PropTypes.bool.isRequired,
};

export default MenuSubItem;
