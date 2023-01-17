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

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/completedStyle.js";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function SectionJhonny() {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundImage: "url('/img/JHONNY-FOTO-10.png')",
      }}
      className={classes.section}
    >
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <div className={classes.title}>
              <h3 style={{ color: "white", textAlign: "center" }}>
                <strong>
                  SEU MENTOR: QUEM É E POR QUAL MOTIVO APRENDER COM JHONNY
                  MARTINS
                </strong>
              </h3>
            </div>

            <div>
              <Typography style={{ color: "white", marginLeft: "30px" }}>
                <strong>
                  Jhonny Martins é hoje um dos contadores mais influentes do
                  país que conquitstou clientes renomados e grandes
                  personalidades. É responsável por estruturar empresas de todos
                  os segmentos e tamanhos, podendo ensinar o caminho certo para o
                  seu negócio com conceitos e ferramentas inovadoras com uma
                  visão ampla e estratégia de mercado.
                </strong>
                <p> </p>
                Possui clientes reconhecidos como XP, Loggi, Sorridents, Mundial
                Calçados e grandes personalidades como: Thiago Nigro, Joel Jota,
                Flávio Augusto, Caio Carneiro, Boca Rosa, Tiago TCAR, Bruno e
                Malu Perini, entre outros. Jhonny Martins é atualmente
                vice-presidente do SERAC, contador e advogado pela PUC-SP com
                especialização em Direito do Trabalho pela Faculdade de Direito
                Damásio de Jesus, com MBA em Gestão Empresarial pela FGV-SP e
                MBA em Gestão Tributária pela USP.
                <p> </p>
                
              </Typography>
            </div>
          </GridItem>
          <GridItem xs={8} sm={8} md={6}></GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
