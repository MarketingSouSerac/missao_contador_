import { container, title } from "/styles/jss/nextjs-material-kit.js";

const notificationsStyles = {
  section: {
    backgroundImage: "url('/img/BACK-2.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    display: "block",
    height: "100%",
    minHeight: "300px",
    width: "100%",
    position: "relative",
    paddingTop: "20px",
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "36px",
    fontSize: "22px",
    paddingTop: "30px",
    textDecoration: "none",
  },
  container,
};

export default notificationsStyles;
