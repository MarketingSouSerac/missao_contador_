import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Header from "/components/Header/Header.js";
import CustomInput from "/components/CustomInput/CustomInput.js";
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SectionNavbars() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.img}>
              <img height="500px" src="/img/00j.png" />
            </div>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.title}></div>

            <Typography style={{ textAlign: "center", color: "white" }}>
              <strong>PERFORMANCE + DINHEIRO + PESSOAS!</strong> <br /> <i>TENHA
              UMA EMPRESA DE SUCESSO!</i> <br />{" "}
              <strong>“NÃO EXISTE CNPJ FORTE COM CPF FRACO!”</strong> <br />
            </Typography>
            <p>    </p>
            <Typography style={{color: "white"}}>
              VENHA TRANSFORMAR A GESTÃO DO SEU NEGÓCIO AO LADO DE UM DOS
              CONTADORES MAIS INFLUENTES DO PAÍS E GRANDES EMPREENDEDORES DE
              SUCESSO. APRENDA QUAIS AS ESTRATÉGIAS ATUAIS QUE ESTÃO DOMINANDO O
              MERCADO PARA VOCÊ AUMENTAR O SEU FATURAMENTO, TER UMA EMPRESA QUE
              NÃO DEPENDA DA SUA ATUAÇÃO PARA CRESCER, INVESTIR E SE POSICIONAR
              NA INTERNET COM MARKETING DIGITAL, FAZER A MELHOR GESTÃO DE
              PESSOAS E AINDA INOVAR COM A TECNOLOGIA E FERRAMENTAS.
            </Typography>
          </GridItem>
        </GridContainer>
        
        </div>
      </div>
  );
}
