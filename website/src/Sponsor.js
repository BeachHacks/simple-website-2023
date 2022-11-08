import "./styles/App.css";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "@mui/material";

import React from "react";

function Sponsor() {
  return (
    <div className="frame-3">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item>
          <h2>Want to Sponsor Us?</h2>
        </Grid>
        <Grid item>
          <a
            href="https://tinyurl.com/BeachHacks2023-SponsorPacket"
            target="_blank"
            class="button-18"
            role="button"
          >
            Sponsorship Packet
          </a>
        </Grid>
        <Grid
          container
          maxWidth="800px"
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          border="1px solid red"
          mt={10}
        >
          <Grid border="1px solid green" item display="flex">
            <Typography mt={5.8}>
              <MailIcon />
            </Typography>
            <Link
              href="mailto:beachhacks@csulb.acm.org"
              color="inherit"
              target="_blank"
            >
              <h5>beachhacks@csulb.acm.org</h5>
            </Link>
          </Grid>
          <Grid border="1px solid green" item display="flex">
            <Typography mt={5.8}>
              <InstagramIcon />
            </Typography>
            <Link
              href="https://www.instagram.com/beachhackscsulb/?hl=en"
              color="inherit"
              target="_blank"
            >
              <h5>beachhackscsulb</h5>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Sponsor;
