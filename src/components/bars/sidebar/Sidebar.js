// Components
import MenuItem from "./menu/MenuItem";
// MUI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

// Function
const SideBar = () => {
  const classes = useStyles();

  return (
    <div>
      <MenuItem />
    </div>
  );
};

export default SideBar;
