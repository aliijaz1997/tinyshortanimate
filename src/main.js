import React from 'react';
import Paper from '@material-ui/core/Paper';
 import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import { colors } from '@material-ui/core';
import useWebAnimations, { shakeY } from "@wellyshen/use-web-animations"
import image from "./pics/freeimg_4355885045freejpg850.jpg";
import image1 from "./pics/cloud-computing-502462262-5ac1130e119fa800371ba0a8.jpg";
import image2 from "./pics/960x0.jpg";
import Typewriter from 'typewriter-effect';
import "./main.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    backgroundColor: "black"
  },
  paper: {
    maxWidth: 1200,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: "black",
  },
  grid1: {
    backgroundColor : "skyblue",
    fontFamily : "Times New Roman",
    // fontWeight : "bold"
    // fontSize: "10rem",
  },
  photo: {
    height: "500px",
    width: "850px", 
}
}));

export default function AutoGridNoWrap() {
  const classes = useStyles();

  const { keyframes, timing } = shakeY;
  const contentUX = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 500,
      duration: 10000,
      iterations: Infinity,
      easing: "ease-in-out",
    },
  });
  const contentHeartbeat = useWebAnimations({
    keyframes,
    timing : {
      ...timing,
      delay:500,
      duration : 10000,
      iterations : Infinity,
      easing : "ease-in-out",
    }
  });


  const contentshake = useWebAnimations({
    keyframes,
    timing : {
      ...timing,
      delay:500,
      duration : 10000,
      iterations : Infinity,
      easing : "ease-in-out",
    }
  });

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2} className = {classes.grid1}>
          <Grid item>
          <img src={image} ref={contentUX.ref} alt= "back"/>

          </Grid>
          <Grid item xs zeroMinWidth  className = "main">
         <div>
         <Typewriter
                  options={{
                    strings: ["We should be very passionate about learning those things which are demanding in the world. In todays world fourth industrial revolution is at its peak. The world is progressing towards automation. Devices are being designed with effortless control such as voice commands or a single touch.Neither technology nor the disruption that comes with it is an exogenous force over which humans have no control. All of us are responsible for guiding its evolution, in the decisions we make on a daily basis as citizens, consumers, and investors. We should thus grasp the opportunity and power we have to shape the Fourth Industrial Revolution and direct it toward a future that reflects our common objectives and values."],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "h1",
                    cursorClassName: "Typewriter__cursor"
                  }}
            />
         </div>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}  className = {classes.grid1}>
          <Grid item>
          <img src={image1} className = {classes.photo} ref = {contentHeartbeat.ref}  alt= "second"/>
          </Grid>
          <Grid item xs  className = "main">
            <Typography >

            <div>
         <Typewriter
                  options={{
                    strings: ["Cloud computing eliminates the capital expense of buying hardware and software and setting up and running on-site datacenters—the racks of servers, the round-the-clock electricity for power and cooling, the IT experts for managing the infrastructure. It adds up fast.The benefits of cloud computing services include the ability to scale elastically. In cloud speak, that means delivering the right amount of IT resources—for example, more or less computing power, storage, bandwidth—right when it is needed and from the right geographic location.The biggest cloud computing services run on a worldwide network of secure datacenters, which are regularly upgraded to the latest generation of fast and efficient computing hardware."],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "h1",
                    cursorClassName: "Typewriter__cursor"
                  }}
            />
         </div>

            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2} className = {classes.grid1}>
          <Grid item>
          <img src={image2} className = {classes.photo} ref = {contentshake.ref} alt= "third"/>
          </Grid>
          <Grid item xs  className = "main">
            <Typography>

            <div>
         <Typewriter
                  options={{
                    strings: ["When most people hear the term artificial intelligence, the first thing they usually think of is robots. That's because big-budget films and novels weave stories about human-like machines that wreak havoc on Earth. But nothing could be further from the truth. Artificial intelligence is based on the principle that human intelligence can be defined in a way that a machine can easily mimic it and execute tasks, from the most simple to those that are even more complex. The goals of artificial intelligence include learning, reasoning, and perception.  As technology advances, previous benchmarks that defined artificial intelligence become outdated. "],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "h1",
                    cursorClassName: "Typewriter__cursor"
                  }}
            />
         </div>

            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}