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
  Modal,
  Box,
} from "@material-ui/core";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";

import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

import PixIcon from "@mui/icons-material/Pix";
import CreditCardIcon from "@mui/icons-material/CreditCard";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CustomTabs from "/components/CustomTabs/CustomTabs.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js";

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

export default function SectionTabs() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Typography style={{ color: "white" }} className={classes.title}>
          OS 6 MOTIVOS PARA VOCÊ NÃO FICAR DE FORA
        </Typography>
        <GridContainer spacing={2}>
          <GridItem xs={12} sm={12} md={4}>
            <Card
              className={classes.card}
              variant="elevation"
              sx={{ maxWidth: 345 }}
            >
              <CardMedia>
                <center>
                  <img
                    className={classes.img}
                    height="130px"
                    src="/img/mickey-mouse.png"
                  />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography
                  style={{ color: "white" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Entenda o impacto positivo ao desenvolver uma cultura
                  empresarial baseada em grandes empresas
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
                  <img
                    className={classes.img}
                    height="130px"
                    src="/img/network (1) (1).png"
                  />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography
                  style={{ color: "white" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Aprenda a fazer Networking de forma fácil e com retorno
                  garantido
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
                  <img
                    className={classes.img}
                    height="130px"
                    src="/img/teamwork (1) (1).png"
                  />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography
                  style={{ color: "white" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Entenda o impacto positivo ao desenvolver uma cultura
                  empresarial baseada em grandes empresas
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
                  <img
                    className={classes.img}
                    height="130px"
                    src="/img/cyber-security (1) (1).png"
                  />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography
                  style={{ color: "white" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Saiba quais ferramentas e processos mais indicados para seu
                  negocio
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
                  <img
                    className={classes.img}
                    height="130px"
                    src="/img/sms.png"
                  />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography
                  style={{ color: "white" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Acompanhe o crescimento da sua empresa com inovação e
                  segurança
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
                  <img
                    className={classes.img}
                    height="130px"
                    src="/img/ferramentas (1) (1).png"
                  />
                </center>
              </CardMedia>
              <hr />
              <CardContent>
                <Typography
                  style={{ color: "white" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Domine técnicas infalíveis de Marketing Digital com inovação e
                  ideias de mercado
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
        </GridContainer>
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
