import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";
import { makeStyles } from "@mui/styles";
import { LinkedIn, MailOutline } from "@mui/icons-material";
import {
  Box,
  Typography,
  Link
} from "@mui/material";

const useStyles = makeStyles(() => ({
  wrapper: {
    color: "white",
    position: "relative",
    zIndex: 1,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    color: "white"
  }
}));

function App() {
  const classes = useStyles();
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit}/>
      <Box className={classes.wrapper}>
        <Box>
          <Typography variant="h1">Welcome</Typography>
          <Box className={classes.links}>
            <Link href="https://www.linkedin.com/in/bence-dallos/" target="_blank">
              <LinkedIn fontSize="large" className={classes.icon} />
            </Link>
            <Link href="mailto:info@bence-dallos.com" target="_blank">
              <MailOutline fontSize="large" className={classes.icon} />
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
