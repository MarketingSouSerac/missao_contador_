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
  Button,
  Modal,
  Box,
} from "@material-ui/core";

import PixIcon from "@mui/icons-material/Pix";
import CreditCardIcon from "@mui/icons-material/CreditCard";
// @material-ui/icons
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(styles);

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "20px",
  p: 4,
};

const pix = () => {
  window.location = "https://link.pagar.me/lSynZAA2Fs";
};

const CreditCard = () => {
  window.location = "https://link.pagar.me/lB19tTR2Kj";
};

export default function SectionJavascript() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
            paddingTop: "50px",
          }}
        >
          “O caminho do sucesso não tem fórmulas, mas ele deixa pistas. Modele
          as pessoas de sucesso para chegar mais rápido onde você gostaria de
          chegar”
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <Button
            onClick={handleOpen}
            startIcon={
              <LocalFireDepartmentIcon
                className={classes.icon}
                fontSize="large"
              />
            }
            className={classes.Button}
          >
            FAZER MINHA INSCRIÇÃO
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styleModal}>
              <Typography
                style={{ textAlign: "center", paddingBottom: "20px" }}
              >
                ESCOLHA O MÉTODO DE PAGAMENTO
              </Typography>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <Card
                    onClick={pix}
                    style={{ height: "175px", cursor: "pointer" }}
                    variant="elevation"
                    sx={{ maxWidth: 345 }}
                  >
                    <CardMedia>
                      <center>
                        <PixIcon fontSize="large" />
                      </center>
                    </CardMedia>

                    <CardContent>
                      <Typography style={{ textAlign: "center" }}>
                        Efetuar o pagamento com PIX
                      </Typography>
                    </CardContent>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Card
                    onClick={CreditCard}
                    style={{ cursor: "pointer" }}
                    variant="elevation"
                    sx={{ maxWidth: 345 }}
                  >
                    <CardMedia>
                      <center>
                        <CreditCardIcon fontSize="large" />
                      </center>
                    </CardMedia>

                    <CardContent>
                      <Typography style={{ textAlign: "center" }}>
                        Efetuar o pagamento com Cartão de Crédito
                      </Typography>
                    </CardContent>
                  </Card>
                </GridItem>
              </GridContainer>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}
