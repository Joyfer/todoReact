import React, { useState } from "react";
import MenuSubItem from "./MenuSubItem";
//MUI
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const MenuItem = ({data}) => {
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
