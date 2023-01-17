import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CustomTabs from "/components/CustomTabs/CustomTabs.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Typography style={{color: "white"}} className={classes.title}>
          OS 6 MOTIVOS PARA VOCÊ NÃO FICAR DE FORA
        </Typography>
        <GridContainer spacing={2}>
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes.card} variant="elevation" sx={{ maxWidth: 345 }}>
              <CardMedia>
                <center>
                  <img className={classes.img} height="130px" src="/img/mickey-mouse.png" />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography style={{color: "white"}} variant="body2" color="text.secondary">
                  Entenda o impacto positivo ao desenvolver uma cultura
                  empresarial baseada em grandes empresas
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes.card} variant="elevation" sx={{ maxWidth: 345 }}>
              <CardMedia>
                <center>
                  <img className={classes.img} height="130px" src="/img/network (1) (1).png" />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography style={{color: "white"}} variant="body2" color="text.secondary">
                  Aprenda a fazer Networking de forma fácil e com retorno garantido
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes.card} variant="elevation" sx={{ maxWidth: 345 }}>
              <CardMedia>
                <center>
                  <img className={classes.img} height="130px" src="/img/teamwork (1) (1).png" />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography style={{color: "white"}} variant="body2" color="text.secondary">
                  Entenda o impacto positivo ao desenvolver uma cultura
                  empresarial baseada em grandes empresas
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes.card} variant="elevation" sx={{ maxWidth: 345 }}>
              <CardMedia>
                <center>
                  <img className={classes.img} height="130px" src="/img/cyber-security (1) (1).png" />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography style={{color: "white"}} variant="body2" color="text.secondary">
                  Saiba quais ferramentas e processos mais indicados para seu
                  negocio
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes.card} variant="elevation" sx={{ maxWidth: 345 }}>
              <CardMedia>
                <center>
                  <img className={classes.img} height="130px" src="/img/sms.png" />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography style={{color: "white"}} variant="body2" color="text.secondary">
                  Acompanhe o crescimento da sua empresa com inovação e
                  segurança
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card className={classes.card} variant="elevation" sx={{ maxWidth: 345 }}>
              <CardMedia>
                <center>
                  <img className={classes.img} height="130px" src="/img/ferramentas (1) (1).png" />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography style={{color: "white"}} variant="body2" color="text.secondary">
                  Domine técnicas infalíveis de Marketing Digital com inovação e
                  ideias de mercado
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
