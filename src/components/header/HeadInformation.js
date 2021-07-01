// Componets
import React from "react";
// MUI
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
  },
}));

const HeadInformation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h3" color="inherit">
          Programación
        </Typography>
        <Box position="relative" display="inline-flex">
          <CircularProgress
            variant="determinate"
            value={45}
            color="secondary"
            size={80}
          />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="caption" component="div" color="inherit">
              30%
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box marginTop={3}>
        <Typography variant="body2" align="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sequi
          natus dolore! Corporis similique dolore iste qui porro perspiciatis
          nam repellendus placeat! Magni illum velit animi sit optio
          consequuntur dolor!
        </Typography>
      </Box>
    </div>
  );
};

export default HeadInformation;
