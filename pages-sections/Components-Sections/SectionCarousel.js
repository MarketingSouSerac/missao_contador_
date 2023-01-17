import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Card from "/components/Card/Card.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Typography style={{textAlign: "center", paddingTop: "20px", fontWeight: "bold", color: "white"}}>
          “O caminho do sucesso não tem fórmulas, mas ele deixa pistas. Modele
          as pessoas de sucesso para chegar mais rápido onde você gostaria de
          chegar”
        </Typography>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card className={classes.Card} carousel>
              <Carousel {...settings}>
                <div>
                  <img
                    src="/img/JHONNY 7.png"
                    alt="First slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Missão Contador 2022
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/img/JHONNY FOTO 6.png"
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Missão Contador 2022
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/img/jhonny.png"
                    alt="Third slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Missão Contador 2022
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
