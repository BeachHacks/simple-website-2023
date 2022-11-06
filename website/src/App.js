import "./App.css";

import dropDown from "./assets/scrollDownButton.png";
import student from "./assets/icons/student.png";
import earth from "./assets/icons/earth.png";
import clock from "./assets/icons/clock.png";
import folder from "./assets/icons/folder.png";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <body>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <h2>What is BeachHacks?</h2>
        </Grid>
        <Grid item xs={6}>
          <p className="beachhacks-description ">
            BeachHacks is a 24-hour event at California State University, Long
            Beach where students come <br /> together and create technical
            projects. Teams can compete for prizes, connect with industry
            <br />
            sponsors, and participate in workshops.
          </p>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={1}>
          <Card>
            <CardContent>
              <img src={student} alt="student icon" />
              <Typography>700+ Students</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card>
            <CardContent>
              <img src={earth} alt="earth icon" />
              <Typography>10+ Countries</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card>
            <CardContent>
              <img src={clock} alt="clock icon" />
              <Typography>144+ Hours</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card>
            <CardContent>
              <img src={folder} alt="foldericon" />
              <Typography>120+ Projects</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </body>
  );
}

export default App;
