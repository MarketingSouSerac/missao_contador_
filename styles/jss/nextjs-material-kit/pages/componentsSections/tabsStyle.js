import { container } from "/styles/jss/nextjs-material-kit.js";

const tabsStyle = {
  section: {
    background: "#211a19",
    padding: "70px 0",
  },
  container,
  textCenter: {
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom: "30px",
  },
  icon: {
    height: "400px",
    width: "70px",
    marginLeft: "20px",
    color: "white",
  },
  Button: {
    marginLeft: `@media and screen (max-width: 800px){
      marginLeft: '500px'
    }`,
    height: "80px",
    borderRadius: "17px",
    fontSize: "22px",
    width: "280px",
    background: "#800000",
    color: "white",
  },
  card: {
    background: "linear-gradient(to top, #800000 0%, #211a19 100%)",
    borderRadius: "27px",
  },
  img: {
    padding: "10px",
  },
};

export default tabsStyle;
