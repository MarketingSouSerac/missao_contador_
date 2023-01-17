import { container, title } from "/styles/jss/nextjs-material-kit.js";


const pillsStyle = {
  section: {
    background: "#211a19",
    display: "block",
    width: "100%",
    position: "relative",
    padding: "0"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    paddingTop: "50px",
    width: "70%",
    
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  }
};

export default pillsStyle;
