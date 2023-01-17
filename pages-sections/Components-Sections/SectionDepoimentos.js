import React from "react";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { Typography, Card, CardMedia, CardContent } from "@material-ui/core";

import FaceIcon from "@mui/icons-material/Face";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import Face3Icon from "@mui/icons-material/Face3";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Typography style={{ color: "white", textAlign: "center", paddingBottom: "20px", fontSize: "22px" }} className={classes.title}>
        DEPOIMENTOS
      </Typography>
      <div className={classes.container}>
        <GridContainer spacing={3}>
          <GridItem xs={12} sm={12} md={4}>
            <Card
              className={classes.card}
              variant="elevation"
              sx={{ maxWidth: 345 }}
            >
              <CardMedia>
                <center>
                  <img
                    src="/img/kaikevin.png"
                    style={{ paddingTop: "20px" }}
                    height="130px"
                    className={classes.img}
                  />
                </center>
              </CardMedia>

              <CardContent>
                <Typography
                  style={{ color: "white", fontSize: "17px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  O MISSÃO CONTADOR me trouxe diversos insights e muito
                  networking com pessoas de mesmo objetivo que o meu.
                  Experiência única, onde aprendi a me comportar nas redes
                  sociais, mercado contábil atual, gestão de pessoas e
                  processos, como fechar contratos com celebridades e diversos
                  outros aprendizados. <br /> O evento me deu a visão que eu
                  precisava para o meu negócio e foi essencial para o
                  crescimento da minha empresa onde eu tive diversas viradas de
                  chave, desde então minha empresa cresceu 98,07%. <br />{" "}
                  <p></p>{" "}
                  <strong>Kaique Furlan - KaiKevin Contabilidade</strong>
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
                    src="/img/a7-safe.png"
                    style={{ paddingTop: "20px" }}
                    height="130px"
                    className={classes.img}
                  />
                </center>
              </CardMedia>

              <CardContent>
                <Typography
                  style={{ color: "white", fontSize: "17px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Uma honra ser Membro Fundador, estou presente em todos e levo
                  sempre meus líderes. Somos um escritório com pouco mais de 2
                  anos, onde: <br /> • Saímos de 60 mil por mês e hoje faturamos
                  em torno de 200 mil por mês; <br /> • Saímos de 11
                  colaboradores, hoje temos em média de 30; <br /> • Conseguimos
                  implantar nosso Mkt e comercial; <br /> • Aumento do
                  Networking; <br /> • Implantamos nosso Ecossistema de produtos
                  e vários outros ganhos. <br /> É claro, no próximo MISSÃO,
                  estaremos em peso novamente. <p></p>
                  <strong>Samuel Modesto - A7 Safe Contabilidade</strong>
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
                    src="/img/META.png"
                    style={{ paddingTop: "20px" }}
                    height="130px"
                    className={classes.img}
                  />
                </center>
              </CardMedia>

              <CardContent>
                <Typography
                  style={{ color: "white", fontSize: "17px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Participamos do 1° MISSÃO CONTADOR e desde então estamos em
                  todas as edições. Entendemos que é um grande capacitador de
                  equipe, de conhecimento do que já é validado dentro do mercado
                  contábil. <br /> Lá conseguimos visualizar aspectos de
                  marketing. tecnologia, operações de RH, máquina de vendas e
                  comercial. <br /> O MISSÃO é sem dúvida um grande aprendizado
                  e uma validação do que a gente entende por caminho dentro do
                  mercado contábil. <br /> <p></p>
                  <strong>Marcio Goulart - Meta assessoria</strong>
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
                    src="/img/diniz-e-diniz.png"
                    style={{ paddingTop: "20px" }}
                    height="130px"
                    className={classes.img}
                  />
                </center>
              </CardMedia>

              <CardContent>
                <Typography
                  style={{ color: "white", fontSize: "17px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Eu quero começar dizendo do meu sentimento de gratidão pelo
                  SERAC. <br /> Estou na segunda imersão e aprendemos que a
                  gratidão é a semente da abundância. A minha empresa mudou
                  muito, estamos implantando os conhecimentos adquiridos e cada
                  vinda é uma coisa nova, é uma experiência única que só agrega
                  os negócios.
                  <br /> Obrigado SERAC e MISSAO CONTADOR por essa experiência
                  maravilhosa. <br /> <p></p>{" "}
                  <strong>Eduardo Diniz - Diniz e Diniz contabilidade</strong>
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
                    src="/img/NSA-.png"
                    style={{ paddingTop: "20px" }}
                    height="130px"
                    className={classes.img}
                  />
                </center>
              </CardMedia>

              <CardContent>
                <Typography
                  style={{ color: "white", fontSize: "17px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Hoje eu vim aqui pra falar com vocês sobre o MISSÃO CONTADOR,
                  foi literalmente uma virada de chave na minha vida. <br /> Eu
                  sou do interior do Rio de Janeiro e quando voltei da imersão
                  depois daquele bombardeio de conteúdo eu percebi que precisava
                  virar a chave. Então, se você está aí pensando ou está em
                  dúvida, não tenha! <br /> Lá é fundamental para o crescimento
                  da sua empresa e todo mundo deveria participar. <br /> <p></p>{" "}
                  <strong>Nicole Spacek - NSA Contabilidade</strong>
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
                    src="/img/Os-contadores.png"
                    style={{ paddingTop: "20px" }}
                    height="130px"
                    className={classes.img}
                  />
                </center>
              </CardMedia>

              <CardContent>
                <Typography
                  style={{ color: "white", fontSize: "17px" }}
                  variant="body2"
                  color="text.secondary"
                >
                  Depois do MISSÃO CONTADOR tivemos consciência que era
                  necessário sair do operacional e abrir nossa sede, também
                  percebemos que era essencial ter uma visão clara e uma cultura
                  forte para se destacar no mercado da contabilidade. <br /> As
                  orientações que recebemos sobre relacionamento e vendas,
                  transformou a forma que realizamos nossa abordagem, propostas
                  e estratégias de marketing. <br /> Foi transformador,
                  realmente um divisor de águas em nossa empresa. <br /> <p></p>{" "}
                  <strong>Juliano Topan - Os contadores</strong>
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
