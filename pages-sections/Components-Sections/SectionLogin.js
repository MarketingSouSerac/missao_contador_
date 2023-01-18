import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";
import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "/components/Snackbar/SnackbarContent.js";
import Clearfix from "/components/Clearfix/Clearfix.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/notificationsStyles.js";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SectionNotifications() {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Typography style={{ color: "white", textAlign: "center" }} className={classes.title}>
          ALGUNS DE NOSSOS CLIENTES:
        </Typography>
        <GridContainer style={{display: "flex", justifyContent: "center"}}>
          <GridItem xs={12} sm={12} md={10} className={classes.marginAuto} >
            <Carousel {...settings}>
              <div>
                <img
                  src="/img/JOEL-JOTA.png"
                  alt="First slide"
                  className="slick-image"
                />
              </div>
              <div>
                <img
                  src="/img/TCAR.png"
                  alt="Second slide"
                  className="slick-image"
                />
              </div>
            </Carousel>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
