import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Footer from "/components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Parallax from "/components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "/pages-sections/Components-Sections/SectionBasics.js";
import SectionNavbars from "/pages-sections/Components-Sections/SectionNavbars.js";
import SectionTabs from "/pages-sections/Components-Sections/SectionTabs.js";
import SectionPills from "/pages-sections/Components-Sections/SectionPills.js";
import SectionNotifications from "/pages-sections/Components-Sections/SectionNotifications.js";
import SectionTypography from "/pages-sections/Components-Sections/SectionTypography.js";
import SectionJavascript from "/pages-sections/Components-Sections/SectionJavascript.js";
import SectionCarousel from "/pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "/pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionLogin from "/pages-sections/Components-Sections/SectionLogin.js";
import SectionExamples from "/pages-sections/Components-Sections/SectionDepoimentos.js";
import SectionDownload from "/pages-sections/Components-Sections/SectionDownload.js";

import styles from "/styles/jss/nextjs-material-kit/pages/components.js";
import SectionJhonny from "../pages-sections/Components-Sections/SectionCompletedExamples";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <div className={classes.sections} >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <img className={classes.imgJhonny} width="400px" height="600px" src="/img/00J.png"/>
            </GridItem>
            <GridItem style={{marginBottom: "30px"}} xs={12} sm={12} md={6}>
              <div className={classes.brand}>
                <img
                  className={classes.img}
                  width="600px"
                  src="/img/profile-bg.png"
                ></img>
              </div>
              <Typography style={{textAlign: "center", color: "white"}}>
                VENHA TRANSFORMAR A GESTÃO DO SEU NEGÓCIO AO LADO DE UM DOS
                CONTADORES MAIS INFLUENTES DO PAÍS E GRANDES EMPREENDEDORES DE
                SUCESSO
              </Typography>
              <p></p>
              <Typography style={{textAlign: "center", color: "white"}}>
                APRENDA COMO AUMENTAR O SEU FATURAMENTO, INVESTIR EM MARKETING
                DIGITAL, FAZER A MELHOR GESTÃO DE PESSOAS E PROCESSOS E AINDA
                INOVAR COM A TECNOLOGIA
              </Typography>
            </GridItem>
          </GridContainer>
        </div>
      </div>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionJhonny />
        <SectionBasics />
        <SectionTabs />
        <SectionNavbars />
        <SectionNotifications />
        <SectionJavascript />
        <SectionCarousel />
        <SectionPills />
        <SectionExamples />
        <SectionDownload />
      </div>
    </div>
  );
}
