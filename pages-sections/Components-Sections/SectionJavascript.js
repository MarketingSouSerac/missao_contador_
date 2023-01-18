import React from "react";
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
} from "@material-ui/core";
// @material-ui/icons
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(styles);

export default function SectionJavascript() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Typography
          style={{ color: "white", paddingBottom: "30px" }}
          className={classes.title}
        >
          O MISSÃO CONTADOR FOI PENSADO PARA QUEM:
        </Typography>
        <GridContainer spacing={3}>
          <GridItem xs={12} sm={12} md={4}>
            <Card
              className={classes.card}
              variant="elevation"
              sx={{ maxWidth: 345 }}
            >
              <CardMedia>
                <center>
                  <CheckCircleIcon className={classes.icons} fontSize="large" />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography
                  style={{
                    color: "white",
                    fontSize: "20px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  Aplica o que aprende
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card
              className={classes.card}
              variant="elevation"
              sx={{ maxWidth: 345 }}
            >
              <CardMedia>
                <center>
                  <CheckCircleIcon className={classes.icons} fontSize="large" />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography
                  style={{
                    color: "white",
                    fontSize: "20px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  Se esforça ao Máximo
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card
              className={classes.card}
              variant="elevation"
              sx={{ maxWidth: 345 }}
            >
              <CardMedia>
                <center>
                  <CheckCircleIcon className={classes.icons} fontSize="large" />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography
                  style={{
                    color: "white",
                    fontSize: "20px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  Deseja impulsionar sua carreira
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card
              className={classes.card}
              variant="elevation"
              sx={{ maxWidth: 345 }}
            >
              <CardMedia>
                <center>
                  <CheckCircleIcon className={classes.icons} fontSize="large" />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography
                  style={{
                    color: "white",
                    fontSize: "20px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  Deseja melhorar a gestão de times de alta performance
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card
              className={classes.card}
              variant="elevation"
              sx={{ maxWidth: 345 }}
            >
              <CardMedia>
                <center>
                  <CheckCircleIcon className={classes.icons} fontSize="large" />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography
                  style={{
                    color: "white",
                    fontSize: "20px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  Busca aumentar o faturamento e o lucro da sua empresa
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card
              className={classes.card}
              variant="elevation"
              sx={{ maxWidth: 345 }}
            >
              <CardMedia>
                <center>
                  <CheckCircleIcon className={classes.icons} fontSize="large" />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography
                  style={{
                    color: "white",
                    fontSize: "20px",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  Deseja criar relacionamentos duradouros
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
        </GridContainer>
        <Typography
          style={{
            textAlign: "center",
            paddingTop: "20px",
            fontWeight: "bold",
            color: "white",
            paddingTop: "50px"
          }}
        >
          “O caminho do sucesso não tem fórmulas, mas ele deixa pistas. Modele
          as pessoas de sucesso para chegar mais rápido onde você gostaria de
          chegar”
        </Typography>
      </div>
    </div>
  );
}
