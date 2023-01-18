/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PixIcon from "@mui/icons-material/Pix";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import {
  Typography,
  Card,
  CardContent,
  Button,
  CardMedia,
  Modal,
  Box,
} from "@material-ui/core";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

// @material-ui/icons
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// core components
import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

const styleModal = {
  position: "absolute",
  top: "50%",
  flexDirection: "column",
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
}

const CreditCard = () => {
  window.location = "https://link.pagar.me/lB19tTR2Kj"
}

export default function SectionDownload() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Typography
        style={{
          color: "white",
          fontSize: "32px",
          textAlign: "center",
          paddingBottom: "20px",
        }}
      >
        FAÇA SUA INSCRIÇÃO AGORA
      </Typography>
      <div className={classes.container}>
        <GridContainer spacing={5}>
          <GridItem xs={12} sm={12} md={4}>
            <Card
              style={{
                backgroundColor: "transparent",
                borderRadius: "27px",
                border: "3px solid #FFD700",
              }}
            >
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
                  Happy Hour
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
                <CardMedia
                  style={{ borderRadius: "20px" }}
                  component="img"
                  alt="green iguana"
                  height="200"
                  image="/img/FOTO-FUNDO-MISSAO (1).jpg"
                />
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
                  <CheckCircleIcon
                    fontSize="small"
                    className={classes.icon}
                  />{" "}
                  Pagamento 100% seguro <br />
                  <p></p>
                  <CheckCircleIcon fontSize="small" className={classes.icon} />
                  Parcelamento em até 10x <br />
                  <p></p>
                  <CheckCircleIcon fontSize="small" className={classes.icon} />
                  Desconto no pix <br />
                  <p></p>
                  <hr />
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
            onClick={handleOpen}
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
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styleModal}>
              <Typography style={{textAlign: "center", paddingBottom: "20px"}}>
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
                  <Card onClick={CreditCard} style={{cursor: "pointer"}} variant="elevation" sx={{ maxWidth: 345 }}>
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
