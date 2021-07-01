// MUI
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  sideBar: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "white"
  },
}));

// Function
const SideBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.sideBar}>
      <h1>Sidebar</h1>
    </div>
  );
};

export default SideBar;
