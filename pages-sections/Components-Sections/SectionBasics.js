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

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);


export default function SectionBasics() {
  const classes = useStyles();
  
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
        
      </div>
    </div>
  );
}
