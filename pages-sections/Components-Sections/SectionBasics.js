import React from "react";
// plugin that creates slider
import Slider from "nouislider";
import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  Grid,
  Modal,
  Button,
  Box,
} from "@material-ui/core";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "/components/Header/Header.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import CustomLinearProgress from "/components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "/components/Pagination/Pagination.js";
import Badge from "/components/Badge/Badge.js";
import PixIcon from "@mui/icons-material/Pix";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

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

export default function SectionBasics() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.title}>
              <Typography
                className={classes.title}
                style={{ color: "white", paddingBottom: "20px" }}
              >
                SUA <strong>MISSÃO CASO ACEITE,</strong> COMEÇA AQUI:
              </Typography>
            </div>

            <Header
              brand={
                <LocationOnOutlinedIcon
                  className={classes.icons}
                  fontSize="large"
                />
              }
              leftLinks={
                <Typography style={{ color: "black", fontSize: "19px" }}>
                  São Paulo - SP
                </Typography>
              }
              color="danger"
            />
          </GridItem>
          <GridItem style={{ paddingTop: "10px" }} xs={12} sm={12} md={6}>
            <div className={classes.title}></div>
            <Header
              brand={
                <DateRangeOutlinedIcon
                  className={classes.icons}
                  fontSize="large"
                />
              }
              leftLinks={
                <Typography style={{ color: "black", fontSize: "19px" }}>
                  19 e 20 de maio <br />
                  08H - Horário de Brasilia
                </Typography>
              }
              color="danger"
            />
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
