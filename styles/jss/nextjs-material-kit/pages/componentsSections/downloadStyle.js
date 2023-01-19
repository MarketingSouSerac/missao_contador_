import { container } from "/styles/jss/nextjs-material-kit.js";

const downloadStyle = {
  section: {
    paddingTop: "70px",
    backgroundImage: "url('/img/BACK-3.jpg')",
    backGroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  container,
  textCenter: {
    textAlign: "center"
  },
  icon: {
    color: "#FFD700",
    paddingTop: "2px"
  },
  sharingArea: {
    marginTop: "80px"
  },
  card: {
    background: "linear-gradient(to top, #800000 0%, #211a19 100%)",
    borderRadius: "27px",
    height: "650px",
  },
  icons: {
    height: "400px",
    width: "70px",
    marginLeft: "20px",
    color: "white"
  },
  Button: {
    marginLeft: `@media and screen (max-width: 800px){
      marginLeft: '500px'
    }`,
    height: "100px",
    borderRadius: "17px",
    fontSize: "22px",
    width: "280px",
    background: "#800000",
    color: "white",
  },
  price: {
    fontSize: "55px",
    fontWeight: "bold",
    paddingTop: "50px",
    textAlign: "center",
    color: "#FFD700"
  },
  socials: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    fontSize: "20px",
    marginRight: "4px"
  }
};

export default downloadStyle;
