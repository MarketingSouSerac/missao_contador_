/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { Typography, Card, CardContent, Button } from "@material-ui/core";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

// @material-ui/icons
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// core components
import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Typography
        style={{
          color: "white",
          fontSize: "32px",
          textAlign: "center",
          paddingBottom: "20px"
        }}
      >
        FAÇA SUA INSCRIÇÃO AGORA
      </Typography>
      <div className={classes.container}>
        <GridContainer spacing={5}>
          <GridItem xs={12} sm={12} md={4}>
            <Card style={{backgroundColor: "transparent", borderRadius: "27px", border: "3px solid"}}>
              <CardContent>
                <Typography
                  style={{
                    color: "white",
                    fontSize: "20px",
                    textAlign: "left",
                    lineHeight: "50px",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  <br />
                  <p></p>
                  <p></p>
                  <CheckCircleIcon fontSize="small" className={classes.icon} />
                  Evento Presencial <br />
                  <p></p>
                  <p></p>
                  <CheckCircleIcon fontSize="small" className={classes.icon} />
                  Welcome Coffe <br />
                  <p></p>
                  <p></p>
                  <CheckCircleIcon fontSize="small" className={classes.icon} />
                  Coffe Break <br />
                  <p></p>
                  <p></p>
                  <CheckCircleIcon fontSize="small" className={classes.icon} />
                  19 e 20 de Maio <br />
                  <p></p>
                  <p></p>
                  <CheckCircleIcon fontSize="small" className={classes.icon} />
                  São Paulo SP <br />
                  <p></p>
                  <p></p>
                  <CheckCircleIcon fontSize="small" className={classes.icon} />
                  Happy Hour Open Bar
                </Typography>
              </CardContent>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={12} md={5}>
            <Card
              className={classes.card}
              variant="elevation"
              sx={{ maxWidth: 345 }}
            >
              <CardContent>
                <Typography
                  style={{
                    color: "white",
                    fontSize: "20px",
                    textAlign: "left",
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  <Typography style={{ textAlign: "center", fontSize: "23px" }}>
                    <strong>LOTE 1</strong>
                  </Typography>{" "}
                  <br />
                  <p></p>
                  Pagamento 100% seguro <br />
                  <p></p>
                  Parcelamento em até 10x <br />
                  <p></p>
                  Desconto no pix <br />
                  <p></p>
                  <strong>
                    Você vai levar tudo isso por apenas R$ 1.197,00 ou em até
                    10x de
                  </strong>{" "}
                  <br />
                  <Typography className={classes.price}> R$ 109,70 </Typography>
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
        </GridContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "100px",
          }}
        >
          <Button
            startIcon={
              <LocalFireDepartmentIcon
                className={classes.icons}
                fontSize="large"
              />
            }
            className={classes.Button}
          >
            FAZER MINHA INSCRIÇÃO
          </Button>
        </div>
      </div>
    </div>
  );
}
