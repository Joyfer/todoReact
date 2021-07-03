import React, { useState } from "react";
import MenuSubItem from "./MenuSubItem";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "transparent",
    borderColor: "transparent",
    color: "white",
  },
}));

const MenuItem = ({data}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={data.category} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <MenuSubItem onOpen={open} list={data.list} />
    </>
  );
};

export default MenuItem;
