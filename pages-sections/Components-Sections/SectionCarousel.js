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
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <div style={{marginLeft: "20px"}} className={classes.imgJhonny}>
              <img height="600px" src="/img/00J.png" />
            </div>
          </GridItem>
          <GridItem style={{ marginBottom: "30px" }} xs={12} sm={12} md={6}>
            <div style={{ marginRight: "40px" }} className={classes.brand}>
              <img
                className={classes.img}
                width="600px"
                src="/img/profile-bg.png"
              ></img>
            </div>
            <Typography
              style={{
                textAlign: "center",
                color: "white",
                paddingRight: "20px"
              }}
            >
              VENHA TRANSFORMAR A GESTÃO DO SEU NEGÓCIO AO LADO DE UM DOS
              CONTADORES MAIS INFLUENTES DO PAÍS E GRANDES EMPREENDEDORES DE
              SUCESSO
            </Typography>
            <p></p>
            <Typography
              style={{
                textAlign: "center",
                color: "white",
                paddingRight: "20px",
              }}
            >
              APRENDA COMO AUMENTAR O SEU FATURAMENTO, INVESTIR EM MARKETING
              DIGITAL, FAZER A MELHOR GESTÃO DE PESSOAS E PROCESSOS E AINDA
              INOVAR COM A TECNOLOGIA
            </Typography>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
