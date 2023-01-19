import { container } from "/styles/jss/nextjs-material-kit.js";

const carouselStyle = {
  section: {
    width: "100%",
    display: "block",
    position: "relative",
    backgroundImage: "url('/img/Background Missão Contador_V1.svg')",
    backgroundSize: "100% 100%",
  },
  Card: {
    borderRadius: "32px",
  },
  img: {
    width: "100%",
    marginRight: `@media and screen(min-width: 800){
      marginRight: '90px'
    }`,
  },
  imgJhonny: {
    width: `@media and screen(max-width: 800px){
      width: '200px',
    }`,
    marginLeft: `@media and screen(min-width: 800px){
      marginLeft: '60px'
    }`,
  },
  video: {
    paddingTop: "20px",
    borderRadius: "20px",
    width: "70%",
  },
  container: {},
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important",
  },
};

export default carouselStyle;
